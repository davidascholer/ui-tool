/**
 * A container for displaying multiple containers
 */

import { cn } from "@/utils/styles";
import type { TailwindDivInterface } from "../tailwind-interfaces/TailwindDivInterface";

const tailwindClassesLocal =
  "flex flex-row flex-1 flex-wrap min-w-[320px] max-w-6xl mx-auto text-center justify-center items-center gap-4 bg-blue-300 p-4";

export function UITContainer({
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
  const tailwindClassesProp = tailwindClasses?.join(" ");

  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<div
          className=${cn(tailwindClassesLocal, tailwindClassesProp)}
        />`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <div className={cn(tailwindClassesLocal, tailwindClassesProp)}>
          {children}
        </div>
      )}
    </>
  );
}
