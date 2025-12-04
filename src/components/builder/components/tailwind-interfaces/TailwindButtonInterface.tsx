
// Layout & Display
export type BtnDisplay = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'hidden';
export type BtnFlexbox = 'flex-row' | 'flex-col' | 'justify-center' | 'justify-between' | 'items-center' | `gap-${string}`;

// Sizing
export type BtnWidth = `w-${string}` | 'w-full' | 'w-auto' | 'w-fit' | `min-w-${string}` | `max-w-${string}`;
export type BtnHeight = `h-${string}` | 'h-full' | 'h-auto' | 'h-fit' | `min-h-${string}` | `max-h-${string}`;
export type BtnPadding = `p-${string}` | `px-${string}` | `py-${string}` | `pt-${string}` | `pr-${string}` | `pb-${string}` | `pl-${string}`;

// Typography
export type BtnFontFamily = 'font-sans' | 'font-serif' | 'font-mono';
export type BtnFontSize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | `text-${string}`;
export type BtnFontWeight = 'font-thin' | 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
export type BtnFontStyle = 'italic' | 'not-italic';
export type BtnTextAlign = 'text-left' | 'text-center' | 'text-right';
export type BtnTextColor = `text-${string}`;
export type BtnTextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
export type BtnLineHeight = `leading-${string}` | 'leading-none' | 'leading-tight' | 'leading-normal';
export type BtnLetterSpacing = 'tracking-tighter' | 'tracking-tight' | 'tracking-normal' | 'tracking-wide' | 'tracking-wider' | 'tracking-widest';
export type BtnTextDecoration = 'underline' | 'no-underline' | 'line-through';

// Backgrounds
export type BtnBgColor = `bg-${string}` | 'bg-transparent' | 'bg-white' | 'bg-black';
export type BtnBgGradient = `bg-gradient-to-${string}`;
export type BtnBgGradientStop = `from-${string}` | `via-${string}` | `to-${string}`;
export type BtnBgOpacity = `bg-opacity-${string}`;

// Borders
export type BtnBorderWidth = 'border' | `border-${string}` | `border-t-${string}` | `border-r-${string}` | `border-b-${string}` | `border-l-${string}`;
export type BtnBorderColor = `border-${string}`;
export type BtnBorderStyle = 'border-solid' | 'border-dashed' | 'border-dotted' | 'border-double' | 'border-none';
export type BtnBorderRadius = 'rounded' | `rounded-${string}` | 'rounded-none' | 'rounded-full' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl';
export type BtnBorderRadiusCorner = `rounded-t-${string}` | `rounded-r-${string}` | `rounded-b-${string}` | `rounded-l-${string}` | `rounded-tl-${string}` | `rounded-tr-${string}` | `rounded-br-${string}` | `rounded-bl-${string}`;

// Effects
export type BtnBoxShadow = 'shadow' | 'shadow-sm' | 'shadow-md' | 'shadow-lg' | 'shadow-xl' | 'shadow-2xl' | 'shadow-inner' | 'shadow-none';
export type BtnOpacity = `opacity-${string}`;
export type BtnRing = 'ring' | `ring-${string}` | 'ring-inset';
export type BtnRingOffset = `ring-offset-${string}`;

// Transitions & Animations
export type BtnTransition = 'transition' | 'transition-all' | 'transition-colors' | 'transition-opacity' | 'transition-shadow' | 'transition-transform' | 'transition-none';
export type BtnDuration = `duration-${string}`;
export type BtnTiming = 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type BtnDelay = `delay-${string}`;
export type BtnAnimation = 'animate-pulse' | 'animate-bounce' | 'animate-spin' | 'animate-ping';

// Transforms
export type BtnScale = `scale-${string}` | `scale-x-${string}` | `scale-y-${string}`;
export type BtnRotate = `rotate-${string}` | `-rotate-${string}`;
export type BtnTranslate = `translate-x-${string}` | `translate-y-${string}` | `-translate-x-${string}` | `-translate-y-${string}`;
export type BtnSkew = `skew-x-${string}` | `skew-y-${string}`;
export type BtnTransformOrigin = 'origin-center' | 'origin-top' | 'origin-bottom' | 'origin-left' | 'origin-right';

