/**
 * Unit tests for generated code syntax validation
 * Feature 003: Component Tracking and Code Export - T040g
 */

import { describe, it, expect } from 'vitest';
import { generateReactCode } from '../../../src/utils/code-generators/react';
import { generateReactNativeCode } from '../../../src/utils/code-generators/react-native';
import type { ComponentEntity, ContainerEntity, PageEntity } from '../../../src/utils/types';

describe('Generated Code Syntax Validation', () => {
  // Mock entities for testing
  const mockButton: ComponentEntity = {
    id: 'btn-1',
    type: 'Button',
    props: { text: 'Click me', onClick: 'handleClick' },
    tailwindOptions: { classList: ['bg-blue-500', 'text-white'] },
  };

  const mockInput: ComponentEntity = {
    id: 'input-1',
    type: 'Input',
    props: { placeholder: 'Enter text', type: 'email' },
    tailwindOptions: { classList: ['border', 'rounded'] },
  };

  const mockContainer: ContainerEntity = {
    id: 'container-1',
    name: 'Test Container',
    tailwindOptions: { classList: ['flex', 'flex-col'] },
    children: [mockButton, mockInput],
  };

  const mockPage: PageEntity = {
    id: 'page-1',
    name: 'Test Page',
    children: [mockContainer],
  };

  const mockPages: PageEntity[] = [mockPage];

  describe('React JSX Syntax Validation', () => {
    it('generates valid JSX with proper tag structure', () => {
      const code = generateReactCode('Page', 'page-1', mockPages);
      
      // Check for proper opening and closing tags
      expect(code).toMatch(/<\w+[^>]*>/); // Opening tags
      expect(code).toMatch(/<\/\w+>/); // Closing tags
      
      // Check for self-closing tags
      expect(code).toMatch(/<\w+[^>]*\/>/); // Self-closing tags (input)
      
      // Should not have unclosed tags
      const openTags = (code.match(/<\w+[^/>]*>/g) || []).length;
      const closeTags = (code.match(/<\/\w+>/g) || []).length;
      const selfCloseTags = (code.match(/<\w+[^>]*\/>/g) || []).length;
      
      // Open tags should equal close tags (excluding self-closing)
      expect(openTags - selfCloseTags).toBe(closeTags);
    });

    it('generates valid React import statements', () => {
      const code = generateReactCode('Page', 'page-1', mockPages);
      
      // Should have proper React import
      expect(code).toMatch(/^import React from ['"]react['"];?$/m);
      
      // Import should be at the top of the file
      const lines = code.split('\n').filter(line => line.trim());
      expect(lines[0]).toContain('import React');
    });

    it('generates properly quoted attribute values', () => {
      const code = generateReactCode('Container', 'container-1', mockPages);
      
      // String attributes should be properly quoted
      expect(code).toMatch(/\w+="[^"]*"/); // Double quotes
      expect(code).not.toMatch(/\w+='[^']*'/); // No single quotes for strings
      
      // JSX expressions should use curly braces
      expect(code).toMatch(/\w+=\{[^}]+\}/); // JSX expressions
    });

    it('generates valid className attributes', () => {
      const code = generateReactCode('Container', 'container-1', mockPages);
      
      // Should use className, not class
      expect(code).toContain('className=');
      expect(code).not.toContain('class=');
      
      // className values should be quoted strings
      expect(code).toMatch(/className="[^"]*"/);
    });

    it('handles special characters in JSX', () => {
      const specialButton: ComponentEntity = {
        ...mockButton,
        props: { text: 'Save & Continue', 'aria-label': 'Save & continue to next step' },
      };

      const specialContainer: ContainerEntity = {
        ...mockContainer,
        children: [specialButton],
      };

      const specialPage: PageEntity = {
        ...mockPage,
        children: [specialContainer],
      };

      const code = generateReactCode('Page', 'page-1', [specialPage]);
      
      // Special characters should be preserved
      expect(code).toContain('Save & Continue');
      expect(code).toContain('Save & continue to next step');
    });
  });

  describe('React Native Syntax Validation', () => {
    it('generates valid React Native import statements', () => {
      const code = generateReactNativeCode('Page', 'page-1', mockPages);
      
      // Should have React import
      expect(code).toMatch(/^import React from ['"]react['"];?$/m);
      
      // Should have React Native imports
      expect(code).toMatch(/^import \{ .+ \} from ['"]react-native['"];?$/m);
      
      // Should import actual components used
      expect(code).toContain('SafeAreaView');
      expect(code).toContain('View');
      expect(code).toContain('Text');
      expect(code).toContain('TouchableOpacity');
      expect(code).toContain('TextInput');
    });

    it('uses proper React Native component names', () => {
      const code = generateReactNativeCode('Container', 'container-1', mockPages);
      
      // Should use RN components, not HTML
      expect(code).toContain('<TouchableOpacity');
      expect(code).toContain('<TextInput');
      expect(code).toContain('<Text');
      expect(code).toContain('<View');
      
      // Should not contain HTML elements
      expect(code).not.toContain('<button');
      expect(code).not.toContain('<input');
      expect(code).not.toContain('<p>');
      expect(code).not.toContain('<div');
    });

    it('generates valid style objects', () => {
      const code = generateReactNativeCode('Container', 'container-1', mockPages);
      
      // Should use style prop, not className
      expect(code).toMatch(/style=\{[^}]+\}/);
      expect(code).not.toContain('className=');
      
      // Style objects should be valid JavaScript
      const styleMatches = code.match(/style=\{([^}]+)\}/g);
      if (styleMatches) {
        for (const match of styleMatches) {
          // Should contain valid object syntax
          expect(match).toMatch(/style=\{\s*\{[^}]*\}\s*\}/);
        }
      }
    });

    it('handles React Native specific props', () => {
      const code = generateReactNativeCode('Container', 'container-1', mockPages);
      
      // Should use RN-specific prop names
      expect(code).toContain('onPress'); // Not onClick
      expect(code).toContain('accessibilityLabel'); // Not aria-label
      
      // Should not contain web-specific props
      expect(code).not.toContain('onClick');
      expect(code).not.toContain('aria-label');
    });
  });

  describe('Indentation and Formatting', () => {
    it('maintains consistent indentation', () => {
      const code = generateReactCode('Page', 'page-1', mockPages);
      
      const lines = code.split('\n');
      for (const line of lines) {
        if (line.trim() === '') continue;
        
        const leadingSpaces = line.length - line.trimStart().length;
        
        // Indentation should be multiple of 2
        expect(leadingSpaces % 2).toBe(0);
        
        // All indented lines should have positive indentation
        if (leadingSpaces > 0) {
          expect(leadingSpaces).toBeGreaterThanOrEqual(2);
        }
      }
    });

    it('properly formats nested elements', () => {
      const code = generateReactCode('Container', 'container-1', mockPages);
      
      // Child elements should be indented relative to parent
      const lines = code.split('\n');
      let foundContainer = false;
      let foundChild = false;
      
      for (let i = 0; i < lines.length - 1; i++) {
        const currentLine = lines[i];
        const nextLine = lines[i + 1];
        
        if (currentLine.includes('<div') && !currentLine.includes('/>')) {
          foundContainer = true;
          const containerIndent = currentLine.length - currentLine.trimStart().length;
          
          if (nextLine.trim() && (nextLine.includes('<button') || nextLine.includes('<input'))) {
            foundChild = true;
            const childIndent = nextLine.length - nextLine.trimStart().length;
            expect(childIndent).toBeGreaterThan(containerIndent);
          }
        }
      }
      
      expect(foundContainer).toBe(true);
      expect(foundChild).toBe(true);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('handles empty components gracefully', () => {
      const emptyButton: ComponentEntity = {
        id: 'empty-btn',
        type: 'Button',
        props: {},
        tailwindOptions: { classList: [] },
      };

      const emptyContainer: ContainerEntity = {
        id: 'empty-container',
        name: 'Empty',
        tailwindOptions: { classList: [] },
        children: [emptyButton],
      };

      const emptyPage: PageEntity = {
        id: 'empty-page',
        name: 'Empty',
        children: [emptyContainer],
      };

      const code = generateReactCode('Page', 'empty-page', [emptyPage]);
      
      // Should still generate valid JSX
      expect(code).toContain('import React');
      expect(code).toContain('<div');
      expect(code).toContain('</div>');
      expect(code).toContain('<button');
      expect(code).toContain('</button>');
    });

    it('handles components with no children', () => {
      const noChildContainer: ContainerEntity = {
        id: 'no-child-container',
        name: 'No Children',
        tailwindOptions: { classList: ['p-4'] },
        children: [],
      };

      const noChildPage: PageEntity = {
        id: 'no-child-page',
        name: 'No Child Page',
        children: [noChildContainer],
      };

      const code = generateReactCode('Container', 'no-child-container', [noChildPage]);
      
      // Should generate valid container with default content
      expect(code).toContain('<div');
      expect(code).toContain('</div>');
    });

    it('validates component type handling', () => {
      // Test all supported component types
      const componentTypes: Array<ComponentEntity['type']> = [
        'Button', 'Input', 'Card', 'Text', 'Image', 'List'
      ];

      for (const type of componentTypes) {
        const component: ComponentEntity = {
          id: `test-${type.toLowerCase()}`,
          type,
          props: { text: `Test ${type}` },
          tailwindOptions: { classList: ['test-class'] },
        };

        const container: ContainerEntity = {
          id: 'test-container',
          name: 'Test',
          tailwindOptions: { classList: [] },
          children: [component],
        };

        const page: PageEntity = {
          id: 'test-page',
          name: 'Test',
          children: [container],
        };

        const reactCode = generateReactCode('Component', component.id, [page]);
        const rnCode = generateReactNativeCode('Component', component.id, [page]);

        // Both should generate valid code
        expect(reactCode).toBeTruthy();
        expect(rnCode).toBeTruthy();
        expect(reactCode.length).toBeGreaterThan(0);
        expect(rnCode.length).toBeGreaterThan(0);
      }
    });
  });
});