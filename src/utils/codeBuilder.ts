import type { ComponentEntity, ContainerEntity, PageEntity } from "./types";

// Build tree structure by organizing entities with their children
export interface TreeNode {
  entity: PageEntity | ContainerEntity | ComponentEntity;
  children: TreeNode[];
}

export function formatSimpleHtml(html: string): string {
  let formatted = '';
  let indent = 0;
  const indentSize = 2;
  
  // Split by tags while preserving them
  const tokens = html.split(/(<\/?[^>]+>)/g).filter(token => token.trim());
  
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].trim();
    if (!token) continue;
    
    // Check if it's a closing tag
    if (token.startsWith('</')) {
      indent = Math.max(0, indent - 1);
      formatted += ' '.repeat(indent * indentSize) + token + '\n';
    }
    // Check if it's a self-closing tag or single tag (img, br, hr, input, etc.)
    else if (token.endsWith('/>') || /^<(img|br|hr|input|meta|link)\b[^>]*>$/i.test(token)) {
      formatted += ' '.repeat(indent * indentSize) + token + '\n';
    }
    // Opening tag
    else if (token.startsWith('<')) {
      formatted += ' '.repeat(indent * indentSize) + token + '\n';
      // Don't indent for inline tags that typically contain text
      if (!/^<(span|a|strong|em|code|small|b|i|u)\b/i.test(token)) {
        indent++;
      }
    }
    // Text content
    else {
      // Only add text content if it's not just whitespace
      if (token.length > 0) {
        formatted += ' '.repeat(indent * indentSize) + token + '\n';
      }
    }
  }
  
  return formatted.trim();
}

export const buildTreeObject = (
  list: (PageEntity | ContainerEntity | ComponentEntity)[],
  rootId?: string
) => {
  if (!list || list.length === 0) {
    return `// No entities provided to build tree`;
  }
  // Find the root entity
  let rootEntity: PageEntity | ContainerEntity | ComponentEntity | undefined;

  if (rootId) {
    rootEntity = list.find((entity) => entity.id === rootId);
    if (!rootEntity) {
      console.error("Root ID not found in component list");
      return `// Error: Root entity with ID "${rootId}" not found`;
    }
  } else {
    // Default to first page if no rootId specified
    rootEntity = list.find((entity) => entity.uitType === "UITPage");
    if (!rootEntity) {
      return `// No page found in component list`;
    }
  }

  // Create maps for quick lookup by ID
  const entityMap = new Map<
    string,
    PageEntity | ContainerEntity | ComponentEntity
  >();
  list.forEach((entity) => {
    entityMap.set(entity.id, entity);
  });

  function buildTree(entityId: string): TreeNode | null {
    const entity = entityMap.get(entityId);
    if (!entity) return null;

    const node: TreeNode = {
      entity,
      children: [],
    };

    // If entity has children property (Page or Container), recursively build their trees
    if ("children" in entity && Array.isArray(entity.children)) {
      entity.children.forEach((child) => {
        const childNode = buildTree(child.id);
        if (childNode) {
          node.children.push(childNode);
        }
      });
    }

    return node;
  }

  // Build the tree starting from root
  const tree = buildTree(rootEntity.id);

  if (!tree) {
    return `// Error: Could not build tree structure`;
  }

  console.log("Built tree structure:", tree);

  return tree;
};
