export type TailwindSelectorType = {
  label: string;
  value: string;
  styles: string;
  description: string;
};
export type TailwindSelectorGroupType = {
  section: string;
  selectors: TailwindSelectorType[];
};
export type TailwindSelectorCategoryType = {
  category: string;
  groups: TailwindSelectorGroupType[];
};

// LAYOUT
const aspectRatio: TailwindSelectorType[] = [
  {
    label: "aspect-<ratio>",
    value: "aspect-<ratio>",
    styles: "aspect-ratio: <ratio>;",
    description:
      "Sets a custom aspect ratio using any numerical ratio format (e.g., aspect-3/2, aspect-16/9)",
  },
  {
    label: "aspect-square",
    value: "aspect-square",
    styles: "aspect-ratio: 1 / 1;",
    description:
      "Creates a perfect square with equal width and height proportions",
  },
  {
    label: "aspect-video",
    value: "aspect-video",
    styles: "aspect-ratio: var(--aspect-video); /* 16 / 9 */",
    description:
      "Sets a widescreen video aspect ratio of 16:9, commonly used for video embeds and media content",
  },
  {
    label: "aspect-auto",
    value: "aspect-auto",
    styles: "aspect-ratio: auto;",
    description:
      "Resets the aspect ratio to its natural, automatic behavior based on content dimensions",
  },
  {
    label: "aspect-(<custom-property>)",
    value: "aspect-(<custom-property>)",
    styles: "aspect-ratio: var(<custom-property>);",
    description:
      "Uses a CSS custom property (variable) for the aspect ratio, automatically wrapping it in var()",
  },
  {
    label: "aspect-[<value>]",
    value: "aspect-[<value>]",
    styles: "aspect-ratio: <value>;",
    description:
      "Sets an arbitrary aspect ratio value using Tailwind's square bracket notation for one-off custom values",
  },
];

const columns: TailwindSelectorType[] = [
  {
    label: "columns-<number>",
    value: "columns-<number>",
    styles: "columns: <number>;",
    description:
      "Sets a specific number of columns for multi-column layout (e.g., columns-2, columns-3)",
  },
  {
    label: "columns-3xs",
    value: "columns-3xs",
    styles: "columns: var(--container-3xs); /* 16rem (256px) */",
    description:
      "Sets column width to 16rem (256px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-2xs",
    value: "columns-2xs",
    styles: "columns: var(--container-2xs); /* 18rem (288px) */",
    description:
      "Sets column width to 18rem (288px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-xs",
    value: "columns-xs",
    styles: "columns: var(--container-xs); /* 20rem (320px) */",
    description:
      "Sets column width to 20rem (320px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-sm",
    value: "columns-sm",
    styles: "columns: var(--container-sm); /* 24rem (384px) */",
    description:
      "Sets column width to 24rem (384px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-md",
    value: "columns-md",
    styles: "columns: var(--container-md); /* 28rem (448px) */",
    description:
      "Sets column width to 28rem (448px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-lg",
    value: "columns-lg",
    styles: "columns: var(--container-lg); /* 32rem (512px) */",
    description:
      "Sets column width to 32rem (512px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-xl",
    value: "columns-xl",
    styles: "columns: var(--container-xl); /* 36rem (576px) */",
    description:
      "Sets column width to 36rem (576px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-2xl",
    value: "columns-2xl",
    styles: "columns: var(--container-2xl); /* 42rem (672px) */",
    description:
      "Sets column width to 42rem (672px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-3xl",
    value: "columns-3xl",
    styles: "columns: var(--container-3xl); /* 48rem (768px) */",
    description:
      "Sets column width to 48rem (768px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-4xl",
    value: "columns-4xl",
    styles: "columns: var(--container-4xl); /* 56rem (896px) */",
    description:
      "Sets column width to 56rem (896px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-5xl",
    value: "columns-5xl",
    styles: "columns: var(--container-5xl); /* 64rem (1024px) */",
    description:
      "Sets column width to 64rem (1024px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-6xl",
    value: "columns-6xl",
    styles: "columns: var(--container-6xl); /* 72rem (1152px) */",
    description:
      "Sets column width to 72rem (1152px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-7xl",
    value: "columns-7xl",
    styles: "columns: var(--container-7xl); /* 80rem (1280px) */",
    description:
      "Sets column width to 80rem (1280px), allowing the browser to calculate the number of columns that fit",
  },
  {
    label: "columns-auto",
    value: "columns-auto",
    styles: "columns: auto;",
    description:
      "Resets columns to automatic behavior, removing any multi-column layout constraints",
  },
  {
    label: "columns-(<custom-property>)",
    value: "columns-(<custom-property>)",
    styles: "columns: var(<custom-property>);",
    description:
      "Uses a CSS custom property (variable) for the column configuration, automatically wrapping it in var()",
  },
  {
    label: "columns-[<value>]",
    value: "columns-[<value>]",
    styles: "columns: <value>;",
    description:
      "Sets an arbitrary column value using Tailwind's square bracket notation for one-off custom configurations",
  },
];

const breakAfter: TailwindSelectorType[] = [
  {
    label: "break-after-auto",
    value: "break-after-auto",
    styles: "break-after: auto;",
    description:
      "Allows, but does not force, a page, column, or region break after the element",
  },
  {
    label: "break-after-avoid",
    value: "break-after-avoid",
    styles: "break-after: avoid;",
    description: "Avoids any break (page, column, or region) after the element",
  },
  {
    label: "break-after-all",
    value: "break-after-all",
    styles: "break-after: all;",
    description:
      "Forces a page break after the element, applying to all possible breaking contexts",
  },
  {
    label: "break-after-avoid-page",
    value: "break-after-avoid-page",
    styles: "break-after: avoid-page;",
    description: "Avoids a page break after the element",
  },
  {
    label: "break-after-page",
    value: "break-after-page",
    styles: "break-after: page;",
    description: "Forces a page break after the element",
  },
  {
    label: "break-after-left",
    value: "break-after-left",
    styles: "break-after: left;",
    description:
      "Forces one or two page breaks after the element so that the next page is formatted as a left page",
  },
  {
    label: "break-after-right",
    value: "break-after-right",
    styles: "break-after: right;",
    description:
      "Forces one or two page breaks after the element so that the next page is formatted as a right page",
  },
  {
    label: "break-after-column",
    value: "break-after-column",
    styles: "break-after: column;",
    description:
      "Forces a column break after the element in multi-column layouts",
  },
];

const breakBefore: TailwindSelectorType[] = [
  {
    label: "break-before-auto",
    value: "break-before-auto",
    styles: "break-before: auto;",
    description:
      "Allows, but does not force, a page, column, or region break before the element",
  },
  {
    label: "break-before-avoid",
    value: "break-before-avoid",
    styles: "break-before: avoid;",
    description:
      "Avoids any break (page, column, or region) before the element",
  },
  {
    label: "break-before-all",
    value: "break-before-all",
    styles: "break-before: all;",
    description:
      "Forces a page break before the element, applying to all possible breaking contexts",
  },
  {
    label: "break-before-avoid-page",
    value: "break-before-avoid-page",
    styles: "break-before: avoid-page;",
    description: "Avoids a page break before the element",
  },
  {
    label: "break-before-page",
    value: "break-before-page",
    styles: "break-before: page;",
    description: "Forces a page break before the element",
  },
  {
    label: "break-before-left",
    value: "break-before-left",
    styles: "break-before: left;",
    description:
      "Forces one or two page breaks before the element so that the next page is formatted as a left page",
  },
  {
    label: "break-before-right",
    value: "break-before-right",
    styles: "break-before: right;",
    description:
      "Forces one or two page breaks before the element so that the next page is formatted as a right page",
  },
  {
    label: "break-before-column",
    value: "break-before-column",
    styles: "break-before: column;",
    description:
      "Forces a column break before the element in multi-column layouts",
  },
];

