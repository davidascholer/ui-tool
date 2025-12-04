/**
 * React Native:
 * A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
The most basic use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to.
 *
 * Web:
 * The HTML <input> element is used to create interactive controls for web-based forms to accept data from the user. It supports various types including text, password, email, number, date, and more.
 */

import type { TailwindTextInterface } from "../../../interface/tailwind-interfaces/TailwindTextInterface";

export function UITTextInput({
  tailwindClasses,
  text = false,
  currentExport = "react",
}: {
  tailwindClasses?: TailwindTextInterface[];
  text?: boolean;
  currentExport?: "react" | "react-native";
}) {
  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<input className={${tailwindClasses?.join(" ")}} />`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <input className={tailwindClasses?.join(" ")} />
      )}
    </>
  );
}
