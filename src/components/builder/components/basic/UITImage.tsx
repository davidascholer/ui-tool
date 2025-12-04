/**
 * React Native:
 * A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
 *
 * Web:
 *
 */

import type { TailwindImageInterface } from "../tailwind-interfaces/TailwindImageInterface";

export function UITImage({
  tailwindClasses,
}: {
  tailwindClasses?: TailwindImageInterface[];
}) {
  return <image className={tailwindClasses?.join(" ")} />;
}
