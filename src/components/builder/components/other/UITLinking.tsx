/**
 * React Native:
 * Linking gives you a general interface to interact with both incoming and outgoing app links.
 * 
 * Web:
 * The HTML <a> (anchor) element creates hyperlinks to other pages, locations within the same page, email addresses, or any URL. Supports various protocols (http, https, mailto, tel).
 */

import type { TailwindLinkInterface } from "../tailwind-interfaces/TailwindLinkInterface";

export function UITLinking({
  tailwindClasses,
  text = false,
  currentExport = "react",
  children,
}: {
  tailwindClasses?: TailwindLinkInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
  children?: React.ReactNode;
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<a className={${tailwindClasses?.join(" ")}}>{children}</a>`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <a className={tailwindClasses?.join(" ")}>{children}</a>
      )}
    </>
  );
}
