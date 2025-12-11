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
    <div className={`w-full h-full ${className}`}>
      <BuiltCodeFromProps componentList={componentList} enableArbitraryStyles={true} />
    </div>
  );
}
