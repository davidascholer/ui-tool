/**
 * React Native:
 * Renders a boolean input.
This is a controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions. If the value prop is not updated, the component will continue to render the supplied value prop instead of the expected result of any user actions.
 *
 * Web:
 * The HTML <input type="checkbox"> element represents a boolean toggle. Can be styled as a switch using CSS or custom components.
 */

import type { TailwindButtonInterface } from "../tailwind-interfaces/TailwindButtonInterface";

export function UITSwitch({
  tailwindClasses,
  text = false,
  currentExport = "react",
}: {
  tailwindClasses?: TailwindButtonInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<input type="checkbox" className={${tailwindClasses?.join(" ")}} />`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <input type="checkbox" className={tailwindClasses?.join(" ")} />
      )}
    </>
  );
}