const breakInside: TailwindSelectorType[] = [
  {
    label: "break-inside-auto",
    value: "break-inside-auto",
    styles: "break-inside: auto;",
    description:
      "Allows, but does not force, any break (page, column, or region) within the element",
  },
  {
    label: "break-inside-avoid",
    value: "break-inside-avoid",
    styles: "break-inside: avoid;",
    description:
      "Avoids any break (page, column, or region) within the element",
  },
  {
    label: "break-inside-avoid-page",
    value: "break-inside-avoid-page",
    styles: "break-inside: avoid-page;",
    description: "Avoids a page break within the element",
  },
  {
    label: "break-inside-avoid-column",
    value: "break-inside-avoid-column",
    styles: "break-inside: avoid-column;",
    description:
      "Avoids a column break within the element in multi-column layouts",
  },
];

const boxDecorationBreak: TailwindSelectorType[] = [
  {
    label: "box-decoration-clone",
    value: "box-decoration-clone",
    styles: "box-decoration-break: clone;",
    description:
      "Renders element fragments across multiple lines as separate, independent boxes with individual backgrounds, borders, padding, and margins",
  },
  {
    label: "box-decoration-slice",
    value: "box-decoration-slice",
    styles: "box-decoration-break: slice;",
    description:
      "Renders element fragments as if the element were not broken, treating it as one continuous piece",
  },
];

const boxSizing: TailwindSelectorType[] = [
  {
    label: "box-border",
    value: "box-border",
    styles: "box-sizing: border-box;",
    description:
      "Includes borders and padding in an element's total width and height calculations",
  },
  {
    label: "box-content",
    value: "box-content",
    styles: "box-sizing: content-box;",
    description:
      "Excludes borders and padding from an element's width and height, adding them outside the specified dimensions",
  },
];

const display: TailwindSelectorType[] = [
  {
    label: "inline",
    value: "inline",
    styles: "display: inline;",
    description:
      "Makes an element inline, flowing with text and not breaking to a new line",
  },
  {
    label: "block",
    value: "block",
    styles: "display: block;",
    description:
      "Makes an element block-level, starting on a new line and filling its parent's width",
  },
  {
    label: "inline-block",
    value: "inline-block",
    styles: "display: inline-block;",
    description:
      "Combines inline flow with block formatting, allowing width and height while staying in line",
  },
  {
    label: "flow-root",
    value: "flow-root",
    styles: "display: flow-root;",
    description:
      "Creates a block-level element with its own block formatting context",
  },
  {
    label: "flex",
    value: "flex",
    styles: "display: flex;",
    description: "Creates a block-level flex container for flexible layouts",
  },
  {
    label: "inline-flex",
    value: "inline-flex",
    styles: "display: inline-flex;",
    description: "Creates an inline-level flex container that flows with text",
  },
  {
    label: "grid",
    value: "grid",
    styles: "display: grid;",
    description:
      "Creates a block-level grid container for two-dimensional layouts",
  },
  {
    label: "inline-grid",
    value: "inline-grid",
    styles: "display: inline-grid;",
    description: "Creates an inline-level grid container that flows with text",
  },
  {
    label: "contents",
    value: "contents",
    styles: "display: contents;",
    description:
      "Makes the element's children act as direct children of the parent, removing the element from the layout",
  },
  {
    label: "table",
    value: "table",
    styles: "display: table;",
    description: "Makes an element behave like a table element",
  },
  {
    label: "inline-table",
    value: "inline-table",
    styles: "display: inline-table;",
    description: "Makes an element behave like an inline-level table",
  },
  {
    label: "table-caption",
    value: "table-caption",
    styles: "display: table-caption;",
    description: "Makes an element behave like a table caption",
  },
  {
    label: "table-cell",
    value: "table-cell",
    styles: "display: table-cell;",
    description: "Makes an element behave like a table cell (td)",
  },
  {
    label: "table-column",
    value: "table-column",
    styles: "display: table-column;",
    description: "Makes an element behave like a table column (col)",
  },
  {
    label: "table-column-group",
    value: "table-column-group",
    styles: "display: table-column-group;",
    description: "Makes an element behave like a table column group (colgroup)",
  },
  {
    label: "table-footer-group",
    value: "table-footer-group",
    styles: "display: table-footer-group;",
    description: "Makes an element behave like a table footer group (tfoot)",
  },
  {
    label: "table-header-group",
    value: "table-header-group",
    styles: "display: table-header-group;",
    description: "Makes an element behave like a table header group (thead)",
  },
  {
    label: "table-row-group",
    value: "table-row-group",
    styles: "display: table-row-group;",
    description: "Makes an element behave like a table body (tbody)",
  },
  {
    label: "table-row",
    value: "table-row",
    styles: "display: table-row;",
    description: "Makes an element behave like a table row (tr)",
  },
  {
    label: "list-item",
    value: "list-item",
    styles: "display: list-item;",
    description: "Makes an element behave like a list item with a marker",
  },
  {
    label: "hidden",
    value: "hidden",
    styles: "display: none;",
    description: "Completely removes an element from the document layout",
  },
  {
    label: "sr-only",
    value: "sr-only",
    styles:
      "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border-width: 0;",
    description:
      "Visually hides an element while keeping it accessible to screen readers",
  },
  {
    label: "not-sr-only",
    value: "not-sr-only",
    styles:
      "position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;",
    description:
      "Reverses sr-only, making an element visible to both sighted users and screen readers",
  },
];

const float: TailwindSelectorType[] = [
  {
    label: "float-right",
    value: "float-right",
    styles: "float: right;",
    description:
      "Floats an element to the right of its container, allowing text to wrap around its left side",
  },
  {
    label: "float-left",
    value: "float-left",
    styles: "float: left;",
    description:
      "Floats an element to the left of its container, allowing text to wrap around its right side",
  },
  {
    label: "float-start",
    value: "float-start",
    styles: "float: inline-start;",
    description:
      "Floats an element to the start side based on text direction (left in LTR, right in RTL)",
  },
  {
    label: "float-end",
    value: "float-end",
    styles: "float: inline-end;",
    description:
      "Floats an element to the end side based on text direction (right in LTR, left in RTL)",
  },
  {
    label: "float-none",
    value: "float-none",
    styles: "float: none;",
    description:
      "Removes any float from an element, returning it to normal document flow",
  },
];

const clear: TailwindSelectorType[] = [
  {
    label: "clear-left",
    value: "clear-left",
    styles: "clear: left;",
    description:
      "Positions an element below any preceding left-floated elements",
  },
  {
    label: "clear-right",
    value: "clear-right",
    styles: "clear: right;",
    description:
      "Positions an element below any preceding right-floated elements",
  },
  {
    label: "clear-both",
    value: "clear-both",
    styles: "clear: both;",
    description:
      "Positions an element below all preceding floated elements (both left and right)",
  },
  {
    label: "clear-start",
    value: "clear-start",
    styles: "clear: inline-start;",
    description:
      "Clears floats on the start side based on text direction (left in LTR, right in RTL)",
  },
  {
    label: "clear-end",
    value: "clear-end",
    styles: "clear: inline-end;",
    description:
      "Clears floats on the end side based on text direction (right in LTR, left in RTL)",
  },
  {
    label: "clear-none",
    value: "clear-none",
    styles: "clear: none;",
    description:
      "Removes any clear behavior, allowing elements to wrap around floated elements",
  },
];

const isolation: TailwindSelectorType[] = [
  {
    label: "isolate",
    value: "isolate",
    styles: "isolation: isolate;",
    description:
      "Creates a new stacking context, isolating the element from blend modes and z-index stacking of other elements",
  },
  {
    label: "isolation-auto",
    value: "isolation-auto",
    styles: "isolation: auto;",
    description:
      "Uses the default stacking context behavior, allowing the element to participate in its parent's stacking context",
  },
];

