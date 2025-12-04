
// Tailwind Layout
export type Display = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'hidden';
export type Container = 'container';
export type BoxSizing = 'box-border' | 'box-content';

// Flexbox
export type FlexDirection = 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse';
export type FlexWrap = 'flex-wrap' | 'flex-wrap-reverse' | 'flex-nowrap';
export type Flex = 'flex-1' | 'flex-auto' | 'flex-initial' | 'flex-none';
export type FlexGrow = 'grow' | 'grow-0';
export type FlexShrink = 'shrink' | 'shrink-0';
export type Justify = 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly' | 'justify-stretch';
export type AlignItems = 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
export type AlignContent = 'content-start' | 'content-end' | 'content-center' | 'content-between' | 'content-around' | 'content-evenly' | 'content-stretch';
export type AlignSelf = 'self-auto' | 'self-start' | 'self-end' | 'self-center' | 'self-stretch' | 'self-baseline';
export type Gap = `gap-${string}` | `gap-x-${string}` | `gap-y-${string}`;

// Grid
export type GridCols = `grid-cols-${string}` | 'grid-cols-none';
export type GridRows = `grid-rows-${string}` | 'grid-rows-none';
export type ColSpan = `col-span-${string}` | 'col-span-full' | 'col-auto';
export type RowSpan = `row-span-${string}` | 'row-span-full' | 'row-auto';
export type GridFlow = 'grid-flow-row' | 'grid-flow-col' | 'grid-flow-dense';
export type AutoCols = 'auto-cols-auto' | 'auto-cols-min' | 'auto-cols-max' | 'auto-cols-fr';
export type AutoRows = 'auto-rows-auto' | 'auto-rows-min' | 'auto-rows-max' | 'auto-rows-fr';
export type PlaceContent = `place-content-${string}`;
export type PlaceItems = `place-items-${string}`;
export type PlaceSelf = `place-self-${string}`;

// Spacing
export type Padding = `p-${string}` | `px-${string}` | `py-${string}` | `pt-${string}` | `pr-${string}` | `pb-${string}` | `pl-${string}` | `ps-${string}` | `pe-${string}`;
export type Margin = `m-${string}` | `mx-${string}` | `my-${string}` | `mt-${string}` | `mr-${string}` | `mb-${string}` | `ml-${string}` | `ms-${string}` | `me-${string}` | `-m-${string}`;
export type SpaceBetween = `space-x-${string}` | `space-y-${string}` | 'space-x-reverse' | 'space-y-reverse';

// Sizing
export type Width = `w-${string}` | 'w-full' | 'w-screen' | 'w-min' | 'w-max' | 'w-fit' | `min-w-${string}` | `max-w-${string}`;
export type Height = `h-${string}` | 'h-full' | 'h-screen' | 'h-min' | 'h-max' | 'h-fit' | `min-h-${string}` | `max-h-${string}`;
export type Size = `size-${string}`;

// Typography
export type FontFamily = 'font-sans' | 'font-serif' | 'font-mono';
export type FontSize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | `text-${string}`;
export type FontWeight = 'font-thin' | 'font-extralight' | 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
export type FontStyle = 'italic' | 'not-italic';
export type LineHeight = `leading-${string}` | 'leading-none' | 'leading-tight' | 'leading-normal' | 'leading-relaxed' | 'leading-loose';
export type TextAlign = 'text-left' | 'text-center' | 'text-right' | 'text-justify' | 'text-start' | 'text-end';
export type TextColor = `text-${string}`;
export type TextDecoration = 'underline' | 'overline' | 'line-through' | 'no-underline';
export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
export type TextOverflow = 'truncate' | 'text-ellipsis' | 'text-clip';
export type WhiteSpace = 'whitespace-normal' | 'whitespace-nowrap' | 'whitespace-pre' | 'whitespace-pre-line' | 'whitespace-pre-wrap' | 'whitespace-break-spaces';
export type WordBreak = 'break-normal' | 'break-words' | 'break-all' | 'break-keep';

