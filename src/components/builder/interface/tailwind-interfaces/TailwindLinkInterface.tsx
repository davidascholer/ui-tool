
// Typography - Font Family
export type LinkFontFamily = 'font-sans' | 'font-serif' | 'font-mono';

// Typography - Font Size
export type LinkFontSize = 
  | 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl'
  | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl'
  | 'text-7xl' | 'text-8xl' | 'text-9xl';

// Typography - Font Weight
export type LinkFontWeight = 
  | 'font-thin' | 'font-extralight' | 'font-light' | 'font-normal'
  | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';

// Typography - Font Style
export type LinkFontStyle = 'italic' | 'not-italic';

// Typography - Text Color
export type LinkTextColor = 
  | `text-${string}` | 'text-inherit' | 'text-current'
  | 'text-transparent' | 'text-black' | 'text-white';

// Typography - Text Alignment
export type LinkTextAlign = 
  | 'text-left' | 'text-center' | 'text-right'
  | 'text-justify' | 'text-start' | 'text-end';

// Typography - Text Decoration (Essential for Links)
export type LinkTextDecoration = 
  | 'underline' | 'overline' | 'line-through' | 'no-underline';
export type LinkDecorationColor = `decoration-${string}`;
export type LinkDecorationStyle = 
  | 'decoration-solid' | 'decoration-double' | 'decoration-dotted'
  | 'decoration-dashed' | 'decoration-wavy';
export type LinkDecorationThickness = 
  | 'decoration-auto' | 'decoration-from-font'
  | 'decoration-0' | 'decoration-1' | 'decoration-2' | 'decoration-4' | 'decoration-8';
export type LinkUnderlineOffset = 
  | 'underline-offset-auto' | 'underline-offset-0' | 'underline-offset-1'
  | 'underline-offset-2' | 'underline-offset-4' | 'underline-offset-8';

// Typography - Text Transform
export type LinkTextTransform = 
  | 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';

// Typography - Text Overflow
export type LinkTextOverflow = 
  | 'truncate' | 'text-ellipsis' | 'text-clip';

// Typography - Letter Spacing
export type LinkLetterSpacing = 
  | 'tracking-tighter' | 'tracking-tight' | 'tracking-normal'
  | 'tracking-wide' | 'tracking-wider' | 'tracking-widest';

// Typography - Line Height
export type LinkLineHeight = 
  | 'leading-none' | 'leading-tight' | 'leading-snug' | 'leading-normal'
  | 'leading-relaxed' | 'leading-loose' | `leading-${string}`;

// Typography - Vertical Alignment
export type LinkVerticalAlign = 
  | 'align-baseline' | 'align-top' | 'align-middle' | 'align-bottom'
  | 'align-text-top' | 'align-text-bottom' | 'align-sub' | 'align-super';

// Typography - Whitespace
export type LinkWhitespace = 
  | 'whitespace-normal' | 'whitespace-nowrap' | 'whitespace-pre'
  | 'whitespace-pre-line' | 'whitespace-pre-wrap';

// Typography - Word Break
export type LinkWordBreak = 
  | 'break-normal' | 'break-words' | 'break-all' | 'break-keep';

// Layout & Display
export type LinkDisplay = 
  | 'inline' | 'inline-block' | 'block' | 'flex' | 'inline-flex'
  | 'grid' | 'inline-grid' | 'hidden';

// Flexbox
export type LinkFlex = 
  | 'flex-row' | 'flex-col' | 'flex-wrap' | 'flex-nowrap';
export type LinkJustify = 
  | 'justify-start' | 'justify-center' | 'justify-end'
  | 'justify-between' | 'justify-around';
export type LinkAlignItems = 
  | 'items-start' | 'items-center' | 'items-end'
  | 'items-baseline' | 'items-stretch';
export type LinkGap = `gap-${string}` | `gap-x-${string}` | `gap-y-${string}`;

// Sizing
export type LinkWidth = 
  | `w-${string}` | 'w-full' | 'w-auto' | 'w-fit' | 'w-max' | 'w-min'
  | `max-w-${string}` | `min-w-${string}`;
export type LinkHeight = 
  | `h-${string}` | 'h-auto' | 'h-full' | 'h-fit'
  | `max-h-${string}` | `min-h-${string}`;

// Spacing - Padding
export type LinkPadding = 
  | `p-${string}` | `px-${string}` | `py-${string}`
  | `pt-${string}` | `pr-${string}` | `pb-${string}` | `pl-${string}`
  | `ps-${string}` | `pe-${string}`;