const objectFit: TailwindSelectorType[] = [
  {
    label: "object-contain",
    value: "object-contain",
    styles: "object-fit: contain;",
    description:
      "Resizes content to fit within the container while maintaining aspect ratio",
  },
  {
    label: "object-cover",
    value: "object-cover",
    styles: "object-fit: cover;",
    description:
      "Resizes content to cover the entire container while maintaining aspect ratio, cropping if necessary",
  },
  {
    label: "object-fill",
    value: "object-fill",
    styles: "object-fit: fill;",
    description:
      "Stretches content to fill the container without maintaining aspect ratio",
  },
  {
    label: "object-none",
    value: "object-none",
    styles: "object-fit: none;",
    description:
      "Displays content at its original size, ignoring the container dimensions",
  },
  {
    label: "object-scale-down",
    value: "object-scale-down",
    styles: "object-fit: scale-down;",
    description:
      "Displays content at its original size or smaller to fit within the container, whichever is smaller",
  },
];

const objectPosition: TailwindSelectorType[] = [
  {
    label: "object-bottom",
    value: "object-bottom",
    styles: "object-position: bottom;",
    description:
      "Positions replaced element content at the bottom of its container",
  },
  {
    label: "object-center",
    value: "object-center",
    styles: "object-position: center;",
    description:
      "Positions replaced element content at the center of its container",
  },
  {
    label: "object-left",
    value: "object-left",
    styles: "object-position: left;",
    description:
      "Positions replaced element content at the left of its container",
  },
  {
    label: "object-left-bottom",
    value: "object-left-bottom",
    styles: "object-position: left bottom;",
    description:
      "Positions replaced element content at the left bottom corner of its container",
  },
  {
    label: "object-left-top",
    value: "object-left-top",
    styles: "object-position: left top;",
    description:
      "Positions replaced element content at the left top corner of its container",
  },
  {
    label: "object-right",
    value: "object-right",
    styles: "object-position: right;",
    description:
      "Positions replaced element content at the right of its container",
  },
  {
    label: "object-right-bottom",
    value: "object-right-bottom",
    styles: "object-position: right bottom;",
    description:
      "Positions replaced element content at the right bottom corner of its container",
  },
  {
    label: "object-right-top",
    value: "object-right-top",
    styles: "object-position: right top;",
    description:
      "Positions replaced element content at the right top corner of its container",
  },
  {
    label: "object-top",
    value: "object-top",
    styles: "object-position: top;",
    description:
      "Positions replaced element content at the top of its container",
  },
  {
    label: "object-[<value>]",
    value: "object-[<value>]",
    styles: "object-position: <value>;",
    description:
      "Sets an arbitrary object position using Tailwind's square bracket notation",
  },
];

const overflow: TailwindSelectorType[] = [
  {
    label: "overflow-auto",
    value: "overflow-auto",
    styles: "overflow: auto;",
    description: "Adds scrollbars only when content overflows",
  },
  {
    label: "overflow-hidden",
    value: "overflow-hidden",
    styles: "overflow: hidden;",
    description: "Clips overflowing content and hides scrollbars",
  },
  {
    label: "overflow-clip",
    value: "overflow-clip",
    styles: "overflow: clip;",
    description: "Clips overflowing content at the element's padding box",
  },
  {
    label: "overflow-visible",
    value: "overflow-visible",
    styles: "overflow: visible;",
    description:
      "Allows content to overflow the container bounds without clipping",
  },
  {
    label: "overflow-scroll",
    value: "overflow-scroll",
    styles: "overflow: scroll;",
    description: "Always shows scrollbars, even when content doesn't overflow",
  },
  {
    label: "overflow-x-auto",
    value: "overflow-x-auto",
    styles: "overflow-x: auto;",
    description:
      "Adds horizontal scrollbar only when content overflows horizontally",
  },
  {
    label: "overflow-y-auto",
    value: "overflow-y-auto",
    styles: "overflow-y: auto;",
    description:
      "Adds vertical scrollbar only when content overflows vertically",
  },
  {
    label: "overflow-x-hidden",
    value: "overflow-x-hidden",
    styles: "overflow-x: hidden;",
    description: "Clips horizontally overflowing content",
  },
  {
    label: "overflow-y-hidden",
    value: "overflow-y-hidden",
    styles: "overflow-y: hidden;",
    description: "Clips vertically overflowing content",
  },
  {
    label: "overflow-x-clip",
    value: "overflow-x-clip",
    styles: "overflow-x: clip;",
    description: "Clips horizontally overflowing content at the padding box",
  },
  {
    label: "overflow-y-clip",
    value: "overflow-y-clip",
    styles: "overflow-y: clip;",
    description: "Clips vertically overflowing content at the padding box",
  },
  {
    label: "overflow-x-visible",
    value: "overflow-x-visible",
    styles: "overflow-x: visible;",
    description: "Allows content to overflow horizontally without clipping",
  },
  {
    label: "overflow-y-visible",
    value: "overflow-y-visible",
    styles: "overflow-y: visible;",
    description: "Allows content to overflow vertically without clipping",
  },
  {
    label: "overflow-x-scroll",
    value: "overflow-x-scroll",
    styles: "overflow-x: scroll;",
    description: "Always shows horizontal scrollbar",
  },
  {
    label: "overflow-y-scroll",
    value: "overflow-y-scroll",
    styles: "overflow-y: scroll;",
    description: "Always shows vertical scrollbar",
  },
];

const overscrollBehavior: TailwindSelectorType[] = [
  {
    label: "overscroll-auto",
    value: "overscroll-auto",
    styles: "overscroll-behavior: auto;",
    description:
      "Allows scrolling to continue to parent elements when reaching the boundary",
  },
  {
    label: "overscroll-contain",
    value: "overscroll-contain",
    styles: "overscroll-behavior: contain;",
    description:
      "Prevents scroll chaining to parent elements but preserves bounce effects",
  },
  {
    label: "overscroll-none",
    value: "overscroll-none",
    styles: "overscroll-behavior: none;",
    description:
      "Prevents scroll chaining and bounce effects when reaching boundaries",
  },
  {
    label: "overscroll-y-auto",
    value: "overscroll-y-auto",
    styles: "overscroll-behavior-y: auto;",
    description: "Allows vertical scrolling to continue to parent elements",
  },
  {
    label: "overscroll-y-contain",
    value: "overscroll-y-contain",
    styles: "overscroll-behavior-y: contain;",
    description:
      "Prevents vertical scroll chaining but preserves bounce effects",
  },
  {
    label: "overscroll-y-none",
    value: "overscroll-y-none",
    styles: "overscroll-behavior-y: none;",
    description: "Prevents vertical scroll chaining and bounce effects",
  },
  {
    label: "overscroll-x-auto",
    value: "overscroll-x-auto",
    styles: "overscroll-behavior-x: auto;",
    description: "Allows horizontal scrolling to continue to parent elements",
  },
  {
    label: "overscroll-x-contain",
    value: "overscroll-x-contain",
    styles: "overscroll-behavior-x: contain;",
    description:
      "Prevents horizontal scroll chaining but preserves bounce effects",
  },
  {
    label: "overscroll-x-none",
    value: "overscroll-x-none",
    styles: "overscroll-behavior-x: none;",
    description: "Prevents horizontal scroll chaining and bounce effects",
  },
];

const position: TailwindSelectorType[] = [
  {
    label: "static",
    value: "static",
    styles: "position: static;",
    description: "Positions an element according to the normal document flow",
  },
  {
    label: "fixed",
    value: "fixed",
    styles: "position: fixed;",
    description:
      "Positions an element relative to the viewport, removing it from normal document flow",
  },
  {
    label: "absolute",
    value: "absolute",
    styles: "position: absolute;",
    description:
      "Positions an element relative to its nearest positioned ancestor",
  },
  {
    label: "relative",
    value: "relative",
    styles: "position: relative;",
    description:
      "Positions an element relative to its normal position in the document flow",
  },
  {
    label: "sticky",
    value: "sticky",
    styles: "position: sticky;",
    description:
      "Positions an element as relative until it reaches a threshold, then becomes fixed",
  },
];

