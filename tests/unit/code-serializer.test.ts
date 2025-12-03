/**
 * Unit tests for code serializers
 * Feature 003: Component Tracking and Code Export - User Story 3
 */

import { describe, it, expect } from 'vitest';
import type { PageEntity, ContainerEntity, ComponentEntity } from '../../src/utils/types';
import { 
  generateComponentCode, 
  generateContainerCodeWithChildren, 
  generatePageCodeWithChildren,
  generateReactCode 
} from '../../src/utils/code-generators/react';
import { 
  generateReactNativeCode,
  generateComponentCodeRN,
  generateContainerCodeWithChildrenRN,
  generatePageCodeWithChildrenRN
} from '../../src/utils/code-generators/react-native';

// Mock data for testing
const mockComponent: ComponentEntity = {
  id: 'comp-1',
  type: 'Button',
  props: { text: 'Click me' },
  tailwindOptions: { classList: ['bg-blue-500', 'text-white', 'px-4', 'py-2'] },
};

const mockContainer: ContainerEntity = {
  id: 'container-1',
  name: 'Main Container',
  tailwindOptions: { classList: ['flex', 'flex-col', 'p-4'] },
  children: [mockComponent],
};

const mockPage: PageEntity = {
  id: 'page-1',
  name: 'Home Page',
  children: [mockContainer],
};

const mockPages: PageEntity[] = [mockPage];

describe('React Code Serializer', () => {
  describe('Component Code Generation', () => {
    it('generates React button component code', () => {
      const code = generateComponentCode(mockComponent, mockPages);
      
      expect(code).toContain('<button');
      expect(code).toContain('Click me');
      expect(code).toContain('className=');
      expect(code).toContain('</button>');
    });

    it('includes Tailwind classes in React components', () => {
      const code = generateComponentCode(mockComponent, mockPages);
      
      expect(code).toContain('bg-blue-500');
      expect(code).toContain('text-white');
      expect(code).toContain('px-4');
      expect(code).toContain('py-2');
    });
  });

  describe('Container Code Generation', () => {
    it('generates React container code with children', () => {
      const code = generateContainerCodeWithChildren(mockContainer, mockPages);
      
      expect(code).toContain('<div');
      expect(code).toContain('</div>');
      expect(code).toContain('<button'); // Should contain child component
      expect(code).toContain('Click me'); // Child component content
    });

    it('preserves container hierarchy', () => {
      const code = generateContainerCodeWithChildren(mockContainer, mockPages);
      
      // Container should wrap child components
      const buttonStart = code.indexOf('<button');
      const divStart = code.indexOf('<div');
      const divEnd = code.lastIndexOf('</div>');
      
      expect(divStart).toBeLessThan(buttonStart);
      expect(buttonStart).toBeLessThan(divEnd);
    });
  });

  describe('Page Code Generation', () => {
    it('generates complete React page code', () => {
      const code = generatePageCodeWithChildren(mockPage, mockPages);
      
      expect(code).toContain('import React');
      expect(code).toContain('<main');
      expect(code).toContain('</main>');
      expect(code).toContain('<div'); // Container
      expect(code).toContain('<button'); // Component
    });

    it('includes React import statement', () => {
      const code = generatePageCodeWithChildren(mockPage, mockPages);
      
      expect(code.startsWith('import React from \'react\';')).toBe(true);
    });

    it('maintains complete hierarchy structure', () => {
      const code = generatePageCodeWithChildren(mockPage, mockPages);
      
      // Should have proper nesting: main > div > button
      expect(code).toMatch(/<main[^>]*>.*<div[^>]*>.*<button[^>]*>.*<\/button>.*<\/div>.*<\/main>/s);
    });
  });

  describe('Entity Type Dispatcher', () => {
    it('handles page entity type', () => {
      const code = generateReactCode('Page', mockPage.id, mockPages);
      
      expect(code).toContain('import React');
      expect(code).toContain('<main');
    });

    it('handles container entity type', () => {
      const code = generateReactCode('Container', mockContainer.id, mockPages);
      
      expect(code).toContain('<div');
      expect(code).toContain('Click me'); // Child component
    });

    it('handles component entity type', () => {
      const code = generateReactCode('Component', mockComponent.id, mockPages);
      
      expect(code).toContain('<button');
      expect(code).toContain('Click me');
    });

    it('returns error for missing entity', () => {
      const code = generateReactCode('Page', 'nonexistent', mockPages);
      
      expect(code).toContain('not found');
    });
  });
});

