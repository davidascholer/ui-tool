
// Display (Enabling Grid)
export type GridDisplay = 
  | 'grid' | 'inline-grid';

// Grid Template Columns
export type GridTemplateColumns = 
  | 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3' | 'grid-cols-4' | 'grid-cols-5'
  | 'grid-cols-6' | 'grid-cols-7' | 'grid-cols-8' | 'grid-cols-9' | 'grid-cols-10'
  | 'grid-cols-11' | 'grid-cols-12' | 'grid-cols-none' | 'grid-cols-subgrid';

// Grid Template Rows
export type GridTemplateRows = 
  | 'grid-rows-1' | 'grid-rows-2' | 'grid-rows-3' | 'grid-rows-4' | 'grid-rows-5'
  | 'grid-rows-6' | 'grid-rows-7' | 'grid-rows-8' | 'grid-rows-9' | 'grid-rows-10'
  | 'grid-rows-11' | 'grid-rows-12' | 'grid-rows-none' | 'grid-rows-subgrid';

// Grid Column Span (Grid Children)
export type GridColumnSpan = 
  | 'col-auto' | 'col-span-1' | 'col-span-2' | 'col-span-3' | 'col-span-4'
  | 'col-span-5' | 'col-span-6' | 'col-span-7' | 'col-span-8' | 'col-span-9'
  | 'col-span-10' | 'col-span-11' | 'col-span-12' | 'col-span-full';

// Grid Column Start (Grid Children)
export type GridColumnStart = 
  | 'col-start-1' | 'col-start-2' | 'col-start-3' | 'col-start-4' | 'col-start-5'
  | 'col-start-6' | 'col-start-7' | 'col-start-8' | 'col-start-9' | 'col-start-10'
  | 'col-start-11' | 'col-start-12' | 'col-start-13' | 'col-start-auto';

// Grid Column End (Grid Children)
export type GridColumnEnd = 
  | 'col-end-1' | 'col-end-2' | 'col-end-3' | 'col-end-4' | 'col-end-5'
  | 'col-end-6' | 'col-end-7' | 'col-end-8' | 'col-end-9' | 'col-end-10'
  | 'col-end-11' | 'col-end-12' | 'col-end-13' | 'col-end-auto';

// Grid Row Span (Grid Children)
export type GridRowSpan = 
  | 'row-auto' | 'row-span-1' | 'row-span-2' | 'row-span-3' | 'row-span-4'
  | 'row-span-5' | 'row-span-6' | 'row-span-7' | 'row-span-8' | 'row-span-9'
  | 'row-span-10' | 'row-span-11' | 'row-span-12' | 'row-span-full';

// Grid Row Start (Grid Children)
export type GridRowStart = 
  | 'row-start-1' | 'row-start-2' | 'row-start-3' | 'row-start-4' | 'row-start-5'
  | 'row-start-6' | 'row-start-7' | 'row-start-8' | 'row-start-9' | 'row-start-10'
  | 'row-start-11' | 'row-start-12' | 'row-start-13' | 'row-start-auto';

// Grid Row End (Grid Children)
export type GridRowEnd = 
  | 'row-end-1' | 'row-end-2' | 'row-end-3' | 'row-end-4' | 'row-end-5'
  | 'row-end-6' | 'row-end-7' | 'row-end-8' | 'row-end-9' | 'row-end-10'
  | 'row-end-11' | 'row-end-12' | 'row-end-13' | 'row-end-auto';

// Grid Auto Flow
export type GridAutoFlow = 
  | 'grid-flow-row' | 'grid-flow-col' | 'grid-flow-dense'
  | 'grid-flow-row-dense' | 'grid-flow-col-dense';

// Grid Auto Columns
export type GridAutoColumns = 
  | 'auto-cols-auto' | 'auto-cols-min' | 'auto-cols-max' | 'auto-cols-fr';

// Grid Auto Rows
export type GridAutoRows = 
  | 'auto-rows-auto' | 'auto-rows-min' | 'auto-rows-max' | 'auto-rows-fr';

// Gap (Space Between Grid Items)
export type GridGap = 
  | 'gap-0' | 'gap-px' | 'gap-0.5' | 'gap-1' | 'gap-1.5' | 'gap-2' | 'gap-2.5'
  | 'gap-3' | 'gap-3.5' | 'gap-4' | 'gap-5' | 'gap-6' | 'gap-7' | 'gap-8'
  | 'gap-9' | 'gap-10' | 'gap-11' | 'gap-12' | 'gap-14' | 'gap-16' | 'gap-20'
  | 'gap-24' | 'gap-28' | 'gap-32' | 'gap-36' | 'gap-40' | 'gap-44' | 'gap-48'
  | 'gap-52' | 'gap-56' | 'gap-60' | 'gap-64' | 'gap-72' | 'gap-80' | 'gap-96';

// Gap X (Column Gap)
export type GridGapX = 
  | 'gap-x-0' | 'gap-x-px' | 'gap-x-0.5' | 'gap-x-1' | 'gap-x-1.5' | 'gap-x-2' | 'gap-x-2.5'
  | 'gap-x-3' | 'gap-x-3.5' | 'gap-x-4' | 'gap-x-5' | 'gap-x-6' | 'gap-x-7' | 'gap-x-8'
  | 'gap-x-9' | 'gap-x-10' | 'gap-x-11' | 'gap-x-12' | 'gap-x-14' | 'gap-x-16' | 'gap-x-20'
  | 'gap-x-24' | 'gap-x-28' | 'gap-x-32' | 'gap-x-36' | 'gap-x-40' | 'gap-x-44' | 'gap-x-48'
  | 'gap-x-52' | 'gap-x-56' | 'gap-x-60' | 'gap-x-64' | 'gap-x-72' | 'gap-x-80' | 'gap-x-96';

