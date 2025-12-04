/**
 * React Native:
 * A basic button component that should render nicely on any platform. Supports a minimal level of customization.
If this button doesn't look right for your app, you can build your own button using Pressable. For inspiration, look at the source code for the Button component.
 *
 * Web:
 * The HTML <button> element represents a clickable button with enhanced styling capabilities. It's a semantic element for user interactions.
 */

import type { TailwindButtonInterface } from "../../../interface/tailwind-interfaces/TailwindButtonInterface";

export function UITButton({
  tailwindClasses,
  text = false,
  currentExport = "react",
  children,
}: {
  tailwindClasses?: TailwindButtonInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
  children?: React.ReactNode;
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<button className={${tailwindClasses?.join(" ")}}>{children}</button>`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <button className={tailwindClasses?.join(" ")}>{children}</button>
      )}
    </>
  );
}
