/**
 * Unit tests for React Native code generators
 * Feature 003: Component Tracking and Code Export - T040b, T040d
 */

import { describe, it, expect } from 'vitest';
import { generateButtonCodeRN } from '../../../src/utils/code-generators/react-native/button';
import { generateInputCodeRN } from '../../../src/utils/code-generators/react-native/input';
import { generateCardCodeRN } from '../../../src/utils/code-generators/react-native/card';
import { generateTextCodeRN } from '../../../src/utils/code-generators/react-native/text';
import { generateImageCodeRN } from '../../../src/utils/code-generators/react-native/image';
import { generateListCodeRN } from '../../../src/utils/code-generators/react-native/list';
import { generateContainerCodeRN } from '../../../src/utils/code-generators/react-native/container';
import { generatePageCodeRN } from '../../../src/utils/code-generators/react-native/page';
import { generateReactNativeCode } from '../../../src/utils/code-generators/react-native';
import type { ComponentEntity, ContainerEntity, PageEntity } from '../../../src/utils/types';

describe('React Native Code Generators', () => {
  // Mock entities for testing
  const mockButton: ComponentEntity = {
    id: 'button-1',
    type: 'Button',
    props: { text: 'Press me', onPress: 'handlePress' },
    tailwindOptions: { classList: ['bg-blue-500', 'text-white', 'px-4', 'py-2'] },
  };

  const mockInput: ComponentEntity = {
    id: 'input-1',
    type: 'Input',
    props: { placeholder: 'Enter text', keyboardType: 'default' },
    tailwindOptions: { classList: ['border', 'rounded', 'p-2'] },
  };

  const mockCard: ComponentEntity = {
    id: 'card-1',
    type: 'Card',
    props: { text: 'Card content' },
    tailwindOptions: { classList: ['bg-white', 'p-4', 'rounded-lg'] },
  };

  const mockText: ComponentEntity = {
    id: 'text-1',
    type: 'Text',
    props: { text: 'Hello World' },
    tailwindOptions: { classList: ['text-lg', 'font-bold'] },
  };

  const mockImage: ComponentEntity = {
    id: 'image-1',
    type: 'Image',
    props: { src: '/test.jpg', alt: 'Test image', width: 100, height: 100 },
    tailwindOptions: { classList: ['rounded-full'] },
  };

  const mockList: ComponentEntity = {
    id: 'list-1',
    type: 'List',
    props: { items: ['Item 1', 'Item 2', 'Item 3'] },
    tailwindOptions: { classList: ['flex-1'] },
  };

  const mockContainer: ContainerEntity = {
    id: 'container-1',
    name: 'Test Container',
    tailwindOptions: { classList: ['flex', 'flex-col', 'p-4'] },
    children: [mockButton, mockText],
  };

  const mockPage: PageEntity = {
    id: 'page-1',
    name: 'Test Page',
    children: [mockContainer],
  };

  const mockPages: PageEntity[] = [mockPage];

  describe('Button Generator (TouchableOpacity)', () => {
    it('generates TouchableOpacity code', () => {
      const code = generateButtonCodeRN(mockButton);
      expect(code).toContain('<TouchableOpacity');
      expect(code).toContain('<Text>Press me</Text>');
      expect(code).toContain('</TouchableOpacity>');
    });

    it('converts Tailwind to React Native styles', () => {
      const code = generateButtonCodeRN(mockButton);
      expect(code).toContain('style=');
    });

    it('handles onPress prop', () => {
      const code = generateButtonCodeRN(mockButton);
      expect(code).toContain('onPress={handlePress}');
    });

    it('includes accessibility label', () => {
      const buttonWithA11y: ComponentEntity = {
        ...mockButton,
        props: { ...mockButton.props, 'aria-label': 'Press button' },
      };
      const code = generateButtonCodeRN(buttonWithA11y);
      expect(code).toContain('accessibilityLabel="Press button"');
    });
  });

  describe('Input Generator (TextInput)', () => {
    it('generates TextInput code', () => {
      const code = generateInputCodeRN(mockInput);
      expect(code).toContain('<TextInput');
      expect(code).toContain('placeholder="Enter text"');
      expect(code).toContain('/>');
    });

    it('handles different keyboard types', () => {
      const emailInput: ComponentEntity = {
        ...mockInput,
        props: { ...mockInput.props, type: 'email' },
      };
      const code = generateInputCodeRN(emailInput);
      expect(code).toContain('keyboardType="email-address"');
    });

    it('handles password input', () => {
      const passwordInput: ComponentEntity = {
        ...mockInput,
        props: { ...mockInput.props, type: 'password' },
      };
      const code = generateInputCodeRN(passwordInput);
      expect(code).toContain('secureTextEntry={true}');
    });

    it('handles readOnly prop', () => {
      const readOnlyInput: ComponentEntity = {
        ...mockInput,
        props: { ...mockInput.props, readOnly: true },
      };
      const code = generateInputCodeRN(readOnlyInput);
      expect(code).toContain('editable={false}');
    });
  });

  describe('Card Generator (View)', () => {
    it('generates View code', () => {
      const code = generateCardCodeRN(mockCard);
      expect(code).toContain('<View');
      expect(code).toContain('<Text>Card content</Text>');
      expect(code).toContain('</View>');
    });

    it('handles children code', () => {
      const childrenCode = ['<Text>Child 1</Text>', '<Text>Child 2</Text>'];
      const code = generateCardCodeRN(mockCard, childrenCode);
      expect(code).toContain('<Text>Child 1</Text>');
      expect(code).toContain('<Text>Child 2</Text>');
    });
  });

  describe('Text Generator', () => {
    it('generates Text code', () => {
      const code = generateTextCodeRN(mockText);
      expect(code).toContain('<Text');
      expect(code).toContain('Hello World');
      expect(code).toContain('</Text>');
    });

    it('includes style conversion', () => {
      const code = generateTextCodeRN(mockText);
      expect(code).toContain('style=');
    });
  });

  describe('Image Generator', () => {
    it('generates Image code', () => {
      const code = generateImageCodeRN(mockImage);
      expect(code).toContain('<Image');
      expect(code).toContain('source={{ uri: "/test.jpg" }}');
      expect(code).toContain('accessibilityLabel="Test image"');
      expect(code).toContain('/>');
    });

    it('handles dimensions in style', () => {
      const code = generateImageCodeRN(mockImage);
      expect(code).toContain('style=');
    });
  });

  describe('List Generator (FlatList)', () => {
    it('generates FlatList code', () => {
      const code = generateListCodeRN(mockList);
      expect(code).toContain('<FlatList');
      expect(code).toContain('data=');
      expect(code).toContain('renderItem={({ item }) => <Text>{item}</Text>}');
      expect(code).toContain('keyExtractor={(item, index) => index.toString()}');
      expect(code).toContain('/>');
    });

    it('uses provided items array', () => {
      const code = generateListCodeRN(mockList);
      expect(code).toContain('["Item 1","Item 2","Item 3"]');
    });
  });

  describe('Container Generator (View)', () => {
    it('generates View code', () => {
      const code = generateContainerCodeRN(mockContainer, []);
      expect(code).toContain('<View');
      expect(code).toContain('<Text>Container</Text>');
      expect(code).toContain('</View>');
    });

    it('includes children code', () => {
      const childrenCode = ['<TouchableOpacity>Test</TouchableOpacity>', '<Text>Text</Text>'];
      const code = generateContainerCodeRN(mockContainer, childrenCode);
      expect(code).toContain('<TouchableOpacity>Test</TouchableOpacity>');
      expect(code).toContain('<Text>Text</Text>');
    });
  });

  describe('Page Generator (SafeAreaView)', () => {
    it('generates SafeAreaView code', () => {
      const code = generatePageCodeRN(mockPage, []);
      expect(code).toContain('<SafeAreaView');
      expect(code).toContain('style={{ flex: 1 }}');
      expect(code).toContain('</SafeAreaView>');
    });

    it('includes children code', () => {
      const childrenCode = ['<View>Container 1</View>', '<View>Container 2</View>'];
      const code = generatePageCodeRN(mockPage, childrenCode);
      expect(code).toContain('<View>Container 1</View>');
      expect(code).toContain('<View>Container 2</View>');
    });
  });

  describe('Main React Native Code Generator', () => {
    it('generates code for page entities with imports', () => {
      const code = generateReactNativeCode('Page', 'page-1', mockPages);
      expect(code).toContain('import React from \'react\'');
      expect(code).toContain('import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, FlatList } from \'react-native\'');
      expect(code).toContain('<SafeAreaView');
    });

    it('generates code for container entities', () => {
      const code = generateReactNativeCode('Container', 'container-1', mockPages);
      expect(code).toContain('<View');
      expect(code).toContain('<TouchableOpacity');
      expect(code).toContain('<Text');
    });

    it('generates code for component entities', () => {
      const code = generateReactNativeCode('Component', 'button-1', mockPages);
      expect(code).toContain('<TouchableOpacity');
      expect(code).toContain('Press me');
    });

    it('returns error for missing entities', () => {
      const code = generateReactNativeCode('Page', 'missing-id', mockPages);
      expect(code).toContain('// Page not found');
    });
  });

  describe('Tailwind to React Native Style Conversion', () => {
    it('converts background colors', () => {
      const blueButton: ComponentEntity = {
        ...mockButton,
        tailwindOptions: { classList: ['bg-blue-500'] },
      };
      const code = generateButtonCodeRN(blueButton);
      expect(code).toContain('backgroundColor');
    });

    it('converts padding', () => {
      const paddedButton: ComponentEntity = {
        ...mockButton,
        tailwindOptions: { classList: ['p-4'] },
      };
      const code = generateButtonCodeRN(paddedButton);
      expect(code).toContain('padding');
    });

    it('converts flexbox properties', () => {
      const flexContainer: ContainerEntity = {
        ...mockContainer,
        tailwindOptions: { classList: ['flex', 'flex-row', 'justify-center', 'items-center'] },
      };
      const code = generateContainerCodeRN(flexContainer, []);
      expect(code).toContain('style=');
    });

    it('converts border properties', () => {
      const borderedInput: ComponentEntity = {
        ...mockInput,
        tailwindOptions: { classList: ['border', 'border-gray-300', 'rounded'] },
      };
      const code = generateInputCodeRN(borderedInput);
      expect(code).toContain('style=');
    });
  });
});