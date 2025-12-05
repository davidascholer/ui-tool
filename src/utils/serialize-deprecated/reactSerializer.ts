/**
 * React code serializer - converts UI hierarchy to React JSX
 * Feature 003: Component Tracking and Code Export
 */

import { generateInputCode } from '../code-generators/react/input';
import { generateCardCode } from '../code-generators/react/card';
import { generateListCode } from '../code-generators/react/list';
import { generateContainerCode } from '../code-generators/react/container';
import { generatePageCode } from '../code-generators/react/page';
import { addReactImport } from '../code-generation-helpers';
import type { PageEntity, ContainerEntity, ComponentEntity } from '../types';

/**
 * Serialize a single component to React JSX
 */
function serializeComponent(component: ComponentEntity): string {
  const classes = component.tailwindOptions?.classList?.join(' ') || '';
  const classAttr = classes ? ` className="${classes}"` : '';
  
  switch (component.type) {
    // Basic Components
    case 'View':
      return `<div${classAttr}>{children}</div>`;
    case 'Text':
      return `<p${classAttr}>{children}</p>`;
    case 'Image':
      return `<img${classAttr} />`;
    case 'TextInput':
      return `<input${classAttr} />`;
    case 'Pressable':
      return `<button${classAttr}>{children}</button>`;
    case 'ScrollView':
      return `<div${classAttr}>{children}</div>`;
    
    // UI Components
    case 'Button':
      return `<button${classAttr}>{children}</button>`;
    case 'Switch':
      return `<input type="checkbox"${classAttr} />`;
    
    // List Components
    case 'FlatList':
      return `<ul${classAttr}>{children}</ul>`;
    case 'SectionList':
      return `<div${classAttr}>{children}</div>`;
    
    // Other Components
    case 'ActivityIndicator':
      return `<div${classAttr} role="status"><span className="sr-only">Loading...</span></div>`;
    case 'Alert':
      return `<dialog${classAttr}>{children}</dialog>`;
    case 'Animated':
      return `<div${classAttr}>{children}</div>`;
    case 'KeyboardAvoidingView':
      return `<div${classAttr}>{children}</div>`;
    case 'Linking':
      return `<a${classAttr}>{children}</a>`;
    case 'Modal':
      return `<dialog${classAttr}>{children}</dialog>`;
    case 'PixelRatio':
      return `<div${classAttr}>{children}</div>`;
    case 'RefreshControl':
      return `<div${classAttr}>{children}</div>`;
    case 'StatusBar':
      return `<div${classAttr}>{children}</div>`;
    
    // Legacy Components (backward compatibility)
    case 'Input':
      return generateInputCode(component);
    case 'Card':
      return generateCardCode(component);
    case 'List':
      return generateListCode(component);
    
    default:
      return `<!-- Unknown component type: ${component.type} -->`;
  }
}

/**
 * Serialize a container to React JSX with its children
 */
function serializeContainer(container: ContainerEntity): string {
  const childrenCode = container.children.map(child => serializeComponent(child));
  return generateContainerCode(container, childrenCode);
}

/**
 * Serialize a page to React JSX with all nested content
 */
function serializePage(page: PageEntity): string {
  const childrenCode = page.children.map(child => serializeContainer(child));
  return generatePageCode(page, childrenCode);
}

/**
 * Serialize multiple pages to a complete React component
 */
export function serializeToReact(pages: PageEntity[]): string {
  if (pages.length === 0) {
    return addReactImport('<div>No pages to display</div>');
  }

  if (pages.length === 1) {
    const pageCode = serializePage(pages[0]);
    return addReactImport(pageCode);
  }

  // Multiple pages - wrap in a fragment or container
  const pagesCode = pages.map(page => serializePage(page));
  const combinedCode = `<div className="app">\n${pagesCode.map(code => `  ${code.replace(/\n/g, '\n  ')}`).join('\n')}\n</div>`;
  
  return addReactImport(combinedCode);
}

/**
 * Get a preview of the first few lines of generated React code
 */
export function getReactPreview(pages: PageEntity[], maxLines: number = 5): string {
  const fullCode = serializeToReact(pages);
  const lines = fullCode.split('\n');
  
  if (lines.length <= maxLines) {
    return fullCode;
  }
  
  return lines.slice(0, maxLines).join('\n') + '\n// ... more code';
}