/**
 * React Native:
 * Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.
 *
 * Web:
 * Web doesn't have a native status bar component. Can be simulated with a fixed-position header. Meta tags control browser chrome appearance (theme-color, apple-mobile-web-app-status-bar-style).
 */

import type { TailwindDivInterface } from "../tailwind-interfaces/TailwindDivInterface";

export function UITStatusBar({
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
