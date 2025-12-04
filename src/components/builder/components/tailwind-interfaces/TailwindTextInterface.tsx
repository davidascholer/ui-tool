
// Typography - Font Family
export type TextFontFamily = 'font-sans' | 'font-serif' | 'font-mono';

// Typography - Font Size
export type TextFontSize = 
  | 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl'
  | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl'
  | 'text-7xl' | 'text-8xl' | 'text-9xl';

// Typography - Font Weight
export type TextFontWeight = 
  | 'font-thin' | 'font-extralight' | 'font-light' | 'font-normal'
  | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';

// Typography - Font Style
export type TextFontStyle = 'italic' | 'not-italic';

// Typography - Font Variant Numeric
export type TextFontVariantNumeric = 
  | 'normal-nums' | 'ordinal' | 'slashed-zero' | 'lining-nums'
  | 'oldstyle-nums' | 'proportional-nums' | 'tabular-nums'
  | 'diagonal-fractions' | 'stacked-fractions';

// Typography - Line Height
export type TextLineHeight = 
  | 'leading-none' | 'leading-tight' | 'leading-snug' | 'leading-normal'
  | 'leading-relaxed' | 'leading-loose' | `leading-${string}`;

// Typography - Letter Spacing
export type TextLetterSpacing = 
  | 'tracking-tighter' | 'tracking-tight' | 'tracking-normal'
  | 'tracking-wide' | 'tracking-wider' | 'tracking-widest';

// Typography - Text Color
export type TextColor = 
  | `text-${string}` | 'text-inherit' | 'text-current'
  | 'text-transparent' | 'text-black' | 'text-white';

// Typography - Text Alignment
export type TextAlign = 
  | 'text-left' | 'text-center' | 'text-right'
  | 'text-justify' | 'text-start' | 'text-end';

// Typography - Text Decoration
export type TextDecoration = 
  | 'underline' | 'overline' | 'line-through' | 'no-underline';
export type TextDecorationColor = `decoration-${string}`;
export type TextDecorationStyle = 
  | 'decoration-solid' | 'decoration-double' | 'decoration-dotted'
  | 'decoration-dashed' | 'decoration-wavy';
export type TextDecorationThickness = 
  | 'decoration-auto' | 'decoration-from-font'
  | 'decoration-0' | 'decoration-1' | 'decoration-2' | 'decoration-4' | 'decoration-8';
export type TextUnderlineOffset = 
  | 'underline-offset-auto' | 'underline-offset-0' | 'underline-offset-1'
  | 'underline-offset-2' | 'underline-offset-4' | 'underline-offset-8';

// Typography - Text Transform
export type TextTransform = 
  | 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';

// Typography - Text Overflow
export type TextOverflow = 
  | 'truncate' | 'text-ellipsis' | 'text-clip';

// Typography - Text Wrap
export type TextWrap = 
  | 'text-wrap' | 'text-nowrap' | 'text-balance' | 'text-pretty';

// Typography - Text Indent
export type TextIndent = `indent-${string}`;

// Typography - Vertical Alignment
export type TextVerticalAlign = 
  | 'align-baseline' | 'align-top' | 'align-middle' | 'align-bottom'
  | 'align-text-top' | 'align-text-bottom' | 'align-sub' | 'align-super';

// Typography - Whitespace
export type TextWhitespace = 
  | 'whitespace-normal' | 'whitespace-nowrap' | 'whitespace-pre'
  | 'whitespace-pre-line' | 'whitespace-pre-wrap' | 'whitespace-break-spaces';

// Typography - Word Break
export type TextWordBreak = 
  | 'break-normal' | 'break-words' | 'break-all' | 'break-keep';

// Typography - Hyphens
export type TextHyphens = 
  | 'hyphens-none' | 'hyphens-manual' | 'hyphens-auto';

// Typography - Content
export type TextContent = 'content-none';

// Layout & Display
export type TextDisplay = 
  | 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex'
  | 'grid' | 'inline-grid' | 'hidden';

// List Style
export type TextListStyle = 
  | 'list-none' | 'list-disc' | 'list-decimal'
  | 'list-inside' | 'list-outside';

// Spacing - Padding
export type TextPadding = 
  | `p-${string}` | `px-${string}` | `py-${string}`
  | `pt-${string}` | `pr-${string}` | `pb-${string}` | `pl-${string}`
  | `ps-${string}` | `pe-${string}`;

// Spacing - Margin
export type TextMargin = 
  | `m-${string}` | `mx-${string}` | `my-${string}`
  | `mt-${string}` | `mr-${string}` | `mb-${string}` | `ml-${string}`
  | `ms-${string}` | `me-${string}` | `-m-${string}`;

// Width & Height
export type TextWidth = 
  | `w-${string}` | 'w-full' | 'w-auto' | 'w-fit' | 'w-max' | 'w-min' | 'w-screen'
  | `max-w-${string}` | 'max-w-prose' | `min-w-${string}`;
export type TextHeight = 
  | `h-${string}` | 'h-auto' | 'h-full' | 'h-screen'
  | `max-h-${string}` | `min-h-${string}`;

// Backgrounds
export type TextBackground = 
  | `bg-${string}` | 'bg-transparent' | 'bg-clip-text';

// Effects - Opacity
export type TextOpacity = `opacity-${string}`;

// Effects - Mix Blend Mode
export type TextMixBlend = `mix-blend-${string}`;

// Effects - Text Shadow
export type TextShadow = `shadow-${string}`;