// Backgrounds
export type BgColor = `bg-${string}` | 'bg-transparent' | 'bg-current';
export type BgGradient = `bg-gradient-to-${string}`;
export type BgGradientStop = `from-${string}` | `via-${string}` | `to-${string}`;
export type BgSize = 'bg-auto' | 'bg-cover' | 'bg-contain';
export type BgPosition = 'bg-center' | 'bg-top' | 'bg-bottom' | 'bg-left' | 'bg-right';
export type BgRepeat = 'bg-repeat' | 'bg-no-repeat' | 'bg-repeat-x' | 'bg-repeat-y' | 'bg-repeat-round' | 'bg-repeat-space';
export type BgAttachment = 'bg-fixed' | 'bg-local' | 'bg-scroll';
export type BgClip = 'bg-clip-border' | 'bg-clip-padding' | 'bg-clip-content' | 'bg-clip-text';
export type BgOrigin = 'bg-origin-border' | 'bg-origin-padding' | 'bg-origin-content';

// Borders
export type BorderWidth = 'border' | `border-${string}` | `border-x-${string}` | `border-y-${string}`;
export type BorderColor = `border-${string}`;
export type BorderStyle = 'border-solid' | 'border-dashed' | 'border-dotted' | 'border-double' | 'border-hidden' | 'border-none';
export type BorderRadius = 'rounded' | `rounded-${string}` | 'rounded-none' | 'rounded-full';
export type Divide = 'divide-x' | 'divide-y' | `divide-${string}`;

// Effects
export type BoxShadow = 'shadow' | `shadow-${string}` | 'shadow-none' | 'shadow-inner';
export type Opacity = `opacity-${string}`;
export type MixBlend = `mix-blend-${string}`;
export type BgBlend = `bg-blend-${string}`;

// Filters
export type Blur = 'blur' | `blur-${string}` | 'blur-none';
export type Brightness = `brightness-${string}`;
export type Contrast = `contrast-${string}`;
export type Grayscale = 'grayscale' | 'grayscale-0';
export type HueRotate = `hue-rotate-${string}`;
export type Invert = 'invert' | 'invert-0';
export type Saturate = `saturate-${string}`;
export type Sepia = 'sepia' | 'sepia-0';
export type DropShadow = 'drop-shadow' | `drop-shadow-${string}` | 'drop-shadow-none';
export type BackdropFilter = `backdrop-blur-${string}` | `backdrop-brightness-${string}`;

// Transitions & Animation
export type Transition = 'transition' | 'transition-none' | 'transition-all' | 'transition-colors' | 'transition-opacity' | 'transition-shadow' | 'transition-transform';
export type Duration = `duration-${string}`;
export type Timing = 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type Delay = `delay-${string}`;
export type Animation = 'animate-none' | 'animate-spin' | 'animate-ping' | 'animate-pulse' | 'animate-bounce';

// Transforms
export type Scale = `scale-${string}` | `scale-x-${string}` | `scale-y-${string}`;
export type Rotate = `rotate-${string}` | `-rotate-${string}`;
export type Translate = `translate-x-${string}` | `translate-y-${string}` | `-translate-x-${string}` | `-translate-y-${string}`;
export type Skew = `skew-x-${string}` | `skew-y-${string}` | `-skew-x-${string}` | `-skew-y-${string}`;
export type TransformOrigin = `origin-${string}`;

// Interactivity
export type Cursor = 'cursor-auto' | 'cursor-default' | 'cursor-pointer' | 'cursor-wait' | 'cursor-text' | 'cursor-move' | 'cursor-not-allowed';
export type PointerEvents = 'pointer-events-none' | 'pointer-events-auto';
export type Resize = 'resize-none' | 'resize' | 'resize-x' | 'resize-y';
export type ScrollBehavior = 'scroll-auto' | 'scroll-smooth';
export type ScrollSnap = `snap-${string}`;
export type TouchAction = `touch-${string}`;
export type UserSelect = 'select-none' | 'select-text' | 'select-all' | 'select-auto';
export type WillChange = `will-change-${string}`;

// Positioning
export type Position = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
export type Inset = `inset-${string}` | `inset-x-${string}` | `inset-y-${string}` | `top-${string}` | `right-${string}` | `bottom-${string}` | `left-${string}` | `start-${string}` | `end-${string}`;
export type ZIndex = `z-${string}` | 'z-auto';

// Overflow
export type Overflow = 'overflow-auto' | 'overflow-hidden' | 'overflow-visible' | 'overflow-scroll' | 'overflow-clip';
export type OverflowX = `overflow-x-${string}`;
export type OverflowY = `overflow-y-${string}`;
export type ScrollMargin = `scroll-m-${string}`;
export type ScrollPadding = `scroll-p-${string}`;

// Visibility
export type Visibility = 'visible' | 'invisible' | 'collapse';

// Accessibility
export type ScreenReader = 'sr-only' | 'not-sr-only';

