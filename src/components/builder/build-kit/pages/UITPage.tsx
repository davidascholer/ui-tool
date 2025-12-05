/**
 * A container for displaying multiple containers
 */

import { cn } from "@/utils/styles";
import type { TailwindDivInterface } from "../../interface/tailwind-interfaces/TailwindDivInterface";

const tailwindClassesStatic =
  "flex flex-col min-w-[320px] max-w-6xl mx-auto justify-center items-center gap-4 p-4";

export function UITPage({
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
  const tailwindClassesDynamic = tailwindClasses?.join(" ");

  let componentText = ``;
  if (currentExport === "react") {
    componentText = `<div
          className=${cn(tailwindClassesStatic, tailwindClassesDynamic)}
        />`;
  } else if (currentExport === "react-native") {
    componentText = `<p>not implemented yet</p>`;
  }

  return (
    <>
      {text ? (
        <p>{componentText}</p>
      ) : (
        <div className={cn(tailwindClassesStatic, tailwindClassesDynamic)}>
          {children}
        </div>
      )}
    </>
  );
}