const topRightBottomLeft: TailwindSelectorType[] = [
  {
    label: "inset-<number>",
    value: "inset-<number>",
    styles: "inset: <number>;",
    description:
      "Sets the top, right, bottom, and left offset values simultaneously",
  },
  {
    label: "inset-x-<number>",
    value: "inset-x-<number>",
    styles: "left: <number>; right: <number>;",
    description: "Sets both left and right offset values",
  },
  {
    label: "inset-y-<number>",
    value: "inset-y-<number>",
    styles: "top: <number>; bottom: <number>;",
    description: "Sets both top and bottom offset values",
  },
  {
    label: "top-<number>",
    value: "top-<number>",
    styles: "top: <number>;",
    description: "Sets the top offset of a positioned element",
  },
  {
    label: "right-<number>",
    value: "right-<number>",
    styles: "right: <number>;",
    description: "Sets the right offset of a positioned element",
  },
  {
    label: "bottom-<number>",
    value: "bottom-<number>",
    styles: "bottom: <number>;",
    description: "Sets the bottom offset of a positioned element",
  },
  {
    label: "left-<number>",
    value: "left-<number>",
    styles: "left: <number>;",
    description: "Sets the left offset of a positioned element",
  },
  {
    label: "inset-[<value>]",
    value: "inset-[<value>]",
    styles: "inset: <value>;",
    description:
      "Sets an arbitrary inset value using Tailwind's square bracket notation",
  },
];

const visibility: TailwindSelectorType[] = [
  {
    label: "visible",
    value: "visible",
    styles: "visibility: visible;",
    description: "Makes an element visible",
  },
  {
    label: "invisible",
    value: "invisible",
    styles: "visibility: hidden;",
    description: "Hides an element but maintains its space in the layout",
  },
  {
    label: "collapse",
    value: "collapse",
    styles: "visibility: collapse;",
    description: "Collapses table rows, columns, or other elements",
  },
];

const zIndex: TailwindSelectorType[] = [
  {
    label: "z-<number>",
    value: "z-<number>",
    styles: "z-index: <number>;",
    description: "Sets the stack order of an element (e.g., z-10, z-50)",
  },
  {
    label: "z-auto",
    value: "z-auto",
    styles: "z-index: auto;",
    description: "Uses the default stacking order based on document flow",
  },
  {
    label: "z-(<custom-property>)",
    value: "z-(<custom-property>)",
    styles: "z-index: var(<custom-property>);",
    description: "Uses a CSS custom property for the z-index value",
  },
  {
    label: "z-[<value>]",
    value: "z-[<value>]",
    styles: "z-index: <value>;",
    description:
      "Sets an arbitrary z-index value using Tailwind's square bracket notation",
  },
];

// Flexbox & Grid
const flexBasis: TailwindSelectorType[] = [
  {
    label: "basis-<number>",
    value: "basis-<number>",
    styles: "flex-basis: calc(var(--spacing) * <number>);",
    description:
      "Sets the initial size of flex items based on the spacing scale (e.g., basis-64, basis-128)",
  },
  {
    label: "basis-<fraction>",
    value: "basis-<fraction>",
    styles: "flex-basis: calc(<fraction> * 100%);",
    description:
      "Sets the initial size of flex items as a percentage (e.g., basis-1/2, basis-2/3)",
  },
  {
    label: "basis-full",
    value: "basis-full",
    styles: "flex-basis: 100%;",
    description: "Sets the flex basis to 100% of the container width",
  },
  {
    label: "basis-auto",
    value: "basis-auto",
    styles: "flex-basis: auto;",
    description: "Sets the flex basis to auto, using the item's content size",
  },
  {
    label: "basis-3xs",
    value: "basis-3xs",
    styles: "flex-basis: var(--container-3xs); /* 16rem (256px) */",
    description: "Sets flex basis to 16rem (256px)",
  },
  {
    label: "basis-2xs",
    value: "basis-2xs",
    styles: "flex-basis: var(--container-2xs); /* 18rem (288px) */",
    description: "Sets flex basis to 18rem (288px)",
  },
  {
    label: "basis-xs",
    value: "basis-xs",
    styles: "flex-basis: var(--container-xs); /* 20rem (320px) */",
    description: "Sets flex basis to 20rem (320px)",
  },
  {
    label: "basis-sm",
    value: "basis-sm",
    styles: "flex-basis: var(--container-sm); /* 24rem (384px) */",
    description: "Sets flex basis to 24rem (384px)",
  },
  {
    label: "basis-md",
    value: "basis-md",
    styles: "flex-basis: var(--container-md); /* 28rem (448px) */",
    description: "Sets flex basis to 28rem (448px)",
  },
  {
    label: "basis-lg",
    value: "basis-lg",
    styles: "flex-basis: var(--container-lg); /* 32rem (512px) */",
    description: "Sets flex basis to 32rem (512px)",
  },
  {
    label: "basis-xl",
    value: "basis-xl",
    styles: "flex-basis: var(--container-xl); /* 36rem (576px) */",
    description: "Sets flex basis to 36rem (576px)",
  },
  {
    label: "basis-2xl",
    value: "basis-2xl",
    styles: "flex-basis: var(--container-2xl); /* 42rem (672px) */",
    description: "Sets flex basis to 42rem (672px)",
  },
  {
    label: "basis-3xl",
    value: "basis-3xl",
    styles: "flex-basis: var(--container-3xl); /* 48rem (768px) */",
    description: "Sets flex basis to 48rem (768px)",
  },
  {
    label: "basis-4xl",
    value: "basis-4xl",
    styles: "flex-basis: var(--container-4xl); /* 56rem (896px) */",
    description: "Sets flex basis to 56rem (896px)",
  },
  {
    label: "basis-5xl",
    value: "basis-5xl",
    styles: "flex-basis: var(--container-5xl); /* 64rem (1024px) */",
    description: "Sets flex basis to 64rem (1024px)",
  },
  {
    label: "basis-6xl",
    value: "basis-6xl",
    styles: "flex-basis: var(--container-6xl); /* 72rem (1152px) */",
    description: "Sets flex basis to 72rem (1152px)",
  },
  {
    label: "basis-7xl",
    value: "basis-7xl",
    styles: "flex-basis: var(--container-7xl); /* 80rem (1280px) */",
    description: "Sets flex basis to 80rem (1280px)",
  },
  {
    label: "basis-(<custom-property>)",
    value: "basis-(<custom-property>)",
    styles: "flex-basis: var(<custom-property>);",
    description: "Uses a CSS custom property for the flex basis value",
  },
  {
    label: "basis-[<value>]",
    value: "basis-[<value>]",
    styles: "flex-basis: <value>;",
    description:
      "Sets an arbitrary flex basis value using Tailwind's square bracket notation",
  },
];

const flexDirection: TailwindSelectorType[] = [
  {
    label: "flex-row",
    value: "flex-row",
    styles: "flex-direction: row;",
    description:
      "Positions flex items horizontally in the same direction as text",
  },
  {
    label: "flex-row-reverse",
    value: "flex-row-reverse",
    styles: "flex-direction: row-reverse;",
    description: "Positions flex items horizontally in the opposite direction",
  },
  {
    label: "flex-col",
    value: "flex-col",
    styles: "flex-direction: column;",
    description: "Positions flex items vertically from top to bottom",
  },
  {
    label: "flex-col-reverse",
    value: "flex-col-reverse",
    styles: "flex-direction: column-reverse;",
    description: "Positions flex items vertically from bottom to top",
  },
];

const flexWrap: TailwindSelectorType[] = [
  {
    label: "flex-wrap",
    value: "flex-wrap",
    styles: "flex-wrap: wrap;",
    description: "Allows flex items to wrap to multiple lines",
  },
  {
    label: "flex-wrap-reverse",
    value: "flex-wrap-reverse",
    styles: "flex-wrap: wrap-reverse;",
    description: "Wraps flex items to multiple lines in reverse order",
  },
  {
    label: "flex-nowrap",
    value: "flex-nowrap",
    styles: "flex-wrap: nowrap;",
    description:
      "Prevents flex items from wrapping, causing overflow if necessary",
  },
];

