import type {
  ComponentEntity,
  ContainerEntity,
  PageEntity,
} from "@/utils/types";
import { buildTreeObject, type TreeNode } from "@/utils/codeBuilder";
import { cn } from "@/lib/utils";
import { extractArbitraryStyles, filterNonArbitraryClasses } from "@/utils/arbitrary-values";

interface BuiltCodeFromPropsProps {
  componentList: (PageEntity | ContainerEntity | ComponentEntity)[];
  className?: string;
  rootId?: string;
  enableArbitraryStyles?: boolean; // When true, converts arbitrary values to inline styles for live preview
}

// Todo: Make "page" be the root of the object and deprecate "allPages";

export function BuiltCodeFromProps({
  componentList,
  rootId,
  enableArbitraryStyles = false,
}: BuiltCodeFromPropsProps) {
  const buildTreeFromObject = (tree: TreeNode): React.ReactNode => {
    // Convert the treeNode structure to a react component where the component matches the entity.uitType
    const { entity, children } = tree;

    if (!entity) {
      return null;
    }
    // Convert tailwindClassList array to string and separate arbitrary values
    const tailwindClassList = "tailwindClassList" in entity ? entity.tailwindClassList : [];
    const arbitraryStyles = enableArbitraryStyles ? extractArbitraryStyles(tailwindClassList) : {};
    const regularClasses = enableArbitraryStyles ? filterNonArbitraryClasses(tailwindClassList) : tailwindClassList;
    const tailwindClassString = regularClasses.join(" ");

    // Recursively build children components
    const childComponents = children.map((childNode) =>
      buildTreeFromObject(childNode)
    );

    // Match component based on uitType
    switch (entity.uitType) {
      case "UITPage": {
        const page = entity as PageEntity;
        return (
          <div
            className={cn(
              "flex flex-col min-w-[320px] max-w-6xl mx-auto justify-center items-center gap-4 p-4 border-2 border-slate-600",
              tailwindClassString
            )}
            data-entity-type="page"
            data-entity-id={page.id}
          >
            {childComponents}
          </div>
        );
      }

      case "UITContainer": {
        const container = entity as ContainerEntity;
        return (
          <div
            className={cn(
              "w-full flex flex-row flex-wrap text-center justify-evenly items-center gap-2 border-2 border-blue-600 p-2",
              tailwindClassString
            )}
            data-entity-type="container"
            data-entity-id={container.id}
            data-entity-name={container.name}
          >
            {childComponents}
          </div>
        );
      }

      case "UITView": {
        const component = entity as ComponentEntity;
        return (
          <div
            className={cn(tailwindClassString)}
            data-entity-type="component"
            data-entity-id={component.id}
            data-component-type={component.type}
          >
            {childComponents}
          </div>
        );
      }

      case "UITText": {
        const component = entity as ComponentEntity;
        const textContent = String(
          component.props?.content || component.props?.text || "Text"
        );
        return (
          <p
            className={cn("border-2", tailwindClassString)}
            data-entity-type="component"
            data-entity-id={component.id}
            data-component-type={component.type}
          >
            {textContent}
          </p>
        );
      }

      case "UITButton": {
        const component = entity as ComponentEntity;
        const buttonText = String(component.props?.text || "Button");
        return (
          <button
            className={cn(tailwindClassString)}
            data-entity-type="component"
            data-entity-id={component.id}
            data-component-type={component.type}
          >
            {buttonText}
          </button>
        );
      }

      case "UITTextInput": {
        const component = entity as ComponentEntity;
        const placeholder = (component.props?.placeholder as string) || "";
        const type = (component.props?.type as string) || "text";
        return (
          <input
            type={type}
            placeholder={placeholder}
            className={cn(tailwindClassString)}
            data-entity-type="component"
            data-entity-id={component.id}
            data-component-type={component.type}
          />
        );
      }

      case "UITImage": {
        const component = entity as ComponentEntity;
        const src =
          (component.props?.src as string) ||
          (component.props?.imageUrl as string) ||
          "";
        const alt = (component.props?.alt as string) || "Image";
        
        return (
          <img
            src={src}
            alt={alt}
            style={arbitraryStyles}
            className={cn("border-2 border-purple-600 block", tailwindClassString)}
            data-entity-type="component"
            data-entity-id={component.id}
            data-component-type={component.type}
          />
        );
      }

      case "UITPressable": {
        const component = entity as ComponentEntity;
        return (
          <button
            className={cn(tailwindClassString)}
            data-entity-type="component"
            data-entity-id={component.id}
            data-component-type={component.type}
          >
            {childComponents}
          </button>
        );
      }

      case "UITScrollView": {
        const component = entity as ComponentEntity;
        return (
          <div
            className={cn("overflow-auto", tailwindClassString)}
            data-entity-type="component"
            data-entity-id={component.id}
            data-component-type={component.type}
          >
            {childComponents}
          </div>
        );
      }

      default: {
        // Fallback for unknown component types
        return (
          <div
            className={cn(tailwindClassString)}
            data-entity-type="unknown"
            data-entity-id={entity.id}
            data-uit-type={entity.uitType}
          >
            <span className="text-red-500">
              Unknown component: {entity.uitType}
            </span>
            {childComponents}
          </div>
        );
      }
    }
  };

  const structuredTree = buildTreeObject(componentList, rootId);
  const structuredTreeNode = buildTreeFromObject(structuredTree as TreeNode);

  return structuredTreeNode;
}
