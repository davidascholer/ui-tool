/**
 * Unit tests for code generation helper functions
 * Feature 003: Component Tracking and Code Export - T040i
 */

import { describe, it, expect } from 'vitest';
import {
  formatClassName,
  formatChildren,
  elementWithChildren,
  selfClosingTag,
  addReactImport,
  addReactNativeImports,
  formatStyle
} from '../../../src/utils/code-generation-helpers';

describe('Code Generation Helpers', () => {
  describe('formatClassName', () => {
    it('formats single class correctly', () => {
      const result = formatClassName(['btn']);
      expect(result).toBe('className="btn"');
    });

    it('formats multiple classes correctly', () => {
      const result = formatClassName(['btn', 'primary', 'large']);
      expect(result).toBe('className="btn primary large"');
    });

    it('handles empty array', () => {
      const result = formatClassName([]);
      expect(result).toBe('');
    });

    it('handles edge cases', () => {
      expect(formatClassName([])).toBe('');
    });

    it('preserves whitespace in classes (does not trim)', () => {
      const result = formatClassName([' btn ', '  primary  ', 'large']);
      expect(result).toBe('className=" btn    primary   large"');
    });

    it('includes empty strings in output', () => {
      const result = formatClassName(['btn', '', 'primary', '   ', 'large']);
      expect(result).toBe('className="btn  primary     large"');
    });
  });

  describe('formatChildren', () => {
    it('formats single child with proper indentation', () => {
      const result = formatChildren(['<div>Child</div>'], 1);
      expect(result).toBe(' <div>Child</div>');
    });

    it('formats multiple children with proper indentation', () => {
      const children = ['<div>Child 1</div>', '<div>Child 2</div>'];
      const result = formatChildren(children, 1);
      expect(result).toBe(' <div>Child 1</div>\n <div>Child 2</div>');
    });

    it('handles different indentation levels', () => {
      const result = formatChildren(['<div>Child</div>'], 2);
      expect(result).toBe('  <div>Child</div>');
    });

    it('handles zero indentation', () => {
      const result = formatChildren(['<div>Child</div>'], 0);
      expect(result).toBe('<div>Child</div>');
    });

    it('handles empty children array', () => {
      const result = formatChildren([], 1);
      expect(result).toBe('');
    });

    it('handles multiline children', () => {
      const children = [
        '<div>\n  <p>Nested</p>\n</div>',
        '<span>Simple</span>'
      ];
      const result = formatChildren(children, 1);
      expect(result).toContain(' <div>'); // 1 space indent
      expect(result).toContain(' <span>Simple</span>'); // 1 space indent
    });

    it('preserves existing indentation in multiline content', () => {
      const children = ['<div>\n  <p>Already indented</p>\n</div>'];
      const result = formatChildren(children, 1);
      expect(result).toContain(' <div>'); // 1 space base indent
      expect(result).toContain('   <p>Already indented</p>'); // 1 space base + 2 existing = 3 total
    });
  });

  describe('elementWithChildren', () => {
    it('creates basic element with children', () => {
      const result = elementWithChildren('div', '', 'Hello World', 0);
      expect(result).toBe('<div>\nHello World\n</div>');
    });

    it('creates element with props and children', () => {
      const result = elementWithChildren('div', 'className="container"', 'Content', 0);
      expect(result).toBe('<div className="container">\nContent\n</div>');
    });

    it('handles different indentation levels', () => {
      const result = elementWithChildren('div', '', 'Content', 1);
      expect(result).toBe('<div>\n Content\n</div>');
    });

    it('handles empty children', () => {
      const result = elementWithChildren('div', '', '', 0);
      expect(result).toBe('<div></div>');
    });

    it('handles multiline children content', () => {
      const children = 'Line 1\nLine 2\nLine 3';
      const result = elementWithChildren('div', '', children, 0);
      expect(result).toContain('Line 1');
      expect(result).toContain('Line 2');
      expect(result).toContain('Line 3');
    });

    it('handles complex nested structure', () => {
      const children = '<span>Nested</span>\n<p>Paragraph</p>';
      const result = elementWithChildren('div', 'id="parent"', children, 0);
      expect(result).toBe('<div id="parent">\n<span>Nested</span>\n<p>Paragraph</p>\n</div>');
    });
  });

  describe('selfClosingTag', () => {
    it('creates self-closing tag without props', () => {
      const result = selfClosingTag('input', '');
      expect(result).toBe('<input />');
    });

    it('creates self-closing tag with props', () => {
      const result = selfClosingTag('input', 'type="text" placeholder="Enter text"');
      expect(result).toBe('<input type="text" placeholder="Enter text" />');
    });

    it('handles complex props', () => {
      const props = 'className="form-input" value={state.value} onChange={handleChange}';
      const result = selfClosingTag('input', props);
      expect(result).toBe('<input className="form-input" value={state.value} onChange={handleChange} />');
    });

    it('handles different element types', () => {
      expect(selfClosingTag('br', '')).toBe('<br />');
      expect(selfClosingTag('hr', '')).toBe('<hr />');
      expect(selfClosingTag('img', 'src="test.jpg"')).toBe('<img src="test.jpg" />');
    });
  });

  describe('addReactImport', () => {
    it('adds React import to code', () => {
      const code = '<div>Hello</div>';
      const result = addReactImport(code);
      expect(result).toBe('import React from \'react\';\n\n<div>Hello</div>');
    });

    it('handles empty code', () => {
      const result = addReactImport('');
      expect(result).toBe('import React from \'react\';\n\n');
    });

    it('handles multiline code', () => {
      const code = '<div>\n  <p>Hello</p>\n</div>';
      const result = addReactImport(code);
      expect(result).toBe('import React from \'react\';\n\n<div>\n  <p>Hello</p>\n</div>');
    });
  });

  describe('addReactNativeImports', () => {
    it('adds React Native imports with components', () => {
      const code = '<View><Text>Hello</Text></View>';
      const components = ['View', 'Text'];
      const result = addReactNativeImports(code, components);
      expect(result).toBe('import React from \'react\';\nimport { View, Text } from \'react-native\';\n\n<View><Text>Hello</Text></View>');
    });

    it('handles single component', () => {
      const code = '<Text>Hello</Text>';
      const components = ['Text'];
      const result = addReactNativeImports(code, components);
      expect(result).toBe('import React from \'react\';\nimport { Text } from \'react-native\';\n\n<Text>Hello</Text>');
    });

    it('removes duplicate components', () => {
      const code = '<View><View><Text>Hello</Text></View></View>';
      const components = ['View', 'Text', 'View', 'Text']; // Duplicates
      const result = addReactNativeImports(code, components);
      expect(result).toBe('import React from \'react\';\nimport { View, Text } from \'react-native\';\n\n<View><View><Text>Hello</Text></View></View>');
    });

    it('handles many components', () => {
      const components = ['View', 'Text', 'TouchableOpacity', 'TextInput', 'Image', 'ScrollView'];
      const code = '<View>Complex</View>';
      const result = addReactNativeImports(code, components);
      expect(result).toContain('import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from \'react-native\'');
    });

    it('handles empty components array', () => {
      const code = '<View>Hello</View>';
      const result = addReactNativeImports(code, []);
      expect(result).toBe('import React from \'react\';\nimport {  } from \'react-native\';\n\n<View>Hello</View>');
    });
  });

  describe('formatStyle', () => {
    it('formats simple style object', () => {
      const style = { backgroundColor: 'red', color: 'white' };
      const result = formatStyle(style);
      expect(result).toBe('{{ backgroundColor: "red", color: "white" }}');
    });

    it('formats numeric values without quotes', () => {
      const style = { padding: 16, margin: 8, fontSize: 14 };
      const result = formatStyle(style);
      expect(result).toBe('{{ padding: 16, margin: 8, fontSize: 14 }}');
    });

    it('formats mixed string and numeric values', () => {
      const style = { backgroundColor: '#3b82f6', padding: 16, borderRadius: 8 };
      const result = formatStyle(style);
      expect(result).toBe('{{ backgroundColor: "#3b82f6", padding: 16, borderRadius: 8 }}');
    });

    it('handles empty object', () => {
      const result = formatStyle({});
      expect(result).toBe('');
    });

    it('handles complex property names', () => {
      const style = { 
        paddingHorizontal: 16, 
        marginVertical: 8, 
        justifyContent: 'space-between',
        alignItems: 'center'
      };
      const result = formatStyle(style);
      expect(result).toContain('paddingHorizontal: 16');
      expect(result).toContain('marginVertical: 8');
      expect(result).toContain('justifyContent: "space-between"');
      expect(result).toContain('alignItems: "center"');
    });

    it('handles boolean values', () => {
      const style = { display: 'flex', opacity: 1 };
      const result = formatStyle(style);
      expect(result).toBe('{{ display: "flex", opacity: 1 }}');
    });

    it('escapes special characters in strings', () => {
      const style = { fontFamily: 'Times New Roman', content: 'Hello "World"' };
      const result = formatStyle(style);
      expect(result).toContain('fontFamily: "Times New Roman"');
      expect(result).toContain('content: "Hello \\"World\\""');
    });
  });

  describe('Integration Tests', () => {
    it('combines helpers for complete React component', () => {
      const classes = ['btn', 'btn-primary', 'large'];
      const children = ['<span>Icon</span>', 'Button Text'];
      
      const className = formatClassName(classes);
      const childrenContent = formatChildren(children, 1);
      const element = elementWithChildren('button', className, childrenContent, 0);
      const withImports = addReactImport(element);
      
      expect(withImports).toContain('import React');
      expect(withImports).toContain('<button className="btn btn-primary large">');
      expect(withImports).toContain('<span>Icon</span>'); // No extra spaces since indentLevel=0
      expect(withImports).toContain('Button Text');
      expect(withImports).toContain('</button>');
    });

    it('combines helpers for complete React Native component', () => {
      const style = { backgroundColor: '#3b82f6', padding: 16 };
      const children = ['<Text>Button Text</Text>'];
      
      const styleAttr = `style=${formatStyle(style)}`;
      const childrenContent = formatChildren(children, 1);
      const element = elementWithChildren('TouchableOpacity', styleAttr, childrenContent, 0);
      const withImports = addReactNativeImports(element, ['TouchableOpacity', 'Text']);
      
      expect(withImports).toContain('import React');
      expect(withImports).toContain('import { TouchableOpacity, Text }');
      expect(withImports).toContain('<TouchableOpacity style={{ backgroundColor: "#3b82f6", padding: 16 }}>');
      expect(withImports).toContain('<Text>Button Text</Text>');
      expect(withImports).toContain('</TouchableOpacity>');
    });

    it('handles deeply nested structure', () => {
      const level1Children = ['<p>Level 1</p>'];
      const level2Children = [elementWithChildren('div', '', formatChildren(level1Children, 1), 0)];
      const level3Children = [elementWithChildren('section', '', formatChildren(level2Children, 1), 0)];
      const result = elementWithChildren('article', '', formatChildren(level3Children, 1), 0);
      
      expect(result).toContain('<article>');
      expect(result).toContain('<section>');
      expect(result).toContain('<div>');
      expect(result).toContain('<p>Level 1</p>');
      expect(result).toContain('</div>');
      expect(result).toContain('</section>');
      expect(result).toContain('</article>');
    });
  });

  describe('Error Handling', () => {
    it('handles edge input gracefully', () => {
      expect(() => formatClassName([])).not.toThrow();
      expect(() => formatChildren([], 1)).not.toThrow();
      expect(() => elementWithChildren('', '', '', 0)).not.toThrow();
      expect(() => selfClosingTag('', '')).not.toThrow();
      expect(() => addReactImport('')).not.toThrow();
    });

    it('handles negative indentation', () => {
      expect(() => formatChildren(['<div>Child</div>'], -1)).toThrow(RangeError);
    });

    it('handles very large indentation', () => {
      const result = formatChildren(['<div>Child</div>'], 10);
      expect(result).toBe('          <div>Child</div>'); // 10 spaces
    });
  });
});