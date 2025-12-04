/**
 * React Native:
 * Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.
 *
 * Web:
 * The HTML <button> element represents a clickable button, used to submit forms or trigger actions. It supports various types and states for interactive user interfaces.
 */

import type { TailwindButtonInterface } from "../tailwind-interfaces/TailwindButtonInterface";

export function UITPressable({
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