const flex: TailwindSelectorType[] = [
  {
    label: "flex-<number>",
    value: "flex-<number>",
    styles: "flex: <number> 1 0%;",
    description:
      "Allows a flex item to grow and shrink with a specific flex factor (e.g., flex-1)",
  },
  {
    label: "flex-initial",
    value: "flex-initial",
    styles: "flex: 0 1 auto;",
    description:
      "Allows a flex item to shrink but not grow, considering its initial size",
  },
  {
    label: "flex-auto",
    value: "flex-auto",
    styles: "flex: 1 1 auto;",
    description:
      "Allows a flex item to grow and shrink, considering its initial size",
  },
  {
    label: "flex-none",
    value: "flex-none",
    styles: "flex: none;",
    description: "Prevents a flex item from growing or shrinking",
  },
  {
    label: "flex-(<custom-property>)",
    value: "flex-(<custom-property>)",
    styles: "flex: var(<custom-property>);",
    description: "Uses a CSS custom property for the flex value",
  },
  {
    label: "flex-[<value>]",
    value: "flex-[<value>]",
    styles: "flex: <value>;",
    description:
      "Sets an arbitrary flex value using Tailwind's square bracket notation",
  },
];

const flexGrow: TailwindSelectorType[] = [
  {
    label: "grow",
    value: "grow",
    styles: "flex-grow: 1;",
    description: "Allows a flex item to grow to fill available space",
  },
  {
    label: "grow-<number>",
    value: "grow-<number>",
    styles: "flex-grow: <number>;",
    description: "Sets a specific flex grow factor (e.g., grow-3, grow-7)",
  },
  {
    label: "grow-0",
    value: "grow-0",
    styles: "flex-grow: 0;",
    description: "Prevents a flex item from growing",
  },
  {
    label: "grow-(<custom-property>)",
    value: "grow-(<custom-property>)",
    styles: "flex-grow: var(<custom-property>);",
    description: "Uses a CSS custom property for the flex grow value",
  },
  {
    label: "grow-[<value>]",
    value: "grow-[<value>]",
    styles: "flex-grow: <value>;",
    description:
      "Sets an arbitrary flex grow value using Tailwind's square bracket notation",
  },
];

const flexShrink: TailwindSelectorType[] = [
  {
    label: "shrink",
    value: "shrink",
    styles: "flex-shrink: 1;",
    description: "Allows a flex item to shrink if needed",
  },
  {
    label: "shrink-<number>",
    value: "shrink-<number>",
    styles: "flex-shrink: <number>;",
    description: "Sets a specific flex shrink factor",
  },
  {
    label: "shrink-0",
    value: "shrink-0",
    styles: "flex-shrink: 0;",
    description: "Prevents a flex item from shrinking",
  },
  {
    label: "shrink-(<custom-property>)",
    value: "shrink-(<custom-property>)",
    styles: "flex-shrink: var(<custom-property>);",
    description: "Uses a CSS custom property for the flex shrink value",
  },
  {
    label: "shrink-[<value>]",
    value: "shrink-[<value>]",
    styles: "flex-shrink: <value>;",
    description:
      "Sets an arbitrary flex shrink value using Tailwind's square bracket notation",
  },
];

const order: TailwindSelectorType[] = [
  {
    label: "order-<number>",
    value: "order-<number>",
    styles: "order: <number>;",
    description:
      "Sets the order of a flex or grid item (e.g., order-1, order-2)",
  },
  {
    label: "order-first",
    value: "order-first",
    styles: "order: -9999;",
    description: "Makes a flex or grid item appear first",
  },
  {
    label: "order-last",
    value: "order-last",
    styles: "order: 9999;",
    description: "Makes a flex or grid item appear last",
  },
  {
    label: "order-none",
    value: "order-none",
    styles: "order: 0;",
    description: "Resets the order to default",
  },
  {
    label: "order-[<value>]",
    value: "order-[<value>]",
    styles: "order: <value>;",
    description:
      "Sets an arbitrary order value using Tailwind's square bracket notation",
  },
];

const gridTemplateColumns: TailwindSelectorType[] = [
  {
    label: "grid-cols-<number>",
    value: "grid-cols-<number>",
    styles: "grid-template-columns: repeat(<number>, minmax(0, 1fr));",
    description:
      "Creates a grid with the specified number of equal-width columns",
  },
  {
    label: "grid-cols-none",
    value: "grid-cols-none",
    styles: "grid-template-columns: none;",
    description: "Removes any explicit grid column definition",
  },
  {
    label: "grid-cols-subgrid",
    value: "grid-cols-subgrid",
    styles: "grid-template-columns: subgrid;",
    description: "Uses the parent grid's column track definitions",
  },
  {
    label: "grid-cols-(<custom-property>)",
    value: "grid-cols-(<custom-property>)",
    styles: "grid-template-columns: var(<custom-property>);",
    description: "Uses a CSS custom property for grid template columns",
  },
  {
    label: "grid-cols-[<value>]",
    value: "grid-cols-[<value>]",
    styles: "grid-template-columns: <value>;",
    description:
      "Sets arbitrary grid column templates using Tailwind's square bracket notation",
  },
];

const gridColumn: TailwindSelectorType[] = [
  {
    label: "col-auto",
    value: "col-auto",
    styles: "grid-column: auto;",
    description:
      "Automatically sizes a grid column based on the grid definition",
  },
  {
    label: "col-span-<number>",
    value: "col-span-<number>",
    styles: "grid-column: span <number> / span <number>;",
    description: "Makes an element span the specified number of columns",
  },
  {
    label: "col-span-full",
    value: "col-span-full",
    styles: "grid-column: 1 / -1;",
    description: "Makes an element span all columns",
  },
  {
    label: "col-start-<number>",
    value: "col-start-<number>",
    styles: "grid-column-start: <number>;",
    description: "Sets the starting column line for a grid item",
  },
  {
    label: "col-start-auto",
    value: "col-start-auto",
    styles: "grid-column-start: auto;",
    description: "Automatically determines the starting column",
  },
  {
    label: "col-end-<number>",
    value: "col-end-<number>",
    styles: "grid-column-end: <number>;",
    description: "Sets the ending column line for a grid item",
  },
  {
    label: "col-end-auto",
    value: "col-end-auto",
    styles: "grid-column-end: auto;",
    description: "Automatically determines the ending column",
  },
  {
    label: "col-[<value>]",
    value: "col-[<value>]",
    styles: "grid-column: <value>;",
    description:
      "Sets an arbitrary grid column value using Tailwind's square bracket notation",
  },
];

const gridTemplateRows: TailwindSelectorType[] = [
  {
    label: "grid-rows-<number>",
    value: "grid-rows-<number>",
    styles: "grid-template-rows: repeat(<number>, minmax(0, 1fr));",
    description:
      "Creates a grid with the specified number of equal-height rows",
  },
  {
    label: "grid-rows-none",
    value: "grid-rows-none",
    styles: "grid-template-rows: none;",
    description: "Removes any explicit grid row definition",
  },
  {
    label: "grid-rows-subgrid",
    value: "grid-rows-subgrid",
    styles: "grid-template-rows: subgrid;",
    description: "Uses the parent grid's row track definitions",
  },
  {
    label: "grid-rows-(<custom-property>)",
    value: "grid-rows-(<custom-property>)",
    styles: "grid-template-rows: var(<custom-property>);",
    description: "Uses a CSS custom property for grid template rows",
  },
  {
    label: "grid-rows-[<value>]",
    value: "grid-rows-[<value>]",
    styles: "grid-template-rows: <value>;",
    description:
      "Sets arbitrary grid row templates using Tailwind's square bracket notation",
  },
];

