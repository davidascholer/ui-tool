/**
 * Unit tests for code generation property handling
 * Feature 003: Component Tracking and Code Export - T040f
 */

import { describe, it, expect } from 'vitest';
import { generateButtonCode } from '../../../src/utils/code-generators/react/button';
import { generateInputCode } from '../../../src/utils/code-generators/react/input';
import { generateImageCode } from '../../../src/utils/code-generators/react/image';
import { generateTextCode } from '../../../src/utils/code-generators/react/text';
import { generateButtonCodeRN } from '../../../src/utils/code-generators/react-native/button';
import { generateInputCodeRN } from '../../../src/utils/code-generators/react-native/input';
import type { ComponentEntity } from '../../../src/utils/types';

describe('Code Generation Property Handling', () => {
  describe('User-edited Properties', () => {
    it('includes custom text properties', () => {
      const customButton: ComponentEntity = {
        id: 'btn-1',
        type: 'Button',
        props: { 
          text: 'Custom Button Text',
          onClick: 'handleCustomClick',
          type: 'submit',
          disabled: true,
          'aria-label': 'Custom accessibility label'
        },
        tailwindOptions: { classList: [] },
      };

      const code = generateButtonCode(customButton);
      expect(code).toContain('Custom Button Text');
      expect(code).toContain('onClick={handleCustomClick}');
      expect(code).toContain('type="submit"');
      expect(code).toContain('disabled={true}');
      expect(code).toContain('aria-label="Custom accessibility label"');
    });

    it('includes custom input properties', () => {
      const customInput: ComponentEntity = {
        id: 'input-1',
        type: 'Input',
        props: {
          placeholder: 'Custom placeholder text',
          type: 'email',
          value: 'default@example.com',
          name: 'userEmail',
          id: 'email-input',
          required: true,
          readOnly: true,
          'aria-label': 'Email address input'
        },
        tailwindOptions: { classList: [] },
      };

      const code = generateInputCode(customInput);
      expect(code).toContain('placeholder="Custom placeholder text"');
      expect(code).toContain('type="email"');
      expect(code).toContain('value="default@example.com"');
      expect(code).toContain('name="userEmail"');
      expect(code).toContain('id="email-input"');
      expect(code).toContain('required={true}');
      expect(code).toContain('readOnly={true}');
      expect(code).toContain('aria-label="Email address input"');
    });

    it('handles empty or undefined properties gracefully', () => {
      const minimalButton: ComponentEntity = {
        id: 'btn-minimal',
        type: 'Button',
        props: {},
        tailwindOptions: { classList: [] },
      };

      const code = generateButtonCode(minimalButton);
      expect(code).toContain('<button');
      expect(code).toContain('</button>');
      expect(code).toContain('Button'); // Default text
    });

    it('includes custom image properties', () => {
      const customImage: ComponentEntity = {
        id: 'img-1',
        type: 'Image',
        props: {
          src: '/custom/path/image.jpg',
          alt: 'Custom alt text',
          width: 250,
          height: 150,
          loading: 'lazy',
          id: 'custom-image'
        },
        tailwindOptions: { classList: [] },
      };


      const code = generateImageCode(customImage);
      expect(code).toContain('src="/custom/path/image.jpg"');
      expect(code).toContain('alt="Custom alt text"');
      expect(code).toContain('width="250"');
      expect(code).toContain('height="150"');
      expect(code).toContain('loading="lazy"');
      expect(code).toContain('id="custom-image"');
    });
  });

  describe('Custom Tailwind Classes', () => {
    it('includes all user-specified classes', () => {
      const styledButton: ComponentEntity = {
        id: 'btn-styled',
        type: 'Button',
        props: { text: 'Styled Button' },
        tailwindOptions: { 
          classList: [
            'bg-gradient-to-r',
            'from-purple-500', 
            'to-pink-500',
            'text-white',
            'font-bold',
            'py-2',
            'px-4',
            'rounded-full',
            'hover:from-purple-600',
            'hover:to-pink-600',
            'transition-all',
            'duration-300',
            'transform',
            'hover:scale-105',
            'shadow-lg',
            'active:scale-95'
          ]
        },
      };

      const code = generateButtonCode(styledButton);
      
      // Check that className includes all specified classes
      const classMatch = code.match(/className="([^"]*)"/);
      expect(classMatch).toBeTruthy();
      if (classMatch) {
        const classes = classMatch[1];
        expect(classes).toContain('bg-gradient-to-r');
        expect(classes).toContain('from-purple-500');
        expect(classes).toContain('to-pink-500');
        expect(classes).toContain('text-white');
        expect(classes).toContain('font-bold');
        expect(classes).toContain('py-2');
        expect(classes).toContain('px-4');
        expect(classes).toContain('rounded-full');
        expect(classes).toContain('hover:from-purple-600');
        expect(classes).toContain('hover:to-pink-600');
        expect(classes).toContain('transition-all');
        expect(classes).toContain('duration-300');
        expect(classes).toContain('transform');
        expect(classes).toContain('hover:scale-105');
        expect(classes).toContain('shadow-lg');
        expect(classes).toContain('active:scale-95');
      }
    });

    it('preserves class order', () => {
      const orderedClasses: ComponentEntity = {
        id: 'btn-ordered',
        type: 'Button',
        props: { text: 'Button' },
        tailwindOptions: { 
          classList: ['first-class', 'second-class', 'third-class']
        },
      };

      const code = generateButtonCode(orderedClasses);
      const classMatch = code.match(/className="([^"]*)"/);
      expect(classMatch).toBeTruthy();
      if (classMatch) {
        const classes = classMatch[1];
        const firstIndex = classes.indexOf('first-class');
        const secondIndex = classes.indexOf('second-class');
        const thirdIndex = classes.indexOf('third-class');
        
        expect(firstIndex).toBeLessThan(secondIndex);
        expect(secondIndex).toBeLessThan(thirdIndex);
      }
    });

    it('handles empty classList gracefully', () => {
      const noClassButton: ComponentEntity = {
        id: 'btn-no-class',
        type: 'Button',
        props: { text: 'No Classes' },
        tailwindOptions: { classList: [] },
      };

      const code = generateButtonCode(noClassButton);
      expect(code).toContain('<button');
      expect(code).toContain('No Classes');
      expect(code).toContain('</button>');
    });
  });

  describe('React Native Property Conversion', () => {
    it('converts React props to React Native equivalents', () => {
      const reactButton: ComponentEntity = {
        id: 'rn-btn',
        type: 'Button',
        props: {
          text: 'RN Button',
          onClick: 'handlePress', // Should become onPress
          'aria-label': 'Button label' // Should become accessibilityLabel
        },
        tailwindOptions: { classList: ['bg-blue-500', 'text-white'] },
      };

      const code = generateButtonCodeRN(reactButton);
      expect(code).toContain('<TouchableOpacity');
      expect(code).toContain('<Text>RN Button</Text>');
      expect(code).toContain('onPress={handlePress}');
      expect(code).toContain('accessibilityLabel="Button label"');
      expect(code).not.toContain('onClick');
      expect(code).not.toContain('aria-label');
    });

    it('converts input types to React Native keyboard types', () => {
      const emailInput: ComponentEntity = {
        id: 'rn-input',
        type: 'Input',
        props: {
          type: 'email',
          placeholder: 'Enter email'
        },
        tailwindOptions: { classList: [] },
      };

      const code = generateInputCodeRN(emailInput);
      expect(code).toContain('<TextInput');
      expect(code).toContain('keyboardType="email-address"');
      expect(code).toContain('placeholder="Enter email"');
    });

    it('handles password inputs with secureTextEntry', () => {
      const passwordInput: ComponentEntity = {
        id: 'rn-password',
        type: 'Input',
        props: {
          type: 'password',
          placeholder: 'Enter password'
        },
        tailwindOptions: { classList: [] },
      };

      const code = generateInputCodeRN(passwordInput);
      expect(code).toContain('secureTextEntry={true}');
      expect(code).not.toContain('type="password"');
    });
  });

  describe('Special Characters and Escaping', () => {
    it('handles quotes in text content', () => {
      const quotedButton: ComponentEntity = {
        id: 'btn-quotes',
        type: 'Button',
        props: { text: 'Say "Hello World"' },
        tailwindOptions: { classList: [] },
      };

      const code = generateButtonCode(quotedButton);
      expect(code).toContain('Say "Hello World"');
    });

    it('handles special characters in class names', () => {
      const specialButton: ComponentEntity = {
        id: 'btn-special',
        type: 'Button',
        props: { text: 'Button' },
        tailwindOptions: { 
          classList: ['hover:bg-blue-500', 'focus:ring-2', 'active:scale-95']
        },
      };

      const code = generateButtonCode(specialButton);
      expect(code).toContain('hover:bg-blue-500');
      expect(code).toContain('focus:ring-2');
      expect(code).toContain('active:scale-95');
    });

    it('handles multiline text content', () => {
      const multilineText: ComponentEntity = {
        id: 'txt-multiline',
        type: 'Text',
        props: { text: 'Line 1\nLine 2\nLine 3' },
        tailwindOptions: { classList: [] },
      };


      const code = generateTextCode(multilineText);
      expect(code).toContain('Line 1\nLine 2\nLine 3');
    });
  });

  describe('Dynamic Property Values', () => {
    it('handles JavaScript expressions in props', () => {
      const dynamicButton: ComponentEntity = {
        id: 'btn-dynamic',
        type: 'Button',
        props: {
          text: 'Dynamic Button',
          onClick: '{() => handleClick(id)}',
          disabled: '{isLoading}',
          'aria-label': '{buttonLabel}'
        },
        tailwindOptions: { classList: [] },
      };

      const code = generateButtonCode(dynamicButton);
      expect(code).toContain('onClick={() => handleClick(id)}');
      expect(code).toContain('disabled={isLoading}');
      expect(code).toContain('aria-label={buttonLabel}');
    });

    it('handles conditional class names', () => {
      const conditionalButton: ComponentEntity = {
        id: 'btn-conditional',
        type: 'Button',
        props: { text: 'Conditional' },
        tailwindOptions: { 
          classList: ['base-class', '${isActive ? "active-class" : "inactive-class"}']
        },
      };

      const code = generateButtonCode(conditionalButton);
      expect(code).toContain('base-class');
      expect(code).toContain('${isActive ? "active-class" : "inactive-class"}');
    });
  });
});