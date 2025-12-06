/**
 * LiveView - Placeholder for future live preview functionality
 */

import type {
  ComponentEntity,
  ContainerEntity,
  PageEntity,
} from "@/utils/types";
import { BuiltCodeFromProps } from "@/components/common/BuiltCodeFromProps";

interface LiveViewProps {
  componentList: (PageEntity | ContainerEntity | ComponentEntity)[];
  className?: string;
}

// Todo: Make "page" be the root of the object and deprecate "allPages";

export function LiveView({ componentList, className = "" }: LiveViewProps) {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Placeholder content */}
      <div className="flex-1 flex items-start justify-center p-8 bg-gray-50">
        <BuiltCodeFromProps componentList={componentList} />
      </div>
    </div>
  );
}
