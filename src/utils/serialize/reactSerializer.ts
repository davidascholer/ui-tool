/**
 * React code serializer - converts UI hierarchy to React JSX
 * Feature 003: Component Tracking and Code Export
 */

import { generateButtonCode } from '../code-generators/react/button';
import { generateInputCode } from '../code-generators/react/input';
import { generateCardCode } from '../code-generators/react/card';
import { generateTextCode } from '../code-generators/react/text';
import { generateImageCode } from '../code-generators/react/image';
import { generateListCode } from '../code-generators/react/list';
import { generateContainerCode } from '../code-generators/react/container';
import { generatePageCode } from '../code-generators/react/page';
import { addReactImport } from '../code-generation-helpers';
import type { PageEntity, ContainerEntity, ComponentEntity } from '../types';

/**
 * Serialize a single component to React JSX
 */
function serializeComponent(component: ComponentEntity): string {
  switch (component.type) {
    case 'Button':
      return generateButtonCode(component);
    case 'Input':
      return generateInputCode(component);
    case 'Card':
      return generateCardCode(component);
    case 'Text':
      return generateTextCode(component);
    case 'Image':
      return generateImageCode(component);
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