/**
 * React Native code serializer - converts UI hierarchy to React Native components
 * Feature 003: Component Tracking and Code Export
 */

import { generateButtonCodeRN } from '../code-generators/react-native/button';
import { generateInputCodeRN } from '../code-generators/react-native/input';
import { generateCardCodeRN } from '../code-generators/react-native/card';
import { generateTextCodeRN } from '../code-generators/react-native/text';
import { generateImageCodeRN } from '../code-generators/react-native/image';
import { generateListCodeRN } from '../code-generators/react-native/list';
import { generateContainerCodeRN } from '../code-generators/react-native/container';
import { generatePageCodeRN } from '../code-generators/react-native/page';
import { addReactNativeImports } from '../code-generation-helpers';
import type { PageEntity, ContainerEntity, ComponentEntity } from '../types';

/**
 * Get React Native component names used in hierarchy for import generation
 */
function getUsedRNComponents(pages: PageEntity[]): string[] {
  const components = new Set<string>();
  
  // Always include basic components
  components.add('View');
  components.add('Text');
  components.add('SafeAreaView');
  
  // Scan for specific component types
  pages.forEach(page => {
    page.children.forEach(container => {
      container.children.forEach(component => {
        switch (component.type) {
          case 'Button':
            components.add('TouchableOpacity');
            break;
          case 'Input':
            components.add('TextInput');
            break;
          case 'Image':
            components.add('Image');
            break;
          case 'List':
            components.add('FlatList');
            break;
          // Card, Text, Container use View/Text which are already added
        }
      });
    });
  });
  
  return Array.from(components).sort();
}

/**
 * Serialize a single component to React Native JSX
 */
function serializeComponent(component: ComponentEntity): string {
  switch (component.type) {
    case 'Button':
      return generateButtonCodeRN(component);
    case 'Input':
      return generateInputCodeRN(component);
    case 'Card':
      return generateCardCodeRN(component);
    case 'Text':
      return generateTextCodeRN(component);
    case 'Image':
      return generateImageCodeRN(component);
    case 'List':
      return generateListCodeRN(component);
    default:
      return `{/* Unknown component type: ${component.type} */}`;
  }
}

/**
 * Serialize a container to React Native JSX with its children
 */
function serializeContainer(container: ContainerEntity): string {
  const childrenCode = container.children.map(child => serializeComponent(child));
  return generateContainerCodeRN(container, childrenCode);
}

/**
 * Serialize a page to React Native JSX with all nested content
 */
function serializePage(page: PageEntity): string {
  const childrenCode = page.children.map(child => serializeContainer(child));
  return generatePageCodeRN(page, childrenCode);
}

/**
 * Serialize multiple pages to a complete React Native component
 */
export function serializeToReactNative(pages: PageEntity[]): string {
  if (pages.length === 0) {
    const emptyCode = '<SafeAreaView style={{ flex: 1 }}><Text>No pages to display</Text></SafeAreaView>';
    return addReactNativeImports(emptyCode, ['SafeAreaView', 'Text']);
  }

  if (pages.length === 1) {
    const pageCode = serializePage(pages[0]);
    const usedComponents = getUsedRNComponents(pages);
    return addReactNativeImports(pageCode, usedComponents);
  }

  // Multiple pages - wrap in a ScrollView or stack
  const pagesCode = pages.map(page => serializePage(page));
  const combinedCode = `<SafeAreaView style={{ flex: 1 }}>
  <ScrollView>
${pagesCode.map(code => `    ${code.replace(/\n/g, '\n    ')}`).join('\n')}
  </ScrollView>
</SafeAreaView>`;
  
  const usedComponents = ['SafeAreaView', 'ScrollView', ...getUsedRNComponents(pages)];
  return addReactNativeImports(combinedCode, usedComponents);
}

/**
 * Get a preview of the first few lines of generated React Native code
 */
export function getReactNativePreview(pages: PageEntity[], maxLines: number = 5): string {
  const fullCode = serializeToReactNative(pages);
  const lines = fullCode.split('\n');
  
  if (lines.length <= maxLines) {
    return fullCode;
  }
  
  return lines.slice(0, maxLines).join('\n') + '\n// ... more code';
}