const gridRow: TailwindSelectorType[] = [
  {
    label: "row-auto",
    value: "row-auto",
    styles: "grid-row: auto;",
    description: "Automatically sizes a grid row based on the grid definition",
  },
  {
    label: "row-span-<number>",
    value: "row-span-<number>",
    styles: "grid-row: span <number> / span <number>;",
    description: "Makes an element span the specified number of rows",
  },
  {
    label: "row-span-full",
    value: "row-span-full",
    styles: "grid-row: 1 / -1;",
    description: "Makes an element span all rows",
  },
  {
    label: "row-start-<number>",
    value: "row-start-<number>",
    styles: "grid-row-start: <number>;",
    description: "Sets the starting row line for a grid item",
  },
  {
    label: "row-start-auto",
    value: "row-start-auto",
    styles: "grid-row-start: auto;",
    description: "Automatically determines the starting row",
  },
  {
    label: "row-end-<number>",
    value: "row-end-<number>",
    styles: "grid-row-end: <number>;",
    description: "Sets the ending row line for a grid item",
  },
  {
    label: "row-end-auto",
    value: "row-end-auto",
    styles: "grid-row-end: auto;",
    description: "Automatically determines the ending row",
  },
  {
    label: "row-[<value>]",
    value: "row-[<value>]",
    styles: "grid-row: <value>;",
    description:
      "Sets an arbitrary grid row value using Tailwind's square bracket notation",
  },
];

const gridAutoFlow: TailwindSelectorType[] = [
  {
    label: "grid-flow-row",
    value: "grid-flow-row",
    styles: "grid-auto-flow: row;",
    description: "Places grid items by filling each row in turn",
  },
  {
    label: "grid-flow-col",
    value: "grid-flow-col",
    styles: "grid-auto-flow: column;",
    description: "Places grid items by filling each column in turn",
  },
  {
    label: "grid-flow-dense",
    value: "grid-flow-dense",
    styles: "grid-auto-flow: dense;",
    description: "Uses dense packing algorithm to fill gaps in the grid",
  },
  {
    label: "grid-flow-row-dense",
    value: "grid-flow-row-dense",
    styles: "grid-auto-flow: row dense;",
    description: "Places items by row with dense packing",
  },
  {
    label: "grid-flow-col-dense",
    value: "grid-flow-col-dense",
    styles: "grid-auto-flow: column dense;",
    description: "Places items by column with dense packing",
  },
];

const gridAutoColumns: TailwindSelectorType[] = [
  {
    label: "auto-cols-auto",
    value: "auto-cols-auto",
    styles: "grid-auto-columns: auto;",
    description: "Automatically sizes implicitly-created grid columns",
  },
  {
    label: "auto-cols-min",
    value: "auto-cols-min",
    styles: "grid-auto-columns: min-content;",
    description:
      "Sizes implicitly-created columns to their minimum content size",
  },
  {
    label: "auto-cols-max",
    value: "auto-cols-max",
    styles: "grid-auto-columns: max-content;",
    description:
      "Sizes implicitly-created columns to their maximum content size",
  },
  {
    label: "auto-cols-fr",
    value: "auto-cols-fr",
    styles: "grid-auto-columns: minmax(0, 1fr);",
    description:
      "Sizes implicitly-created columns to fill available space equally",
  },
  {
    label: "auto-cols-[<value>]",
    value: "auto-cols-[<value>]",
    styles: "grid-auto-columns: <value>;",
    description:
      "Sets an arbitrary grid auto columns value using Tailwind's square bracket notation",
  },
];

const gridAutoRows: TailwindSelectorType[] = [
  {
    label: "auto-rows-auto",
    value: "auto-rows-auto",
    styles: "grid-auto-rows: auto;",
    description: "Automatically sizes implicitly-created grid rows",
  },
  {
    label: "auto-rows-min",
    value: "auto-rows-min",
    styles: "grid-auto-rows: min-content;",
    description: "Sizes implicitly-created rows to their minimum content size",
  },
  {
    label: "auto-rows-max",
    value: "auto-rows-max",
    styles: "grid-auto-rows: max-content;",
    description: "Sizes implicitly-created rows to their maximum content size",
  },
  {
    label: "auto-rows-fr",
    value: "auto-rows-fr",
    styles: "grid-auto-rows: minmax(0, 1fr);",
    description:
      "Sizes implicitly-created rows to fill available space equally",
  },
  {
    label: "auto-rows-[<value>]",
    value: "auto-rows-[<value>]",
    styles: "grid-auto-rows: <value>;",
    description:
      "Sets an arbitrary grid auto rows value using Tailwind's square bracket notation",
  },
];

const gap: TailwindSelectorType[] = [
  {
    label: "gap-<number>",
    value: "gap-<number>",
    styles: "gap: calc(var(--spacing) * <number>);",
    description:
      "Sets the gap between rows and columns in grid and flexbox layouts",
  },
  {
    label: "gap-x-<number>",
    value: "gap-x-<number>",
    styles: "column-gap: calc(var(--spacing) * <number>);",
    description: "Sets the horizontal gap between columns",
  },
  {
    label: "gap-y-<number>",
    value: "gap-y-<number>",
    styles: "row-gap: calc(var(--spacing) * <number>);",
    description: "Sets the vertical gap between rows",
  },
  {
    label: "gap-(<custom-property>)",
    value: "gap-(<custom-property>)",
    styles: "gap: var(<custom-property>);",
    description: "Uses a CSS custom property for the gap value",
  },
  {
    label: "gap-[<value>]",
    value: "gap-[<value>]",
    styles: "gap: <value>;",
    description:
      "Sets an arbitrary gap value using Tailwind's square bracket notation",
  },
];

const justifyContent: TailwindSelectorType[] = [
  {
    label: "justify-normal",
    value: "justify-normal",
    styles: "justify-content: normal;",
    description: "Uses the default justification for the layout mode",
  },
  {
    label: "justify-start",
    value: "justify-start",
    styles: "justify-content: flex-start;",
    description: "Justifies items to the start of the container",
  },
  {
    label: "justify-end",
    value: "justify-end",
    styles: "justify-content: flex-end;",
    description: "Justifies items to the end of the container",
  },
  {
    label: "justify-center",
    value: "justify-center",
    styles: "justify-content: center;",
    description: "Justifies items to the center of the container",
  },
  {
    label: "justify-between",
    value: "justify-between",
    styles: "justify-content: space-between;",
    description:
      "Distributes items evenly with the first item at the start and last at the end",
  },
  {
    label: "justify-around",
    value: "justify-around",
    styles: "justify-content: space-around;",
    description: "Distributes items with equal space around each item",
  },
  {
    label: "justify-evenly",
    value: "justify-evenly",
    styles: "justify-content: space-evenly;",
    description: "Distributes items with equal space between them",
  },
  {
    label: "justify-stretch",
    value: "justify-stretch",
    styles: "justify-content: stretch;",
    description: "Stretches items to fill the container",
  },
];

const justifyItems: TailwindSelectorType[] = [
  {
    label: "justify-items-start",
    value: "justify-items-start",
    styles: "justify-items: start;",
    description: "Justifies grid items to the start of their inline axis",
  },
  {
    label: "justify-items-end",
    value: "justify-items-end",
    styles: "justify-items: end;",
    description: "Justifies grid items to the end of their inline axis",
  },
  {
    label: "justify-items-center",
    value: "justify-items-center",
    styles: "justify-items: center;",
    description: "Justifies grid items to the center of their inline axis",
  },
  {
    label: "justify-items-stretch",
    value: "justify-items-stretch",
    styles: "justify-items: stretch;",
    description: "Stretches grid items to fill their inline axis",
  },
];