// Spacing - Margin
export type LinkMargin = 
  | `m-${string}` | `mx-${string}` | `my-${string}`
  | `mt-${string}` | `mr-${string}` | `mb-${string}` | `ml-${string}`
  | `ms-${string}` | `me-${string}` | `-m-${string}` | `-mx-${string}`;

// Backgrounds
export type LinkBackground = 
  | `bg-${string}` | 'bg-transparent' | 'bg-white' | 'bg-black';
export type LinkBgGradient = `bg-gradient-to-${string}`;
export type LinkBgGradientStop = `from-${string}` | `via-${string}` | `to-${string}`;
export type LinkBgClip = 'bg-clip-text';

// Borders
export type LinkBorderWidth = 
  | 'border' | `border-${string}` | `border-t-${string}` 
  | `border-r-${string}` | `border-b-${string}` | `border-l-${string}`;
export type LinkBorderColor = `border-${string}`;
export type LinkBorderStyle = 
  | 'border-solid' | 'border-dashed' | 'border-dotted' | 'border-double' | 'border-none';
export type LinkBorderRadius = 
  | 'rounded' | `rounded-${string}` | 'rounded-none' | 'rounded-full' | 'rounded-lg' | 'rounded-xl';

// Effects - Opacity
export type LinkOpacity = `opacity-${string}`;

// Effects - Box Shadow
export type LinkBoxShadow = 
  | 'shadow' | 'shadow-sm' | 'shadow-md' | 'shadow-lg' | 'shadow-xl'
  | 'shadow-2xl' | 'shadow-inner' | 'shadow-none';

// Effects - Ring (Focus Rings)
export type LinkRing = 
  | 'ring' | `ring-${string}` | 'ring-inset';
export type LinkRingOffset = `ring-offset-${string}`;

// Effects - Mix Blend Mode
export type LinkMixBlend = `mix-blend-${string}`;

// Effects - Filters
export type LinkBlur = `blur-${string}` | 'blur-none';
export type LinkBrightness = `brightness-${string}`;
export type LinkContrast = `contrast-${string}`;
export type LinkGrayscale = 'grayscale' | 'grayscale-0';
export type LinkHueRotate = `hue-rotate-${string}`;
export type LinkInvert = 'invert' | 'invert-0';
export type LinkSaturate = `saturate-${string}`;
export type LinkSepia = 'sepia' | 'sepia-0';

// Transitions & Animations
export type LinkTransition = 
  | 'transition' | 'transition-all' | 'transition-colors' | 'transition-opacity'
  | 'transition-transform' | 'transition-shadow' | 'transition-none';
export type LinkDuration = `duration-${string}`;
export type LinkEase = 
  | 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type LinkDelay = `delay-${string}`;
export type LinkAnimation = 
  | 'animate-pulse' | 'animate-bounce' | 'animate-spin' | 'animate-ping';

// Transforms
export type LinkScale = `scale-${string}` | `scale-x-${string}` | `scale-y-${string}`;
export type LinkRotate = `rotate-${string}` | `-rotate-${string}`;
export type LinkTranslate = 
  | `translate-x-${string}` | `translate-y-${string}`
  | `-translate-x-${string}` | `-translate-y-${string}`;
export type LinkSkew = `skew-x-${string}` | `skew-y-${string}`;
export type LinkTransformOrigin = 
  | 'origin-center' | 'origin-top' | 'origin-bottom' | 'origin-left' | 'origin-right';

// Interactivity - Cursor
export type LinkCursor = 
  | 'cursor-pointer' | 'cursor-default' | 'cursor-not-allowed'
  | 'cursor-wait' | 'cursor-text' | 'cursor-move';

// Interactivity - User Select
export type LinkUserSelect = 
  | 'select-none' | 'select-text' | 'select-all' | 'select-auto';

// Interactivity - Pointer Events
export type LinkPointerEvents = 
  | 'pointer-events-none' | 'pointer-events-auto';

// Interactivity - Scroll Behavior
export type LinkScrollBehavior = 
  | 'scroll-smooth' | 'scroll-auto';

// Positioning
export type LinkPosition = 
  | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';
export type LinkInset = 
  | `top-${string}` | `right-${string}` | `bottom-${string}` | `left-${string}`
  | `inset-${string}` | `inset-x-${string}` | `inset-y-${string}`;
export type LinkZIndex = `z-${string}` | 'z-auto';

// Overflow
export type LinkOverflow = 
  | 'overflow-visible' | 'overflow-hidden' | 'overflow-scroll'
  | 'overflow-auto' | 'overflow-clip' | `overflow-x-${string}` | `overflow-y-${string}`;

