/**
 * React Native:
 * A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
 *
 * Web:
 *
 */
/**
 * Tailwind Classes:
 * Sizing

Width: w-{size}, max-w-{size}, min-w-{size}, w-full
Height: h-{size}, max-h-{size}, min-h-{size}, h-auto, h-full, h-screen
Size (both): size-{size} (e.g., size-24, size-48)

Display & Layout

block, inline, inline-block
mx-auto (horizontal centering)
aspect-{ratio} (e.g., aspect-square, aspect-video, aspect-3/2)

Object Fit & Position

Object fit: object-contain, object-cover, object-fill, object-none, object-scale-down
Object position: object-top, object-bottom, object-left, object-right, object-center, object-top-left, object-top-right, object-bottom-left, object-bottom-right

Borders & Corners

Border radius: rounded, rounded-{size}, rounded-lg, rounded-xl, rounded-full, rounded-[50%]
Border: border, border-{width}, border-{color}

Shadows

shadow, shadow-{size} (e.g., shadow-lg, shadow-xl)
shadow-{color} (e.g., shadow-gray-300, shadow-black/30)

Filters & Effects

Grayscale: grayscale, grayscale-0
Blur: blur, blur-{size}, blur-none
Other filters: brightness-{amount}, contrast-{amount}, saturate-{amount}
filter

Spacing

Padding: p-{size}
Margin: m-{size}, mt-{size}, mb-{size}, ml-{size}, mr-{size}, ms-auto, me-auto

Transitions & Animations

transition, transition-{property} (e.g., transition-shadow, transition-all)
duration-{time} (e.g., duration-300)
ease-{function} (e.g., ease-in-out)

Hover & Interactive States

hover:{any-class} (e.g., hover:shadow-lg, hover:grayscale-0, hover:blur-none)
cursor-pointer

Transform & Scale

scale-{percentage} (e.g., scale-95, scale-110)
rotate-{degrees}
transform

Responsive Design
All classes can be prefixed with breakpoints: sm:, md:, lg:, xl:, 2xl: (e.g., md:w-32, lg:w-48)
Container Queries
When inside a container: @sm:, @md:, @lg: prefixes
These are the core Tailwind utility classes commonly used with <img> elements. You can combine multiple classes to create complex styling effects.
 */

export function UITImage() {
  return <image></image>;
}