// States & Variants
export type StatePrefix = 'hover' | 'focus' | 'active' | 'disabled' | 'group-hover' | 'peer-checked' | 'peer-focus' | 'dark';
export type ResponsivePrefix = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ContainerQueryPrefix = '@sm' | '@md' | '@lg' | '@xl' | '@2xl';

// Special
export type AspectRatio = 'aspect-auto' | 'aspect-square' | 'aspect-video' | `aspect-${string}`;
export type Columns = `columns-${string}` | 'columns-auto';
export type Break = `break-before-${string}` | `break-after-${string}` | `break-inside-${string}`;
export type ObjectFit = 'object-contain' | 'object-cover' | 'object-fill' | 'object-none' | 'object-scale-down';
export type ObjectPosition = `object-${string}`;

// Main interface for a div's possible Tailwind props
export interface TailwindDivInterface {
	display?: Display;
	container?: Container;
	boxSizing?: BoxSizing;
	flexDirection?: FlexDirection;
	flexWrap?: FlexWrap;
	flex?: Flex;
	flexGrow?: FlexGrow;
	flexShrink?: FlexShrink;
	justify?: Justify;
	alignItems?: AlignItems;
	alignContent?: AlignContent;
	alignSelf?: AlignSelf;
	gap?: Gap;
	gridCols?: GridCols;
	gridRows?: GridRows;
	colSpan?: ColSpan;
	rowSpan?: RowSpan;
	gridFlow?: GridFlow;
	autoCols?: AutoCols;
	autoRows?: AutoRows;
	placeContent?: PlaceContent;
	placeItems?: PlaceItems;
	placeSelf?: PlaceSelf;
	padding?: Padding;
	margin?: Margin;
	spaceBetween?: SpaceBetween;
	width?: Width;
	height?: Height;
	size?: Size;
	fontFamily?: FontFamily;
	fontSize?: FontSize;
	fontWeight?: FontWeight;
	fontStyle?: FontStyle;
	lineHeight?: LineHeight;
	textAlign?: TextAlign;
	textColor?: TextColor;
	textDecoration?: TextDecoration;
	textTransform?: TextTransform;
	textOverflow?: TextOverflow;
	whiteSpace?: WhiteSpace;
	wordBreak?: WordBreak;
	bgColor?: BgColor;
	bgGradient?: BgGradient;
	bgGradientStop?: BgGradientStop;
	bgSize?: BgSize;
	bgPosition?: BgPosition;
	bgRepeat?: BgRepeat;
	bgAttachment?: BgAttachment;
	bgClip?: BgClip;
	bgOrigin?: BgOrigin;
	borderWidth?: BorderWidth;
	borderColor?: BorderColor;
	borderStyle?: BorderStyle;
	borderRadius?: BorderRadius;
	divide?: Divide;
	boxShadow?: BoxShadow;
	opacity?: Opacity;
	mixBlend?: MixBlend;
	bgBlend?: BgBlend;
	blur?: Blur;
	brightness?: Brightness;
	contrast?: Contrast;
	grayscale?: Grayscale;
	hueRotate?: HueRotate;
	invert?: Invert;
	saturate?: Saturate;
	sepia?: Sepia;
	dropShadow?: DropShadow;
	backdropFilter?: BackdropFilter;
	transition?: Transition;
	duration?: Duration;
	timing?: Timing;
	delay?: Delay;
	animation?: Animation;
	scale?: Scale;
	rotate?: Rotate;
	translate?: Translate;
	skew?: Skew;
	transformOrigin?: TransformOrigin;
	cursor?: Cursor;
	pointerEvents?: PointerEvents;
	resize?: Resize;
	scrollBehavior?: ScrollBehavior;
	scrollSnap?: ScrollSnap;
	touchAction?: TouchAction;
	userSelect?: UserSelect;
	willChange?: WillChange;
	position?: Position;
	inset?: Inset;
	zIndex?: ZIndex;
	overflow?: Overflow;
	overflowX?: OverflowX;
	overflowY?: OverflowY;
	scrollMargin?: ScrollMargin;
	scrollPadding?: ScrollPadding;
	visibility?: Visibility;
	screenReader?: ScreenReader;
	statePrefix?: StatePrefix;
	responsivePrefix?: ResponsivePrefix;
	containerQueryPrefix?: ContainerQueryPrefix;
	aspectRatio?: AspectRatio;
	columns?: Columns;
	break?: Break;
	objectFit?: ObjectFit;
	objectPosition?: ObjectPosition;
}