describe('React Native Code Serializer', () => {
  describe('Component Code Generation', () => {
    it('generates React Native TouchableOpacity code', () => {
      const code = generateComponentCodeRN(mockComponent, mockPages);
      
      expect(code).toContain('<TouchableOpacity');
      expect(code).toContain('<Text>Click me</Text>');
      expect(code).toContain('</TouchableOpacity>');
    });

    it('converts Tailwind to React Native styles', () => {
      const code = generateComponentCodeRN(mockComponent, mockPages);
      
      expect(code).toContain('style={{');
      expect(code).toContain('backgroundColor:');
      expect(code).toContain('paddingHorizontal:');
      expect(code).toContain('paddingVertical:');
    });
  });

  describe('Container Code Generation', () => {
    it('generates React Native View with children', () => {
      const code = generateContainerCodeWithChildrenRN(mockContainer, mockPages);
      
      expect(code).toContain('<View');
      expect(code).toContain('</View>');
      expect(code).toContain('<TouchableOpacity'); // Child component
    });

    it('preserves React Native hierarchy', () => {
      const code = generateContainerCodeWithChildrenRN(mockContainer, mockPages);
      
      // View should wrap child components
      const touchableStart = code.indexOf('<TouchableOpacity');
      const viewStart = code.indexOf('<View');
      const viewEnd = code.lastIndexOf('</View>');
      
      expect(viewStart).toBeLessThan(touchableStart);
      expect(touchableStart).toBeLessThan(viewEnd);
    });
  });

  describe('Page Code Generation', () => {
    it('generates complete React Native page with SafeAreaView', () => {
      const code = generatePageCodeWithChildrenRN(mockPage, mockPages);
      
      expect(code).toContain('import React');
      expect(code).toContain('import {');
      expect(code).toContain('SafeAreaView');
      expect(code).toContain('TouchableOpacity');
      expect(code).toContain('<SafeAreaView');
      expect(code).toContain('</SafeAreaView>');
    });

    it('includes React Native imports', () => {
      const code = generatePageCodeWithChildrenRN(mockPage, mockPages);
      
      expect(code).toContain('import React from \'react\';');
      expect(code).toContain('from \'react-native\';');
    });

    it('maintains SafeAreaView > View > TouchableOpacity hierarchy', () => {
      const code = generatePageCodeWithChildrenRN(mockPage, mockPages);
      
      // Should have proper nesting
      expect(code).toMatch(/<SafeAreaView[^>]*>.*<View[^>]*>.*<TouchableOpacity[^>]*>.*<\/TouchableOpacity>.*<\/View>.*<\/SafeAreaView>/s);
    });
  });

  describe('Style Conversion', () => {
    it('converts Tailwind classes to React Native styles', () => {
      const code = generateComponentCodeRN(mockComponent, mockPages);
      
      // Should convert bg-blue-500 to backgroundColor
      expect(code).toContain('backgroundColor:');
      // Should convert px-4 py-2 to padding values
      expect(code).toContain('paddingHorizontal:');
      expect(code).toContain('paddingVertical:');
    });

    it('uses JSX object syntax for styles', () => {
      const code = generateComponentCodeRN(mockComponent, mockPages);
      
      // Should use {{ }} syntax for React Native styles
      expect(code).toMatch(/style=\{\{[^}]+\}\}/);
    });
  });

  describe('Component Type Mapping', () => {
    it('maps Button to TouchableOpacity', () => {
      const code = generateComponentCodeRN(mockComponent, mockPages);
      
      expect(code).toContain('<TouchableOpacity');
      expect(code).not.toContain('<button'); // Should not contain HTML button
    });

    it('wraps button text in Text component', () => {
      const code = generateComponentCodeRN(mockComponent, mockPages);
      
      expect(code).toContain('<Text>Click me</Text>');
    });
  });

  describe('Entity Type Dispatcher', () => {
    it('handles page entity type', () => {
      const code = generateReactNativeCode('Page', mockPage.id, mockPages);
      
      expect(code).toContain('import React');
      expect(code).toContain('<SafeAreaView');
    });

    it('handles container entity type', () => {
      const code = generateReactNativeCode('Container', mockContainer.id, mockPages);
      
      expect(code).toContain('<View');
      expect(code).toContain('<TouchableOpacity'); // Child component
    });

    it('handles component entity type', () => {
      const code = generateReactNativeCode('Component', mockComponent.id, mockPages);
      
      expect(code).toContain('<TouchableOpacity');
      expect(code).toContain('Click me');
    });

    it('returns error for missing entity', () => {
      const code = generateReactNativeCode('Page', 'nonexistent', mockPages);
      
      expect(code).toContain('not found');
    });
  });
});

