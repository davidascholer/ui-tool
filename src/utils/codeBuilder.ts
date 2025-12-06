import type { ComponentEntity, ContainerEntity, PageEntity } from "./types";

// Build tree structure by organizing entities with their children
export interface TreeNode {
  entity: PageEntity | ContainerEntity | ComponentEntity;
  children: TreeNode[];
}

export function formatSimpleHtml(html: string): string {
  // Example: Add indentation after opening tags and before closing tags
  return (
    html
      // .replace(/></g, ">\n  <") // Add newline and indent between tags
      .replace(/(<\w+>)/g, "$1\n") // Add newline after opening tags
      .replace(/(<\/\w+>)/g, "\n$1")
  ); // Add newline before closing tags
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