// Effects - Filters
export type TextBlur = `blur-${string}` | 'blur-none';
export type TextBrightness = `brightness-${string}`;
export type TextContrast = `contrast-${string}`;
export type TextGrayscale = 'grayscale' | 'grayscale-0';
export type TextHueRotate = `hue-rotate-${string}`;
export type TextInvert = 'invert' | 'invert-0';
export type TextSaturate = `saturate-${string}`;
export type TextSepia = 'sepia' | 'sepia-0';

// Transitions & Animations
export type TextTransition = 
  | 'transition' | 'transition-all' | 'transition-colors'
  | 'transition-opacity' | 'transition-transform';
export type TextDuration = `duration-${string}`;
export type TextEase = 
  | 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type TextDelay = `delay-${string}`;
export type TextAnimation = 
  | 'animate-pulse' | 'animate-bounce' | 'animate-ping' | 'animate-spin';

// Transforms
export type TextScale = `scale-${string}` | `scale-x-${string}` | `scale-y-${string}`;
export type TextRotate = `rotate-${string}` | `-rotate-${string}`;
export type TextTranslate = `translate-x-${string}` | `translate-y-${string}`;
export type TextSkew = `skew-x-${string}` | `skew-y-${string}`;

// Interactivity - Cursor
export type TextCursor = 
  | 'cursor-auto' | 'cursor-default' | 'cursor-pointer' | 'cursor-text'
  | 'cursor-move' | 'cursor-not-allowed' | `cursor-${string}`;

// Interactivity - User Select
export type TextUserSelect = 
  | 'select-none' | 'select-text' | 'select-all' | 'select-auto';

// Interactivity - Pointer Events
export type TextPointerEvents = 
  | 'pointer-events-none' | 'pointer-events-auto';

// Positioning
export type TextPosition = 
  | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';
export type TextInset = 
  | `top-${string}` | `right-${string}` | `bottom-${string}` | `left-${string}`
  | `inset-${string}` | `inset-x-${string}` | `inset-y-${string}`;
export type TextZIndex = `z-${string}` | 'z-auto';

// Overflow
export type TextOverflowBehavior = 
  | 'overflow-visible' | 'overflow-hidden' | 'overflow-scroll'
  | 'overflow-auto' | 'overflow-clip' | `overflow-x-${string}` | `overflow-y-${string}`;

// Visibility
export type TextVisibility = 
  | 'visible' | 'invisible' | 'collapse';

// Accessibility
export type TextAccessibility = 
  | 'sr-only' | 'not-sr-only';

// State Variants - Hover
export type TextHover = `hover:${string}`;

// State Variants - Focus
export type TextFocus = `focus:${string}`;

// State Variants - Active
export type TextActive = `active:${string}`;

// State Variants - Visited
export type TextVisited = `visited:${string}`;

// State Variants - Group
export type TextGroup = `group-hover:${string}` | `group-focus:${string}`;

// State Variants - Peer
export type TextPeer = `peer-checked:${string}` | `peer-focus:${string}`;

// State Variants - Dark Mode
export type TextDark = `dark:${string}`;

// Responsive Design
export type TextBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TextResponsive = `${TextBreakpoint}:${string}`;

// Container Queries
export type TextContainerQuery = `@${TextBreakpoint}:${string}`;

// Main interface for text element Tailwind utility props
export interface TailwindTextInterface {
  fontFamily?: TextFontFamily;
  fontSize?: TextFontSize;
  fontWeight?: TextFontWeight;
  fontStyle?: TextFontStyle;
  fontVariantNumeric?: TextFontVariantNumeric;
  lineHeight?: TextLineHeight;
  letterSpacing?: TextLetterSpacing;
  textColor?: TextColor;
  textAlign?: TextAlign;
  textDecoration?: TextDecoration;
  decorationColor?: TextDecorationColor;
  decorationStyle?: TextDecorationStyle;
  decorationThickness?: TextDecorationThickness;
  underlineOffset?: TextUnderlineOffset;
  textTransform?: TextTransform;
  textOverflow?: TextOverflow;
  textWrap?: TextWrap;
  textIndent?: TextIndent;
  verticalAlign?: TextVerticalAlign;
  whitespace?: TextWhitespace;
  wordBreak?: TextWordBreak;
  hyphens?: TextHyphens;
  content?: TextContent;
  display?: TextDisplay;
  listStyle?: TextListStyle;
  padding?: TextPadding;
  margin?: TextMargin;
  width?: TextWidth;
  height?: TextHeight;
  background?: TextBackground;
  opacity?: TextOpacity;
  mixBlend?: TextMixBlend;
  shadow?: TextShadow;
  blur?: TextBlur;
  brightness?: TextBrightness;
  contrast?: TextContrast;
  grayscale?: TextGrayscale;
  hueRotate?: TextHueRotate;
  invert?: TextInvert;
  saturate?: TextSaturate;
  sepia?: TextSepia;
  transition?: TextTransition;
  duration?: TextDuration;
  ease?: TextEase;
  delay?: TextDelay;
  animation?: TextAnimation;
  scale?: TextScale;
  rotate?: TextRotate;
  translate?: TextTranslate;
  skew?: TextSkew;
  cursor?: TextCursor;
  userSelect?: TextUserSelect;
  pointerEvents?: TextPointerEvents;
  position?: TextPosition;
  inset?: TextInset;
  zIndex?: TextZIndex;
  overflowBehavior?: TextOverflowBehavior;
  visibility?: TextVisibility;
  accessibility?: TextAccessibility;
  hover?: TextHover;
  focus?: TextFocus;
  active?: TextActive;
  visited?: TextVisited;
  group?: TextGroup;
  peer?: TextPeer;
  dark?: TextDark;
  responsive?: TextResponsive;
  containerQuery?: TextContainerQuery;
}
