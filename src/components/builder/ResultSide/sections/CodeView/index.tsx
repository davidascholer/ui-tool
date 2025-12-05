/**
 * CodeView - Placeholder for future code export functionality
 */

import ReactDOMServer from "react-dom/server";
import { UITPage } from "@/components/builder/build-kit/pages/UITPage";
import { CodeBlock } from "@/components/common/CodeBlock";

interface CodeViewProps {
  pages: unknown[];
  className?: string;
}

export function CodeView({ className = "" }: CodeViewProps) {
  const code = ReactDOMServer.renderToString(<UITPage></UITPage>);

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Code Export</span>
          <span className="text-xs text-gray-500">(Coming Soon)</span>
        </div>
      </div>

      {/* Placeholder content */}
      <div className="flex-1 flex items-start justify-center p-8 bg-gray-50">
        <CodeBlock
          code={code}
          language="typescript"
          filename="page-1.tsx"
        />
      </div>
    </div>
  );
}
