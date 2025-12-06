/**
 * CodeView - Placeholder for future code export functionality
 */

import ReactDOMServer from "react-dom/server";
import type {
  ComponentEntity,
  ContainerEntity,
  PageEntity,
} from "@/utils/types";
import { BuiltCodeFromProps } from "@/components/common/BuiltCodeFromProps";
import { CodeBlock } from "@/components/common/CodeBlock";
import { formatSimpleHtml } from "@/utils/codeBuilder";

interface CodeViewProps {
  componentList: (PageEntity | ContainerEntity | ComponentEntity)[];
  className?: string;
}

// Todo: Make "page" be the root of the object and deprecate "allPages";

export function CodeView({ componentList, className = "" }: CodeViewProps) {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Placeholder content */}
      <div className="flex-1 flex items-start justify-center p-8 bg-gray-50">
        <CodeBlock
          code={formatSimpleHtml(ReactDOMServer.renderToStaticMarkup(
            <BuiltCodeFromProps componentList={componentList} />
          ))}
          language="typescript"
          filename="page-1.tsx"
        />
      </div>
    </div>
  );
}
