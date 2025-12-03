/**
 * Unit tests for nested component code generation
 * Feature 003: Component Tracking and Code Export - T040e
 */

import { describe, it, expect } from 'vitest';
import { generateReactCode } from '../../../src/utils/code-generators/react';
import { generateReactNativeCode } from '../../../src/utils/code-generators/react-native';
import type { ComponentEntity, ContainerEntity, PageEntity } from '../../../src/utils/types';

describe('Nested Component Code Generation', () => {
  // Create nested structure: Page > Container > Components
  const buttonComponent: ComponentEntity = {
    id: 'btn-1',
    type: 'Button',
    props: { text: 'Submit' },
    tailwindOptions: { classList: ['bg-blue-500', 'text-white', 'px-4', 'py-2'] },
  };

  const textComponent: ComponentEntity = {
    id: 'txt-1',
    type: 'Text',
    props: { text: 'Form Title' },
    tailwindOptions: { classList: ['text-xl', 'font-bold', 'mb-4'] },
  };

  const inputComponent: ComponentEntity = {
    id: 'input-1',
    type: 'Input',
    props: { placeholder: 'Enter name', type: 'text' },
    tailwindOptions: { classList: ['border', 'rounded', 'p-2', 'mb-4'] },
  };

  const formContainer: ContainerEntity = {
    id: 'form-container',
    name: 'Form Container',
    tailwindOptions: { classList: ['bg-white', 'p-6', 'rounded-lg', 'shadow-lg'] },
    children: [textComponent, inputComponent, buttonComponent],
  };

  const headerContainer: ContainerEntity = {
    id: 'header-container',
    name: 'Header Container',
    tailwindOptions: { classList: ['bg-gray-800', 'text-white', 'p-4'] },
    children: [{
      id: 'header-text',
      type: 'Text',
      props: { text: 'My App' },
      tailwindOptions: { classList: ['text-2xl', 'font-bold'] },
    }],
  };

  const mainPage: PageEntity = {
    id: 'main-page',
    name: 'Main Page',
    children: [headerContainer, formContainer],
  };

  const mockPages: PageEntity[] = [mainPage];

  describe('React Nested Generation', () => {
    it('preserves page > container > component hierarchy', () => {
      const code = generateReactCode('Page', 'main-page', mockPages);
      
      // Should contain React import
      expect(code).toContain('import React from \'react\'');
      
      // Should contain page wrapper
      expect(code).toContain('<div className="page-wrapper">');
      expect(code).toContain('</div>');
      
      // Should contain nested containers
      expect(code).toContain('bg-gray-800'); // Header container
      expect(code).toContain('bg-white'); // Form container
      
      // Should contain nested components
      expect(code).toContain('My App'); // Header text
      expect(code).toContain('Form Title'); // Form text
      expect(code).toContain('placeholder="Enter name"'); // Input
      expect(code).toContain('Submit'); // Button
    });

    it('maintains proper indentation for nested elements', () => {
      const code = generateReactCode('Container', 'form-container', mockPages);
      
      // Should have nested structure with proper indentation
      expect(code).toContain('  <p'); // Indented component
      expect(code).toContain('  <input'); // Indented component
      expect(code).toContain('  <button'); // Indented component
    });

    it('generates container with all child components', () => {
      const code = generateReactCode('Container', 'form-container', mockPages);
      
      // Should contain all three child components
      expect(code).toContain('<p'); // Text component
      expect(code).toContain('<input'); // Input component  
      expect(code).toContain('<button'); // Button component
      
      // Should contain all component content
      expect(code).toContain('Form Title');
      expect(code).toContain('placeholder="Enter name"');
      expect(code).toContain('Submit');
    });
  });

  describe('React Native Nested Generation', () => {
    it('preserves page > container > component hierarchy', () => {
      const code = generateReactNativeCode('Page', 'main-page', mockPages);
      
      // Should contain React Native imports
      expect(code).toContain('import React from \'react\'');
      expect(code).toContain('import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, FlatList } from \'react-native\'');
      
      // Should contain SafeAreaView wrapper
      expect(code).toContain('<SafeAreaView');
      expect(code).toContain('</SafeAreaView>');
      
      // Should contain nested Views (containers)
      expect(code).toContain('<View'); // Should have multiple Views
      expect(code).toContain('</View>');
      
      // Should contain nested components
      expect(code).toContain('<Text>My App</Text>'); // Header text
      expect(code).toContain('<Text>Form Title</Text>'); // Form text
      expect(code).toContain('<TextInput'); // Input
      expect(code).toContain('<TouchableOpacity'); // Button
    });

    it('converts all Tailwind classes to React Native styles', () => {
      const code = generateReactNativeCode('Container', 'form-container', mockPages);
      
      // Should contain style objects
      expect(code).toContain('style=');
      
      // Should not contain className (React web only)
      expect(code).not.toContain('className');
    });

    it('uses appropriate React Native components', () => {
      const code = generateReactNativeCode('Container', 'form-container', mockPages);
      
      // Should use RN-specific components
      expect(code).toContain('<Text>'); // Not <p>
      expect(code).toContain('<TextInput'); // Not <input>
      expect(code).toContain('<TouchableOpacity'); // Not <button>
      expect(code).toContain('<View'); // Not <div>
      
      // Should not contain HTML elements
      expect(code).not.toContain('<p>');
      expect(code).not.toContain('<input');
      expect(code).not.toContain('<button');
      expect(code).not.toContain('<div');
    });
  });

  describe('Deep Nesting Scenarios', () => {
    it('handles multiple levels of containers', () => {
      // Create deeper nesting scenario by testing existing structure
      const code = generateReactCode('Page', 'main-page', mockPages);
      
      // Should handle multiple nesting levels (Page > Container > Component)
      expect(code).toContain('<div className="page-wrapper">');
      expect(code).toContain('Submit'); // Button should be nested properly
      expect(code).toContain('My App'); // Header should be nested properly
    });

    it('maintains component hierarchy in large structures', () => {
      // Test with many components
      const manyComponents: ComponentEntity[] = [];
      for (let i = 0; i < 10; i++) {
        manyComponents.push({
          id: `comp-${i}`,
          type: 'Text',
          props: { text: `Item ${i}` },
          tailwindOptions: { classList: ['p-1'] },
        });
      }

      const bigContainer: ContainerEntity = {
        id: 'big-container',
        name: 'Big Container',
        tailwindOptions: { classList: ['space-y-2'] },
        children: manyComponents,
      };

      const bigPage: PageEntity = {
        id: 'big-page',
        name: 'Big Page',
        children: [bigContainer],
      };

      const code = generateReactCode('Container', 'big-container', [bigPage]);
      
      // Should contain all components
      for (let i = 0; i < 10; i++) {
        expect(code).toContain(`Item ${i}`);
      }
    });
  });

  describe('Component Ordering', () => {
    it('maintains component order in containers', () => {
      const code = generateReactCode('Container', 'form-container', mockPages);
      
      // Find positions of each component
      const titlePos = code.indexOf('Form Title');
      const inputPos = code.indexOf('placeholder="Enter name"');
      const buttonPos = code.indexOf('Submit');
      
      // Order should be maintained: Title, Input, Button
      expect(titlePos).toBeLessThan(inputPos);
      expect(inputPos).toBeLessThan(buttonPos);
    });

    it('maintains container order in pages', () => {
      const code = generateReactCode('Page', 'main-page', mockPages);
      
      // Find positions of containers
      const headerPos = code.indexOf('My App');
      const formPos = code.indexOf('Form Title');
      
      // Header should come before form
      expect(headerPos).toBeLessThan(formPos);
    });
  });
});