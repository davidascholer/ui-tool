/**
 * React Native:
 * The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.
View is designed to be nested inside other views and can have 0 to many children of any type.
 *
 * Web:
 * The HTML <div> element is a generic container for flow content. It has no effect on content or layout until styled with CSS.
 */

import type { TailwindDivInterface } from "../tailwind-interfaces/TailwindDivInterface";

export function UITView({
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
