/**
 * React Native:
 * Displays a circular loading indicator.
 *
 * Web:
 * Loading spinners can be created with CSS animations, SVG animations, or the <progress> element for determinate progress. Commonly implemented with animated SVG or CSS keyframes.
 */

import type { TailwindDivInterface } from "../../../interface/tailwind-interfaces/TailwindDivInterface";

export function UITActivityIndicator({
  tailwindClasses,
  text = false,
  currentExport = "react",
}: {
  tailwindClasses?: TailwindDivInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<div className={${tailwindClasses?.join(" ")}} role="status"><span className="sr-only">Loading...</span></div>`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <div className={tailwindClasses?.join(" ")} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
}
