/**
 * React Native:
 * A React component for displaying text.
Text supports nesting, styling, and touch handling.
In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles.
 *
 * Web:
 * Text elements like <p>, <span>, <h1>-<h6> are used to display text content. They support various styling and semantic meaning for accessibility and SEO.
 */

import type { TailwindTextInterface } from "../../../interface/tailwind-interfaces/TailwindTextInterface";

export function UITText({
  tailwindClasses,
  text = false,
  currentExport = "react",
  children,
}: {
  tailwindClasses?: TailwindTextInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
  children?: React.ReactNode;
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<p className={${tailwindClasses?.join(" ")}}>{children}</p>`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <p className={tailwindClasses?.join(" ")}>{children}</p>
      )}
    </>
  );
}
