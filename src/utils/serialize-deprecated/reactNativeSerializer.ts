/**
 * React Native code serializer - converts UI hierarchy to React Native components
 * Feature 003: Component Tracking and Code Export
 */

import { generateInputCodeRN } from '../code-generators/react-native/input';
import { generateCardCodeRN } from '../code-generators/react-native/card';
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
          // Basic Components
          case 'View':
            components.add('View');
            break;
          case 'Text':
            components.add('Text');
            break;
          case 'Image':
            components.add('Image');
            break;
          case 'TextInput':
            components.add('TextInput');
            break;
          case 'Pressable':
            components.add('Pressable');
            break;
          case 'ScrollView':
            components.add('ScrollView');
            break;
          
          // UI Components
          case 'Button':
            components.add('TouchableOpacity');
            break;
          case 'Switch':
            components.add('Switch');
            break;
          
          // List Components
          case 'FlatList':
            components.add('FlatList');
            break;
          case 'SectionList':
            components.add('SectionList');
            break;
          
          // Other Components
          case 'ActivityIndicator':
            components.add('ActivityIndicator');
            break;
          case 'Alert':
            components.add('Alert');
            break;
          case 'Animated':
            components.add('Animated');
            break;
          case 'KeyboardAvoidingView':
            components.add('KeyboardAvoidingView');
            break;
          case 'Linking':
            components.add('Linking');
            break;
          case 'Modal':
            components.add('Modal');
            break;
          case 'RefreshControl':
            components.add('RefreshControl');
            break;
          case 'StatusBar':
            components.add('StatusBar');
            break;
          
          // Legacy Components
          case 'Input':
            components.add('TextInput');
            break;
          case 'List':
            components.add('FlatList');
            break;
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
  const style = 'style={styles.component}';
  
  switch (component.type) {
    // Basic Components
    case 'View':
      return `<View ${style}>{children}</View>`;
    case 'Text':
      return `<Text ${style}>{children}</Text>`;
    case 'Image':
      return `<Image ${style} />`;
    case 'TextInput':
      return `<TextInput ${style} />`;
    case 'Pressable':
      return `<Pressable ${style}>{children}</Pressable>`;
    case 'ScrollView':
      return `<ScrollView ${style}>{children}</ScrollView>`;
    
    // UI Components
    case 'Button':
      return `<TouchableOpacity ${style}><Text>Button</Text></TouchableOpacity>`;
    case 'Switch':
      return `<Switch ${style} />`;
    
    // List Components
    case 'FlatList':
      return `<FlatList ${style} data={[]} renderItem={({ item }) => <View><Text>{item}</Text></View>} />`;
    case 'SectionList':
      return `<SectionList ${style} sections={[]} renderItem={({ item }) => <View><Text>{item}</Text></View>} />`;
    
    // Other Components
    case 'ActivityIndicator':
      return `<ActivityIndicator ${style} />`;
    case 'Alert':
      return `{/* Alert.alert() - call programmatically */}`;
    case 'Animated':
      return `<Animated.View ${style}>{children}</Animated.View>`;
    case 'KeyboardAvoidingView':
      return `<KeyboardAvoidingView ${style} behavior="padding">{children}</KeyboardAvoidingView>`;
    case 'Linking':
      return `{/* Linking.openURL() - call programmatically */}`;
    case 'Modal':
      return `<Modal ${style} visible={true}>{children}</Modal>`;
    case 'PixelRatio':
      return `{/* PixelRatio - use PixelRatio.get() */}`;
    case 'RefreshControl':
      return `<RefreshControl ${style} refreshing={false} onRefresh={() => {}} />`;
    case 'StatusBar':
      return `<StatusBar ${style} />`;
    
    // Legacy Components (backward compatibility)
    case 'Input':
      return generateInputCodeRN(component);
    case 'Card':
      return generateCardCodeRN(component);
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