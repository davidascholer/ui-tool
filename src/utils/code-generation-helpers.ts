/**
 * Code Generation Helpers
 * Utility functions for formatting and indenting generated code
 * Feature 003: Component Tracking and Code Export
 */

/**
 * Add indentation to each line of code
 * @param code Code string to indent
 * @param spaces Number of spaces to indent
 * @returns Indented code string
 */
export function indent(code: string, spaces: number): string {
  const padding = ' '.repeat(spaces);
  return code
    .split('\n')
    .map((line) => (line.trim() ? padding + line : line))
    .join('\n');
}

/**
 * Format JSX props for readability
 * If more than 3 props, format as multi-line
 * @param props Record of prop names to values
 * @param indentLevel Number of spaces for indentation
 * @returns Formatted props string
 */
export function formatProps(
  props: Record<string, unknown>,
  indentLevel: number = 2
): string {
  const entries = Object.entries(props);

  if (entries.length === 0) {
    return '';
  }

  if (entries.length <= 3) {
    // Single line format
    return entries
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        } else if (typeof value === 'boolean') {
          return value ? key : `${key}={false}`;
        } else {
          return `${key}={${JSON.stringify(value)}}`;
        }
      })
      .join(' ');
  }

  // Multi-line format
  const padding = ' '.repeat(indentLevel);
  return '\n' + entries
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${padding}${key}="${value}"`;
      } else if (typeof value === 'boolean') {
        return value ? `${padding}${key}` : `${padding}${key}={false}`;
      } else {
        return `${padding}${key}={${JSON.stringify(value)}}`;
      }
    })
    .join('\n') + '\n';
}

/**
 * Format className prop for React components
 * @param classes Array of Tailwind class names
 * @returns Formatted className prop or empty string
 */
export function formatClassName(classes: string[]): string {
  if (classes.length === 0) {
    return '';
  }

  const classString = classes.join(' ');
  return `className="${classString}"`;
}

/**
 * Format style prop for React Native components
 * @param styleObject Style object
 * @returns Formatted style prop or empty string
 */
export function formatStyle(styleObject: Record<string, unknown>): string {
  if (Object.keys(styleObject).length === 0) {
    return '';
  }

  return `style={${JSON.stringify(styleObject)}}`;
}

/**
 * Wrap code with React import statement
 * @param code JSX code
 * @returns Code with import statement
 */
export function addReactImport(code: string): string {
  return `import React from 'react';\n\n${code}`;
}

/**
 * Wrap code with React Native imports
 * @param code JSX code
 * @param components Array of React Native components used
 * @returns Code with import statements
 */
export function addReactNativeImports(code: string, components: string[]): string {
  const uniqueComponents = [...new Set(components)];
  const importStatement = `import React from 'react';\nimport { ${uniqueComponents.join(', ')} } from 'react-native';\n\n`;
  return importStatement + code;
}

/**
 * Create self-closing tag
 * @param element Element name
 * @param props Formatted props string
 * @returns Self-closing tag string
 */
export function selfClosingTag(element: string, props: string): string {
  return props ? `<${element} ${props} />` : `<${element} />`;
}

/**
 * Create opening and closing tags with children
 * @param element Element name
 * @param props Formatted props string
 * @param children Children content
 * @param indentLevel Indentation level for children
 * @returns Complete element string
 */
export function elementWithChildren(
  element: string,
  props: string,
  children: string,
  indentLevel: number = 2
): string {
  const openTag = props ? `<${element} ${props}>` : `<${element}>`;
  const closeTag = `</${element}>`;

  if (!children.trim()) {
    return `${openTag}${closeTag}`;
  }

  const indentedChildren = indent(children, indentLevel);
  return `${openTag}\n${indentedChildren}\n${closeTag}`;
}

/**
 * Escape special characters in string values
 * @param value String value to escape
 * @returns Escaped string
 */
export function escapeString(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

/**
 * Format an array of child elements with proper indentation
 * @param children Array of child element code strings
 * @param indentLevel Indentation level
 * @returns Formatted children string
 */
export function formatChildren(children: string[], indentLevel: number = 2): string {
  if (children.length === 0) {
    return '';
  }

  return children
    .map((child) => indent(child, indentLevel))
    .join('\n');
}