// Filters
export type BtnBlur = `blur-${string}` | 'blur-none';
export type BtnBrightness = `brightness-${string}`;
export type BtnContrast = `contrast-${string}`;
export type BtnGrayscale = 'grayscale' | 'grayscale-0';
export type BtnDropShadow = `drop-shadow-${string}` | 'drop-shadow-none';

// Interactivity
export type BtnCursor = 'cursor-pointer' | 'cursor-not-allowed' | 'cursor-wait' | 'cursor-default';
export type BtnUserSelect = 'select-none' | 'select-text' | 'select-all';
export type BtnAppearance = 'appearance-none';

// Positioning
export type BtnPosition = 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';
export type BtnZIndex = `z-${string}` | 'z-auto';
export type BtnInset = `inset-${string}` | `top-${string}` | `right-${string}` | `bottom-${string}` | `left-${string}`;

// Spacing
export type BtnMargin = `m-${string}` | `mx-${string}` | `my-${string}` | `mt-${string}` | `mr-${string}` | `mb-${string}` | `ml-${string}`;

// State Variants - Hover
export type BtnHover = `hover:${string}`;

// State Variants - Focus
export type BtnFocus = `focus:${string}` | 'focus:outline-none' | `focus-visible:${string}`;

// State Variants - Active
export type BtnActive = `active:${string}`;

// State Variants - Disabled
export type BtnDisabled = `disabled:${string}`;

// State Variants - Focus Within
export type BtnFocusWithin = `focus-within:${string}`;

// State Variants - Group
export type BtnGroup = `group-hover:${string}` | `group-focus:${string}` | `group-active:${string}` | `group-disabled:${string}`;

// State Variants - Dark Mode
export type BtnDark = `dark:${string}`;

// Responsive Design
export type BtnBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type BtnResponsive = `${BtnBreakpoint}:${string}`;

// Main interface for button Tailwind utility props
export interface TailwindButtonInterface {
  display?: BtnDisplay;
  flexbox?: BtnFlexbox;
  width?: BtnWidth;
  height?: BtnHeight;
  padding?: BtnPadding;
  fontFamily?: BtnFontFamily;
  fontSize?: BtnFontSize;
  fontWeight?: BtnFontWeight;
  fontStyle?: BtnFontStyle;
  textAlign?: BtnTextAlign;
  textColor?: BtnTextColor;
  textTransform?: BtnTextTransform;
  lineHeight?: BtnLineHeight;
  letterSpacing?: BtnLetterSpacing;
  textDecoration?: BtnTextDecoration;
  bgColor?: BtnBgColor;
  bgGradient?: BtnBgGradient;
  bgGradientStop?: BtnBgGradientStop;
  bgOpacity?: BtnBgOpacity;
  borderWidth?: BtnBorderWidth;
  borderColor?: BtnBorderColor;
  borderStyle?: BtnBorderStyle;
  borderRadius?: BtnBorderRadius;
  borderRadiusCorner?: BtnBorderRadiusCorner;
  boxShadow?: BtnBoxShadow;
  opacity?: BtnOpacity;
  ring?: BtnRing;
  ringOffset?: BtnRingOffset;
  transition?: BtnTransition;
  duration?: BtnDuration;
  timing?: BtnTiming;
  delay?: BtnDelay;
  animation?: BtnAnimation;
  scale?: BtnScale;
  rotate?: BtnRotate;
  translate?: BtnTranslate;
  skew?: BtnSkew;
  transformOrigin?: BtnTransformOrigin;
  blur?: BtnBlur;
  brightness?: BtnBrightness;
  contrast?: BtnContrast;
  grayscale?: BtnGrayscale;
  dropShadow?: BtnDropShadow;
  cursor?: BtnCursor;
  userSelect?: BtnUserSelect;
  appearance?: BtnAppearance;
  position?: BtnPosition;
  zIndex?: BtnZIndex;
  inset?: BtnInset;
  margin?: BtnMargin;
  hover?: BtnHover;
  focus?: BtnFocus;
  active?: BtnActive;
  disabled?: BtnDisabled;
  focusWithin?: BtnFocusWithin;
  group?: BtnGroup;
  dark?: BtnDark;
  responsive?: BtnResponsive;
}