describe('Serializer Integration', () => {
  describe('Complex Hierarchy', () => {
    it('serializes complex nested structure correctly', () => {
      const complexPage: PageEntity = {
        id: 'complex-page',
        name: 'Complex Page',
        children: [
          {
            id: 'header-container',
            name: 'Header',
            tailwindOptions: { classList: ['bg-gray-100', 'p-4'] },
            children: [
              {
                id: 'title-text',
                type: 'Text',
                props: { text: 'Welcome' },
                tailwindOptions: { classList: ['text-2xl', 'font-bold'] },
              },
            ],
          },
          {
            id: 'main-container',
            name: 'Main Content',
            tailwindOptions: { classList: ['flex', 'flex-col', 'p-8'] },
            children: [
              {
                id: 'form-input',
                type: 'Input',
                props: { placeholder: 'Enter name', type: 'text' },
                tailwindOptions: { classList: ['border', 'rounded', 'p-2'] },
              },
              {
                id: 'submit-button',
                type: 'Button',
                props: { text: 'Submit' },
                tailwindOptions: { classList: ['bg-green-500', 'text-white'] },
              },
            ],
          },
        ],
      };

      const reactCode = generatePageCodeWithChildren(complexPage, [complexPage]);
      
      // Should contain all components
      expect(reactCode).toContain('Welcome');
      expect(reactCode).toContain('Enter name');
      expect(reactCode).toContain('Submit');
      
      // Should have proper structure
      expect(reactCode).toContain('<main');
      expect(reactCode).toMatch(/<div[^>]*>.*Welcome.*<\/div>/s);
      expect(reactCode).toMatch(/<div[^>]*>.*<input[^>]*>.*<button[^>]*>Submit.*<\/button>.*<\/div>/s);
    });

    it('maintains component order in serialization', () => {
      const orderedContainer: ContainerEntity = {
        id: 'ordered-container',
        name: 'Ordered Container',
        tailwindOptions: { classList: ['flex', 'flex-col'] },
        children: [
          {
            id: 'first-text',
            type: 'Text',
            props: { text: 'First' },
            tailwindOptions: { classList: [] },
          },
          {
            id: 'second-button',
            type: 'Button',
            props: { text: 'Second' },
            tailwindOptions: { classList: [] },
          },
          {
            id: 'third-input',
            type: 'Input',
            props: { placeholder: 'Third' },
            tailwindOptions: { classList: [] },
          },
        ],
      };

      const code = generateContainerCodeWithChildren(orderedContainer, []);
      
      const firstPos = code.indexOf('First');
      const secondPos = code.indexOf('Second');
      const thirdPos = code.indexOf('Third');
      
      expect(firstPos).toBeLessThan(secondPos);
      expect(secondPos).toBeLessThan(thirdPos);
    });
  });

  describe('Error Handling', () => {
    it('handles missing component props gracefully', () => {
      const brokenComponent: ComponentEntity = {
        id: 'broken-comp',
        type: 'Button',
        props: {},
        tailwindOptions: { classList: [] },
      };

      const code = generateComponentCode(brokenComponent, []);
      
      expect(code).toContain('<button');
      expect(code).toContain('</button>');
      // Should handle missing text gracefully
    });

    it('handles empty containers', () => {
      const emptyContainer: ContainerEntity = {
        id: 'empty-container',
        name: 'Empty Container',
        tailwindOptions: { classList: ['p-4'] },
        children: [],
      };

      const code = generateContainerCodeWithChildren(emptyContainer, []);
      
      expect(code).toContain('<div');
      expect(code).toContain('</div>');
    });
  });
});