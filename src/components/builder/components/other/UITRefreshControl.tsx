/** 
 * React Native:
 * This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.

 * 
 * Web:
 * Pull-to-refresh can be implemented using touch events, scroll position monitoring, and visual indicators. Modern browsers may support the overscroll-behavior CSS property.
 */

import type { TailwindDivInterface } from "../tailwind-interfaces/TailwindDivInterface";

export function UITRefreshControl({
  tailwindClasses,
  text = false,
  currentExport = "react",
  children,
}: {
  tailwindClasses?: TailwindDivInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
  children?: React.ReactNode;
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<div className={${tailwindClasses?.join(" ")}}>{children}</div>`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <div className={tailwindClasses?.join(" ")}>{children}</div>
      )}
    </>
  );
}