// Gap Y (Row Gap)
export type GridGapY = 
  | 'gap-y-0' | 'gap-y-px' | 'gap-y-0.5' | 'gap-y-1' | 'gap-y-1.5' | 'gap-y-2' | 'gap-y-2.5'
  | 'gap-y-3' | 'gap-y-3.5' | 'gap-y-4' | 'gap-y-5' | 'gap-y-6' | 'gap-y-7' | 'gap-y-8'
  | 'gap-y-9' | 'gap-y-10' | 'gap-y-11' | 'gap-y-12' | 'gap-y-14' | 'gap-y-16' | 'gap-y-20'
  | 'gap-y-24' | 'gap-y-28' | 'gap-y-32' | 'gap-y-36' | 'gap-y-40' | 'gap-y-44' | 'gap-y-48'
  | 'gap-y-52' | 'gap-y-56' | 'gap-y-60' | 'gap-y-64' | 'gap-y-72' | 'gap-y-80' | 'gap-y-96';

// Justify Content (Horizontal Alignment)
export type GridJustifyContent = 
  | 'justify-normal' | 'justify-start' | 'justify-end' | 'justify-center'
  | 'justify-between' | 'justify-around' | 'justify-evenly' | 'justify-stretch';

// Justify Items (Horizontal Alignment for Grid Items)
export type GridJustifyItems = 
  | 'justify-items-start' | 'justify-items-end'
  | 'justify-items-center' | 'justify-items-stretch';

// Justify Self (Individual Item Horizontal Alignment)
export type GridJustifySelf = 
  | 'justify-self-auto' | 'justify-self-start' | 'justify-self-end'
  | 'justify-self-center' | 'justify-self-stretch';

// Align Content (Vertical Alignment)
export type GridAlignContent = 
  | 'content-normal' | 'content-start' | 'content-end' | 'content-center'
  | 'content-between' | 'content-around' | 'content-evenly'
  | 'content-baseline' | 'content-stretch';

// Align Items (Vertical Alignment for Grid Items)
export type GridAlignItems = 
  | 'items-start' | 'items-end' | 'items-center'
  | 'items-baseline' | 'items-stretch';

// Align Self (Individual Item Vertical Alignment)
export type GridAlignSelf = 
  | 'self-auto' | 'self-start' | 'self-end'
  | 'self-center' | 'self-stretch' | 'self-baseline';

// Place Content (Shorthand for justify-content + align-content)
export type GridPlaceContent = 
  | 'place-content-center' | 'place-content-start' | 'place-content-end'
  | 'place-content-between' | 'place-content-around' | 'place-content-evenly'
  | 'place-content-baseline' | 'place-content-stretch';

// Place Items (Shorthand for justify-items + align-items)
export type GridPlaceItems = 
  | 'place-items-start' | 'place-items-end' | 'place-items-center'
  | 'place-items-baseline' | 'place-items-stretch';

// Place Self (Shorthand for justify-self + align-self)
export type GridPlaceSelf = 
  | 'place-self-auto' | 'place-self-start' | 'place-self-end'
  | 'place-self-center' | 'place-self-stretch';

// Order (Item Order)
export type GridOrder = 
  | 'order-1' | 'order-2' | 'order-3' | 'order-4' | 'order-5' | 'order-6'
  | 'order-7' | 'order-8' | 'order-9' | 'order-10' | 'order-11' | 'order-12'
  | 'order-first' | 'order-last' | 'order-none';

// Responsive Design
export type GridBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type GridResponsive = `${GridBreakpoint}:${string}`;

// Container Queries
export type GridContainerQuery = `@${GridBreakpoint}:${string}`;

// Main interface for CSS Grid container element Tailwind utility props
export interface TailwindGridInterface {
  display?: GridDisplay;
  gridTemplateColumns?: GridTemplateColumns;
  gridTemplateRows?: GridTemplateRows;
  gridColumnSpan?: GridColumnSpan;
  gridColumnStart?: GridColumnStart;
  gridColumnEnd?: GridColumnEnd;
  gridRowSpan?: GridRowSpan;
  gridRowStart?: GridRowStart;
  gridRowEnd?: GridRowEnd;
  gridAutoFlow?: GridAutoFlow;
  gridAutoColumns?: GridAutoColumns;
  gridAutoRows?: GridAutoRows;
  gap?: GridGap;
  gapX?: GridGapX;
  gapY?: GridGapY;
  justifyContent?: GridJustifyContent;
  justifyItems?: GridJustifyItems;
  justifySelf?: GridJustifySelf;
  alignContent?: GridAlignContent;
  alignItems?: GridAlignItems;
  alignSelf?: GridAlignSelf;
  placeContent?: GridPlaceContent;
  placeItems?: GridPlaceItems;
  placeSelf?: GridPlaceSelf;
  order?: GridOrder;
  responsive?: GridResponsive;
  containerQuery?: GridContainerQuery;
}
