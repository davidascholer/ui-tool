
// Display (Enabling Flexbox)
export type ContainerDisplay = 
  | 'flex' | 'inline-flex';

// Flex Direction
export type ContainerFlexDirection = 
  | 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse';

// Flex Wrap
export type ContainerFlexWrap = 
  | 'flex-wrap' | 'flex-wrap-reverse' | 'flex-nowrap';

// Flex (Flex Grow, Shrink, and Basis Combined)
export type ContainerFlex = 
  | 'flex-1' | 'flex-auto' | 'flex-initial' | 'flex-none';

// Flex Grow
export type ContainerFlexGrow = 
  | 'grow' | 'grow-0';

// Flex Shrink
export type ContainerFlexShrink = 
  | 'shrink' | 'shrink-0';

// Flex Basis
export type ContainerFlexBasis = 
  | 'basis-0' | 'basis-1' | 'basis-2' | 'basis-3' | 'basis-4' | 'basis-5'
  | 'basis-6' | 'basis-7' | 'basis-8' | 'basis-9' | 'basis-10' | 'basis-11'
  | 'basis-12' | 'basis-14' | 'basis-16' | 'basis-20' | 'basis-24' | 'basis-28'
  | 'basis-32' | 'basis-36' | 'basis-40' | 'basis-44' | 'basis-48' | 'basis-52'
  | 'basis-56' | 'basis-60' | 'basis-64' | 'basis-72' | 'basis-80' | 'basis-96'
  | 'basis-auto' | 'basis-px' | 'basis-0.5' | 'basis-1.5' | 'basis-2.5' | 'basis-3.5'
  | 'basis-1/2' | 'basis-1/3' | 'basis-2/3' | 'basis-1/4' | 'basis-2/4' | 'basis-3/4'
  | 'basis-1/5' | 'basis-2/5' | 'basis-3/5' | 'basis-4/5'
  | 'basis-1/6' | 'basis-2/6' | 'basis-3/6' | 'basis-4/6' | 'basis-5/6'
  | 'basis-1/12' | 'basis-2/12' | 'basis-3/12' | 'basis-4/12' | 'basis-5/12'
  | 'basis-6/12' | 'basis-7/12' | 'basis-8/12' | 'basis-9/12' | 'basis-10/12'
  | 'basis-11/12' | 'basis-full';

// Justify Content (Main Axis Alignment)
export type ContainerJustifyContent = 
  | 'justify-normal' | 'justify-start' | 'justify-end' | 'justify-center'
  | 'justify-between' | 'justify-around' | 'justify-evenly' | 'justify-stretch';

// Justify Items (Inline Axis Alignment)
export type ContainerJustifyItems = 
  | 'justify-items-start' | 'justify-items-end' 
  | 'justify-items-center' | 'justify-items-stretch';

// Justify Self (Individual Item Alignment)
export type ContainerJustifySelf = 
  | 'justify-self-auto' | 'justify-self-start' | 'justify-self-end'
  | 'justify-self-center' | 'justify-self-stretch';

// Align Items (Cross Axis Alignment)
export type ContainerAlignItems = 
  | 'items-start' | 'items-end' | 'items-center'
  | 'items-baseline' | 'items-stretch';

// Align Content (Multi-line Cross Axis Alignment)
export type ContainerAlignContent = 
  | 'content-normal' | 'content-start' | 'content-end' | 'content-center'
  | 'content-between' | 'content-around' | 'content-evenly'
  | 'content-baseline' | 'content-stretch';

// Align Self (Individual Item Cross Axis Alignment)
export type ContainerAlignSelf = 
  | 'self-auto' | 'self-start' | 'self-end'
  | 'self-center' | 'self-stretch' | 'self-baseline';

// Gap (Space Between Items)
export type ContainerGap = 
  | 'gap-0' | 'gap-px' | 'gap-0.5' | 'gap-1' | 'gap-1.5' | 'gap-2' | 'gap-2.5'
  | 'gap-3' | 'gap-3.5' | 'gap-4' | 'gap-5' | 'gap-6' | 'gap-7' | 'gap-8'
  | 'gap-9' | 'gap-10' | 'gap-11' | 'gap-12' | 'gap-14' | 'gap-16' | 'gap-20'
  | 'gap-24' | 'gap-28' | 'gap-32' | 'gap-36' | 'gap-40' | 'gap-44' | 'gap-48'
  | 'gap-52' | 'gap-56' | 'gap-60' | 'gap-64' | 'gap-72' | 'gap-80' | 'gap-96';