const justifySelf: TailwindSelectorType[] = [
  {
    label: "justify-self-auto",
    value: "justify-self-auto",
    styles: "justify-self: auto;",
    description: "Uses the value from justify-items",
  },
  {
    label: "justify-self-start",
    value: "justify-self-start",
    styles: "justify-self: start;",
    description: "Justifies a grid item to the start of its inline axis",
  },
  {
    label: "justify-self-end",
    value: "justify-self-end",
    styles: "justify-self: end;",
    description: "Justifies a grid item to the end of its inline axis",
  },
  {
    label: "justify-self-center",
    value: "justify-self-center",
    styles: "justify-self: center;",
    description: "Justifies a grid item to the center of its inline axis",
  },
  {
    label: "justify-self-stretch",
    value: "justify-self-stretch",
    styles: "justify-self: stretch;",
    description: "Stretches a grid item to fill its inline axis",
  },
];

const alignContent: TailwindSelectorType[] = [
  {
    label: "content-normal",
    value: "content-normal",
    styles: "align-content: normal;",
    description: "Uses the default alignment for the layout mode",
  },
  {
    label: "content-start",
    value: "content-start",
    styles: "align-content: flex-start;",
    description: "Aligns content to the start of the container",
  },
  {
    label: "content-end",
    value: "content-end",
    styles: "align-content: flex-end;",
    description: "Aligns content to the end of the container",
  },
  {
    label: "content-center",
    value: "content-center",
    styles: "align-content: center;",
    description: "Aligns content to the center of the container",
  },
  {
    label: "content-between",
    value: "content-between",
    styles: "align-content: space-between;",
    description:
      "Distributes rows with the first row at the start and last at the end",
  },
  {
    label: "content-around",
    value: "content-around",
    styles: "align-content: space-around;",
    description: "Distributes rows with equal space around each row",
  },
  {
    label: "content-evenly",
    value: "content-evenly",
    styles: "align-content: space-evenly;",
    description: "Distributes rows with equal space between them",
  },
  {
    label: "content-baseline",
    value: "content-baseline",
    styles: "align-content: baseline;",
    description: "Aligns content along their baseline",
  },
  {
    label: "content-stretch",
    value: "content-stretch",
    styles: "align-content: stretch;",
    description: "Stretches rows to fill the container",
  },
];

const alignItems: TailwindSelectorType[] = [
  {
    label: "items-start",
    value: "items-start",
    styles: "align-items: flex-start;",
    description: "Aligns items to the start of the cross axis",
  },
  {
    label: "items-end",
    value: "items-end",
    styles: "align-items: flex-end;",
    description: "Aligns items to the end of the cross axis",
  },
  {
    label: "items-center",
    value: "items-center",
    styles: "align-items: center;",
    description: "Aligns items to the center of the cross axis",
  },
  {
    label: "items-baseline",
    value: "items-baseline",
    styles: "align-items: baseline;",
    description: "Aligns items along their baseline",
  },
  {
    label: "items-stretch",
    value: "items-stretch",
    styles: "align-items: stretch;",
    description: "Stretches items to fill the cross axis",
  },
];

const alignSelf: TailwindSelectorType[] = [
  {
    label: "self-auto",
    value: "self-auto",
    styles: "align-self: auto;",
    description: "Uses the value from align-items",
  },
  {
    label: "self-start",
    value: "self-start",
    styles: "align-self: flex-start;",
    description: "Aligns an item to the start of the cross axis",
  },
  {
    label: "self-end",
    value: "self-end",
    styles: "align-self: flex-end;",
    description: "Aligns an item to the end of the cross axis",
  },
  {
    label: "self-center",
    value: "self-center",
    styles: "align-self: center;",
    description: "Aligns an item to the center of the cross axis",
  },
  {
    label: "self-stretch",
    value: "self-stretch",
    styles: "align-self: stretch;",
    description: "Stretches an item to fill the cross axis",
  },
  {
    label: "self-baseline",
    value: "self-baseline",
    styles: "align-self: baseline;",
    description: "Aligns an item along its baseline",
  },
];

// Group tailwind selectors by section
const layoutSelectors: TailwindSelectorGroupType[] = [
  { section: "Aspect Ratio", selectors: aspectRatio },
  { section: "Columns", selectors: columns },
  { section: "Break After", selectors: breakAfter },
  { section: "Break Before", selectors: breakBefore },
  { section: "Break Inside", selectors: breakInside },
  { section: "Box Decoration Break", selectors: boxDecorationBreak },
  { section: "Box Sizing", selectors: boxSizing },
  { section: "Display", selectors: display },
  { section: "Float", selectors: float },
  { section: "Clear", selectors: clear },
  { section: "Isolation", selectors: isolation },
  { section: "Object Fit", selectors: objectFit },
  { section: "Object Position", selectors: objectPosition },
  { section: "Overflow", selectors: overflow },
  { section: "Overscroll Behavior", selectors: overscrollBehavior },
  { section: "Position", selectors: position },
  { section: "Top / Right / Bottom / Left", selectors: topRightBottomLeft },
  { section: "Visibility", selectors: visibility },
  { section: "Z-Index", selectors: zIndex },
];

const flexboxGridSelectors: TailwindSelectorGroupType[] = [
  { section: "Flex Basis", selectors: flexBasis },
  { section: "Flex Direction", selectors: flexDirection },
  { section: "Flex Wrap", selectors: flexWrap },
  { section: "Flex", selectors: flex },
  { section: "Flex Grow", selectors: flexGrow },
  { section: "Flex Shrink", selectors: flexShrink },
  { section: "Order", selectors: order },
  { section: "Grid Template Columns", selectors: gridTemplateColumns },
  { section: "Grid Column", selectors: gridColumn },
  { section: "Grid Template Rows", selectors: gridTemplateRows },
  { section: "Grid Row", selectors: gridRow },
  { section: "Grid Auto Flow", selectors: gridAutoFlow },
  { section: "Grid Auto Columns", selectors: gridAutoColumns },
  { section: "Grid Auto Rows", selectors: gridAutoRows },
  { section: "Gap", selectors: gap },
  { section: "Justify Items", selectors: justifyItems },
  { section: "Justify Content", selectors: justifyContent },
  { section: "Justify Self", selectors: justifySelf },
  { section: "Align Items", selectors: alignItems },
  { section: "Align Content", selectors: alignContent },
  { section: "Align Self", selectors: alignSelf },
  // { section: "Place Content", selectors: placeContent },
  // { section: "Place selectors", selectors: placeselectors },
  // { section: "Place Self", selectors: placeSelf }
];

const spacingProperties: TailwindSelectorGroupType[] = [
  //     {section: "Spacing", selectors: padding},
  //     {section: "Spacing", selectors: margin}
];

const sizingProperties: TailwindSelectorGroupType[] = [
  //     {section: "Width", selectors: width},
  //     {section: "Min Width", selectors: minWidth},
  //     {section: "Max Width", selectors: maxWidth},
  //     {section: "Height", selectors: height},
  //     {section: "Min Height", selectors: minHeight},
  //     {section: "Max Height", selectors: maxHeight}
];

const typographyProperties: TailwindSelectorGroupType[] = [
  //     {section: "Font Family", selectors: fontFamily},
  //     {section: "Font Size", selectors: fontSize},
  //     {section: "Font Smoothing", selectors: fontSmoothing},
  //     {section: "Font Style", selectors: fontStyle},
  //     {section: "Font Weight", selectors: fontWeight},
  //     {section: "Font Stretch", selectors: fontStretch},
  //     {section: "Font Variant Numeric", selectors: fontVariantNumeric},
  //     {section: "Letter Spacing", selectors: letterSpacing},
  //     {section: "Line Clamp", selectors: lineClamp},
  //     {section: "Line Height", selectors: lineHeight},
  //     {section: "List Style Image", selectors: listStyleImage},
  //     {section: "List Style Position", selectors: listStylePosition},
  //     {section: "List Style Type", selectors: listStyleType},
  //     {section: "Text Align", selectors: textAlign},
  //     {section: "Color", selectors: color},
  //     {section: "Text Decoration Line", selectors: textDecorationLine},
  //     {section: "Text Decoration Color", selectors: textDecorationColor},
  //     {section: "Text Decoration Style", selectors: textDecorationStyle},
  //     {section: "Text Decoration Thickness", selectors: textDecorationThickness},
  //     {section: "Text Underline Offset", selectors: textUnderlineOffset},
  //     {section: "Text Transform", selectors: textTransform},
  //     {section: "Text Overflow", selectors: textOverflow},
  //     {section: "Text Wrap", selectors: textWrap},
  //     {section: "Text Indent", selectors: textIndent},
  //     {section: "Vertical Align", selectors: verticalAlign},
  //     {section: "White Space", selectors: whiteSpace},
  //     {section: "Word Break", selectors: wordBreak},
  //     {section: "Overflow Wrap", selectors: overflowWrap},
  //     {section: "Hyphens", selectors: hyphens},
  //     {section: "Content", selectors: content}
];

