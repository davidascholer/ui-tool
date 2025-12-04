/**
 * Layout

Display: block, inline-block, inline, flex, inline-flex, grid, inline-grid, hidden
Container: container
Box sizing: box-border, box-content

Flexbox

Direction: flex-row, flex-row-reverse, flex-col, flex-col-reverse
Wrap: flex-wrap, flex-wrap-reverse, flex-nowrap
Flex: flex-1, flex-auto, flex-initial, flex-none
Grow/Shrink: grow, grow-0, shrink, shrink-0
Justify: justify-start, justify-end, justify-center, justify-between, justify-around, justify-evenly, justify-stretch
Align items: items-start, items-end, items-center, items-baseline, items-stretch
Align content: content-start, content-end, content-center, content-between, content-around, content-evenly, content-stretch
Align self: self-auto, self-start, self-end, self-center, self-stretch, self-baseline
Gap: gap-{size}, gap-x-{size}, gap-y-{size}

Grid

Template columns: grid-cols-{n}, grid-cols-none
Template rows: grid-rows-{n}, grid-rows-none
Column span: col-span-{n}, col-span-full, col-auto
Row span: row-span-{n}, row-span-full, row-auto
Grid flow: grid-flow-row, grid-flow-col, grid-flow-dense
Auto columns: auto-cols-auto, auto-cols-min, auto-cols-max, auto-cols-fr
Auto rows: auto-rows-auto, auto-rows-min, auto-rows-max, auto-rows-fr
Place content: place-content-center, place-content-start, place-content-end, etc.
Place items: place-items-center, place-items-start, place-items-end, etc.
Place self: place-self-auto, place-self-start, place-self-end, place-self-center, etc.

Spacing

Padding: p-{size}, px-{size}, py-{size}, pt-{size}, pr-{size}, pb-{size}, pl-{size}, ps-{size}, pe-{size}
Margin: m-{size}, mx-{size}, my-{size}, mt-{size}, mr-{size}, mb-{size}, ml-{size}, ms-{size}, me-{size}, -m-{size} (negative margins)
Space between: space-x-{size}, space-y-{size}, space-x-reverse, space-y-reverse

Sizing

Width: w-{size}, w-full, w-screen, w-min, w-max, w-fit, min-w-{size}, max-w-{size}
Height: h-{size}, h-full, h-screen, h-min, h-max, h-fit, min-h-{size}, max-h-{size}
Size: size-{size} (sets both width and height)

Typography

Font family: font-sans, font-serif, font-mono
Font size: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, etc.
Font weight: font-thin, font-extralight, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black
Font style: italic, not-italic
Line height: leading-{size}, leading-none, leading-tight, leading-normal, leading-relaxed, leading-loose
Text align: text-left, text-center, text-right, text-justify, text-start, text-end
Text color: text-{color}-{shade} (e.g., text-gray-500, text-blue-600)
Text decoration: underline, overline, line-through, no-underline
Text transform: uppercase, lowercase, capitalize, normal-case
Text overflow: truncate, text-ellipsis, text-clip
White space: whitespace-normal, whitespace-nowrap, whitespace-pre, whitespace-pre-line, whitespace-pre-wrap, whitespace-break-spaces
Word break: break-normal, break-words, break-all, break-keep

Backgrounds

Color: bg-{color}-{shade}, bg-transparent, bg-current
Gradient: bg-gradient-to-{direction} (e.g., bg-gradient-to-r, bg-gradient-to-br)
Gradient stops: from-{color}, via-{color}, to-{color}
Background size: bg-auto, bg-cover, bg-contain
Background position: bg-center, bg-top, bg-bottom, bg-left, bg-right, etc.
Background repeat: bg-repeat, bg-no-repeat, bg-repeat-x, bg-repeat-y, bg-repeat-round, bg-repeat-space
Background attachment: bg-fixed, bg-local, bg-scroll
Background clip: bg-clip-border, bg-clip-padding, bg-clip-content, bg-clip-text
Background origin: bg-origin-border, bg-origin-padding, bg-origin-content

Borders

Width: border, border-{width}, border-{side}-{width}, border-x-{width}, border-y-{width}
Color: border-{color}-{shade}
Style: border-solid, border-dashed, border-dotted, border-double, border-hidden, border-none
Radius: rounded, rounded-{size}, rounded-none, rounded-full, rounded-{corner}-{size}
Divide (between children): divide-x, divide-y, divide-{color}, divide-{width}

Effects

Box shadow: shadow, shadow-{size}, shadow-none, shadow-inner
Opacity: opacity-{amount} (e.g., opacity-0, opacity-50, opacity-100)
Mix blend: mix-blend-{mode} (e.g., mix-blend-multiply, mix-blend-screen)
Background blend: bg-blend-{mode}

Filters

Blur: blur, blur-{size}, blur-none
Brightness: brightness-{amount}
Contrast: contrast-{amount}
Grayscale: grayscale, grayscale-0
Hue rotate: hue-rotate-{degrees}
Invert: invert, invert-0
Saturate: saturate-{amount}
Sepia: sepia, sepia-0
Drop shadow: drop-shadow, drop-shadow-{size}, drop-shadow-none
Backdrop filters: backdrop-blur-{size}, backdrop-brightness-{amount}, etc.

Transitions & Animation

Transition property: transition, transition-none, transition-all, transition-colors, transition-opacity, transition-shadow, transition-transform
Duration: duration-{ms} (e.g., duration-150, duration-300)
Timing: ease-linear, ease-in, ease-out, ease-in-out
Delay: delay-{ms}
Animation: animate-none, animate-spin, animate-ping, animate-pulse, animate-bounce

Transforms

Scale: scale-{amount}, scale-x-{amount}, scale-y-{amount}
Rotate: rotate-{degrees}, -rotate-{degrees}
Translate: translate-x-{size}, translate-y-{size}, -translate-x-{size}, -translate-y-{size}
Skew: skew-x-{degrees}, skew-y-{degrees}, -skew-x-{degrees}, -skew-y-{degrees}
Transform origin: origin-center, origin-top, origin-bottom, origin-left, origin-right, etc.

Interactivity

Cursor: cursor-auto, cursor-default, cursor-pointer, cursor-wait, cursor-text, cursor-move, cursor-not-allowed, etc.
Pointer events: pointer-events-none, pointer-events-auto
Resize: resize-none, resize, resize-x, resize-y
Scroll behavior: scroll-auto, scroll-smooth
Scroll snap: snap-start, snap-end, snap-center, snap-align-none, snap-normal, snap-always
Touch action: touch-auto, touch-none, touch-pan-x, touch-pan-y, etc.
User select: select-none, select-text, select-all, select-auto
Will change: will-change-auto, will-change-scroll, will-change-contents, will-change-transform

Positioning

Position: static, fixed, absolute, relative, sticky
Inset: inset-{size}, inset-x-{size}, inset-y-{size}, top-{size}, right-{size}, bottom-{size}, left-{size}, start-{size}, end-{size}
Z-index: z-{number}, z-auto

Overflow

overflow-auto, overflow-hidden, overflow-visible, overflow-scroll, overflow-clip
overflow-x-{value}, overflow-y-{value}
Scroll margin/padding: scroll-m-{size}, scroll-p-{size}, etc.

Visibility

visible, invisible, collapse

Accessibility

Screen readers: sr-only, not-sr-only

States & Variants
All classes can be combined with state prefixes:

Hover: hover:{class}
Focus: focus:{class}
Active: active:{class}
Disabled: disabled:{class}
Group hover: group-hover:{class}
Peer states: peer-checked:{class}, peer-focus:{class}, etc.
Dark mode: dark:{class}
Responsive: sm:, md:, lg:, xl:, 2xl:
Container queries: @sm:, @md:, @lg:, @xl:, @2xl:

Special

Aspect ratio: aspect-auto, aspect-square, aspect-video, aspect-{custom}
Columns: columns-{count}, columns-auto
Break before/after/inside: break-before-auto, break-after-avoid, break-inside-avoid-column, etc.
Object fit/position: object-contain, object-cover, object-fill, object-none, object-scale-down, object-{position}
 */