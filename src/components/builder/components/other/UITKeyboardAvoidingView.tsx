/**
 * React Native:
 * This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed.
 *
 * Web:
 * Virtual keyboard handling can be done with the Visual Viewport API or CSS environment variables. Modern browsers support keyboard-inset CSS properties for responsive layouts.
 */

import type { TailwindDivInterface } from "../tailwind-interfaces/TailwindDivInterface";

export function UITKeyboardAvoidingView({
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