const backgroundProperties: TailwindSelectorGroupType[] = [
  //     {section: "Background Attachment", selectors: backgroundAttachment},
  //     {section: "Background Clip", selectors: backgroundClip},
  //     {section: "Background Color", selectors: backgroundColor},
  //     {section: "Background Image", selectors: backgroundImage},
  //     {section: "Background Origin", selectors: backgroundOrigin},
  //     {section: "Background Position", selectors: backgroundPosition},
  //     {section: "Background Repeat", selectors: backgroundRepeat},
  //     {section: "Background Size", selectors: backgroundSize}
];

const borderProperties: TailwindSelectorGroupType[] = [
  //     {section: "Border Radius", selectors: borderRadius},
  //     {section: "Border Width", selectors: borderWidth},
  //     {section: "Border Color", selectors: borderColor},
  //     {section: "Border Style", selectors: borderStyle},
  //     {section: "Outline Width", selectors: outlineWidth},
  //     {section: "Outline Color", selectors: outlineColor},
  //     {section: "Outline Style", selectors: outlineStyle},
  //     {section: "Outline Offset", selectors: outlineOffset}
];

const effectsProperties: TailwindSelectorGroupType[] = [
  //     {section: "Box Shadow", selectors: boxShadow},
  //     {section: "Text Shadow", selectors: textShadow},
  //     {section: "Opacity", selectors: opacity},
  //     {section: "Mix Blend Mode", selectors: mixBlendMode},
  //     {section: "Background Blend Mode", selectors: backgroundBlendMode},
  //     {section: "Mask Clip", selectors: maskClip},
  //     {section: "Mask Composite", selectors: maskComposite},
  //     {section: "Mask Image", selectors: maskImage},
  //     {section: "Mask Mode", selectors: maskMode},
  //     {section: "Mask Origin", selectors: maskOrigin},
  //     {section: "Mask Position", selectors: maskPosition},
  //     {section: "Mask Repeat", selectors: maskRepeat},
  //     {section: "Mask Size", selectors: maskSize},
  //     {section: "Mask Type", selectors: maskType}
];

const filterProperties: TailwindSelectorGroupType[] = [
  //     {section: "Filter", selectors: filter},
  //     {section: "Blur", selectors: blur},
  //     {section: "Brightness", selectors: brightness},
  //     {section: "Contrast", selectors: contrast},
  //     {section: "Drop Shadow", selectors: dropShadow},
  //     {section: "Grayscale", selectors: grayscale},
  //     {section: "Hue Rotate", selectors: hueRotate},
  //     {section: "Invert", selectors: invert},
  //     {section: "Saturate", selectors: saturate},
  //     {section: "Sepia", selectors: sepia},
  //     {section: "Backdrop Filter", selectors: backdropFilter},
  //     {section: "Backdrop Blur", selectors: backdropBlur},
  //     {section: "Backdrop Brightness", selectors: backdropBrightness},
  //     {section: "Backdrop Contrast", selectors: backdropContrast},
  //     {section: "Backdrop Grayscale", selectors: backdropGrayscale},
  //     {section: "Backdrop Hue Rotate", selectors: backdropHueRotate},
  //     {section: "Backdrop Invert", selectors: backdropInvert},
  //     {section: "Backdrop Opacity", selectors: backdropOpacity},
  //     {section: "Backdrop Saturate", selectors: backdropSaturate},
  //     {section: "Backdrop Sepia", selectors: backdropSepia}
];

const tableProperties: TailwindSelectorGroupType[] = [
  //     {section: "Border Collapse", selectors: borderCollapse},
  //     {section: "Border Spacing", selectors: borderSpacing},
  //     {section: "Table Layout", selectors: tableLayout},
  //     {section: "Caption Side", selectors: captionSide}
];

const transitionAnimationProperties: TailwindSelectorGroupType[] = [
  //     {section: "Transition Property", selectors: transitionProperty},
  //     {section: "Transition Behavior", selectors: transitionBehavior},
  //     {section: "Transition Duration", selectors: transitionDuration},
  //     {section: "Transition Timing Function", selectors: transitionTimingFunction},
  //     {section: "Transition Delay", selectors: transitionDelay},
  //     {section: "Animation", selectors: animation}
];

const transformProperties: TailwindSelectorGroupType[] = [
  //     {section: "Backface Visibility", selectors: backfaceVisibility},
  //     {section: "Perspective", selectors: perspective},
  //     {section: "Perspective Origin", selectors: perspectiveOrigin},
  //     {section: "Rotate", selectors: rotate},
  //     {section: "Scale", selectors: scale},
  //     {section: "Skew", selectors: skew},
  //     {section: "Transform", selectors: transform},
  //     {section: "Transform Origin", selectors: transformOrigin},
  //     {section: "Transform Style", selectors: transformStyle},
  //     {section: "Translate", selectors: translate}
];

const interactivityProperties: TailwindSelectorGroupType[] = [
  //     {section: "Accent Color", selectors: accentColor},
  //     {section: "Appearance", selectors: appearance},
  //     {section: "Caret Color", selectors: caretColor},
  //     {section: "Color Scheme", selectors: colorScheme},
  //     {section: "Cursor", selectors: cursor},
  //     {section: "Field Sizing", selectors: fieldSizing},
  //     {section: "Pointer Events", selectors: pointerEvents},
  //     {section: "Resize", selectors: resize},
  //     {section: "Scroll Behavior", selectors: scrollBehavior},
  //     {section: "Scroll Margin", selectors: scrollMargin},
  //     {section: "Scroll Padding", selectors: scrollPadding},
  //     {section: "Scroll Snap Align", selectors: scrollSnapAlign},
  //     {section: "Scroll Snap Stop", selectors: scrollSnapStop},
  //     {section: "Scroll Snap Type", selectors: scrollSnapType},
  //     {section: "Touch Action", selectors: touchAction},
  //     {section: "User Select", selectors: userSelect},
  //     {section: "Will Change", selectors: willChange}
];

const svgProperties: TailwindSelectorGroupType[] = [
  //     {section: "Fill", selectors: fill},
  //     {section: "Stroke", selectors: stroke},
  //     {section: "Stroke Width", selectors: strokeWidth}
];

const accessibilityProperties: TailwindSelectorGroupType[] = [
  //     {section: "Forced Color Adjust", selectors: forcedColorAdjust}
];

export const groupedSelectors: TailwindSelectorCategoryType[] = [
  { category: "Layout", groups: layoutSelectors },
  { category: "Flexbox & Grid", groups: flexboxGridSelectors },
  { category: "Spacing", groups: spacingProperties },
  { category: "Sizing", groups: sizingProperties },
  { category: "Typography", groups: typographyProperties },
  { category: "Backgrounds", groups: backgroundProperties },
  { category: "Borders", groups: borderProperties },
  { category: "Effects", groups: effectsProperties },
  { category: "Filters", groups: filterProperties },
  { category: "Tables", groups: tableProperties },
  {
    category: "Transitions & Animation",
    groups: transitionAnimationProperties,
  },
  { category: "Transforms", groups: transformProperties },
  { category: "Interactivity", groups: interactivityProperties },
  { category: "SVG", groups: svgProperties },
  { category: "Accessibility", groups: accessibilityProperties },
];
