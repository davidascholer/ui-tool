/**
 * React Native:
 * Component that wraps platform ScrollView while providing integration with touch locking "responder" system.
 *
 * Web:
 * A scrollable container implemented using a <div> with overflow properties. CSS overflow (auto/scroll) enables scrolling behavior for content that exceeds the container dimensions.
 */

import type { TailwindDivInterface } from "../../../interface/tailwind-interfaces/TailwindDivInterface";

export function UITScrollView({
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
