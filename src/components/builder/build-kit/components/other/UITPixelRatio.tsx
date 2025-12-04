/**
 * React Native:
 *  PixelRatio gives you access to the device's pixel density and font scale.

 * 
 * Web:
 * Web provides window.devicePixelRatio to access device pixel density. CSS uses relative units (rem, em, vw, vh) and media queries for responsive sizing.
 */

import type { TailwindDivInterface } from "../../../interface/tailwind-interfaces/TailwindDivInterface";

export function UITPixelRatio({
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
