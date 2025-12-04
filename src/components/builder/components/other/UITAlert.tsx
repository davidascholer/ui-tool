/**
 * React Native:
 * Launches an alert dialog with the specified title and message. Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button. This is an API that works both on Android and iOS and can show static alerts. Alert that prompts the user to enter some information is available on iOS only.
 *
 * Web:
 * Modal dialog boxes can be created using JavaScript's alert(), confirm(), or prompt(), or custom modal components using <dialog> element or div overlays.
 */

import type { TailwindDivInterface } from "../tailwind-interfaces/TailwindDivInterface";

export function UITAlert({
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