// Visibility
export type LinkVisibility = 
  | 'visible' | 'invisible' | 'collapse';

// Accessibility
export type LinkAccessibility = 
  | 'sr-only' | 'not-sr-only';

// State Variants - Hover (Most Common)
export type LinkHover = `hover:${string}`;

// State Variants - Focus (Accessibility)
export type LinkFocus = `focus:${string}` | 'focus:outline-none' | `focus-visible:${string}`;

// State Variants - Active (Click/Press)
export type LinkActive = `active:${string}`;

// State Variants - Visited (Link-Specific)
export type LinkVisited = `visited:${string}`;

// State Variants - Disabled
export type LinkDisabled = `disabled:${string}`;

// State Variants - Group
export type LinkGroup = 
  | `group-hover:${string}` | `group-focus:${string}` | `group-active:${string}`;

// State Variants - Peer
export type LinkPeer = `peer-hover:${string}` | `peer-focus:${string}`;

// State Variants - Dark Mode
export type LinkDark = `dark:${string}`;

// Responsive Design
export type LinkBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type LinkResponsive = `${LinkBreakpoint}:${string}`;

// Container Queries
export type LinkContainerQuery = `@${LinkBreakpoint}:${string}`;

// Main interface for link (anchor) element Tailwind utility props
export interface TailwindLinkInterface {
  fontFamily?: LinkFontFamily;
  fontSize?: LinkFontSize;
  fontWeight?: LinkFontWeight;
  fontStyle?: LinkFontStyle;
  textColor?: LinkTextColor;
  textAlign?: LinkTextAlign;
  textDecoration?: LinkTextDecoration;
  decorationColor?: LinkDecorationColor;
  decorationStyle?: LinkDecorationStyle;
  decorationThickness?: LinkDecorationThickness;
  underlineOffset?: LinkUnderlineOffset;
  textTransform?: LinkTextTransform;
  textOverflow?: LinkTextOverflow;
  letterSpacing?: LinkLetterSpacing;
  lineHeight?: LinkLineHeight;
  verticalAlign?: LinkVerticalAlign;
  whitespace?: LinkWhitespace;
  wordBreak?: LinkWordBreak;
  display?: LinkDisplay;
  flex?: LinkFlex;
  justify?: LinkJustify;
  alignItems?: LinkAlignItems;
  gap?: LinkGap;
  width?: LinkWidth;
  height?: LinkHeight;
  padding?: LinkPadding;
  margin?: LinkMargin;
  background?: LinkBackground;
  bgGradient?: LinkBgGradient;
  bgGradientStop?: LinkBgGradientStop;
  bgClip?: LinkBgClip;
  borderWidth?: LinkBorderWidth;
  borderColor?: LinkBorderColor;
  borderStyle?: LinkBorderStyle;
  borderRadius?: LinkBorderRadius;
  opacity?: LinkOpacity;
  boxShadow?: LinkBoxShadow;
  ring?: LinkRing;
  ringOffset?: LinkRingOffset;
  mixBlend?: LinkMixBlend;
  blur?: LinkBlur;
  brightness?: LinkBrightness;
  contrast?: LinkContrast;
  grayscale?: LinkGrayscale;
  hueRotate?: LinkHueRotate;
  invert?: LinkInvert;
  saturate?: LinkSaturate;
  sepia?: LinkSepia;
  transition?: LinkTransition;
  duration?: LinkDuration;
  ease?: LinkEase;
  delay?: LinkDelay;
  animation?: LinkAnimation;
  scale?: LinkScale;
  rotate?: LinkRotate;
  translate?: LinkTranslate;
  skew?: LinkSkew;
  transformOrigin?: LinkTransformOrigin;
  cursor?: LinkCursor;
  userSelect?: LinkUserSelect;
  pointerEvents?: LinkPointerEvents;
  scrollBehavior?: LinkScrollBehavior;
  position?: LinkPosition;
  inset?: LinkInset;
  zIndex?: LinkZIndex;
  overflow?: LinkOverflow;
  visibility?: LinkVisibility;
  accessibility?: LinkAccessibility;
  hover?: LinkHover;
  focus?: LinkFocus;
  active?: LinkActive;
  visited?: LinkVisited;
  disabled?: LinkDisabled;
  group?: LinkGroup;
  peer?: LinkPeer;
  dark?: LinkDark;
  responsive?: LinkResponsive;
  containerQuery?: LinkContainerQuery;
}
