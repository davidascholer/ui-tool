/**
 * React Native:
 * A React Native safe image component that loads images from different sources and adds useful features like caching, progressive loading, and more.
 */

import type { TailwindImageInterface } from "../../../interface/tailwind-interfaces/TailwindImageInterface";

export function UITImage({
  tailwindClasses,
  text = false,
  currentExport = "react",
}: {
  tailwindClasses?: TailwindImageInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<image className={${tailwindClasses?.join(" ")}} />`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <image className={tailwindClasses?.join(" ")} />
      )}
    </>
  );
}
