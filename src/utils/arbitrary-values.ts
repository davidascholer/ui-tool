/**
 * Converts Tailwind arbitrary value classes to inline styles
 * This is needed because Tailwind v4 compiles at build time and doesn't
 * generate CSS for classes added dynamically at runtime
 */

export function extractArbitraryStyles(classList: string[]): React.CSSProperties {
  const styles: Record<string, string> = {};
  
  classList.forEach((className) => {
    // Match arbitrary values in brackets like max-w-[100px], h-[50vh], etc.
    const arbitraryMatch = className.match(/^([\w-]+)-\[([^\]]+)\]$/);
    if (arbitraryMatch) {
      const [, property, value] = arbitraryMatch;
      
      // Map Tailwind properties to CSS properties
      const propertyMap: Record<string, keyof React.CSSProperties> = {
        'w': 'width',
        'h': 'height',
        'min-w': 'minWidth',
        'min-h': 'minHeight',
        'max-w': 'maxWidth',
        'max-h': 'maxHeight',
        'p': 'padding',
        'px': 'paddingLeft', // Will be handled specially
        'py': 'paddingTop',  // Will be handled specially
        'pt': 'paddingTop',
        'pr': 'paddingRight',
        'pb': 'paddingBottom',
        'pl': 'paddingLeft',
        'm': 'margin',
        'mx': 'marginLeft',  // Will be handled specially
        'my': 'marginTop',   // Will be handled specially
        'mt': 'marginTop',
        'mr': 'marginRight',
        'mb': 'marginBottom',
        'ml': 'marginLeft',
        'gap': 'gap',
        'top': 'top',
        'right': 'right',
        'bottom': 'bottom',
        'left': 'left',
      };
      
      const cssProperty = propertyMap[property];
      if (cssProperty) {
        if (property === 'px') {
          styles.paddingLeft = value;
          styles.paddingRight = value;
        } else if (property === 'py') {
          styles.paddingTop = value;
          styles.paddingBottom = value;
        } else if (property === 'mx') {
          styles.marginLeft = value;
          styles.marginRight = value;
        } else if (property === 'my') {
          styles.marginTop = value;
          styles.marginBottom = value;
        } else {
          styles[cssProperty] = value;
        }
      }
    }
  });
  
  return styles as React.CSSProperties;
}

/**
 * Filters out arbitrary value classes from classList
 * Returns only the classes that Tailwind should handle
 */
export function filterNonArbitraryClasses(classList: string[]): string[] {
  return classList.filter((className) => !className.match(/^[\w-]+-\[([^\]]+)\]$/));
}