// Gap X (Column Gap)
export type ContainerGapX = 
  | 'gap-x-0' | 'gap-x-px' | 'gap-x-0.5' | 'gap-x-1' | 'gap-x-1.5' | 'gap-x-2' | 'gap-x-2.5'
  | 'gap-x-3' | 'gap-x-3.5' | 'gap-x-4' | 'gap-x-5' | 'gap-x-6' | 'gap-x-7' | 'gap-x-8'
  | 'gap-x-9' | 'gap-x-10' | 'gap-x-11' | 'gap-x-12' | 'gap-x-14' | 'gap-x-16' | 'gap-x-20'
  | 'gap-x-24' | 'gap-x-28' | 'gap-x-32' | 'gap-x-36' | 'gap-x-40' | 'gap-x-44' | 'gap-x-48'
  | 'gap-x-52' | 'gap-x-56' | 'gap-x-60' | 'gap-x-64' | 'gap-x-72' | 'gap-x-80' | 'gap-x-96';

// Gap Y (Row Gap)
export type ContainerGapY = 
  | 'gap-y-0' | 'gap-y-px' | 'gap-y-0.5' | 'gap-y-1' | 'gap-y-1.5' | 'gap-y-2' | 'gap-y-2.5'
  | 'gap-y-3' | 'gap-y-3.5' | 'gap-y-4' | 'gap-y-5' | 'gap-y-6' | 'gap-y-7' | 'gap-y-8'
  | 'gap-y-9' | 'gap-y-10' | 'gap-y-11' | 'gap-y-12' | 'gap-y-14' | 'gap-y-16' | 'gap-y-20'
  | 'gap-y-24' | 'gap-y-28' | 'gap-y-32' | 'gap-y-36' | 'gap-y-40' | 'gap-y-44' | 'gap-y-48'
  | 'gap-y-52' | 'gap-y-56' | 'gap-y-60' | 'gap-y-64' | 'gap-y-72' | 'gap-y-80' | 'gap-y-96';

// Order (Item Order)
export type ContainerOrder = 
  | 'order-1' | 'order-2' | 'order-3' | 'order-4' | 'order-5' | 'order-6'
  | 'order-7' | 'order-8' | 'order-9' | 'order-10' | 'order-11' | 'order-12'
  | 'order-first' | 'order-last' | 'order-none';

// Place Content (Shorthand for justify-content + align-content)
export type ContainerPlaceContent = 
  | 'place-content-center' | 'place-content-start' | 'place-content-end'
  | 'place-content-between' | 'place-content-around' | 'place-content-evenly'
  | 'place-content-baseline' | 'place-content-stretch';

// Place Items (Shorthand for justify-items + align-items)
export type ContainerPlaceItems = 
  | 'place-items-start' | 'place-items-end' | 'place-items-center'
  | 'place-items-baseline' | 'place-items-stretch';

// Place Self (Shorthand for justify-self + align-self)
export type ContainerPlaceSelf = 
  | 'place-self-auto' | 'place-self-start' | 'place-self-end'
  | 'place-self-center' | 'place-self-stretch';

// Responsive Design
export type ContainerBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ContainerResponsive = `${ContainerBreakpoint}:${string}`;

// Main interface for Flexbox container element Tailwind utility props
export interface TailwindContainerInterface {
  display?: ContainerDisplay;
  flexDirection?: ContainerFlexDirection;
  flexWrap?: ContainerFlexWrap;
  flex?: ContainerFlex;
  flexGrow?: ContainerFlexGrow;
  flexShrink?: ContainerFlexShrink;
  flexBasis?: ContainerFlexBasis;
  justifyContent?: ContainerJustifyContent;
  justifyItems?: ContainerJustifyItems;
  justifySelf?: ContainerJustifySelf;
  alignItems?: ContainerAlignItems;
  alignContent?: ContainerAlignContent;
  alignSelf?: ContainerAlignSelf;
  gap?: ContainerGap;
  gapX?: ContainerGapX;
  gapY?: ContainerGapY;
  order?: ContainerOrder;
  placeContent?: ContainerPlaceContent;
  placeItems?: ContainerPlaceItems;
  placeSelf?: ContainerPlaceSelf;
  responsive?: ContainerResponsive;
}
