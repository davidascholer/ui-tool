
// Sizing
export type TWWidth = `w-${string}` | `max-w-${string}` | `min-w-${string}` | 'w-full';
export type TWHeight = `h-${string}` | `max-h-${string}` | `min-h-${string}` | 'h-auto' | 'h-full' | 'h-screen';
export type TWSize = `size-${string}`;

// Display & Layout
export type TWDisplay = 'block' | 'inline' | 'inline-block';
export type TWMarginAuto = 'mx-auto';
export type TWAspect = `aspect-${string}`;

// Object Fit & Position
export type TObjectFit = 'object-contain' | 'object-cover' | 'object-fill' | 'object-none' | 'object-scale-down';
export type TObjectPosition = 'object-top' | 'object-bottom' | 'object-left' | 'object-right' | 'object-center' | 'object-top-left' | 'object-top-right' | 'object-bottom-left' | 'object-bottom-right';

// Borders & Corners
export type TBorderRadius = 'rounded' | `rounded-${string}` | 'rounded-lg' | 'rounded-xl' | 'rounded-full' | 'rounded-[50%]';
export type TBorder = 'border' | `border-${string}` | `border-${string}`;

// Shadows
export type TShadow = 'shadow' | `shadow-${string}`;
export type TShadowColor = `shadow-${string}`;

// Filters & Effects
export type TGrayscale = 'grayscale' | 'grayscale-0';
export type TBlur = 'blur' | `blur-${string}` | 'blur-none';
export type TBrightness = `brightness-${string}`;
export type TContrast = `contrast-${string}`;
export type TSaturate = `saturate-${string}`;
export type TFilter = 'filter';

// Spacing
export type TPadding = `p-${string}`;
export type TMargin = `m-${string}` | `mt-${string}` | `mb-${string}` | `ml-${string}` | `mr-${string}` | 'ms-auto' | 'me-auto';

// Transitions & Animations
export type TTransition = 'transition' | `transition-${string}`;
export type TDuration = `duration-${string}`;
export type TEase = `ease-${string}`;

// Hover & Interactive States
export type THover = `hover:${string}`;
export type TCursor = 'cursor-pointer';

// Transform & Scale
export type TScale = `scale-${string}`;
export type TRotate = `rotate-${string}`;
export type TTransform = 'transform';

// Responsive Design
export type TBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TResponsive = `${TBreakpoint}:${string}`;
export type TContainerQuery = `@${TBreakpoint}:${string}`;

// Main interface for Tailwind text/image utility props
export interface TailwindImageInterface {
	width?: TWWidth;
	height?: TWHeight;
	size?: TWSize;
	display?: TWDisplay;
	marginAuto?: TWMarginAuto;
	aspect?: TWAspect;
	objectFit?: TObjectFit;
	objectPosition?: TObjectPosition;
	borderRadius?: TBorderRadius;
	border?: TBorder;
	shadow?: TShadow;
	shadowColor?: TShadowColor;
	grayscale?: TGrayscale;
	blur?: TBlur;
	brightness?: TBrightness;
	contrast?: TContrast;
	saturate?: TSaturate;
	filter?: TFilter;
	padding?: TPadding;
	margin?: TMargin;
	transition?: TTransition;
	duration?: TDuration;
	ease?: TEase;
	hover?: THover;
	cursor?: TCursor;
	scale?: TScale;
	rotate?: TRotate;
	transform?: TTransform;
	responsive?: TResponsive;
	containerQuery?: TContainerQuery;
}
