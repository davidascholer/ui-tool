/**
 * React Native:
 * The Modal component is a basic way to present content above an enclosing view.
 *
 * Web:
 * The HTML <dialog> element represents a modal or non-modal dialog box. It provides built-in accessibility features and backdrop management. Can also be created with positioned div overlays.
 */

import type { TailwindDivInterface } from "../../../interface/tailwind-interfaces/TailwindDivInterface";

export function UITModal({
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
    componentText = `<dialog className={${tailwindClasses?.join(" ")}}>{children}</dialog>`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <dialog className={tailwindClasses?.join(" ")}>{children}</dialog>
      )}
    </>
  );
}
