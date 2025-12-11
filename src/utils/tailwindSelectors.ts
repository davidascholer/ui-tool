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

export const placeContent = [
  {
    label: "place-content-center",
    value: "place-content-center",
    styles: "place-content: center;",
    description: "Centers content both horizontally and vertically",
  },
  {
    label: "place-content-start",
    value: "place-content-start",
    styles: "place-content: start;",
    description: "Aligns content to the start in both dimensions",
  },
  {
    label: "place-content-end",
    value: "place-content-end",
    styles: "place-content: end;",
    description: "Aligns content to the end in both dimensions",
  },
  {
    label: "place-content-between",
    value: "place-content-between",
    styles: "place-content: space-between;",
    description: "Distributes content with space between in both dimensions",
  },
  {
    label: "place-content-around",
    value: "place-content-around",
    styles: "place-content: space-around;",
    description: "Distributes content with space around in both dimensions",
  },
  {
    label: "place-content-evenly",
    value: "place-content-evenly",
    styles: "place-content: space-evenly;",
    description: "Distributes content evenly in both dimensions",
  },
  {
    label: "place-content-baseline",
    value: "place-content-baseline",
    styles: "place-content: baseline;",
    description: "Aligns content along baseline in both dimensions",
  },
  {
    label: "place-content-stretch",
    value: "place-content-stretch",
    styles: "place-content: stretch;",
    description: "Stretches content in both dimensions",
  },
];

export const placeItems = [
  {
    label: "place-items-start",
    value: "place-items-start",
    styles: "place-items: start;",
    description: "Aligns items to the start in both dimensions",
  },
  {
    label: "place-items-end",
    value: "place-items-end",
    styles: "place-items: end;",
    description: "Aligns items to the end in both dimensions",
  },
  {
    label: "place-items-center",
    value: "place-items-center",
    styles: "place-items: center;",
    description: "Centers items in both dimensions",
  },
  {
    label: "place-items-baseline",
    value: "place-items-baseline",
    styles: "place-items: baseline;",
    description: "Aligns items along baseline in both dimensions",
  },
  {
    label: "place-items-stretch",
    value: "place-items-stretch",
    styles: "place-items: stretch;",
    description: "Stretches items in both dimensions",
  },
];

export const placeSelf = [
  {
    label: "place-self-auto",
    value: "place-self-auto",
    styles: "place-self: auto;",
    description: "Uses the value from place-items",
  },
  {
    label: "place-self-start",
    value: "place-self-start",
    styles: "place-self: start;",
    description: "Aligns an item to the start in both dimensions",
  },
  {
    label: "place-self-end",
    value: "place-self-end",
    styles: "place-self: end;",
    description: "Aligns an item to the end in both dimensions",
  },
  {
    label: "place-self-center",
    value: "place-self-center",
    styles: "place-self: center;",
    description: "Centers an item in both dimensions",
  },
  {
    label: "place-self-stretch",
    value: "place-self-stretch",
    styles: "place-self: stretch;",
    description: "Stretches an item in both dimensions",
  },
];

// SPACING
export const padding = [
  {
    label: "p-<number>",
    value: "p-<number>",
    styles: "padding: calc(var(--spacing) * <number>);",
    description: "Sets padding on all sides using the spacing scale",
  },
  {
    label: "p-px",
    value: "p-px",
    styles: "padding: 1px;",
    description: "Sets 1px padding on all sides",
  },
  {
    label: "px-<number>",
    value: "px-<number>",
    styles: "padding-inline: calc(var(--spacing) * <number>);",
    description: "Sets horizontal padding (left and right)",
  },
  {
    label: "py-<number>",
    value: "py-<number>",
    styles: "padding-block: calc(var(--spacing) * <number>);",
    description: "Sets vertical padding (top and bottom)",
  },
  {
    label: "pt-<number>",
    value: "pt-<number>",
    styles: "padding-top: calc(var(--spacing) * <number>);",
    description: "Sets top padding",
  },
  {
    label: "pr-<number>",
    value: "pr-<number>",
    styles: "padding-right: calc(var(--spacing) * <number>);",
    description: "Sets right padding",
  },
  {
    label: "pb-<number>",
    value: "pb-<number>",
    styles: "padding-bottom: calc(var(--spacing) * <number>);",
    description: "Sets bottom padding",
  },
  {
    label: "pl-<number>",
    value: "pl-<number>",
    styles: "padding-left: calc(var(--spacing) * <number>);",
    description: "Sets left padding",
  },
  {
    label: "ps-<number>",
    value: "ps-<number>",
    styles: "padding-inline-start: calc(var(--spacing) * <number>);",
    description: "Sets padding at the inline start (left in LTR, right in RTL)",
  },
  {
    label: "pe-<number>",
    value: "pe-<number>",
    styles: "padding-inline-end: calc(var(--spacing) * <number>);",
    description: "Sets padding at the inline end (right in LTR, left in RTL)",
  },
  {
    label: "p-[<value>]",
    value: "p-[<value>]",
    styles: "padding: <value>;",
    description: "Sets arbitrary padding value",
  },
];

export const margin = [
  {
    label: "m-<number>",
    value: "m-<number>",
    styles: "margin: calc(var(--spacing) * <number>);",
    description: "Sets margin on all sides",
  },
  {
    label: "m-auto",
    value: "m-auto",
    styles: "margin: auto;",
    description: "Sets automatic margin on all sides",
  },
  {
    label: "mx-<number>",
    value: "mx-<number>",
    styles: "margin-inline: calc(var(--spacing) * <number>);",
    description: "Sets horizontal margin",
  },
  {
    label: "my-<number>",
    value: "my-<number>",
    styles: "margin-block: calc(var(--spacing) * <number>);",
    description: "Sets vertical margin",
  },
  {
    label: "mt-<number>",
    value: "mt-<number>",
    styles: "margin-top: calc(var(--spacing) * <number>);",
    description: "Sets top margin",
  },
  {
    label: "mr-<number>",
    value: "mr-<number>",
    styles: "margin-right: calc(var(--spacing) * <number>);",
    description: "Sets right margin",
  },
  {
    label: "mb-<number>",
    value: "mb-<number>",
    styles: "margin-bottom: calc(var(--spacing) * <number>);",
    description: "Sets bottom margin",
  },
  {
    label: "ml-<number>",
    value: "ml-<number>",
    styles: "margin-left: calc(var(--spacing) * <number>);",
    description: "Sets left margin",
  },
  {
    label: "ms-<number>",
    value: "ms-<number>",
    styles: "margin-inline-start: calc(var(--spacing) * <number>);",
    description: "Sets margin at inline start",
  },
  {
    label: "me-<number>",
    value: "me-<number>",
    styles: "margin-inline-end: calc(var(--spacing) * <number>);",
    description: "Sets margin at inline end",
  },
  {
    label: "-m-<number>",
    value: "-m-<number>",
    styles: "margin: calc(var(--spacing) * -<number>);",
    description: "Sets negative margin on all sides",
  },
  {
    label: "m-[<value>]",
    value: "m-[<value>]",
    styles: "margin: <value>;",
    description: "Sets arbitrary margin value",
  },
];

// SIZING
export const width = [
  {
    label: "w-<number>",
    value: "w-<number>",
    styles: "width: calc(var(--spacing) * <number>);",
    description: "Sets width using spacing scale",
  },
  {
    label: "w-<fraction>",
    value: "w-<fraction>",
    styles: "width: calc(<fraction> * 100%);",
    description: "Sets width as percentage (e.g., w-1/2, w-2/3)",
  },
  {
    label: "w-full",
    value: "w-full",
    styles: "width: 100%;",
    description: "Sets width to 100%",
  },
  {
    label: "w-screen",
    value: "w-screen",
    styles: "width: 100vw;",
    description: "Sets width to viewport width",
  },
  {
    label: "w-svw",
    value: "w-svw",
    styles: "width: 100svw;",
    description: "Sets width to small viewport width",
  },
  {
    label: "w-lvw",
    value: "w-lvw",
    styles: "width: 100lvw;",
    description: "Sets width to large viewport width",
  },
  {
    label: "w-dvw",
    value: "w-dvw",
    styles: "width: 100dvw;",
    description: "Sets width to dynamic viewport width",
  },
  {
    label: "w-min",
    value: "w-min",
    styles: "width: min-content;",
    description: "Sets width to minimum content size",
  },
  {
    label: "w-max",
    value: "w-max",
    styles: "width: max-content;",
    description: "Sets width to maximum content size",
  },
  {
    label: "w-fit",
    value: "w-fit",
    styles: "width: fit-content;",
    description: "Sets width to fit content",
  },
  {
    label: "w-auto",
    value: "w-auto",
    styles: "width: auto;",
    description: "Sets automatic width",
  },
  {
    label: "w-[<value>]",
    value: "w-[<value>]",
    styles: "width: <value>;",
    description: "Sets arbitrary width value",
  },
];

export const minWidth = [
  {
    label: "min-w-<number>",
    value: "min-w-<number>",
    styles: "min-width: calc(var(--spacing) * <number>);",
    description: "Sets minimum width",
  },
  {
    label: "min-w-full",
    value: "min-w-full",
    styles: "min-width: 100%;",
    description: "Sets minimum width to 100%",
  },
  {
    label: "min-w-min",
    value: "min-w-min",
    styles: "min-width: min-content;",
    description: "Sets minimum width to minimum content",
  },
  {
    label: "min-w-max",
    value: "min-w-max",
    styles: "min-width: max-content;",
    description: "Sets minimum width to maximum content",
  },
  {
    label: "min-w-fit",
    value: "min-w-fit",
    styles: "min-width: fit-content;",
    description: "Sets minimum width to fit content",
  },
  {
    label: "min-w-[<value>]",
    value: "min-w-[<value>]",
    styles: "min-width: <value>;",
    description: "Sets arbitrary minimum width",
  },
];

export const maxWidth = [
  {
    label: "max-w-<number>",
    value: "max-w-<number>",
    styles: "max-width: calc(var(--spacing) * <number>);",
    description: "Sets maximum width",
  },
  {
    label: "max-w-none",
    value: "max-w-none",
    styles: "max-width: none;",
    description: "Removes maximum width constraint",
  },
  {
    label: "max-w-xs",
    value: "max-w-xs",
    styles: "max-width: 20rem;",
    description: "Sets max width to 20rem",
  },
  {
    label: "max-w-sm",
    value: "max-w-sm",
    styles: "max-width: 24rem;",
    description: "Sets max width to 24rem",
  },
  {
    label: "max-w-md",
    value: "max-w-md",
    styles: "max-width: 28rem;",
    description: "Sets max width to 28rem",
  },
  {
    label: "max-w-lg",
    value: "max-w-lg",
    styles: "max-width: 32rem;",
    description: "Sets max width to 32rem",
  },
  {
    label: "max-w-xl",
    value: "max-w-xl",
    styles: "max-width: 36rem;",
    description: "Sets max width to 36rem",
  },
  {
    label: "max-w-full",
    value: "max-w-full",
    styles: "max-width: 100%;",
    description: "Sets maximum width to 100%",
  },
  {
    label: "max-w-min",
    value: "max-w-min",
    styles: "max-width: min-content;",
    description: "Sets maximum width to minimum content",
  },
  {
    label: "max-w-max",
    value: "max-w-max",
    styles: "max-width: max-content;",
    description: "Sets maximum width to maximum content",
  },
  {
    label: "max-w-fit",
    value: "max-w-fit",
    styles: "max-width: fit-content;",
    description: "Sets maximum width to fit content",
  },
  {
    label: "max-w-[<value>]",
    value: "max-w-[<value>]",
    styles: "max-width: <value>;",
    description: "Sets arbitrary maximum width",
  },
];

export const height = [
  {
    label: "h-<number>",
    value: "h-<number>",
    styles: "height: calc(var(--spacing) * <number>);",
    description: "Sets height using spacing scale",
  },
  {
    label: "h-<fraction>",
    value: "h-<fraction>",
    styles: "height: calc(<fraction> * 100%);",
    description: "Sets height as percentage",
  },
  {
    label: "h-full",
    value: "h-full",
    styles: "height: 100%;",
    description: "Sets height to 100%",
  },
  {
    label: "h-screen",
    value: "h-screen",
    styles: "height: 100vh;",
    description: "Sets height to viewport height",
  },
  {
    label: "h-svh",
    value: "h-svh",
    styles: "height: 100svh;",
    description: "Sets height to small viewport height",
  },
  {
    label: "h-lvh",
    value: "h-lvh",
    styles: "height: 100lvh;",
    description: "Sets height to large viewport height",
  },
  {
    label: "h-dvh",
    value: "h-dvh",
    styles: "height: 100dvh;",
    description: "Sets height to dynamic viewport height",
  },
  {
    label: "h-min",
    value: "h-min",
    styles: "height: min-content;",
    description: "Sets height to minimum content",
  },
  {
    label: "h-max",
    value: "h-max",
    styles: "height: max-content;",
    description: "Sets height to maximum content",
  },
  {
    label: "h-fit",
    value: "h-fit",
    styles: "height: fit-content;",
    description: "Sets height to fit content",
  },
  {
    label: "h-auto",
    value: "h-auto",
    styles: "height: auto;",
    description: "Sets automatic height",
  },
  {
    label: "h-[<value>]",
    value: "h-[<value>]",
    styles: "height: <value>;",
    description: "Sets arbitrary height value",
  },
];

export const minHeight = [
  {
    label: "min-h-<number>",
    value: "min-h-<number>",
    styles: "min-height: calc(var(--spacing) * <number>);",
    description: "Sets minimum height",
  },
  {
    label: "min-h-full",
    value: "min-h-full",
    styles: "min-height: 100%;",
    description: "Sets minimum height to 100%",
  },
  {
    label: "min-h-screen",
    value: "min-h-screen",
    styles: "min-height: 100vh;",
    description: "Sets minimum height to viewport height",
  },
  {
    label: "min-h-min",
    value: "min-h-min",
    styles: "min-height: min-content;",
    description: "Sets minimum height to minimum content",
  },
  {
    label: "min-h-max",
    value: "min-h-max",
    styles: "min-height: max-content;",
    description: "Sets minimum height to maximum content",
  },
  {
    label: "min-h-fit",
    value: "min-h-fit",
    styles: "min-height: fit-content;",
    description: "Sets minimum height to fit content",
  },
  {
    label: "min-h-[<value>]",
    value: "min-h-[<value>]",
    styles: "min-height: <value>;",
    description: "Sets arbitrary minimum height",
  },
];

export const maxHeight = [
  {
    label: "max-h-<number>",
    value: "max-h-<number>",
    styles: "max-height: calc(var(--spacing) * <number>);",
    description: "Sets maximum height",
  },
  {
    label: "max-h-none",
    value: "max-h-none",
    styles: "max-height: none;",
    description: "Removes maximum height constraint",
  },
  {
    label: "max-h-full",
    value: "max-h-full",
    styles: "max-height: 100%;",
    description: "Sets maximum height to 100%",
  },
  {
    label: "max-h-screen",
    value: "max-h-screen",
    styles: "max-height: 100vh;",
    description: "Sets maximum height to viewport height",
  },
  {
    label: "max-h-min",
    value: "max-h-min",
    styles: "max-height: min-content;",
    description: "Sets maximum height to minimum content",
  },
  {
    label: "max-h-max",
    value: "max-h-max",
    styles: "max-height: max-content;",
    description: "Sets maximum height to maximum content",
  },
  {
    label: "max-h-fit",
    value: "max-h-fit",
    styles: "max-height: fit-content;",
    description: "Sets maximum height to fit content",
  },
  {
    label: "max-h-[<value>]",
    value: "max-h-[<value>]",
    styles: "max-height: <value>;",
    description: "Sets arbitrary maximum height",
  },
];

// TYPOGRAPHY
export const fontFamily = [
  {
    label: "font-sans",
    value: "font-sans",
    styles: "font-family: var(--font-sans);",
    description:
      "Applies sans-serif font stack (ui-sans-serif, system-ui, sans-serif)",
  },
  {
    label: "font-serif",
    value: "font-serif",
    styles: "font-family: var(--font-serif);",
    description:
      "Applies serif font stack (ui-serif, Georgia, Cambria, Times New Roman)",
  },
  {
    label: "font-mono",
    value: "font-mono",
    styles: "font-family: var(--font-mono);",
    description:
      "Applies monospace font stack (ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas)",
  },
  {
    label: "font-(family-name:<custom-property>)",
    value: "font-(family-name:<custom-property>)",
    styles: "font-family: var(<custom-property>);",
    description: "Uses a CSS custom property for font family",
  },
  {
    label: "font-[<value>]",
    value: "font-[<value>]",
    styles: "font-family: <value>;",
    description: "Sets arbitrary font family",
  },
];

export const fontSize = [
  {
    label: "text-xs",
    value: "text-xs",
    styles: "font-size: var(--text-xs); /* 0.75rem */",
    description: "Sets extra small font size (12px)",
  },
  {
    label: "text-sm",
    value: "text-sm",
    styles: "font-size: var(--text-sm); /* 0.875rem */",
    description: "Sets small font size (14px)",
  },
  {
    label: "text-base",
    value: "text-base",
    styles: "font-size: var(--text-base); /* 1rem */",
    description: "Sets base font size (16px)",
  },
  {
    label: "text-lg",
    value: "text-lg",
    styles: "font-size: var(--text-lg); /* 1.125rem */",
    description: "Sets large font size (18px)",
  },
  {
    label: "text-xl",
    value: "text-xl",
    styles: "font-size: var(--text-xl); /* 1.25rem */",
    description: "Sets extra large font size (20px)",
  },
  {
    label: "text-2xl",
    value: "text-2xl",
    styles: "font-size: var(--text-2xl); /* 1.5rem */",
    description: "Sets 2x large font size (24px)",
  },
  {
    label: "text-3xl",
    value: "text-3xl",
    styles: "font-size: var(--text-3xl); /* 1.875rem */",
    description: "Sets 3x large font size (30px)",
  },
  {
    label: "text-4xl",
    value: "text-4xl",
    styles: "font-size: var(--text-4xl); /* 2.25rem */",
    description: "Sets 4x large font size (36px)",
  },
  {
    label: "text-5xl",
    value: "text-5xl",
    styles: "font-size: var(--text-5xl); /* 3rem */",
    description: "Sets 5x large font size (48px)",
  },
  {
    label: "text-6xl",
    value: "text-6xl",
    styles: "font-size: var(--text-6xl); /* 3.75rem */",
    description: "Sets 6x large font size (60px)",
  },
  {
    label: "text-7xl",
    value: "text-7xl",
    styles: "font-size: var(--text-7xl); /* 4.5rem */",
    description: "Sets 7x large font size (72px)",
  },
  {
    label: "text-8xl",
    value: "text-8xl",
    styles: "font-size: var(--text-8xl); /* 6rem */",
    description: "Sets 8x large font size (96px)",
  },
  {
    label: "text-9xl",
    value: "text-9xl",
    styles: "font-size: var(--text-9xl); /* 8rem */",
    description: "Sets 9x large font size (128px)",
  },
  {
    label: "text-[<value>]",
    value: "text-[<value>]",
    styles: "font-size: <value>;",
    description: "Sets arbitrary font size",
  },
];

export const fontSmoothing = [
  {
    label: "antialiased",
    value: "antialiased",
    styles:
      "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
    description: "Enables font antialiasing for smoother text rendering",
  },
  {
    label: "subpixel-antialiased",
    value: "subpixel-antialiased",
    styles: "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
    description: "Uses subpixel antialiasing (browser default)",
  },
];

export const fontStyle = [
  {
    label: "italic",
    value: "italic",
    styles: "font-style: italic;",
    description: "Makes text italic",
  },
  {
    label: "not-italic",
    value: "not-italic",
    styles: "font-style: normal;",
    description: "Removes italic styling",
  },
];

export const fontWeight = [
  {
    label: "font-thin",
    value: "font-thin",
    styles: "font-weight: 100;",
    description: "Sets thin font weight",
  },
  {
    label: "font-extralight",
    value: "font-extralight",
    styles: "font-weight: 200;",
    description: "Sets extra light font weight",
  },
  {
    label: "font-light",
    value: "font-light",
    styles: "font-weight: 300;",
    description: "Sets light font weight",
  },
  {
    label: "font-normal",
    value: "font-normal",
    styles: "font-weight: 400;",
    description: "Sets normal font weight",
  },
  {
    label: "font-medium",
    value: "font-medium",
    styles: "font-weight: 500;",
    description: "Sets medium font weight",
  },
  {
    label: "font-semibold",
    value: "font-semibold",
    styles: "font-weight: 600;",
    description: "Sets semibold font weight",
  },
  {
    label: "font-bold",
    value: "font-bold",
    styles: "font-weight: 700;",
    description: "Sets bold font weight",
  },
  {
    label: "font-extrabold",
    value: "font-extrabold",
    styles: "font-weight: 800;",
    description: "Sets extra bold font weight",
  },
  {
    label: "font-black",
    value: "font-black",
    styles: "font-weight: 900;",
    description: "Sets black font weight (heaviest)",
  },
  {
    label: "font-[<value>]",
    value: "font-[<value>]",
    styles: "font-weight: <value>;",
    description: "Sets arbitrary font weight",
  },
];

export const fontStretch = [
  {
    label: "font-stretch-ultra-condensed",
    value: "font-stretch-ultra-condensed",
    styles: "font-stretch: ultra-condensed;",
    description: "Sets ultra condensed font width",
  },
  {
    label: "font-stretch-extra-condensed",
    value: "font-stretch-extra-condensed",
    styles: "font-stretch: extra-condensed;",
    description: "Sets extra condensed font width",
  },
  {
    label: "font-stretch-condensed",
    value: "font-stretch-condensed",
    styles: "font-stretch: condensed;",
    description: "Sets condensed font width",
  },
  {
    label: "font-stretch-semi-condensed",
    value: "font-stretch-semi-condensed",
    styles: "font-stretch: semi-condensed;",
    description: "Sets semi condensed font width",
  },
  {
    label: "font-stretch-normal",
    value: "font-stretch-normal",
    styles: "font-stretch: normal;",
    description: "Sets normal font width",
  },
  {
    label: "font-stretch-semi-expanded",
    value: "font-stretch-semi-expanded",
    styles: "font-stretch: semi-expanded;",
    description: "Sets semi expanded font width",
  },
  {
    label: "font-stretch-expanded",
    value: "font-stretch-expanded",
    styles: "font-stretch: expanded;",
    description: "Sets expanded font width",
  },
  {
    label: "font-stretch-extra-expanded",
    value: "font-stretch-extra-expanded",
    styles: "font-stretch: extra-expanded;",
    description: "Sets extra expanded font width",
  },
  {
    label: "font-stretch-ultra-expanded",
    value: "font-stretch-ultra-expanded",
    styles: "font-stretch: ultra-expanded;",
    description: "Sets ultra expanded font width",
  },
];

export const fontVariantNumeric = [
  {
    label: "normal-nums",
    value: "normal-nums",
    styles: "font-variant-numeric: normal;",
    description: "Resets numeric variants to default",
  },
  {
    label: "ordinal",
    value: "ordinal",
    styles: "font-variant-numeric: ordinal;",
    description: "Enables ordinal numeric forms (1st, 2nd, 3rd)",
  },
  {
    label: "slashed-zero",
    value: "slashed-zero",
    styles: "font-variant-numeric: slashed-zero;",
    description: "Uses slashed zero glyph",
  },
  {
    label: "lining-nums",
    value: "lining-nums",
    styles: "font-variant-numeric: lining-nums;",
    description: "Uses lining numerals (aligned by baseline)",
  },
  {
    label: "oldstyle-nums",
    value: "oldstyle-nums",
    styles: "font-variant-numeric: oldstyle-nums;",
    description: "Uses old-style numerals (some have descenders)",
  },
  {
    label: "proportional-nums",
    value: "proportional-nums",
    styles: "font-variant-numeric: proportional-nums;",
    description: "Uses proportional-width numerals",
  },
  {
    label: "tabular-nums",
    value: "tabular-nums",
    styles: "font-variant-numeric: tabular-nums;",
    description: "Uses tabular-width numerals (uniform width)",
  },
  {
    label: "diagonal-fractions",
    value: "diagonal-fractions",
    styles: "font-variant-numeric: diagonal-fractions;",
    description: "Uses diagonal fractions (1/2 becomes ½)",
  },
  {
    label: "stacked-fractions",
    value: "stacked-fractions",
    styles: "font-variant-numeric: stacked-fractions;",
    description: "Uses stacked fractions",
  },
];

export const letterSpacing = [
  {
    label: "tracking-tighter",
    value: "tracking-tighter",
    styles: "letter-spacing: -0.05em;",
    description: "Sets tighter letter spacing",
  },
  {
    label: "tracking-tight",
    value: "tracking-tight",
    styles: "letter-spacing: -0.025em;",
    description: "Sets tight letter spacing",
  },
  {
    label: "tracking-normal",
    value: "tracking-normal",
    styles: "letter-spacing: 0em;",
    description: "Sets normal letter spacing",
  },
  {
    label: "tracking-wide",
    value: "tracking-wide",
    styles: "letter-spacing: 0.025em;",
    description: "Sets wide letter spacing",
  },
  {
    label: "tracking-wider",
    value: "tracking-wider",
    styles: "letter-spacing: 0.05em;",
    description: "Sets wider letter spacing",
  },
  {
    label: "tracking-widest",
    value: "tracking-widest",
    styles: "letter-spacing: 0.1em;",
    description: "Sets widest letter spacing",
  },
  {
    label: "tracking-[<value>]",
    value: "tracking-[<value>]",
    styles: "letter-spacing: <value>;",
    description: "Sets arbitrary letter spacing",
  },
];

export const lineClamp = [
  {
    label: "line-clamp-<number>",
    value: "line-clamp-<number>",
    styles:
      "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <number>;",
    description: "Limits text to specified number of lines with ellipsis",
  },
  {
    label: "line-clamp-none",
    value: "line-clamp-none",
    styles:
      "overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;",
    description: "Removes line clamp",
  },
  {
    label: "line-clamp-[<value>]",
    value: "line-clamp-[<value>]",
    styles: "-webkit-line-clamp: <value>;",
    description: "Sets arbitrary line clamp value",
  },
];

export const lineHeight = [
  {
    label: "leading-<number>",
    value: "leading-<number>",
    styles: "line-height: calc(var(--spacing) * <number>);",
    description: "Sets line height using spacing scale",
  },
  {
    label: "leading-none",
    value: "leading-none",
    styles: "line-height: 1;",
    description: "Sets line height to 1 (no extra space)",
  },
  {
    label: "leading-tight",
    value: "leading-tight",
    styles: "line-height: 1.25;",
    description: "Sets tight line height (125%)",
  },
  {
    label: "leading-snug",
    value: "leading-snug",
    styles: "line-height: 1.375;",
    description: "Sets snug line height (137.5%)",
  },
  {
    label: "leading-normal",
    value: "leading-normal",
    styles: "line-height: 1.5;",
    description: "Sets normal line height (150%)",
  },
  {
    label: "leading-relaxed",
    value: "leading-relaxed",
    styles: "line-height: 1.625;",
    description: "Sets relaxed line height (162.5%)",
  },
  {
    label: "leading-loose",
    value: "leading-loose",
    styles: "line-height: 2;",
    description: "Sets loose line height (200%)",
  },
  {
    label: "leading-[<value>]",
    value: "leading-[<value>]",
    styles: "line-height: <value>;",
    description: "Sets arbitrary line height",
  },
];

export const listStyleImage = [
  {
    label: "list-image-none",
    value: "list-image-none",
    styles: "list-style-image: none;",
    description: "Removes list item image",
  },
  {
    label: "list-image-[<value>]",
    value: "list-image-[<value>]",
    styles: "list-style-image: <value>;",
    description: "Sets arbitrary list item image",
  },
];

export const listStylePosition = [
  {
    label: "list-inside",
    value: "list-inside",
    styles: "list-style-position: inside;",
    description: "Positions list marker inside the list item",
  },
  {
    label: "list-outside",
    value: "list-outside",
    styles: "list-style-position: outside;",
    description: "Positions list marker outside the list item (default)",
  },
];

export const listStyleType = [
  {
    label: "list-none",
    value: "list-none",
    styles: "list-style-type: none;",
    description: "Removes list markers",
  },
  {
    label: "list-disc",
    value: "list-disc",
    styles: "list-style-type: disc;",
    description: "Uses disc markers (•)",
  },
  {
    label: "list-decimal",
    value: "list-decimal",
    styles: "list-style-type: decimal;",
    description: "Uses decimal numbers (1, 2, 3)",
  },
  {
    label: "list-[<value>]",
    value: "list-[<value>]",
    styles: "list-style-type: <value>;",
    description: "Sets arbitrary list style type",
  },
];

export const textAlign = [
  {
    label: "text-left",
    value: "text-left",
    styles: "text-align: left;",
    description: "Aligns text to the left",
  },
  {
    label: "text-center",
    value: "text-center",
    styles: "text-align: center;",
    description: "Centers text horizontally",
  },
  {
    label: "text-right",
    value: "text-right",
    styles: "text-align: right;",
    description: "Aligns text to the right",
  },
  {
    label: "text-justify",
    value: "text-justify",
    styles: "text-align: justify;",
    description: "Justifies text (adjusts spacing)",
  },
  {
    label: "text-start",
    value: "text-start",
    styles: "text-align: start;",
    description: "Aligns text to the start (left in LTR, right in RTL)",
  },
  {
    label: "text-end",
    value: "text-end",
    styles: "text-align: end;",
    description: "Aligns text to the end (right in LTR, left in RTL)",
  },
];

export const textColor = [
  {
    label: "text-<color>",
    value: "text-<color>",
    styles: "color: var(--color-<color>);",
    description: "Sets text color from theme palette",
  },
  {
    label: "text-inherit",
    value: "text-inherit",
    styles: "color: inherit;",
    description: "Inherits text color from parent",
  },
  {
    label: "text-current",
    value: "text-current",
    styles: "color: currentColor;",
    description: "Sets text color to currentColor",
  },
  {
    label: "text-transparent",
    value: "text-transparent",
    styles: "color: transparent;",
    description: "Makes text transparent",
  },
  {
    label: "text-[<value>]",
    value: "text-[<value>]",
    styles: "color: <value>;",
    description: "Sets arbitrary text color",
  },
];

export const textDecorationLine = [
  {
    label: "underline",
    value: "underline",
    styles: "text-decoration-line: underline;",
    description: "Underlines text",
  },
  {
    label: "overline",
    value: "overline",
    styles: "text-decoration-line: overline;",
    description: "Adds overline to text",
  },
  {
    label: "line-through",
    value: "line-through",
    styles: "text-decoration-line: line-through;",
    description: "Strikes through text",
  },
  {
    label: "no-underline",
    value: "no-underline",
    styles: "text-decoration-line: none;",
    description: "Removes text decoration",
  },
];

export const textDecorationColor = [
  {
    label: "decoration-<color>",
    value: "decoration-<color>",
    styles: "text-decoration-color: var(--color-<color>);",
    description: "Sets text decoration color",
  },
  {
    label: "decoration-inherit",
    value: "decoration-inherit",
    styles: "text-decoration-color: inherit;",
    description: "Inherits decoration color",
  },
  {
    label: "decoration-current",
    value: "decoration-current",
    styles: "text-decoration-color: currentColor;",
    description: "Uses currentColor for decoration",
  },
  {
    label: "decoration-transparent",
    value: "decoration-transparent",
    styles: "text-decoration-color: transparent;",
    description: "Makes decoration transparent",
  },
  {
    label: "decoration-[<value>]",
    value: "decoration-[<value>]",
    styles: "text-decoration-color: <value>;",
    description: "Sets arbitrary decoration color",
  },
];

export const textDecorationStyle = [
  {
    label: "decoration-solid",
    value: "decoration-solid",
    styles: "text-decoration-style: solid;",
    description: "Sets solid text decoration",
  },
  {
    label: "decoration-double",
    value: "decoration-double",
    styles: "text-decoration-style: double;",
    description: "Sets double text decoration",
  },
  {
    label: "decoration-dotted",
    value: "decoration-dotted",
    styles: "text-decoration-style: dotted;",
    description: "Sets dotted text decoration",
  },
  {
    label: "decoration-dashed",
    value: "decoration-dashed",
    styles: "text-decoration-style: dashed;",
    description: "Sets dashed text decoration",
  },
  {
    label: "decoration-wavy",
    value: "decoration-wavy",
    styles: "text-decoration-style: wavy;",
    description: "Sets wavy text decoration",
  },
];

export const textDecorationThickness = [
  {
    label: "decoration-auto",
    value: "decoration-auto",
    styles: "text-decoration-thickness: auto;",
    description: "Uses automatic decoration thickness",
  },
  {
    label: "decoration-from-font",
    value: "decoration-from-font",
    styles: "text-decoration-thickness: from-font;",
    description: "Uses font's decoration thickness",
  },
  {
    label: "decoration-<number>",
    value: "decoration-<number>",
    styles: "text-decoration-thickness: <number>px;",
    description: "Sets decoration thickness in pixels",
  },
  {
    label: "decoration-[<value>]",
    value: "decoration-[<value>]",
    styles: "text-decoration-thickness: <value>;",
    description: "Sets arbitrary decoration thickness",
  },
];

export const textUnderlineOffset = [
  {
    label: "underline-offset-auto",
    value: "underline-offset-auto",
    styles: "text-underline-offset: auto;",
    description: "Uses automatic underline offset",
  },
  {
    label: "underline-offset-<number>",
    value: "underline-offset-<number>",
    styles: "text-underline-offset: <number>px;",
    description: "Sets underline offset in pixels",
  },
  {
    label: "underline-offset-[<value>]",
    value: "underline-offset-[<value>]",
    styles: "text-underline-offset: <value>;",
    description: "Sets arbitrary underline offset",
  },
];

export const textTransform = [
  {
    label: "uppercase",
    value: "uppercase",
    styles: "text-transform: uppercase;",
    description: "Transforms text to UPPERCASE",
  },
  {
    label: "lowercase",
    value: "lowercase",
    styles: "text-transform: lowercase;",
    description: "Transforms text to lowercase",
  },
  {
    label: "capitalize",
    value: "capitalize",
    styles: "text-transform: capitalize;",
    description: "Capitalizes First Letter Of Each Word",
  },
  {
    label: "normal-case",
    value: "normal-case",
    styles: "text-transform: none;",
    description: "Removes text transform",
  },
];

export const textOverflow = [
  {
    label: "truncate",
    value: "truncate",
    styles: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    description: "Truncates text with ellipsis (...)",
  },
  {
    label: "text-ellipsis",
    value: "text-ellipsis",
    styles: "text-overflow: ellipsis;",
    description: "Uses ellipsis for overflowing text",
  },
  {
    label: "text-clip",
    value: "text-clip",
    styles: "text-overflow: clip;",
    description: "Clips overflowing text",
  },
];

export const textWrap = [
  {
    label: "text-wrap",
    value: "text-wrap",
    styles: "text-wrap: wrap;",
    description: "Allows text to wrap",
  },
  {
    label: "text-nowrap",
    value: "text-nowrap",
    styles: "text-wrap: nowrap;",
    description: "Prevents text from wrapping",
  },
  {
    label: "text-balance",
    value: "text-balance",
    styles: "text-wrap: balance;",
    description: "Balances text wrapping across lines",
  },
  {
    label: "text-pretty",
    value: "text-pretty",
    styles: "text-wrap: pretty;",
    description: "Optimizes text wrapping for readability",
  },
];

export const textIndent = [
  {
    label: "indent-<number>",
    value: "indent-<number>",
    styles: "text-indent: calc(var(--spacing) * <number>);",
    description: "Indents first line of text",
  },
  {
    label: "indent-[<value>]",
    value: "indent-[<value>]",
    styles: "text-indent: <value>;",
    description: "Sets arbitrary text indent",
  },
];

export const verticalAlign = [
  {
    label: "align-baseline",
    value: "align-baseline",
    styles: "vertical-align: baseline;",
    description: "Aligns to baseline",
  },
  {
    label: "align-top",
    value: "align-top",
    styles: "vertical-align: top;",
    description: "Aligns to top of line box",
  },
  {
    label: "align-middle",
    value: "align-middle",
    styles: "vertical-align: middle;",
    description: "Aligns to middle of parent",
  },
  {
    label: "align-bottom",
    value: "align-bottom",
    styles: "vertical-align: bottom;",
    description: "Aligns to bottom of line box",
  },
  {
    label: "align-text-top",
    value: "align-text-top",
    styles: "vertical-align: text-top;",
    description: "Aligns to top of parent's font",
  },
  {
    label: "align-text-bottom",
    value: "align-text-bottom",
    styles: "vertical-align: text-bottom;",
    description: "Aligns to bottom of parent's font",
  },
  {
    label: "align-sub",
    value: "align-sub",
    styles: "vertical-align: sub;",
    description: "Aligns as subscript",
  },
  {
    label: "align-super",
    value: "align-super",
    styles: "vertical-align: super;",
    description: "Aligns as superscript",
  },
  {
    label: "align-[<value>]",
    value: "align-[<value>]",
    styles: "vertical-align: <value>;",
    description: "Sets arbitrary vertical alignment",
  },
];

export const whiteSpace = [
  {
    label: "whitespace-normal",
    value: "whitespace-normal",
    styles: "white-space: normal;",
    description: "Collapses whitespace and wraps text normally",
  },
  {
    label: "whitespace-nowrap",
    value: "whitespace-nowrap",
    styles: "white-space: nowrap;",
    description: "Prevents wrapping, collapses whitespace",
  },
  {
    label: "whitespace-pre",
    value: "whitespace-pre",
    styles: "white-space: pre;",
    description: "Preserves whitespace, prevents wrapping",
  },
  {
    label: "whitespace-pre-line",
    value: "whitespace-pre-line",
    styles: "white-space: pre-line;",
    description: "Preserves line breaks, wraps text",
  },
  {
    label: "whitespace-pre-wrap",
    value: "whitespace-pre-wrap",
    styles: "white-space: pre-wrap;",
    description: "Preserves whitespace, wraps text",
  },
  {
    label: "whitespace-break-spaces",
    value: "whitespace-break-spaces",
    styles: "white-space: break-spaces;",
    description: "Preserves whitespace, wraps text, breaks at spaces",
  },
];

export const wordBreak = [
  {
    label: "break-normal",
    value: "break-normal",
    styles: "overflow-wrap: normal; word-break: normal;",
    description: "Uses default line break behavior",
  },
  {
    label: "break-words",
    value: "break-words",
    styles: "overflow-wrap: break-word;",
    description: "Breaks words to prevent overflow",
  },
  {
    label: "break-all",
    value: "break-all",
    styles: "word-break: break-all;",
    description: "Breaks words at any character",
  },
  {
    label: "break-keep",
    value: "break-keep",
    styles: "word-break: keep-all;",
    description: "Prevents breaks in CJK text",
  },
];

export const overflowWrap = [
  {
    label: "wrap-normal",
    value: "wrap-normal",
    styles: "overflow-wrap: normal;",
    description: "Only breaks at natural break points",
  },
  {
    label: "wrap-break-word",
    value: "wrap-break-word",
    styles: "overflow-wrap: break-word;",
    description: "Breaks words if necessary",
  },
  {
    label: "wrap-anywhere",
    value: "wrap-anywhere",
    styles: "overflow-wrap: anywhere;",
    description: "Breaks text at any point if needed",
  },
];

export const hyphens = [
  {
    label: "hyphens-none",
    value: "hyphens-none",
    styles: "hyphens: none;",
    description: "Prevents hyphenation",
  },
  {
    label: "hyphens-manual",
    value: "hyphens-manual",
    styles: "hyphens: manual;",
    description: "Hyphenates only at manual break points",
  },
  {
    label: "hyphens-auto",
    value: "hyphens-auto",
    styles: "hyphens: auto;",
    description: "Automatically hyphenates text",
  },
];

export const content = [
  {
    label: "content-none",
    value: "content-none",
    styles: "content: none;",
    description: "Sets content to none",
  },
  {
    label: "content-[<value>]",
    value: "content-[<value>]",
    styles: "content: <value>;",
    description: "Sets arbitrary content value for pseudo-elements",
  },
];

// BACKGROUNDS
export const backgroundAttachment = [
  {
    label: "bg-fixed",
    value: "bg-fixed",
    styles: "background-attachment: fixed;",
    description: "Fixes background image relative to viewport",
  },
  {
    label: "bg-local",
    value: "bg-local",
    styles: "background-attachment: local;",
    description: "Scrolls background with element's content",
  },
  {
    label: "bg-scroll",
    value: "bg-scroll",
    styles: "background-attachment: scroll;",
    description: "Scrolls background with element itself (default)",
  },
];

export const backgroundClip = [
  {
    label: "bg-clip-border",
    value: "bg-clip-border",
    styles: "background-clip: border-box;",
    description: "Extends background to outer edge of border",
  },
  {
    label: "bg-clip-padding",
    value: "bg-clip-padding",
    styles: "background-clip: padding-box;",
    description: "Clips background to outer edge of padding",
  },
  {
    label: "bg-clip-content",
    value: "bg-clip-content",
    styles: "background-clip: content-box;",
    description: "Clips background to content box",
  },
  {
    label: "bg-clip-text",
    value: "bg-clip-text",
    styles: "background-clip: text;",
    description: "Clips background to text shape (use with text-transparent)",
  },
];

export const backgroundColor = [
  {
    label: "bg-<color>",
    value: "bg-<color>",
    styles: "background-color: var(--color-<color>);",
    description: "Sets background color from theme palette",
  },
  {
    label: "bg-inherit",
    value: "bg-inherit",
    styles: "background-color: inherit;",
    description: "Inherits background color from parent",
  },
  {
    label: "bg-current",
    value: "bg-current",
    styles: "background-color: currentColor;",
    description: "Sets background to currentColor",
  },
  {
    label: "bg-transparent",
    value: "bg-transparent",
    styles: "background-color: transparent;",
    description: "Makes background transparent",
  },
  {
    label: "bg-[<value>]",
    value: "bg-[<value>]",
    styles: "background-color: <value>;",
    description: "Sets arbitrary background color",
  },
];

export const backgroundImage = [
  {
    label: "bg-none",
    value: "bg-none",
    styles: "background-image: none;",
    description: "Removes background image",
  },
  {
    label: "bg-linear-to-t",
    value: "bg-linear-to-t",
    styles:
      "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
    description: "Creates linear gradient to top",
  },
  {
    label: "bg-linear-to-tr",
    value: "bg-linear-to-tr",
    styles:
      "background-image: linear-gradient(to top right, var(--tw-gradient-stops));",
    description: "Creates linear gradient to top right",
  },
  {
    label: "bg-linear-to-r",
    value: "bg-linear-to-r",
    styles:
      "background-image: linear-gradient(to right, var(--tw-gradient-stops));",
    description: "Creates linear gradient to right",
  },
  {
    label: "bg-linear-to-br",
    value: "bg-linear-to-br",
    styles:
      "background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));",
    description: "Creates linear gradient to bottom right",
  },
  {
    label: "bg-linear-to-b",
    value: "bg-linear-to-b",
    styles:
      "background-image: linear-gradient(to bottom, var(--tw-gradient-stops));",
    description: "Creates linear gradient to bottom",
  },
  {
    label: "bg-linear-to-bl",
    value: "bg-linear-to-bl",
    styles:
      "background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));",
    description: "Creates linear gradient to bottom left",
  },
  {
    label: "bg-linear-to-l",
    value: "bg-linear-to-l",
    styles:
      "background-image: linear-gradient(to left, var(--tw-gradient-stops));",
    description: "Creates linear gradient to left",
  },
  {
    label: "bg-linear-to-tl",
    value: "bg-linear-to-tl",
    styles:
      "background-image: linear-gradient(to top left, var(--tw-gradient-stops));",
    description: "Creates linear gradient to top left",
  },
  {
    label: "bg-linear-<angle>",
    value: "bg-linear-<angle>",
    styles:
      "background-image: linear-gradient(<angle>deg, var(--tw-gradient-stops));",
    description:
      "Creates linear gradient at specific angle (e.g., bg-linear-45)",
  },
  {
    label: "bg-radial",
    value: "bg-radial",
    styles: "background-image: radial-gradient(var(--tw-gradient-stops));",
    description: "Creates radial gradient from center",
  },
  {
    label: "bg-radial-[<position>]",
    value: "bg-radial-[<position>]",
    styles:
      "background-image: radial-gradient(<position>, var(--tw-gradient-stops));",
    description: "Creates radial gradient from specific position",
  },
  {
    label: "bg-conic",
    value: "bg-conic",
    styles: "background-image: conic-gradient(var(--tw-gradient-stops));",
    description: "Creates conic gradient from top",
  },
  {
    label: "bg-conic-<angle>",
    value: "bg-conic-<angle>",
    styles:
      "background-image: conic-gradient(from <angle>deg, var(--tw-gradient-stops));",
    description: "Creates conic gradient from specific angle",
  },
  {
    label: "from-<color>",
    value: "from-<color>",
    styles:
      "--tw-gradient-from: var(--color-<color>); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);",
    description: "Sets gradient start color",
  },
  {
    label: "from-<percentage>",
    value: "from-<percentage>",
    styles: "--tw-gradient-from-position: <percentage>%;",
    description: "Sets gradient start position",
  },
  {
    label: "via-<color>",
    value: "via-<color>",
    styles:
      "--tw-gradient-via: var(--color-<color>); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to);",
    description: "Sets gradient middle color",
  },
  {
    label: "via-<percentage>",
    value: "via-<percentage>",
    styles: "--tw-gradient-via-position: <percentage>%;",
    description: "Sets gradient middle position",
  },
  {
    label: "to-<color>",
    value: "to-<color>",
    styles: "--tw-gradient-to: var(--color-<color>);",
    description: "Sets gradient end color",
  },
  {
    label: "to-<percentage>",
    value: "to-<percentage>",
    styles: "--tw-gradient-to-position: <percentage>%;",
    description: "Sets gradient end position",
  },
  {
    label: "bg-[<value>]",
    value: "bg-[<value>]",
    styles: "background-image: <value>;",
    description: "Sets arbitrary background image",
  },
];

export const backgroundOrigin = [
  {
    label: "bg-origin-border",
    value: "bg-origin-border",
    styles: "background-origin: border-box;",
    description: "Positions background relative to border box",
  },
  {
    label: "bg-origin-padding",
    value: "bg-origin-padding",
    styles: "background-origin: padding-box;",
    description: "Positions background relative to padding box",
  },
  {
    label: "bg-origin-content",
    value: "bg-origin-content",
    styles: "background-origin: content-box;",
    description: "Positions background relative to content box",
  },
];

export const backgroundPosition = [
  {
    label: "bg-bottom",
    value: "bg-bottom",
    styles: "background-position: bottom;",
    description: "Positions background at bottom",
  },
  {
    label: "bg-center",
    value: "bg-center",
    styles: "background-position: center;",
    description: "Centers background image",
  },
  {
    label: "bg-left",
    value: "bg-left",
    styles: "background-position: left;",
    description: "Positions background at left",
  },
  {
    label: "bg-left-bottom",
    value: "bg-left-bottom",
    styles: "background-position: left bottom;",
    description: "Positions background at left bottom",
  },
  {
    label: "bg-left-top",
    value: "bg-left-top",
    styles: "background-position: left top;",
    description: "Positions background at left top",
  },
  {
    label: "bg-right",
    value: "bg-right",
    styles: "background-position: right;",
    description: "Positions background at right",
  },
  {
    label: "bg-right-bottom",
    value: "bg-right-bottom",
    styles: "background-position: right bottom;",
    description: "Positions background at right bottom",
  },
  {
    label: "bg-right-top",
    value: "bg-right-top",
    styles: "background-position: right top;",
    description: "Positions background at right top",
  },
  {
    label: "bg-top",
    value: "bg-top",
    styles: "background-position: top;",
    description: "Positions background at top",
  },
  {
    label: "bg-[<value>]",
    value: "bg-[<value>]",
    styles: "background-position: <value>;",
    description: "Sets arbitrary background position",
  },
];

export const backgroundRepeat = [
  {
    label: "bg-repeat",
    value: "bg-repeat",
    styles: "background-repeat: repeat;",
    description: "Repeats background in both directions",
  },
  {
    label: "bg-no-repeat",
    value: "bg-no-repeat",
    styles: "background-repeat: no-repeat;",
    description: "Prevents background from repeating",
  },
  {
    label: "bg-repeat-x",
    value: "bg-repeat-x",
    styles: "background-repeat: repeat-x;",
    description: "Repeats background horizontally only",
  },
  {
    label: "bg-repeat-y",
    value: "bg-repeat-y",
    styles: "background-repeat: repeat-y;",
    description: "Repeats background vertically only",
  },
  {
    label: "bg-repeat-round",
    value: "bg-repeat-round",
    styles: "background-repeat: round;",
    description: "Repeats and stretches background to avoid clipping",
  },
  {
    label: "bg-repeat-space",
    value: "bg-repeat-space",
    styles: "background-repeat: space;",
    description: "Repeats background with spacing to avoid clipping",
  },
];

export const backgroundSize = [
  {
    label: "bg-auto",
    value: "bg-auto",
    styles: "background-size: auto;",
    description: "Displays background at original size",
  },
  {
    label: "bg-cover",
    value: "bg-cover",
    styles: "background-size: cover;",
    description: "Scales background to cover entire container",
  },
  {
    label: "bg-contain",
    value: "bg-contain",
    styles: "background-size: contain;",
    description: "Scales background to fit within container",
  },
  {
    label: "bg-size-(<custom-property>)",
    value: "bg-size-(<custom-property>)",
    styles: "background-size: var(<custom-property>);",
    description: "Uses CSS custom property for background size",
  },
  {
    label: "bg-size-[<value>]",
    value: "bg-size-[<value>]",
    styles: "background-size: <value>;",
    description: "Sets arbitrary background size",
  },
];

// BORDERS
export const borderRadius = [
  {
    label: "rounded-xs",
    value: "rounded-xs",
    styles: "border-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to all corners of an element",
  },
  {
    label: "rounded-sm",
    value: "rounded-sm",
    styles: "border-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to all corners of an element",
  },
  {
    label: "rounded-md",
    value: "rounded-md",
    styles: "border-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to all corners of an element",
  },
  {
    label: "rounded-lg",
    value: "rounded-lg",
    styles: "border-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to all corners of an element",
  },
  {
    label: "rounded-xl",
    value: "rounded-xl",
    styles: "border-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to all corners of an element",
  },
  {
    label: "rounded-2xl",
    value: "rounded-2xl",
    styles: "border-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to all corners of an element",
  },
  {
    label: "rounded-3xl",
    value: "rounded-3xl",
    styles: "border-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to all corners of an element",
  },
  {
    label: "rounded-4xl",
    value: "rounded-4xl",
    styles: "border-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to all corners of an element",
  },
  {
    label: "rounded-none",
    value: "rounded-none",
    styles: "border-radius: 0;",
    description: "Removes all border radius, creating sharp 90-degree corners",
  },
  {
    label: "rounded-full",
    value: "rounded-full",
    styles: "border-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius, creating circular or pill-shaped elements",
  },
  {
    label: "rounded-(<custom-property>)",
    value: "rounded-(<custom-property>)",
    styles: "border-radius: var(<custom-property>);",
    description: "Applies a border radius using a custom CSS property variable",
  },
  {
    label: "rounded-[<value>]",
    value: "rounded-[<value>]",
    styles: "border-radius: <value>;",
    description:
      "Applies an arbitrary border radius value using Tailwind's bracket notation",
  },
  {
    label: "rounded-s-xs",
    value: "rounded-s-xs",
    styles:
      "border-start-start-radius: var(--radius-xs); /* 0.125rem (2px) */ border-end-start-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-sm",
    value: "rounded-s-sm",
    styles:
      "border-start-start-radius: var(--radius-sm); /* 0.25rem (4px) */ border-end-start-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-md",
    value: "rounded-s-md",
    styles:
      "border-start-start-radius: var(--radius-md); /* 0.375rem (6px) */ border-end-start-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-lg",
    value: "rounded-s-lg",
    styles:
      "border-start-start-radius: var(--radius-lg); /* 0.5rem (8px) */ border-end-start-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-xl",
    value: "rounded-s-xl",
    styles:
      "border-start-start-radius: var(--radius-xl); /* 0.75rem (12px) */ border-end-start-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-2xl",
    value: "rounded-s-2xl",
    styles:
      "border-start-start-radius: var(--radius-2xl); /* 1rem (16px) */ border-end-start-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-3xl",
    value: "rounded-s-3xl",
    styles:
      "border-start-start-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-end-start-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-4xl",
    value: "rounded-s-4xl",
    styles:
      "border-start-start-radius: var(--radius-4xl); /* 2rem (32px) */ border-end-start-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-none",
    value: "rounded-s-none",
    styles: "border-start-start-radius: 0; border-end-start-radius: 0;",
    description:
      "Removes border radius from the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-full",
    value: "rounded-s-full",
    styles:
      "border-start-start-radius: calc(infinity * 1px); border-end-start-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the start side (left in LTR, right in RTL)",
  },
  {
    label: "rounded-s-(<custom-property>)",
    value: "rounded-s-(<custom-property>)",
    styles:
      "border-start-start-radius: var(<custom-property>); border-end-start-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the start side",
  },
  {
    label: "rounded-s-[<value>]",
    value: "rounded-s-[<value>]",
    styles:
      "border-start-start-radius: <value>; border-end-start-radius: <value>;",
    description: "Applies an arbitrary border radius value to the start side",
  },
  {
    label: "rounded-e-xs",
    value: "rounded-e-xs",
    styles:
      "border-start-end-radius: var(--radius-xs); /* 0.125rem (2px) */ border-end-end-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-sm",
    value: "rounded-e-sm",
    styles:
      "border-start-end-radius: var(--radius-sm); /* 0.25rem (4px) */ border-end-end-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-md",
    value: "rounded-e-md",
    styles:
      "border-start-end-radius: var(--radius-md); /* 0.375rem (6px) */ border-end-end-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-lg",
    value: "rounded-e-lg",
    styles:
      "border-start-end-radius: var(--radius-lg); /* 0.5rem (8px) */ border-end-end-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-xl",
    value: "rounded-e-xl",
    styles:
      "border-start-end-radius: var(--radius-xl); /* 0.75rem (12px) */ border-end-end-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-2xl",
    value: "rounded-e-2xl",
    styles:
      "border-start-end-radius: var(--radius-2xl); /* 1rem (16px) */ border-end-end-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-3xl",
    value: "rounded-e-3xl",
    styles:
      "border-start-end-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-end-end-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-4xl",
    value: "rounded-e-4xl",
    styles:
      "border-start-end-radius: var(--radius-4xl); /* 2rem (32px) */ border-end-end-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-none",
    value: "rounded-e-none",
    styles: "border-start-end-radius: 0; border-end-end-radius: 0;",
    description:
      "Removes border radius from the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-full",
    value: "rounded-e-full",
    styles:
      "border-start-end-radius: calc(infinity * 1px); border-end-end-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the end side (right in LTR, left in RTL)",
  },
  {
    label: "rounded-e-(<custom-property>)",
    value: "rounded-e-(<custom-property>)",
    styles:
      "border-start-end-radius: var(<custom-property>); border-end-end-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the end side",
  },
  {
    label: "rounded-e-[<value>]",
    value: "rounded-e-[<value>]",
    styles: "border-start-end-radius: <value>; border-end-end-radius: <value>;",
    description: "Applies an arbitrary border radius value to the end side",
  },
  {
    label: "rounded-t-xs",
    value: "rounded-t-xs",
    styles:
      "border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */ border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the top corners",
  },
  {
    label: "rounded-t-sm",
    value: "rounded-t-sm",
    styles:
      "border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */ border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description: "Applies a small border radius of 4px to the top corners",
  },
  {
    label: "rounded-t-md",
    value: "rounded-t-md",
    styles:
      "border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */ border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */",
    description: "Applies a medium border radius of 6px to the top corners",
  },
  {
    label: "rounded-t-lg",
    value: "rounded-t-lg",
    styles:
      "border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */ border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description: "Applies a large border radius of 8px to the top corners",
  },
  {
    label: "rounded-t-xl",
    value: "rounded-t-xl",
    styles:
      "border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */ border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the top corners",
  },
  {
    label: "rounded-t-2xl",
    value: "rounded-t-2xl",
    styles:
      "border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */ border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the top corners",
  },
  {
    label: "rounded-t-3xl",
    value: "rounded-t-3xl",
    styles:
      "border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the top corners",
  },
  {
    label: "rounded-t-4xl",
    value: "rounded-t-4xl",
    styles:
      "border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */ border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the top corners",
  },
  {
    label: "rounded-t-none",
    value: "rounded-t-none",
    styles: "border-top-left-radius: 0; border-top-right-radius: 0;",
    description: "Removes border radius from the top corners",
  },
  {
    label: "rounded-t-full",
    value: "rounded-t-full",
    styles:
      "border-top-left-radius: calc(infinity * 1px); border-top-right-radius: calc(infinity * 1px);",
    description: "Applies a fully rounded border radius to the top corners",
  },
  {
    label: "rounded-t-(<custom-property>)",
    value: "rounded-t-(<custom-property>)",
    styles:
      "border-top-left-radius: var(<custom-property>); border-top-right-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the top corners",
  },
  {
    label: "rounded-t-[<value>]",
    value: "rounded-t-[<value>]",
    styles:
      "border-top-left-radius: <value>; border-top-right-radius: <value>;",
    description: "Applies an arbitrary border radius value to the top corners",
  },
  {
    label: "rounded-r-xs",
    value: "rounded-r-xs",
    styles:
      "border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */ border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the right corners",
  },
  {
    label: "rounded-r-sm",
    value: "rounded-r-sm",
    styles:
      "border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */ border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description: "Applies a small border radius of 4px to the right corners",
  },
  {
    label: "rounded-r-md",
    value: "rounded-r-md",
    styles:
      "border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */ border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */",
    description: "Applies a medium border radius of 6px to the right corners",
  },
  {
    label: "rounded-r-lg",
    value: "rounded-r-lg",
    styles:
      "border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */ border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description: "Applies a large border radius of 8px to the right corners",
  },
  {
    label: "rounded-r-xl",
    value: "rounded-r-xl",
    styles:
      "border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */ border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the right corners",
  },
  {
    label: "rounded-r-2xl",
    value: "rounded-r-2xl",
    styles:
      "border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */ border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the right corners",
  },
  {
    label: "rounded-r-3xl",
    value: "rounded-r-3xl",
    styles:
      "border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the right corners",
  },
  {
    label: "rounded-r-4xl",
    value: "rounded-r-4xl",
    styles:
      "border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */ border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the right corners",
  },
  {
    label: "rounded-r-none",
    value: "rounded-r-none",
    styles: "border-top-right-radius: 0; border-bottom-right-radius: 0;",
    description: "Removes border radius from the right corners",
  },
  {
    label: "rounded-r-full",
    value: "rounded-r-full",
    styles:
      "border-top-right-radius: calc(infinity * 1px); border-bottom-right-radius: calc(infinity * 1px);",
    description: "Applies a fully rounded border radius to the right corners",
  },
  {
    label: "rounded-r-(<custom-property>)",
    value: "rounded-r-(<custom-property>)",
    styles:
      "border-top-right-radius: var(<custom-property>); border-bottom-right-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the right corners",
  },
  {
    label: "rounded-r-[<value>]",
    value: "rounded-r-[<value>]",
    styles:
      "border-top-right-radius: <value>; border-bottom-right-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the right corners",
  },
  {
    label: "rounded-b-xs",
    value: "rounded-b-xs",
    styles:
      "border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */ border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the bottom corners",
  },
  {
    label: "rounded-b-sm",
    value: "rounded-b-sm",
    styles:
      "border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */ border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description: "Applies a small border radius of 4px to the bottom corners",
  },
  {
    label: "rounded-b-md",
    value: "rounded-b-md",
    styles:
      "border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */ border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */",
    description: "Applies a medium border radius of 6px to the bottom corners",
  },
  {
    label: "rounded-b-lg",
    value: "rounded-b-lg",
    styles:
      "border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */ border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description: "Applies a large border radius of 8px to the bottom corners",
  },
  {
    label: "rounded-b-xl",
    value: "rounded-b-xl",
    styles:
      "border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */ border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the bottom corners",
  },
  {
    label: "rounded-b-2xl",
    value: "rounded-b-2xl",
    styles:
      "border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */ border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the bottom corners",
  },
  {
    label: "rounded-b-3xl",
    value: "rounded-b-3xl",
    styles:
      "border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the bottom corners",
  },
  {
    label: "rounded-b-4xl",
    value: "rounded-b-4xl",
    styles:
      "border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */ border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the bottom corners",
  },
  {
    label: "rounded-b-none",
    value: "rounded-b-none",
    styles: "border-bottom-right-radius: 0; border-bottom-left-radius: 0;",
    description: "Removes border radius from the bottom corners",
  },
  {
    label: "rounded-b-full",
    value: "rounded-b-full",
    styles:
      "border-bottom-right-radius: calc(infinity * 1px); border-bottom-left-radius: calc(infinity * 1px);",
    description: "Applies a fully rounded border radius to the bottom corners",
  },
  {
    label: "rounded-b-(<custom-property>)",
    value: "rounded-b-(<custom-property>)",
    styles:
      "border-bottom-right-radius: var(<custom-property>); border-bottom-left-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the bottom corners",
  },
  {
    label: "rounded-b-[<value>]",
    value: "rounded-b-[<value>]",
    styles:
      "border-bottom-right-radius: <value>; border-bottom-left-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the bottom corners",
  },
  {
    label: "rounded-l-xs",
    value: "rounded-l-xs",
    styles:
      "border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */ border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the left corners",
  },
  {
    label: "rounded-l-sm",
    value: "rounded-l-sm",
    styles:
      "border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */ border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description: "Applies a small border radius of 4px to the left corners",
  },
  {
    label: "rounded-l-md",
    value: "rounded-l-md",
    styles:
      "border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */ border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */",
    description: "Applies a medium border radius of 6px to the left corners",
  },
  {
    label: "rounded-l-lg",
    value: "rounded-l-lg",
    styles:
      "border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */ border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description: "Applies a large border radius of 8px to the left corners",
  },
  {
    label: "rounded-l-xl",
    value: "rounded-l-xl",
    styles:
      "border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */ border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the left corners",
  },
  {
    label: "rounded-l-2xl",
    value: "rounded-l-2xl",
    styles:
      "border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */ border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the left corners",
  },
  {
    label: "rounded-l-3xl",
    value: "rounded-l-3xl",
    styles:
      "border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the left corners",
  },
  {
    label: "rounded-l-4xl",
    value: "rounded-l-4xl",
    styles:
      "border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */ border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the left corners",
  },
  {
    label: "rounded-l-none",
    value: "rounded-l-none",
    styles: "border-top-left-radius: 0; border-bottom-left-radius: 0;",
    description: "Removes border radius from the left corners",
  },
  {
    label: "rounded-l-full",
    value: "rounded-l-full",
    styles:
      "border-top-left-radius: calc(infinity * 1px); border-bottom-left-radius: calc(infinity * 1px);",
    description: "Applies a fully rounded border radius to the left corners",
  },
  {
    label: "rounded-l-(<custom-property>)",
    value: "rounded-l-(<custom-property>)",
    styles:
      "border-top-left-radius: var(<custom-property>); border-bottom-left-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the left corners",
  },
  {
    label: "rounded-l-[<value>]",
    value: "rounded-l-[<value>]",
    styles:
      "border-top-left-radius: <value>; border-bottom-left-radius: <value>;",
    description: "Applies an arbitrary border radius value to the left corners",
  },
  {
    label: "rounded-ss-xs",
    value: "rounded-ss-xs",
    styles: "border-start-start-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-sm",
    value: "rounded-ss-sm",
    styles: "border-start-start-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-md",
    value: "rounded-ss-md",
    styles: "border-start-start-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-lg",
    value: "rounded-ss-lg",
    styles: "border-start-start-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-xl",
    value: "rounded-ss-xl",
    styles: "border-start-start-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-2xl",
    value: "rounded-ss-2xl",
    styles: "border-start-start-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-3xl",
    value: "rounded-ss-3xl",
    styles: "border-start-start-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-4xl",
    value: "rounded-ss-4xl",
    styles: "border-start-start-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-none",
    value: "rounded-ss-none",
    styles: "border-start-start-radius: 0;",
    description:
      "Removes border radius from the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-full",
    value: "rounded-ss-full",
    styles: "border-start-start-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the start-start corner (top-left in LTR, top-right in RTL)",
  },
  {
    label: "rounded-ss-(<custom-property>)",
    value: "rounded-ss-(<custom-property>)",
    styles: "border-start-start-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the start-start corner",
  },
  {
    label: "rounded-ss-[<value>]",
    value: "rounded-ss-[<value>]",
    styles: "border-start-start-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the start-start corner",
  },
  {
    label: "rounded-se-xs",
    value: "rounded-se-xs",
    styles: "border-start-end-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-sm",
    value: "rounded-se-sm",
    styles: "border-start-end-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-md",
    value: "rounded-se-md",
    styles: "border-start-end-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-lg",
    value: "rounded-se-lg",
    styles: "border-start-end-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-xl",
    value: "rounded-se-xl",
    styles: "border-start-end-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-2xl",
    value: "rounded-se-2xl",
    styles: "border-start-end-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-3xl",
    value: "rounded-se-3xl",
    styles: "border-start-end-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-4xl",
    value: "rounded-se-4xl",
    styles: "border-start-end-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-none",
    value: "rounded-se-none",
    styles: "border-start-end-radius: 0;",
    description:
      "Removes border radius from the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-full",
    value: "rounded-se-full",
    styles: "border-start-end-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the start-end corner (top-right in LTR, top-left in RTL)",
  },
  {
    label: "rounded-se-(<custom-property>)",
    value: "rounded-se-(<custom-property>)",
    styles: "border-start-end-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the start-end corner",
  },
  {
    label: "rounded-se-[<value>]",
    value: "rounded-se-[<value>]",
    styles: "border-start-end-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the start-end corner",
  },
  {
    label: "rounded-ee-xs",
    value: "rounded-ee-xs",
    styles: "border-end-end-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-sm",
    value: "rounded-ee-sm",
    styles: "border-end-end-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-md",
    value: "rounded-ee-md",
    styles: "border-end-end-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-lg",
    value: "rounded-ee-lg",
    styles: "border-end-end-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-xl",
    value: "rounded-ee-xl",
    styles: "border-end-end-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-2xl",
    value: "rounded-ee-2xl",
    styles: "border-end-end-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-3xl",
    value: "rounded-ee-3xl",
    styles: "border-end-end-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-4xl",
    value: "rounded-ee-4xl",
    styles: "border-end-end-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-none",
    value: "rounded-ee-none",
    styles: "border-end-end-radius: 0;",
    description:
      "Removes border radius from the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-full",
    value: "rounded-ee-full",
    styles: "border-end-end-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the end-end corner (bottom-right in LTR, bottom-left in RTL)",
  },
  {
    label: "rounded-ee-(<custom-property>)",
    value: "rounded-ee-(<custom-property>)",
    styles: "border-end-end-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the end-end corner",
  },
  {
    label: "rounded-ee-[<value>]",
    value: "rounded-ee-[<value>]",
    styles: "border-end-end-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the end-end corner",
  },
  {
    label: "rounded-es-xs",
    value: "rounded-es-xs",
    styles: "border-end-start-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-sm",
    value: "rounded-es-sm",
    styles: "border-end-start-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-md",
    value: "rounded-es-md",
    styles: "border-end-start-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-lg",
    value: "rounded-es-lg",
    styles: "border-end-start-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-xl",
    value: "rounded-es-xl",
    styles: "border-end-start-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-2xl",
    value: "rounded-es-2xl",
    styles: "border-end-start-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-3xl",
    value: "rounded-es-3xl",
    styles: "border-end-start-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-4xl",
    value: "rounded-es-4xl",
    styles: "border-end-start-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-none",
    value: "rounded-es-none",
    styles: "border-end-start-radius: 0;",
    description:
      "Removes border radius from the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-full",
    value: "rounded-es-full",
    styles: "border-end-start-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the end-start corner (bottom-left in LTR, bottom-right in RTL)",
  },
  {
    label: "rounded-es-(<custom-property>)",
    value: "rounded-es-(<custom-property>)",
    styles: "border-end-start-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the end-start corner",
  },
  {
    label: "rounded-es-[<value>]",
    value: "rounded-es-[<value>]",
    styles: "border-end-start-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the end-start corner",
  },
  {
    label: "rounded-tl-xs",
    value: "rounded-tl-xs",
    styles: "border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the top-left corner",
  },
  {
    label: "rounded-tl-sm",
    value: "rounded-tl-sm",
    styles: "border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description: "Applies a small border radius of 4px to the top-left corner",
  },
  {
    label: "rounded-tl-md",
    value: "rounded-tl-md",
    styles: "border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */",
    description: "Applies a medium border radius of 6px to the top-left corner",
  },
  {
    label: "rounded-tl-lg",
    value: "rounded-tl-lg",
    styles: "border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description: "Applies a large border radius of 8px to the top-left corner",
  },
  {
    label: "rounded-tl-xl",
    value: "rounded-tl-xl",
    styles: "border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the top-left corner",
  },
  {
    label: "rounded-tl-2xl",
    value: "rounded-tl-2xl",
    styles: "border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the top-left corner",
  },
  {
    label: "rounded-tl-3xl",
    value: "rounded-tl-3xl",
    styles: "border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the top-left corner",
  },
  {
    label: "rounded-tl-4xl",
    value: "rounded-tl-4xl",
    styles: "border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the top-left corner",
  },
  {
    label: "rounded-tl-none",
    value: "rounded-tl-none",
    styles: "border-top-left-radius: 0;",
    description: "Removes border radius from the top-left corner",
  },
  {
    label: "rounded-tl-full",
    value: "rounded-tl-full",
    styles: "border-top-left-radius: calc(infinity * 1px);",
    description: "Applies a fully rounded border radius to the top-left corner",
  },
  {
    label: "rounded-tl-(<custom-property>)",
    value: "rounded-tl-(<custom-property>)",
    styles: "border-top-left-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the top-left corner",
  },
  {
    label: "rounded-tl-[<value>]",
    value: "rounded-tl-[<value>]",
    styles: "border-top-left-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the top-left corner",
  },
  {
    label: "rounded-tr-xs",
    value: "rounded-tr-xs",
    styles: "border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the top-right corner",
  },
  {
    label: "rounded-tr-sm",
    value: "rounded-tr-sm",
    styles: "border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description: "Applies a small border radius of 4px to the top-right corner",
  },
  {
    label: "rounded-tr-md",
    value: "rounded-tr-md",
    styles: "border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the top-right corner",
  },
  {
    label: "rounded-tr-lg",
    value: "rounded-tr-lg",
    styles: "border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description: "Applies a large border radius of 8px to the top-right corner",
  },
  {
    label: "rounded-tr-xl",
    value: "rounded-tr-xl",
    styles: "border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the top-right corner",
  },
  {
    label: "rounded-tr-2xl",
    value: "rounded-tr-2xl",
    styles: "border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the top-right corner",
  },
  {
    label: "rounded-tr-3xl",
    value: "rounded-tr-3xl",
    styles: "border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the top-right corner",
  },
  {
    label: "rounded-tr-4xl",
    value: "rounded-tr-4xl",
    styles: "border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the top-right corner",
  },
  {
    label: "rounded-tr-none",
    value: "rounded-tr-none",
    styles: "border-top-right-radius: 0;",
    description: "Removes border radius from the top-right corner",
  },
  {
    label: "rounded-tr-full",
    value: "rounded-tr-full",
    styles: "border-top-right-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the top-right corner",
  },
  {
    label: "rounded-tr-(<custom-property>)",
    value: "rounded-tr-(<custom-property>)",
    styles: "border-top-right-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the top-right corner",
  },
  {
    label: "rounded-tr-[<value>]",
    value: "rounded-tr-[<value>]",
    styles: "border-top-right-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the top-right corner",
  },
  {
    label: "rounded-br-xs",
    value: "rounded-br-xs",
    styles:
      "border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the bottom-right corner",
  },
  {
    label: "rounded-br-sm",
    value: "rounded-br-sm",
    styles: "border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the bottom-right corner",
  },
  {
    label: "rounded-br-md",
    value: "rounded-br-md",
    styles:
      "border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the bottom-right corner",
  },
  {
    label: "rounded-br-lg",
    value: "rounded-br-lg",
    styles: "border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the bottom-right corner",
  },
  {
    label: "rounded-br-xl",
    value: "rounded-br-xl",
    styles:
      "border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the bottom-right corner",
  },
  {
    label: "rounded-br-2xl",
    value: "rounded-br-2xl",
    styles: "border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the bottom-right corner",
  },
  {
    label: "rounded-br-3xl",
    value: "rounded-br-3xl",
    styles:
      "border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the bottom-right corner",
  },
  {
    label: "rounded-br-4xl",
    value: "rounded-br-4xl",
    styles: "border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the bottom-right corner",
  },
  {
    label: "rounded-br-none",
    value: "rounded-br-none",
    styles: "border-bottom-right-radius: 0;",
    description: "Removes border radius from the bottom-right corner",
  },
  {
    label: "rounded-br-full",
    value: "rounded-br-full",
    styles: "border-bottom-right-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the bottom-right corner",
  },
  {
    label: "rounded-br-(<custom-property>)",
    value: "rounded-br-(<custom-property>)",
    styles: "border-bottom-right-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the bottom-right corner",
  },
  {
    label: "rounded-br-[<value>]",
    value: "rounded-br-[<value>]",
    styles: "border-bottom-right-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the bottom-right corner",
  },
  {
    label: "rounded-bl-xs",
    value: "rounded-bl-xs",
    styles: "border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
    description:
      "Applies an extra small border radius of 2px to the bottom-left corner",
  },
  {
    label: "rounded-bl-sm",
    value: "rounded-bl-sm",
    styles: "border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
    description:
      "Applies a small border radius of 4px to the bottom-left corner",
  },
  {
    label: "rounded-bl-md",
    value: "rounded-bl-md",
    styles: "border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */",
    description:
      "Applies a medium border radius of 6px to the bottom-left corner",
  },
  {
    label: "rounded-bl-lg",
    value: "rounded-bl-lg",
    styles: "border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
    description:
      "Applies a large border radius of 8px to the bottom-left corner",
  },
  {
    label: "rounded-bl-xl",
    value: "rounded-bl-xl",
    styles: "border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
    description:
      "Applies an extra large border radius of 12px to the bottom-left corner",
  },
  {
    label: "rounded-bl-2xl",
    value: "rounded-bl-2xl",
    styles: "border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */",
    description:
      "Applies a 2x extra large border radius of 16px to the bottom-left corner",
  },
  {
    label: "rounded-bl-3xl",
    value: "rounded-bl-3xl",
    styles: "border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
    description:
      "Applies a 3x extra large border radius of 24px to the bottom-left corner",
  },
  {
    label: "rounded-bl-4xl",
    value: "rounded-bl-4xl",
    styles: "border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */",
    description:
      "Applies a 4x extra large border radius of 32px to the bottom-left corner",
  },
  {
    label: "rounded-bl-none",
    value: "rounded-bl-none",
    styles: "border-bottom-left-radius: 0;",
    description: "Removes border radius from the bottom-left corner",
  },
  {
    label: "rounded-bl-full",
    value: "rounded-bl-full",
    styles: "border-bottom-left-radius: calc(infinity * 1px);",
    description:
      "Applies a fully rounded border radius to the bottom-left corner",
  },
  {
    label: "rounded-bl-(<custom-property>)",
    value: "rounded-bl-(<custom-property>)",
    styles: "border-bottom-left-radius: var(<custom-property>);",
    description:
      "Applies a border radius using a custom CSS property to the bottom-left corner",
  },
  {
    label: "rounded-bl-[<value>]",
    value: "rounded-bl-[<value>]",
    styles: "border-bottom-left-radius: <value>;",
    description:
      "Applies an arbitrary border radius value to the bottom-left corner",
  },
];
export const borderWidth = [
  {
    label: "border",
    value: "border",
    styles: "border-width: 1px;",
    description: "Sets a 1px border width on all sides of an element",
  },
  {
    label: "border-<number>",
    value: "border-<number>",
    styles: "border-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on all sides (e.g., border-2, border-4)",
  },
  {
    label: "border-(length:<custom-property>)",
    value: "border-(length:<custom-property>)",
    styles: "border-width: var(<custom-property>);",
    description: "Sets border width using a CSS custom property for all sides",
  },
  {
    label: "border-[<value>]",
    value: "border-[<value>]",
    styles: "border-width: <value>;",
    description:
      "Sets an arbitrary border width value using square bracket notation for all sides",
  },
  {
    label: "border-x",
    value: "border-x",
    styles: "border-inline-width: 1px;",
    description:
      "Sets a 1px border width on the horizontal (left and right) sides",
  },
  {
    label: "border-x-<number>",
    value: "border-x-<number>",
    styles: "border-inline-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on horizontal sides",
  },
  {
    label: "border-x-(length:<custom-property>)",
    value: "border-x-(length:<custom-property>)",
    styles: "border-inline-width: var(<custom-property>);",
    description: "Sets horizontal border width using a CSS custom property",
  },
  {
    label: "border-x-[<value>]",
    value: "border-x-[<value>]",
    styles: "border-inline-width: <value>;",
    description: "Sets an arbitrary border width value for horizontal sides",
  },
  {
    label: "border-y",
    value: "border-y",
    styles: "border-block-width: 1px;",
    description:
      "Sets a 1px border width on the vertical (top and bottom) sides",
  },
  {
    label: "border-y-<number>",
    value: "border-y-<number>",
    styles: "border-block-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on vertical sides",
  },
  {
    label: "border-y-(length:<custom-property>)",
    value: "border-y-(length:<custom-property>)",
    styles: "border-block-width: var(<custom-property>);",
    description: "Sets vertical border width using a CSS custom property",
  },
  {
    label: "border-y-[<value>]",
    value: "border-y-[<value>]",
    styles: "border-block-width: <value>;",
    description: "Sets an arbitrary border width value for vertical sides",
  },
  {
    label: "border-s",
    value: "border-s",
    styles: "border-inline-start-width: 1px;",
    description:
      "Sets a 1px border width on the inline start side (left in LTR, right in RTL)",
  },
  {
    label: "border-s-<number>",
    value: "border-s-<number>",
    styles: "border-inline-start-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on the inline start side",
  },
  {
    label: "border-s-(length:<custom-property>)",
    value: "border-s-(length:<custom-property>)",
    styles: "border-inline-start-width: var(<custom-property>);",
    description: "Sets inline start border width using a CSS custom property",
  },
  {
    label: "border-s-[<value>]",
    value: "border-s-[<value>]",
    styles: "border-inline-start-width: <value>;",
    description:
      "Sets an arbitrary border width value for the inline start side",
  },
  {
    label: "border-e",
    value: "border-e",
    styles: "border-inline-end-width: 1px;",
    description:
      "Sets a 1px border width on the inline end side (right in LTR, left in RTL)",
  },
  {
    label: "border-e-<number>",
    value: "border-e-<number>",
    styles: "border-inline-end-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on the inline end side",
  },
  {
    label: "border-e-(length:<custom-property>)",
    value: "border-e-(length:<custom-property>)",
    styles: "border-inline-end-width: var(<custom-property>);",
    description: "Sets inline end border width using a CSS custom property",
  },
  {
    label: "border-e-[<value>]",
    value: "border-e-[<value>]",
    styles: "border-inline-end-width: <value>;",
    description: "Sets an arbitrary border width value for the inline end side",
  },
  {
    label: "border-t",
    value: "border-t",
    styles: "border-top-width: 1px;",
    description: "Sets a 1px border width on the top side",
  },
  {
    label: "border-t-<number>",
    value: "border-t-<number>",
    styles: "border-top-width: <number>px;",
    description: "Sets a custom numeric border width in pixels on the top side",
  },
  {
    label: "border-t-(length:<custom-property>)",
    value: "border-t-(length:<custom-property>)",
    styles: "border-top-width: var(<custom-property>);",
    description: "Sets top border width using a CSS custom property",
  },
  {
    label: "border-t-[<value>]",
    value: "border-t-[<value>]",
    styles: "border-top-width: <value>;",
    description: "Sets an arbitrary border width value for the top side",
  },
  {
    label: "border-r",
    value: "border-r",
    styles: "border-right-width: 1px;",
    description: "Sets a 1px border width on the right side",
  },
  {
    label: "border-r-<number>",
    value: "border-r-<number>",
    styles: "border-right-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on the right side",
  },
  {
    label: "border-r-(length:<custom-property>)",
    value: "border-r-(length:<custom-property>)",
    styles: "border-right-width: var(<custom-property>);",
    description: "Sets right border width using a CSS custom property",
  },
  {
    label: "border-r-[<value>]",
    value: "border-r-[<value>]",
    styles: "border-right-width: <value>;",
    description: "Sets an arbitrary border width value for the right side",
  },
  {
    label: "border-b",
    value: "border-b",
    styles: "border-bottom-width: 1px;",
    description: "Sets a 1px border width on the bottom side",
  },
  {
    label: "border-b-<number>",
    value: "border-b-<number>",
    styles: "border-bottom-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on the bottom side",
  },
  {
    label: "border-b-(length:<custom-property>)",
    value: "border-b-(length:<custom-property>)",
    styles: "border-bottom-width: var(<custom-property>);",
    description: "Sets bottom border width using a CSS custom property",
  },
  {
    label: "border-b-[<value>]",
    value: "border-b-[<value>]",
    styles: "border-bottom-width: <value>;",
    description: "Sets an arbitrary border width value for the bottom side",
  },
  {
    label: "border-l",
    value: "border-l",
    styles: "border-left-width: 1px;",
    description: "Sets a 1px border width on the left side",
  },
  {
    label: "border-l-<number>",
    value: "border-l-<number>",
    styles: "border-left-width: <number>px;",
    description:
      "Sets a custom numeric border width in pixels on the left side",
  },
  {
    label: "border-l-(length:<custom-property>)",
    value: "border-l-(length:<custom-property>)",
    styles: "border-left-width: var(<custom-property>);",
    description: "Sets left border width using a CSS custom property",
  },
  {
    label: "border-l-[<value>]",
    value: "border-l-[<value>]",
    styles: "border-left-width: <value>;",
    description: "Sets an arbitrary border width value for the left side",
  },
  {
    label: "divide-x",
    value: "divide-x",
    styles:
      "& > :not(:last-child) {\n  border-inline-start-width: 0px;\n  border-inline-end-width: 1px;\n}",
    description:
      "Adds a 1px vertical divider between child elements (horizontal spacing)",
  },
  {
    label: "divide-x-<number>",
    value: "divide-x-<number>",
    styles:
      "& > :not(:last-child) {\n  border-inline-start-width: 0px;\n  border-inline-end-width: <number>px;\n}",
    description: "Adds a custom width vertical divider between child elements",
  },
  {
    label: "divide-x-(length:<custom-property>)",
    value: "divide-x-(length:<custom-property>)",
    styles:
      "& > :not(:last-child) {\n  border-inline-start-width: 0px;\n  border-inline-end-width: var(<custom-property>);\n}",
    description:
      "Adds a vertical divider between child elements using a CSS custom property",
  },
  {
    label: "divide-x-[<value>]",
    value: "divide-x-[<value>]",
    styles:
      "& > :not(:last-child) {\n  border-inline-start-width: 0px;\n  border-inline-end-width: <value>;\n}",
    description:
      "Adds an arbitrary width vertical divider between child elements",
  },
  {
    label: "divide-y",
    value: "divide-y",
    styles:
      "& > :not(:last-child) {\n  border-top-width: 0px;\n  border-bottom-width: 1px;\n}",
    description:
      "Adds a 1px horizontal divider between child elements (vertical spacing)",
  },
  {
    label: "divide-y-<number>",
    value: "divide-y-<number>",
    styles:
      "& > :not(:last-child) {\n  border-top-width: 0px;\n  border-bottom-width: <number>px;\n}",
    description:
      "Adds a custom width horizontal divider between child elements",
  },
  {
    label: "divide-y-(length:<custom-property>)",
    value: "divide-y-(length:<custom-property>)",
    styles:
      "& > :not(:last-child) {\n  border-top-width: 0px;\n  border-bottom-width: var(<custom-property>);\n}",
    description:
      "Adds a horizontal divider between child elements using a CSS custom property",
  },
  {
    label: "divide-y-[<value>]",
    value: "divide-y-[<value>]",
    styles:
      "& > :not(:last-child) {\n  border-top-width: 0px;\n  border-bottom-width: <value>;\n}",
    description:
      "Adds an arbitrary width horizontal divider between child elements",
  },
  {
    label: "divide-x-reverse",
    value: "divide-x-reverse",
    styles: "--tw-divide-x-reverse: 1;",
    description:
      "Reverses the direction of vertical dividers (useful for RTL layouts)",
  },
  {
    label: "divide-y-reverse",
    value: "divide-y-reverse",
    styles: "--tw-divide-y-reverse: 1;",
    description:
      "Reverses the direction of horizontal dividers (places divider above instead of below)",
  },
];

export const borderColor = [
  {
    label: "border-inherit",
    value: "border-inherit",
    styles: "border-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-current",
    value: "border-current",
    styles: "border-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-transparent",
    value: "border-transparent",
    styles: "border-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-black",
    value: "border-black",
    styles: "border-color: var(--color-black); /* #000 */",
    description: "Sets border color to black",
  },
  {
    label: "border-white",
    value: "border-white",
    styles: "border-color: var(--color-white); /* #fff */",
    description: "Sets border color to white",
  },
  {
    label: "border-red-50",
    value: "border-red-50",
    styles: "border-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets border color to red-50",
  },
  {
    label: "border-red-100",
    value: "border-red-100",
    styles:
      "border-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets border color to red-100",
  },
  {
    label: "border-red-200",
    value: "border-red-200",
    styles:
      "border-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets border color to red-200",
  },
  {
    label: "border-red-300",
    value: "border-red-300",
    styles:
      "border-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets border color to red-300",
  },
  {
    label: "border-red-400",
    value: "border-red-400",
    styles:
      "border-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets border color to red-400",
  },
  {
    label: "border-red-500",
    value: "border-red-500",
    styles:
      "border-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets border color to red-500",
  },
  {
    label: "border-red-600",
    value: "border-red-600",
    styles:
      "border-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets border color to red-600",
  },
  {
    label: "border-red-700",
    value: "border-red-700",
    styles:
      "border-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets border color to red-700",
  },
  {
    label: "border-red-800",
    value: "border-red-800",
    styles:
      "border-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets border color to red-800",
  },
  {
    label: "border-red-900",
    value: "border-red-900",
    styles:
      "border-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets border color to red-900",
  },
  {
    label: "border-red-950",
    value: "border-red-950",
    styles:
      "border-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets border color to red-950",
  },
  {
    label: "border-orange-50",
    value: "border-orange-50",
    styles:
      "border-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets border color to orange-50",
  },
  {
    label: "border-orange-100",
    value: "border-orange-100",
    styles:
      "border-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets border color to orange-100",
  },
  {
    label: "border-orange-200",
    value: "border-orange-200",
    styles:
      "border-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets border color to orange-200",
  },
  {
    label: "border-orange-300",
    value: "border-orange-300",
    styles:
      "border-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets border color to orange-300",
  },
  {
    label: "border-orange-400",
    value: "border-orange-400",
    styles:
      "border-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets border color to orange-400",
  },
  {
    label: "border-orange-500",
    value: "border-orange-500",
    styles:
      "border-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets border color to orange-500",
  },
  {
    label: "border-orange-600",
    value: "border-orange-600",
    styles:
      "border-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets border color to orange-600",
  },
  {
    label: "border-orange-700",
    value: "border-orange-700",
    styles:
      "border-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets border color to orange-700",
  },
  {
    label: "border-orange-800",
    value: "border-orange-800",
    styles:
      "border-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets border color to orange-800",
  },
  {
    label: "border-orange-900",
    value: "border-orange-900",
    styles:
      "border-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets border color to orange-900",
  },
  {
    label: "border-orange-950",
    value: "border-orange-950",
    styles:
      "border-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets border color to orange-950",
  },
  {
    label: "border-amber-50",
    value: "border-amber-50",
    styles:
      "border-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets border color to amber-50",
  },
  {
    label: "border-amber-100",
    value: "border-amber-100",
    styles:
      "border-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets border color to amber-100",
  },
  {
    label: "border-amber-200",
    value: "border-amber-200",
    styles:
      "border-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets border color to amber-200",
  },
  {
    label: "border-amber-300",
    value: "border-amber-300",
    styles:
      "border-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets border color to amber-300",
  },
  {
    label: "border-amber-400",
    value: "border-amber-400",
    styles:
      "border-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets border color to amber-400",
  },
  {
    label: "border-amber-500",
    value: "border-amber-500",
    styles:
      "border-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets border color to amber-500",
  },
  {
    label: "border-amber-600",
    value: "border-amber-600",
    styles:
      "border-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets border color to amber-600",
  },
  {
    label: "border-amber-700",
    value: "border-amber-700",
    styles:
      "border-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets border color to amber-700",
  },
  {
    label: "border-amber-800",
    value: "border-amber-800",
    styles:
      "border-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets border color to amber-800",
  },
  {
    label: "border-amber-900",
    value: "border-amber-900",
    styles:
      "border-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets border color to amber-900",
  },
  {
    label: "border-amber-950",
    value: "border-amber-950",
    styles:
      "border-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets border color to amber-950",
  },
  {
    label: "border-yellow-50",
    value: "border-yellow-50",
    styles:
      "border-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets border color to yellow-50",
  },
  {
    label: "border-yellow-100",
    value: "border-yellow-100",
    styles:
      "border-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets border color to yellow-100",
  },
  {
    label: "border-yellow-200",
    value: "border-yellow-200",
    styles:
      "border-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets border color to yellow-200",
  },
  {
    label: "border-yellow-300",
    value: "border-yellow-300",
    styles:
      "border-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets border color to yellow-300",
  },
  {
    label: "border-yellow-400",
    value: "border-yellow-400",
    styles:
      "border-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets border color to yellow-400",
  },
  {
    label: "border-yellow-500",
    value: "border-yellow-500",
    styles:
      "border-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets border color to yellow-500",
  },
  {
    label: "border-yellow-600",
    value: "border-yellow-600",
    styles:
      "border-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets border color to yellow-600",
  },
  {
    label: "border-yellow-700",
    value: "border-yellow-700",
    styles:
      "border-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets border color to yellow-700",
  },
  {
    label: "border-yellow-800",
    value: "border-yellow-800",
    styles:
      "border-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets border color to yellow-800",
  },
  {
    label: "border-yellow-900",
    value: "border-yellow-900",
    styles:
      "border-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets border color to yellow-900",
  },
  {
    label: "border-yellow-950",
    value: "border-yellow-950",
    styles:
      "border-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets border color to yellow-950",
  },
  {
    label: "border-lime-50",
    value: "border-lime-50",
    styles:
      "border-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets border color to lime-50",
  },
  {
    label: "border-lime-100",
    value: "border-lime-100",
    styles:
      "border-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets border color to lime-100",
  },
  {
    label: "border-lime-200",
    value: "border-lime-200",
    styles:
      "border-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets border color to lime-200",
  },
  {
    label: "border-lime-300",
    value: "border-lime-300",
    styles:
      "border-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets border color to lime-300",
  },
  {
    label: "border-lime-400",
    value: "border-lime-400",
    styles:
      "border-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets border color to lime-400",
  },
  {
    label: "border-lime-500",
    value: "border-lime-500",
    styles:
      "border-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets border color to lime-500",
  },
  {
    label: "border-lime-600",
    value: "border-lime-600",
    styles:
      "border-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets border color to lime-600",
  },
  {
    label: "border-lime-700",
    value: "border-lime-700",
    styles:
      "border-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets border color to lime-700",
  },
  {
    label: "border-lime-800",
    value: "border-lime-800",
    styles:
      "border-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets border color to lime-800",
  },
  {
    label: "border-lime-900",
    value: "border-lime-900",
    styles:
      "border-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets border color to lime-900",
  },
  {
    label: "border-lime-950",
    value: "border-lime-950",
    styles:
      "border-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets border color to lime-950",
  },
  {
    label: "border-green-50",
    value: "border-green-50",
    styles:
      "border-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets border color to green-50",
  },
  {
    label: "border-green-100",
    value: "border-green-100",
    styles:
      "border-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets border color to green-100",
  },
  {
    label: "border-green-200",
    value: "border-green-200",
    styles:
      "border-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets border color to green-200",
  },
  {
    label: "border-green-300",
    value: "border-green-300",
    styles:
      "border-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets border color to green-300",
  },
  {
    label: "border-green-400",
    value: "border-green-400",
    styles:
      "border-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets border color to green-400",
  },
  {
    label: "border-green-500",
    value: "border-green-500",
    styles:
      "border-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets border color to green-500",
  },
  {
    label: "border-green-600",
    value: "border-green-600",
    styles:
      "border-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets border color to green-600",
  },
  {
    label: "border-green-700",
    value: "border-green-700",
    styles:
      "border-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets border color to green-700",
  },
  {
    label: "border-green-800",
    value: "border-green-800",
    styles:
      "border-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets border color to green-800",
  },
  {
    label: "border-green-900",
    value: "border-green-900",
    styles:
      "border-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets border color to green-900",
  },
  {
    label: "border-green-950",
    value: "border-green-950",
    styles:
      "border-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets border color to green-950",
  },
  {
    label: "border-emerald-50",
    value: "border-emerald-50",
    styles:
      "border-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets border color to emerald-50",
  },
  {
    label: "border-emerald-100",
    value: "border-emerald-100",
    styles:
      "border-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets border color to emerald-100",
  },
  {
    label: "border-emerald-200",
    value: "border-emerald-200",
    styles:
      "border-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets border color to emerald-200",
  },
  {
    label: "border-emerald-300",
    value: "border-emerald-300",
    styles:
      "border-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets border color to emerald-300",
  },
  {
    label: "border-emerald-400",
    value: "border-emerald-400",
    styles:
      "border-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets border color to emerald-400",
  },
  {
    label: "border-emerald-500",
    value: "border-emerald-500",
    styles:
      "border-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets border color to emerald-500",
  },
  {
    label: "border-emerald-600",
    value: "border-emerald-600",
    styles:
      "border-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets border color to emerald-600",
  },
  {
    label: "border-emerald-700",
    value: "border-emerald-700",
    styles:
      "border-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets border color to emerald-700",
  },
  {
    label: "border-emerald-800",
    value: "border-emerald-800",
    styles:
      "border-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets border color to emerald-800",
  },
  {
    label: "border-emerald-900",
    value: "border-emerald-900",
    styles:
      "border-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets border color to emerald-900",
  },
  {
    label: "border-emerald-950",
    value: "border-emerald-950",
    styles:
      "border-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets border color to emerald-950",
  },
  {
    label: "border-teal-50",
    value: "border-teal-50",
    styles:
      "border-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets border color to teal-50",
  },
  {
    label: "border-teal-100",
    value: "border-teal-100",
    styles:
      "border-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets border color to teal-100",
  },
  {
    label: "border-teal-200",
    value: "border-teal-200",
    styles:
      "border-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets border color to teal-200",
  },
  {
    label: "border-teal-300",
    value: "border-teal-300",
    styles:
      "border-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets border color to teal-300",
  },
  {
    label: "border-teal-400",
    value: "border-teal-400",
    styles:
      "border-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets border color to teal-400",
  },
  {
    label: "border-teal-500",
    value: "border-teal-500",
    styles:
      "border-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets border color to teal-500",
  },
  {
    label: "border-teal-600",
    value: "border-teal-600",
    styles:
      "border-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets border color to teal-600",
  },
  {
    label: "border-teal-700",
    value: "border-teal-700",
    styles:
      "border-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets border color to teal-700",
  },
  {
    label: "border-teal-800",
    value: "border-teal-800",
    styles:
      "border-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets border color to teal-800",
  },
  {
    label: "border-teal-900",
    value: "border-teal-900",
    styles:
      "border-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets border color to teal-900",
  },
  {
    label: "border-teal-950",
    value: "border-teal-950",
    styles:
      "border-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets border color to teal-950",
  },
  {
    label: "border-cyan-50",
    value: "border-cyan-50",
    styles:
      "border-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets border color to cyan-50",
  },
  {
    label: "border-cyan-100",
    value: "border-cyan-100",
    styles:
      "border-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets border color to cyan-100",
  },
  {
    label: "border-cyan-200",
    value: "border-cyan-200",
    styles:
      "border-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets border color to cyan-200",
  },
  {
    label: "border-cyan-300",
    value: "border-cyan-300",
    styles:
      "border-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets border color to cyan-300",
  },
  {
    label: "border-cyan-400",
    value: "border-cyan-400",
    styles:
      "border-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets border color to cyan-400",
  },
  {
    label: "border-cyan-500",
    value: "border-cyan-500",
    styles:
      "border-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets border color to cyan-500",
  },
  {
    label: "border-cyan-600",
    value: "border-cyan-600",
    styles:
      "border-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets border color to cyan-600",
  },
  {
    label: "border-cyan-700",
    value: "border-cyan-700",
    styles:
      "border-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets border color to cyan-700",
  },
  {
    label: "border-cyan-800",
    value: "border-cyan-800",
    styles:
      "border-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets border color to cyan-800",
  },
  {
    label: "border-cyan-900",
    value: "border-cyan-900",
    styles:
      "border-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets border color to cyan-900",
  },
  {
    label: "border-cyan-950",
    value: "border-cyan-950",
    styles:
      "border-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets border color to cyan-950",
  },
  {
    label: "border-sky-50",
    value: "border-sky-50",
    styles:
      "border-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets border color to sky-50",
  },
  {
    label: "border-sky-100",
    value: "border-sky-100",
    styles:
      "border-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets border color to sky-100",
  },
  {
    label: "border-sky-200",
    value: "border-sky-200",
    styles:
      "border-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets border color to sky-200",
  },
  {
    label: "border-sky-300",
    value: "border-sky-300",
    styles:
      "border-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets border color to sky-300",
  },
  {
    label: "border-sky-400",
    value: "border-sky-400",
    styles:
      "border-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets border color to sky-400",
  },
  {
    label: "border-sky-500",
    value: "border-sky-500",
    styles:
      "border-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets border color to sky-500",
  },
  {
    label: "border-sky-600",
    value: "border-sky-600",
    styles:
      "border-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets border color to sky-600",
  },
  {
    label: "border-sky-700",
    value: "border-sky-700",
    styles:
      "border-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets border color to sky-700",
  },
  {
    label: "border-sky-800",
    value: "border-sky-800",
    styles:
      "border-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets border color to sky-800",
  },
  {
    label: "border-sky-900",
    value: "border-sky-900",
    styles:
      "border-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets border color to sky-900",
  },
  {
    label: "border-sky-950",
    value: "border-sky-950",
    styles:
      "border-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets border color to sky-950",
  },
  {
    label: "border-blue-50",
    value: "border-blue-50",
    styles:
      "border-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets border color to blue-50",
  },
  {
    label: "border-blue-100",
    value: "border-blue-100",
    styles:
      "border-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets border color to blue-100",
  },
  {
    label: "border-blue-200",
    value: "border-blue-200",
    styles:
      "border-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets border color to blue-200",
  },
  {
    label: "border-blue-300",
    value: "border-blue-300",
    styles:
      "border-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets border color to blue-300",
  },
  {
    label: "border-blue-400",
    value: "border-blue-400",
    styles:
      "border-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets border color to blue-400",
  },
  {
    label: "border-blue-500",
    value: "border-blue-500",
    styles:
      "border-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets border color to blue-500",
  },
  {
    label: "border-blue-600",
    value: "border-blue-600",
    styles:
      "border-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets border color to blue-600",
  },
  {
    label: "border-blue-700",
    value: "border-blue-700",
    styles:
      "border-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets border color to blue-700",
  },
  {
    label: "border-blue-800",
    value: "border-blue-800",
    styles:
      "border-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets border color to blue-800",
  },
  {
    label: "border-blue-900",
    value: "border-blue-900",
    styles:
      "border-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets border color to blue-900",
  },
  {
    label: "border-blue-950",
    value: "border-blue-950",
    styles:
      "border-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets border color to blue-950",
  },
  {
    label: "border-indigo-50",
    value: "border-indigo-50",
    styles:
      "border-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets border color to indigo-50",
  },
  {
    label: "border-indigo-100",
    value: "border-indigo-100",
    styles:
      "border-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets border color to indigo-100",
  },
  {
    label: "border-indigo-200",
    value: "border-indigo-200",
    styles:
      "border-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets border color to indigo-200",
  },
  {
    label: "border-indigo-300",
    value: "border-indigo-300",
    styles:
      "border-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets border color to indigo-300",
  },
  {
    label: "border-indigo-400",
    value: "border-indigo-400",
    styles:
      "border-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets border color to indigo-400",
  },
  {
    label: "border-indigo-500",
    value: "border-indigo-500",
    styles:
      "border-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets border color to indigo-500",
  },
  {
    label: "border-indigo-600",
    value: "border-indigo-600",
    styles:
      "border-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets border color to indigo-600",
  },
  {
    label: "border-indigo-700",
    value: "border-indigo-700",
    styles:
      "border-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets border color to indigo-700",
  },
  {
    label: "border-indigo-800",
    value: "border-indigo-800",
    styles:
      "border-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets border color to indigo-800",
  },
  {
    label: "border-indigo-900",
    value: "border-indigo-900",
    styles:
      "border-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets border color to indigo-900",
  },
  {
    label: "border-indigo-950",
    value: "border-indigo-950",
    styles:
      "border-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets border color to indigo-950",
  },
  {
    label: "border-violet-50",
    value: "border-violet-50",
    styles:
      "border-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets border color to violet-50",
  },
  {
    label: "border-violet-100",
    value: "border-violet-100",
    styles:
      "border-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets border color to violet-100",
  },
  {
    label: "border-violet-200",
    value: "border-violet-200",
    styles:
      "border-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets border color to violet-200",
  },
  {
    label: "border-violet-300",
    value: "border-violet-300",
    styles:
      "border-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets border color to violet-300",
  },
  {
    label: "border-violet-400",
    value: "border-violet-400",
    styles:
      "border-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets border color to violet-400",
  },
  {
    label: "border-violet-500",
    value: "border-violet-500",
    styles:
      "border-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets border color to violet-500",
  },
  {
    label: "border-violet-600",
    value: "border-violet-600",
    styles:
      "border-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets border color to violet-600",
  },
  {
    label: "border-violet-700",
    value: "border-violet-700",
    styles:
      "border-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets border color to violet-700",
  },
  {
    label: "border-violet-800",
    value: "border-violet-800",
    styles:
      "border-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets border color to violet-800",
  },
  {
    label: "border-violet-900",
    value: "border-violet-900",
    styles:
      "border-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets border color to violet-900",
  },
  {
    label: "border-violet-950",
    value: "border-violet-950",
    styles:
      "border-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets border color to violet-950",
  },
  {
    label: "border-purple-50",
    value: "border-purple-50",
    styles:
      "border-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets border color to purple-50",
  },
  {
    label: "border-purple-100",
    value: "border-purple-100",
    styles:
      "border-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets border color to purple-100",
  },
  {
    label: "border-purple-200",
    value: "border-purple-200",
    styles:
      "border-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets border color to purple-200",
  },
  {
    label: "border-purple-300",
    value: "border-purple-300",
    styles:
      "border-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets border color to purple-300",
  },
  {
    label: "border-purple-400",
    value: "border-purple-400",
    styles:
      "border-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets border color to purple-400",
  },
  {
    label: "border-purple-500",
    value: "border-purple-500",
    styles:
      "border-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets border color to purple-500",
  },
  {
    label: "border-purple-600",
    value: "border-purple-600",
    styles:
      "border-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets border color to purple-600",
  },
  {
    label: "border-purple-700",
    value: "border-purple-700",
    styles:
      "border-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets border color to purple-700",
  },
  {
    label: "border-purple-800",
    value: "border-purple-800",
    styles:
      "border-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets border color to purple-800",
  },
  {
    label: "border-purple-900",
    value: "border-purple-900",
    styles:
      "border-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets border color to purple-900",
  },
  {
    label: "border-purple-950",
    value: "border-purple-950",
    styles:
      "border-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets border color to purple-950",
  },
  {
    label: "border-fuchsia-50",
    value: "border-fuchsia-50",
    styles:
      "border-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets border color to fuchsia-50",
  },
  {
    label: "border-fuchsia-100",
    value: "border-fuchsia-100",
    styles:
      "border-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets border color to fuchsia-100",
  },
  {
    label: "border-fuchsia-200",
    value: "border-fuchsia-200",
    styles:
      "border-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets border color to fuchsia-200",
  },
  {
    label: "border-fuchsia-300",
    value: "border-fuchsia-300",
    styles:
      "border-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets border color to fuchsia-300",
  },
  {
    label: "border-fuchsia-400",
    value: "border-fuchsia-400",
    styles:
      "border-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets border color to fuchsia-400",
  },
  {
    label: "border-fuchsia-500",
    value: "border-fuchsia-500",
    styles:
      "border-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets border color to fuchsia-500",
  },
  {
    label: "border-fuchsia-600",
    value: "border-fuchsia-600",
    styles:
      "border-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets border color to fuchsia-600",
  },
  {
    label: "border-fuchsia-700",
    value: "border-fuchsia-700",
    styles:
      "border-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets border color to fuchsia-700",
  },
  {
    label: "border-fuchsia-800",
    value: "border-fuchsia-800",
    styles:
      "border-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets border color to fuchsia-800",
  },
  {
    label: "border-fuchsia-900",
    value: "border-fuchsia-900",
    styles:
      "border-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets border color to fuchsia-900",
  },
  {
    label: "border-fuchsia-950",
    value: "border-fuchsia-950",
    styles:
      "border-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets border color to fuchsia-950",
  },
  {
    label: "border-pink-50",
    value: "border-pink-50",
    styles:
      "border-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets border color to pink-50",
  },
  {
    label: "border-pink-100",
    value: "border-pink-100",
    styles:
      "border-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets border color to pink-100",
  },
  {
    label: "border-pink-200",
    value: "border-pink-200",
    styles:
      "border-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets border color to pink-200",
  },
  {
    label: "border-pink-300",
    value: "border-pink-300",
    styles:
      "border-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets border color to pink-300",
  },
  {
    label: "border-pink-400",
    value: "border-pink-400",
    styles:
      "border-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets border color to pink-400",
  },
  {
    label: "border-pink-500",
    value: "border-pink-500",
    styles:
      "border-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets border color to pink-500",
  },
  {
    label: "border-pink-600",
    value: "border-pink-600",
    styles:
      "border-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets border color to pink-600",
  },
  {
    label: "border-pink-700",
    value: "border-pink-700",
    styles:
      "border-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets border color to pink-700",
  },
  {
    label: "border-pink-800",
    value: "border-pink-800",
    styles:
      "border-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets border color to pink-800",
  },
  {
    label: "border-pink-900",
    value: "border-pink-900",
    styles:
      "border-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets border color to pink-900",
  },
  {
    label: "border-pink-950",
    value: "border-pink-950",
    styles:
      "border-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets border color to pink-950",
  },
  {
    label: "border-rose-50",
    value: "border-rose-50",
    styles:
      "border-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets border color to rose-50",
  },
  {
    label: "border-rose-100",
    value: "border-rose-100",
    styles:
      "border-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets border color to rose-100",
  },
  {
    label: "border-rose-200",
    value: "border-rose-200",
    styles:
      "border-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets border color to rose-200",
  },
  {
    label: "border-rose-300",
    value: "border-rose-300",
    styles:
      "border-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets border color to rose-300",
  },
  {
    label: "border-rose-400",
    value: "border-rose-400",
    styles:
      "border-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets border color to rose-400",
  },
  {
    label: "border-rose-500",
    value: "border-rose-500",
    styles:
      "border-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets border color to rose-500",
  },
  {
    label: "border-rose-600",
    value: "border-rose-600",
    styles:
      "border-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets border color to rose-600",
  },
  {
    label: "border-rose-700",
    value: "border-rose-700",
    styles:
      "border-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets border color to rose-700",
  },
  {
    label: "border-rose-800",
    value: "border-rose-800",
    styles:
      "border-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets border color to rose-800",
  },
  {
    label: "border-rose-900",
    value: "border-rose-900",
    styles:
      "border-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets border color to rose-900",
  },
  {
    label: "border-rose-950",
    value: "border-rose-950",
    styles:
      "border-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets border color to rose-950",
  },
  {
    label: "border-slate-50",
    value: "border-slate-50",
    styles:
      "border-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets border color to slate-50",
  },
  {
    label: "border-slate-100",
    value: "border-slate-100",
    styles:
      "border-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets border color to slate-100",
  },
  {
    label: "border-slate-200",
    value: "border-slate-200",
    styles:
      "border-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets border color to slate-200",
  },
  {
    label: "border-slate-300",
    value: "border-slate-300",
    styles:
      "border-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets border color to slate-300",
  },
  {
    label: "border-slate-400",
    value: "border-slate-400",
    styles:
      "border-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets border color to slate-400",
  },
  {
    label: "border-slate-500",
    value: "border-slate-500",
    styles:
      "border-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets border color to slate-500",
  },
  {
    label: "border-slate-600",
    value: "border-slate-600",
    styles:
      "border-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets border color to slate-600",
  },
  {
    label: "border-slate-700",
    value: "border-slate-700",
    styles:
      "border-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets border color to slate-700",
  },
  {
    label: "border-slate-800",
    value: "border-slate-800",
    styles:
      "border-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets border color to slate-800",
  },
  {
    label: "border-slate-900",
    value: "border-slate-900",
    styles:
      "border-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets border color to slate-900",
  },
  {
    label: "border-slate-950",
    value: "border-slate-950",
    styles:
      "border-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets border color to slate-950",
  },
  {
    label: "border-gray-50",
    value: "border-gray-50",
    styles:
      "border-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets border color to gray-50",
  },
  {
    label: "border-gray-100",
    value: "border-gray-100",
    styles:
      "border-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets border color to gray-100",
  },
  {
    label: "border-gray-200",
    value: "border-gray-200",
    styles:
      "border-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets border color to gray-200",
  },
  {
    label: "border-gray-300",
    value: "border-gray-300",
    styles:
      "border-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets border color to gray-300",
  },
  {
    label: "border-gray-400",
    value: "border-gray-400",
    styles:
      "border-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets border color to gray-400",
  },
  {
    label: "border-gray-500",
    value: "border-gray-500",
    styles:
      "border-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets border color to gray-500",
  },
  {
    label: "border-gray-600",
    value: "border-gray-600",
    styles:
      "border-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets border color to gray-600",
  },
  {
    label: "border-gray-700",
    value: "border-gray-700",
    styles:
      "border-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets border color to gray-700",
  },
  {
    label: "border-gray-800",
    value: "border-gray-800",
    styles:
      "border-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets border color to gray-800",
  },
  {
    label: "border-gray-900",
    value: "border-gray-900",
    styles:
      "border-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets border color to gray-900",
  },
  {
    label: "border-gray-950",
    value: "border-gray-950",
    styles:
      "border-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets border color to gray-950",
  },
  {
    label: "border-zinc-50",
    value: "border-zinc-50",
    styles: "border-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets border color to zinc-50",
  },
  {
    label: "border-zinc-100",
    value: "border-zinc-100",
    styles:
      "border-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets border color to zinc-100",
  },
  {
    label: "border-zinc-200",
    value: "border-zinc-200",
    styles:
      "border-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets border color to zinc-200",
  },
  {
    label: "border-zinc-300",
    value: "border-zinc-300",
    styles:
      "border-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets border color to zinc-300",
  },
  {
    label: "border-zinc-400",
    value: "border-zinc-400",
    styles:
      "border-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets border color to zinc-400",
  },
  {
    label: "border-zinc-500",
    value: "border-zinc-500",
    styles:
      "border-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets border color to zinc-500",
  },
  {
    label: "border-zinc-600",
    value: "border-zinc-600",
    styles:
      "border-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets border color to zinc-600",
  },
  {
    label: "border-zinc-700",
    value: "border-zinc-700",
    styles:
      "border-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets border color to zinc-700",
  },
  {
    label: "border-zinc-800",
    value: "border-zinc-800",
    styles:
      "border-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets border color to zinc-800",
  },
  {
    label: "border-zinc-900",
    value: "border-zinc-900",
    styles:
      "border-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets border color to zinc-900",
  },
  {
    label: "border-zinc-950",
    value: "border-zinc-950",
    styles:
      "border-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets border color to zinc-950",
  },
  {
    label: "border-neutral-50",
    value: "border-neutral-50",
    styles: "border-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets border color to neutral-50",
  },
  {
    label: "border-neutral-100",
    value: "border-neutral-100",
    styles: "border-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets border color to neutral-100",
  },
  {
    label: "border-neutral-200",
    value: "border-neutral-200",
    styles: "border-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets border color to neutral-200",
  },
  {
    label: "border-neutral-300",
    value: "border-neutral-300",
    styles: "border-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets border color to neutral-300",
  },
  {
    label: "border-neutral-400",
    value: "border-neutral-400",
    styles: "border-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets border color to neutral-400",
  },
  {
    label: "border-neutral-500",
    value: "border-neutral-500",
    styles: "border-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets border color to neutral-500",
  },
  {
    label: "border-neutral-600",
    value: "border-neutral-600",
    styles: "border-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets border color to neutral-600",
  },
  {
    label: "border-neutral-700",
    value: "border-neutral-700",
    styles: "border-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets border color to neutral-700",
  },
  {
    label: "border-neutral-800",
    value: "border-neutral-800",
    styles: "border-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets border color to neutral-800",
  },
  {
    label: "border-neutral-900",
    value: "border-neutral-900",
    styles: "border-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets border color to neutral-900",
  },
  {
    label: "border-neutral-950",
    value: "border-neutral-950",
    styles: "border-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets border color to neutral-950",
  },
  {
    label: "border-stone-50",
    value: "border-stone-50",
    styles:
      "border-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets border color to stone-50",
  },
  {
    label: "border-stone-100",
    value: "border-stone-100",
    styles:
      "border-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets border color to stone-100",
  },
  {
    label: "border-stone-200",
    value: "border-stone-200",
    styles:
      "border-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets border color to stone-200",
  },
  {
    label: "border-stone-300",
    value: "border-stone-300",
    styles:
      "border-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets border color to stone-300",
  },
  {
    label: "border-stone-400",
    value: "border-stone-400",
    styles:
      "border-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets border color to stone-400",
  },
  {
    label: "border-stone-500",
    value: "border-stone-500",
    styles:
      "border-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets border color to stone-500",
  },
  {
    label: "border-stone-600",
    value: "border-stone-600",
    styles:
      "border-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets border color to stone-600",
  },
  {
    label: "border-stone-700",
    value: "border-stone-700",
    styles:
      "border-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets border color to stone-700",
  },
  {
    label: "border-stone-800",
    value: "border-stone-800",
    styles:
      "border-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets border color to stone-800",
  },
  {
    label: "border-stone-900",
    value: "border-stone-900",
    styles:
      "border-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets border color to stone-900",
  },
  {
    label: "border-stone-950",
    value: "border-stone-950",
    styles:
      "border-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets border color to stone-950",
  },
  {
    label: "border-(<custom-property>)",
    value: "border-(<custom-property>)",
    styles: "border-color: var(<custom-property>);",
    description: "Sets border color using a CSS custom property",
  },
  {
    label: "border-[<value>]",
    value: "border-[<value>]",
    styles: "border-color: <value>;",
    description: "Sets border color using an arbitrary CSS value",
  },
  {
    label: "border-x-inherit",
    value: "border-x-inherit",
    styles: "border-inline-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-x-current",
    value: "border-x-current",
    styles: "border-inline-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-x-transparent",
    value: "border-x-transparent",
    styles: "border-inline-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-x-black",
    value: "border-x-black",
    styles: "border-inline-color: var(--color-black); /* #000 */",
    description: "Sets horizontal (left and right) border color to black",
  },
  {
    label: "border-x-white",
    value: "border-x-white",
    styles: "border-inline-color: var(--color-white); /* #fff */",
    description: "Sets horizontal (left and right) border color to white",
  },
  {
    label: "border-x-red-50",
    value: "border-x-red-50",
    styles:
      "border-inline-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets horizontal (left and right) border color to red-50",
  },
  {
    label: "border-x-red-100",
    value: "border-x-red-100",
    styles:
      "border-inline-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets horizontal (left and right) border color to red-100",
  },
  {
    label: "border-x-red-200",
    value: "border-x-red-200",
    styles:
      "border-inline-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets horizontal (left and right) border color to red-200",
  },
  {
    label: "border-x-red-300",
    value: "border-x-red-300",
    styles:
      "border-inline-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets horizontal (left and right) border color to red-300",
  },
  {
    label: "border-x-red-400",
    value: "border-x-red-400",
    styles:
      "border-inline-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets horizontal (left and right) border color to red-400",
  },
  {
    label: "border-x-red-500",
    value: "border-x-red-500",
    styles:
      "border-inline-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets horizontal (left and right) border color to red-500",
  },
  {
    label: "border-x-red-600",
    value: "border-x-red-600",
    styles:
      "border-inline-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets horizontal (left and right) border color to red-600",
  },
  {
    label: "border-x-red-700",
    value: "border-x-red-700",
    styles:
      "border-inline-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets horizontal (left and right) border color to red-700",
  },
  {
    label: "border-x-red-800",
    value: "border-x-red-800",
    styles:
      "border-inline-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets horizontal (left and right) border color to red-800",
  },
  {
    label: "border-x-red-900",
    value: "border-x-red-900",
    styles:
      "border-inline-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets horizontal (left and right) border color to red-900",
  },
  {
    label: "border-x-red-950",
    value: "border-x-red-950",
    styles:
      "border-inline-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets horizontal (left and right) border color to red-950",
  },
  {
    label: "border-x-orange-50",
    value: "border-x-orange-50",
    styles:
      "border-inline-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets horizontal (left and right) border color to orange-50",
  },
  {
    label: "border-x-orange-100",
    value: "border-x-orange-100",
    styles:
      "border-inline-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets horizontal (left and right) border color to orange-100",
  },
  {
    label: "border-x-orange-200",
    value: "border-x-orange-200",
    styles:
      "border-inline-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets horizontal (left and right) border color to orange-200",
  },
  {
    label: "border-x-orange-300",
    value: "border-x-orange-300",
    styles:
      "border-inline-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets horizontal (left and right) border color to orange-300",
  },
  {
    label: "border-x-orange-400",
    value: "border-x-orange-400",
    styles:
      "border-inline-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets horizontal (left and right) border color to orange-400",
  },
  {
    label: "border-x-orange-500",
    value: "border-x-orange-500",
    styles:
      "border-inline-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets horizontal (left and right) border color to orange-500",
  },
  {
    label: "border-x-orange-600",
    value: "border-x-orange-600",
    styles:
      "border-inline-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets horizontal (left and right) border color to orange-600",
  },
  {
    label: "border-x-orange-700",
    value: "border-x-orange-700",
    styles:
      "border-inline-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets horizontal (left and right) border color to orange-700",
  },
  {
    label: "border-x-orange-800",
    value: "border-x-orange-800",
    styles:
      "border-inline-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets horizontal (left and right) border color to orange-800",
  },
  {
    label: "border-x-orange-900",
    value: "border-x-orange-900",
    styles:
      "border-inline-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets horizontal (left and right) border color to orange-900",
  },
  {
    label: "border-x-orange-950",
    value: "border-x-orange-950",
    styles:
      "border-inline-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets horizontal (left and right) border color to orange-950",
  },
  {
    label: "border-x-amber-50",
    value: "border-x-amber-50",
    styles:
      "border-inline-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets horizontal (left and right) border color to amber-50",
  },
  {
    label: "border-x-amber-100",
    value: "border-x-amber-100",
    styles:
      "border-inline-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets horizontal (left and right) border color to amber-100",
  },
  {
    label: "border-x-amber-200",
    value: "border-x-amber-200",
    styles:
      "border-inline-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets horizontal (left and right) border color to amber-200",
  },
  {
    label: "border-x-amber-300",
    value: "border-x-amber-300",
    styles:
      "border-inline-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets horizontal (left and right) border color to amber-300",
  },
  {
    label: "border-x-amber-400",
    value: "border-x-amber-400",
    styles:
      "border-inline-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets horizontal (left and right) border color to amber-400",
  },
  {
    label: "border-x-amber-500",
    value: "border-x-amber-500",
    styles:
      "border-inline-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets horizontal (left and right) border color to amber-500",
  },
  {
    label: "border-x-amber-600",
    value: "border-x-amber-600",
    styles:
      "border-inline-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets horizontal (left and right) border color to amber-600",
  },
  {
    label: "border-x-amber-700",
    value: "border-x-amber-700",
    styles:
      "border-inline-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets horizontal (left and right) border color to amber-700",
  },
  {
    label: "border-x-amber-800",
    value: "border-x-amber-800",
    styles:
      "border-inline-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets horizontal (left and right) border color to amber-800",
  },
  {
    label: "border-x-amber-900",
    value: "border-x-amber-900",
    styles:
      "border-inline-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets horizontal (left and right) border color to amber-900",
  },
  {
    label: "border-x-amber-950",
    value: "border-x-amber-950",
    styles:
      "border-inline-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets horizontal (left and right) border color to amber-950",
  },
  {
    label: "border-x-yellow-50",
    value: "border-x-yellow-50",
    styles:
      "border-inline-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets horizontal (left and right) border color to yellow-50",
  },
  {
    label: "border-x-yellow-100",
    value: "border-x-yellow-100",
    styles:
      "border-inline-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets horizontal (left and right) border color to yellow-100",
  },
  {
    label: "border-x-yellow-200",
    value: "border-x-yellow-200",
    styles:
      "border-inline-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets horizontal (left and right) border color to yellow-200",
  },
  {
    label: "border-x-yellow-300",
    value: "border-x-yellow-300",
    styles:
      "border-inline-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets horizontal (left and right) border color to yellow-300",
  },
  {
    label: "border-x-yellow-400",
    value: "border-x-yellow-400",
    styles:
      "border-inline-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets horizontal (left and right) border color to yellow-400",
  },
  {
    label: "border-x-yellow-500",
    value: "border-x-yellow-500",
    styles:
      "border-inline-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets horizontal (left and right) border color to yellow-500",
  },
  {
    label: "border-x-yellow-600",
    value: "border-x-yellow-600",
    styles:
      "border-inline-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets horizontal (left and right) border color to yellow-600",
  },
  {
    label: "border-x-yellow-700",
    value: "border-x-yellow-700",
    styles:
      "border-inline-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets horizontal (left and right) border color to yellow-700",
  },
  {
    label: "border-x-yellow-800",
    value: "border-x-yellow-800",
    styles:
      "border-inline-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets horizontal (left and right) border color to yellow-800",
  },
  {
    label: "border-x-yellow-900",
    value: "border-x-yellow-900",
    styles:
      "border-inline-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets horizontal (left and right) border color to yellow-900",
  },
  {
    label: "border-x-yellow-950",
    value: "border-x-yellow-950",
    styles:
      "border-inline-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets horizontal (left and right) border color to yellow-950",
  },
  {
    label: "border-x-lime-50",
    value: "border-x-lime-50",
    styles:
      "border-inline-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets horizontal (left and right) border color to lime-50",
  },
  {
    label: "border-x-lime-100",
    value: "border-x-lime-100",
    styles:
      "border-inline-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets horizontal (left and right) border color to lime-100",
  },
  {
    label: "border-x-lime-200",
    value: "border-x-lime-200",
    styles:
      "border-inline-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets horizontal (left and right) border color to lime-200",
  },
  {
    label: "border-x-lime-300",
    value: "border-x-lime-300",
    styles:
      "border-inline-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets horizontal (left and right) border color to lime-300",
  },
  {
    label: "border-x-lime-400",
    value: "border-x-lime-400",
    styles:
      "border-inline-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets horizontal (left and right) border color to lime-400",
  },
  {
    label: "border-x-lime-500",
    value: "border-x-lime-500",
    styles:
      "border-inline-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets horizontal (left and right) border color to lime-500",
  },
  {
    label: "border-x-lime-600",
    value: "border-x-lime-600",
    styles:
      "border-inline-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets horizontal (left and right) border color to lime-600",
  },
  {
    label: "border-x-lime-700",
    value: "border-x-lime-700",
    styles:
      "border-inline-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets horizontal (left and right) border color to lime-700",
  },
  {
    label: "border-x-lime-800",
    value: "border-x-lime-800",
    styles:
      "border-inline-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets horizontal (left and right) border color to lime-800",
  },
  {
    label: "border-x-lime-900",
    value: "border-x-lime-900",
    styles:
      "border-inline-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets horizontal (left and right) border color to lime-900",
  },
  {
    label: "border-x-lime-950",
    value: "border-x-lime-950",
    styles:
      "border-inline-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets horizontal (left and right) border color to lime-950",
  },
  {
    label: "border-x-green-50",
    value: "border-x-green-50",
    styles:
      "border-inline-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets horizontal (left and right) border color to green-50",
  },
  {
    label: "border-x-green-100",
    value: "border-x-green-100",
    styles:
      "border-inline-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets horizontal (left and right) border color to green-100",
  },
  {
    label: "border-x-green-200",
    value: "border-x-green-200",
    styles:
      "border-inline-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets horizontal (left and right) border color to green-200",
  },
  {
    label: "border-x-green-300",
    value: "border-x-green-300",
    styles:
      "border-inline-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets horizontal (left and right) border color to green-300",
  },
  {
    label: "border-x-green-400",
    value: "border-x-green-400",
    styles:
      "border-inline-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets horizontal (left and right) border color to green-400",
  },
  {
    label: "border-x-green-500",
    value: "border-x-green-500",
    styles:
      "border-inline-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets horizontal (left and right) border color to green-500",
  },
  {
    label: "border-x-green-600",
    value: "border-x-green-600",
    styles:
      "border-inline-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets horizontal (left and right) border color to green-600",
  },
  {
    label: "border-x-green-700",
    value: "border-x-green-700",
    styles:
      "border-inline-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets horizontal (left and right) border color to green-700",
  },
  {
    label: "border-x-green-800",
    value: "border-x-green-800",
    styles:
      "border-inline-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets horizontal (left and right) border color to green-800",
  },
  {
    label: "border-x-green-900",
    value: "border-x-green-900",
    styles:
      "border-inline-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets horizontal (left and right) border color to green-900",
  },
  {
    label: "border-x-green-950",
    value: "border-x-green-950",
    styles:
      "border-inline-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets horizontal (left and right) border color to green-950",
  },
  {
    label: "border-x-emerald-50",
    value: "border-x-emerald-50",
    styles:
      "border-inline-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets horizontal (left and right) border color to emerald-50",
  },
  {
    label: "border-x-emerald-100",
    value: "border-x-emerald-100",
    styles:
      "border-inline-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets horizontal (left and right) border color to emerald-100",
  },
  {
    label: "border-x-emerald-200",
    value: "border-x-emerald-200",
    styles:
      "border-inline-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets horizontal (left and right) border color to emerald-200",
  },
  {
    label: "border-x-emerald-300",
    value: "border-x-emerald-300",
    styles:
      "border-inline-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets horizontal (left and right) border color to emerald-300",
  },
  {
    label: "border-x-emerald-400",
    value: "border-x-emerald-400",
    styles:
      "border-inline-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets horizontal (left and right) border color to emerald-400",
  },
  {
    label: "border-x-emerald-500",
    value: "border-x-emerald-500",
    styles:
      "border-inline-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets horizontal (left and right) border color to emerald-500",
  },
  {
    label: "border-x-emerald-600",
    value: "border-x-emerald-600",
    styles:
      "border-inline-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets horizontal (left and right) border color to emerald-600",
  },
  {
    label: "border-x-emerald-700",
    value: "border-x-emerald-700",
    styles:
      "border-inline-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets horizontal (left and right) border color to emerald-700",
  },
  {
    label: "border-x-emerald-800",
    value: "border-x-emerald-800",
    styles:
      "border-inline-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets horizontal (left and right) border color to emerald-800",
  },
  {
    label: "border-x-emerald-900",
    value: "border-x-emerald-900",
    styles:
      "border-inline-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets horizontal (left and right) border color to emerald-900",
  },
  {
    label: "border-x-emerald-950",
    value: "border-x-emerald-950",
    styles:
      "border-inline-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets horizontal (left and right) border color to emerald-950",
  },
  {
    label: "border-x-teal-50",
    value: "border-x-teal-50",
    styles:
      "border-inline-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets horizontal (left and right) border color to teal-50",
  },
  {
    label: "border-x-teal-100",
    value: "border-x-teal-100",
    styles:
      "border-inline-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets horizontal (left and right) border color to teal-100",
  },
  {
    label: "border-x-teal-200",
    value: "border-x-teal-200",
    styles:
      "border-inline-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets horizontal (left and right) border color to teal-200",
  },
  {
    label: "border-x-teal-300",
    value: "border-x-teal-300",
    styles:
      "border-inline-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets horizontal (left and right) border color to teal-300",
  },
  {
    label: "border-x-teal-400",
    value: "border-x-teal-400",
    styles:
      "border-inline-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets horizontal (left and right) border color to teal-400",
  },
  {
    label: "border-x-teal-500",
    value: "border-x-teal-500",
    styles:
      "border-inline-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets horizontal (left and right) border color to teal-500",
  },
  {
    label: "border-x-teal-600",
    value: "border-x-teal-600",
    styles:
      "border-inline-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets horizontal (left and right) border color to teal-600",
  },
  {
    label: "border-x-teal-700",
    value: "border-x-teal-700",
    styles:
      "border-inline-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets horizontal (left and right) border color to teal-700",
  },
  {
    label: "border-x-teal-800",
    value: "border-x-teal-800",
    styles:
      "border-inline-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets horizontal (left and right) border color to teal-800",
  },
  {
    label: "border-x-teal-900",
    value: "border-x-teal-900",
    styles:
      "border-inline-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets horizontal (left and right) border color to teal-900",
  },
  {
    label: "border-x-teal-950",
    value: "border-x-teal-950",
    styles:
      "border-inline-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets horizontal (left and right) border color to teal-950",
  },
  {
    label: "border-x-cyan-50",
    value: "border-x-cyan-50",
    styles:
      "border-inline-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets horizontal (left and right) border color to cyan-50",
  },
  {
    label: "border-x-cyan-100",
    value: "border-x-cyan-100",
    styles:
      "border-inline-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets horizontal (left and right) border color to cyan-100",
  },
  {
    label: "border-x-cyan-200",
    value: "border-x-cyan-200",
    styles:
      "border-inline-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets horizontal (left and right) border color to cyan-200",
  },
  {
    label: "border-x-cyan-300",
    value: "border-x-cyan-300",
    styles:
      "border-inline-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets horizontal (left and right) border color to cyan-300",
  },
  {
    label: "border-x-cyan-400",
    value: "border-x-cyan-400",
    styles:
      "border-inline-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets horizontal (left and right) border color to cyan-400",
  },
  {
    label: "border-x-cyan-500",
    value: "border-x-cyan-500",
    styles:
      "border-inline-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets horizontal (left and right) border color to cyan-500",
  },
  {
    label: "border-x-cyan-600",
    value: "border-x-cyan-600",
    styles:
      "border-inline-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets horizontal (left and right) border color to cyan-600",
  },
  {
    label: "border-x-cyan-700",
    value: "border-x-cyan-700",
    styles:
      "border-inline-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets horizontal (left and right) border color to cyan-700",
  },
  {
    label: "border-x-cyan-800",
    value: "border-x-cyan-800",
    styles:
      "border-inline-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets horizontal (left and right) border color to cyan-800",
  },
  {
    label: "border-x-cyan-900",
    value: "border-x-cyan-900",
    styles:
      "border-inline-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets horizontal (left and right) border color to cyan-900",
  },
  {
    label: "border-x-cyan-950",
    value: "border-x-cyan-950",
    styles:
      "border-inline-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets horizontal (left and right) border color to cyan-950",
  },
  {
    label: "border-x-sky-50",
    value: "border-x-sky-50",
    styles:
      "border-inline-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets horizontal (left and right) border color to sky-50",
  },
  {
    label: "border-x-sky-100",
    value: "border-x-sky-100",
    styles:
      "border-inline-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets horizontal (left and right) border color to sky-100",
  },
  {
    label: "border-x-sky-200",
    value: "border-x-sky-200",
    styles:
      "border-inline-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets horizontal (left and right) border color to sky-200",
  },
  {
    label: "border-x-sky-300",
    value: "border-x-sky-300",
    styles:
      "border-inline-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets horizontal (left and right) border color to sky-300",
  },
  {
    label: "border-x-sky-400",
    value: "border-x-sky-400",
    styles:
      "border-inline-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets horizontal (left and right) border color to sky-400",
  },
  {
    label: "border-x-sky-500",
    value: "border-x-sky-500",
    styles:
      "border-inline-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets horizontal (left and right) border color to sky-500",
  },
  {
    label: "border-x-sky-600",
    value: "border-x-sky-600",
    styles:
      "border-inline-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets horizontal (left and right) border color to sky-600",
  },
  {
    label: "border-x-sky-700",
    value: "border-x-sky-700",
    styles:
      "border-inline-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets horizontal (left and right) border color to sky-700",
  },
  {
    label: "border-x-sky-800",
    value: "border-x-sky-800",
    styles:
      "border-inline-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets horizontal (left and right) border color to sky-800",
  },
  {
    label: "border-x-sky-900",
    value: "border-x-sky-900",
    styles:
      "border-inline-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets horizontal (left and right) border color to sky-900",
  },
  {
    label: "border-x-sky-950",
    value: "border-x-sky-950",
    styles:
      "border-inline-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets horizontal (left and right) border color to sky-950",
  },
  {
    label: "border-x-blue-50",
    value: "border-x-blue-50",
    styles:
      "border-inline-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets horizontal (left and right) border color to blue-50",
  },
  {
    label: "border-x-blue-100",
    value: "border-x-blue-100",
    styles:
      "border-inline-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets horizontal (left and right) border color to blue-100",
  },
  {
    label: "border-x-blue-200",
    value: "border-x-blue-200",
    styles:
      "border-inline-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets horizontal (left and right) border color to blue-200",
  },
  {
    label: "border-x-blue-300",
    value: "border-x-blue-300",
    styles:
      "border-inline-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets horizontal (left and right) border color to blue-300",
  },
  {
    label: "border-x-blue-400",
    value: "border-x-blue-400",
    styles:
      "border-inline-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets horizontal (left and right) border color to blue-400",
  },
  {
    label: "border-x-blue-500",
    value: "border-x-blue-500",
    styles:
      "border-inline-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets horizontal (left and right) border color to blue-500",
  },
  {
    label: "border-x-blue-600",
    value: "border-x-blue-600",
    styles:
      "border-inline-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets horizontal (left and right) border color to blue-600",
  },
  {
    label: "border-x-blue-700",
    value: "border-x-blue-700",
    styles:
      "border-inline-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets horizontal (left and right) border color to blue-700",
  },
  {
    label: "border-x-blue-800",
    value: "border-x-blue-800",
    styles:
      "border-inline-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets horizontal (left and right) border color to blue-800",
  },
  {
    label: "border-x-blue-900",
    value: "border-x-blue-900",
    styles:
      "border-inline-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets horizontal (left and right) border color to blue-900",
  },
  {
    label: "border-x-blue-950",
    value: "border-x-blue-950",
    styles:
      "border-inline-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets horizontal (left and right) border color to blue-950",
  },
  {
    label: "border-x-indigo-50",
    value: "border-x-indigo-50",
    styles:
      "border-inline-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets horizontal (left and right) border color to indigo-50",
  },
  {
    label: "border-x-indigo-100",
    value: "border-x-indigo-100",
    styles:
      "border-inline-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets horizontal (left and right) border color to indigo-100",
  },
  {
    label: "border-x-indigo-200",
    value: "border-x-indigo-200",
    styles:
      "border-inline-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets horizontal (left and right) border color to indigo-200",
  },
  {
    label: "border-x-indigo-300",
    value: "border-x-indigo-300",
    styles:
      "border-inline-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets horizontal (left and right) border color to indigo-300",
  },
  {
    label: "border-x-indigo-400",
    value: "border-x-indigo-400",
    styles:
      "border-inline-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets horizontal (left and right) border color to indigo-400",
  },
  {
    label: "border-x-indigo-500",
    value: "border-x-indigo-500",
    styles:
      "border-inline-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets horizontal (left and right) border color to indigo-500",
  },
  {
    label: "border-x-indigo-600",
    value: "border-x-indigo-600",
    styles:
      "border-inline-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets horizontal (left and right) border color to indigo-600",
  },
  {
    label: "border-x-indigo-700",
    value: "border-x-indigo-700",
    styles:
      "border-inline-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets horizontal (left and right) border color to indigo-700",
  },
  {
    label: "border-x-indigo-800",
    value: "border-x-indigo-800",
    styles:
      "border-inline-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets horizontal (left and right) border color to indigo-800",
  },
  {
    label: "border-x-indigo-900",
    value: "border-x-indigo-900",
    styles:
      "border-inline-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets horizontal (left and right) border color to indigo-900",
  },
  {
    label: "border-x-indigo-950",
    value: "border-x-indigo-950",
    styles:
      "border-inline-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets horizontal (left and right) border color to indigo-950",
  },
  {
    label: "border-x-violet-50",
    value: "border-x-violet-50",
    styles:
      "border-inline-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets horizontal (left and right) border color to violet-50",
  },
  {
    label: "border-x-violet-100",
    value: "border-x-violet-100",
    styles:
      "border-inline-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets horizontal (left and right) border color to violet-100",
  },
  {
    label: "border-x-violet-200",
    value: "border-x-violet-200",
    styles:
      "border-inline-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets horizontal (left and right) border color to violet-200",
  },
  {
    label: "border-x-violet-300",
    value: "border-x-violet-300",
    styles:
      "border-inline-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets horizontal (left and right) border color to violet-300",
  },
  {
    label: "border-x-violet-400",
    value: "border-x-violet-400",
    styles:
      "border-inline-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets horizontal (left and right) border color to violet-400",
  },
  {
    label: "border-x-violet-500",
    value: "border-x-violet-500",
    styles:
      "border-inline-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets horizontal (left and right) border color to violet-500",
  },
  {
    label: "border-x-violet-600",
    value: "border-x-violet-600",
    styles:
      "border-inline-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets horizontal (left and right) border color to violet-600",
  },
  {
    label: "border-x-violet-700",
    value: "border-x-violet-700",
    styles:
      "border-inline-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets horizontal (left and right) border color to violet-700",
  },
  {
    label: "border-x-violet-800",
    value: "border-x-violet-800",
    styles:
      "border-inline-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets horizontal (left and right) border color to violet-800",
  },
  {
    label: "border-x-violet-900",
    value: "border-x-violet-900",
    styles:
      "border-inline-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets horizontal (left and right) border color to violet-900",
  },
  {
    label: "border-x-violet-950",
    value: "border-x-violet-950",
    styles:
      "border-inline-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets horizontal (left and right) border color to violet-950",
  },
  {
    label: "border-x-purple-50",
    value: "border-x-purple-50",
    styles:
      "border-inline-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets horizontal (left and right) border color to purple-50",
  },
  {
    label: "border-x-purple-100",
    value: "border-x-purple-100",
    styles:
      "border-inline-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets horizontal (left and right) border color to purple-100",
  },
  {
    label: "border-x-purple-200",
    value: "border-x-purple-200",
    styles:
      "border-inline-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets horizontal (left and right) border color to purple-200",
  },
  {
    label: "border-x-purple-300",
    value: "border-x-purple-300",
    styles:
      "border-inline-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets horizontal (left and right) border color to purple-300",
  },
  {
    label: "border-x-purple-400",
    value: "border-x-purple-400",
    styles:
      "border-inline-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets horizontal (left and right) border color to purple-400",
  },
  {
    label: "border-x-purple-500",
    value: "border-x-purple-500",
    styles:
      "border-inline-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets horizontal (left and right) border color to purple-500",
  },
  {
    label: "border-x-purple-600",
    value: "border-x-purple-600",
    styles:
      "border-inline-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets horizontal (left and right) border color to purple-600",
  },
  {
    label: "border-x-purple-700",
    value: "border-x-purple-700",
    styles:
      "border-inline-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets horizontal (left and right) border color to purple-700",
  },
  {
    label: "border-x-purple-800",
    value: "border-x-purple-800",
    styles:
      "border-inline-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets horizontal (left and right) border color to purple-800",
  },
  {
    label: "border-x-purple-900",
    value: "border-x-purple-900",
    styles:
      "border-inline-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets horizontal (left and right) border color to purple-900",
  },
  {
    label: "border-x-purple-950",
    value: "border-x-purple-950",
    styles:
      "border-inline-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets horizontal (left and right) border color to purple-950",
  },
  {
    label: "border-x-fuchsia-50",
    value: "border-x-fuchsia-50",
    styles:
      "border-inline-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets horizontal (left and right) border color to fuchsia-50",
  },
  {
    label: "border-x-fuchsia-100",
    value: "border-x-fuchsia-100",
    styles:
      "border-inline-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets horizontal (left and right) border color to fuchsia-100",
  },
  {
    label: "border-x-fuchsia-200",
    value: "border-x-fuchsia-200",
    styles:
      "border-inline-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets horizontal (left and right) border color to fuchsia-200",
  },
  {
    label: "border-x-fuchsia-300",
    value: "border-x-fuchsia-300",
    styles:
      "border-inline-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets horizontal (left and right) border color to fuchsia-300",
  },
  {
    label: "border-x-fuchsia-400",
    value: "border-x-fuchsia-400",
    styles:
      "border-inline-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets horizontal (left and right) border color to fuchsia-400",
  },
  {
    label: "border-x-fuchsia-500",
    value: "border-x-fuchsia-500",
    styles:
      "border-inline-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets horizontal (left and right) border color to fuchsia-500",
  },
  {
    label: "border-x-fuchsia-600",
    value: "border-x-fuchsia-600",
    styles:
      "border-inline-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets horizontal (left and right) border color to fuchsia-600",
  },
  {
    label: "border-x-fuchsia-700",
    value: "border-x-fuchsia-700",
    styles:
      "border-inline-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets horizontal (left and right) border color to fuchsia-700",
  },
  {
    label: "border-x-fuchsia-800",
    value: "border-x-fuchsia-800",
    styles:
      "border-inline-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets horizontal (left and right) border color to fuchsia-800",
  },
  {
    label: "border-x-fuchsia-900",
    value: "border-x-fuchsia-900",
    styles:
      "border-inline-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets horizontal (left and right) border color to fuchsia-900",
  },
  {
    label: "border-x-fuchsia-950",
    value: "border-x-fuchsia-950",
    styles:
      "border-inline-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets horizontal (left and right) border color to fuchsia-950",
  },
  {
    label: "border-x-pink-50",
    value: "border-x-pink-50",
    styles:
      "border-inline-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets horizontal (left and right) border color to pink-50",
  },
  {
    label: "border-x-pink-100",
    value: "border-x-pink-100",
    styles:
      "border-inline-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets horizontal (left and right) border color to pink-100",
  },
  {
    label: "border-x-pink-200",
    value: "border-x-pink-200",
    styles:
      "border-inline-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets horizontal (left and right) border color to pink-200",
  },
  {
    label: "border-x-pink-300",
    value: "border-x-pink-300",
    styles:
      "border-inline-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets horizontal (left and right) border color to pink-300",
  },
  {
    label: "border-x-pink-400",
    value: "border-x-pink-400",
    styles:
      "border-inline-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets horizontal (left and right) border color to pink-400",
  },
  {
    label: "border-x-pink-500",
    value: "border-x-pink-500",
    styles:
      "border-inline-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets horizontal (left and right) border color to pink-500",
  },
  {
    label: "border-x-pink-600",
    value: "border-x-pink-600",
    styles:
      "border-inline-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets horizontal (left and right) border color to pink-600",
  },
  {
    label: "border-x-pink-700",
    value: "border-x-pink-700",
    styles:
      "border-inline-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets horizontal (left and right) border color to pink-700",
  },
  {
    label: "border-x-pink-800",
    value: "border-x-pink-800",
    styles:
      "border-inline-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets horizontal (left and right) border color to pink-800",
  },
  {
    label: "border-x-pink-900",
    value: "border-x-pink-900",
    styles:
      "border-inline-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets horizontal (left and right) border color to pink-900",
  },
  {
    label: "border-x-pink-950",
    value: "border-x-pink-950",
    styles:
      "border-inline-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets horizontal (left and right) border color to pink-950",
  },
  {
    label: "border-x-rose-50",
    value: "border-x-rose-50",
    styles:
      "border-inline-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets horizontal (left and right) border color to rose-50",
  },
  {
    label: "border-x-rose-100",
    value: "border-x-rose-100",
    styles:
      "border-inline-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets horizontal (left and right) border color to rose-100",
  },
  {
    label: "border-x-rose-200",
    value: "border-x-rose-200",
    styles:
      "border-inline-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets horizontal (left and right) border color to rose-200",
  },
  {
    label: "border-x-rose-300",
    value: "border-x-rose-300",
    styles:
      "border-inline-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets horizontal (left and right) border color to rose-300",
  },
  {
    label: "border-x-rose-400",
    value: "border-x-rose-400",
    styles:
      "border-inline-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets horizontal (left and right) border color to rose-400",
  },
  {
    label: "border-x-rose-500",
    value: "border-x-rose-500",
    styles:
      "border-inline-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets horizontal (left and right) border color to rose-500",
  },
  {
    label: "border-x-rose-600",
    value: "border-x-rose-600",
    styles:
      "border-inline-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets horizontal (left and right) border color to rose-600",
  },
  {
    label: "border-x-rose-700",
    value: "border-x-rose-700",
    styles:
      "border-inline-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets horizontal (left and right) border color to rose-700",
  },
  {
    label: "border-x-rose-800",
    value: "border-x-rose-800",
    styles:
      "border-inline-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets horizontal (left and right) border color to rose-800",
  },
  {
    label: "border-x-rose-900",
    value: "border-x-rose-900",
    styles:
      "border-inline-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets horizontal (left and right) border color to rose-900",
  },
  {
    label: "border-x-rose-950",
    value: "border-x-rose-950",
    styles:
      "border-inline-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets horizontal (left and right) border color to rose-950",
  },
  {
    label: "border-x-slate-50",
    value: "border-x-slate-50",
    styles:
      "border-inline-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets horizontal (left and right) border color to slate-50",
  },
  {
    label: "border-x-slate-100",
    value: "border-x-slate-100",
    styles:
      "border-inline-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets horizontal (left and right) border color to slate-100",
  },
  {
    label: "border-x-slate-200",
    value: "border-x-slate-200",
    styles:
      "border-inline-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets horizontal (left and right) border color to slate-200",
  },
  {
    label: "border-x-slate-300",
    value: "border-x-slate-300",
    styles:
      "border-inline-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets horizontal (left and right) border color to slate-300",
  },
  {
    label: "border-x-slate-400",
    value: "border-x-slate-400",
    styles:
      "border-inline-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets horizontal (left and right) border color to slate-400",
  },
  {
    label: "border-x-slate-500",
    value: "border-x-slate-500",
    styles:
      "border-inline-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets horizontal (left and right) border color to slate-500",
  },
  {
    label: "border-x-slate-600",
    value: "border-x-slate-600",
    styles:
      "border-inline-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets horizontal (left and right) border color to slate-600",
  },
  {
    label: "border-x-slate-700",
    value: "border-x-slate-700",
    styles:
      "border-inline-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets horizontal (left and right) border color to slate-700",
  },
  {
    label: "border-x-slate-800",
    value: "border-x-slate-800",
    styles:
      "border-inline-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets horizontal (left and right) border color to slate-800",
  },
  {
    label: "border-x-slate-900",
    value: "border-x-slate-900",
    styles:
      "border-inline-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets horizontal (left and right) border color to slate-900",
  },
  {
    label: "border-x-slate-950",
    value: "border-x-slate-950",
    styles:
      "border-inline-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets horizontal (left and right) border color to slate-950",
  },
  {
    label: "border-x-gray-50",
    value: "border-x-gray-50",
    styles:
      "border-inline-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets horizontal (left and right) border color to gray-50",
  },
  {
    label: "border-x-gray-100",
    value: "border-x-gray-100",
    styles:
      "border-inline-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets horizontal (left and right) border color to gray-100",
  },
  {
    label: "border-x-gray-200",
    value: "border-x-gray-200",
    styles:
      "border-inline-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets horizontal (left and right) border color to gray-200",
  },
  {
    label: "border-x-gray-300",
    value: "border-x-gray-300",
    styles:
      "border-inline-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets horizontal (left and right) border color to gray-300",
  },
  {
    label: "border-x-gray-400",
    value: "border-x-gray-400",
    styles:
      "border-inline-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets horizontal (left and right) border color to gray-400",
  },
  {
    label: "border-x-gray-500",
    value: "border-x-gray-500",
    styles:
      "border-inline-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets horizontal (left and right) border color to gray-500",
  },
  {
    label: "border-x-gray-600",
    value: "border-x-gray-600",
    styles:
      "border-inline-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets horizontal (left and right) border color to gray-600",
  },
  {
    label: "border-x-gray-700",
    value: "border-x-gray-700",
    styles:
      "border-inline-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets horizontal (left and right) border color to gray-700",
  },
  {
    label: "border-x-gray-800",
    value: "border-x-gray-800",
    styles:
      "border-inline-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets horizontal (left and right) border color to gray-800",
  },
  {
    label: "border-x-gray-900",
    value: "border-x-gray-900",
    styles:
      "border-inline-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets horizontal (left and right) border color to gray-900",
  },
  {
    label: "border-x-gray-950",
    value: "border-x-gray-950",
    styles:
      "border-inline-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets horizontal (left and right) border color to gray-950",
  },
  {
    label: "border-x-zinc-50",
    value: "border-x-zinc-50",
    styles: "border-inline-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets horizontal (left and right) border color to zinc-50",
  },
  {
    label: "border-x-zinc-100",
    value: "border-x-zinc-100",
    styles:
      "border-inline-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets horizontal (left and right) border color to zinc-100",
  },
  {
    label: "border-x-zinc-200",
    value: "border-x-zinc-200",
    styles:
      "border-inline-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets horizontal (left and right) border color to zinc-200",
  },
  {
    label: "border-x-zinc-300",
    value: "border-x-zinc-300",
    styles:
      "border-inline-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets horizontal (left and right) border color to zinc-300",
  },
  {
    label: "border-x-zinc-400",
    value: "border-x-zinc-400",
    styles:
      "border-inline-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets horizontal (left and right) border color to zinc-400",
  },
  {
    label: "border-x-zinc-500",
    value: "border-x-zinc-500",
    styles:
      "border-inline-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets horizontal (left and right) border color to zinc-500",
  },
  {
    label: "border-x-zinc-600",
    value: "border-x-zinc-600",
    styles:
      "border-inline-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets horizontal (left and right) border color to zinc-600",
  },
  {
    label: "border-x-zinc-700",
    value: "border-x-zinc-700",
    styles:
      "border-inline-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets horizontal (left and right) border color to zinc-700",
  },
  {
    label: "border-x-zinc-800",
    value: "border-x-zinc-800",
    styles:
      "border-inline-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets horizontal (left and right) border color to zinc-800",
  },
  {
    label: "border-x-zinc-900",
    value: "border-x-zinc-900",
    styles:
      "border-inline-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets horizontal (left and right) border color to zinc-900",
  },
  {
    label: "border-x-zinc-950",
    value: "border-x-zinc-950",
    styles:
      "border-inline-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets horizontal (left and right) border color to zinc-950",
  },
  {
    label: "border-x-neutral-50",
    value: "border-x-neutral-50",
    styles:
      "border-inline-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-50",
  },
  {
    label: "border-x-neutral-100",
    value: "border-x-neutral-100",
    styles:
      "border-inline-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-100",
  },
  {
    label: "border-x-neutral-200",
    value: "border-x-neutral-200",
    styles:
      "border-inline-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-200",
  },
  {
    label: "border-x-neutral-300",
    value: "border-x-neutral-300",
    styles:
      "border-inline-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-300",
  },
  {
    label: "border-x-neutral-400",
    value: "border-x-neutral-400",
    styles:
      "border-inline-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-400",
  },
  {
    label: "border-x-neutral-500",
    value: "border-x-neutral-500",
    styles:
      "border-inline-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-500",
  },
  {
    label: "border-x-neutral-600",
    value: "border-x-neutral-600",
    styles:
      "border-inline-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-600",
  },
  {
    label: "border-x-neutral-700",
    value: "border-x-neutral-700",
    styles:
      "border-inline-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-700",
  },
  {
    label: "border-x-neutral-800",
    value: "border-x-neutral-800",
    styles:
      "border-inline-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-800",
  },
  {
    label: "border-x-neutral-900",
    value: "border-x-neutral-900",
    styles:
      "border-inline-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-900",
  },
  {
    label: "border-x-neutral-950",
    value: "border-x-neutral-950",
    styles:
      "border-inline-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets horizontal (left and right) border color to neutral-950",
  },
  {
    label: "border-x-stone-50",
    value: "border-x-stone-50",
    styles:
      "border-inline-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets horizontal (left and right) border color to stone-50",
  },
  {
    label: "border-x-stone-100",
    value: "border-x-stone-100",
    styles:
      "border-inline-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets horizontal (left and right) border color to stone-100",
  },
  {
    label: "border-x-stone-200",
    value: "border-x-stone-200",
    styles:
      "border-inline-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets horizontal (left and right) border color to stone-200",
  },
  {
    label: "border-x-stone-300",
    value: "border-x-stone-300",
    styles:
      "border-inline-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets horizontal (left and right) border color to stone-300",
  },
  {
    label: "border-x-stone-400",
    value: "border-x-stone-400",
    styles:
      "border-inline-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets horizontal (left and right) border color to stone-400",
  },
  {
    label: "border-x-stone-500",
    value: "border-x-stone-500",
    styles:
      "border-inline-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets horizontal (left and right) border color to stone-500",
  },
  {
    label: "border-x-stone-600",
    value: "border-x-stone-600",
    styles:
      "border-inline-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets horizontal (left and right) border color to stone-600",
  },
  {
    label: "border-x-stone-700",
    value: "border-x-stone-700",
    styles:
      "border-inline-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets horizontal (left and right) border color to stone-700",
  },
  {
    label: "border-x-stone-800",
    value: "border-x-stone-800",
    styles:
      "border-inline-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets horizontal (left and right) border color to stone-800",
  },
  {
    label: "border-x-stone-900",
    value: "border-x-stone-900",
    styles:
      "border-inline-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets horizontal (left and right) border color to stone-900",
  },
  {
    label: "border-x-stone-950",
    value: "border-x-stone-950",
    styles:
      "border-inline-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets horizontal (left and right) border color to stone-950",
  },
  {
    label: "border-x-(<custom-property>)",
    value: "border-x-(<custom-property>)",
    styles: "border-inline-color: var(<custom-property>);",
    description:
      "Sets horizontal (left and right) border color to (<custom-property>)",
  },
  {
    label: "border-x-[<value>]",
    value: "border-x-[<value>]",
    styles: "border-inline-color: <value>;",
    description: "Sets horizontal (left and right) border color to [<value>]",
  },
  {
    label: "border-y-inherit",
    value: "border-y-inherit",
    styles: "border-block-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-y-current",
    value: "border-y-current",
    styles: "border-block-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-y-transparent",
    value: "border-y-transparent",
    styles: "border-block-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-y-black",
    value: "border-y-black",
    styles: "border-block-color: var(--color-black); /* #000 */",
    description: "Sets vertical (top and bottom) border color to black",
  },
  {
    label: "border-y-white",
    value: "border-y-white",
    styles: "border-block-color: var(--color-white); /* #fff */",
    description: "Sets vertical (top and bottom) border color to white",
  },
  {
    label: "border-y-red-50",
    value: "border-y-red-50",
    styles:
      "border-block-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets vertical (top and bottom) border color to red-50",
  },
  {
    label: "border-y-red-100",
    value: "border-y-red-100",
    styles:
      "border-block-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets vertical (top and bottom) border color to red-100",
  },
  {
    label: "border-y-red-200",
    value: "border-y-red-200",
    styles:
      "border-block-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets vertical (top and bottom) border color to red-200",
  },
  {
    label: "border-y-red-300",
    value: "border-y-red-300",
    styles:
      "border-block-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets vertical (top and bottom) border color to red-300",
  },
  {
    label: "border-y-red-400",
    value: "border-y-red-400",
    styles:
      "border-block-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets vertical (top and bottom) border color to red-400",
  },
  {
    label: "border-y-red-500",
    value: "border-y-red-500",
    styles:
      "border-block-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets vertical (top and bottom) border color to red-500",
  },
  {
    label: "border-y-red-600",
    value: "border-y-red-600",
    styles:
      "border-block-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets vertical (top and bottom) border color to red-600",
  },
  {
    label: "border-y-red-700",
    value: "border-y-red-700",
    styles:
      "border-block-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets vertical (top and bottom) border color to red-700",
  },
  {
    label: "border-y-red-800",
    value: "border-y-red-800",
    styles:
      "border-block-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets vertical (top and bottom) border color to red-800",
  },
  {
    label: "border-y-red-900",
    value: "border-y-red-900",
    styles:
      "border-block-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets vertical (top and bottom) border color to red-900",
  },
  {
    label: "border-y-red-950",
    value: "border-y-red-950",
    styles:
      "border-block-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets vertical (top and bottom) border color to red-950",
  },
  {
    label: "border-y-orange-50",
    value: "border-y-orange-50",
    styles:
      "border-block-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets vertical (top and bottom) border color to orange-50",
  },
  {
    label: "border-y-orange-100",
    value: "border-y-orange-100",
    styles:
      "border-block-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets vertical (top and bottom) border color to orange-100",
  },
  {
    label: "border-y-orange-200",
    value: "border-y-orange-200",
    styles:
      "border-block-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets vertical (top and bottom) border color to orange-200",
  },
  {
    label: "border-y-orange-300",
    value: "border-y-orange-300",
    styles:
      "border-block-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets vertical (top and bottom) border color to orange-300",
  },
  {
    label: "border-y-orange-400",
    value: "border-y-orange-400",
    styles:
      "border-block-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets vertical (top and bottom) border color to orange-400",
  },
  {
    label: "border-y-orange-500",
    value: "border-y-orange-500",
    styles:
      "border-block-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets vertical (top and bottom) border color to orange-500",
  },
  {
    label: "border-y-orange-600",
    value: "border-y-orange-600",
    styles:
      "border-block-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets vertical (top and bottom) border color to orange-600",
  },
  {
    label: "border-y-orange-700",
    value: "border-y-orange-700",
    styles:
      "border-block-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets vertical (top and bottom) border color to orange-700",
  },
  {
    label: "border-y-orange-800",
    value: "border-y-orange-800",
    styles:
      "border-block-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets vertical (top and bottom) border color to orange-800",
  },
  {
    label: "border-y-orange-900",
    value: "border-y-orange-900",
    styles:
      "border-block-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets vertical (top and bottom) border color to orange-900",
  },
  {
    label: "border-y-orange-950",
    value: "border-y-orange-950",
    styles:
      "border-block-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets vertical (top and bottom) border color to orange-950",
  },
  {
    label: "border-y-amber-50",
    value: "border-y-amber-50",
    styles:
      "border-block-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets vertical (top and bottom) border color to amber-50",
  },
  {
    label: "border-y-amber-100",
    value: "border-y-amber-100",
    styles:
      "border-block-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets vertical (top and bottom) border color to amber-100",
  },
  {
    label: "border-y-amber-200",
    value: "border-y-amber-200",
    styles:
      "border-block-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets vertical (top and bottom) border color to amber-200",
  },
  {
    label: "border-y-amber-300",
    value: "border-y-amber-300",
    styles:
      "border-block-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets vertical (top and bottom) border color to amber-300",
  },
  {
    label: "border-y-amber-400",
    value: "border-y-amber-400",
    styles:
      "border-block-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets vertical (top and bottom) border color to amber-400",
  },
  {
    label: "border-y-amber-500",
    value: "border-y-amber-500",
    styles:
      "border-block-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets vertical (top and bottom) border color to amber-500",
  },
  {
    label: "border-y-amber-600",
    value: "border-y-amber-600",
    styles:
      "border-block-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets vertical (top and bottom) border color to amber-600",
  },
  {
    label: "border-y-amber-700",
    value: "border-y-amber-700",
    styles:
      "border-block-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets vertical (top and bottom) border color to amber-700",
  },
  {
    label: "border-y-amber-800",
    value: "border-y-amber-800",
    styles:
      "border-block-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets vertical (top and bottom) border color to amber-800",
  },
  {
    label: "border-y-amber-900",
    value: "border-y-amber-900",
    styles:
      "border-block-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets vertical (top and bottom) border color to amber-900",
  },
  {
    label: "border-y-amber-950",
    value: "border-y-amber-950",
    styles:
      "border-block-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets vertical (top and bottom) border color to amber-950",
  },
  {
    label: "border-y-yellow-50",
    value: "border-y-yellow-50",
    styles:
      "border-block-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets vertical (top and bottom) border color to yellow-50",
  },
  {
    label: "border-y-yellow-100",
    value: "border-y-yellow-100",
    styles:
      "border-block-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets vertical (top and bottom) border color to yellow-100",
  },
  {
    label: "border-y-yellow-200",
    value: "border-y-yellow-200",
    styles:
      "border-block-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets vertical (top and bottom) border color to yellow-200",
  },
  {
    label: "border-y-yellow-300",
    value: "border-y-yellow-300",
    styles:
      "border-block-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets vertical (top and bottom) border color to yellow-300",
  },
  {
    label: "border-y-yellow-400",
    value: "border-y-yellow-400",
    styles:
      "border-block-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets vertical (top and bottom) border color to yellow-400",
  },
  {
    label: "border-y-yellow-500",
    value: "border-y-yellow-500",
    styles:
      "border-block-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets vertical (top and bottom) border color to yellow-500",
  },
  {
    label: "border-y-yellow-600",
    value: "border-y-yellow-600",
    styles:
      "border-block-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets vertical (top and bottom) border color to yellow-600",
  },
  {
    label: "border-y-yellow-700",
    value: "border-y-yellow-700",
    styles:
      "border-block-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets vertical (top and bottom) border color to yellow-700",
  },
  {
    label: "border-y-yellow-800",
    value: "border-y-yellow-800",
    styles:
      "border-block-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets vertical (top and bottom) border color to yellow-800",
  },
  {
    label: "border-y-yellow-900",
    value: "border-y-yellow-900",
    styles:
      "border-block-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets vertical (top and bottom) border color to yellow-900",
  },
  {
    label: "border-y-yellow-950",
    value: "border-y-yellow-950",
    styles:
      "border-block-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets vertical (top and bottom) border color to yellow-950",
  },
  {
    label: "border-y-lime-50",
    value: "border-y-lime-50",
    styles:
      "border-block-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets vertical (top and bottom) border color to lime-50",
  },
  {
    label: "border-y-lime-100",
    value: "border-y-lime-100",
    styles:
      "border-block-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets vertical (top and bottom) border color to lime-100",
  },
  {
    label: "border-y-lime-200",
    value: "border-y-lime-200",
    styles:
      "border-block-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets vertical (top and bottom) border color to lime-200",
  },
  {
    label: "border-y-lime-300",
    value: "border-y-lime-300",
    styles:
      "border-block-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets vertical (top and bottom) border color to lime-300",
  },
  {
    label: "border-y-lime-400",
    value: "border-y-lime-400",
    styles:
      "border-block-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets vertical (top and bottom) border color to lime-400",
  },
  {
    label: "border-y-lime-500",
    value: "border-y-lime-500",
    styles:
      "border-block-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets vertical (top and bottom) border color to lime-500",
  },
  {
    label: "border-y-lime-600",
    value: "border-y-lime-600",
    styles:
      "border-block-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets vertical (top and bottom) border color to lime-600",
  },
  {
    label: "border-y-lime-700",
    value: "border-y-lime-700",
    styles:
      "border-block-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets vertical (top and bottom) border color to lime-700",
  },
  {
    label: "border-y-lime-800",
    value: "border-y-lime-800",
    styles:
      "border-block-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets vertical (top and bottom) border color to lime-800",
  },
  {
    label: "border-y-lime-900",
    value: "border-y-lime-900",
    styles:
      "border-block-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets vertical (top and bottom) border color to lime-900",
  },
  {
    label: "border-y-lime-950",
    value: "border-y-lime-950",
    styles:
      "border-block-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets vertical (top and bottom) border color to lime-950",
  },
  {
    label: "border-y-green-50",
    value: "border-y-green-50",
    styles:
      "border-block-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets vertical (top and bottom) border color to green-50",
  },
  {
    label: "border-y-green-100",
    value: "border-y-green-100",
    styles:
      "border-block-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets vertical (top and bottom) border color to green-100",
  },
  {
    label: "border-y-green-200",
    value: "border-y-green-200",
    styles:
      "border-block-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets vertical (top and bottom) border color to green-200",
  },
  {
    label: "border-y-green-300",
    value: "border-y-green-300",
    styles:
      "border-block-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets vertical (top and bottom) border color to green-300",
  },
  {
    label: "border-y-green-400",
    value: "border-y-green-400",
    styles:
      "border-block-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets vertical (top and bottom) border color to green-400",
  },
  {
    label: "border-y-green-500",
    value: "border-y-green-500",
    styles:
      "border-block-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets vertical (top and bottom) border color to green-500",
  },
  {
    label: "border-y-green-600",
    value: "border-y-green-600",
    styles:
      "border-block-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets vertical (top and bottom) border color to green-600",
  },
  {
    label: "border-y-green-700",
    value: "border-y-green-700",
    styles:
      "border-block-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets vertical (top and bottom) border color to green-700",
  },
  {
    label: "border-y-green-800",
    value: "border-y-green-800",
    styles:
      "border-block-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets vertical (top and bottom) border color to green-800",
  },
  {
    label: "border-y-green-900",
    value: "border-y-green-900",
    styles:
      "border-block-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets vertical (top and bottom) border color to green-900",
  },
  {
    label: "border-y-green-950",
    value: "border-y-green-950",
    styles:
      "border-block-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets vertical (top and bottom) border color to green-950",
  },
  {
    label: "border-y-emerald-50",
    value: "border-y-emerald-50",
    styles:
      "border-block-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets vertical (top and bottom) border color to emerald-50",
  },
  {
    label: "border-y-emerald-100",
    value: "border-y-emerald-100",
    styles:
      "border-block-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets vertical (top and bottom) border color to emerald-100",
  },
  {
    label: "border-y-emerald-200",
    value: "border-y-emerald-200",
    styles:
      "border-block-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets vertical (top and bottom) border color to emerald-200",
  },
  {
    label: "border-y-emerald-300",
    value: "border-y-emerald-300",
    styles:
      "border-block-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets vertical (top and bottom) border color to emerald-300",
  },
  {
    label: "border-y-emerald-400",
    value: "border-y-emerald-400",
    styles:
      "border-block-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets vertical (top and bottom) border color to emerald-400",
  },
  {
    label: "border-y-emerald-500",
    value: "border-y-emerald-500",
    styles:
      "border-block-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets vertical (top and bottom) border color to emerald-500",
  },
  {
    label: "border-y-emerald-600",
    value: "border-y-emerald-600",
    styles:
      "border-block-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets vertical (top and bottom) border color to emerald-600",
  },
  {
    label: "border-y-emerald-700",
    value: "border-y-emerald-700",
    styles:
      "border-block-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets vertical (top and bottom) border color to emerald-700",
  },
  {
    label: "border-y-emerald-800",
    value: "border-y-emerald-800",
    styles:
      "border-block-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets vertical (top and bottom) border color to emerald-800",
  },
  {
    label: "border-y-emerald-900",
    value: "border-y-emerald-900",
    styles:
      "border-block-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets vertical (top and bottom) border color to emerald-900",
  },
  {
    label: "border-y-emerald-950",
    value: "border-y-emerald-950",
    styles:
      "border-block-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets vertical (top and bottom) border color to emerald-950",
  },
  {
    label: "border-y-teal-50",
    value: "border-y-teal-50",
    styles:
      "border-block-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets vertical (top and bottom) border color to teal-50",
  },
  {
    label: "border-y-teal-100",
    value: "border-y-teal-100",
    styles:
      "border-block-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets vertical (top and bottom) border color to teal-100",
  },
  {
    label: "border-y-teal-200",
    value: "border-y-teal-200",
    styles:
      "border-block-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets vertical (top and bottom) border color to teal-200",
  },
  {
    label: "border-y-teal-300",
    value: "border-y-teal-300",
    styles:
      "border-block-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets vertical (top and bottom) border color to teal-300",
  },
  {
    label: "border-y-teal-400",
    value: "border-y-teal-400",
    styles:
      "border-block-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets vertical (top and bottom) border color to teal-400",
  },
  {
    label: "border-y-teal-500",
    value: "border-y-teal-500",
    styles:
      "border-block-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets vertical (top and bottom) border color to teal-500",
  },
  {
    label: "border-y-teal-600",
    value: "border-y-teal-600",
    styles:
      "border-block-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets vertical (top and bottom) border color to teal-600",
  },
  {
    label: "border-y-teal-700",
    value: "border-y-teal-700",
    styles:
      "border-block-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets vertical (top and bottom) border color to teal-700",
  },
  {
    label: "border-y-teal-800",
    value: "border-y-teal-800",
    styles:
      "border-block-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets vertical (top and bottom) border color to teal-800",
  },
  {
    label: "border-y-teal-900",
    value: "border-y-teal-900",
    styles:
      "border-block-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets vertical (top and bottom) border color to teal-900",
  },
  {
    label: "border-y-teal-950",
    value: "border-y-teal-950",
    styles:
      "border-block-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets vertical (top and bottom) border color to teal-950",
  },
  {
    label: "border-y-cyan-50",
    value: "border-y-cyan-50",
    styles:
      "border-block-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets vertical (top and bottom) border color to cyan-50",
  },
  {
    label: "border-y-cyan-100",
    value: "border-y-cyan-100",
    styles:
      "border-block-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets vertical (top and bottom) border color to cyan-100",
  },
  {
    label: "border-y-cyan-200",
    value: "border-y-cyan-200",
    styles:
      "border-block-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets vertical (top and bottom) border color to cyan-200",
  },
  {
    label: "border-y-cyan-300",
    value: "border-y-cyan-300",
    styles:
      "border-block-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets vertical (top and bottom) border color to cyan-300",
  },
  {
    label: "border-y-cyan-400",
    value: "border-y-cyan-400",
    styles:
      "border-block-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets vertical (top and bottom) border color to cyan-400",
  },
  {
    label: "border-y-cyan-500",
    value: "border-y-cyan-500",
    styles:
      "border-block-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets vertical (top and bottom) border color to cyan-500",
  },
  {
    label: "border-y-cyan-600",
    value: "border-y-cyan-600",
    styles:
      "border-block-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets vertical (top and bottom) border color to cyan-600",
  },
  {
    label: "border-y-cyan-700",
    value: "border-y-cyan-700",
    styles:
      "border-block-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets vertical (top and bottom) border color to cyan-700",
  },
  {
    label: "border-y-cyan-800",
    value: "border-y-cyan-800",
    styles:
      "border-block-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets vertical (top and bottom) border color to cyan-800",
  },
  {
    label: "border-y-cyan-900",
    value: "border-y-cyan-900",
    styles:
      "border-block-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets vertical (top and bottom) border color to cyan-900",
  },
  {
    label: "border-y-cyan-950",
    value: "border-y-cyan-950",
    styles:
      "border-block-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets vertical (top and bottom) border color to cyan-950",
  },
  {
    label: "border-y-sky-50",
    value: "border-y-sky-50",
    styles:
      "border-block-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets vertical (top and bottom) border color to sky-50",
  },
  {
    label: "border-y-sky-100",
    value: "border-y-sky-100",
    styles:
      "border-block-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets vertical (top and bottom) border color to sky-100",
  },
  {
    label: "border-y-sky-200",
    value: "border-y-sky-200",
    styles:
      "border-block-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets vertical (top and bottom) border color to sky-200",
  },
  {
    label: "border-y-sky-300",
    value: "border-y-sky-300",
    styles:
      "border-block-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets vertical (top and bottom) border color to sky-300",
  },
  {
    label: "border-y-sky-400",
    value: "border-y-sky-400",
    styles:
      "border-block-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets vertical (top and bottom) border color to sky-400",
  },
  {
    label: "border-y-sky-500",
    value: "border-y-sky-500",
    styles:
      "border-block-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets vertical (top and bottom) border color to sky-500",
  },
  {
    label: "border-y-sky-600",
    value: "border-y-sky-600",
    styles:
      "border-block-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets vertical (top and bottom) border color to sky-600",
  },
  {
    label: "border-y-sky-700",
    value: "border-y-sky-700",
    styles:
      "border-block-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets vertical (top and bottom) border color to sky-700",
  },
  {
    label: "border-y-sky-800",
    value: "border-y-sky-800",
    styles:
      "border-block-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets vertical (top and bottom) border color to sky-800",
  },
  {
    label: "border-y-sky-900",
    value: "border-y-sky-900",
    styles:
      "border-block-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets vertical (top and bottom) border color to sky-900",
  },
  {
    label: "border-y-sky-950",
    value: "border-y-sky-950",
    styles:
      "border-block-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets vertical (top and bottom) border color to sky-950",
  },
  {
    label: "border-y-blue-50",
    value: "border-y-blue-50",
    styles:
      "border-block-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets vertical (top and bottom) border color to blue-50",
  },
  {
    label: "border-y-blue-100",
    value: "border-y-blue-100",
    styles:
      "border-block-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets vertical (top and bottom) border color to blue-100",
  },
  {
    label: "border-y-blue-200",
    value: "border-y-blue-200",
    styles:
      "border-block-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets vertical (top and bottom) border color to blue-200",
  },
  {
    label: "border-y-blue-300",
    value: "border-y-blue-300",
    styles:
      "border-block-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets vertical (top and bottom) border color to blue-300",
  },
  {
    label: "border-y-blue-400",
    value: "border-y-blue-400",
    styles:
      "border-block-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets vertical (top and bottom) border color to blue-400",
  },
  {
    label: "border-y-blue-500",
    value: "border-y-blue-500",
    styles:
      "border-block-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets vertical (top and bottom) border color to blue-500",
  },
  {
    label: "border-y-blue-600",
    value: "border-y-blue-600",
    styles:
      "border-block-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets vertical (top and bottom) border color to blue-600",
  },
  {
    label: "border-y-blue-700",
    value: "border-y-blue-700",
    styles:
      "border-block-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets vertical (top and bottom) border color to blue-700",
  },
  {
    label: "border-y-blue-800",
    value: "border-y-blue-800",
    styles:
      "border-block-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets vertical (top and bottom) border color to blue-800",
  },
  {
    label: "border-y-blue-900",
    value: "border-y-blue-900",
    styles:
      "border-block-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets vertical (top and bottom) border color to blue-900",
  },
  {
    label: "border-y-blue-950",
    value: "border-y-blue-950",
    styles:
      "border-block-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets vertical (top and bottom) border color to blue-950",
  },
  {
    label: "border-y-indigo-50",
    value: "border-y-indigo-50",
    styles:
      "border-block-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets vertical (top and bottom) border color to indigo-50",
  },
  {
    label: "border-y-indigo-100",
    value: "border-y-indigo-100",
    styles:
      "border-block-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets vertical (top and bottom) border color to indigo-100",
  },
  {
    label: "border-y-indigo-200",
    value: "border-y-indigo-200",
    styles:
      "border-block-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets vertical (top and bottom) border color to indigo-200",
  },
  {
    label: "border-y-indigo-300",
    value: "border-y-indigo-300",
    styles:
      "border-block-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets vertical (top and bottom) border color to indigo-300",
  },
  {
    label: "border-y-indigo-400",
    value: "border-y-indigo-400",
    styles:
      "border-block-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets vertical (top and bottom) border color to indigo-400",
  },
  {
    label: "border-y-indigo-500",
    value: "border-y-indigo-500",
    styles:
      "border-block-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets vertical (top and bottom) border color to indigo-500",
  },
  {
    label: "border-y-indigo-600",
    value: "border-y-indigo-600",
    styles:
      "border-block-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets vertical (top and bottom) border color to indigo-600",
  },
  {
    label: "border-y-indigo-700",
    value: "border-y-indigo-700",
    styles:
      "border-block-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets vertical (top and bottom) border color to indigo-700",
  },
  {
    label: "border-y-indigo-800",
    value: "border-y-indigo-800",
    styles:
      "border-block-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets vertical (top and bottom) border color to indigo-800",
  },
  {
    label: "border-y-indigo-900",
    value: "border-y-indigo-900",
    styles:
      "border-block-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets vertical (top and bottom) border color to indigo-900",
  },
  {
    label: "border-y-indigo-950",
    value: "border-y-indigo-950",
    styles:
      "border-block-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets vertical (top and bottom) border color to indigo-950",
  },
  {
    label: "border-y-violet-50",
    value: "border-y-violet-50",
    styles:
      "border-block-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets vertical (top and bottom) border color to violet-50",
  },
  {
    label: "border-y-violet-100",
    value: "border-y-violet-100",
    styles:
      "border-block-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets vertical (top and bottom) border color to violet-100",
  },
  {
    label: "border-y-violet-200",
    value: "border-y-violet-200",
    styles:
      "border-block-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets vertical (top and bottom) border color to violet-200",
  },
  {
    label: "border-y-violet-300",
    value: "border-y-violet-300",
    styles:
      "border-block-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets vertical (top and bottom) border color to violet-300",
  },
  {
    label: "border-y-violet-400",
    value: "border-y-violet-400",
    styles:
      "border-block-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets vertical (top and bottom) border color to violet-400",
  },
  {
    label: "border-y-violet-500",
    value: "border-y-violet-500",
    styles:
      "border-block-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets vertical (top and bottom) border color to violet-500",
  },
  {
    label: "border-y-violet-600",
    value: "border-y-violet-600",
    styles:
      "border-block-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets vertical (top and bottom) border color to violet-600",
  },
  {
    label: "border-y-violet-700",
    value: "border-y-violet-700",
    styles:
      "border-block-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets vertical (top and bottom) border color to violet-700",
  },
  {
    label: "border-y-violet-800",
    value: "border-y-violet-800",
    styles:
      "border-block-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets vertical (top and bottom) border color to violet-800",
  },
  {
    label: "border-y-violet-900",
    value: "border-y-violet-900",
    styles:
      "border-block-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets vertical (top and bottom) border color to violet-900",
  },
  {
    label: "border-y-violet-950",
    value: "border-y-violet-950",
    styles:
      "border-block-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets vertical (top and bottom) border color to violet-950",
  },
  {
    label: "border-y-purple-50",
    value: "border-y-purple-50",
    styles:
      "border-block-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets vertical (top and bottom) border color to purple-50",
  },
  {
    label: "border-y-purple-100",
    value: "border-y-purple-100",
    styles:
      "border-block-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets vertical (top and bottom) border color to purple-100",
  },
  {
    label: "border-y-purple-200",
    value: "border-y-purple-200",
    styles:
      "border-block-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets vertical (top and bottom) border color to purple-200",
  },
  {
    label: "border-y-purple-300",
    value: "border-y-purple-300",
    styles:
      "border-block-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets vertical (top and bottom) border color to purple-300",
  },
  {
    label: "border-y-purple-400",
    value: "border-y-purple-400",
    styles:
      "border-block-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets vertical (top and bottom) border color to purple-400",
  },
  {
    label: "border-y-purple-500",
    value: "border-y-purple-500",
    styles:
      "border-block-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets vertical (top and bottom) border color to purple-500",
  },
  {
    label: "border-y-purple-600",
    value: "border-y-purple-600",
    styles:
      "border-block-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets vertical (top and bottom) border color to purple-600",
  },
  {
    label: "border-y-purple-700",
    value: "border-y-purple-700",
    styles:
      "border-block-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets vertical (top and bottom) border color to purple-700",
  },
  {
    label: "border-y-purple-800",
    value: "border-y-purple-800",
    styles:
      "border-block-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets vertical (top and bottom) border color to purple-800",
  },
  {
    label: "border-y-purple-900",
    value: "border-y-purple-900",
    styles:
      "border-block-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets vertical (top and bottom) border color to purple-900",
  },
  {
    label: "border-y-purple-950",
    value: "border-y-purple-950",
    styles:
      "border-block-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets vertical (top and bottom) border color to purple-950",
  },
  {
    label: "border-y-fuchsia-50",
    value: "border-y-fuchsia-50",
    styles:
      "border-block-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-50",
  },
  {
    label: "border-y-fuchsia-100",
    value: "border-y-fuchsia-100",
    styles:
      "border-block-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-100",
  },
  {
    label: "border-y-fuchsia-200",
    value: "border-y-fuchsia-200",
    styles:
      "border-block-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-200",
  },
  {
    label: "border-y-fuchsia-300",
    value: "border-y-fuchsia-300",
    styles:
      "border-block-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-300",
  },
  {
    label: "border-y-fuchsia-400",
    value: "border-y-fuchsia-400",
    styles:
      "border-block-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-400",
  },
  {
    label: "border-y-fuchsia-500",
    value: "border-y-fuchsia-500",
    styles:
      "border-block-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-500",
  },
  {
    label: "border-y-fuchsia-600",
    value: "border-y-fuchsia-600",
    styles:
      "border-block-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-600",
  },
  {
    label: "border-y-fuchsia-700",
    value: "border-y-fuchsia-700",
    styles:
      "border-block-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-700",
  },
  {
    label: "border-y-fuchsia-800",
    value: "border-y-fuchsia-800",
    styles:
      "border-block-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-800",
  },
  {
    label: "border-y-fuchsia-900",
    value: "border-y-fuchsia-900",
    styles:
      "border-block-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-900",
  },
  {
    label: "border-y-fuchsia-950",
    value: "border-y-fuchsia-950",
    styles:
      "border-block-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets vertical (top and bottom) border color to fuchsia-950",
  },
  {
    label: "border-y-pink-50",
    value: "border-y-pink-50",
    styles:
      "border-block-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets vertical (top and bottom) border color to pink-50",
  },
  {
    label: "border-y-pink-100",
    value: "border-y-pink-100",
    styles:
      "border-block-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets vertical (top and bottom) border color to pink-100",
  },
  {
    label: "border-y-pink-200",
    value: "border-y-pink-200",
    styles:
      "border-block-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets vertical (top and bottom) border color to pink-200",
  },
  {
    label: "border-y-pink-300",
    value: "border-y-pink-300",
    styles:
      "border-block-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets vertical (top and bottom) border color to pink-300",
  },
  {
    label: "border-y-pink-400",
    value: "border-y-pink-400",
    styles:
      "border-block-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets vertical (top and bottom) border color to pink-400",
  },
  {
    label: "border-y-pink-500",
    value: "border-y-pink-500",
    styles:
      "border-block-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets vertical (top and bottom) border color to pink-500",
  },
  {
    label: "border-y-pink-600",
    value: "border-y-pink-600",
    styles:
      "border-block-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets vertical (top and bottom) border color to pink-600",
  },
  {
    label: "border-y-pink-700",
    value: "border-y-pink-700",
    styles:
      "border-block-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets vertical (top and bottom) border color to pink-700",
  },
  {
    label: "border-y-pink-800",
    value: "border-y-pink-800",
    styles:
      "border-block-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets vertical (top and bottom) border color to pink-800",
  },
  {
    label: "border-y-pink-900",
    value: "border-y-pink-900",
    styles:
      "border-block-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets vertical (top and bottom) border color to pink-900",
  },
  {
    label: "border-y-pink-950",
    value: "border-y-pink-950",
    styles:
      "border-block-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets vertical (top and bottom) border color to pink-950",
  },
  {
    label: "border-y-rose-50",
    value: "border-y-rose-50",
    styles:
      "border-block-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets vertical (top and bottom) border color to rose-50",
  },
  {
    label: "border-y-rose-100",
    value: "border-y-rose-100",
    styles:
      "border-block-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets vertical (top and bottom) border color to rose-100",
  },
  {
    label: "border-y-rose-200",
    value: "border-y-rose-200",
    styles:
      "border-block-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets vertical (top and bottom) border color to rose-200",
  },
  {
    label: "border-y-rose-300",
    value: "border-y-rose-300",
    styles:
      "border-block-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets vertical (top and bottom) border color to rose-300",
  },
  {
    label: "border-y-rose-400",
    value: "border-y-rose-400",
    styles:
      "border-block-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets vertical (top and bottom) border color to rose-400",
  },
  {
    label: "border-y-rose-500",
    value: "border-y-rose-500",
    styles:
      "border-block-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets vertical (top and bottom) border color to rose-500",
  },
  {
    label: "border-y-rose-600",
    value: "border-y-rose-600",
    styles:
      "border-block-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets vertical (top and bottom) border color to rose-600",
  },
  {
    label: "border-y-rose-700",
    value: "border-y-rose-700",
    styles:
      "border-block-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets vertical (top and bottom) border color to rose-700",
  },
  {
    label: "border-y-rose-800",
    value: "border-y-rose-800",
    styles:
      "border-block-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets vertical (top and bottom) border color to rose-800",
  },
  {
    label: "border-y-rose-900",
    value: "border-y-rose-900",
    styles:
      "border-block-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets vertical (top and bottom) border color to rose-900",
  },
  {
    label: "border-y-rose-950",
    value: "border-y-rose-950",
    styles:
      "border-block-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets vertical (top and bottom) border color to rose-950",
  },
  {
    label: "border-y-slate-50",
    value: "border-y-slate-50",
    styles:
      "border-block-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets vertical (top and bottom) border color to slate-50",
  },
  {
    label: "border-y-slate-100",
    value: "border-y-slate-100",
    styles:
      "border-block-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets vertical (top and bottom) border color to slate-100",
  },
  {
    label: "border-y-slate-200",
    value: "border-y-slate-200",
    styles:
      "border-block-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets vertical (top and bottom) border color to slate-200",
  },
  {
    label: "border-y-slate-300",
    value: "border-y-slate-300",
    styles:
      "border-block-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets vertical (top and bottom) border color to slate-300",
  },
  {
    label: "border-y-slate-400",
    value: "border-y-slate-400",
    styles:
      "border-block-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets vertical (top and bottom) border color to slate-400",
  },
  {
    label: "border-y-slate-500",
    value: "border-y-slate-500",
    styles:
      "border-block-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets vertical (top and bottom) border color to slate-500",
  },
  {
    label: "border-y-slate-600",
    value: "border-y-slate-600",
    styles:
      "border-block-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets vertical (top and bottom) border color to slate-600",
  },
  {
    label: "border-y-slate-700",
    value: "border-y-slate-700",
    styles:
      "border-block-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets vertical (top and bottom) border color to slate-700",
  },
  {
    label: "border-y-slate-800",
    value: "border-y-slate-800",
    styles:
      "border-block-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets vertical (top and bottom) border color to slate-800",
  },
  {
    label: "border-y-slate-900",
    value: "border-y-slate-900",
    styles:
      "border-block-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets vertical (top and bottom) border color to slate-900",
  },
  {
    label: "border-y-slate-950",
    value: "border-y-slate-950",
    styles:
      "border-block-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets vertical (top and bottom) border color to slate-950",
  },
  {
    label: "border-y-gray-50",
    value: "border-y-gray-50",
    styles:
      "border-block-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets vertical (top and bottom) border color to gray-50",
  },
  {
    label: "border-y-gray-100",
    value: "border-y-gray-100",
    styles:
      "border-block-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets vertical (top and bottom) border color to gray-100",
  },
  {
    label: "border-y-gray-200",
    value: "border-y-gray-200",
    styles:
      "border-block-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets vertical (top and bottom) border color to gray-200",
  },
  {
    label: "border-y-gray-300",
    value: "border-y-gray-300",
    styles:
      "border-block-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets vertical (top and bottom) border color to gray-300",
  },
  {
    label: "border-y-gray-400",
    value: "border-y-gray-400",
    styles:
      "border-block-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets vertical (top and bottom) border color to gray-400",
  },
  {
    label: "border-y-gray-500",
    value: "border-y-gray-500",
    styles:
      "border-block-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets vertical (top and bottom) border color to gray-500",
  },
  {
    label: "border-y-gray-600",
    value: "border-y-gray-600",
    styles:
      "border-block-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets vertical (top and bottom) border color to gray-600",
  },
  {
    label: "border-y-gray-700",
    value: "border-y-gray-700",
    styles:
      "border-block-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets vertical (top and bottom) border color to gray-700",
  },
  {
    label: "border-y-gray-800",
    value: "border-y-gray-800",
    styles:
      "border-block-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets vertical (top and bottom) border color to gray-800",
  },
  {
    label: "border-y-gray-900",
    value: "border-y-gray-900",
    styles:
      "border-block-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets vertical (top and bottom) border color to gray-900",
  },
  {
    label: "border-y-gray-950",
    value: "border-y-gray-950",
    styles:
      "border-block-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets vertical (top and bottom) border color to gray-950",
  },
  {
    label: "border-y-zinc-50",
    value: "border-y-zinc-50",
    styles: "border-block-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets vertical (top and bottom) border color to zinc-50",
  },
  {
    label: "border-y-zinc-100",
    value: "border-y-zinc-100",
    styles:
      "border-block-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets vertical (top and bottom) border color to zinc-100",
  },
  {
    label: "border-y-zinc-200",
    value: "border-y-zinc-200",
    styles:
      "border-block-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets vertical (top and bottom) border color to zinc-200",
  },
  {
    label: "border-y-zinc-300",
    value: "border-y-zinc-300",
    styles:
      "border-block-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets vertical (top and bottom) border color to zinc-300",
  },
  {
    label: "border-y-zinc-400",
    value: "border-y-zinc-400",
    styles:
      "border-block-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets vertical (top and bottom) border color to zinc-400",
  },
  {
    label: "border-y-zinc-500",
    value: "border-y-zinc-500",
    styles:
      "border-block-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets vertical (top and bottom) border color to zinc-500",
  },
  {
    label: "border-y-zinc-600",
    value: "border-y-zinc-600",
    styles:
      "border-block-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets vertical (top and bottom) border color to zinc-600",
  },
  {
    label: "border-y-zinc-700",
    value: "border-y-zinc-700",
    styles:
      "border-block-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets vertical (top and bottom) border color to zinc-700",
  },
  {
    label: "border-y-zinc-800",
    value: "border-y-zinc-800",
    styles:
      "border-block-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets vertical (top and bottom) border color to zinc-800",
  },
  {
    label: "border-y-zinc-900",
    value: "border-y-zinc-900",
    styles:
      "border-block-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets vertical (top and bottom) border color to zinc-900",
  },
  {
    label: "border-y-zinc-950",
    value: "border-y-zinc-950",
    styles:
      "border-block-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets vertical (top and bottom) border color to zinc-950",
  },
  {
    label: "border-y-neutral-50",
    value: "border-y-neutral-50",
    styles:
      "border-block-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-50",
  },
  {
    label: "border-y-neutral-100",
    value: "border-y-neutral-100",
    styles:
      "border-block-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-100",
  },
  {
    label: "border-y-neutral-200",
    value: "border-y-neutral-200",
    styles:
      "border-block-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-200",
  },
  {
    label: "border-y-neutral-300",
    value: "border-y-neutral-300",
    styles:
      "border-block-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-300",
  },
  {
    label: "border-y-neutral-400",
    value: "border-y-neutral-400",
    styles:
      "border-block-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-400",
  },
  {
    label: "border-y-neutral-500",
    value: "border-y-neutral-500",
    styles:
      "border-block-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-500",
  },
  {
    label: "border-y-neutral-600",
    value: "border-y-neutral-600",
    styles:
      "border-block-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-600",
  },
  {
    label: "border-y-neutral-700",
    value: "border-y-neutral-700",
    styles:
      "border-block-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-700",
  },
  {
    label: "border-y-neutral-800",
    value: "border-y-neutral-800",
    styles:
      "border-block-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-800",
  },
  {
    label: "border-y-neutral-900",
    value: "border-y-neutral-900",
    styles:
      "border-block-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-900",
  },
  {
    label: "border-y-neutral-950",
    value: "border-y-neutral-950",
    styles:
      "border-block-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets vertical (top and bottom) border color to neutral-950",
  },
  {
    label: "border-y-stone-50",
    value: "border-y-stone-50",
    styles:
      "border-block-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets vertical (top and bottom) border color to stone-50",
  },
  {
    label: "border-y-stone-100",
    value: "border-y-stone-100",
    styles:
      "border-block-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets vertical (top and bottom) border color to stone-100",
  },
  {
    label: "border-y-stone-200",
    value: "border-y-stone-200",
    styles:
      "border-block-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets vertical (top and bottom) border color to stone-200",
  },
  {
    label: "border-y-stone-300",
    value: "border-y-stone-300",
    styles:
      "border-block-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets vertical (top and bottom) border color to stone-300",
  },
  {
    label: "border-y-stone-400",
    value: "border-y-stone-400",
    styles:
      "border-block-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets vertical (top and bottom) border color to stone-400",
  },
  {
    label: "border-y-stone-500",
    value: "border-y-stone-500",
    styles:
      "border-block-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets vertical (top and bottom) border color to stone-500",
  },
  {
    label: "border-y-stone-600",
    value: "border-y-stone-600",
    styles:
      "border-block-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets vertical (top and bottom) border color to stone-600",
  },
  {
    label: "border-y-stone-700",
    value: "border-y-stone-700",
    styles:
      "border-block-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets vertical (top and bottom) border color to stone-700",
  },
  {
    label: "border-y-stone-800",
    value: "border-y-stone-800",
    styles:
      "border-block-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets vertical (top and bottom) border color to stone-800",
  },
  {
    label: "border-y-stone-900",
    value: "border-y-stone-900",
    styles:
      "border-block-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets vertical (top and bottom) border color to stone-900",
  },
  {
    label: "border-y-stone-950",
    value: "border-y-stone-950",
    styles:
      "border-block-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets vertical (top and bottom) border color to stone-950",
  },
  {
    label: "border-y-(<custom-property>)",
    value: "border-y-(<custom-property>)",
    styles: "border-block-color: var(<custom-property>);",
    description:
      "Sets vertical (top and bottom) border color to (<custom-property>)",
  },
  {
    label: "border-y-[<value>]",
    value: "border-y-[<value>]",
    styles: "border-block-color: <value>;",
    description: "Sets vertical (top and bottom) border color to [<value>]",
  },
  {
    label: "border-s-inherit",
    value: "border-s-inherit",
    styles: "border-inline-start-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-s-current",
    value: "border-s-current",
    styles: "border-inline-start-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-s-transparent",
    value: "border-s-transparent",
    styles: "border-inline-start-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-s-black",
    value: "border-s-black",
    styles: "border-inline-start-color: var(--color-black); /* #000 */",
    description: "Sets inline start border color to black",
  },
  {
    label: "border-s-white",
    value: "border-s-white",
    styles: "border-inline-start-color: var(--color-white); /* #fff */",
    description: "Sets inline start border color to white",
  },
  {
    label: "border-s-red-50",
    value: "border-s-red-50",
    styles:
      "border-inline-start-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets inline start border color to red-50",
  },
  {
    label: "border-s-red-100",
    value: "border-s-red-100",
    styles:
      "border-inline-start-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets inline start border color to red-100",
  },
  {
    label: "border-s-red-200",
    value: "border-s-red-200",
    styles:
      "border-inline-start-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets inline start border color to red-200",
  },
  {
    label: "border-s-red-300",
    value: "border-s-red-300",
    styles:
      "border-inline-start-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets inline start border color to red-300",
  },
  {
    label: "border-s-red-400",
    value: "border-s-red-400",
    styles:
      "border-inline-start-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets inline start border color to red-400",
  },
  {
    label: "border-s-red-500",
    value: "border-s-red-500",
    styles:
      "border-inline-start-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets inline start border color to red-500",
  },
  {
    label: "border-s-red-600",
    value: "border-s-red-600",
    styles:
      "border-inline-start-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets inline start border color to red-600",
  },
  {
    label: "border-s-red-700",
    value: "border-s-red-700",
    styles:
      "border-inline-start-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets inline start border color to red-700",
  },
  {
    label: "border-s-red-800",
    value: "border-s-red-800",
    styles:
      "border-inline-start-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets inline start border color to red-800",
  },
  {
    label: "border-s-red-900",
    value: "border-s-red-900",
    styles:
      "border-inline-start-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets inline start border color to red-900",
  },
  {
    label: "border-s-red-950",
    value: "border-s-red-950",
    styles:
      "border-inline-start-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets inline start border color to red-950",
  },
  {
    label: "border-s-orange-50",
    value: "border-s-orange-50",
    styles:
      "border-inline-start-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets inline start border color to orange-50",
  },
  {
    label: "border-s-orange-100",
    value: "border-s-orange-100",
    styles:
      "border-inline-start-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets inline start border color to orange-100",
  },
  {
    label: "border-s-orange-200",
    value: "border-s-orange-200",
    styles:
      "border-inline-start-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets inline start border color to orange-200",
  },
  {
    label: "border-s-orange-300",
    value: "border-s-orange-300",
    styles:
      "border-inline-start-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets inline start border color to orange-300",
  },
  {
    label: "border-s-orange-400",
    value: "border-s-orange-400",
    styles:
      "border-inline-start-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets inline start border color to orange-400",
  },
  {
    label: "border-s-orange-500",
    value: "border-s-orange-500",
    styles:
      "border-inline-start-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets inline start border color to orange-500",
  },
  {
    label: "border-s-orange-600",
    value: "border-s-orange-600",
    styles:
      "border-inline-start-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets inline start border color to orange-600",
  },
  {
    label: "border-s-orange-700",
    value: "border-s-orange-700",
    styles:
      "border-inline-start-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets inline start border color to orange-700",
  },
  {
    label: "border-s-orange-800",
    value: "border-s-orange-800",
    styles:
      "border-inline-start-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets inline start border color to orange-800",
  },
  {
    label: "border-s-orange-900",
    value: "border-s-orange-900",
    styles:
      "border-inline-start-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets inline start border color to orange-900",
  },
  {
    label: "border-s-orange-950",
    value: "border-s-orange-950",
    styles:
      "border-inline-start-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets inline start border color to orange-950",
  },
  {
    label: "border-s-amber-50",
    value: "border-s-amber-50",
    styles:
      "border-inline-start-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets inline start border color to amber-50",
  },
  {
    label: "border-s-amber-100",
    value: "border-s-amber-100",
    styles:
      "border-inline-start-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets inline start border color to amber-100",
  },
  {
    label: "border-s-amber-200",
    value: "border-s-amber-200",
    styles:
      "border-inline-start-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets inline start border color to amber-200",
  },
  {
    label: "border-s-amber-300",
    value: "border-s-amber-300",
    styles:
      "border-inline-start-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets inline start border color to amber-300",
  },
  {
    label: "border-s-amber-400",
    value: "border-s-amber-400",
    styles:
      "border-inline-start-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets inline start border color to amber-400",
  },
  {
    label: "border-s-amber-500",
    value: "border-s-amber-500",
    styles:
      "border-inline-start-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets inline start border color to amber-500",
  },
  {
    label: "border-s-amber-600",
    value: "border-s-amber-600",
    styles:
      "border-inline-start-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets inline start border color to amber-600",
  },
  {
    label: "border-s-amber-700",
    value: "border-s-amber-700",
    styles:
      "border-inline-start-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets inline start border color to amber-700",
  },
  {
    label: "border-s-amber-800",
    value: "border-s-amber-800",
    styles:
      "border-inline-start-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets inline start border color to amber-800",
  },
  {
    label: "border-s-amber-900",
    value: "border-s-amber-900",
    styles:
      "border-inline-start-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets inline start border color to amber-900",
  },
  {
    label: "border-s-amber-950",
    value: "border-s-amber-950",
    styles:
      "border-inline-start-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets inline start border color to amber-950",
  },
  {
    label: "border-s-yellow-50",
    value: "border-s-yellow-50",
    styles:
      "border-inline-start-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets inline start border color to yellow-50",
  },
  {
    label: "border-s-yellow-100",
    value: "border-s-yellow-100",
    styles:
      "border-inline-start-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets inline start border color to yellow-100",
  },
  {
    label: "border-s-yellow-200",
    value: "border-s-yellow-200",
    styles:
      "border-inline-start-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets inline start border color to yellow-200",
  },
  {
    label: "border-s-yellow-300",
    value: "border-s-yellow-300",
    styles:
      "border-inline-start-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets inline start border color to yellow-300",
  },
  {
    label: "border-s-yellow-400",
    value: "border-s-yellow-400",
    styles:
      "border-inline-start-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets inline start border color to yellow-400",
  },
  {
    label: "border-s-yellow-500",
    value: "border-s-yellow-500",
    styles:
      "border-inline-start-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets inline start border color to yellow-500",
  },
  {
    label: "border-s-yellow-600",
    value: "border-s-yellow-600",
    styles:
      "border-inline-start-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets inline start border color to yellow-600",
  },
  {
    label: "border-s-yellow-700",
    value: "border-s-yellow-700",
    styles:
      "border-inline-start-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets inline start border color to yellow-700",
  },
  {
    label: "border-s-yellow-800",
    value: "border-s-yellow-800",
    styles:
      "border-inline-start-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets inline start border color to yellow-800",
  },
  {
    label: "border-s-yellow-900",
    value: "border-s-yellow-900",
    styles:
      "border-inline-start-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets inline start border color to yellow-900",
  },
  {
    label: "border-s-yellow-950",
    value: "border-s-yellow-950",
    styles:
      "border-inline-start-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets inline start border color to yellow-950",
  },
  {
    label: "border-s-lime-50",
    value: "border-s-lime-50",
    styles:
      "border-inline-start-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets inline start border color to lime-50",
  },
  {
    label: "border-s-lime-100",
    value: "border-s-lime-100",
    styles:
      "border-inline-start-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets inline start border color to lime-100",
  },
  {
    label: "border-s-lime-200",
    value: "border-s-lime-200",
    styles:
      "border-inline-start-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets inline start border color to lime-200",
  },
  {
    label: "border-s-lime-300",
    value: "border-s-lime-300",
    styles:
      "border-inline-start-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets inline start border color to lime-300",
  },
  {
    label: "border-s-lime-400",
    value: "border-s-lime-400",
    styles:
      "border-inline-start-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets inline start border color to lime-400",
  },
  {
    label: "border-s-lime-500",
    value: "border-s-lime-500",
    styles:
      "border-inline-start-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets inline start border color to lime-500",
  },
  {
    label: "border-s-lime-600",
    value: "border-s-lime-600",
    styles:
      "border-inline-start-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets inline start border color to lime-600",
  },
  {
    label: "border-s-lime-700",
    value: "border-s-lime-700",
    styles:
      "border-inline-start-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets inline start border color to lime-700",
  },
  {
    label: "border-s-lime-800",
    value: "border-s-lime-800",
    styles:
      "border-inline-start-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets inline start border color to lime-800",
  },
  {
    label: "border-s-lime-900",
    value: "border-s-lime-900",
    styles:
      "border-inline-start-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets inline start border color to lime-900",
  },
  {
    label: "border-s-lime-950",
    value: "border-s-lime-950",
    styles:
      "border-inline-start-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets inline start border color to lime-950",
  },
  {
    label: "border-s-green-50",
    value: "border-s-green-50",
    styles:
      "border-inline-start-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets inline start border color to green-50",
  },
  {
    label: "border-s-green-100",
    value: "border-s-green-100",
    styles:
      "border-inline-start-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets inline start border color to green-100",
  },
  {
    label: "border-s-green-200",
    value: "border-s-green-200",
    styles:
      "border-inline-start-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets inline start border color to green-200",
  },
  {
    label: "border-s-green-300",
    value: "border-s-green-300",
    styles:
      "border-inline-start-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets inline start border color to green-300",
  },
  {
    label: "border-s-green-400",
    value: "border-s-green-400",
    styles:
      "border-inline-start-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets inline start border color to green-400",
  },
  {
    label: "border-s-green-500",
    value: "border-s-green-500",
    styles:
      "border-inline-start-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets inline start border color to green-500",
  },
  {
    label: "border-s-green-600",
    value: "border-s-green-600",
    styles:
      "border-inline-start-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets inline start border color to green-600",
  },
  {
    label: "border-s-green-700",
    value: "border-s-green-700",
    styles:
      "border-inline-start-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets inline start border color to green-700",
  },
  {
    label: "border-s-green-800",
    value: "border-s-green-800",
    styles:
      "border-inline-start-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets inline start border color to green-800",
  },
  {
    label: "border-s-green-900",
    value: "border-s-green-900",
    styles:
      "border-inline-start-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets inline start border color to green-900",
  },
  {
    label: "border-s-green-950",
    value: "border-s-green-950",
    styles:
      "border-inline-start-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets inline start border color to green-950",
  },
  {
    label: "border-s-emerald-50",
    value: "border-s-emerald-50",
    styles:
      "border-inline-start-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets inline start border color to emerald-50",
  },
  {
    label: "border-s-emerald-100",
    value: "border-s-emerald-100",
    styles:
      "border-inline-start-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets inline start border color to emerald-100",
  },
  {
    label: "border-s-emerald-200",
    value: "border-s-emerald-200",
    styles:
      "border-inline-start-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets inline start border color to emerald-200",
  },
  {
    label: "border-s-emerald-300",
    value: "border-s-emerald-300",
    styles:
      "border-inline-start-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets inline start border color to emerald-300",
  },
  {
    label: "border-s-emerald-400",
    value: "border-s-emerald-400",
    styles:
      "border-inline-start-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets inline start border color to emerald-400",
  },
  {
    label: "border-s-emerald-500",
    value: "border-s-emerald-500",
    styles:
      "border-inline-start-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets inline start border color to emerald-500",
  },
  {
    label: "border-s-emerald-600",
    value: "border-s-emerald-600",
    styles:
      "border-inline-start-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets inline start border color to emerald-600",
  },
  {
    label: "border-s-emerald-700",
    value: "border-s-emerald-700",
    styles:
      "border-inline-start-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets inline start border color to emerald-700",
  },
  {
    label: "border-s-emerald-800",
    value: "border-s-emerald-800",
    styles:
      "border-inline-start-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets inline start border color to emerald-800",
  },
  {
    label: "border-s-emerald-900",
    value: "border-s-emerald-900",
    styles:
      "border-inline-start-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets inline start border color to emerald-900",
  },
  {
    label: "border-s-emerald-950",
    value: "border-s-emerald-950",
    styles:
      "border-inline-start-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets inline start border color to emerald-950",
  },
  {
    label: "border-s-teal-50",
    value: "border-s-teal-50",
    styles:
      "border-inline-start-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets inline start border color to teal-50",
  },
  {
    label: "border-s-teal-100",
    value: "border-s-teal-100",
    styles:
      "border-inline-start-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets inline start border color to teal-100",
  },
  {
    label: "border-s-teal-200",
    value: "border-s-teal-200",
    styles:
      "border-inline-start-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets inline start border color to teal-200",
  },
  {
    label: "border-s-teal-300",
    value: "border-s-teal-300",
    styles:
      "border-inline-start-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets inline start border color to teal-300",
  },
  {
    label: "border-s-teal-400",
    value: "border-s-teal-400",
    styles:
      "border-inline-start-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets inline start border color to teal-400",
  },
  {
    label: "border-s-teal-500",
    value: "border-s-teal-500",
    styles:
      "border-inline-start-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets inline start border color to teal-500",
  },
  {
    label: "border-s-teal-600",
    value: "border-s-teal-600",
    styles:
      "border-inline-start-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets inline start border color to teal-600",
  },
  {
    label: "border-s-teal-700",
    value: "border-s-teal-700",
    styles:
      "border-inline-start-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets inline start border color to teal-700",
  },
  {
    label: "border-s-teal-800",
    value: "border-s-teal-800",
    styles:
      "border-inline-start-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets inline start border color to teal-800",
  },
  {
    label: "border-s-teal-900",
    value: "border-s-teal-900",
    styles:
      "border-inline-start-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets inline start border color to teal-900",
  },
  {
    label: "border-s-teal-950",
    value: "border-s-teal-950",
    styles:
      "border-inline-start-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets inline start border color to teal-950",
  },
  {
    label: "border-s-cyan-50",
    value: "border-s-cyan-50",
    styles:
      "border-inline-start-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets inline start border color to cyan-50",
  },
  {
    label: "border-s-cyan-100",
    value: "border-s-cyan-100",
    styles:
      "border-inline-start-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets inline start border color to cyan-100",
  },
  {
    label: "border-s-cyan-200",
    value: "border-s-cyan-200",
    styles:
      "border-inline-start-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets inline start border color to cyan-200",
  },
  {
    label: "border-s-cyan-300",
    value: "border-s-cyan-300",
    styles:
      "border-inline-start-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets inline start border color to cyan-300",
  },
  {
    label: "border-s-cyan-400",
    value: "border-s-cyan-400",
    styles:
      "border-inline-start-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets inline start border color to cyan-400",
  },
  {
    label: "border-s-cyan-500",
    value: "border-s-cyan-500",
    styles:
      "border-inline-start-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets inline start border color to cyan-500",
  },
  {
    label: "border-s-cyan-600",
    value: "border-s-cyan-600",
    styles:
      "border-inline-start-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets inline start border color to cyan-600",
  },
  {
    label: "border-s-cyan-700",
    value: "border-s-cyan-700",
    styles:
      "border-inline-start-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets inline start border color to cyan-700",
  },
  {
    label: "border-s-cyan-800",
    value: "border-s-cyan-800",
    styles:
      "border-inline-start-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets inline start border color to cyan-800",
  },
  {
    label: "border-s-cyan-900",
    value: "border-s-cyan-900",
    styles:
      "border-inline-start-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets inline start border color to cyan-900",
  },
  {
    label: "border-s-cyan-950",
    value: "border-s-cyan-950",
    styles:
      "border-inline-start-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets inline start border color to cyan-950",
  },
  {
    label: "border-s-sky-50",
    value: "border-s-sky-50",
    styles:
      "border-inline-start-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets inline start border color to sky-50",
  },
  {
    label: "border-s-sky-100",
    value: "border-s-sky-100",
    styles:
      "border-inline-start-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets inline start border color to sky-100",
  },
  {
    label: "border-s-sky-200",
    value: "border-s-sky-200",
    styles:
      "border-inline-start-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets inline start border color to sky-200",
  },
  {
    label: "border-s-sky-300",
    value: "border-s-sky-300",
    styles:
      "border-inline-start-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets inline start border color to sky-300",
  },
  {
    label: "border-s-sky-400",
    value: "border-s-sky-400",
    styles:
      "border-inline-start-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets inline start border color to sky-400",
  },
  {
    label: "border-s-sky-500",
    value: "border-s-sky-500",
    styles:
      "border-inline-start-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets inline start border color to sky-500",
  },
  {
    label: "border-s-sky-600",
    value: "border-s-sky-600",
    styles:
      "border-inline-start-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets inline start border color to sky-600",
  },
  {
    label: "border-s-sky-700",
    value: "border-s-sky-700",
    styles:
      "border-inline-start-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets inline start border color to sky-700",
  },
  {
    label: "border-s-sky-800",
    value: "border-s-sky-800",
    styles:
      "border-inline-start-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets inline start border color to sky-800",
  },
  {
    label: "border-s-sky-900",
    value: "border-s-sky-900",
    styles:
      "border-inline-start-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets inline start border color to sky-900",
  },
  {
    label: "border-s-sky-950",
    value: "border-s-sky-950",
    styles:
      "border-inline-start-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets inline start border color to sky-950",
  },
  {
    label: "border-s-blue-50",
    value: "border-s-blue-50",
    styles:
      "border-inline-start-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets inline start border color to blue-50",
  },
  {
    label: "border-s-blue-100",
    value: "border-s-blue-100",
    styles:
      "border-inline-start-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets inline start border color to blue-100",
  },
  {
    label: "border-s-blue-200",
    value: "border-s-blue-200",
    styles:
      "border-inline-start-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets inline start border color to blue-200",
  },
  {
    label: "border-s-blue-300",
    value: "border-s-blue-300",
    styles:
      "border-inline-start-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets inline start border color to blue-300",
  },
  {
    label: "border-s-blue-400",
    value: "border-s-blue-400",
    styles:
      "border-inline-start-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets inline start border color to blue-400",
  },
  {
    label: "border-s-blue-500",
    value: "border-s-blue-500",
    styles:
      "border-inline-start-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets inline start border color to blue-500",
  },
  {
    label: "border-s-blue-600",
    value: "border-s-blue-600",
    styles:
      "border-inline-start-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets inline start border color to blue-600",
  },
  {
    label: "border-s-blue-700",
    value: "border-s-blue-700",
    styles:
      "border-inline-start-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets inline start border color to blue-700",
  },
  {
    label: "border-s-blue-800",
    value: "border-s-blue-800",
    styles:
      "border-inline-start-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets inline start border color to blue-800",
  },
  {
    label: "border-s-blue-900",
    value: "border-s-blue-900",
    styles:
      "border-inline-start-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets inline start border color to blue-900",
  },
  {
    label: "border-s-blue-950",
    value: "border-s-blue-950",
    styles:
      "border-inline-start-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets inline start border color to blue-950",
  },
  {
    label: "border-s-indigo-50",
    value: "border-s-indigo-50",
    styles:
      "border-inline-start-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets inline start border color to indigo-50",
  },
  {
    label: "border-s-indigo-100",
    value: "border-s-indigo-100",
    styles:
      "border-inline-start-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets inline start border color to indigo-100",
  },
  {
    label: "border-s-indigo-200",
    value: "border-s-indigo-200",
    styles:
      "border-inline-start-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets inline start border color to indigo-200",
  },
  {
    label: "border-s-indigo-300",
    value: "border-s-indigo-300",
    styles:
      "border-inline-start-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets inline start border color to indigo-300",
  },
  {
    label: "border-s-indigo-400",
    value: "border-s-indigo-400",
    styles:
      "border-inline-start-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets inline start border color to indigo-400",
  },
  {
    label: "border-s-indigo-500",
    value: "border-s-indigo-500",
    styles:
      "border-inline-start-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets inline start border color to indigo-500",
  },
  {
    label: "border-s-indigo-600",
    value: "border-s-indigo-600",
    styles:
      "border-inline-start-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets inline start border color to indigo-600",
  },
  {
    label: "border-s-indigo-700",
    value: "border-s-indigo-700",
    styles:
      "border-inline-start-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets inline start border color to indigo-700",
  },
  {
    label: "border-s-indigo-800",
    value: "border-s-indigo-800",
    styles:
      "border-inline-start-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets inline start border color to indigo-800",
  },
  {
    label: "border-s-indigo-900",
    value: "border-s-indigo-900",
    styles:
      "border-inline-start-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets inline start border color to indigo-900",
  },
  {
    label: "border-s-indigo-950",
    value: "border-s-indigo-950",
    styles:
      "border-inline-start-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets inline start border color to indigo-950",
  },
  {
    label: "border-s-violet-50",
    value: "border-s-violet-50",
    styles:
      "border-inline-start-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets inline start border color to violet-50",
  },
  {
    label: "border-s-violet-100",
    value: "border-s-violet-100",
    styles:
      "border-inline-start-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets inline start border color to violet-100",
  },
  {
    label: "border-s-violet-200",
    value: "border-s-violet-200",
    styles:
      "border-inline-start-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets inline start border color to violet-200",
  },
  {
    label: "border-s-violet-300",
    value: "border-s-violet-300",
    styles:
      "border-inline-start-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets inline start border color to violet-300",
  },
  {
    label: "border-s-violet-400",
    value: "border-s-violet-400",
    styles:
      "border-inline-start-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets inline start border color to violet-400",
  },
  {
    label: "border-s-violet-500",
    value: "border-s-violet-500",
    styles:
      "border-inline-start-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets inline start border color to violet-500",
  },
  {
    label: "border-s-violet-600",
    value: "border-s-violet-600",
    styles:
      "border-inline-start-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets inline start border color to violet-600",
  },
  {
    label: "border-s-violet-700",
    value: "border-s-violet-700",
    styles:
      "border-inline-start-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets inline start border color to violet-700",
  },
  {
    label: "border-s-violet-800",
    value: "border-s-violet-800",
    styles:
      "border-inline-start-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets inline start border color to violet-800",
  },
  {
    label: "border-s-violet-900",
    value: "border-s-violet-900",
    styles:
      "border-inline-start-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets inline start border color to violet-900",
  },
  {
    label: "border-s-violet-950",
    value: "border-s-violet-950",
    styles:
      "border-inline-start-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets inline start border color to violet-950",
  },
  {
    label: "border-s-purple-50",
    value: "border-s-purple-50",
    styles:
      "border-inline-start-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets inline start border color to purple-50",
  },
  {
    label: "border-s-purple-100",
    value: "border-s-purple-100",
    styles:
      "border-inline-start-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets inline start border color to purple-100",
  },
  {
    label: "border-s-purple-200",
    value: "border-s-purple-200",
    styles:
      "border-inline-start-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets inline start border color to purple-200",
  },
  {
    label: "border-s-purple-300",
    value: "border-s-purple-300",
    styles:
      "border-inline-start-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets inline start border color to purple-300",
  },
  {
    label: "border-s-purple-400",
    value: "border-s-purple-400",
    styles:
      "border-inline-start-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets inline start border color to purple-400",
  },
  {
    label: "border-s-purple-500",
    value: "border-s-purple-500",
    styles:
      "border-inline-start-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets inline start border color to purple-500",
  },
  {
    label: "border-s-purple-600",
    value: "border-s-purple-600",
    styles:
      "border-inline-start-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets inline start border color to purple-600",
  },
  {
    label: "border-s-purple-700",
    value: "border-s-purple-700",
    styles:
      "border-inline-start-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets inline start border color to purple-700",
  },
  {
    label: "border-s-purple-800",
    value: "border-s-purple-800",
    styles:
      "border-inline-start-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets inline start border color to purple-800",
  },
  {
    label: "border-s-purple-900",
    value: "border-s-purple-900",
    styles:
      "border-inline-start-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets inline start border color to purple-900",
  },
  {
    label: "border-s-purple-950",
    value: "border-s-purple-950",
    styles:
      "border-inline-start-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets inline start border color to purple-950",
  },
  {
    label: "border-s-fuchsia-50",
    value: "border-s-fuchsia-50",
    styles:
      "border-inline-start-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets inline start border color to fuchsia-50",
  },
  {
    label: "border-s-fuchsia-100",
    value: "border-s-fuchsia-100",
    styles:
      "border-inline-start-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets inline start border color to fuchsia-100",
  },
  {
    label: "border-s-fuchsia-200",
    value: "border-s-fuchsia-200",
    styles:
      "border-inline-start-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets inline start border color to fuchsia-200",
  },
  {
    label: "border-s-fuchsia-300",
    value: "border-s-fuchsia-300",
    styles:
      "border-inline-start-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets inline start border color to fuchsia-300",
  },
  {
    label: "border-s-fuchsia-400",
    value: "border-s-fuchsia-400",
    styles:
      "border-inline-start-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets inline start border color to fuchsia-400",
  },
  {
    label: "border-s-fuchsia-500",
    value: "border-s-fuchsia-500",
    styles:
      "border-inline-start-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets inline start border color to fuchsia-500",
  },
  {
    label: "border-s-fuchsia-600",
    value: "border-s-fuchsia-600",
    styles:
      "border-inline-start-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets inline start border color to fuchsia-600",
  },
  {
    label: "border-s-fuchsia-700",
    value: "border-s-fuchsia-700",
    styles:
      "border-inline-start-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets inline start border color to fuchsia-700",
  },
  {
    label: "border-s-fuchsia-800",
    value: "border-s-fuchsia-800",
    styles:
      "border-inline-start-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets inline start border color to fuchsia-800",
  },
  {
    label: "border-s-fuchsia-900",
    value: "border-s-fuchsia-900",
    styles:
      "border-inline-start-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets inline start border color to fuchsia-900",
  },
  {
    label: "border-s-fuchsia-950",
    value: "border-s-fuchsia-950",
    styles:
      "border-inline-start-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets inline start border color to fuchsia-950",
  },
  {
    label: "border-s-pink-50",
    value: "border-s-pink-50",
    styles:
      "border-inline-start-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets inline start border color to pink-50",
  },
  {
    label: "border-s-pink-100",
    value: "border-s-pink-100",
    styles:
      "border-inline-start-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets inline start border color to pink-100",
  },
  {
    label: "border-s-pink-200",
    value: "border-s-pink-200",
    styles:
      "border-inline-start-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets inline start border color to pink-200",
  },
  {
    label: "border-s-pink-300",
    value: "border-s-pink-300",
    styles:
      "border-inline-start-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets inline start border color to pink-300",
  },
  {
    label: "border-s-pink-400",
    value: "border-s-pink-400",
    styles:
      "border-inline-start-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets inline start border color to pink-400",
  },
  {
    label: "border-s-pink-500",
    value: "border-s-pink-500",
    styles:
      "border-inline-start-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets inline start border color to pink-500",
  },
  {
    label: "border-s-pink-600",
    value: "border-s-pink-600",
    styles:
      "border-inline-start-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets inline start border color to pink-600",
  },
  {
    label: "border-s-pink-700",
    value: "border-s-pink-700",
    styles:
      "border-inline-start-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets inline start border color to pink-700",
  },
  {
    label: "border-s-pink-800",
    value: "border-s-pink-800",
    styles:
      "border-inline-start-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets inline start border color to pink-800",
  },
  {
    label: "border-s-pink-900",
    value: "border-s-pink-900",
    styles:
      "border-inline-start-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets inline start border color to pink-900",
  },
  {
    label: "border-s-pink-950",
    value: "border-s-pink-950",
    styles:
      "border-inline-start-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets inline start border color to pink-950",
  },
  {
    label: "border-s-rose-50",
    value: "border-s-rose-50",
    styles:
      "border-inline-start-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets inline start border color to rose-50",
  },
  {
    label: "border-s-rose-100",
    value: "border-s-rose-100",
    styles:
      "border-inline-start-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets inline start border color to rose-100",
  },
  {
    label: "border-s-rose-200",
    value: "border-s-rose-200",
    styles:
      "border-inline-start-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets inline start border color to rose-200",
  },
  {
    label: "border-s-rose-300",
    value: "border-s-rose-300",
    styles:
      "border-inline-start-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets inline start border color to rose-300",
  },
  {
    label: "border-s-rose-400",
    value: "border-s-rose-400",
    styles:
      "border-inline-start-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets inline start border color to rose-400",
  },
  {
    label: "border-s-rose-500",
    value: "border-s-rose-500",
    styles:
      "border-inline-start-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets inline start border color to rose-500",
  },
  {
    label: "border-s-rose-600",
    value: "border-s-rose-600",
    styles:
      "border-inline-start-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets inline start border color to rose-600",
  },
  {
    label: "border-s-rose-700",
    value: "border-s-rose-700",
    styles:
      "border-inline-start-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets inline start border color to rose-700",
  },
  {
    label: "border-s-rose-800",
    value: "border-s-rose-800",
    styles:
      "border-inline-start-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets inline start border color to rose-800",
  },
  {
    label: "border-s-rose-900",
    value: "border-s-rose-900",
    styles:
      "border-inline-start-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets inline start border color to rose-900",
  },
  {
    label: "border-s-rose-950",
    value: "border-s-rose-950",
    styles:
      "border-inline-start-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets inline start border color to rose-950",
  },
  {
    label: "border-s-slate-50",
    value: "border-s-slate-50",
    styles:
      "border-inline-start-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets inline start border color to slate-50",
  },
  {
    label: "border-s-slate-100",
    value: "border-s-slate-100",
    styles:
      "border-inline-start-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets inline start border color to slate-100",
  },
  {
    label: "border-s-slate-200",
    value: "border-s-slate-200",
    styles:
      "border-inline-start-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets inline start border color to slate-200",
  },
  {
    label: "border-s-slate-300",
    value: "border-s-slate-300",
    styles:
      "border-inline-start-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets inline start border color to slate-300",
  },
  {
    label: "border-s-slate-400",
    value: "border-s-slate-400",
    styles:
      "border-inline-start-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets inline start border color to slate-400",
  },
  {
    label: "border-s-slate-500",
    value: "border-s-slate-500",
    styles:
      "border-inline-start-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets inline start border color to slate-500",
  },
  {
    label: "border-s-slate-600",
    value: "border-s-slate-600",
    styles:
      "border-inline-start-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets inline start border color to slate-600",
  },
  {
    label: "border-s-slate-700",
    value: "border-s-slate-700",
    styles:
      "border-inline-start-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets inline start border color to slate-700",
  },
  {
    label: "border-s-slate-800",
    value: "border-s-slate-800",
    styles:
      "border-inline-start-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets inline start border color to slate-800",
  },
  {
    label: "border-s-slate-900",
    value: "border-s-slate-900",
    styles:
      "border-inline-start-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets inline start border color to slate-900",
  },
  {
    label: "border-s-slate-950",
    value: "border-s-slate-950",
    styles:
      "border-inline-start-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets inline start border color to slate-950",
  },
  {
    label: "border-s-gray-50",
    value: "border-s-gray-50",
    styles:
      "border-inline-start-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets inline start border color to gray-50",
  },
  {
    label: "border-s-gray-100",
    value: "border-s-gray-100",
    styles:
      "border-inline-start-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets inline start border color to gray-100",
  },
  {
    label: "border-s-gray-200",
    value: "border-s-gray-200",
    styles:
      "border-inline-start-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets inline start border color to gray-200",
  },
  {
    label: "border-s-gray-300",
    value: "border-s-gray-300",
    styles:
      "border-inline-start-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets inline start border color to gray-300",
  },
  {
    label: "border-s-gray-400",
    value: "border-s-gray-400",
    styles:
      "border-inline-start-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets inline start border color to gray-400",
  },
  {
    label: "border-s-gray-500",
    value: "border-s-gray-500",
    styles:
      "border-inline-start-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets inline start border color to gray-500",
  },
  {
    label: "border-s-gray-600",
    value: "border-s-gray-600",
    styles:
      "border-inline-start-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets inline start border color to gray-600",
  },
  {
    label: "border-s-gray-700",
    value: "border-s-gray-700",
    styles:
      "border-inline-start-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets inline start border color to gray-700",
  },
  {
    label: "border-s-gray-800",
    value: "border-s-gray-800",
    styles:
      "border-inline-start-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets inline start border color to gray-800",
  },
  {
    label: "border-s-gray-900",
    value: "border-s-gray-900",
    styles:
      "border-inline-start-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets inline start border color to gray-900",
  },
  {
    label: "border-s-gray-950",
    value: "border-s-gray-950",
    styles:
      "border-inline-start-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets inline start border color to gray-950",
  },
  {
    label: "border-s-zinc-50",
    value: "border-s-zinc-50",
    styles:
      "border-inline-start-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets inline start border color to zinc-50",
  },
  {
    label: "border-s-zinc-100",
    value: "border-s-zinc-100",
    styles:
      "border-inline-start-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets inline start border color to zinc-100",
  },
  {
    label: "border-s-zinc-200",
    value: "border-s-zinc-200",
    styles:
      "border-inline-start-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets inline start border color to zinc-200",
  },
  {
    label: "border-s-zinc-300",
    value: "border-s-zinc-300",
    styles:
      "border-inline-start-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets inline start border color to zinc-300",
  },
  {
    label: "border-s-zinc-400",
    value: "border-s-zinc-400",
    styles:
      "border-inline-start-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets inline start border color to zinc-400",
  },
  {
    label: "border-s-zinc-500",
    value: "border-s-zinc-500",
    styles:
      "border-inline-start-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets inline start border color to zinc-500",
  },
  {
    label: "border-s-zinc-600",
    value: "border-s-zinc-600",
    styles:
      "border-inline-start-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets inline start border color to zinc-600",
  },
  {
    label: "border-s-zinc-700",
    value: "border-s-zinc-700",
    styles:
      "border-inline-start-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets inline start border color to zinc-700",
  },
  {
    label: "border-s-zinc-800",
    value: "border-s-zinc-800",
    styles:
      "border-inline-start-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets inline start border color to zinc-800",
  },
  {
    label: "border-s-zinc-900",
    value: "border-s-zinc-900",
    styles:
      "border-inline-start-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets inline start border color to zinc-900",
  },
  {
    label: "border-s-zinc-950",
    value: "border-s-zinc-950",
    styles:
      "border-inline-start-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets inline start border color to zinc-950",
  },
  {
    label: "border-s-neutral-50",
    value: "border-s-neutral-50",
    styles:
      "border-inline-start-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets inline start border color to neutral-50",
  },
  {
    label: "border-s-neutral-100",
    value: "border-s-neutral-100",
    styles:
      "border-inline-start-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets inline start border color to neutral-100",
  },
  {
    label: "border-s-neutral-200",
    value: "border-s-neutral-200",
    styles:
      "border-inline-start-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets inline start border color to neutral-200",
  },
  {
    label: "border-s-neutral-300",
    value: "border-s-neutral-300",
    styles:
      "border-inline-start-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets inline start border color to neutral-300",
  },
  {
    label: "border-s-neutral-400",
    value: "border-s-neutral-400",
    styles:
      "border-inline-start-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets inline start border color to neutral-400",
  },
  {
    label: "border-s-neutral-500",
    value: "border-s-neutral-500",
    styles:
      "border-inline-start-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets inline start border color to neutral-500",
  },
  {
    label: "border-s-neutral-600",
    value: "border-s-neutral-600",
    styles:
      "border-inline-start-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets inline start border color to neutral-600",
  },
  {
    label: "border-s-neutral-700",
    value: "border-s-neutral-700",
    styles:
      "border-inline-start-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets inline start border color to neutral-700",
  },
  {
    label: "border-s-neutral-800",
    value: "border-s-neutral-800",
    styles:
      "border-inline-start-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets inline start border color to neutral-800",
  },
  {
    label: "border-s-neutral-900",
    value: "border-s-neutral-900",
    styles:
      "border-inline-start-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets inline start border color to neutral-900",
  },
  {
    label: "border-s-neutral-950",
    value: "border-s-neutral-950",
    styles:
      "border-inline-start-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets inline start border color to neutral-950",
  },
  {
    label: "border-s-stone-50",
    value: "border-s-stone-50",
    styles:
      "border-inline-start-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets inline start border color to stone-50",
  },
  {
    label: "border-s-stone-100",
    value: "border-s-stone-100",
    styles:
      "border-inline-start-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets inline start border color to stone-100",
  },
  {
    label: "border-s-stone-200",
    value: "border-s-stone-200",
    styles:
      "border-inline-start-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets inline start border color to stone-200",
  },
  {
    label: "border-s-stone-300",
    value: "border-s-stone-300",
    styles:
      "border-inline-start-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets inline start border color to stone-300",
  },
  {
    label: "border-s-stone-400",
    value: "border-s-stone-400",
    styles:
      "border-inline-start-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets inline start border color to stone-400",
  },
  {
    label: "border-s-stone-500",
    value: "border-s-stone-500",
    styles:
      "border-inline-start-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets inline start border color to stone-500",
  },
  {
    label: "border-s-stone-600",
    value: "border-s-stone-600",
    styles:
      "border-inline-start-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets inline start border color to stone-600",
  },
  {
    label: "border-s-stone-700",
    value: "border-s-stone-700",
    styles:
      "border-inline-start-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets inline start border color to stone-700",
  },
  {
    label: "border-s-stone-800",
    value: "border-s-stone-800",
    styles:
      "border-inline-start-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets inline start border color to stone-800",
  },
  {
    label: "border-s-stone-900",
    value: "border-s-stone-900",
    styles:
      "border-inline-start-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets inline start border color to stone-900",
  },
  {
    label: "border-s-stone-950",
    value: "border-s-stone-950",
    styles:
      "border-inline-start-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets inline start border color to stone-950",
  },
  {
    label: "border-s-(<custom-property>)",
    value: "border-s-(<custom-property>)",
    styles: "border-inline-start-color: var(<custom-property>);",
    description: "Sets inline start border color to (<custom-property>)",
  },
  {
    label: "border-s-[<value>]",
    value: "border-s-[<value>]",
    styles: "border-inline-start-color: <value>;",
    description: "Sets inline start border color to [<value>]",
  },
  {
    label: "border-e-inherit",
    value: "border-e-inherit",
    styles: "border-inline-end-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-e-current",
    value: "border-e-current",
    styles: "border-inline-end-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-e-transparent",
    value: "border-e-transparent",
    styles: "border-inline-end-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-e-black",
    value: "border-e-black",
    styles: "border-inline-end-color: var(--color-black); /* #000 */",
    description: "Sets inline end border color to black",
  },
  {
    label: "border-e-white",
    value: "border-e-white",
    styles: "border-inline-end-color: var(--color-white); /* #fff */",
    description: "Sets inline end border color to white",
  },
  {
    label: "border-e-red-50",
    value: "border-e-red-50",
    styles:
      "border-inline-end-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets inline end border color to red-50",
  },
  {
    label: "border-e-red-100",
    value: "border-e-red-100",
    styles:
      "border-inline-end-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets inline end border color to red-100",
  },
  {
    label: "border-e-red-200",
    value: "border-e-red-200",
    styles:
      "border-inline-end-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets inline end border color to red-200",
  },
  {
    label: "border-e-red-300",
    value: "border-e-red-300",
    styles:
      "border-inline-end-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets inline end border color to red-300",
  },
  {
    label: "border-e-red-400",
    value: "border-e-red-400",
    styles:
      "border-inline-end-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets inline end border color to red-400",
  },
  {
    label: "border-e-red-500",
    value: "border-e-red-500",
    styles:
      "border-inline-end-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets inline end border color to red-500",
  },
  {
    label: "border-e-red-600",
    value: "border-e-red-600",
    styles:
      "border-inline-end-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets inline end border color to red-600",
  },
  {
    label: "border-e-red-700",
    value: "border-e-red-700",
    styles:
      "border-inline-end-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets inline end border color to red-700",
  },
  {
    label: "border-e-red-800",
    value: "border-e-red-800",
    styles:
      "border-inline-end-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets inline end border color to red-800",
  },
  {
    label: "border-e-red-900",
    value: "border-e-red-900",
    styles:
      "border-inline-end-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets inline end border color to red-900",
  },
  {
    label: "border-e-red-950",
    value: "border-e-red-950",
    styles:
      "border-inline-end-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets inline end border color to red-950",
  },
  {
    label: "border-e-orange-50",
    value: "border-e-orange-50",
    styles:
      "border-inline-end-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets inline end border color to orange-50",
  },
  {
    label: "border-e-orange-100",
    value: "border-e-orange-100",
    styles:
      "border-inline-end-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets inline end border color to orange-100",
  },
  {
    label: "border-e-orange-200",
    value: "border-e-orange-200",
    styles:
      "border-inline-end-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets inline end border color to orange-200",
  },
  {
    label: "border-e-orange-300",
    value: "border-e-orange-300",
    styles:
      "border-inline-end-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets inline end border color to orange-300",
  },
  {
    label: "border-e-orange-400",
    value: "border-e-orange-400",
    styles:
      "border-inline-end-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets inline end border color to orange-400",
  },
  {
    label: "border-e-orange-500",
    value: "border-e-orange-500",
    styles:
      "border-inline-end-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets inline end border color to orange-500",
  },
  {
    label: "border-e-orange-600",
    value: "border-e-orange-600",
    styles:
      "border-inline-end-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets inline end border color to orange-600",
  },
  {
    label: "border-e-orange-700",
    value: "border-e-orange-700",
    styles:
      "border-inline-end-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets inline end border color to orange-700",
  },
  {
    label: "border-e-orange-800",
    value: "border-e-orange-800",
    styles:
      "border-inline-end-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets inline end border color to orange-800",
  },
  {
    label: "border-e-orange-900",
    value: "border-e-orange-900",
    styles:
      "border-inline-end-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets inline end border color to orange-900",
  },
  {
    label: "border-e-orange-950",
    value: "border-e-orange-950",
    styles:
      "border-inline-end-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets inline end border color to orange-950",
  },
  {
    label: "border-e-amber-50",
    value: "border-e-amber-50",
    styles:
      "border-inline-end-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets inline end border color to amber-50",
  },
  {
    label: "border-e-amber-100",
    value: "border-e-amber-100",
    styles:
      "border-inline-end-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets inline end border color to amber-100",
  },
  {
    label: "border-e-amber-200",
    value: "border-e-amber-200",
    styles:
      "border-inline-end-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets inline end border color to amber-200",
  },
  {
    label: "border-e-amber-300",
    value: "border-e-amber-300",
    styles:
      "border-inline-end-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets inline end border color to amber-300",
  },
  {
    label: "border-e-amber-400",
    value: "border-e-amber-400",
    styles:
      "border-inline-end-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets inline end border color to amber-400",
  },
  {
    label: "border-e-amber-500",
    value: "border-e-amber-500",
    styles:
      "border-inline-end-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets inline end border color to amber-500",
  },
  {
    label: "border-e-amber-600",
    value: "border-e-amber-600",
    styles:
      "border-inline-end-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets inline end border color to amber-600",
  },
  {
    label: "border-e-amber-700",
    value: "border-e-amber-700",
    styles:
      "border-inline-end-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets inline end border color to amber-700",
  },
  {
    label: "border-e-amber-800",
    value: "border-e-amber-800",
    styles:
      "border-inline-end-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets inline end border color to amber-800",
  },
  {
    label: "border-e-amber-900",
    value: "border-e-amber-900",
    styles:
      "border-inline-end-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets inline end border color to amber-900",
  },
  {
    label: "border-e-amber-950",
    value: "border-e-amber-950",
    styles:
      "border-inline-end-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets inline end border color to amber-950",
  },
  {
    label: "border-e-yellow-50",
    value: "border-e-yellow-50",
    styles:
      "border-inline-end-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets inline end border color to yellow-50",
  },
  {
    label: "border-e-yellow-100",
    value: "border-e-yellow-100",
    styles:
      "border-inline-end-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets inline end border color to yellow-100",
  },
  {
    label: "border-e-yellow-200",
    value: "border-e-yellow-200",
    styles:
      "border-inline-end-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets inline end border color to yellow-200",
  },
  {
    label: "border-e-yellow-300",
    value: "border-e-yellow-300",
    styles:
      "border-inline-end-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets inline end border color to yellow-300",
  },
  {
    label: "border-e-yellow-400",
    value: "border-e-yellow-400",
    styles:
      "border-inline-end-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets inline end border color to yellow-400",
  },
  {
    label: "border-e-yellow-500",
    value: "border-e-yellow-500",
    styles:
      "border-inline-end-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets inline end border color to yellow-500",
  },
  {
    label: "border-e-yellow-600",
    value: "border-e-yellow-600",
    styles:
      "border-inline-end-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets inline end border color to yellow-600",
  },
  {
    label: "border-e-yellow-700",
    value: "border-e-yellow-700",
    styles:
      "border-inline-end-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets inline end border color to yellow-700",
  },
  {
    label: "border-e-yellow-800",
    value: "border-e-yellow-800",
    styles:
      "border-inline-end-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets inline end border color to yellow-800",
  },
  {
    label: "border-e-yellow-900",
    value: "border-e-yellow-900",
    styles:
      "border-inline-end-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets inline end border color to yellow-900",
  },
  {
    label: "border-e-yellow-950",
    value: "border-e-yellow-950",
    styles:
      "border-inline-end-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets inline end border color to yellow-950",
  },
  {
    label: "border-e-lime-50",
    value: "border-e-lime-50",
    styles:
      "border-inline-end-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets inline end border color to lime-50",
  },
  {
    label: "border-e-lime-100",
    value: "border-e-lime-100",
    styles:
      "border-inline-end-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets inline end border color to lime-100",
  },
  {
    label: "border-e-lime-200",
    value: "border-e-lime-200",
    styles:
      "border-inline-end-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets inline end border color to lime-200",
  },
  {
    label: "border-e-lime-300",
    value: "border-e-lime-300",
    styles:
      "border-inline-end-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets inline end border color to lime-300",
  },
  {
    label: "border-e-lime-400",
    value: "border-e-lime-400",
    styles:
      "border-inline-end-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets inline end border color to lime-400",
  },
  {
    label: "border-e-lime-500",
    value: "border-e-lime-500",
    styles:
      "border-inline-end-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets inline end border color to lime-500",
  },
  {
    label: "border-e-lime-600",
    value: "border-e-lime-600",
    styles:
      "border-inline-end-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets inline end border color to lime-600",
  },
  {
    label: "border-e-lime-700",
    value: "border-e-lime-700",
    styles:
      "border-inline-end-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets inline end border color to lime-700",
  },
  {
    label: "border-e-lime-800",
    value: "border-e-lime-800",
    styles:
      "border-inline-end-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets inline end border color to lime-800",
  },
  {
    label: "border-e-lime-900",
    value: "border-e-lime-900",
    styles:
      "border-inline-end-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets inline end border color to lime-900",
  },
  {
    label: "border-e-lime-950",
    value: "border-e-lime-950",
    styles:
      "border-inline-end-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets inline end border color to lime-950",
  },
  {
    label: "border-e-green-50",
    value: "border-e-green-50",
    styles:
      "border-inline-end-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets inline end border color to green-50",
  },
  {
    label: "border-e-green-100",
    value: "border-e-green-100",
    styles:
      "border-inline-end-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets inline end border color to green-100",
  },
  {
    label: "border-e-green-200",
    value: "border-e-green-200",
    styles:
      "border-inline-end-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets inline end border color to green-200",
  },
  {
    label: "border-e-green-300",
    value: "border-e-green-300",
    styles:
      "border-inline-end-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets inline end border color to green-300",
  },
  {
    label: "border-e-green-400",
    value: "border-e-green-400",
    styles:
      "border-inline-end-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets inline end border color to green-400",
  },
  {
    label: "border-e-green-500",
    value: "border-e-green-500",
    styles:
      "border-inline-end-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets inline end border color to green-500",
  },
  {
    label: "border-e-green-600",
    value: "border-e-green-600",
    styles:
      "border-inline-end-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets inline end border color to green-600",
  },
  {
    label: "border-e-green-700",
    value: "border-e-green-700",
    styles:
      "border-inline-end-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets inline end border color to green-700",
  },
  {
    label: "border-e-green-800",
    value: "border-e-green-800",
    styles:
      "border-inline-end-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets inline end border color to green-800",
  },
  {
    label: "border-e-green-900",
    value: "border-e-green-900",
    styles:
      "border-inline-end-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets inline end border color to green-900",
  },
  {
    label: "border-e-green-950",
    value: "border-e-green-950",
    styles:
      "border-inline-end-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets inline end border color to green-950",
  },
  {
    label: "border-e-emerald-50",
    value: "border-e-emerald-50",
    styles:
      "border-inline-end-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets inline end border color to emerald-50",
  },
  {
    label: "border-e-emerald-100",
    value: "border-e-emerald-100",
    styles:
      "border-inline-end-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets inline end border color to emerald-100",
  },
  {
    label: "border-e-emerald-200",
    value: "border-e-emerald-200",
    styles:
      "border-inline-end-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets inline end border color to emerald-200",
  },
  {
    label: "border-e-emerald-300",
    value: "border-e-emerald-300",
    styles:
      "border-inline-end-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets inline end border color to emerald-300",
  },
  {
    label: "border-e-emerald-400",
    value: "border-e-emerald-400",
    styles:
      "border-inline-end-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets inline end border color to emerald-400",
  },
  {
    label: "border-e-emerald-500",
    value: "border-e-emerald-500",
    styles:
      "border-inline-end-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets inline end border color to emerald-500",
  },
  {
    label: "border-e-emerald-600",
    value: "border-e-emerald-600",
    styles:
      "border-inline-end-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets inline end border color to emerald-600",
  },
  {
    label: "border-e-emerald-700",
    value: "border-e-emerald-700",
    styles:
      "border-inline-end-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets inline end border color to emerald-700",
  },
  {
    label: "border-e-emerald-800",
    value: "border-e-emerald-800",
    styles:
      "border-inline-end-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets inline end border color to emerald-800",
  },
  {
    label: "border-e-emerald-900",
    value: "border-e-emerald-900",
    styles:
      "border-inline-end-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets inline end border color to emerald-900",
  },
  {
    label: "border-e-emerald-950",
    value: "border-e-emerald-950",
    styles:
      "border-inline-end-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets inline end border color to emerald-950",
  },
  {
    label: "border-e-teal-50",
    value: "border-e-teal-50",
    styles:
      "border-inline-end-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets inline end border color to teal-50",
  },
  {
    label: "border-e-teal-100",
    value: "border-e-teal-100",
    styles:
      "border-inline-end-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets inline end border color to teal-100",
  },
  {
    label: "border-e-teal-200",
    value: "border-e-teal-200",
    styles:
      "border-inline-end-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets inline end border color to teal-200",
  },
  {
    label: "border-e-teal-300",
    value: "border-e-teal-300",
    styles:
      "border-inline-end-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets inline end border color to teal-300",
  },
  {
    label: "border-e-teal-400",
    value: "border-e-teal-400",
    styles:
      "border-inline-end-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets inline end border color to teal-400",
  },
  {
    label: "border-e-teal-500",
    value: "border-e-teal-500",
    styles:
      "border-inline-end-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets inline end border color to teal-500",
  },
  {
    label: "border-e-teal-600",
    value: "border-e-teal-600",
    styles:
      "border-inline-end-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets inline end border color to teal-600",
  },
  {
    label: "border-e-teal-700",
    value: "border-e-teal-700",
    styles:
      "border-inline-end-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets inline end border color to teal-700",
  },
  {
    label: "border-e-teal-800",
    value: "border-e-teal-800",
    styles:
      "border-inline-end-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets inline end border color to teal-800",
  },
  {
    label: "border-e-teal-900",
    value: "border-e-teal-900",
    styles:
      "border-inline-end-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets inline end border color to teal-900",
  },
  {
    label: "border-e-teal-950",
    value: "border-e-teal-950",
    styles:
      "border-inline-end-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets inline end border color to teal-950",
  },
  {
    label: "border-e-cyan-50",
    value: "border-e-cyan-50",
    styles:
      "border-inline-end-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets inline end border color to cyan-50",
  },
  {
    label: "border-e-cyan-100",
    value: "border-e-cyan-100",
    styles:
      "border-inline-end-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets inline end border color to cyan-100",
  },
  {
    label: "border-e-cyan-200",
    value: "border-e-cyan-200",
    styles:
      "border-inline-end-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets inline end border color to cyan-200",
  },
  {
    label: "border-e-cyan-300",
    value: "border-e-cyan-300",
    styles:
      "border-inline-end-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets inline end border color to cyan-300",
  },
  {
    label: "border-e-cyan-400",
    value: "border-e-cyan-400",
    styles:
      "border-inline-end-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets inline end border color to cyan-400",
  },
  {
    label: "border-e-cyan-500",
    value: "border-e-cyan-500",
    styles:
      "border-inline-end-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets inline end border color to cyan-500",
  },
  {
    label: "border-e-cyan-600",
    value: "border-e-cyan-600",
    styles:
      "border-inline-end-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets inline end border color to cyan-600",
  },
  {
    label: "border-e-cyan-700",
    value: "border-e-cyan-700",
    styles:
      "border-inline-end-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets inline end border color to cyan-700",
  },
  {
    label: "border-e-cyan-800",
    value: "border-e-cyan-800",
    styles:
      "border-inline-end-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets inline end border color to cyan-800",
  },
  {
    label: "border-e-cyan-900",
    value: "border-e-cyan-900",
    styles:
      "border-inline-end-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets inline end border color to cyan-900",
  },
  {
    label: "border-e-cyan-950",
    value: "border-e-cyan-950",
    styles:
      "border-inline-end-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets inline end border color to cyan-950",
  },
  {
    label: "border-e-sky-50",
    value: "border-e-sky-50",
    styles:
      "border-inline-end-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets inline end border color to sky-50",
  },
  {
    label: "border-e-sky-100",
    value: "border-e-sky-100",
    styles:
      "border-inline-end-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets inline end border color to sky-100",
  },
  {
    label: "border-e-sky-200",
    value: "border-e-sky-200",
    styles:
      "border-inline-end-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets inline end border color to sky-200",
  },
  {
    label: "border-e-sky-300",
    value: "border-e-sky-300",
    styles:
      "border-inline-end-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets inline end border color to sky-300",
  },
  {
    label: "border-e-sky-400",
    value: "border-e-sky-400",
    styles:
      "border-inline-end-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets inline end border color to sky-400",
  },
  {
    label: "border-e-sky-500",
    value: "border-e-sky-500",
    styles:
      "border-inline-end-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets inline end border color to sky-500",
  },
  {
    label: "border-e-sky-600",
    value: "border-e-sky-600",
    styles:
      "border-inline-end-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets inline end border color to sky-600",
  },
  {
    label: "border-e-sky-700",
    value: "border-e-sky-700",
    styles:
      "border-inline-end-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets inline end border color to sky-700",
  },
  {
    label: "border-e-sky-800",
    value: "border-e-sky-800",
    styles:
      "border-inline-end-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets inline end border color to sky-800",
  },
  {
    label: "border-e-sky-900",
    value: "border-e-sky-900",
    styles:
      "border-inline-end-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets inline end border color to sky-900",
  },
  {
    label: "border-e-sky-950",
    value: "border-e-sky-950",
    styles:
      "border-inline-end-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets inline end border color to sky-950",
  },
  {
    label: "border-e-blue-50",
    value: "border-e-blue-50",
    styles:
      "border-inline-end-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets inline end border color to blue-50",
  },
  {
    label: "border-e-blue-100",
    value: "border-e-blue-100",
    styles:
      "border-inline-end-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets inline end border color to blue-100",
  },
  {
    label: "border-e-blue-200",
    value: "border-e-blue-200",
    styles:
      "border-inline-end-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets inline end border color to blue-200",
  },
  {
    label: "border-e-blue-300",
    value: "border-e-blue-300",
    styles:
      "border-inline-end-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets inline end border color to blue-300",
  },
  {
    label: "border-e-blue-400",
    value: "border-e-blue-400",
    styles:
      "border-inline-end-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets inline end border color to blue-400",
  },
  {
    label: "border-e-blue-500",
    value: "border-e-blue-500",
    styles:
      "border-inline-end-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets inline end border color to blue-500",
  },
  {
    label: "border-e-blue-600",
    value: "border-e-blue-600",
    styles:
      "border-inline-end-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets inline end border color to blue-600",
  },
  {
    label: "border-e-blue-700",
    value: "border-e-blue-700",
    styles:
      "border-inline-end-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets inline end border color to blue-700",
  },
  {
    label: "border-e-blue-800",
    value: "border-e-blue-800",
    styles:
      "border-inline-end-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets inline end border color to blue-800",
  },
  {
    label: "border-e-blue-900",
    value: "border-e-blue-900",
    styles:
      "border-inline-end-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets inline end border color to blue-900",
  },
  {
    label: "border-e-blue-950",
    value: "border-e-blue-950",
    styles:
      "border-inline-end-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets inline end border color to blue-950",
  },
  {
    label: "border-e-indigo-50",
    value: "border-e-indigo-50",
    styles:
      "border-inline-end-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets inline end border color to indigo-50",
  },
  {
    label: "border-e-indigo-100",
    value: "border-e-indigo-100",
    styles:
      "border-inline-end-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets inline end border color to indigo-100",
  },
  {
    label: "border-e-indigo-200",
    value: "border-e-indigo-200",
    styles:
      "border-inline-end-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets inline end border color to indigo-200",
  },
  {
    label: "border-e-indigo-300",
    value: "border-e-indigo-300",
    styles:
      "border-inline-end-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets inline end border color to indigo-300",
  },
  {
    label: "border-e-indigo-400",
    value: "border-e-indigo-400",
    styles:
      "border-inline-end-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets inline end border color to indigo-400",
  },
  {
    label: "border-e-indigo-500",
    value: "border-e-indigo-500",
    styles:
      "border-inline-end-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets inline end border color to indigo-500",
  },
  {
    label: "border-e-indigo-600",
    value: "border-e-indigo-600",
    styles:
      "border-inline-end-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets inline end border color to indigo-600",
  },
  {
    label: "border-e-indigo-700",
    value: "border-e-indigo-700",
    styles:
      "border-inline-end-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets inline end border color to indigo-700",
  },
  {
    label: "border-e-indigo-800",
    value: "border-e-indigo-800",
    styles:
      "border-inline-end-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets inline end border color to indigo-800",
  },
  {
    label: "border-e-indigo-900",
    value: "border-e-indigo-900",
    styles:
      "border-inline-end-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets inline end border color to indigo-900",
  },
  {
    label: "border-e-indigo-950",
    value: "border-e-indigo-950",
    styles:
      "border-inline-end-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets inline end border color to indigo-950",
  },
  {
    label: "border-e-violet-50",
    value: "border-e-violet-50",
    styles:
      "border-inline-end-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets inline end border color to violet-50",
  },
  {
    label: "border-e-violet-100",
    value: "border-e-violet-100",
    styles:
      "border-inline-end-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets inline end border color to violet-100",
  },
  {
    label: "border-e-violet-200",
    value: "border-e-violet-200",
    styles:
      "border-inline-end-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets inline end border color to violet-200",
  },
  {
    label: "border-e-violet-300",
    value: "border-e-violet-300",
    styles:
      "border-inline-end-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets inline end border color to violet-300",
  },
  {
    label: "border-e-violet-400",
    value: "border-e-violet-400",
    styles:
      "border-inline-end-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets inline end border color to violet-400",
  },
  {
    label: "border-e-violet-500",
    value: "border-e-violet-500",
    styles:
      "border-inline-end-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets inline end border color to violet-500",
  },
  {
    label: "border-e-violet-600",
    value: "border-e-violet-600",
    styles:
      "border-inline-end-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets inline end border color to violet-600",
  },
  {
    label: "border-e-violet-700",
    value: "border-e-violet-700",
    styles:
      "border-inline-end-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets inline end border color to violet-700",
  },
  {
    label: "border-e-violet-800",
    value: "border-e-violet-800",
    styles:
      "border-inline-end-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets inline end border color to violet-800",
  },
  {
    label: "border-e-violet-900",
    value: "border-e-violet-900",
    styles:
      "border-inline-end-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets inline end border color to violet-900",
  },
  {
    label: "border-e-violet-950",
    value: "border-e-violet-950",
    styles:
      "border-inline-end-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets inline end border color to violet-950",
  },
  {
    label: "border-e-purple-50",
    value: "border-e-purple-50",
    styles:
      "border-inline-end-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets inline end border color to purple-50",
  },
  {
    label: "border-e-purple-100",
    value: "border-e-purple-100",
    styles:
      "border-inline-end-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets inline end border color to purple-100",
  },
  {
    label: "border-e-purple-200",
    value: "border-e-purple-200",
    styles:
      "border-inline-end-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets inline end border color to purple-200",
  },
  {
    label: "border-e-purple-300",
    value: "border-e-purple-300",
    styles:
      "border-inline-end-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets inline end border color to purple-300",
  },
  {
    label: "border-e-purple-400",
    value: "border-e-purple-400",
    styles:
      "border-inline-end-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets inline end border color to purple-400",
  },
  {
    label: "border-e-purple-500",
    value: "border-e-purple-500",
    styles:
      "border-inline-end-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets inline end border color to purple-500",
  },
  {
    label: "border-e-purple-600",
    value: "border-e-purple-600",
    styles:
      "border-inline-end-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets inline end border color to purple-600",
  },
  {
    label: "border-e-purple-700",
    value: "border-e-purple-700",
    styles:
      "border-inline-end-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets inline end border color to purple-700",
  },
  {
    label: "border-e-purple-800",
    value: "border-e-purple-800",
    styles:
      "border-inline-end-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets inline end border color to purple-800",
  },
  {
    label: "border-e-purple-900",
    value: "border-e-purple-900",
    styles:
      "border-inline-end-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets inline end border color to purple-900",
  },
  {
    label: "border-e-purple-950",
    value: "border-e-purple-950",
    styles:
      "border-inline-end-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets inline end border color to purple-950",
  },
  {
    label: "border-e-fuchsia-50",
    value: "border-e-fuchsia-50",
    styles:
      "border-inline-end-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets inline end border color to fuchsia-50",
  },
  {
    label: "border-e-fuchsia-100",
    value: "border-e-fuchsia-100",
    styles:
      "border-inline-end-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets inline end border color to fuchsia-100",
  },
  {
    label: "border-e-fuchsia-200",
    value: "border-e-fuchsia-200",
    styles:
      "border-inline-end-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets inline end border color to fuchsia-200",
  },
  {
    label: "border-e-fuchsia-300",
    value: "border-e-fuchsia-300",
    styles:
      "border-inline-end-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets inline end border color to fuchsia-300",
  },
  {
    label: "border-e-fuchsia-400",
    value: "border-e-fuchsia-400",
    styles:
      "border-inline-end-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets inline end border color to fuchsia-400",
  },
  {
    label: "border-e-fuchsia-500",
    value: "border-e-fuchsia-500",
    styles:
      "border-inline-end-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets inline end border color to fuchsia-500",
  },
  {
    label: "border-e-fuchsia-600",
    value: "border-e-fuchsia-600",
    styles:
      "border-inline-end-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets inline end border color to fuchsia-600",
  },
  {
    label: "border-e-fuchsia-700",
    value: "border-e-fuchsia-700",
    styles:
      "border-inline-end-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets inline end border color to fuchsia-700",
  },
  {
    label: "border-e-fuchsia-800",
    value: "border-e-fuchsia-800",
    styles:
      "border-inline-end-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets inline end border color to fuchsia-800",
  },
  {
    label: "border-e-fuchsia-900",
    value: "border-e-fuchsia-900",
    styles:
      "border-inline-end-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets inline end border color to fuchsia-900",
  },
  {
    label: "border-e-fuchsia-950",
    value: "border-e-fuchsia-950",
    styles:
      "border-inline-end-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets inline end border color to fuchsia-950",
  },
  {
    label: "border-e-pink-50",
    value: "border-e-pink-50",
    styles:
      "border-inline-end-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets inline end border color to pink-50",
  },
  {
    label: "border-e-pink-100",
    value: "border-e-pink-100",
    styles:
      "border-inline-end-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets inline end border color to pink-100",
  },
  {
    label: "border-e-pink-200",
    value: "border-e-pink-200",
    styles:
      "border-inline-end-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets inline end border color to pink-200",
  },
  {
    label: "border-e-pink-300",
    value: "border-e-pink-300",
    styles:
      "border-inline-end-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets inline end border color to pink-300",
  },
  {
    label: "border-e-pink-400",
    value: "border-e-pink-400",
    styles:
      "border-inline-end-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets inline end border color to pink-400",
  },
  {
    label: "border-e-pink-500",
    value: "border-e-pink-500",
    styles:
      "border-inline-end-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets inline end border color to pink-500",
  },
  {
    label: "border-e-pink-600",
    value: "border-e-pink-600",
    styles:
      "border-inline-end-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets inline end border color to pink-600",
  },
  {
    label: "border-e-pink-700",
    value: "border-e-pink-700",
    styles:
      "border-inline-end-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets inline end border color to pink-700",
  },
  {
    label: "border-e-pink-800",
    value: "border-e-pink-800",
    styles:
      "border-inline-end-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets inline end border color to pink-800",
  },
  {
    label: "border-e-pink-900",
    value: "border-e-pink-900",
    styles:
      "border-inline-end-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets inline end border color to pink-900",
  },
  {
    label: "border-e-pink-950",
    value: "border-e-pink-950",
    styles:
      "border-inline-end-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets inline end border color to pink-950",
  },
  {
    label: "border-e-rose-50",
    value: "border-e-rose-50",
    styles:
      "border-inline-end-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets inline end border color to rose-50",
  },
  {
    label: "border-e-rose-100",
    value: "border-e-rose-100",
    styles:
      "border-inline-end-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets inline end border color to rose-100",
  },
  {
    label: "border-e-rose-200",
    value: "border-e-rose-200",
    styles:
      "border-inline-end-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets inline end border color to rose-200",
  },
  {
    label: "border-e-rose-300",
    value: "border-e-rose-300",
    styles:
      "border-inline-end-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets inline end border color to rose-300",
  },
  {
    label: "border-e-rose-400",
    value: "border-e-rose-400",
    styles:
      "border-inline-end-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets inline end border color to rose-400",
  },
  {
    label: "border-e-rose-500",
    value: "border-e-rose-500",
    styles:
      "border-inline-end-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets inline end border color to rose-500",
  },
  {
    label: "border-e-rose-600",
    value: "border-e-rose-600",
    styles:
      "border-inline-end-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets inline end border color to rose-600",
  },
  {
    label: "border-e-rose-700",
    value: "border-e-rose-700",
    styles:
      "border-inline-end-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets inline end border color to rose-700",
  },
  {
    label: "border-e-rose-800",
    value: "border-e-rose-800",
    styles:
      "border-inline-end-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets inline end border color to rose-800",
  },
  {
    label: "border-e-rose-900",
    value: "border-e-rose-900",
    styles:
      "border-inline-end-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets inline end border color to rose-900",
  },
  {
    label: "border-e-rose-950",
    value: "border-e-rose-950",
    styles:
      "border-inline-end-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets inline end border color to rose-950",
  },
  {
    label: "border-e-slate-50",
    value: "border-e-slate-50",
    styles:
      "border-inline-end-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets inline end border color to slate-50",
  },
  {
    label: "border-e-slate-100",
    value: "border-e-slate-100",
    styles:
      "border-inline-end-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets inline end border color to slate-100",
  },
  {
    label: "border-e-slate-200",
    value: "border-e-slate-200",
    styles:
      "border-inline-end-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets inline end border color to slate-200",
  },
  {
    label: "border-e-slate-300",
    value: "border-e-slate-300",
    styles:
      "border-inline-end-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets inline end border color to slate-300",
  },
  {
    label: "border-e-slate-400",
    value: "border-e-slate-400",
    styles:
      "border-inline-end-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets inline end border color to slate-400",
  },
  {
    label: "border-e-slate-500",
    value: "border-e-slate-500",
    styles:
      "border-inline-end-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets inline end border color to slate-500",
  },
  {
    label: "border-e-slate-600",
    value: "border-e-slate-600",
    styles:
      "border-inline-end-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets inline end border color to slate-600",
  },
  {
    label: "border-e-slate-700",
    value: "border-e-slate-700",
    styles:
      "border-inline-end-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets inline end border color to slate-700",
  },
  {
    label: "border-e-slate-800",
    value: "border-e-slate-800",
    styles:
      "border-inline-end-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets inline end border color to slate-800",
  },
  {
    label: "border-e-slate-900",
    value: "border-e-slate-900",
    styles:
      "border-inline-end-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets inline end border color to slate-900",
  },
  {
    label: "border-e-slate-950",
    value: "border-e-slate-950",
    styles:
      "border-inline-end-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets inline end border color to slate-950",
  },
  {
    label: "border-e-gray-50",
    value: "border-e-gray-50",
    styles:
      "border-inline-end-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets inline end border color to gray-50",
  },
  {
    label: "border-e-gray-100",
    value: "border-e-gray-100",
    styles:
      "border-inline-end-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets inline end border color to gray-100",
  },
  {
    label: "border-e-gray-200",
    value: "border-e-gray-200",
    styles:
      "border-inline-end-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets inline end border color to gray-200",
  },
  {
    label: "border-e-gray-300",
    value: "border-e-gray-300",
    styles:
      "border-inline-end-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets inline end border color to gray-300",
  },
  {
    label: "border-e-gray-400",
    value: "border-e-gray-400",
    styles:
      "border-inline-end-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets inline end border color to gray-400",
  },
  {
    label: "border-e-gray-500",
    value: "border-e-gray-500",
    styles:
      "border-inline-end-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets inline end border color to gray-500",
  },
  {
    label: "border-e-gray-600",
    value: "border-e-gray-600",
    styles:
      "border-inline-end-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets inline end border color to gray-600",
  },
  {
    label: "border-e-gray-700",
    value: "border-e-gray-700",
    styles:
      "border-inline-end-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets inline end border color to gray-700",
  },
  {
    label: "border-e-gray-800",
    value: "border-e-gray-800",
    styles:
      "border-inline-end-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets inline end border color to gray-800",
  },
  {
    label: "border-e-gray-900",
    value: "border-e-gray-900",
    styles:
      "border-inline-end-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets inline end border color to gray-900",
  },
  {
    label: "border-e-gray-950",
    value: "border-e-gray-950",
    styles:
      "border-inline-end-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets inline end border color to gray-950",
  },
  {
    label: "border-e-zinc-50",
    value: "border-e-zinc-50",
    styles:
      "border-inline-end-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets inline end border color to zinc-50",
  },
  {
    label: "border-e-zinc-100",
    value: "border-e-zinc-100",
    styles:
      "border-inline-end-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets inline end border color to zinc-100",
  },
  {
    label: "border-e-zinc-200",
    value: "border-e-zinc-200",
    styles:
      "border-inline-end-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets inline end border color to zinc-200",
  },
  {
    label: "border-e-zinc-300",
    value: "border-e-zinc-300",
    styles:
      "border-inline-end-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets inline end border color to zinc-300",
  },
  {
    label: "border-e-zinc-400",
    value: "border-e-zinc-400",
    styles:
      "border-inline-end-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets inline end border color to zinc-400",
  },
  {
    label: "border-e-zinc-500",
    value: "border-e-zinc-500",
    styles:
      "border-inline-end-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets inline end border color to zinc-500",
  },
  {
    label: "border-e-zinc-600",
    value: "border-e-zinc-600",
    styles:
      "border-inline-end-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets inline end border color to zinc-600",
  },
  {
    label: "border-e-zinc-700",
    value: "border-e-zinc-700",
    styles:
      "border-inline-end-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets inline end border color to zinc-700",
  },
  {
    label: "border-e-zinc-800",
    value: "border-e-zinc-800",
    styles:
      "border-inline-end-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets inline end border color to zinc-800",
  },
  {
    label: "border-e-zinc-900",
    value: "border-e-zinc-900",
    styles:
      "border-inline-end-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets inline end border color to zinc-900",
  },
  {
    label: "border-e-zinc-950",
    value: "border-e-zinc-950",
    styles:
      "border-inline-end-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets inline end border color to zinc-950",
  },
  {
    label: "border-e-neutral-50",
    value: "border-e-neutral-50",
    styles:
      "border-inline-end-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets inline end border color to neutral-50",
  },
  {
    label: "border-e-neutral-100",
    value: "border-e-neutral-100",
    styles:
      "border-inline-end-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets inline end border color to neutral-100",
  },
  {
    label: "border-e-neutral-200",
    value: "border-e-neutral-200",
    styles:
      "border-inline-end-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets inline end border color to neutral-200",
  },
  {
    label: "border-e-neutral-300",
    value: "border-e-neutral-300",
    styles:
      "border-inline-end-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets inline end border color to neutral-300",
  },
  {
    label: "border-e-neutral-400",
    value: "border-e-neutral-400",
    styles:
      "border-inline-end-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets inline end border color to neutral-400",
  },
  {
    label: "border-e-neutral-500",
    value: "border-e-neutral-500",
    styles:
      "border-inline-end-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets inline end border color to neutral-500",
  },
  {
    label: "border-e-neutral-600",
    value: "border-e-neutral-600",
    styles:
      "border-inline-end-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets inline end border color to neutral-600",
  },
  {
    label: "border-e-neutral-700",
    value: "border-e-neutral-700",
    styles:
      "border-inline-end-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets inline end border color to neutral-700",
  },
  {
    label: "border-e-neutral-800",
    value: "border-e-neutral-800",
    styles:
      "border-inline-end-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets inline end border color to neutral-800",
  },
  {
    label: "border-e-neutral-900",
    value: "border-e-neutral-900",
    styles:
      "border-inline-end-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets inline end border color to neutral-900",
  },
  {
    label: "border-e-neutral-950",
    value: "border-e-neutral-950",
    styles:
      "border-inline-end-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets inline end border color to neutral-950",
  },
  {
    label: "border-e-stone-50",
    value: "border-e-stone-50",
    styles:
      "border-inline-end-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets inline end border color to stone-50",
  },
  {
    label: "border-e-stone-100",
    value: "border-e-stone-100",
    styles:
      "border-inline-end-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets inline end border color to stone-100",
  },
  {
    label: "border-e-stone-200",
    value: "border-e-stone-200",
    styles:
      "border-inline-end-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets inline end border color to stone-200",
  },
  {
    label: "border-e-stone-300",
    value: "border-e-stone-300",
    styles:
      "border-inline-end-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets inline end border color to stone-300",
  },
  {
    label: "border-e-stone-400",
    value: "border-e-stone-400",
    styles:
      "border-inline-end-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets inline end border color to stone-400",
  },
  {
    label: "border-e-stone-500",
    value: "border-e-stone-500",
    styles:
      "border-inline-end-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets inline end border color to stone-500",
  },
  {
    label: "border-e-stone-600",
    value: "border-e-stone-600",
    styles:
      "border-inline-end-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets inline end border color to stone-600",
  },
  {
    label: "border-e-stone-700",
    value: "border-e-stone-700",
    styles:
      "border-inline-end-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets inline end border color to stone-700",
  },
  {
    label: "border-e-stone-800",
    value: "border-e-stone-800",
    styles:
      "border-inline-end-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets inline end border color to stone-800",
  },
  {
    label: "border-e-stone-900",
    value: "border-e-stone-900",
    styles:
      "border-inline-end-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets inline end border color to stone-900",
  },
  {
    label: "border-e-stone-950",
    value: "border-e-stone-950",
    styles:
      "border-inline-end-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets inline end border color to stone-950",
  },
  {
    label: "border-e-(<custom-property>)",
    value: "border-e-(<custom-property>)",
    styles: "border-inline-end-color: var(<custom-property>);",
    description: "Sets inline end border color to (<custom-property>)",
  },
  {
    label: "border-e-[<value>]",
    value: "border-e-[<value>]",
    styles: "border-inline-end-color: <value>;",
    description: "Sets inline end border color to [<value>]",
  },
  {
    label: "border-t-inherit",
    value: "border-t-inherit",
    styles: "border-top-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-t-current",
    value: "border-t-current",
    styles: "border-top-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-t-transparent",
    value: "border-t-transparent",
    styles: "border-top-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-t-black",
    value: "border-t-black",
    styles: "border-top-color: var(--color-black); /* #000 */",
    description: "Sets top border color to black",
  },
  {
    label: "border-t-white",
    value: "border-t-white",
    styles: "border-top-color: var(--color-white); /* #fff */",
    description: "Sets top border color to white",
  },
  {
    label: "border-t-red-50",
    value: "border-t-red-50",
    styles:
      "border-top-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets top border color to red-50",
  },
  {
    label: "border-t-red-100",
    value: "border-t-red-100",
    styles:
      "border-top-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets top border color to red-100",
  },
  {
    label: "border-t-red-200",
    value: "border-t-red-200",
    styles:
      "border-top-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets top border color to red-200",
  },
  {
    label: "border-t-red-300",
    value: "border-t-red-300",
    styles:
      "border-top-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets top border color to red-300",
  },
  {
    label: "border-t-red-400",
    value: "border-t-red-400",
    styles:
      "border-top-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets top border color to red-400",
  },
  {
    label: "border-t-red-500",
    value: "border-t-red-500",
    styles:
      "border-top-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets top border color to red-500",
  },
  {
    label: "border-t-red-600",
    value: "border-t-red-600",
    styles:
      "border-top-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets top border color to red-600",
  },
  {
    label: "border-t-red-700",
    value: "border-t-red-700",
    styles:
      "border-top-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets top border color to red-700",
  },
  {
    label: "border-t-red-800",
    value: "border-t-red-800",
    styles:
      "border-top-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets top border color to red-800",
  },
  {
    label: "border-t-red-900",
    value: "border-t-red-900",
    styles:
      "border-top-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets top border color to red-900",
  },
  {
    label: "border-t-red-950",
    value: "border-t-red-950",
    styles:
      "border-top-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets top border color to red-950",
  },
  {
    label: "border-t-orange-50",
    value: "border-t-orange-50",
    styles:
      "border-top-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets top border color to orange-50",
  },
  {
    label: "border-t-orange-100",
    value: "border-t-orange-100",
    styles:
      "border-top-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets top border color to orange-100",
  },
  {
    label: "border-t-orange-200",
    value: "border-t-orange-200",
    styles:
      "border-top-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets top border color to orange-200",
  },
  {
    label: "border-t-orange-300",
    value: "border-t-orange-300",
    styles:
      "border-top-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets top border color to orange-300",
  },
  {
    label: "border-t-orange-400",
    value: "border-t-orange-400",
    styles:
      "border-top-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets top border color to orange-400",
  },
  {
    label: "border-t-orange-500",
    value: "border-t-orange-500",
    styles:
      "border-top-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets top border color to orange-500",
  },
  {
    label: "border-t-orange-600",
    value: "border-t-orange-600",
    styles:
      "border-top-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets top border color to orange-600",
  },
  {
    label: "border-t-orange-700",
    value: "border-t-orange-700",
    styles:
      "border-top-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets top border color to orange-700",
  },
  {
    label: "border-t-orange-800",
    value: "border-t-orange-800",
    styles:
      "border-top-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets top border color to orange-800",
  },
  {
    label: "border-t-orange-900",
    value: "border-t-orange-900",
    styles:
      "border-top-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets top border color to orange-900",
  },
  {
    label: "border-t-orange-950",
    value: "border-t-orange-950",
    styles:
      "border-top-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets top border color to orange-950",
  },
  {
    label: "border-t-amber-50",
    value: "border-t-amber-50",
    styles:
      "border-top-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets top border color to amber-50",
  },
  {
    label: "border-t-amber-100",
    value: "border-t-amber-100",
    styles:
      "border-top-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets top border color to amber-100",
  },
  {
    label: "border-t-amber-200",
    value: "border-t-amber-200",
    styles:
      "border-top-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets top border color to amber-200",
  },
  {
    label: "border-t-amber-300",
    value: "border-t-amber-300",
    styles:
      "border-top-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets top border color to amber-300",
  },
  {
    label: "border-t-amber-400",
    value: "border-t-amber-400",
    styles:
      "border-top-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets top border color to amber-400",
  },
  {
    label: "border-t-amber-500",
    value: "border-t-amber-500",
    styles:
      "border-top-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets top border color to amber-500",
  },
  {
    label: "border-t-amber-600",
    value: "border-t-amber-600",
    styles:
      "border-top-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets top border color to amber-600",
  },
  {
    label: "border-t-amber-700",
    value: "border-t-amber-700",
    styles:
      "border-top-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets top border color to amber-700",
  },
  {
    label: "border-t-amber-800",
    value: "border-t-amber-800",
    styles:
      "border-top-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets top border color to amber-800",
  },
  {
    label: "border-t-amber-900",
    value: "border-t-amber-900",
    styles:
      "border-top-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets top border color to amber-900",
  },
  {
    label: "border-t-amber-950",
    value: "border-t-amber-950",
    styles:
      "border-top-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets top border color to amber-950",
  },
  {
    label: "border-t-yellow-50",
    value: "border-t-yellow-50",
    styles:
      "border-top-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets top border color to yellow-50",
  },
  {
    label: "border-t-yellow-100",
    value: "border-t-yellow-100",
    styles:
      "border-top-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets top border color to yellow-100",
  },
  {
    label: "border-t-yellow-200",
    value: "border-t-yellow-200",
    styles:
      "border-top-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets top border color to yellow-200",
  },
  {
    label: "border-t-yellow-300",
    value: "border-t-yellow-300",
    styles:
      "border-top-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets top border color to yellow-300",
  },
  {
    label: "border-t-yellow-400",
    value: "border-t-yellow-400",
    styles:
      "border-top-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets top border color to yellow-400",
  },
  {
    label: "border-t-yellow-500",
    value: "border-t-yellow-500",
    styles:
      "border-top-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets top border color to yellow-500",
  },
  {
    label: "border-t-yellow-600",
    value: "border-t-yellow-600",
    styles:
      "border-top-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets top border color to yellow-600",
  },
  {
    label: "border-t-yellow-700",
    value: "border-t-yellow-700",
    styles:
      "border-top-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets top border color to yellow-700",
  },
  {
    label: "border-t-yellow-800",
    value: "border-t-yellow-800",
    styles:
      "border-top-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets top border color to yellow-800",
  },
  {
    label: "border-t-yellow-900",
    value: "border-t-yellow-900",
    styles:
      "border-top-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets top border color to yellow-900",
  },
  {
    label: "border-t-yellow-950",
    value: "border-t-yellow-950",
    styles:
      "border-top-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets top border color to yellow-950",
  },
  {
    label: "border-t-lime-50",
    value: "border-t-lime-50",
    styles:
      "border-top-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets top border color to lime-50",
  },
  {
    label: "border-t-lime-100",
    value: "border-t-lime-100",
    styles:
      "border-top-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets top border color to lime-100",
  },
  {
    label: "border-t-lime-200",
    value: "border-t-lime-200",
    styles:
      "border-top-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets top border color to lime-200",
  },
  {
    label: "border-t-lime-300",
    value: "border-t-lime-300",
    styles:
      "border-top-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets top border color to lime-300",
  },
  {
    label: "border-t-lime-400",
    value: "border-t-lime-400",
    styles:
      "border-top-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets top border color to lime-400",
  },
  {
    label: "border-t-lime-500",
    value: "border-t-lime-500",
    styles:
      "border-top-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets top border color to lime-500",
  },
  {
    label: "border-t-lime-600",
    value: "border-t-lime-600",
    styles:
      "border-top-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets top border color to lime-600",
  },
  {
    label: "border-t-lime-700",
    value: "border-t-lime-700",
    styles:
      "border-top-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets top border color to lime-700",
  },
  {
    label: "border-t-lime-800",
    value: "border-t-lime-800",
    styles:
      "border-top-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets top border color to lime-800",
  },
  {
    label: "border-t-lime-900",
    value: "border-t-lime-900",
    styles:
      "border-top-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets top border color to lime-900",
  },
  {
    label: "border-t-lime-950",
    value: "border-t-lime-950",
    styles:
      "border-top-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets top border color to lime-950",
  },
  {
    label: "border-t-green-50",
    value: "border-t-green-50",
    styles:
      "border-top-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets top border color to green-50",
  },
  {
    label: "border-t-green-100",
    value: "border-t-green-100",
    styles:
      "border-top-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets top border color to green-100",
  },
  {
    label: "border-t-green-200",
    value: "border-t-green-200",
    styles:
      "border-top-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets top border color to green-200",
  },
  {
    label: "border-t-green-300",
    value: "border-t-green-300",
    styles:
      "border-top-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets top border color to green-300",
  },
  {
    label: "border-t-green-400",
    value: "border-t-green-400",
    styles:
      "border-top-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets top border color to green-400",
  },
  {
    label: "border-t-green-500",
    value: "border-t-green-500",
    styles:
      "border-top-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets top border color to green-500",
  },
  {
    label: "border-t-green-600",
    value: "border-t-green-600",
    styles:
      "border-top-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets top border color to green-600",
  },
  {
    label: "border-t-green-700",
    value: "border-t-green-700",
    styles:
      "border-top-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets top border color to green-700",
  },
  {
    label: "border-t-green-800",
    value: "border-t-green-800",
    styles:
      "border-top-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets top border color to green-800",
  },
  {
    label: "border-t-green-900",
    value: "border-t-green-900",
    styles:
      "border-top-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets top border color to green-900",
  },
  {
    label: "border-t-green-950",
    value: "border-t-green-950",
    styles:
      "border-top-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets top border color to green-950",
  },
  {
    label: "border-t-emerald-50",
    value: "border-t-emerald-50",
    styles:
      "border-top-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets top border color to emerald-50",
  },
  {
    label: "border-t-emerald-100",
    value: "border-t-emerald-100",
    styles:
      "border-top-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets top border color to emerald-100",
  },
  {
    label: "border-t-emerald-200",
    value: "border-t-emerald-200",
    styles:
      "border-top-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets top border color to emerald-200",
  },
  {
    label: "border-t-emerald-300",
    value: "border-t-emerald-300",
    styles:
      "border-top-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets top border color to emerald-300",
  },
  {
    label: "border-t-emerald-400",
    value: "border-t-emerald-400",
    styles:
      "border-top-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets top border color to emerald-400",
  },
  {
    label: "border-t-emerald-500",
    value: "border-t-emerald-500",
    styles:
      "border-top-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets top border color to emerald-500",
  },
  {
    label: "border-t-emerald-600",
    value: "border-t-emerald-600",
    styles:
      "border-top-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets top border color to emerald-600",
  },
  {
    label: "border-t-emerald-700",
    value: "border-t-emerald-700",
    styles:
      "border-top-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets top border color to emerald-700",
  },
  {
    label: "border-t-emerald-800",
    value: "border-t-emerald-800",
    styles:
      "border-top-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets top border color to emerald-800",
  },
  {
    label: "border-t-emerald-900",
    value: "border-t-emerald-900",
    styles:
      "border-top-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets top border color to emerald-900",
  },
  {
    label: "border-t-emerald-950",
    value: "border-t-emerald-950",
    styles:
      "border-top-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets top border color to emerald-950",
  },
  {
    label: "border-t-teal-50",
    value: "border-t-teal-50",
    styles:
      "border-top-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets top border color to teal-50",
  },
  {
    label: "border-t-teal-100",
    value: "border-t-teal-100",
    styles:
      "border-top-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets top border color to teal-100",
  },
  {
    label: "border-t-teal-200",
    value: "border-t-teal-200",
    styles:
      "border-top-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets top border color to teal-200",
  },
  {
    label: "border-t-teal-300",
    value: "border-t-teal-300",
    styles:
      "border-top-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets top border color to teal-300",
  },
  {
    label: "border-t-teal-400",
    value: "border-t-teal-400",
    styles:
      "border-top-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets top border color to teal-400",
  },
  {
    label: "border-t-teal-500",
    value: "border-t-teal-500",
    styles:
      "border-top-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets top border color to teal-500",
  },
  {
    label: "border-t-teal-600",
    value: "border-t-teal-600",
    styles:
      "border-top-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets top border color to teal-600",
  },
  {
    label: "border-t-teal-700",
    value: "border-t-teal-700",
    styles:
      "border-top-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets top border color to teal-700",
  },
  {
    label: "border-t-teal-800",
    value: "border-t-teal-800",
    styles:
      "border-top-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets top border color to teal-800",
  },
  {
    label: "border-t-teal-900",
    value: "border-t-teal-900",
    styles:
      "border-top-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets top border color to teal-900",
  },
  {
    label: "border-t-teal-950",
    value: "border-t-teal-950",
    styles:
      "border-top-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets top border color to teal-950",
  },
  {
    label: "border-t-cyan-50",
    value: "border-t-cyan-50",
    styles:
      "border-top-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets top border color to cyan-50",
  },
  {
    label: "border-t-cyan-100",
    value: "border-t-cyan-100",
    styles:
      "border-top-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets top border color to cyan-100",
  },
  {
    label: "border-t-cyan-200",
    value: "border-t-cyan-200",
    styles:
      "border-top-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets top border color to cyan-200",
  },
  {
    label: "border-t-cyan-300",
    value: "border-t-cyan-300",
    styles:
      "border-top-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets top border color to cyan-300",
  },
  {
    label: "border-t-cyan-400",
    value: "border-t-cyan-400",
    styles:
      "border-top-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets top border color to cyan-400",
  },
  {
    label: "border-t-cyan-500",
    value: "border-t-cyan-500",
    styles:
      "border-top-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets top border color to cyan-500",
  },
  {
    label: "border-t-cyan-600",
    value: "border-t-cyan-600",
    styles:
      "border-top-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets top border color to cyan-600",
  },
  {
    label: "border-t-cyan-700",
    value: "border-t-cyan-700",
    styles:
      "border-top-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets top border color to cyan-700",
  },
  {
    label: "border-t-cyan-800",
    value: "border-t-cyan-800",
    styles:
      "border-top-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets top border color to cyan-800",
  },
  {
    label: "border-t-cyan-900",
    value: "border-t-cyan-900",
    styles:
      "border-top-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets top border color to cyan-900",
  },
  {
    label: "border-t-cyan-950",
    value: "border-t-cyan-950",
    styles:
      "border-top-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets top border color to cyan-950",
  },
  {
    label: "border-t-sky-50",
    value: "border-t-sky-50",
    styles:
      "border-top-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets top border color to sky-50",
  },
  {
    label: "border-t-sky-100",
    value: "border-t-sky-100",
    styles:
      "border-top-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets top border color to sky-100",
  },
  {
    label: "border-t-sky-200",
    value: "border-t-sky-200",
    styles:
      "border-top-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets top border color to sky-200",
  },
  {
    label: "border-t-sky-300",
    value: "border-t-sky-300",
    styles:
      "border-top-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets top border color to sky-300",
  },
  {
    label: "border-t-sky-400",
    value: "border-t-sky-400",
    styles:
      "border-top-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets top border color to sky-400",
  },
  {
    label: "border-t-sky-500",
    value: "border-t-sky-500",
    styles:
      "border-top-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets top border color to sky-500",
  },
  {
    label: "border-t-sky-600",
    value: "border-t-sky-600",
    styles:
      "border-top-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets top border color to sky-600",
  },
  {
    label: "border-t-sky-700",
    value: "border-t-sky-700",
    styles:
      "border-top-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets top border color to sky-700",
  },
  {
    label: "border-t-sky-800",
    value: "border-t-sky-800",
    styles:
      "border-top-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets top border color to sky-800",
  },
  {
    label: "border-t-sky-900",
    value: "border-t-sky-900",
    styles:
      "border-top-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets top border color to sky-900",
  },
  {
    label: "border-t-sky-950",
    value: "border-t-sky-950",
    styles:
      "border-top-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets top border color to sky-950",
  },
  {
    label: "border-t-blue-50",
    value: "border-t-blue-50",
    styles:
      "border-top-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets top border color to blue-50",
  },
  {
    label: "border-t-blue-100",
    value: "border-t-blue-100",
    styles:
      "border-top-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets top border color to blue-100",
  },
  {
    label: "border-t-blue-200",
    value: "border-t-blue-200",
    styles:
      "border-top-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets top border color to blue-200",
  },
  {
    label: "border-t-blue-300",
    value: "border-t-blue-300",
    styles:
      "border-top-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets top border color to blue-300",
  },
  {
    label: "border-t-blue-400",
    value: "border-t-blue-400",
    styles:
      "border-top-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets top border color to blue-400",
  },
  {
    label: "border-t-blue-500",
    value: "border-t-blue-500",
    styles:
      "border-top-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets top border color to blue-500",
  },
  {
    label: "border-t-blue-600",
    value: "border-t-blue-600",
    styles:
      "border-top-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets top border color to blue-600",
  },
  {
    label: "border-t-blue-700",
    value: "border-t-blue-700",
    styles:
      "border-top-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets top border color to blue-700",
  },
  {
    label: "border-t-blue-800",
    value: "border-t-blue-800",
    styles:
      "border-top-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets top border color to blue-800",
  },
  {
    label: "border-t-blue-900",
    value: "border-t-blue-900",
    styles:
      "border-top-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets top border color to blue-900",
  },
  {
    label: "border-t-blue-950",
    value: "border-t-blue-950",
    styles:
      "border-top-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets top border color to blue-950",
  },
  {
    label: "border-t-indigo-50",
    value: "border-t-indigo-50",
    styles:
      "border-top-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets top border color to indigo-50",
  },
  {
    label: "border-t-indigo-100",
    value: "border-t-indigo-100",
    styles:
      "border-top-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets top border color to indigo-100",
  },
  {
    label: "border-t-indigo-200",
    value: "border-t-indigo-200",
    styles:
      "border-top-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets top border color to indigo-200",
  },
  {
    label: "border-t-indigo-300",
    value: "border-t-indigo-300",
    styles:
      "border-top-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets top border color to indigo-300",
  },
  {
    label: "border-t-indigo-400",
    value: "border-t-indigo-400",
    styles:
      "border-top-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets top border color to indigo-400",
  },
  {
    label: "border-t-indigo-500",
    value: "border-t-indigo-500",
    styles:
      "border-top-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets top border color to indigo-500",
  },
  {
    label: "border-t-indigo-600",
    value: "border-t-indigo-600",
    styles:
      "border-top-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets top border color to indigo-600",
  },
  {
    label: "border-t-indigo-700",
    value: "border-t-indigo-700",
    styles:
      "border-top-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets top border color to indigo-700",
  },
  {
    label: "border-t-indigo-800",
    value: "border-t-indigo-800",
    styles:
      "border-top-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets top border color to indigo-800",
  },
  {
    label: "border-t-indigo-900",
    value: "border-t-indigo-900",
    styles:
      "border-top-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets top border color to indigo-900",
  },
  {
    label: "border-t-indigo-950",
    value: "border-t-indigo-950",
    styles:
      "border-top-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets top border color to indigo-950",
  },
  {
    label: "border-t-violet-50",
    value: "border-t-violet-50",
    styles:
      "border-top-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets top border color to violet-50",
  },
  {
    label: "border-t-violet-100",
    value: "border-t-violet-100",
    styles:
      "border-top-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets top border color to violet-100",
  },
  {
    label: "border-t-violet-200",
    value: "border-t-violet-200",
    styles:
      "border-top-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets top border color to violet-200",
  },
  {
    label: "border-t-violet-300",
    value: "border-t-violet-300",
    styles:
      "border-top-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets top border color to violet-300",
  },
  {
    label: "border-t-violet-400",
    value: "border-t-violet-400",
    styles:
      "border-top-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets top border color to violet-400",
  },
  {
    label: "border-t-violet-500",
    value: "border-t-violet-500",
    styles:
      "border-top-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets top border color to violet-500",
  },
  {
    label: "border-t-violet-600",
    value: "border-t-violet-600",
    styles:
      "border-top-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets top border color to violet-600",
  },
  {
    label: "border-t-violet-700",
    value: "border-t-violet-700",
    styles:
      "border-top-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets top border color to violet-700",
  },
  {
    label: "border-t-violet-800",
    value: "border-t-violet-800",
    styles:
      "border-top-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets top border color to violet-800",
  },
  {
    label: "border-t-violet-900",
    value: "border-t-violet-900",
    styles:
      "border-top-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets top border color to violet-900",
  },
  {
    label: "border-t-violet-950",
    value: "border-t-violet-950",
    styles:
      "border-top-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets top border color to violet-950",
  },
  {
    label: "border-t-purple-50",
    value: "border-t-purple-50",
    styles:
      "border-top-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets top border color to purple-50",
  },
  {
    label: "border-t-purple-100",
    value: "border-t-purple-100",
    styles:
      "border-top-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets top border color to purple-100",
  },
  {
    label: "border-t-purple-200",
    value: "border-t-purple-200",
    styles:
      "border-top-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets top border color to purple-200",
  },
  {
    label: "border-t-purple-300",
    value: "border-t-purple-300",
    styles:
      "border-top-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets top border color to purple-300",
  },
  {
    label: "border-t-purple-400",
    value: "border-t-purple-400",
    styles:
      "border-top-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets top border color to purple-400",
  },
  {
    label: "border-t-purple-500",
    value: "border-t-purple-500",
    styles:
      "border-top-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets top border color to purple-500",
  },
  {
    label: "border-t-purple-600",
    value: "border-t-purple-600",
    styles:
      "border-top-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets top border color to purple-600",
  },
  {
    label: "border-t-purple-700",
    value: "border-t-purple-700",
    styles:
      "border-top-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets top border color to purple-700",
  },
  {
    label: "border-t-purple-800",
    value: "border-t-purple-800",
    styles:
      "border-top-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets top border color to purple-800",
  },
  {
    label: "border-t-purple-900",
    value: "border-t-purple-900",
    styles:
      "border-top-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets top border color to purple-900",
  },
  {
    label: "border-t-purple-950",
    value: "border-t-purple-950",
    styles:
      "border-top-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets top border color to purple-950",
  },
  {
    label: "border-t-fuchsia-50",
    value: "border-t-fuchsia-50",
    styles:
      "border-top-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets top border color to fuchsia-50",
  },
  {
    label: "border-t-fuchsia-100",
    value: "border-t-fuchsia-100",
    styles:
      "border-top-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets top border color to fuchsia-100",
  },
  {
    label: "border-t-fuchsia-200",
    value: "border-t-fuchsia-200",
    styles:
      "border-top-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets top border color to fuchsia-200",
  },
  {
    label: "border-t-fuchsia-300",
    value: "border-t-fuchsia-300",
    styles:
      "border-top-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets top border color to fuchsia-300",
  },
  {
    label: "border-t-fuchsia-400",
    value: "border-t-fuchsia-400",
    styles:
      "border-top-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets top border color to fuchsia-400",
  },
  {
    label: "border-t-fuchsia-500",
    value: "border-t-fuchsia-500",
    styles:
      "border-top-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets top border color to fuchsia-500",
  },
  {
    label: "border-t-fuchsia-600",
    value: "border-t-fuchsia-600",
    styles:
      "border-top-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets top border color to fuchsia-600",
  },
  {
    label: "border-t-fuchsia-700",
    value: "border-t-fuchsia-700",
    styles:
      "border-top-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets top border color to fuchsia-700",
  },
  {
    label: "border-t-fuchsia-800",
    value: "border-t-fuchsia-800",
    styles:
      "border-top-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets top border color to fuchsia-800",
  },
  {
    label: "border-t-fuchsia-900",
    value: "border-t-fuchsia-900",
    styles:
      "border-top-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets top border color to fuchsia-900",
  },
  {
    label: "border-t-fuchsia-950",
    value: "border-t-fuchsia-950",
    styles:
      "border-top-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets top border color to fuchsia-950",
  },
  {
    label: "border-t-pink-50",
    value: "border-t-pink-50",
    styles:
      "border-top-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets top border color to pink-50",
  },
  {
    label: "border-t-pink-100",
    value: "border-t-pink-100",
    styles:
      "border-top-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets top border color to pink-100",
  },
  {
    label: "border-t-pink-200",
    value: "border-t-pink-200",
    styles:
      "border-top-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets top border color to pink-200",
  },
  {
    label: "border-t-pink-300",
    value: "border-t-pink-300",
    styles:
      "border-top-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets top border color to pink-300",
  },
  {
    label: "border-t-pink-400",
    value: "border-t-pink-400",
    styles:
      "border-top-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets top border color to pink-400",
  },
  {
    label: "border-t-pink-500",
    value: "border-t-pink-500",
    styles:
      "border-top-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets top border color to pink-500",
  },
  {
    label: "border-t-pink-600",
    value: "border-t-pink-600",
    styles:
      "border-top-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets top border color to pink-600",
  },
  {
    label: "border-t-pink-700",
    value: "border-t-pink-700",
    styles:
      "border-top-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets top border color to pink-700",
  },
  {
    label: "border-t-pink-800",
    value: "border-t-pink-800",
    styles:
      "border-top-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets top border color to pink-800",
  },
  {
    label: "border-t-pink-900",
    value: "border-t-pink-900",
    styles:
      "border-top-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets top border color to pink-900",
  },
  {
    label: "border-t-pink-950",
    value: "border-t-pink-950",
    styles:
      "border-top-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets top border color to pink-950",
  },
  {
    label: "border-t-rose-50",
    value: "border-t-rose-50",
    styles:
      "border-top-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets top border color to rose-50",
  },
  {
    label: "border-t-rose-100",
    value: "border-t-rose-100",
    styles:
      "border-top-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets top border color to rose-100",
  },
  {
    label: "border-t-rose-200",
    value: "border-t-rose-200",
    styles:
      "border-top-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets top border color to rose-200",
  },
  {
    label: "border-t-rose-300",
    value: "border-t-rose-300",
    styles:
      "border-top-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets top border color to rose-300",
  },
  {
    label: "border-t-rose-400",
    value: "border-t-rose-400",
    styles:
      "border-top-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets top border color to rose-400",
  },
  {
    label: "border-t-rose-500",
    value: "border-t-rose-500",
    styles:
      "border-top-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets top border color to rose-500",
  },
  {
    label: "border-t-rose-600",
    value: "border-t-rose-600",
    styles:
      "border-top-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets top border color to rose-600",
  },
  {
    label: "border-t-rose-700",
    value: "border-t-rose-700",
    styles:
      "border-top-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets top border color to rose-700",
  },
  {
    label: "border-t-rose-800",
    value: "border-t-rose-800",
    styles:
      "border-top-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets top border color to rose-800",
  },
  {
    label: "border-t-rose-900",
    value: "border-t-rose-900",
    styles:
      "border-top-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets top border color to rose-900",
  },
  {
    label: "border-t-rose-950",
    value: "border-t-rose-950",
    styles:
      "border-top-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets top border color to rose-950",
  },
  {
    label: "border-t-slate-50",
    value: "border-t-slate-50",
    styles:
      "border-top-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets top border color to slate-50",
  },
  {
    label: "border-t-slate-100",
    value: "border-t-slate-100",
    styles:
      "border-top-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets top border color to slate-100",
  },
  {
    label: "border-t-slate-200",
    value: "border-t-slate-200",
    styles:
      "border-top-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets top border color to slate-200",
  },
  {
    label: "border-t-slate-300",
    value: "border-t-slate-300",
    styles:
      "border-top-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets top border color to slate-300",
  },
  {
    label: "border-t-slate-400",
    value: "border-t-slate-400",
    styles:
      "border-top-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets top border color to slate-400",
  },
  {
    label: "border-t-slate-500",
    value: "border-t-slate-500",
    styles:
      "border-top-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets top border color to slate-500",
  },
  {
    label: "border-t-slate-600",
    value: "border-t-slate-600",
    styles:
      "border-top-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets top border color to slate-600",
  },
  {
    label: "border-t-slate-700",
    value: "border-t-slate-700",
    styles:
      "border-top-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets top border color to slate-700",
  },
  {
    label: "border-t-slate-800",
    value: "border-t-slate-800",
    styles:
      "border-top-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets top border color to slate-800",
  },
  {
    label: "border-t-slate-900",
    value: "border-t-slate-900",
    styles:
      "border-top-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets top border color to slate-900",
  },
  {
    label: "border-t-slate-950",
    value: "border-t-slate-950",
    styles:
      "border-top-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets top border color to slate-950",
  },
  {
    label: "border-t-gray-50",
    value: "border-t-gray-50",
    styles:
      "border-top-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets top border color to gray-50",
  },
  {
    label: "border-t-gray-100",
    value: "border-t-gray-100",
    styles:
      "border-top-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets top border color to gray-100",
  },
  {
    label: "border-t-gray-200",
    value: "border-t-gray-200",
    styles:
      "border-top-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets top border color to gray-200",
  },
  {
    label: "border-t-gray-300",
    value: "border-t-gray-300",
    styles:
      "border-top-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets top border color to gray-300",
  },
  {
    label: "border-t-gray-400",
    value: "border-t-gray-400",
    styles:
      "border-top-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets top border color to gray-400",
  },
  {
    label: "border-t-gray-500",
    value: "border-t-gray-500",
    styles:
      "border-top-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets top border color to gray-500",
  },
  {
    label: "border-t-gray-600",
    value: "border-t-gray-600",
    styles:
      "border-top-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets top border color to gray-600",
  },
  {
    label: "border-t-gray-700",
    value: "border-t-gray-700",
    styles:
      "border-top-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets top border color to gray-700",
  },
  {
    label: "border-t-gray-800",
    value: "border-t-gray-800",
    styles:
      "border-top-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets top border color to gray-800",
  },
  {
    label: "border-t-gray-900",
    value: "border-t-gray-900",
    styles:
      "border-top-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets top border color to gray-900",
  },
  {
    label: "border-t-gray-950",
    value: "border-t-gray-950",
    styles:
      "border-top-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets top border color to gray-950",
  },
  {
    label: "border-t-zinc-50",
    value: "border-t-zinc-50",
    styles: "border-top-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets top border color to zinc-50",
  },
  {
    label: "border-t-zinc-100",
    value: "border-t-zinc-100",
    styles:
      "border-top-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets top border color to zinc-100",
  },
  {
    label: "border-t-zinc-200",
    value: "border-t-zinc-200",
    styles:
      "border-top-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets top border color to zinc-200",
  },
  {
    label: "border-t-zinc-300",
    value: "border-t-zinc-300",
    styles:
      "border-top-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets top border color to zinc-300",
  },
  {
    label: "border-t-zinc-400",
    value: "border-t-zinc-400",
    styles:
      "border-top-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets top border color to zinc-400",
  },
  {
    label: "border-t-zinc-500",
    value: "border-t-zinc-500",
    styles:
      "border-top-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets top border color to zinc-500",
  },
  {
    label: "border-t-zinc-600",
    value: "border-t-zinc-600",
    styles:
      "border-top-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets top border color to zinc-600",
  },
  {
    label: "border-t-zinc-700",
    value: "border-t-zinc-700",
    styles:
      "border-top-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets top border color to zinc-700",
  },
  {
    label: "border-t-zinc-800",
    value: "border-t-zinc-800",
    styles:
      "border-top-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets top border color to zinc-800",
  },
  {
    label: "border-t-zinc-900",
    value: "border-t-zinc-900",
    styles:
      "border-top-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets top border color to zinc-900",
  },
  {
    label: "border-t-zinc-950",
    value: "border-t-zinc-950",
    styles:
      "border-top-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets top border color to zinc-950",
  },
  {
    label: "border-t-neutral-50",
    value: "border-t-neutral-50",
    styles: "border-top-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets top border color to neutral-50",
  },
  {
    label: "border-t-neutral-100",
    value: "border-t-neutral-100",
    styles: "border-top-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets top border color to neutral-100",
  },
  {
    label: "border-t-neutral-200",
    value: "border-t-neutral-200",
    styles:
      "border-top-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets top border color to neutral-200",
  },
  {
    label: "border-t-neutral-300",
    value: "border-t-neutral-300",
    styles: "border-top-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets top border color to neutral-300",
  },
  {
    label: "border-t-neutral-400",
    value: "border-t-neutral-400",
    styles:
      "border-top-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets top border color to neutral-400",
  },
  {
    label: "border-t-neutral-500",
    value: "border-t-neutral-500",
    styles:
      "border-top-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets top border color to neutral-500",
  },
  {
    label: "border-t-neutral-600",
    value: "border-t-neutral-600",
    styles:
      "border-top-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets top border color to neutral-600",
  },
  {
    label: "border-t-neutral-700",
    value: "border-t-neutral-700",
    styles:
      "border-top-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets top border color to neutral-700",
  },
  {
    label: "border-t-neutral-800",
    value: "border-t-neutral-800",
    styles:
      "border-top-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets top border color to neutral-800",
  },
  {
    label: "border-t-neutral-900",
    value: "border-t-neutral-900",
    styles:
      "border-top-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets top border color to neutral-900",
  },
  {
    label: "border-t-neutral-950",
    value: "border-t-neutral-950",
    styles:
      "border-top-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets top border color to neutral-950",
  },
  {
    label: "border-t-stone-50",
    value: "border-t-stone-50",
    styles:
      "border-top-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets top border color to stone-50",
  },
  {
    label: "border-t-stone-100",
    value: "border-t-stone-100",
    styles:
      "border-top-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets top border color to stone-100",
  },
  {
    label: "border-t-stone-200",
    value: "border-t-stone-200",
    styles:
      "border-top-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets top border color to stone-200",
  },
  {
    label: "border-t-stone-300",
    value: "border-t-stone-300",
    styles:
      "border-top-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets top border color to stone-300",
  },
  {
    label: "border-t-stone-400",
    value: "border-t-stone-400",
    styles:
      "border-top-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets top border color to stone-400",
  },
  {
    label: "border-t-stone-500",
    value: "border-t-stone-500",
    styles:
      "border-top-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets top border color to stone-500",
  },
  {
    label: "border-t-stone-600",
    value: "border-t-stone-600",
    styles:
      "border-top-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets top border color to stone-600",
  },
  {
    label: "border-t-stone-700",
    value: "border-t-stone-700",
    styles:
      "border-top-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets top border color to stone-700",
  },
  {
    label: "border-t-stone-800",
    value: "border-t-stone-800",
    styles:
      "border-top-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets top border color to stone-800",
  },
  {
    label: "border-t-stone-900",
    value: "border-t-stone-900",
    styles:
      "border-top-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets top border color to stone-900",
  },
  {
    label: "border-t-stone-950",
    value: "border-t-stone-950",
    styles:
      "border-top-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets top border color to stone-950",
  },
  {
    label: "border-t-(<custom-property>)",
    value: "border-t-(<custom-property>)",
    styles: "border-top-color: var(<custom-property>);",
    description: "Sets top border color to (<custom-property>)",
  },
  {
    label: "border-t-[<value>]",
    value: "border-t-[<value>]",
    styles: "border-top-color: <value>;",
    description: "Sets top border color to [<value>]",
  },
  {
    label: "border-r-inherit",
    value: "border-r-inherit",
    styles: "border-right-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-r-current",
    value: "border-r-current",
    styles: "border-right-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-r-transparent",
    value: "border-r-transparent",
    styles: "border-right-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-r-black",
    value: "border-r-black",
    styles: "border-right-color: var(--color-black); /* #000 */",
    description: "Sets right border color to black",
  },
  {
    label: "border-r-white",
    value: "border-r-white",
    styles: "border-right-color: var(--color-white); /* #fff */",
    description: "Sets right border color to white",
  },
  {
    label: "border-r-red-50",
    value: "border-r-red-50",
    styles:
      "border-right-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets right border color to red-50",
  },
  {
    label: "border-r-red-100",
    value: "border-r-red-100",
    styles:
      "border-right-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets right border color to red-100",
  },
  {
    label: "border-r-red-200",
    value: "border-r-red-200",
    styles:
      "border-right-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets right border color to red-200",
  },
  {
    label: "border-r-red-300",
    value: "border-r-red-300",
    styles:
      "border-right-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets right border color to red-300",
  },
  {
    label: "border-r-red-400",
    value: "border-r-red-400",
    styles:
      "border-right-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets right border color to red-400",
  },
  {
    label: "border-r-red-500",
    value: "border-r-red-500",
    styles:
      "border-right-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets right border color to red-500",
  },
  {
    label: "border-r-red-600",
    value: "border-r-red-600",
    styles:
      "border-right-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets right border color to red-600",
  },
  {
    label: "border-r-red-700",
    value: "border-r-red-700",
    styles:
      "border-right-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets right border color to red-700",
  },
  {
    label: "border-r-red-800",
    value: "border-r-red-800",
    styles:
      "border-right-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets right border color to red-800",
  },
  {
    label: "border-r-red-900",
    value: "border-r-red-900",
    styles:
      "border-right-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets right border color to red-900",
  },
  {
    label: "border-r-red-950",
    value: "border-r-red-950",
    styles:
      "border-right-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets right border color to red-950",
  },
  {
    label: "border-r-orange-50",
    value: "border-r-orange-50",
    styles:
      "border-right-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets right border color to orange-50",
  },
  {
    label: "border-r-orange-100",
    value: "border-r-orange-100",
    styles:
      "border-right-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets right border color to orange-100",
  },
  {
    label: "border-r-orange-200",
    value: "border-r-orange-200",
    styles:
      "border-right-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets right border color to orange-200",
  },
  {
    label: "border-r-orange-300",
    value: "border-r-orange-300",
    styles:
      "border-right-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets right border color to orange-300",
  },
  {
    label: "border-r-orange-400",
    value: "border-r-orange-400",
    styles:
      "border-right-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets right border color to orange-400",
  },
  {
    label: "border-r-orange-500",
    value: "border-r-orange-500",
    styles:
      "border-right-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets right border color to orange-500",
  },
  {
    label: "border-r-orange-600",
    value: "border-r-orange-600",
    styles:
      "border-right-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets right border color to orange-600",
  },
  {
    label: "border-r-orange-700",
    value: "border-r-orange-700",
    styles:
      "border-right-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets right border color to orange-700",
  },
  {
    label: "border-r-orange-800",
    value: "border-r-orange-800",
    styles:
      "border-right-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets right border color to orange-800",
  },
  {
    label: "border-r-orange-900",
    value: "border-r-orange-900",
    styles:
      "border-right-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets right border color to orange-900",
  },
  {
    label: "border-r-orange-950",
    value: "border-r-orange-950",
    styles:
      "border-right-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets right border color to orange-950",
  },
  {
    label: "border-r-amber-50",
    value: "border-r-amber-50",
    styles:
      "border-right-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets right border color to amber-50",
  },
  {
    label: "border-r-amber-100",
    value: "border-r-amber-100",
    styles:
      "border-right-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets right border color to amber-100",
  },
  {
    label: "border-r-amber-200",
    value: "border-r-amber-200",
    styles:
      "border-right-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets right border color to amber-200",
  },
  {
    label: "border-r-amber-300",
    value: "border-r-amber-300",
    styles:
      "border-right-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets right border color to amber-300",
  },
  {
    label: "border-r-amber-400",
    value: "border-r-amber-400",
    styles:
      "border-right-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets right border color to amber-400",
  },
  {
    label: "border-r-amber-500",
    value: "border-r-amber-500",
    styles:
      "border-right-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets right border color to amber-500",
  },
  {
    label: "border-r-amber-600",
    value: "border-r-amber-600",
    styles:
      "border-right-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets right border color to amber-600",
  },
  {
    label: "border-r-amber-700",
    value: "border-r-amber-700",
    styles:
      "border-right-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets right border color to amber-700",
  },
  {
    label: "border-r-amber-800",
    value: "border-r-amber-800",
    styles:
      "border-right-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets right border color to amber-800",
  },
  {
    label: "border-r-amber-900",
    value: "border-r-amber-900",
    styles:
      "border-right-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets right border color to amber-900",
  },
  {
    label: "border-r-amber-950",
    value: "border-r-amber-950",
    styles:
      "border-right-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets right border color to amber-950",
  },
  {
    label: "border-r-yellow-50",
    value: "border-r-yellow-50",
    styles:
      "border-right-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets right border color to yellow-50",
  },
  {
    label: "border-r-yellow-100",
    value: "border-r-yellow-100",
    styles:
      "border-right-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets right border color to yellow-100",
  },
  {
    label: "border-r-yellow-200",
    value: "border-r-yellow-200",
    styles:
      "border-right-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets right border color to yellow-200",
  },
  {
    label: "border-r-yellow-300",
    value: "border-r-yellow-300",
    styles:
      "border-right-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets right border color to yellow-300",
  },
  {
    label: "border-r-yellow-400",
    value: "border-r-yellow-400",
    styles:
      "border-right-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets right border color to yellow-400",
  },
  {
    label: "border-r-yellow-500",
    value: "border-r-yellow-500",
    styles:
      "border-right-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets right border color to yellow-500",
  },
  {
    label: "border-r-yellow-600",
    value: "border-r-yellow-600",
    styles:
      "border-right-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets right border color to yellow-600",
  },
  {
    label: "border-r-yellow-700",
    value: "border-r-yellow-700",
    styles:
      "border-right-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets right border color to yellow-700",
  },
  {
    label: "border-r-yellow-800",
    value: "border-r-yellow-800",
    styles:
      "border-right-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets right border color to yellow-800",
  },
  {
    label: "border-r-yellow-900",
    value: "border-r-yellow-900",
    styles:
      "border-right-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets right border color to yellow-900",
  },
  {
    label: "border-r-yellow-950",
    value: "border-r-yellow-950",
    styles:
      "border-right-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets right border color to yellow-950",
  },
  {
    label: "border-r-lime-50",
    value: "border-r-lime-50",
    styles:
      "border-right-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets right border color to lime-50",
  },
  {
    label: "border-r-lime-100",
    value: "border-r-lime-100",
    styles:
      "border-right-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets right border color to lime-100",
  },
  {
    label: "border-r-lime-200",
    value: "border-r-lime-200",
    styles:
      "border-right-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets right border color to lime-200",
  },
  {
    label: "border-r-lime-300",
    value: "border-r-lime-300",
    styles:
      "border-right-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets right border color to lime-300",
  },
  {
    label: "border-r-lime-400",
    value: "border-r-lime-400",
    styles:
      "border-right-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets right border color to lime-400",
  },
  {
    label: "border-r-lime-500",
    value: "border-r-lime-500",
    styles:
      "border-right-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets right border color to lime-500",
  },
  {
    label: "border-r-lime-600",
    value: "border-r-lime-600",
    styles:
      "border-right-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets right border color to lime-600",
  },
  {
    label: "border-r-lime-700",
    value: "border-r-lime-700",
    styles:
      "border-right-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets right border color to lime-700",
  },
  {
    label: "border-r-lime-800",
    value: "border-r-lime-800",
    styles:
      "border-right-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets right border color to lime-800",
  },
  {
    label: "border-r-lime-900",
    value: "border-r-lime-900",
    styles:
      "border-right-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets right border color to lime-900",
  },
  {
    label: "border-r-lime-950",
    value: "border-r-lime-950",
    styles:
      "border-right-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets right border color to lime-950",
  },
  {
    label: "border-r-green-50",
    value: "border-r-green-50",
    styles:
      "border-right-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets right border color to green-50",
  },
  {
    label: "border-r-green-100",
    value: "border-r-green-100",
    styles:
      "border-right-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets right border color to green-100",
  },
  {
    label: "border-r-green-200",
    value: "border-r-green-200",
    styles:
      "border-right-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets right border color to green-200",
  },
  {
    label: "border-r-green-300",
    value: "border-r-green-300",
    styles:
      "border-right-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets right border color to green-300",
  },
  {
    label: "border-r-green-400",
    value: "border-r-green-400",
    styles:
      "border-right-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets right border color to green-400",
  },
  {
    label: "border-r-green-500",
    value: "border-r-green-500",
    styles:
      "border-right-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets right border color to green-500",
  },
  {
    label: "border-r-green-600",
    value: "border-r-green-600",
    styles:
      "border-right-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets right border color to green-600",
  },
  {
    label: "border-r-green-700",
    value: "border-r-green-700",
    styles:
      "border-right-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets right border color to green-700",
  },
  {
    label: "border-r-green-800",
    value: "border-r-green-800",
    styles:
      "border-right-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets right border color to green-800",
  },
  {
    label: "border-r-green-900",
    value: "border-r-green-900",
    styles:
      "border-right-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets right border color to green-900",
  },
  {
    label: "border-r-green-950",
    value: "border-r-green-950",
    styles:
      "border-right-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets right border color to green-950",
  },
  {
    label: "border-r-emerald-50",
    value: "border-r-emerald-50",
    styles:
      "border-right-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets right border color to emerald-50",
  },
  {
    label: "border-r-emerald-100",
    value: "border-r-emerald-100",
    styles:
      "border-right-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets right border color to emerald-100",
  },
  {
    label: "border-r-emerald-200",
    value: "border-r-emerald-200",
    styles:
      "border-right-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets right border color to emerald-200",
  },
  {
    label: "border-r-emerald-300",
    value: "border-r-emerald-300",
    styles:
      "border-right-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets right border color to emerald-300",
  },
  {
    label: "border-r-emerald-400",
    value: "border-r-emerald-400",
    styles:
      "border-right-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets right border color to emerald-400",
  },
  {
    label: "border-r-emerald-500",
    value: "border-r-emerald-500",
    styles:
      "border-right-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets right border color to emerald-500",
  },
  {
    label: "border-r-emerald-600",
    value: "border-r-emerald-600",
    styles:
      "border-right-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets right border color to emerald-600",
  },
  {
    label: "border-r-emerald-700",
    value: "border-r-emerald-700",
    styles:
      "border-right-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets right border color to emerald-700",
  },
  {
    label: "border-r-emerald-800",
    value: "border-r-emerald-800",
    styles:
      "border-right-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets right border color to emerald-800",
  },
  {
    label: "border-r-emerald-900",
    value: "border-r-emerald-900",
    styles:
      "border-right-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets right border color to emerald-900",
  },
  {
    label: "border-r-emerald-950",
    value: "border-r-emerald-950",
    styles:
      "border-right-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets right border color to emerald-950",
  },
  {
    label: "border-r-teal-50",
    value: "border-r-teal-50",
    styles:
      "border-right-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets right border color to teal-50",
  },
  {
    label: "border-r-teal-100",
    value: "border-r-teal-100",
    styles:
      "border-right-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets right border color to teal-100",
  },
  {
    label: "border-r-teal-200",
    value: "border-r-teal-200",
    styles:
      "border-right-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets right border color to teal-200",
  },
  {
    label: "border-r-teal-300",
    value: "border-r-teal-300",
    styles:
      "border-right-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets right border color to teal-300",
  },
  {
    label: "border-r-teal-400",
    value: "border-r-teal-400",
    styles:
      "border-right-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets right border color to teal-400",
  },
  {
    label: "border-r-teal-500",
    value: "border-r-teal-500",
    styles:
      "border-right-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets right border color to teal-500",
  },
  {
    label: "border-r-teal-600",
    value: "border-r-teal-600",
    styles:
      "border-right-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets right border color to teal-600",
  },
  {
    label: "border-r-teal-700",
    value: "border-r-teal-700",
    styles:
      "border-right-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets right border color to teal-700",
  },
  {
    label: "border-r-teal-800",
    value: "border-r-teal-800",
    styles:
      "border-right-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets right border color to teal-800",
  },
  {
    label: "border-r-teal-900",
    value: "border-r-teal-900",
    styles:
      "border-right-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets right border color to teal-900",
  },
  {
    label: "border-r-teal-950",
    value: "border-r-teal-950",
    styles:
      "border-right-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets right border color to teal-950",
  },
  {
    label: "border-r-cyan-50",
    value: "border-r-cyan-50",
    styles:
      "border-right-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets right border color to cyan-50",
  },
  {
    label: "border-r-cyan-100",
    value: "border-r-cyan-100",
    styles:
      "border-right-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets right border color to cyan-100",
  },
  {
    label: "border-r-cyan-200",
    value: "border-r-cyan-200",
    styles:
      "border-right-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets right border color to cyan-200",
  },
  {
    label: "border-r-cyan-300",
    value: "border-r-cyan-300",
    styles:
      "border-right-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets right border color to cyan-300",
  },
  {
    label: "border-r-cyan-400",
    value: "border-r-cyan-400",
    styles:
      "border-right-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets right border color to cyan-400",
  },
  {
    label: "border-r-cyan-500",
    value: "border-r-cyan-500",
    styles:
      "border-right-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets right border color to cyan-500",
  },
  {
    label: "border-r-cyan-600",
    value: "border-r-cyan-600",
    styles:
      "border-right-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets right border color to cyan-600",
  },
  {
    label: "border-r-cyan-700",
    value: "border-r-cyan-700",
    styles:
      "border-right-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets right border color to cyan-700",
  },
  {
    label: "border-r-cyan-800",
    value: "border-r-cyan-800",
    styles:
      "border-right-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets right border color to cyan-800",
  },
  {
    label: "border-r-cyan-900",
    value: "border-r-cyan-900",
    styles:
      "border-right-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets right border color to cyan-900",
  },
  {
    label: "border-r-cyan-950",
    value: "border-r-cyan-950",
    styles:
      "border-right-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets right border color to cyan-950",
  },
  {
    label: "border-r-sky-50",
    value: "border-r-sky-50",
    styles:
      "border-right-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets right border color to sky-50",
  },
  {
    label: "border-r-sky-100",
    value: "border-r-sky-100",
    styles:
      "border-right-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets right border color to sky-100",
  },
  {
    label: "border-r-sky-200",
    value: "border-r-sky-200",
    styles:
      "border-right-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets right border color to sky-200",
  },
  {
    label: "border-r-sky-300",
    value: "border-r-sky-300",
    styles:
      "border-right-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets right border color to sky-300",
  },
  {
    label: "border-r-sky-400",
    value: "border-r-sky-400",
    styles:
      "border-right-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets right border color to sky-400",
  },
  {
    label: "border-r-sky-500",
    value: "border-r-sky-500",
    styles:
      "border-right-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets right border color to sky-500",
  },
  {
    label: "border-r-sky-600",
    value: "border-r-sky-600",
    styles:
      "border-right-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets right border color to sky-600",
  },
  {
    label: "border-r-sky-700",
    value: "border-r-sky-700",
    styles:
      "border-right-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets right border color to sky-700",
  },
  {
    label: "border-r-sky-800",
    value: "border-r-sky-800",
    styles:
      "border-right-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets right border color to sky-800",
  },
  {
    label: "border-r-sky-900",
    value: "border-r-sky-900",
    styles:
      "border-right-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets right border color to sky-900",
  },
  {
    label: "border-r-sky-950",
    value: "border-r-sky-950",
    styles:
      "border-right-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets right border color to sky-950",
  },
  {
    label: "border-r-blue-50",
    value: "border-r-blue-50",
    styles:
      "border-right-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets right border color to blue-50",
  },
  {
    label: "border-r-blue-100",
    value: "border-r-blue-100",
    styles:
      "border-right-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets right border color to blue-100",
  },
  {
    label: "border-r-blue-200",
    value: "border-r-blue-200",
    styles:
      "border-right-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets right border color to blue-200",
  },
  {
    label: "border-r-blue-300",
    value: "border-r-blue-300",
    styles:
      "border-right-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets right border color to blue-300",
  },
  {
    label: "border-r-blue-400",
    value: "border-r-blue-400",
    styles:
      "border-right-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets right border color to blue-400",
  },
  {
    label: "border-r-blue-500",
    value: "border-r-blue-500",
    styles:
      "border-right-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets right border color to blue-500",
  },
  {
    label: "border-r-blue-600",
    value: "border-r-blue-600",
    styles:
      "border-right-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets right border color to blue-600",
  },
  {
    label: "border-r-blue-700",
    value: "border-r-blue-700",
    styles:
      "border-right-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets right border color to blue-700",
  },
  {
    label: "border-r-blue-800",
    value: "border-r-blue-800",
    styles:
      "border-right-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets right border color to blue-800",
  },
  {
    label: "border-r-blue-900",
    value: "border-r-blue-900",
    styles:
      "border-right-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets right border color to blue-900",
  },
  {
    label: "border-r-blue-950",
    value: "border-r-blue-950",
    styles:
      "border-right-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets right border color to blue-950",
  },
  {
    label: "border-r-indigo-50",
    value: "border-r-indigo-50",
    styles:
      "border-right-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets right border color to indigo-50",
  },
  {
    label: "border-r-indigo-100",
    value: "border-r-indigo-100",
    styles:
      "border-right-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets right border color to indigo-100",
  },
  {
    label: "border-r-indigo-200",
    value: "border-r-indigo-200",
    styles:
      "border-right-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets right border color to indigo-200",
  },
  {
    label: "border-r-indigo-300",
    value: "border-r-indigo-300",
    styles:
      "border-right-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets right border color to indigo-300",
  },
  {
    label: "border-r-indigo-400",
    value: "border-r-indigo-400",
    styles:
      "border-right-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets right border color to indigo-400",
  },
  {
    label: "border-r-indigo-500",
    value: "border-r-indigo-500",
    styles:
      "border-right-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets right border color to indigo-500",
  },
  {
    label: "border-r-indigo-600",
    value: "border-r-indigo-600",
    styles:
      "border-right-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets right border color to indigo-600",
  },
  {
    label: "border-r-indigo-700",
    value: "border-r-indigo-700",
    styles:
      "border-right-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets right border color to indigo-700",
  },
  {
    label: "border-r-indigo-800",
    value: "border-r-indigo-800",
    styles:
      "border-right-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets right border color to indigo-800",
  },
  {
    label: "border-r-indigo-900",
    value: "border-r-indigo-900",
    styles:
      "border-right-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets right border color to indigo-900",
  },
  {
    label: "border-r-indigo-950",
    value: "border-r-indigo-950",
    styles:
      "border-right-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets right border color to indigo-950",
  },
  {
    label: "border-r-violet-50",
    value: "border-r-violet-50",
    styles:
      "border-right-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets right border color to violet-50",
  },
  {
    label: "border-r-violet-100",
    value: "border-r-violet-100",
    styles:
      "border-right-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets right border color to violet-100",
  },
  {
    label: "border-r-violet-200",
    value: "border-r-violet-200",
    styles:
      "border-right-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets right border color to violet-200",
  },
  {
    label: "border-r-violet-300",
    value: "border-r-violet-300",
    styles:
      "border-right-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets right border color to violet-300",
  },
  {
    label: "border-r-violet-400",
    value: "border-r-violet-400",
    styles:
      "border-right-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets right border color to violet-400",
  },
  {
    label: "border-r-violet-500",
    value: "border-r-violet-500",
    styles:
      "border-right-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets right border color to violet-500",
  },
  {
    label: "border-r-violet-600",
    value: "border-r-violet-600",
    styles:
      "border-right-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets right border color to violet-600",
  },
  {
    label: "border-r-violet-700",
    value: "border-r-violet-700",
    styles:
      "border-right-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets right border color to violet-700",
  },
  {
    label: "border-r-violet-800",
    value: "border-r-violet-800",
    styles:
      "border-right-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets right border color to violet-800",
  },
  {
    label: "border-r-violet-900",
    value: "border-r-violet-900",
    styles:
      "border-right-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets right border color to violet-900",
  },
  {
    label: "border-r-violet-950",
    value: "border-r-violet-950",
    styles:
      "border-right-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets right border color to violet-950",
  },
  {
    label: "border-r-purple-50",
    value: "border-r-purple-50",
    styles:
      "border-right-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets right border color to purple-50",
  },
  {
    label: "border-r-purple-100",
    value: "border-r-purple-100",
    styles:
      "border-right-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets right border color to purple-100",
  },
  {
    label: "border-r-purple-200",
    value: "border-r-purple-200",
    styles:
      "border-right-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets right border color to purple-200",
  },
  {
    label: "border-r-purple-300",
    value: "border-r-purple-300",
    styles:
      "border-right-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets right border color to purple-300",
  },
  {
    label: "border-r-purple-400",
    value: "border-r-purple-400",
    styles:
      "border-right-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets right border color to purple-400",
  },
  {
    label: "border-r-purple-500",
    value: "border-r-purple-500",
    styles:
      "border-right-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets right border color to purple-500",
  },
  {
    label: "border-r-purple-600",
    value: "border-r-purple-600",
    styles:
      "border-right-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets right border color to purple-600",
  },
  {
    label: "border-r-purple-700",
    value: "border-r-purple-700",
    styles:
      "border-right-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets right border color to purple-700",
  },
  {
    label: "border-r-purple-800",
    value: "border-r-purple-800",
    styles:
      "border-right-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets right border color to purple-800",
  },
  {
    label: "border-r-purple-900",
    value: "border-r-purple-900",
    styles:
      "border-right-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets right border color to purple-900",
  },
  {
    label: "border-r-purple-950",
    value: "border-r-purple-950",
    styles:
      "border-right-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets right border color to purple-950",
  },
  {
    label: "border-r-fuchsia-50",
    value: "border-r-fuchsia-50",
    styles:
      "border-right-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets right border color to fuchsia-50",
  },
  {
    label: "border-r-fuchsia-100",
    value: "border-r-fuchsia-100",
    styles:
      "border-right-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets right border color to fuchsia-100",
  },
  {
    label: "border-r-fuchsia-200",
    value: "border-r-fuchsia-200",
    styles:
      "border-right-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets right border color to fuchsia-200",
  },
  {
    label: "border-r-fuchsia-300",
    value: "border-r-fuchsia-300",
    styles:
      "border-right-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets right border color to fuchsia-300",
  },
  {
    label: "border-r-fuchsia-400",
    value: "border-r-fuchsia-400",
    styles:
      "border-right-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets right border color to fuchsia-400",
  },
  {
    label: "border-r-fuchsia-500",
    value: "border-r-fuchsia-500",
    styles:
      "border-right-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets right border color to fuchsia-500",
  },
  {
    label: "border-r-fuchsia-600",
    value: "border-r-fuchsia-600",
    styles:
      "border-right-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets right border color to fuchsia-600",
  },
  {
    label: "border-r-fuchsia-700",
    value: "border-r-fuchsia-700",
    styles:
      "border-right-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets right border color to fuchsia-700",
  },
  {
    label: "border-r-fuchsia-800",
    value: "border-r-fuchsia-800",
    styles:
      "border-right-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets right border color to fuchsia-800",
  },
  {
    label: "border-r-fuchsia-900",
    value: "border-r-fuchsia-900",
    styles:
      "border-right-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets right border color to fuchsia-900",
  },
  {
    label: "border-r-fuchsia-950",
    value: "border-r-fuchsia-950",
    styles:
      "border-right-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets right border color to fuchsia-950",
  },
  {
    label: "border-r-pink-50",
    value: "border-r-pink-50",
    styles:
      "border-right-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets right border color to pink-50",
  },
  {
    label: "border-r-pink-100",
    value: "border-r-pink-100",
    styles:
      "border-right-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets right border color to pink-100",
  },
  {
    label: "border-r-pink-200",
    value: "border-r-pink-200",
    styles:
      "border-right-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets right border color to pink-200",
  },
  {
    label: "border-r-pink-300",
    value: "border-r-pink-300",
    styles:
      "border-right-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets right border color to pink-300",
  },
  {
    label: "border-r-pink-400",
    value: "border-r-pink-400",
    styles:
      "border-right-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets right border color to pink-400",
  },
  {
    label: "border-r-pink-500",
    value: "border-r-pink-500",
    styles:
      "border-right-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets right border color to pink-500",
  },
  {
    label: "border-r-pink-600",
    value: "border-r-pink-600",
    styles:
      "border-right-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets right border color to pink-600",
  },
  {
    label: "border-r-pink-700",
    value: "border-r-pink-700",
    styles:
      "border-right-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets right border color to pink-700",
  },
  {
    label: "border-r-pink-800",
    value: "border-r-pink-800",
    styles:
      "border-right-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets right border color to pink-800",
  },
  {
    label: "border-r-pink-900",
    value: "border-r-pink-900",
    styles:
      "border-right-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets right border color to pink-900",
  },
  {
    label: "border-r-pink-950",
    value: "border-r-pink-950",
    styles:
      "border-right-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets right border color to pink-950",
  },
  {
    label: "border-r-rose-50",
    value: "border-r-rose-50",
    styles:
      "border-right-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets right border color to rose-50",
  },
  {
    label: "border-r-rose-100",
    value: "border-r-rose-100",
    styles:
      "border-right-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets right border color to rose-100",
  },
  {
    label: "border-r-rose-200",
    value: "border-r-rose-200",
    styles:
      "border-right-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets right border color to rose-200",
  },
  {
    label: "border-r-rose-300",
    value: "border-r-rose-300",
    styles:
      "border-right-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets right border color to rose-300",
  },
  {
    label: "border-r-rose-400",
    value: "border-r-rose-400",
    styles:
      "border-right-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets right border color to rose-400",
  },
  {
    label: "border-r-rose-500",
    value: "border-r-rose-500",
    styles:
      "border-right-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets right border color to rose-500",
  },
  {
    label: "border-r-rose-600",
    value: "border-r-rose-600",
    styles:
      "border-right-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets right border color to rose-600",
  },
  {
    label: "border-r-rose-700",
    value: "border-r-rose-700",
    styles:
      "border-right-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets right border color to rose-700",
  },
  {
    label: "border-r-rose-800",
    value: "border-r-rose-800",
    styles:
      "border-right-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets right border color to rose-800",
  },
  {
    label: "border-r-rose-900",
    value: "border-r-rose-900",
    styles:
      "border-right-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets right border color to rose-900",
  },
  {
    label: "border-r-rose-950",
    value: "border-r-rose-950",
    styles:
      "border-right-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets right border color to rose-950",
  },
  {
    label: "border-r-slate-50",
    value: "border-r-slate-50",
    styles:
      "border-right-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets right border color to slate-50",
  },
  {
    label: "border-r-slate-100",
    value: "border-r-slate-100",
    styles:
      "border-right-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets right border color to slate-100",
  },
  {
    label: "border-r-slate-200",
    value: "border-r-slate-200",
    styles:
      "border-right-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets right border color to slate-200",
  },
  {
    label: "border-r-slate-300",
    value: "border-r-slate-300",
    styles:
      "border-right-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets right border color to slate-300",
  },
  {
    label: "border-r-slate-400",
    value: "border-r-slate-400",
    styles:
      "border-right-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets right border color to slate-400",
  },
  {
    label: "border-r-slate-500",
    value: "border-r-slate-500",
    styles:
      "border-right-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets right border color to slate-500",
  },
  {
    label: "border-r-slate-600",
    value: "border-r-slate-600",
    styles:
      "border-right-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets right border color to slate-600",
  },
  {
    label: "border-r-slate-700",
    value: "border-r-slate-700",
    styles:
      "border-right-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets right border color to slate-700",
  },
  {
    label: "border-r-slate-800",
    value: "border-r-slate-800",
    styles:
      "border-right-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets right border color to slate-800",
  },
  {
    label: "border-r-slate-900",
    value: "border-r-slate-900",
    styles:
      "border-right-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets right border color to slate-900",
  },
  {
    label: "border-r-slate-950",
    value: "border-r-slate-950",
    styles:
      "border-right-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets right border color to slate-950",
  },
  {
    label: "border-r-gray-50",
    value: "border-r-gray-50",
    styles:
      "border-right-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets right border color to gray-50",
  },
  {
    label: "border-r-gray-100",
    value: "border-r-gray-100",
    styles:
      "border-right-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets right border color to gray-100",
  },
  {
    label: "border-r-gray-200",
    value: "border-r-gray-200",
    styles:
      "border-right-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets right border color to gray-200",
  },
  {
    label: "border-r-gray-300",
    value: "border-r-gray-300",
    styles:
      "border-right-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets right border color to gray-300",
  },
  {
    label: "border-r-gray-400",
    value: "border-r-gray-400",
    styles:
      "border-right-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets right border color to gray-400",
  },
  {
    label: "border-r-gray-500",
    value: "border-r-gray-500",
    styles:
      "border-right-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets right border color to gray-500",
  },
  {
    label: "border-r-gray-600",
    value: "border-r-gray-600",
    styles:
      "border-right-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets right border color to gray-600",
  },
  {
    label: "border-r-gray-700",
    value: "border-r-gray-700",
    styles:
      "border-right-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets right border color to gray-700",
  },
  {
    label: "border-r-gray-800",
    value: "border-r-gray-800",
    styles:
      "border-right-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets right border color to gray-800",
  },
  {
    label: "border-r-gray-900",
    value: "border-r-gray-900",
    styles:
      "border-right-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets right border color to gray-900",
  },
  {
    label: "border-r-gray-950",
    value: "border-r-gray-950",
    styles:
      "border-right-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets right border color to gray-950",
  },
  {
    label: "border-r-zinc-50",
    value: "border-r-zinc-50",
    styles: "border-right-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets right border color to zinc-50",
  },
  {
    label: "border-r-zinc-100",
    value: "border-r-zinc-100",
    styles:
      "border-right-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets right border color to zinc-100",
  },
  {
    label: "border-r-zinc-200",
    value: "border-r-zinc-200",
    styles:
      "border-right-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets right border color to zinc-200",
  },
  {
    label: "border-r-zinc-300",
    value: "border-r-zinc-300",
    styles:
      "border-right-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets right border color to zinc-300",
  },
  {
    label: "border-r-zinc-400",
    value: "border-r-zinc-400",
    styles:
      "border-right-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets right border color to zinc-400",
  },
  {
    label: "border-r-zinc-500",
    value: "border-r-zinc-500",
    styles:
      "border-right-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets right border color to zinc-500",
  },
  {
    label: "border-r-zinc-600",
    value: "border-r-zinc-600",
    styles:
      "border-right-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets right border color to zinc-600",
  },
  {
    label: "border-r-zinc-700",
    value: "border-r-zinc-700",
    styles:
      "border-right-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets right border color to zinc-700",
  },
  {
    label: "border-r-zinc-800",
    value: "border-r-zinc-800",
    styles:
      "border-right-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets right border color to zinc-800",
  },
  {
    label: "border-r-zinc-900",
    value: "border-r-zinc-900",
    styles:
      "border-right-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets right border color to zinc-900",
  },
  {
    label: "border-r-zinc-950",
    value: "border-r-zinc-950",
    styles:
      "border-right-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets right border color to zinc-950",
  },
  {
    label: "border-r-neutral-50",
    value: "border-r-neutral-50",
    styles:
      "border-right-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets right border color to neutral-50",
  },
  {
    label: "border-r-neutral-100",
    value: "border-r-neutral-100",
    styles:
      "border-right-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets right border color to neutral-100",
  },
  {
    label: "border-r-neutral-200",
    value: "border-r-neutral-200",
    styles:
      "border-right-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets right border color to neutral-200",
  },
  {
    label: "border-r-neutral-300",
    value: "border-r-neutral-300",
    styles:
      "border-right-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets right border color to neutral-300",
  },
  {
    label: "border-r-neutral-400",
    value: "border-r-neutral-400",
    styles:
      "border-right-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets right border color to neutral-400",
  },
  {
    label: "border-r-neutral-500",
    value: "border-r-neutral-500",
    styles:
      "border-right-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets right border color to neutral-500",
  },
  {
    label: "border-r-neutral-600",
    value: "border-r-neutral-600",
    styles:
      "border-right-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets right border color to neutral-600",
  },
  {
    label: "border-r-neutral-700",
    value: "border-r-neutral-700",
    styles:
      "border-right-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets right border color to neutral-700",
  },
  {
    label: "border-r-neutral-800",
    value: "border-r-neutral-800",
    styles:
      "border-right-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets right border color to neutral-800",
  },
  {
    label: "border-r-neutral-900",
    value: "border-r-neutral-900",
    styles:
      "border-right-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets right border color to neutral-900",
  },
  {
    label: "border-r-neutral-950",
    value: "border-r-neutral-950",
    styles:
      "border-right-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets right border color to neutral-950",
  },
  {
    label: "border-r-stone-50",
    value: "border-r-stone-50",
    styles:
      "border-right-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets right border color to stone-50",
  },
  {
    label: "border-r-stone-100",
    value: "border-r-stone-100",
    styles:
      "border-right-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets right border color to stone-100",
  },
  {
    label: "border-r-stone-200",
    value: "border-r-stone-200",
    styles:
      "border-right-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets right border color to stone-200",
  },
  {
    label: "border-r-stone-300",
    value: "border-r-stone-300",
    styles:
      "border-right-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets right border color to stone-300",
  },
  {
    label: "border-r-stone-400",
    value: "border-r-stone-400",
    styles:
      "border-right-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets right border color to stone-400",
  },
  {
    label: "border-r-stone-500",
    value: "border-r-stone-500",
    styles:
      "border-right-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets right border color to stone-500",
  },
  {
    label: "border-r-stone-600",
    value: "border-r-stone-600",
    styles:
      "border-right-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets right border color to stone-600",
  },
  {
    label: "border-r-stone-700",
    value: "border-r-stone-700",
    styles:
      "border-right-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets right border color to stone-700",
  },
  {
    label: "border-r-stone-800",
    value: "border-r-stone-800",
    styles:
      "border-right-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets right border color to stone-800",
  },
  {
    label: "border-r-stone-900",
    value: "border-r-stone-900",
    styles:
      "border-right-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets right border color to stone-900",
  },
  {
    label: "border-r-stone-950",
    value: "border-r-stone-950",
    styles:
      "border-right-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets right border color to stone-950",
  },
  {
    label: "border-r-(<custom-property>)",
    value: "border-r-(<custom-property>)",
    styles: "border-right-color: var(<custom-property>);",
    description: "Sets right border color to (<custom-property>)",
  },
  {
    label: "border-r-[<value>]",
    value: "border-r-[<value>]",
    styles: "border-right-color: <value>;",
    description: "Sets right border color to [<value>]",
  },
  {
    label: "border-b-inherit",
    value: "border-b-inherit",
    styles: "border-bottom-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-b-current",
    value: "border-b-current",
    styles: "border-bottom-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-b-transparent",
    value: "border-b-transparent",
    styles: "border-bottom-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-b-black",
    value: "border-b-black",
    styles: "border-bottom-color: var(--color-black); /* #000 */",
    description: "Sets bottom border color to black",
  },
  {
    label: "border-b-white",
    value: "border-b-white",
    styles: "border-bottom-color: var(--color-white); /* #fff */",
    description: "Sets bottom border color to white",
  },
  {
    label: "border-b-red-50",
    value: "border-b-red-50",
    styles:
      "border-bottom-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets bottom border color to red-50",
  },
  {
    label: "border-b-red-100",
    value: "border-b-red-100",
    styles:
      "border-bottom-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets bottom border color to red-100",
  },
  {
    label: "border-b-red-200",
    value: "border-b-red-200",
    styles:
      "border-bottom-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets bottom border color to red-200",
  },
  {
    label: "border-b-red-300",
    value: "border-b-red-300",
    styles:
      "border-bottom-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets bottom border color to red-300",
  },
  {
    label: "border-b-red-400",
    value: "border-b-red-400",
    styles:
      "border-bottom-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets bottom border color to red-400",
  },
  {
    label: "border-b-red-500",
    value: "border-b-red-500",
    styles:
      "border-bottom-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets bottom border color to red-500",
  },
  {
    label: "border-b-red-600",
    value: "border-b-red-600",
    styles:
      "border-bottom-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets bottom border color to red-600",
  },
  {
    label: "border-b-red-700",
    value: "border-b-red-700",
    styles:
      "border-bottom-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets bottom border color to red-700",
  },
  {
    label: "border-b-red-800",
    value: "border-b-red-800",
    styles:
      "border-bottom-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets bottom border color to red-800",
  },
  {
    label: "border-b-red-900",
    value: "border-b-red-900",
    styles:
      "border-bottom-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets bottom border color to red-900",
  },
  {
    label: "border-b-red-950",
    value: "border-b-red-950",
    styles:
      "border-bottom-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets bottom border color to red-950",
  },
  {
    label: "border-b-orange-50",
    value: "border-b-orange-50",
    styles:
      "border-bottom-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets bottom border color to orange-50",
  },
  {
    label: "border-b-orange-100",
    value: "border-b-orange-100",
    styles:
      "border-bottom-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets bottom border color to orange-100",
  },
  {
    label: "border-b-orange-200",
    value: "border-b-orange-200",
    styles:
      "border-bottom-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets bottom border color to orange-200",
  },
  {
    label: "border-b-orange-300",
    value: "border-b-orange-300",
    styles:
      "border-bottom-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets bottom border color to orange-300",
  },
  {
    label: "border-b-orange-400",
    value: "border-b-orange-400",
    styles:
      "border-bottom-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets bottom border color to orange-400",
  },
  {
    label: "border-b-orange-500",
    value: "border-b-orange-500",
    styles:
      "border-bottom-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets bottom border color to orange-500",
  },
  {
    label: "border-b-orange-600",
    value: "border-b-orange-600",
    styles:
      "border-bottom-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets bottom border color to orange-600",
  },
  {
    label: "border-b-orange-700",
    value: "border-b-orange-700",
    styles:
      "border-bottom-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets bottom border color to orange-700",
  },
  {
    label: "border-b-orange-800",
    value: "border-b-orange-800",
    styles:
      "border-bottom-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets bottom border color to orange-800",
  },
  {
    label: "border-b-orange-900",
    value: "border-b-orange-900",
    styles:
      "border-bottom-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets bottom border color to orange-900",
  },
  {
    label: "border-b-orange-950",
    value: "border-b-orange-950",
    styles:
      "border-bottom-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets bottom border color to orange-950",
  },
  {
    label: "border-b-amber-50",
    value: "border-b-amber-50",
    styles:
      "border-bottom-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets bottom border color to amber-50",
  },
  {
    label: "border-b-amber-100",
    value: "border-b-amber-100",
    styles:
      "border-bottom-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets bottom border color to amber-100",
  },
  {
    label: "border-b-amber-200",
    value: "border-b-amber-200",
    styles:
      "border-bottom-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets bottom border color to amber-200",
  },
  {
    label: "border-b-amber-300",
    value: "border-b-amber-300",
    styles:
      "border-bottom-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets bottom border color to amber-300",
  },
  {
    label: "border-b-amber-400",
    value: "border-b-amber-400",
    styles:
      "border-bottom-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets bottom border color to amber-400",
  },
  {
    label: "border-b-amber-500",
    value: "border-b-amber-500",
    styles:
      "border-bottom-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets bottom border color to amber-500",
  },
  {
    label: "border-b-amber-600",
    value: "border-b-amber-600",
    styles:
      "border-bottom-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets bottom border color to amber-600",
  },
  {
    label: "border-b-amber-700",
    value: "border-b-amber-700",
    styles:
      "border-bottom-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets bottom border color to amber-700",
  },
  {
    label: "border-b-amber-800",
    value: "border-b-amber-800",
    styles:
      "border-bottom-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets bottom border color to amber-800",
  },
  {
    label: "border-b-amber-900",
    value: "border-b-amber-900",
    styles:
      "border-bottom-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets bottom border color to amber-900",
  },
  {
    label: "border-b-amber-950",
    value: "border-b-amber-950",
    styles:
      "border-bottom-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets bottom border color to amber-950",
  },
  {
    label: "border-b-yellow-50",
    value: "border-b-yellow-50",
    styles:
      "border-bottom-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets bottom border color to yellow-50",
  },
  {
    label: "border-b-yellow-100",
    value: "border-b-yellow-100",
    styles:
      "border-bottom-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets bottom border color to yellow-100",
  },
  {
    label: "border-b-yellow-200",
    value: "border-b-yellow-200",
    styles:
      "border-bottom-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets bottom border color to yellow-200",
  },
  {
    label: "border-b-yellow-300",
    value: "border-b-yellow-300",
    styles:
      "border-bottom-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets bottom border color to yellow-300",
  },
  {
    label: "border-b-yellow-400",
    value: "border-b-yellow-400",
    styles:
      "border-bottom-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets bottom border color to yellow-400",
  },
  {
    label: "border-b-yellow-500",
    value: "border-b-yellow-500",
    styles:
      "border-bottom-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets bottom border color to yellow-500",
  },
  {
    label: "border-b-yellow-600",
    value: "border-b-yellow-600",
    styles:
      "border-bottom-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets bottom border color to yellow-600",
  },
  {
    label: "border-b-yellow-700",
    value: "border-b-yellow-700",
    styles:
      "border-bottom-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets bottom border color to yellow-700",
  },
  {
    label: "border-b-yellow-800",
    value: "border-b-yellow-800",
    styles:
      "border-bottom-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets bottom border color to yellow-800",
  },
  {
    label: "border-b-yellow-900",
    value: "border-b-yellow-900",
    styles:
      "border-bottom-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets bottom border color to yellow-900",
  },
  {
    label: "border-b-yellow-950",
    value: "border-b-yellow-950",
    styles:
      "border-bottom-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets bottom border color to yellow-950",
  },
  {
    label: "border-b-lime-50",
    value: "border-b-lime-50",
    styles:
      "border-bottom-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets bottom border color to lime-50",
  },
  {
    label: "border-b-lime-100",
    value: "border-b-lime-100",
    styles:
      "border-bottom-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets bottom border color to lime-100",
  },
  {
    label: "border-b-lime-200",
    value: "border-b-lime-200",
    styles:
      "border-bottom-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets bottom border color to lime-200",
  },
  {
    label: "border-b-lime-300",
    value: "border-b-lime-300",
    styles:
      "border-bottom-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets bottom border color to lime-300",
  },
  {
    label: "border-b-lime-400",
    value: "border-b-lime-400",
    styles:
      "border-bottom-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets bottom border color to lime-400",
  },
  {
    label: "border-b-lime-500",
    value: "border-b-lime-500",
    styles:
      "border-bottom-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets bottom border color to lime-500",
  },
  {
    label: "border-b-lime-600",
    value: "border-b-lime-600",
    styles:
      "border-bottom-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets bottom border color to lime-600",
  },
  {
    label: "border-b-lime-700",
    value: "border-b-lime-700",
    styles:
      "border-bottom-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets bottom border color to lime-700",
  },
  {
    label: "border-b-lime-800",
    value: "border-b-lime-800",
    styles:
      "border-bottom-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets bottom border color to lime-800",
  },
  {
    label: "border-b-lime-900",
    value: "border-b-lime-900",
    styles:
      "border-bottom-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets bottom border color to lime-900",
  },
  {
    label: "border-b-lime-950",
    value: "border-b-lime-950",
    styles:
      "border-bottom-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets bottom border color to lime-950",
  },
  {
    label: "border-b-green-50",
    value: "border-b-green-50",
    styles:
      "border-bottom-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets bottom border color to green-50",
  },
  {
    label: "border-b-green-100",
    value: "border-b-green-100",
    styles:
      "border-bottom-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets bottom border color to green-100",
  },
  {
    label: "border-b-green-200",
    value: "border-b-green-200",
    styles:
      "border-bottom-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets bottom border color to green-200",
  },
  {
    label: "border-b-green-300",
    value: "border-b-green-300",
    styles:
      "border-bottom-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets bottom border color to green-300",
  },
  {
    label: "border-b-green-400",
    value: "border-b-green-400",
    styles:
      "border-bottom-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets bottom border color to green-400",
  },
  {
    label: "border-b-green-500",
    value: "border-b-green-500",
    styles:
      "border-bottom-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets bottom border color to green-500",
  },
  {
    label: "border-b-green-600",
    value: "border-b-green-600",
    styles:
      "border-bottom-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets bottom border color to green-600",
  },
  {
    label: "border-b-green-700",
    value: "border-b-green-700",
    styles:
      "border-bottom-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets bottom border color to green-700",
  },
  {
    label: "border-b-green-800",
    value: "border-b-green-800",
    styles:
      "border-bottom-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets bottom border color to green-800",
  },
  {
    label: "border-b-green-900",
    value: "border-b-green-900",
    styles:
      "border-bottom-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets bottom border color to green-900",
  },
  {
    label: "border-b-green-950",
    value: "border-b-green-950",
    styles:
      "border-bottom-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets bottom border color to green-950",
  },
  {
    label: "border-b-emerald-50",
    value: "border-b-emerald-50",
    styles:
      "border-bottom-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets bottom border color to emerald-50",
  },
  {
    label: "border-b-emerald-100",
    value: "border-b-emerald-100",
    styles:
      "border-bottom-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets bottom border color to emerald-100",
  },
  {
    label: "border-b-emerald-200",
    value: "border-b-emerald-200",
    styles:
      "border-bottom-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets bottom border color to emerald-200",
  },
  {
    label: "border-b-emerald-300",
    value: "border-b-emerald-300",
    styles:
      "border-bottom-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets bottom border color to emerald-300",
  },
  {
    label: "border-b-emerald-400",
    value: "border-b-emerald-400",
    styles:
      "border-bottom-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets bottom border color to emerald-400",
  },
  {
    label: "border-b-emerald-500",
    value: "border-b-emerald-500",
    styles:
      "border-bottom-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets bottom border color to emerald-500",
  },
  {
    label: "border-b-emerald-600",
    value: "border-b-emerald-600",
    styles:
      "border-bottom-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets bottom border color to emerald-600",
  },
  {
    label: "border-b-emerald-700",
    value: "border-b-emerald-700",
    styles:
      "border-bottom-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets bottom border color to emerald-700",
  },
  {
    label: "border-b-emerald-800",
    value: "border-b-emerald-800",
    styles:
      "border-bottom-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets bottom border color to emerald-800",
  },
  {
    label: "border-b-emerald-900",
    value: "border-b-emerald-900",
    styles:
      "border-bottom-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets bottom border color to emerald-900",
  },
  {
    label: "border-b-emerald-950",
    value: "border-b-emerald-950",
    styles:
      "border-bottom-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets bottom border color to emerald-950",
  },
  {
    label: "border-b-teal-50",
    value: "border-b-teal-50",
    styles:
      "border-bottom-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets bottom border color to teal-50",
  },
  {
    label: "border-b-teal-100",
    value: "border-b-teal-100",
    styles:
      "border-bottom-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets bottom border color to teal-100",
  },
  {
    label: "border-b-teal-200",
    value: "border-b-teal-200",
    styles:
      "border-bottom-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets bottom border color to teal-200",
  },
  {
    label: "border-b-teal-300",
    value: "border-b-teal-300",
    styles:
      "border-bottom-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets bottom border color to teal-300",
  },
  {
    label: "border-b-teal-400",
    value: "border-b-teal-400",
    styles:
      "border-bottom-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets bottom border color to teal-400",
  },
  {
    label: "border-b-teal-500",
    value: "border-b-teal-500",
    styles:
      "border-bottom-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets bottom border color to teal-500",
  },
  {
    label: "border-b-teal-600",
    value: "border-b-teal-600",
    styles:
      "border-bottom-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets bottom border color to teal-600",
  },
  {
    label: "border-b-teal-700",
    value: "border-b-teal-700",
    styles:
      "border-bottom-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets bottom border color to teal-700",
  },
  {
    label: "border-b-teal-800",
    value: "border-b-teal-800",
    styles:
      "border-bottom-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets bottom border color to teal-800",
  },
  {
    label: "border-b-teal-900",
    value: "border-b-teal-900",
    styles:
      "border-bottom-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets bottom border color to teal-900",
  },
  {
    label: "border-b-teal-950",
    value: "border-b-teal-950",
    styles:
      "border-bottom-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets bottom border color to teal-950",
  },
  {
    label: "border-b-cyan-50",
    value: "border-b-cyan-50",
    styles:
      "border-bottom-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets bottom border color to cyan-50",
  },
  {
    label: "border-b-cyan-100",
    value: "border-b-cyan-100",
    styles:
      "border-bottom-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets bottom border color to cyan-100",
  },
  {
    label: "border-b-cyan-200",
    value: "border-b-cyan-200",
    styles:
      "border-bottom-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets bottom border color to cyan-200",
  },
  {
    label: "border-b-cyan-300",
    value: "border-b-cyan-300",
    styles:
      "border-bottom-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets bottom border color to cyan-300",
  },
  {
    label: "border-b-cyan-400",
    value: "border-b-cyan-400",
    styles:
      "border-bottom-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets bottom border color to cyan-400",
  },
  {
    label: "border-b-cyan-500",
    value: "border-b-cyan-500",
    styles:
      "border-bottom-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets bottom border color to cyan-500",
  },
  {
    label: "border-b-cyan-600",
    value: "border-b-cyan-600",
    styles:
      "border-bottom-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets bottom border color to cyan-600",
  },
  {
    label: "border-b-cyan-700",
    value: "border-b-cyan-700",
    styles:
      "border-bottom-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets bottom border color to cyan-700",
  },
  {
    label: "border-b-cyan-800",
    value: "border-b-cyan-800",
    styles:
      "border-bottom-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets bottom border color to cyan-800",
  },
  {
    label: "border-b-cyan-900",
    value: "border-b-cyan-900",
    styles:
      "border-bottom-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets bottom border color to cyan-900",
  },
  {
    label: "border-b-cyan-950",
    value: "border-b-cyan-950",
    styles:
      "border-bottom-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets bottom border color to cyan-950",
  },
  {
    label: "border-b-sky-50",
    value: "border-b-sky-50",
    styles:
      "border-bottom-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets bottom border color to sky-50",
  },
  {
    label: "border-b-sky-100",
    value: "border-b-sky-100",
    styles:
      "border-bottom-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets bottom border color to sky-100",
  },
  {
    label: "border-b-sky-200",
    value: "border-b-sky-200",
    styles:
      "border-bottom-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets bottom border color to sky-200",
  },
  {
    label: "border-b-sky-300",
    value: "border-b-sky-300",
    styles:
      "border-bottom-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets bottom border color to sky-300",
  },
  {
    label: "border-b-sky-400",
    value: "border-b-sky-400",
    styles:
      "border-bottom-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets bottom border color to sky-400",
  },
  {
    label: "border-b-sky-500",
    value: "border-b-sky-500",
    styles:
      "border-bottom-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets bottom border color to sky-500",
  },
  {
    label: "border-b-sky-600",
    value: "border-b-sky-600",
    styles:
      "border-bottom-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets bottom border color to sky-600",
  },
  {
    label: "border-b-sky-700",
    value: "border-b-sky-700",
    styles:
      "border-bottom-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets bottom border color to sky-700",
  },
  {
    label: "border-b-sky-800",
    value: "border-b-sky-800",
    styles:
      "border-bottom-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets bottom border color to sky-800",
  },
  {
    label: "border-b-sky-900",
    value: "border-b-sky-900",
    styles:
      "border-bottom-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets bottom border color to sky-900",
  },
  {
    label: "border-b-sky-950",
    value: "border-b-sky-950",
    styles:
      "border-bottom-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets bottom border color to sky-950",
  },
  {
    label: "border-b-blue-50",
    value: "border-b-blue-50",
    styles:
      "border-bottom-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets bottom border color to blue-50",
  },
  {
    label: "border-b-blue-100",
    value: "border-b-blue-100",
    styles:
      "border-bottom-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets bottom border color to blue-100",
  },
  {
    label: "border-b-blue-200",
    value: "border-b-blue-200",
    styles:
      "border-bottom-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets bottom border color to blue-200",
  },
  {
    label: "border-b-blue-300",
    value: "border-b-blue-300",
    styles:
      "border-bottom-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets bottom border color to blue-300",
  },
  {
    label: "border-b-blue-400",
    value: "border-b-blue-400",
    styles:
      "border-bottom-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets bottom border color to blue-400",
  },
  {
    label: "border-b-blue-500",
    value: "border-b-blue-500",
    styles:
      "border-bottom-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets bottom border color to blue-500",
  },
  {
    label: "border-b-blue-600",
    value: "border-b-blue-600",
    styles:
      "border-bottom-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets bottom border color to blue-600",
  },
  {
    label: "border-b-blue-700",
    value: "border-b-blue-700",
    styles:
      "border-bottom-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets bottom border color to blue-700",
  },
  {
    label: "border-b-blue-800",
    value: "border-b-blue-800",
    styles:
      "border-bottom-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets bottom border color to blue-800",
  },
  {
    label: "border-b-blue-900",
    value: "border-b-blue-900",
    styles:
      "border-bottom-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets bottom border color to blue-900",
  },
  {
    label: "border-b-blue-950",
    value: "border-b-blue-950",
    styles:
      "border-bottom-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets bottom border color to blue-950",
  },
  {
    label: "border-b-indigo-50",
    value: "border-b-indigo-50",
    styles:
      "border-bottom-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets bottom border color to indigo-50",
  },
  {
    label: "border-b-indigo-100",
    value: "border-b-indigo-100",
    styles:
      "border-bottom-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets bottom border color to indigo-100",
  },
  {
    label: "border-b-indigo-200",
    value: "border-b-indigo-200",
    styles:
      "border-bottom-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets bottom border color to indigo-200",
  },
  {
    label: "border-b-indigo-300",
    value: "border-b-indigo-300",
    styles:
      "border-bottom-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets bottom border color to indigo-300",
  },
  {
    label: "border-b-indigo-400",
    value: "border-b-indigo-400",
    styles:
      "border-bottom-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets bottom border color to indigo-400",
  },
  {
    label: "border-b-indigo-500",
    value: "border-b-indigo-500",
    styles:
      "border-bottom-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets bottom border color to indigo-500",
  },
  {
    label: "border-b-indigo-600",
    value: "border-b-indigo-600",
    styles:
      "border-bottom-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets bottom border color to indigo-600",
  },
  {
    label: "border-b-indigo-700",
    value: "border-b-indigo-700",
    styles:
      "border-bottom-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets bottom border color to indigo-700",
  },
  {
    label: "border-b-indigo-800",
    value: "border-b-indigo-800",
    styles:
      "border-bottom-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets bottom border color to indigo-800",
  },
  {
    label: "border-b-indigo-900",
    value: "border-b-indigo-900",
    styles:
      "border-bottom-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets bottom border color to indigo-900",
  },
  {
    label: "border-b-indigo-950",
    value: "border-b-indigo-950",
    styles:
      "border-bottom-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets bottom border color to indigo-950",
  },
  {
    label: "border-b-violet-50",
    value: "border-b-violet-50",
    styles:
      "border-bottom-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets bottom border color to violet-50",
  },
  {
    label: "border-b-violet-100",
    value: "border-b-violet-100",
    styles:
      "border-bottom-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets bottom border color to violet-100",
  },
  {
    label: "border-b-violet-200",
    value: "border-b-violet-200",
    styles:
      "border-bottom-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets bottom border color to violet-200",
  },
  {
    label: "border-b-violet-300",
    value: "border-b-violet-300",
    styles:
      "border-bottom-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets bottom border color to violet-300",
  },
  {
    label: "border-b-violet-400",
    value: "border-b-violet-400",
    styles:
      "border-bottom-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets bottom border color to violet-400",
  },
  {
    label: "border-b-violet-500",
    value: "border-b-violet-500",
    styles:
      "border-bottom-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets bottom border color to violet-500",
  },
  {
    label: "border-b-violet-600",
    value: "border-b-violet-600",
    styles:
      "border-bottom-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets bottom border color to violet-600",
  },
  {
    label: "border-b-violet-700",
    value: "border-b-violet-700",
    styles:
      "border-bottom-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets bottom border color to violet-700",
  },
  {
    label: "border-b-violet-800",
    value: "border-b-violet-800",
    styles:
      "border-bottom-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets bottom border color to violet-800",
  },
  {
    label: "border-b-violet-900",
    value: "border-b-violet-900",
    styles:
      "border-bottom-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets bottom border color to violet-900",
  },
  {
    label: "border-b-violet-950",
    value: "border-b-violet-950",
    styles:
      "border-bottom-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets bottom border color to violet-950",
  },
  {
    label: "border-b-purple-50",
    value: "border-b-purple-50",
    styles:
      "border-bottom-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets bottom border color to purple-50",
  },
  {
    label: "border-b-purple-100",
    value: "border-b-purple-100",
    styles:
      "border-bottom-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets bottom border color to purple-100",
  },
  {
    label: "border-b-purple-200",
    value: "border-b-purple-200",
    styles:
      "border-bottom-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets bottom border color to purple-200",
  },
  {
    label: "border-b-purple-300",
    value: "border-b-purple-300",
    styles:
      "border-bottom-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets bottom border color to purple-300",
  },
  {
    label: "border-b-purple-400",
    value: "border-b-purple-400",
    styles:
      "border-bottom-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets bottom border color to purple-400",
  },
  {
    label: "border-b-purple-500",
    value: "border-b-purple-500",
    styles:
      "border-bottom-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets bottom border color to purple-500",
  },
  {
    label: "border-b-purple-600",
    value: "border-b-purple-600",
    styles:
      "border-bottom-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets bottom border color to purple-600",
  },
  {
    label: "border-b-purple-700",
    value: "border-b-purple-700",
    styles:
      "border-bottom-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets bottom border color to purple-700",
  },
  {
    label: "border-b-purple-800",
    value: "border-b-purple-800",
    styles:
      "border-bottom-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets bottom border color to purple-800",
  },
  {
    label: "border-b-purple-900",
    value: "border-b-purple-900",
    styles:
      "border-bottom-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets bottom border color to purple-900",
  },
  {
    label: "border-b-purple-950",
    value: "border-b-purple-950",
    styles:
      "border-bottom-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets bottom border color to purple-950",
  },
  {
    label: "border-b-fuchsia-50",
    value: "border-b-fuchsia-50",
    styles:
      "border-bottom-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets bottom border color to fuchsia-50",
  },
  {
    label: "border-b-fuchsia-100",
    value: "border-b-fuchsia-100",
    styles:
      "border-bottom-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets bottom border color to fuchsia-100",
  },
  {
    label: "border-b-fuchsia-200",
    value: "border-b-fuchsia-200",
    styles:
      "border-bottom-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets bottom border color to fuchsia-200",
  },
  {
    label: "border-b-fuchsia-300",
    value: "border-b-fuchsia-300",
    styles:
      "border-bottom-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets bottom border color to fuchsia-300",
  },
  {
    label: "border-b-fuchsia-400",
    value: "border-b-fuchsia-400",
    styles:
      "border-bottom-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets bottom border color to fuchsia-400",
  },
  {
    label: "border-b-fuchsia-500",
    value: "border-b-fuchsia-500",
    styles:
      "border-bottom-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets bottom border color to fuchsia-500",
  },
  {
    label: "border-b-fuchsia-600",
    value: "border-b-fuchsia-600",
    styles:
      "border-bottom-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets bottom border color to fuchsia-600",
  },
  {
    label: "border-b-fuchsia-700",
    value: "border-b-fuchsia-700",
    styles:
      "border-bottom-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets bottom border color to fuchsia-700",
  },
  {
    label: "border-b-fuchsia-800",
    value: "border-b-fuchsia-800",
    styles:
      "border-bottom-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets bottom border color to fuchsia-800",
  },
  {
    label: "border-b-fuchsia-900",
    value: "border-b-fuchsia-900",
    styles:
      "border-bottom-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets bottom border color to fuchsia-900",
  },
  {
    label: "border-b-fuchsia-950",
    value: "border-b-fuchsia-950",
    styles:
      "border-bottom-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets bottom border color to fuchsia-950",
  },
  {
    label: "border-b-pink-50",
    value: "border-b-pink-50",
    styles:
      "border-bottom-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets bottom border color to pink-50",
  },
  {
    label: "border-b-pink-100",
    value: "border-b-pink-100",
    styles:
      "border-bottom-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets bottom border color to pink-100",
  },
  {
    label: "border-b-pink-200",
    value: "border-b-pink-200",
    styles:
      "border-bottom-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets bottom border color to pink-200",
  },
  {
    label: "border-b-pink-300",
    value: "border-b-pink-300",
    styles:
      "border-bottom-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets bottom border color to pink-300",
  },
  {
    label: "border-b-pink-400",
    value: "border-b-pink-400",
    styles:
      "border-bottom-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets bottom border color to pink-400",
  },
  {
    label: "border-b-pink-500",
    value: "border-b-pink-500",
    styles:
      "border-bottom-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets bottom border color to pink-500",
  },
  {
    label: "border-b-pink-600",
    value: "border-b-pink-600",
    styles:
      "border-bottom-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets bottom border color to pink-600",
  },
  {
    label: "border-b-pink-700",
    value: "border-b-pink-700",
    styles:
      "border-bottom-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets bottom border color to pink-700",
  },
  {
    label: "border-b-pink-800",
    value: "border-b-pink-800",
    styles:
      "border-bottom-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets bottom border color to pink-800",
  },
  {
    label: "border-b-pink-900",
    value: "border-b-pink-900",
    styles:
      "border-bottom-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets bottom border color to pink-900",
  },
  {
    label: "border-b-pink-950",
    value: "border-b-pink-950",
    styles:
      "border-bottom-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets bottom border color to pink-950",
  },
  {
    label: "border-b-rose-50",
    value: "border-b-rose-50",
    styles:
      "border-bottom-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets bottom border color to rose-50",
  },
  {
    label: "border-b-rose-100",
    value: "border-b-rose-100",
    styles:
      "border-bottom-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets bottom border color to rose-100",
  },
  {
    label: "border-b-rose-200",
    value: "border-b-rose-200",
    styles:
      "border-bottom-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets bottom border color to rose-200",
  },
  {
    label: "border-b-rose-300",
    value: "border-b-rose-300",
    styles:
      "border-bottom-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets bottom border color to rose-300",
  },
  {
    label: "border-b-rose-400",
    value: "border-b-rose-400",
    styles:
      "border-bottom-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets bottom border color to rose-400",
  },
  {
    label: "border-b-rose-500",
    value: "border-b-rose-500",
    styles:
      "border-bottom-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets bottom border color to rose-500",
  },
  {
    label: "border-b-rose-600",
    value: "border-b-rose-600",
    styles:
      "border-bottom-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets bottom border color to rose-600",
  },
  {
    label: "border-b-rose-700",
    value: "border-b-rose-700",
    styles:
      "border-bottom-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets bottom border color to rose-700",
  },
  {
    label: "border-b-rose-800",
    value: "border-b-rose-800",
    styles:
      "border-bottom-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets bottom border color to rose-800",
  },
  {
    label: "border-b-rose-900",
    value: "border-b-rose-900",
    styles:
      "border-bottom-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets bottom border color to rose-900",
  },
  {
    label: "border-b-rose-950",
    value: "border-b-rose-950",
    styles:
      "border-bottom-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets bottom border color to rose-950",
  },
  {
    label: "border-b-slate-50",
    value: "border-b-slate-50",
    styles:
      "border-bottom-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets bottom border color to slate-50",
  },
  {
    label: "border-b-slate-100",
    value: "border-b-slate-100",
    styles:
      "border-bottom-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets bottom border color to slate-100",
  },
  {
    label: "border-b-slate-200",
    value: "border-b-slate-200",
    styles:
      "border-bottom-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets bottom border color to slate-200",
  },
  {
    label: "border-b-slate-300",
    value: "border-b-slate-300",
    styles:
      "border-bottom-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets bottom border color to slate-300",
  },
  {
    label: "border-b-slate-400",
    value: "border-b-slate-400",
    styles:
      "border-bottom-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets bottom border color to slate-400",
  },
  {
    label: "border-b-slate-500",
    value: "border-b-slate-500",
    styles:
      "border-bottom-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets bottom border color to slate-500",
  },
  {
    label: "border-b-slate-600",
    value: "border-b-slate-600",
    styles:
      "border-bottom-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets bottom border color to slate-600",
  },
  {
    label: "border-b-slate-700",
    value: "border-b-slate-700",
    styles:
      "border-bottom-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets bottom border color to slate-700",
  },
  {
    label: "border-b-slate-800",
    value: "border-b-slate-800",
    styles:
      "border-bottom-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets bottom border color to slate-800",
  },
  {
    label: "border-b-slate-900",
    value: "border-b-slate-900",
    styles:
      "border-bottom-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets bottom border color to slate-900",
  },
  {
    label: "border-b-slate-950",
    value: "border-b-slate-950",
    styles:
      "border-bottom-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets bottom border color to slate-950",
  },
  {
    label: "border-b-gray-50",
    value: "border-b-gray-50",
    styles:
      "border-bottom-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets bottom border color to gray-50",
  },
  {
    label: "border-b-gray-100",
    value: "border-b-gray-100",
    styles:
      "border-bottom-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets bottom border color to gray-100",
  },
  {
    label: "border-b-gray-200",
    value: "border-b-gray-200",
    styles:
      "border-bottom-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets bottom border color to gray-200",
  },
  {
    label: "border-b-gray-300",
    value: "border-b-gray-300",
    styles:
      "border-bottom-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets bottom border color to gray-300",
  },
  {
    label: "border-b-gray-400",
    value: "border-b-gray-400",
    styles:
      "border-bottom-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets bottom border color to gray-400",
  },
  {
    label: "border-b-gray-500",
    value: "border-b-gray-500",
    styles:
      "border-bottom-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets bottom border color to gray-500",
  },
  {
    label: "border-b-gray-600",
    value: "border-b-gray-600",
    styles:
      "border-bottom-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets bottom border color to gray-600",
  },
  {
    label: "border-b-gray-700",
    value: "border-b-gray-700",
    styles:
      "border-bottom-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets bottom border color to gray-700",
  },
  {
    label: "border-b-gray-800",
    value: "border-b-gray-800",
    styles:
      "border-bottom-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets bottom border color to gray-800",
  },
  {
    label: "border-b-gray-900",
    value: "border-b-gray-900",
    styles:
      "border-bottom-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets bottom border color to gray-900",
  },
  {
    label: "border-b-gray-950",
    value: "border-b-gray-950",
    styles:
      "border-bottom-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets bottom border color to gray-950",
  },
  {
    label: "border-b-zinc-50",
    value: "border-b-zinc-50",
    styles: "border-bottom-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets bottom border color to zinc-50",
  },
  {
    label: "border-b-zinc-100",
    value: "border-b-zinc-100",
    styles:
      "border-bottom-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets bottom border color to zinc-100",
  },
  {
    label: "border-b-zinc-200",
    value: "border-b-zinc-200",
    styles:
      "border-bottom-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets bottom border color to zinc-200",
  },
  {
    label: "border-b-zinc-300",
    value: "border-b-zinc-300",
    styles:
      "border-bottom-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets bottom border color to zinc-300",
  },
  {
    label: "border-b-zinc-400",
    value: "border-b-zinc-400",
    styles:
      "border-bottom-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets bottom border color to zinc-400",
  },
  {
    label: "border-b-zinc-500",
    value: "border-b-zinc-500",
    styles:
      "border-bottom-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets bottom border color to zinc-500",
  },
  {
    label: "border-b-zinc-600",
    value: "border-b-zinc-600",
    styles:
      "border-bottom-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets bottom border color to zinc-600",
  },
  {
    label: "border-b-zinc-700",
    value: "border-b-zinc-700",
    styles:
      "border-bottom-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets bottom border color to zinc-700",
  },
  {
    label: "border-b-zinc-800",
    value: "border-b-zinc-800",
    styles:
      "border-bottom-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets bottom border color to zinc-800",
  },
  {
    label: "border-b-zinc-900",
    value: "border-b-zinc-900",
    styles:
      "border-bottom-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets bottom border color to zinc-900",
  },
  {
    label: "border-b-zinc-950",
    value: "border-b-zinc-950",
    styles:
      "border-bottom-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets bottom border color to zinc-950",
  },
  {
    label: "border-b-neutral-50",
    value: "border-b-neutral-50",
    styles:
      "border-bottom-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets bottom border color to neutral-50",
  },
  {
    label: "border-b-neutral-100",
    value: "border-b-neutral-100",
    styles:
      "border-bottom-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets bottom border color to neutral-100",
  },
  {
    label: "border-b-neutral-200",
    value: "border-b-neutral-200",
    styles:
      "border-bottom-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets bottom border color to neutral-200",
  },
  {
    label: "border-b-neutral-300",
    value: "border-b-neutral-300",
    styles:
      "border-bottom-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets bottom border color to neutral-300",
  },
  {
    label: "border-b-neutral-400",
    value: "border-b-neutral-400",
    styles:
      "border-bottom-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets bottom border color to neutral-400",
  },
  {
    label: "border-b-neutral-500",
    value: "border-b-neutral-500",
    styles:
      "border-bottom-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets bottom border color to neutral-500",
  },
  {
    label: "border-b-neutral-600",
    value: "border-b-neutral-600",
    styles:
      "border-bottom-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets bottom border color to neutral-600",
  },
  {
    label: "border-b-neutral-700",
    value: "border-b-neutral-700",
    styles:
      "border-bottom-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets bottom border color to neutral-700",
  },
  {
    label: "border-b-neutral-800",
    value: "border-b-neutral-800",
    styles:
      "border-bottom-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets bottom border color to neutral-800",
  },
  {
    label: "border-b-neutral-900",
    value: "border-b-neutral-900",
    styles:
      "border-bottom-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets bottom border color to neutral-900",
  },
  {
    label: "border-b-neutral-950",
    value: "border-b-neutral-950",
    styles:
      "border-bottom-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets bottom border color to neutral-950",
  },
  {
    label: "border-b-stone-50",
    value: "border-b-stone-50",
    styles:
      "border-bottom-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets bottom border color to stone-50",
  },
  {
    label: "border-b-stone-100",
    value: "border-b-stone-100",
    styles:
      "border-bottom-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets bottom border color to stone-100",
  },
  {
    label: "border-b-stone-200",
    value: "border-b-stone-200",
    styles:
      "border-bottom-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets bottom border color to stone-200",
  },
  {
    label: "border-b-stone-300",
    value: "border-b-stone-300",
    styles:
      "border-bottom-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets bottom border color to stone-300",
  },
  {
    label: "border-b-stone-400",
    value: "border-b-stone-400",
    styles:
      "border-bottom-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets bottom border color to stone-400",
  },
  {
    label: "border-b-stone-500",
    value: "border-b-stone-500",
    styles:
      "border-bottom-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets bottom border color to stone-500",
  },
  {
    label: "border-b-stone-600",
    value: "border-b-stone-600",
    styles:
      "border-bottom-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets bottom border color to stone-600",
  },
  {
    label: "border-b-stone-700",
    value: "border-b-stone-700",
    styles:
      "border-bottom-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets bottom border color to stone-700",
  },
  {
    label: "border-b-stone-800",
    value: "border-b-stone-800",
    styles:
      "border-bottom-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets bottom border color to stone-800",
  },
  {
    label: "border-b-stone-900",
    value: "border-b-stone-900",
    styles:
      "border-bottom-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets bottom border color to stone-900",
  },
  {
    label: "border-b-stone-950",
    value: "border-b-stone-950",
    styles:
      "border-bottom-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets bottom border color to stone-950",
  },
  {
    label: "border-b-(<custom-property>)",
    value: "border-b-(<custom-property>)",
    styles: "border-bottom-color: var(<custom-property>);",
    description: "Sets bottom border color to (<custom-property>)",
  },
  {
    label: "border-b-[<value>]",
    value: "border-b-[<value>]",
    styles: "border-bottom-color: <value>;",
    description: "Sets bottom border color to [<value>]",
  },
  {
    label: "border-l-inherit",
    value: "border-l-inherit",
    styles: "border-left-color: inherit;",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-l-current",
    value: "border-l-current",
    styles: "border-left-color: currentColor;",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-l-transparent",
    value: "border-l-transparent",
    styles: "border-left-color: transparent;",
    description: "Sets border color to transparent",
  },
  {
    label: "border-l-black",
    value: "border-l-black",
    styles: "border-left-color: var(--color-black); /* #000 */",
    description: "Sets left border color to black",
  },
  {
    label: "border-l-white",
    value: "border-l-white",
    styles: "border-left-color: var(--color-white); /* #fff */",
    description: "Sets left border color to white",
  },
  {
    label: "border-l-red-50",
    value: "border-l-red-50",
    styles:
      "border-left-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets left border color to red-50",
  },
  {
    label: "border-l-red-100",
    value: "border-l-red-100",
    styles:
      "border-left-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets left border color to red-100",
  },
  {
    label: "border-l-red-200",
    value: "border-l-red-200",
    styles:
      "border-left-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets left border color to red-200",
  },
  {
    label: "border-l-red-300",
    value: "border-l-red-300",
    styles:
      "border-left-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets left border color to red-300",
  },
  {
    label: "border-l-red-400",
    value: "border-l-red-400",
    styles:
      "border-left-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets left border color to red-400",
  },
  {
    label: "border-l-red-500",
    value: "border-l-red-500",
    styles:
      "border-left-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets left border color to red-500",
  },
  {
    label: "border-l-red-600",
    value: "border-l-red-600",
    styles:
      "border-left-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets left border color to red-600",
  },
  {
    label: "border-l-red-700",
    value: "border-l-red-700",
    styles:
      "border-left-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets left border color to red-700",
  },
  {
    label: "border-l-red-800",
    value: "border-l-red-800",
    styles:
      "border-left-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets left border color to red-800",
  },
  {
    label: "border-l-red-900",
    value: "border-l-red-900",
    styles:
      "border-left-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets left border color to red-900",
  },
  {
    label: "border-l-red-950",
    value: "border-l-red-950",
    styles:
      "border-left-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets left border color to red-950",
  },
  {
    label: "border-l-orange-50",
    value: "border-l-orange-50",
    styles:
      "border-left-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets left border color to orange-50",
  },
  {
    label: "border-l-orange-100",
    value: "border-l-orange-100",
    styles:
      "border-left-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets left border color to orange-100",
  },
  {
    label: "border-l-orange-200",
    value: "border-l-orange-200",
    styles:
      "border-left-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets left border color to orange-200",
  },
  {
    label: "border-l-orange-300",
    value: "border-l-orange-300",
    styles:
      "border-left-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets left border color to orange-300",
  },
  {
    label: "border-l-orange-400",
    value: "border-l-orange-400",
    styles:
      "border-left-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets left border color to orange-400",
  },
  {
    label: "border-l-orange-500",
    value: "border-l-orange-500",
    styles:
      "border-left-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets left border color to orange-500",
  },
  {
    label: "border-l-orange-600",
    value: "border-l-orange-600",
    styles:
      "border-left-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets left border color to orange-600",
  },
  {
    label: "border-l-orange-700",
    value: "border-l-orange-700",
    styles:
      "border-left-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets left border color to orange-700",
  },
  {
    label: "border-l-orange-800",
    value: "border-l-orange-800",
    styles:
      "border-left-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets left border color to orange-800",
  },
  {
    label: "border-l-orange-900",
    value: "border-l-orange-900",
    styles:
      "border-left-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets left border color to orange-900",
  },
  {
    label: "border-l-orange-950",
    value: "border-l-orange-950",
    styles:
      "border-left-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets left border color to orange-950",
  },
  {
    label: "border-l-amber-50",
    value: "border-l-amber-50",
    styles:
      "border-left-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets left border color to amber-50",
  },
  {
    label: "border-l-amber-100",
    value: "border-l-amber-100",
    styles:
      "border-left-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets left border color to amber-100",
  },
  {
    label: "border-l-amber-200",
    value: "border-l-amber-200",
    styles:
      "border-left-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets left border color to amber-200",
  },
  {
    label: "border-l-amber-300",
    value: "border-l-amber-300",
    styles:
      "border-left-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets left border color to amber-300",
  },
  {
    label: "border-l-amber-400",
    value: "border-l-amber-400",
    styles:
      "border-left-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets left border color to amber-400",
  },
  {
    label: "border-l-amber-500",
    value: "border-l-amber-500",
    styles:
      "border-left-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets left border color to amber-500",
  },
  {
    label: "border-l-amber-600",
    value: "border-l-amber-600",
    styles:
      "border-left-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets left border color to amber-600",
  },
  {
    label: "border-l-amber-700",
    value: "border-l-amber-700",
    styles:
      "border-left-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets left border color to amber-700",
  },
  {
    label: "border-l-amber-800",
    value: "border-l-amber-800",
    styles:
      "border-left-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets left border color to amber-800",
  },
  {
    label: "border-l-amber-900",
    value: "border-l-amber-900",
    styles:
      "border-left-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets left border color to amber-900",
  },
  {
    label: "border-l-amber-950",
    value: "border-l-amber-950",
    styles:
      "border-left-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets left border color to amber-950",
  },
  {
    label: "border-l-yellow-50",
    value: "border-l-yellow-50",
    styles:
      "border-left-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets left border color to yellow-50",
  },
  {
    label: "border-l-yellow-100",
    value: "border-l-yellow-100",
    styles:
      "border-left-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets left border color to yellow-100",
  },
  {
    label: "border-l-yellow-200",
    value: "border-l-yellow-200",
    styles:
      "border-left-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets left border color to yellow-200",
  },
  {
    label: "border-l-yellow-300",
    value: "border-l-yellow-300",
    styles:
      "border-left-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets left border color to yellow-300",
  },
  {
    label: "border-l-yellow-400",
    value: "border-l-yellow-400",
    styles:
      "border-left-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets left border color to yellow-400",
  },
  {
    label: "border-l-yellow-500",
    value: "border-l-yellow-500",
    styles:
      "border-left-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets left border color to yellow-500",
  },
  {
    label: "border-l-yellow-600",
    value: "border-l-yellow-600",
    styles:
      "border-left-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets left border color to yellow-600",
  },
  {
    label: "border-l-yellow-700",
    value: "border-l-yellow-700",
    styles:
      "border-left-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets left border color to yellow-700",
  },
  {
    label: "border-l-yellow-800",
    value: "border-l-yellow-800",
    styles:
      "border-left-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets left border color to yellow-800",
  },
  {
    label: "border-l-yellow-900",
    value: "border-l-yellow-900",
    styles:
      "border-left-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets left border color to yellow-900",
  },
  {
    label: "border-l-yellow-950",
    value: "border-l-yellow-950",
    styles:
      "border-left-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets left border color to yellow-950",
  },
  {
    label: "border-l-lime-50",
    value: "border-l-lime-50",
    styles:
      "border-left-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets left border color to lime-50",
  },
  {
    label: "border-l-lime-100",
    value: "border-l-lime-100",
    styles:
      "border-left-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets left border color to lime-100",
  },
  {
    label: "border-l-lime-200",
    value: "border-l-lime-200",
    styles:
      "border-left-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets left border color to lime-200",
  },
  {
    label: "border-l-lime-300",
    value: "border-l-lime-300",
    styles:
      "border-left-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets left border color to lime-300",
  },
  {
    label: "border-l-lime-400",
    value: "border-l-lime-400",
    styles:
      "border-left-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets left border color to lime-400",
  },
  {
    label: "border-l-lime-500",
    value: "border-l-lime-500",
    styles:
      "border-left-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets left border color to lime-500",
  },
  {
    label: "border-l-lime-600",
    value: "border-l-lime-600",
    styles:
      "border-left-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets left border color to lime-600",
  },
  {
    label: "border-l-lime-700",
    value: "border-l-lime-700",
    styles:
      "border-left-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets left border color to lime-700",
  },
  {
    label: "border-l-lime-800",
    value: "border-l-lime-800",
    styles:
      "border-left-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets left border color to lime-800",
  },
  {
    label: "border-l-lime-900",
    value: "border-l-lime-900",
    styles:
      "border-left-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets left border color to lime-900",
  },
  {
    label: "border-l-lime-950",
    value: "border-l-lime-950",
    styles:
      "border-left-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets left border color to lime-950",
  },
  {
    label: "border-l-green-50",
    value: "border-l-green-50",
    styles:
      "border-left-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets left border color to green-50",
  },
  {
    label: "border-l-green-100",
    value: "border-l-green-100",
    styles:
      "border-left-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets left border color to green-100",
  },
  {
    label: "border-l-green-200",
    value: "border-l-green-200",
    styles:
      "border-left-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets left border color to green-200",
  },
  {
    label: "border-l-green-300",
    value: "border-l-green-300",
    styles:
      "border-left-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets left border color to green-300",
  },
  {
    label: "border-l-green-400",
    value: "border-l-green-400",
    styles:
      "border-left-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets left border color to green-400",
  },
  {
    label: "border-l-green-500",
    value: "border-l-green-500",
    styles:
      "border-left-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets left border color to green-500",
  },
  {
    label: "border-l-green-600",
    value: "border-l-green-600",
    styles:
      "border-left-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets left border color to green-600",
  },
  {
    label: "border-l-green-700",
    value: "border-l-green-700",
    styles:
      "border-left-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets left border color to green-700",
  },
  {
    label: "border-l-green-800",
    value: "border-l-green-800",
    styles:
      "border-left-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets left border color to green-800",
  },
  {
    label: "border-l-green-900",
    value: "border-l-green-900",
    styles:
      "border-left-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets left border color to green-900",
  },
  {
    label: "border-l-green-950",
    value: "border-l-green-950",
    styles:
      "border-left-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets left border color to green-950",
  },
  {
    label: "border-l-emerald-50",
    value: "border-l-emerald-50",
    styles:
      "border-left-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets left border color to emerald-50",
  },
  {
    label: "border-l-emerald-100",
    value: "border-l-emerald-100",
    styles:
      "border-left-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets left border color to emerald-100",
  },
  {
    label: "border-l-emerald-200",
    value: "border-l-emerald-200",
    styles:
      "border-left-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets left border color to emerald-200",
  },
  {
    label: "border-l-emerald-300",
    value: "border-l-emerald-300",
    styles:
      "border-left-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets left border color to emerald-300",
  },
  {
    label: "border-l-emerald-400",
    value: "border-l-emerald-400",
    styles:
      "border-left-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets left border color to emerald-400",
  },
  {
    label: "border-l-emerald-500",
    value: "border-l-emerald-500",
    styles:
      "border-left-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets left border color to emerald-500",
  },
  {
    label: "border-l-emerald-600",
    value: "border-l-emerald-600",
    styles:
      "border-left-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets left border color to emerald-600",
  },
  {
    label: "border-l-emerald-700",
    value: "border-l-emerald-700",
    styles:
      "border-left-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets left border color to emerald-700",
  },
  {
    label: "border-l-emerald-800",
    value: "border-l-emerald-800",
    styles:
      "border-left-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets left border color to emerald-800",
  },
  {
    label: "border-l-emerald-900",
    value: "border-l-emerald-900",
    styles:
      "border-left-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets left border color to emerald-900",
  },
  {
    label: "border-l-emerald-950",
    value: "border-l-emerald-950",
    styles:
      "border-left-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets left border color to emerald-950",
  },
  {
    label: "border-l-teal-50",
    value: "border-l-teal-50",
    styles:
      "border-left-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets left border color to teal-50",
  },
  {
    label: "border-l-teal-100",
    value: "border-l-teal-100",
    styles:
      "border-left-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets left border color to teal-100",
  },
  {
    label: "border-l-teal-200",
    value: "border-l-teal-200",
    styles:
      "border-left-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets left border color to teal-200",
  },
  {
    label: "border-l-teal-300",
    value: "border-l-teal-300",
    styles:
      "border-left-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets left border color to teal-300",
  },
  {
    label: "border-l-teal-400",
    value: "border-l-teal-400",
    styles:
      "border-left-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets left border color to teal-400",
  },
  {
    label: "border-l-teal-500",
    value: "border-l-teal-500",
    styles:
      "border-left-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets left border color to teal-500",
  },
  {
    label: "border-l-teal-600",
    value: "border-l-teal-600",
    styles:
      "border-left-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets left border color to teal-600",
  },
  {
    label: "border-l-teal-700",
    value: "border-l-teal-700",
    styles:
      "border-left-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets left border color to teal-700",
  },
  {
    label: "border-l-teal-800",
    value: "border-l-teal-800",
    styles:
      "border-left-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets left border color to teal-800",
  },
  {
    label: "border-l-teal-900",
    value: "border-l-teal-900",
    styles:
      "border-left-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets left border color to teal-900",
  },
  {
    label: "border-l-teal-950",
    value: "border-l-teal-950",
    styles:
      "border-left-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets left border color to teal-950",
  },
  {
    label: "border-l-cyan-50",
    value: "border-l-cyan-50",
    styles:
      "border-left-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets left border color to cyan-50",
  },
  {
    label: "border-l-cyan-100",
    value: "border-l-cyan-100",
    styles:
      "border-left-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets left border color to cyan-100",
  },
  {
    label: "border-l-cyan-200",
    value: "border-l-cyan-200",
    styles:
      "border-left-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets left border color to cyan-200",
  },
  {
    label: "border-l-cyan-300",
    value: "border-l-cyan-300",
    styles:
      "border-left-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets left border color to cyan-300",
  },
  {
    label: "border-l-cyan-400",
    value: "border-l-cyan-400",
    styles:
      "border-left-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets left border color to cyan-400",
  },
  {
    label: "border-l-cyan-500",
    value: "border-l-cyan-500",
    styles:
      "border-left-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets left border color to cyan-500",
  },
  {
    label: "border-l-cyan-600",
    value: "border-l-cyan-600",
    styles:
      "border-left-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets left border color to cyan-600",
  },
  {
    label: "border-l-cyan-700",
    value: "border-l-cyan-700",
    styles:
      "border-left-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets left border color to cyan-700",
  },
  {
    label: "border-l-cyan-800",
    value: "border-l-cyan-800",
    styles:
      "border-left-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets left border color to cyan-800",
  },
  {
    label: "border-l-cyan-900",
    value: "border-l-cyan-900",
    styles:
      "border-left-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets left border color to cyan-900",
  },
  {
    label: "border-l-cyan-950",
    value: "border-l-cyan-950",
    styles:
      "border-left-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets left border color to cyan-950",
  },
  {
    label: "border-l-sky-50",
    value: "border-l-sky-50",
    styles:
      "border-left-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets left border color to sky-50",
  },
  {
    label: "border-l-sky-100",
    value: "border-l-sky-100",
    styles:
      "border-left-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets left border color to sky-100",
  },
  {
    label: "border-l-sky-200",
    value: "border-l-sky-200",
    styles:
      "border-left-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets left border color to sky-200",
  },
  {
    label: "border-l-sky-300",
    value: "border-l-sky-300",
    styles:
      "border-left-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets left border color to sky-300",
  },
  {
    label: "border-l-sky-400",
    value: "border-l-sky-400",
    styles:
      "border-left-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets left border color to sky-400",
  },
  {
    label: "border-l-sky-500",
    value: "border-l-sky-500",
    styles:
      "border-left-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets left border color to sky-500",
  },
  {
    label: "border-l-sky-600",
    value: "border-l-sky-600",
    styles:
      "border-left-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets left border color to sky-600",
  },
  {
    label: "border-l-sky-700",
    value: "border-l-sky-700",
    styles:
      "border-left-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets left border color to sky-700",
  },
  {
    label: "border-l-sky-800",
    value: "border-l-sky-800",
    styles:
      "border-left-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets left border color to sky-800",
  },
  {
    label: "border-l-sky-900",
    value: "border-l-sky-900",
    styles:
      "border-left-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets left border color to sky-900",
  },
  {
    label: "border-l-sky-950",
    value: "border-l-sky-950",
    styles:
      "border-left-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets left border color to sky-950",
  },
  {
    label: "border-l-blue-50",
    value: "border-l-blue-50",
    styles:
      "border-left-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets left border color to blue-50",
  },
  {
    label: "border-l-blue-100",
    value: "border-l-blue-100",
    styles:
      "border-left-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets left border color to blue-100",
  },
  {
    label: "border-l-blue-200",
    value: "border-l-blue-200",
    styles:
      "border-left-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets left border color to blue-200",
  },
  {
    label: "border-l-blue-300",
    value: "border-l-blue-300",
    styles:
      "border-left-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets left border color to blue-300",
  },
  {
    label: "border-l-blue-400",
    value: "border-l-blue-400",
    styles:
      "border-left-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets left border color to blue-400",
  },
  {
    label: "border-l-blue-500",
    value: "border-l-blue-500",
    styles:
      "border-left-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets left border color to blue-500",
  },
  {
    label: "border-l-blue-600",
    value: "border-l-blue-600",
    styles:
      "border-left-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets left border color to blue-600",
  },
  {
    label: "border-l-blue-700",
    value: "border-l-blue-700",
    styles:
      "border-left-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets left border color to blue-700",
  },
  {
    label: "border-l-blue-800",
    value: "border-l-blue-800",
    styles:
      "border-left-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets left border color to blue-800",
  },
  {
    label: "border-l-blue-900",
    value: "border-l-blue-900",
    styles:
      "border-left-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets left border color to blue-900",
  },
  {
    label: "border-l-blue-950",
    value: "border-l-blue-950",
    styles:
      "border-left-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets left border color to blue-950",
  },
  {
    label: "border-l-indigo-50",
    value: "border-l-indigo-50",
    styles:
      "border-left-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets left border color to indigo-50",
  },
  {
    label: "border-l-indigo-100",
    value: "border-l-indigo-100",
    styles:
      "border-left-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets left border color to indigo-100",
  },
  {
    label: "border-l-indigo-200",
    value: "border-l-indigo-200",
    styles:
      "border-left-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets left border color to indigo-200",
  },
  {
    label: "border-l-indigo-300",
    value: "border-l-indigo-300",
    styles:
      "border-left-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets left border color to indigo-300",
  },
  {
    label: "border-l-indigo-400",
    value: "border-l-indigo-400",
    styles:
      "border-left-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets left border color to indigo-400",
  },
  {
    label: "border-l-indigo-500",
    value: "border-l-indigo-500",
    styles:
      "border-left-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets left border color to indigo-500",
  },
  {
    label: "border-l-indigo-600",
    value: "border-l-indigo-600",
    styles:
      "border-left-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets left border color to indigo-600",
  },
  {
    label: "border-l-indigo-700",
    value: "border-l-indigo-700",
    styles:
      "border-left-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets left border color to indigo-700",
  },
  {
    label: "border-l-indigo-800",
    value: "border-l-indigo-800",
    styles:
      "border-left-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets left border color to indigo-800",
  },
  {
    label: "border-l-indigo-900",
    value: "border-l-indigo-900",
    styles:
      "border-left-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets left border color to indigo-900",
  },
  {
    label: "border-l-indigo-950",
    value: "border-l-indigo-950",
    styles:
      "border-left-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets left border color to indigo-950",
  },
  {
    label: "border-l-violet-50",
    value: "border-l-violet-50",
    styles:
      "border-left-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets left border color to violet-50",
  },
  {
    label: "border-l-violet-100",
    value: "border-l-violet-100",
    styles:
      "border-left-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets left border color to violet-100",
  },
  {
    label: "border-l-violet-200",
    value: "border-l-violet-200",
    styles:
      "border-left-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets left border color to violet-200",
  },
  {
    label: "border-l-violet-300",
    value: "border-l-violet-300",
    styles:
      "border-left-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets left border color to violet-300",
  },
  {
    label: "border-l-violet-400",
    value: "border-l-violet-400",
    styles:
      "border-left-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets left border color to violet-400",
  },
  {
    label: "border-l-violet-500",
    value: "border-l-violet-500",
    styles:
      "border-left-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets left border color to violet-500",
  },
  {
    label: "border-l-violet-600",
    value: "border-l-violet-600",
    styles:
      "border-left-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets left border color to violet-600",
  },
  {
    label: "border-l-violet-700",
    value: "border-l-violet-700",
    styles:
      "border-left-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets left border color to violet-700",
  },
  {
    label: "border-l-violet-800",
    value: "border-l-violet-800",
    styles:
      "border-left-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets left border color to violet-800",
  },
  {
    label: "border-l-violet-900",
    value: "border-l-violet-900",
    styles:
      "border-left-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets left border color to violet-900",
  },
  {
    label: "border-l-violet-950",
    value: "border-l-violet-950",
    styles:
      "border-left-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets left border color to violet-950",
  },
  {
    label: "border-l-purple-50",
    value: "border-l-purple-50",
    styles:
      "border-left-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets left border color to purple-50",
  },
  {
    label: "border-l-purple-100",
    value: "border-l-purple-100",
    styles:
      "border-left-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets left border color to purple-100",
  },
  {
    label: "border-l-purple-200",
    value: "border-l-purple-200",
    styles:
      "border-left-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets left border color to purple-200",
  },
  {
    label: "border-l-purple-300",
    value: "border-l-purple-300",
    styles:
      "border-left-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets left border color to purple-300",
  },
  {
    label: "border-l-purple-400",
    value: "border-l-purple-400",
    styles:
      "border-left-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets left border color to purple-400",
  },
  {
    label: "border-l-purple-500",
    value: "border-l-purple-500",
    styles:
      "border-left-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets left border color to purple-500",
  },
  {
    label: "border-l-purple-600",
    value: "border-l-purple-600",
    styles:
      "border-left-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets left border color to purple-600",
  },
  {
    label: "border-l-purple-700",
    value: "border-l-purple-700",
    styles:
      "border-left-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets left border color to purple-700",
  },
  {
    label: "border-l-purple-800",
    value: "border-l-purple-800",
    styles:
      "border-left-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets left border color to purple-800",
  },
  {
    label: "border-l-purple-900",
    value: "border-l-purple-900",
    styles:
      "border-left-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets left border color to purple-900",
  },
  {
    label: "border-l-purple-950",
    value: "border-l-purple-950",
    styles:
      "border-left-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets left border color to purple-950",
  },
  {
    label: "border-l-fuchsia-50",
    value: "border-l-fuchsia-50",
    styles:
      "border-left-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets left border color to fuchsia-50",
  },
  {
    label: "border-l-fuchsia-100",
    value: "border-l-fuchsia-100",
    styles:
      "border-left-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets left border color to fuchsia-100",
  },
  {
    label: "border-l-fuchsia-200",
    value: "border-l-fuchsia-200",
    styles:
      "border-left-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets left border color to fuchsia-200",
  },
  {
    label: "border-l-fuchsia-300",
    value: "border-l-fuchsia-300",
    styles:
      "border-left-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets left border color to fuchsia-300",
  },
  {
    label: "border-l-fuchsia-400",
    value: "border-l-fuchsia-400",
    styles:
      "border-left-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets left border color to fuchsia-400",
  },
  {
    label: "border-l-fuchsia-500",
    value: "border-l-fuchsia-500",
    styles:
      "border-left-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets left border color to fuchsia-500",
  },
  {
    label: "border-l-fuchsia-600",
    value: "border-l-fuchsia-600",
    styles:
      "border-left-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets left border color to fuchsia-600",
  },
  {
    label: "border-l-fuchsia-700",
    value: "border-l-fuchsia-700",
    styles:
      "border-left-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets left border color to fuchsia-700",
  },
  {
    label: "border-l-fuchsia-800",
    value: "border-l-fuchsia-800",
    styles:
      "border-left-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets left border color to fuchsia-800",
  },
  {
    label: "border-l-fuchsia-900",
    value: "border-l-fuchsia-900",
    styles:
      "border-left-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets left border color to fuchsia-900",
  },
  {
    label: "border-l-fuchsia-950",
    value: "border-l-fuchsia-950",
    styles:
      "border-left-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets left border color to fuchsia-950",
  },
  {
    label: "border-l-pink-50",
    value: "border-l-pink-50",
    styles:
      "border-left-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets left border color to pink-50",
  },
  {
    label: "border-l-pink-100",
    value: "border-l-pink-100",
    styles:
      "border-left-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets left border color to pink-100",
  },
  {
    label: "border-l-pink-200",
    value: "border-l-pink-200",
    styles:
      "border-left-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets left border color to pink-200",
  },
  {
    label: "border-l-pink-300",
    value: "border-l-pink-300",
    styles:
      "border-left-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets left border color to pink-300",
  },
  {
    label: "border-l-pink-400",
    value: "border-l-pink-400",
    styles:
      "border-left-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets left border color to pink-400",
  },
  {
    label: "border-l-pink-500",
    value: "border-l-pink-500",
    styles:
      "border-left-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets left border color to pink-500",
  },
  {
    label: "border-l-pink-600",
    value: "border-l-pink-600",
    styles:
      "border-left-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets left border color to pink-600",
  },
  {
    label: "border-l-pink-700",
    value: "border-l-pink-700",
    styles:
      "border-left-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets left border color to pink-700",
  },
  {
    label: "border-l-pink-800",
    value: "border-l-pink-800",
    styles:
      "border-left-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets left border color to pink-800",
  },
  {
    label: "border-l-pink-900",
    value: "border-l-pink-900",
    styles:
      "border-left-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets left border color to pink-900",
  },
  {
    label: "border-l-pink-950",
    value: "border-l-pink-950",
    styles:
      "border-left-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets left border color to pink-950",
  },
  {
    label: "border-l-rose-50",
    value: "border-l-rose-50",
    styles:
      "border-left-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets left border color to rose-50",
  },
  {
    label: "border-l-rose-100",
    value: "border-l-rose-100",
    styles:
      "border-left-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets left border color to rose-100",
  },
  {
    label: "border-l-rose-200",
    value: "border-l-rose-200",
    styles:
      "border-left-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets left border color to rose-200",
  },
  {
    label: "border-l-rose-300",
    value: "border-l-rose-300",
    styles:
      "border-left-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets left border color to rose-300",
  },
  {
    label: "border-l-rose-400",
    value: "border-l-rose-400",
    styles:
      "border-left-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets left border color to rose-400",
  },
  {
    label: "border-l-rose-500",
    value: "border-l-rose-500",
    styles:
      "border-left-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets left border color to rose-500",
  },
  {
    label: "border-l-rose-600",
    value: "border-l-rose-600",
    styles:
      "border-left-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets left border color to rose-600",
  },
  {
    label: "border-l-rose-700",
    value: "border-l-rose-700",
    styles:
      "border-left-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets left border color to rose-700",
  },
  {
    label: "border-l-rose-800",
    value: "border-l-rose-800",
    styles:
      "border-left-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets left border color to rose-800",
  },
  {
    label: "border-l-rose-900",
    value: "border-l-rose-900",
    styles:
      "border-left-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets left border color to rose-900",
  },
  {
    label: "border-l-rose-950",
    value: "border-l-rose-950",
    styles:
      "border-left-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets left border color to rose-950",
  },
  {
    label: "border-l-slate-50",
    value: "border-l-slate-50",
    styles:
      "border-left-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets left border color to slate-50",
  },
  {
    label: "border-l-slate-100",
    value: "border-l-slate-100",
    styles:
      "border-left-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets left border color to slate-100",
  },
  {
    label: "border-l-slate-200",
    value: "border-l-slate-200",
    styles:
      "border-left-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets left border color to slate-200",
  },
  {
    label: "border-l-slate-300",
    value: "border-l-slate-300",
    styles:
      "border-left-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets left border color to slate-300",
  },
  {
    label: "border-l-slate-400",
    value: "border-l-slate-400",
    styles:
      "border-left-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets left border color to slate-400",
  },
  {
    label: "border-l-slate-500",
    value: "border-l-slate-500",
    styles:
      "border-left-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets left border color to slate-500",
  },
  {
    label: "border-l-slate-600",
    value: "border-l-slate-600",
    styles:
      "border-left-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets left border color to slate-600",
  },
  {
    label: "border-l-slate-700",
    value: "border-l-slate-700",
    styles:
      "border-left-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets left border color to slate-700",
  },
  {
    label: "border-l-slate-800",
    value: "border-l-slate-800",
    styles:
      "border-left-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets left border color to slate-800",
  },
  {
    label: "border-l-slate-900",
    value: "border-l-slate-900",
    styles:
      "border-left-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets left border color to slate-900",
  },
  {
    label: "border-l-slate-950",
    value: "border-l-slate-950",
    styles:
      "border-left-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets left border color to slate-950",
  },
  {
    label: "border-l-gray-50",
    value: "border-l-gray-50",
    styles:
      "border-left-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets left border color to gray-50",
  },
  {
    label: "border-l-gray-100",
    value: "border-l-gray-100",
    styles:
      "border-left-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets left border color to gray-100",
  },
  {
    label: "border-l-gray-200",
    value: "border-l-gray-200",
    styles:
      "border-left-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets left border color to gray-200",
  },
  {
    label: "border-l-gray-300",
    value: "border-l-gray-300",
    styles:
      "border-left-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets left border color to gray-300",
  },
  {
    label: "border-l-gray-400",
    value: "border-l-gray-400",
    styles:
      "border-left-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets left border color to gray-400",
  },
  {
    label: "border-l-gray-500",
    value: "border-l-gray-500",
    styles:
      "border-left-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets left border color to gray-500",
  },
  {
    label: "border-l-gray-600",
    value: "border-l-gray-600",
    styles:
      "border-left-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets left border color to gray-600",
  },
  {
    label: "border-l-gray-700",
    value: "border-l-gray-700",
    styles:
      "border-left-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets left border color to gray-700",
  },
  {
    label: "border-l-gray-800",
    value: "border-l-gray-800",
    styles:
      "border-left-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets left border color to gray-800",
  },
  {
    label: "border-l-gray-900",
    value: "border-l-gray-900",
    styles:
      "border-left-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets left border color to gray-900",
  },
  {
    label: "border-l-gray-950",
    value: "border-l-gray-950",
    styles:
      "border-left-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets left border color to gray-950",
  },
  {
    label: "border-l-zinc-50",
    value: "border-l-zinc-50",
    styles: "border-left-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets left border color to zinc-50",
  },
  {
    label: "border-l-zinc-100",
    value: "border-l-zinc-100",
    styles:
      "border-left-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets left border color to zinc-100",
  },
  {
    label: "border-l-zinc-200",
    value: "border-l-zinc-200",
    styles:
      "border-left-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets left border color to zinc-200",
  },
  {
    label: "border-l-zinc-300",
    value: "border-l-zinc-300",
    styles:
      "border-left-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets left border color to zinc-300",
  },
  {
    label: "border-l-zinc-400",
    value: "border-l-zinc-400",
    styles:
      "border-left-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets left border color to zinc-400",
  },
  {
    label: "border-l-zinc-500",
    value: "border-l-zinc-500",
    styles:
      "border-left-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets left border color to zinc-500",
  },
  {
    label: "border-l-zinc-600",
    value: "border-l-zinc-600",
    styles:
      "border-left-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets left border color to zinc-600",
  },
  {
    label: "border-l-zinc-700",
    value: "border-l-zinc-700",
    styles:
      "border-left-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets left border color to zinc-700",
  },
  {
    label: "border-l-zinc-800",
    value: "border-l-zinc-800",
    styles:
      "border-left-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets left border color to zinc-800",
  },
  {
    label: "border-l-zinc-900",
    value: "border-l-zinc-900",
    styles:
      "border-left-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets left border color to zinc-900",
  },
  {
    label: "border-l-zinc-950",
    value: "border-l-zinc-950",
    styles:
      "border-left-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets left border color to zinc-950",
  },
  {
    label: "border-l-neutral-50",
    value: "border-l-neutral-50",
    styles:
      "border-left-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets left border color to neutral-50",
  },
  {
    label: "border-l-neutral-100",
    value: "border-l-neutral-100",
    styles: "border-left-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets left border color to neutral-100",
  },
  {
    label: "border-l-neutral-200",
    value: "border-l-neutral-200",
    styles:
      "border-left-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets left border color to neutral-200",
  },
  {
    label: "border-l-neutral-300",
    value: "border-l-neutral-300",
    styles: "border-left-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets left border color to neutral-300",
  },
  {
    label: "border-l-neutral-400",
    value: "border-l-neutral-400",
    styles:
      "border-left-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets left border color to neutral-400",
  },
  {
    label: "border-l-neutral-500",
    value: "border-l-neutral-500",
    styles:
      "border-left-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets left border color to neutral-500",
  },
  {
    label: "border-l-neutral-600",
    value: "border-l-neutral-600",
    styles:
      "border-left-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets left border color to neutral-600",
  },
  {
    label: "border-l-neutral-700",
    value: "border-l-neutral-700",
    styles:
      "border-left-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets left border color to neutral-700",
  },
  {
    label: "border-l-neutral-800",
    value: "border-l-neutral-800",
    styles:
      "border-left-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets left border color to neutral-800",
  },
  {
    label: "border-l-neutral-900",
    value: "border-l-neutral-900",
    styles:
      "border-left-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets left border color to neutral-900",
  },
  {
    label: "border-l-neutral-950",
    value: "border-l-neutral-950",
    styles:
      "border-left-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets left border color to neutral-950",
  },
  {
    label: "border-l-stone-50",
    value: "border-l-stone-50",
    styles:
      "border-left-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets left border color to stone-50",
  },
  {
    label: "border-l-stone-100",
    value: "border-l-stone-100",
    styles:
      "border-left-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets left border color to stone-100",
  },
  {
    label: "border-l-stone-200",
    value: "border-l-stone-200",
    styles:
      "border-left-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets left border color to stone-200",
  },
  {
    label: "border-l-stone-300",
    value: "border-l-stone-300",
    styles:
      "border-left-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets left border color to stone-300",
  },
  {
    label: "border-l-stone-400",
    value: "border-l-stone-400",
    styles:
      "border-left-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets left border color to stone-400",
  },
  {
    label: "border-l-stone-500",
    value: "border-l-stone-500",
    styles:
      "border-left-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets left border color to stone-500",
  },
  {
    label: "border-l-stone-600",
    value: "border-l-stone-600",
    styles:
      "border-left-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets left border color to stone-600",
  },
  {
    label: "border-l-stone-700",
    value: "border-l-stone-700",
    styles:
      "border-left-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets left border color to stone-700",
  },
  {
    label: "border-l-stone-800",
    value: "border-l-stone-800",
    styles:
      "border-left-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets left border color to stone-800",
  },
  {
    label: "border-l-stone-900",
    value: "border-l-stone-900",
    styles:
      "border-left-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets left border color to stone-900",
  },
  {
    label: "border-l-stone-950",
    value: "border-l-stone-950",
    styles:
      "border-left-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets left border color to stone-950",
  },
  {
    label: "border-l-(<custom-property>)",
    value: "border-l-(<custom-property>)",
    styles: "border-left-color: var(<custom-property>);",
    description: "Sets left border color to (<custom-property>)",
  },
  {
    label: "border-l-[<value>]",
    value: "border-l-[<value>]",
    styles: "border-left-color: <value>;",
    description: "Sets left border color to [<value>]",
  },
  {
    label: "divide-inherit",
    value: "divide-inherit",
    styles: "& > :not(:last-child) {",
    description: "Inherits border color from parent element",
  },
  {
    label: "border-color: inherit;",
    value: "border-color: inherit;",
    styles: "}",
    description: "Inherits border color from parent element",
  },
  {
    label: "divide-current",
    value: "divide-current",
    styles: "& > :not(:last-child) {",
    description: "Sets border color to the current text color",
  },
  {
    label: "border-color: currentColor;",
    value: "border-color: currentColor;",
    styles: "}",
    description: "Sets border color to the current text color",
  },
  {
    label: "divide-transparent",
    value: "divide-transparent",
    styles: "& > :not(:last-child) {",
    description: "Sets border color to transparent",
  },
  {
    label: "border-color: transparent;",
    value: "border-color: transparent;",
    styles: "}",
    description: "Sets border color to transparent",
  },
  {
    label: "divide-black",
    value: "divide-black",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to black",
  },
  {
    label: "border-color: var(--color-black); /* #000 */",
    value: "border-color: var(--color-black); /* #000 */",
    styles: "}",
    description: "Sets border color to color: var(--color-black); /* #000 */",
  },
  {
    label: "divide-white",
    value: "divide-white",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to white",
  },
  {
    label: "border-color: var(--color-white); /* #fff */",
    value: "border-color: var(--color-white); /* #fff */",
    styles: "}",
    description: "Sets border color to color: var(--color-white); /* #fff */",
  },
  {
    label: "divide-red-50",
    value: "divide-red-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-50",
  },
  {
    label: "border-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    value: "border-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
  },
  {
    label: "divide-red-100",
    value: "divide-red-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-100",
  },
  {
    label:
      "border-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    value:
      "border-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
  },
  {
    label: "divide-red-200",
    value: "divide-red-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-200",
  },
  {
    label:
      "border-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    value:
      "border-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
  },
  {
    label: "divide-red-300",
    value: "divide-red-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-300",
  },
  {
    label:
      "border-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    value:
      "border-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
  },
  {
    label: "divide-red-400",
    value: "divide-red-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-400",
  },
  {
    label:
      "border-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    value:
      "border-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
  },
  {
    label: "divide-red-500",
    value: "divide-red-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-500",
  },
  {
    label:
      "border-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    value:
      "border-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
  },
  {
    label: "divide-red-600",
    value: "divide-red-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-600",
  },
  {
    label:
      "border-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    value:
      "border-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
  },
  {
    label: "divide-red-700",
    value: "divide-red-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-700",
  },
  {
    label:
      "border-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    value:
      "border-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
  },
  {
    label: "divide-red-800",
    value: "divide-red-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-800",
  },
  {
    label:
      "border-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    value:
      "border-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
  },
  {
    label: "divide-red-900",
    value: "divide-red-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-900",
  },
  {
    label:
      "border-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    value:
      "border-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
  },
  {
    label: "divide-red-950",
    value: "divide-red-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to red-950",
  },
  {
    label:
      "border-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    value:
      "border-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
  },
  {
    label: "divide-orange-50",
    value: "divide-orange-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-50",
  },
  {
    label:
      "border-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    value:
      "border-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
  },
  {
    label: "divide-orange-100",
    value: "divide-orange-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-100",
  },
  {
    label:
      "border-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    value:
      "border-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
  },
  {
    label: "divide-orange-200",
    value: "divide-orange-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-200",
  },
  {
    label:
      "border-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    value:
      "border-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
  },
  {
    label: "divide-orange-300",
    value: "divide-orange-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-300",
  },
  {
    label:
      "border-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    value:
      "border-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
  },
  {
    label: "divide-orange-400",
    value: "divide-orange-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-400",
  },
  {
    label:
      "border-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    value:
      "border-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
  },
  {
    label: "divide-orange-500",
    value: "divide-orange-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-500",
  },
  {
    label:
      "border-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    value:
      "border-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
  },
  {
    label: "divide-orange-600",
    value: "divide-orange-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-600",
  },
  {
    label:
      "border-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    value:
      "border-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
  },
  {
    label: "divide-orange-700",
    value: "divide-orange-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-700",
  },
  {
    label:
      "border-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    value:
      "border-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
  },
  {
    label: "divide-orange-800",
    value: "divide-orange-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-800",
  },
  {
    label:
      "border-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    value:
      "border-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
  },
  {
    label: "divide-orange-900",
    value: "divide-orange-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-900",
  },
  {
    label:
      "border-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    value:
      "border-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
  },
  {
    label: "divide-orange-950",
    value: "divide-orange-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to orange-950",
  },
  {
    label:
      "border-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    value:
      "border-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
  },
  {
    label: "divide-amber-50",
    value: "divide-amber-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-50",
  },
  {
    label:
      "border-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    value:
      "border-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
  },
  {
    label: "divide-amber-100",
    value: "divide-amber-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-100",
  },
  {
    label:
      "border-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    value:
      "border-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
  },
  {
    label: "divide-amber-200",
    value: "divide-amber-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-200",
  },
  {
    label:
      "border-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    value:
      "border-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
  },
  {
    label: "divide-amber-300",
    value: "divide-amber-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-300",
  },
  {
    label:
      "border-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    value:
      "border-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
  },
  {
    label: "divide-amber-400",
    value: "divide-amber-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-400",
  },
  {
    label:
      "border-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    value:
      "border-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
  },
  {
    label: "divide-amber-500",
    value: "divide-amber-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-500",
  },
  {
    label:
      "border-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    value:
      "border-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
  },
  {
    label: "divide-amber-600",
    value: "divide-amber-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-600",
  },
  {
    label:
      "border-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    value:
      "border-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
  },
  {
    label: "divide-amber-700",
    value: "divide-amber-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-700",
  },
  {
    label:
      "border-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    value:
      "border-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
  },
  {
    label: "divide-amber-800",
    value: "divide-amber-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-800",
  },
  {
    label:
      "border-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    value:
      "border-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
  },
  {
    label: "divide-amber-900",
    value: "divide-amber-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-900",
  },
  {
    label:
      "border-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    value:
      "border-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
  },
  {
    label: "divide-amber-950",
    value: "divide-amber-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to amber-950",
  },
  {
    label:
      "border-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    value:
      "border-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
  },
  {
    label: "divide-yellow-50",
    value: "divide-yellow-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    value:
      "border-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
  },
  {
    label: "divide-yellow-100",
    value: "divide-yellow-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    value:
      "border-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
  },
  {
    label: "divide-yellow-200",
    value: "divide-yellow-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    value:
      "border-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
  },
  {
    label: "divide-yellow-300",
    value: "divide-yellow-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    value:
      "border-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
  },
  {
    label: "divide-yellow-400",
    value: "divide-yellow-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    value:
      "border-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
  },
  {
    label: "divide-yellow-500",
    value: "divide-yellow-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    value:
      "border-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
  },
  {
    label: "divide-yellow-600",
    value: "divide-yellow-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    value:
      "border-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
  },
  {
    label: "divide-yellow-700",
    value: "divide-yellow-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    value:
      "border-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
  },
  {
    label: "divide-yellow-800",
    value: "divide-yellow-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    value:
      "border-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
  },
  {
    label: "divide-yellow-900",
    value: "divide-yellow-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    value:
      "border-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
  },
  {
    label: "divide-yellow-950",
    value: "divide-yellow-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for horizontal dividers between child elements",
  },
  {
    label:
      "border-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    value:
      "border-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
  },
  {
    label: "divide-lime-50",
    value: "divide-lime-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-50",
  },
  {
    label:
      "border-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    value:
      "border-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
  },
  {
    label: "divide-lime-100",
    value: "divide-lime-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-100",
  },
  {
    label:
      "border-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    value:
      "border-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
  },
  {
    label: "divide-lime-200",
    value: "divide-lime-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-200",
  },
  {
    label:
      "border-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    value:
      "border-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
  },
  {
    label: "divide-lime-300",
    value: "divide-lime-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-300",
  },
  {
    label:
      "border-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    value:
      "border-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
  },
  {
    label: "divide-lime-400",
    value: "divide-lime-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-400",
  },
  {
    label:
      "border-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    value:
      "border-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
  },
  {
    label: "divide-lime-500",
    value: "divide-lime-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-500",
  },
  {
    label:
      "border-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    value:
      "border-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
  },
  {
    label: "divide-lime-600",
    value: "divide-lime-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-600",
  },
  {
    label:
      "border-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    value:
      "border-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
  },
  {
    label: "divide-lime-700",
    value: "divide-lime-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-700",
  },
  {
    label:
      "border-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    value:
      "border-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
  },
  {
    label: "divide-lime-800",
    value: "divide-lime-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-800",
  },
  {
    label:
      "border-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    value:
      "border-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
  },
  {
    label: "divide-lime-900",
    value: "divide-lime-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-900",
  },
  {
    label:
      "border-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    value:
      "border-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
  },
  {
    label: "divide-lime-950",
    value: "divide-lime-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to lime-950",
  },
  {
    label:
      "border-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    value:
      "border-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
  },
  {
    label: "divide-green-50",
    value: "divide-green-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-50",
  },
  {
    label:
      "border-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    value:
      "border-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
  },
  {
    label: "divide-green-100",
    value: "divide-green-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-100",
  },
  {
    label:
      "border-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    value:
      "border-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
  },
  {
    label: "divide-green-200",
    value: "divide-green-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-200",
  },
  {
    label:
      "border-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    value:
      "border-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
  },
  {
    label: "divide-green-300",
    value: "divide-green-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-300",
  },
  {
    label:
      "border-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    value:
      "border-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
  },
  {
    label: "divide-green-400",
    value: "divide-green-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-400",
  },
  {
    label:
      "border-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    value:
      "border-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
  },
  {
    label: "divide-green-500",
    value: "divide-green-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-500",
  },
  {
    label:
      "border-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    value:
      "border-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
  },
  {
    label: "divide-green-600",
    value: "divide-green-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-600",
  },
  {
    label:
      "border-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    value:
      "border-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
  },
  {
    label: "divide-green-700",
    value: "divide-green-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-700",
  },
  {
    label:
      "border-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    value:
      "border-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
  },
  {
    label: "divide-green-800",
    value: "divide-green-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-800",
  },
  {
    label:
      "border-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    value:
      "border-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
  },
  {
    label: "divide-green-900",
    value: "divide-green-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-900",
  },
  {
    label:
      "border-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    value:
      "border-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
  },
  {
    label: "divide-green-950",
    value: "divide-green-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to green-950",
  },
  {
    label:
      "border-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    value:
      "border-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
  },
  {
    label: "divide-emerald-50",
    value: "divide-emerald-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-50",
  },
  {
    label:
      "border-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    value:
      "border-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
  },
  {
    label: "divide-emerald-100",
    value: "divide-emerald-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-100",
  },
  {
    label:
      "border-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    value:
      "border-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
  },
  {
    label: "divide-emerald-200",
    value: "divide-emerald-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-200",
  },
  {
    label:
      "border-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    value:
      "border-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
  },
  {
    label: "divide-emerald-300",
    value: "divide-emerald-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-300",
  },
  {
    label:
      "border-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    value:
      "border-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
  },
  {
    label: "divide-emerald-400",
    value: "divide-emerald-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-400",
  },
  {
    label:
      "border-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    value:
      "border-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
  },
  {
    label: "divide-emerald-500",
    value: "divide-emerald-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-500",
  },
  {
    label:
      "border-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    value:
      "border-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
  },
  {
    label: "divide-emerald-600",
    value: "divide-emerald-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-600",
  },
  {
    label:
      "border-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    value:
      "border-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
  },
  {
    label: "divide-emerald-700",
    value: "divide-emerald-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-700",
  },
  {
    label:
      "border-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    value:
      "border-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
  },
  {
    label: "divide-emerald-800",
    value: "divide-emerald-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-800",
  },
  {
    label:
      "border-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    value:
      "border-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
  },
  {
    label: "divide-emerald-900",
    value: "divide-emerald-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-900",
  },
  {
    label:
      "border-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    value:
      "border-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
  },
  {
    label: "divide-emerald-950",
    value: "divide-emerald-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to emerald-950",
  },
  {
    label:
      "border-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    value:
      "border-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
  },
  {
    label: "divide-teal-50",
    value: "divide-teal-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-50",
  },
  {
    label:
      "border-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    value:
      "border-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
  },
  {
    label: "divide-teal-100",
    value: "divide-teal-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-100",
  },
  {
    label:
      "border-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    value:
      "border-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
  },
  {
    label: "divide-teal-200",
    value: "divide-teal-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-200",
  },
  {
    label:
      "border-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    value:
      "border-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
  },
  {
    label: "divide-teal-300",
    value: "divide-teal-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-300",
  },
  {
    label:
      "border-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    value:
      "border-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
  },
  {
    label: "divide-teal-400",
    value: "divide-teal-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-400",
  },
  {
    label:
      "border-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    value:
      "border-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
  },
  {
    label: "divide-teal-500",
    value: "divide-teal-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-500",
  },
  {
    label:
      "border-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    value:
      "border-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
  },
  {
    label: "divide-teal-600",
    value: "divide-teal-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-600",
  },
  {
    label:
      "border-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    value:
      "border-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
  },
  {
    label: "divide-teal-700",
    value: "divide-teal-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-700",
  },
  {
    label:
      "border-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    value:
      "border-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
  },
  {
    label: "divide-teal-800",
    value: "divide-teal-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-800",
  },
  {
    label:
      "border-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    value:
      "border-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
  },
  {
    label: "divide-teal-900",
    value: "divide-teal-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-900",
  },
  {
    label:
      "border-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    value:
      "border-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
  },
  {
    label: "divide-teal-950",
    value: "divide-teal-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to teal-950",
  },
  {
    label:
      "border-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    value:
      "border-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
  },
  {
    label: "divide-cyan-50",
    value: "divide-cyan-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-50",
  },
  {
    label:
      "border-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    value:
      "border-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
  },
  {
    label: "divide-cyan-100",
    value: "divide-cyan-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-100",
  },
  {
    label:
      "border-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    value:
      "border-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
  },
  {
    label: "divide-cyan-200",
    value: "divide-cyan-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-200",
  },
  {
    label:
      "border-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    value:
      "border-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
  },
  {
    label: "divide-cyan-300",
    value: "divide-cyan-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-300",
  },
  {
    label:
      "border-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    value:
      "border-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
  },
  {
    label: "divide-cyan-400",
    value: "divide-cyan-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-400",
  },
  {
    label:
      "border-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    value:
      "border-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
  },
  {
    label: "divide-cyan-500",
    value: "divide-cyan-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-500",
  },
  {
    label:
      "border-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    value:
      "border-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
  },
  {
    label: "divide-cyan-600",
    value: "divide-cyan-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-600",
  },
  {
    label:
      "border-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    value:
      "border-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
  },
  {
    label: "divide-cyan-700",
    value: "divide-cyan-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-700",
  },
  {
    label:
      "border-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    value:
      "border-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
  },
  {
    label: "divide-cyan-800",
    value: "divide-cyan-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-800",
  },
  {
    label:
      "border-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    value:
      "border-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
  },
  {
    label: "divide-cyan-900",
    value: "divide-cyan-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-900",
  },
  {
    label:
      "border-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    value:
      "border-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
  },
  {
    label: "divide-cyan-950",
    value: "divide-cyan-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to cyan-950",
  },
  {
    label:
      "border-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    value:
      "border-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
  },
  {
    label: "divide-sky-50",
    value: "divide-sky-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-50",
  },
  {
    label: "border-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    value: "border-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
  },
  {
    label: "divide-sky-100",
    value: "divide-sky-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-100",
  },
  {
    label:
      "border-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    value:
      "border-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
  },
  {
    label: "divide-sky-200",
    value: "divide-sky-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-200",
  },
  {
    label:
      "border-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    value:
      "border-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
  },
  {
    label: "divide-sky-300",
    value: "divide-sky-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-300",
  },
  {
    label:
      "border-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    value:
      "border-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
  },
  {
    label: "divide-sky-400",
    value: "divide-sky-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-400",
  },
  {
    label:
      "border-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    value:
      "border-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
  },
  {
    label: "divide-sky-500",
    value: "divide-sky-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-500",
  },
  {
    label:
      "border-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    value:
      "border-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
  },
  {
    label: "divide-sky-600",
    value: "divide-sky-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-600",
  },
  {
    label:
      "border-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    value:
      "border-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
  },
  {
    label: "divide-sky-700",
    value: "divide-sky-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-700",
  },
  {
    label: "border-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    value: "border-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
  },
  {
    label: "divide-sky-800",
    value: "divide-sky-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-800",
  },
  {
    label: "border-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    value: "border-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
  },
  {
    label: "divide-sky-900",
    value: "divide-sky-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-900",
  },
  {
    label:
      "border-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    value:
      "border-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
  },
  {
    label: "divide-sky-950",
    value: "divide-sky-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to sky-950",
  },
  {
    label:
      "border-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    value:
      "border-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
  },
  {
    label: "divide-blue-50",
    value: "divide-blue-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-50",
  },
  {
    label: "border-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    value: "border-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
  },
  {
    label: "divide-blue-100",
    value: "divide-blue-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-100",
  },
  {
    label:
      "border-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    value:
      "border-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
  },
  {
    label: "divide-blue-200",
    value: "divide-blue-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-200",
  },
  {
    label:
      "border-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    value:
      "border-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
  },
  {
    label: "divide-blue-300",
    value: "divide-blue-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-300",
  },
  {
    label:
      "border-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    value:
      "border-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
  },
  {
    label: "divide-blue-400",
    value: "divide-blue-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-400",
  },
  {
    label:
      "border-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    value:
      "border-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
  },
  {
    label: "divide-blue-500",
    value: "divide-blue-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-500",
  },
  {
    label:
      "border-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    value:
      "border-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
  },
  {
    label: "divide-blue-600",
    value: "divide-blue-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-600",
  },
  {
    label:
      "border-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    value:
      "border-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
  },
  {
    label: "divide-blue-700",
    value: "divide-blue-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-700",
  },
  {
    label:
      "border-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    value:
      "border-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
  },
  {
    label: "divide-blue-800",
    value: "divide-blue-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-800",
  },
  {
    label:
      "border-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    value:
      "border-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
  },
  {
    label: "divide-blue-900",
    value: "divide-blue-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-900",
  },
  {
    label:
      "border-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    value:
      "border-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
  },
  {
    label: "divide-blue-950",
    value: "divide-blue-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to blue-950",
  },
  {
    label:
      "border-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    value:
      "border-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
  },
  {
    label: "divide-indigo-50",
    value: "divide-indigo-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-50",
  },
  {
    label:
      "border-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    value:
      "border-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
  },
  {
    label: "divide-indigo-100",
    value: "divide-indigo-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-100",
  },
  {
    label:
      "border-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    value:
      "border-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
  },
  {
    label: "divide-indigo-200",
    value: "divide-indigo-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-200",
  },
  {
    label:
      "border-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    value:
      "border-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
  },
  {
    label: "divide-indigo-300",
    value: "divide-indigo-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-300",
  },
  {
    label:
      "border-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    value:
      "border-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
  },
  {
    label: "divide-indigo-400",
    value: "divide-indigo-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-400",
  },
  {
    label:
      "border-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    value:
      "border-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
  },
  {
    label: "divide-indigo-500",
    value: "divide-indigo-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-500",
  },
  {
    label:
      "border-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    value:
      "border-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
  },
  {
    label: "divide-indigo-600",
    value: "divide-indigo-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-600",
  },
  {
    label:
      "border-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    value:
      "border-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
  },
  {
    label: "divide-indigo-700",
    value: "divide-indigo-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-700",
  },
  {
    label:
      "border-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    value:
      "border-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
  },
  {
    label: "divide-indigo-800",
    value: "divide-indigo-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-800",
  },
  {
    label:
      "border-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    value:
      "border-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
  },
  {
    label: "divide-indigo-900",
    value: "divide-indigo-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-900",
  },
  {
    label:
      "border-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    value:
      "border-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
  },
  {
    label: "divide-indigo-950",
    value: "divide-indigo-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to indigo-950",
  },
  {
    label:
      "border-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    value:
      "border-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
  },
  {
    label: "divide-violet-50",
    value: "divide-violet-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-50",
  },
  {
    label:
      "border-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    value:
      "border-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
  },
  {
    label: "divide-violet-100",
    value: "divide-violet-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-100",
  },
  {
    label:
      "border-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    value:
      "border-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
  },
  {
    label: "divide-violet-200",
    value: "divide-violet-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-200",
  },
  {
    label:
      "border-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    value:
      "border-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
  },
  {
    label: "divide-violet-300",
    value: "divide-violet-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-300",
  },
  {
    label:
      "border-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    value:
      "border-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
  },
  {
    label: "divide-violet-400",
    value: "divide-violet-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-400",
  },
  {
    label:
      "border-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    value:
      "border-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
  },
  {
    label: "divide-violet-500",
    value: "divide-violet-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-500",
  },
  {
    label:
      "border-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    value:
      "border-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
  },
  {
    label: "divide-violet-600",
    value: "divide-violet-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-600",
  },
  {
    label:
      "border-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    value:
      "border-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
  },
  {
    label: "divide-violet-700",
    value: "divide-violet-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-700",
  },
  {
    label:
      "border-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    value:
      "border-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
  },
  {
    label: "divide-violet-800",
    value: "divide-violet-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-800",
  },
  {
    label:
      "border-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    value:
      "border-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
  },
  {
    label: "divide-violet-900",
    value: "divide-violet-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-900",
  },
  {
    label:
      "border-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    value:
      "border-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
  },
  {
    label: "divide-violet-950",
    value: "divide-violet-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to violet-950",
  },
  {
    label:
      "border-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    value:
      "border-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
  },
  {
    label: "divide-purple-50",
    value: "divide-purple-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-50",
  },
  {
    label:
      "border-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    value:
      "border-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
  },
  {
    label: "divide-purple-100",
    value: "divide-purple-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-100",
  },
  {
    label:
      "border-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    value:
      "border-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
  },
  {
    label: "divide-purple-200",
    value: "divide-purple-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-200",
  },
  {
    label:
      "border-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    value:
      "border-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
  },
  {
    label: "divide-purple-300",
    value: "divide-purple-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-300",
  },
  {
    label:
      "border-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    value:
      "border-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
  },
  {
    label: "divide-purple-400",
    value: "divide-purple-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-400",
  },
  {
    label:
      "border-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    value:
      "border-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
  },
  {
    label: "divide-purple-500",
    value: "divide-purple-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-500",
  },
  {
    label:
      "border-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    value:
      "border-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
  },
  {
    label: "divide-purple-600",
    value: "divide-purple-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-600",
  },
  {
    label:
      "border-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    value:
      "border-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
  },
  {
    label: "divide-purple-700",
    value: "divide-purple-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-700",
  },
  {
    label:
      "border-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    value:
      "border-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
  },
  {
    label: "divide-purple-800",
    value: "divide-purple-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-800",
  },
  {
    label:
      "border-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    value:
      "border-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
  },
  {
    label: "divide-purple-900",
    value: "divide-purple-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-900",
  },
  {
    label:
      "border-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    value:
      "border-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
  },
  {
    label: "divide-purple-950",
    value: "divide-purple-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to purple-950",
  },
  {
    label:
      "border-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    value:
      "border-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
  },
  {
    label: "divide-fuchsia-50",
    value: "divide-fuchsia-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-50",
  },
  {
    label:
      "border-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    value:
      "border-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
  },
  {
    label: "divide-fuchsia-100",
    value: "divide-fuchsia-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-100",
  },
  {
    label:
      "border-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    value:
      "border-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
  },
  {
    label: "divide-fuchsia-200",
    value: "divide-fuchsia-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-200",
  },
  {
    label:
      "border-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    value:
      "border-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
  },
  {
    label: "divide-fuchsia-300",
    value: "divide-fuchsia-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-300",
  },
  {
    label:
      "border-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    value:
      "border-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
  },
  {
    label: "divide-fuchsia-400",
    value: "divide-fuchsia-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-400",
  },
  {
    label:
      "border-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    value:
      "border-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
  },
  {
    label: "divide-fuchsia-500",
    value: "divide-fuchsia-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-500",
  },
  {
    label:
      "border-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    value:
      "border-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
  },
  {
    label: "divide-fuchsia-600",
    value: "divide-fuchsia-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-600",
  },
  {
    label:
      "border-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    value:
      "border-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
  },
  {
    label: "divide-fuchsia-700",
    value: "divide-fuchsia-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-700",
  },
  {
    label:
      "border-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    value:
      "border-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
  },
  {
    label: "divide-fuchsia-800",
    value: "divide-fuchsia-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-800",
  },
  {
    label:
      "border-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    value:
      "border-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
  },
  {
    label: "divide-fuchsia-900",
    value: "divide-fuchsia-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-900",
  },
  {
    label:
      "border-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    value:
      "border-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
  },
  {
    label: "divide-fuchsia-950",
    value: "divide-fuchsia-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to fuchsia-950",
  },
  {
    label:
      "border-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    value:
      "border-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
  },
  {
    label: "divide-pink-50",
    value: "divide-pink-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-50",
  },
  {
    label:
      "border-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    value:
      "border-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
  },
  {
    label: "divide-pink-100",
    value: "divide-pink-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-100",
  },
  {
    label:
      "border-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    value:
      "border-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
  },
  {
    label: "divide-pink-200",
    value: "divide-pink-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-200",
  },
  {
    label:
      "border-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    value:
      "border-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
  },
  {
    label: "divide-pink-300",
    value: "divide-pink-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-300",
  },
  {
    label:
      "border-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    value:
      "border-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
  },
  {
    label: "divide-pink-400",
    value: "divide-pink-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-400",
  },
  {
    label:
      "border-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    value:
      "border-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
  },
  {
    label: "divide-pink-500",
    value: "divide-pink-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-500",
  },
  {
    label:
      "border-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    value:
      "border-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
  },
  {
    label: "divide-pink-600",
    value: "divide-pink-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-600",
  },
  {
    label:
      "border-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    value:
      "border-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
  },
  {
    label: "divide-pink-700",
    value: "divide-pink-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-700",
  },
  {
    label:
      "border-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    value:
      "border-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
  },
  {
    label: "divide-pink-800",
    value: "divide-pink-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-800",
  },
  {
    label:
      "border-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    value:
      "border-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
  },
  {
    label: "divide-pink-900",
    value: "divide-pink-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-900",
  },
  {
    label:
      "border-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    value:
      "border-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
  },
  {
    label: "divide-pink-950",
    value: "divide-pink-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to pink-950",
  },
  {
    label:
      "border-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    value:
      "border-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
  },
  {
    label: "divide-rose-50",
    value: "divide-rose-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-50",
  },
  {
    label:
      "border-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    value:
      "border-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
  },
  {
    label: "divide-rose-100",
    value: "divide-rose-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-100",
  },
  {
    label: "border-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    value: "border-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
  },
  {
    label: "divide-rose-200",
    value: "divide-rose-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-200",
  },
  {
    label:
      "border-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    value:
      "border-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
  },
  {
    label: "divide-rose-300",
    value: "divide-rose-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-300",
  },
  {
    label: "border-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    value: "border-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
  },
  {
    label: "divide-rose-400",
    value: "divide-rose-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-400",
  },
  {
    label:
      "border-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    value:
      "border-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
  },
  {
    label: "divide-rose-500",
    value: "divide-rose-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-500",
  },
  {
    label:
      "border-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    value:
      "border-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
  },
  {
    label: "divide-rose-600",
    value: "divide-rose-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-600",
  },
  {
    label:
      "border-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    value:
      "border-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
  },
  {
    label: "divide-rose-700",
    value: "divide-rose-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-700",
  },
  {
    label:
      "border-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    value:
      "border-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
  },
  {
    label: "divide-rose-800",
    value: "divide-rose-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-800",
  },
  {
    label:
      "border-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    value:
      "border-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
  },
  {
    label: "divide-rose-900",
    value: "divide-rose-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-900",
  },
  {
    label: "border-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    value: "border-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
  },
  {
    label: "divide-rose-950",
    value: "divide-rose-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to rose-950",
  },
  {
    label:
      "border-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    value:
      "border-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
  },
  {
    label: "divide-slate-50",
    value: "divide-slate-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-50",
  },
  {
    label:
      "border-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    value:
      "border-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
  },
  {
    label: "divide-slate-100",
    value: "divide-slate-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-100",
  },
  {
    label:
      "border-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    value:
      "border-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
  },
  {
    label: "divide-slate-200",
    value: "divide-slate-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-200",
  },
  {
    label:
      "border-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    value:
      "border-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
  },
  {
    label: "divide-slate-300",
    value: "divide-slate-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-300",
  },
  {
    label:
      "border-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    value:
      "border-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
  },
  {
    label: "divide-slate-400",
    value: "divide-slate-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-400",
  },
  {
    label:
      "border-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    value:
      "border-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
  },
  {
    label: "divide-slate-500",
    value: "divide-slate-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-500",
  },
  {
    label:
      "border-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    value:
      "border-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
  },
  {
    label: "divide-slate-600",
    value: "divide-slate-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-600",
  },
  {
    label:
      "border-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    value:
      "border-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
  },
  {
    label: "divide-slate-700",
    value: "divide-slate-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-700",
  },
  {
    label:
      "border-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    value:
      "border-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
  },
  {
    label: "divide-slate-800",
    value: "divide-slate-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-800",
  },
  {
    label:
      "border-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    value:
      "border-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
  },
  {
    label: "divide-slate-900",
    value: "divide-slate-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-900",
  },
  {
    label:
      "border-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    value:
      "border-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
  },
  {
    label: "divide-slate-950",
    value: "divide-slate-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to slate-950",
  },
  {
    label:
      "border-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    value:
      "border-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
  },
  {
    label: "divide-gray-50",
    value: "divide-gray-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-50",
  },
  {
    label:
      "border-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    value:
      "border-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
  },
  {
    label: "divide-gray-100",
    value: "divide-gray-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-100",
  },
  {
    label:
      "border-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    value:
      "border-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
  },
  {
    label: "divide-gray-200",
    value: "divide-gray-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-200",
  },
  {
    label:
      "border-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    value:
      "border-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
  },
  {
    label: "divide-gray-300",
    value: "divide-gray-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-300",
  },
  {
    label:
      "border-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    value:
      "border-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
  },
  {
    label: "divide-gray-400",
    value: "divide-gray-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-400",
  },
  {
    label:
      "border-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    value:
      "border-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
  },
  {
    label: "divide-gray-500",
    value: "divide-gray-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-500",
  },
  {
    label:
      "border-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    value:
      "border-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
  },
  {
    label: "divide-gray-600",
    value: "divide-gray-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-600",
  },
  {
    label:
      "border-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    value:
      "border-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
  },
  {
    label: "divide-gray-700",
    value: "divide-gray-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-700",
  },
  {
    label:
      "border-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    value:
      "border-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
  },
  {
    label: "divide-gray-800",
    value: "divide-gray-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-800",
  },
  {
    label:
      "border-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    value:
      "border-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
  },
  {
    label: "divide-gray-900",
    value: "divide-gray-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-900",
  },
  {
    label:
      "border-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    value:
      "border-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
  },
  {
    label: "divide-gray-950",
    value: "divide-gray-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to gray-950",
  },
  {
    label:
      "border-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    value:
      "border-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
  },
  {
    label: "divide-zinc-50",
    value: "divide-zinc-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-50",
  },
  {
    label: "border-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    value: "border-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
  },
  {
    label: "divide-zinc-100",
    value: "divide-zinc-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-100",
  },
  {
    label:
      "border-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    value:
      "border-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
  },
  {
    label: "divide-zinc-200",
    value: "divide-zinc-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-200",
  },
  {
    label: "border-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    value: "border-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
  },
  {
    label: "divide-zinc-300",
    value: "divide-zinc-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-300",
  },
  {
    label:
      "border-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    value:
      "border-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
  },
  {
    label: "divide-zinc-400",
    value: "divide-zinc-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-400",
  },
  {
    label:
      "border-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    value:
      "border-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
  },
  {
    label: "divide-zinc-500",
    value: "divide-zinc-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-500",
  },
  {
    label:
      "border-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    value:
      "border-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
  },
  {
    label: "divide-zinc-600",
    value: "divide-zinc-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-600",
  },
  {
    label:
      "border-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    value:
      "border-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
  },
  {
    label: "divide-zinc-700",
    value: "divide-zinc-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-700",
  },
  {
    label:
      "border-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    value:
      "border-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
  },
  {
    label: "divide-zinc-800",
    value: "divide-zinc-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-800",
  },
  {
    label:
      "border-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    value:
      "border-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
  },
  {
    label: "divide-zinc-900",
    value: "divide-zinc-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-900",
  },
  {
    label:
      "border-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    value:
      "border-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
  },
  {
    label: "divide-zinc-950",
    value: "divide-zinc-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to zinc-950",
  },
  {
    label:
      "border-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    value:
      "border-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
  },
  {
    label: "divide-neutral-50",
    value: "divide-neutral-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-50",
  },
  {
    label: "border-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    value: "border-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
  },
  {
    label: "divide-neutral-100",
    value: "divide-neutral-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-100",
  },
  {
    label: "border-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    value: "border-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-100); /* oklch(97% 0 0) */",
  },
  {
    label: "divide-neutral-200",
    value: "divide-neutral-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-200",
  },
  {
    label: "border-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    value: "border-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
  },
  {
    label: "divide-neutral-300",
    value: "divide-neutral-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-300",
  },
  {
    label: "border-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    value: "border-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-300); /* oklch(87% 0 0) */",
  },
  {
    label: "divide-neutral-400",
    value: "divide-neutral-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-400",
  },
  {
    label: "border-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    value: "border-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
  },
  {
    label: "divide-neutral-500",
    value: "divide-neutral-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-500",
  },
  {
    label: "border-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    value: "border-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
  },
  {
    label: "divide-neutral-600",
    value: "divide-neutral-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-600",
  },
  {
    label: "border-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    value: "border-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
  },
  {
    label: "divide-neutral-700",
    value: "divide-neutral-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-700",
  },
  {
    label: "border-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    value: "border-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
  },
  {
    label: "divide-neutral-800",
    value: "divide-neutral-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-800",
  },
  {
    label: "border-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    value: "border-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
  },
  {
    label: "divide-neutral-900",
    value: "divide-neutral-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-900",
  },
  {
    label: "border-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    value: "border-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
  },
  {
    label: "divide-neutral-950",
    value: "divide-neutral-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to neutral-950",
  },
  {
    label: "border-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    value: "border-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
  },
  {
    label: "divide-stone-50",
    value: "divide-stone-50",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-50",
  },
  {
    label:
      "border-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    value:
      "border-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
  },
  {
    label: "divide-stone-100",
    value: "divide-stone-100",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-100",
  },
  {
    label:
      "border-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    value:
      "border-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
  },
  {
    label: "divide-stone-200",
    value: "divide-stone-200",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-200",
  },
  {
    label:
      "border-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    value:
      "border-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
  },
  {
    label: "divide-stone-300",
    value: "divide-stone-300",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-300",
  },
  {
    label:
      "border-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    value:
      "border-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
  },
  {
    label: "divide-stone-400",
    value: "divide-stone-400",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-400",
  },
  {
    label:
      "border-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    value:
      "border-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
  },
  {
    label: "divide-stone-500",
    value: "divide-stone-500",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-500",
  },
  {
    label:
      "border-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    value:
      "border-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
  },
  {
    label: "divide-stone-600",
    value: "divide-stone-600",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-600",
  },
  {
    label:
      "border-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    value:
      "border-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
  },
  {
    label: "divide-stone-700",
    value: "divide-stone-700",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-700",
  },
  {
    label:
      "border-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    value:
      "border-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
  },
  {
    label: "divide-stone-800",
    value: "divide-stone-800",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-800",
  },
  {
    label:
      "border-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    value:
      "border-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
  },
  {
    label: "divide-stone-900",
    value: "divide-stone-900",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-900",
  },
  {
    label:
      "border-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    value:
      "border-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
  },
  {
    label: "divide-stone-950",
    value: "divide-stone-950",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to stone-950",
  },
  {
    label:
      "border-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    value:
      "border-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    styles: "}",
    description:
      "Sets border color to color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
  },
  {
    label: "divide-(<custom-property>)",
    value: "divide-(<custom-property>)",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to (<custom-property>)",
  },
  {
    label: "border-color: var(<custom-property>);",
    value: "border-color: var(<custom-property>);",
    styles: "}",
    description: "Sets border color to color: var(<custom-property>);",
  },
  {
    label: "divide-[<value>]",
    value: "divide-[<value>]",
    styles: "& > :not(:last-child) {",
    description:
      "Sets the border color for dividers between child elements to [<value>]",
  },
  {
    label: "border-color: <value>;",
    value: "border-color: <value>;",
    styles: "}",
    description: "Sets border color to color: <value>;",
  },
];

export const borderStyle = [
  {
    label: "border-solid",
    value: "border-solid",
    styles: "border-style: solid;",
    description: "Sets border to a solid continuous line",
  },
  {
    label: "border-dashed",
    value: "border-dashed",
    styles: "border-style: dashed;",
    description: "Sets border to a series of short dashes",
  },
  {
    label: "border-dotted",
    value: "border-dotted",
    styles: "border-style: dotted;",
    description: "Sets border to a series of dots",
  },
  {
    label: "border-double",
    value: "border-double",
    styles: "border-style: double;",
    description: "Sets border to two parallel solid lines",
  },
  {
    label: "border-hidden",
    value: "border-hidden",
    styles: "border-style: hidden;",
    description:
      "Hides the border (similar to none but with different table handling)",
  },
  {
    label: "border-none",
    value: "border-none",
    styles: "border-style: none;",
    description: "Removes the border completely",
  },
  {
    label: "divide-solid",
    value: "divide-solid",
    styles: "& > :not(:last-child) {\n  border-style: solid;\n}",
    description:
      "Sets solid border style between child elements (excluding the last child)",
  },
  {
    label: "divide-dashed",
    value: "divide-dashed",
    styles: "& > :not(:last-child) {\n  border-style: dashed;\n}",
    description:
      "Sets dashed border style between child elements (excluding the last child)",
  },
  {
    label: "divide-dotted",
    value: "divide-dotted",
    styles: "& > :not(:last-child) {\n  border-style: dotted;\n}",
    description:
      "Sets dotted border style between child elements (excluding the last child)",
  },
  {
    label: "divide-double",
    value: "divide-double",
    styles: "& > :not(:last-child) {\n  border-style: double;\n}",
    description:
      "Sets double border style between child elements (excluding the last child)",
  },
  {
    label: "divide-hidden",
    value: "divide-hidden",
    styles: "& > :not(:last-child) {\n  border-style: hidden;\n}",
    description:
      "Hides borders between child elements (excluding the last child)",
  },
  {
    label: "divide-none",
    value: "divide-none",
    styles: "& > :not(:last-child) {\n  border-style: none;\n}",
    description:
      "Removes borders between child elements (excluding the last child)",
  },
];

export const outlineWidth = [
  {
    label: "outline",
    value: "outline",
    styles: "outline-width: 1px;",
    description: "Sets outline width to 1px (default outline width)",
  },
  {
    label: "outline-<number>",
    value: "outline-<number>",
    styles: "outline-width: <number>px;",
    description:
      "Sets outline width to a specific pixel value (e.g., outline-2, outline-4)",
  },
  {
    label: "outline-(length:<custom-property>)",
    value: "outline-(length:<custom-property>)",
    styles: "outline-width: var(<custom-property>);",
    description:
      "Uses a CSS custom property (variable) for the outline width, automatically wrapping it in var()",
  },
  {
    label: "outline-[<value>]",
    value: "outline-[<value>]",
    styles: "outline-width: <value>;",
    description:
      "Sets an arbitrary outline width value using Tailwind's square bracket notation for one-off custom values",
  },
];

export const outlineColor = [
  {
    label: "outline-inherit",
    value: "outline-inherit",
    styles: "outline-color: inherit;",
    description: "Inherits outline color from parent element",
  },
  {
    label: "outline-current",
    value: "outline-current",
    styles: "outline-color: currentColor;",
    description: "Sets outline color to the current text color (currentColor)",
  },
  {
    label: "outline-transparent",
    value: "outline-transparent",
    styles: "outline-color: transparent;",
    description: "Sets outline to transparent",
  },
  {
    label: "outline-black",
    value: "outline-black",
    styles: "outline-color: var(--color-black); /* #000 */",
    description: "Sets outline to black (#000)",
  },
  {
    label: "outline-white",
    value: "outline-white",
    styles: "outline-color: var(--color-white); /* #fff */",
    description: "Sets outline to white (#fff)",
  },
  {
    label: "outline-red-50",
    value: "outline-red-50",
    styles:
      "outline-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets outline to Red 50 from Tailwind's color palette",
  },
  {
    label: "outline-red-100",
    value: "outline-red-100",
    styles:
      "outline-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets outline to Red 100 from Tailwind's color palette",
  },
  {
    label: "outline-red-200",
    value: "outline-red-200",
    styles:
      "outline-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets outline to Red 200 from Tailwind's color palette",
  },
  {
    label: "outline-red-300",
    value: "outline-red-300",
    styles:
      "outline-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets outline to Red 300 from Tailwind's color palette",
  },
  {
    label: "outline-red-400",
    value: "outline-red-400",
    styles:
      "outline-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets outline to Red 400 from Tailwind's color palette",
  },
  {
    label: "outline-red-500",
    value: "outline-red-500",
    styles:
      "outline-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets outline to Red 500 from Tailwind's color palette",
  },
  {
    label: "outline-red-600",
    value: "outline-red-600",
    styles:
      "outline-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets outline to Red 600 from Tailwind's color palette",
  },
  {
    label: "outline-red-700",
    value: "outline-red-700",
    styles:
      "outline-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets outline to Red 700 from Tailwind's color palette",
  },
  {
    label: "outline-red-800",
    value: "outline-red-800",
    styles:
      "outline-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets outline to Red 800 from Tailwind's color palette",
  },
  {
    label: "outline-red-900",
    value: "outline-red-900",
    styles:
      "outline-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets outline to Red 900 from Tailwind's color palette",
  },
  {
    label: "outline-red-950",
    value: "outline-red-950",
    styles:
      "outline-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets outline to Red 950 from Tailwind's color palette",
  },
  {
    label: "outline-orange-50",
    value: "outline-orange-50",
    styles:
      "outline-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description: "Sets outline to Orange 50 from Tailwind's color palette",
  },
  {
    label: "outline-orange-100",
    value: "outline-orange-100",
    styles:
      "outline-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets outline to Orange 100 from Tailwind's color palette",
  },
  {
    label: "outline-orange-200",
    value: "outline-orange-200",
    styles:
      "outline-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets outline to Orange 200 from Tailwind's color palette",
  },
  {
    label: "outline-orange-300",
    value: "outline-orange-300",
    styles:
      "outline-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets outline to Orange 300 from Tailwind's color palette",
  },
  {
    label: "outline-orange-400",
    value: "outline-orange-400",
    styles:
      "outline-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets outline to Orange 400 from Tailwind's color palette",
  },
  {
    label: "outline-orange-500",
    value: "outline-orange-500",
    styles:
      "outline-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets outline to Orange 500 from Tailwind's color palette",
  },
  {
    label: "outline-orange-600",
    value: "outline-orange-600",
    styles:
      "outline-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets outline to Orange 600 from Tailwind's color palette",
  },
  {
    label: "outline-orange-700",
    value: "outline-orange-700",
    styles:
      "outline-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets outline to Orange 700 from Tailwind's color palette",
  },
  {
    label: "outline-orange-800",
    value: "outline-orange-800",
    styles:
      "outline-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets outline to Orange 800 from Tailwind's color palette",
  },
  {
    label: "outline-orange-900",
    value: "outline-orange-900",
    styles:
      "outline-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets outline to Orange 900 from Tailwind's color palette",
  },
  {
    label: "outline-orange-950",
    value: "outline-orange-950",
    styles:
      "outline-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets outline to Orange 950 from Tailwind's color palette",
  },
  {
    label: "outline-amber-50",
    value: "outline-amber-50",
    styles:
      "outline-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description: "Sets outline to Amber 50 from Tailwind's color palette",
  },
  {
    label: "outline-amber-100",
    value: "outline-amber-100",
    styles:
      "outline-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets outline to Amber 100 from Tailwind's color palette",
  },
  {
    label: "outline-amber-200",
    value: "outline-amber-200",
    styles:
      "outline-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets outline to Amber 200 from Tailwind's color palette",
  },
  {
    label: "outline-amber-300",
    value: "outline-amber-300",
    styles:
      "outline-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets outline to Amber 300 from Tailwind's color palette",
  },
  {
    label: "outline-amber-400",
    value: "outline-amber-400",
    styles:
      "outline-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets outline to Amber 400 from Tailwind's color palette",
  },
  {
    label: "outline-amber-500",
    value: "outline-amber-500",
    styles:
      "outline-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets outline to Amber 500 from Tailwind's color palette",
  },
  {
    label: "outline-amber-600",
    value: "outline-amber-600",
    styles:
      "outline-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets outline to Amber 600 from Tailwind's color palette",
  },
  {
    label: "outline-amber-700",
    value: "outline-amber-700",
    styles:
      "outline-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets outline to Amber 700 from Tailwind's color palette",
  },
  {
    label: "outline-amber-800",
    value: "outline-amber-800",
    styles:
      "outline-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets outline to Amber 800 from Tailwind's color palette",
  },
  {
    label: "outline-amber-900",
    value: "outline-amber-900",
    styles:
      "outline-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets outline to Amber 900 from Tailwind's color palette",
  },
  {
    label: "outline-amber-950",
    value: "outline-amber-950",
    styles:
      "outline-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets outline to Amber 950 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-50",
    value: "outline-yellow-50",
    styles:
      "outline-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description: "Sets outline to Yellow 50 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-100",
    value: "outline-yellow-100",
    styles:
      "outline-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets outline to Yellow 100 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-200",
    value: "outline-yellow-200",
    styles:
      "outline-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets outline to Yellow 200 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-300",
    value: "outline-yellow-300",
    styles:
      "outline-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets outline to Yellow 300 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-400",
    value: "outline-yellow-400",
    styles:
      "outline-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets outline to Yellow 400 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-500",
    value: "outline-yellow-500",
    styles:
      "outline-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets outline to Yellow 500 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-600",
    value: "outline-yellow-600",
    styles:
      "outline-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets outline to Yellow 600 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-700",
    value: "outline-yellow-700",
    styles:
      "outline-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets outline to Yellow 700 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-800",
    value: "outline-yellow-800",
    styles:
      "outline-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets outline to Yellow 800 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-900",
    value: "outline-yellow-900",
    styles:
      "outline-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets outline to Yellow 900 from Tailwind's color palette",
  },
  {
    label: "outline-yellow-950",
    value: "outline-yellow-950",
    styles:
      "outline-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description: "Sets outline to Yellow 950 from Tailwind's color palette",
  },
  {
    label: "outline-lime-50",
    value: "outline-lime-50",
    styles:
      "outline-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets outline to Lime 50 from Tailwind's color palette",
  },
  {
    label: "outline-lime-100",
    value: "outline-lime-100",
    styles:
      "outline-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets outline to Lime 100 from Tailwind's color palette",
  },
  {
    label: "outline-lime-200",
    value: "outline-lime-200",
    styles:
      "outline-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets outline to Lime 200 from Tailwind's color palette",
  },
  {
    label: "outline-lime-300",
    value: "outline-lime-300",
    styles:
      "outline-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets outline to Lime 300 from Tailwind's color palette",
  },
  {
    label: "outline-lime-400",
    value: "outline-lime-400",
    styles:
      "outline-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets outline to Lime 400 from Tailwind's color palette",
  },
  {
    label: "outline-lime-500",
    value: "outline-lime-500",
    styles:
      "outline-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets outline to Lime 500 from Tailwind's color palette",
  },
  {
    label: "outline-lime-600",
    value: "outline-lime-600",
    styles:
      "outline-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets outline to Lime 600 from Tailwind's color palette",
  },
  {
    label: "outline-lime-700",
    value: "outline-lime-700",
    styles:
      "outline-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets outline to Lime 700 from Tailwind's color palette",
  },
  {
    label: "outline-lime-800",
    value: "outline-lime-800",
    styles:
      "outline-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets outline to Lime 800 from Tailwind's color palette",
  },
  {
    label: "outline-lime-900",
    value: "outline-lime-900",
    styles:
      "outline-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets outline to Lime 900 from Tailwind's color palette",
  },
  {
    label: "outline-lime-950",
    value: "outline-lime-950",
    styles:
      "outline-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets outline to Lime 950 from Tailwind's color palette",
  },
  {
    label: "outline-green-50",
    value: "outline-green-50",
    styles:
      "outline-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description: "Sets outline to Green 50 from Tailwind's color palette",
  },
  {
    label: "outline-green-100",
    value: "outline-green-100",
    styles:
      "outline-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets outline to Green 100 from Tailwind's color palette",
  },
  {
    label: "outline-green-200",
    value: "outline-green-200",
    styles:
      "outline-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets outline to Green 200 from Tailwind's color palette",
  },
  {
    label: "outline-green-300",
    value: "outline-green-300",
    styles:
      "outline-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets outline to Green 300 from Tailwind's color palette",
  },
  {
    label: "outline-green-400",
    value: "outline-green-400",
    styles:
      "outline-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets outline to Green 400 from Tailwind's color palette",
  },
  {
    label: "outline-green-500",
    value: "outline-green-500",
    styles:
      "outline-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets outline to Green 500 from Tailwind's color palette",
  },
  {
    label: "outline-green-600",
    value: "outline-green-600",
    styles:
      "outline-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets outline to Green 600 from Tailwind's color palette",
  },
  {
    label: "outline-green-700",
    value: "outline-green-700",
    styles:
      "outline-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets outline to Green 700 from Tailwind's color palette",
  },
  {
    label: "outline-green-800",
    value: "outline-green-800",
    styles:
      "outline-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets outline to Green 800 from Tailwind's color palette",
  },
  {
    label: "outline-green-900",
    value: "outline-green-900",
    styles:
      "outline-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets outline to Green 900 from Tailwind's color palette",
  },
  {
    label: "outline-green-950",
    value: "outline-green-950",
    styles:
      "outline-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description: "Sets outline to Green 950 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-50",
    value: "outline-emerald-50",
    styles:
      "outline-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description: "Sets outline to Emerald 50 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-100",
    value: "outline-emerald-100",
    styles:
      "outline-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets outline to Emerald 100 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-200",
    value: "outline-emerald-200",
    styles:
      "outline-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets outline to Emerald 200 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-300",
    value: "outline-emerald-300",
    styles:
      "outline-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets outline to Emerald 300 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-400",
    value: "outline-emerald-400",
    styles:
      "outline-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets outline to Emerald 400 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-500",
    value: "outline-emerald-500",
    styles:
      "outline-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets outline to Emerald 500 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-600",
    value: "outline-emerald-600",
    styles:
      "outline-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets outline to Emerald 600 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-700",
    value: "outline-emerald-700",
    styles:
      "outline-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets outline to Emerald 700 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-800",
    value: "outline-emerald-800",
    styles:
      "outline-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets outline to Emerald 800 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-900",
    value: "outline-emerald-900",
    styles:
      "outline-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets outline to Emerald 900 from Tailwind's color palette",
  },
  {
    label: "outline-emerald-950",
    value: "outline-emerald-950",
    styles:
      "outline-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description: "Sets outline to Emerald 950 from Tailwind's color palette",
  },
  {
    label: "outline-teal-50",
    value: "outline-teal-50",
    styles:
      "outline-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets outline to Teal 50 from Tailwind's color palette",
  },
  {
    label: "outline-teal-100",
    value: "outline-teal-100",
    styles:
      "outline-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets outline to Teal 100 from Tailwind's color palette",
  },
  {
    label: "outline-teal-200",
    value: "outline-teal-200",
    styles:
      "outline-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets outline to Teal 200 from Tailwind's color palette",
  },
  {
    label: "outline-teal-300",
    value: "outline-teal-300",
    styles:
      "outline-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets outline to Teal 300 from Tailwind's color palette",
  },
  {
    label: "outline-teal-400",
    value: "outline-teal-400",
    styles:
      "outline-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets outline to Teal 400 from Tailwind's color palette",
  },
  {
    label: "outline-teal-500",
    value: "outline-teal-500",
    styles:
      "outline-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets outline to Teal 500 from Tailwind's color palette",
  },
  {
    label: "outline-teal-600",
    value: "outline-teal-600",
    styles:
      "outline-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets outline to Teal 600 from Tailwind's color palette",
  },
  {
    label: "outline-teal-700",
    value: "outline-teal-700",
    styles:
      "outline-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets outline to Teal 700 from Tailwind's color palette",
  },
  {
    label: "outline-teal-800",
    value: "outline-teal-800",
    styles:
      "outline-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets outline to Teal 800 from Tailwind's color palette",
  },
  {
    label: "outline-teal-900",
    value: "outline-teal-900",
    styles:
      "outline-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets outline to Teal 900 from Tailwind's color palette",
  },
  {
    label: "outline-teal-950",
    value: "outline-teal-950",
    styles:
      "outline-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets outline to Teal 950 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-50",
    value: "outline-cyan-50",
    styles:
      "outline-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets outline to Cyan 50 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-100",
    value: "outline-cyan-100",
    styles:
      "outline-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets outline to Cyan 100 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-200",
    value: "outline-cyan-200",
    styles:
      "outline-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets outline to Cyan 200 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-300",
    value: "outline-cyan-300",
    styles:
      "outline-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets outline to Cyan 300 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-400",
    value: "outline-cyan-400",
    styles:
      "outline-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets outline to Cyan 400 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-500",
    value: "outline-cyan-500",
    styles:
      "outline-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets outline to Cyan 500 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-600",
    value: "outline-cyan-600",
    styles:
      "outline-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets outline to Cyan 600 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-700",
    value: "outline-cyan-700",
    styles:
      "outline-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets outline to Cyan 700 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-800",
    value: "outline-cyan-800",
    styles:
      "outline-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets outline to Cyan 800 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-900",
    value: "outline-cyan-900",
    styles:
      "outline-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets outline to Cyan 900 from Tailwind's color palette",
  },
  {
    label: "outline-cyan-950",
    value: "outline-cyan-950",
    styles:
      "outline-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets outline to Cyan 950 from Tailwind's color palette",
  },
  {
    label: "outline-sky-50",
    value: "outline-sky-50",
    styles:
      "outline-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description: "Sets outline to Sky 50 from Tailwind's color palette",
  },
  {
    label: "outline-sky-100",
    value: "outline-sky-100",
    styles:
      "outline-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets outline to Sky 100 from Tailwind's color palette",
  },
  {
    label: "outline-sky-200",
    value: "outline-sky-200",
    styles:
      "outline-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets outline to Sky 200 from Tailwind's color palette",
  },
  {
    label: "outline-sky-300",
    value: "outline-sky-300",
    styles:
      "outline-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets outline to Sky 300 from Tailwind's color palette",
  },
  {
    label: "outline-sky-400",
    value: "outline-sky-400",
    styles:
      "outline-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets outline to Sky 400 from Tailwind's color palette",
  },
  {
    label: "outline-sky-500",
    value: "outline-sky-500",
    styles:
      "outline-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets outline to Sky 500 from Tailwind's color palette",
  },
  {
    label: "outline-sky-600",
    value: "outline-sky-600",
    styles:
      "outline-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets outline to Sky 600 from Tailwind's color palette",
  },
  {
    label: "outline-sky-700",
    value: "outline-sky-700",
    styles:
      "outline-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets outline to Sky 700 from Tailwind's color palette",
  },
  {
    label: "outline-sky-800",
    value: "outline-sky-800",
    styles:
      "outline-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets outline to Sky 800 from Tailwind's color palette",
  },
  {
    label: "outline-sky-900",
    value: "outline-sky-900",
    styles:
      "outline-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets outline to Sky 900 from Tailwind's color palette",
  },
  {
    label: "outline-sky-950",
    value: "outline-sky-950",
    styles:
      "outline-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description: "Sets outline to Sky 950 from Tailwind's color palette",
  },
  {
    label: "outline-blue-50",
    value: "outline-blue-50",
    styles:
      "outline-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets outline to Blue 50 from Tailwind's color palette",
  },
  {
    label: "outline-blue-100",
    value: "outline-blue-100",
    styles:
      "outline-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets outline to Blue 100 from Tailwind's color palette",
  },
  {
    label: "outline-blue-200",
    value: "outline-blue-200",
    styles:
      "outline-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets outline to Blue 200 from Tailwind's color palette",
  },
  {
    label: "outline-blue-300",
    value: "outline-blue-300",
    styles:
      "outline-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets outline to Blue 300 from Tailwind's color palette",
  },
  {
    label: "outline-blue-400",
    value: "outline-blue-400",
    styles:
      "outline-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets outline to Blue 400 from Tailwind's color palette",
  },
  {
    label: "outline-blue-500",
    value: "outline-blue-500",
    styles:
      "outline-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets outline to Blue 500 from Tailwind's color palette",
  },
  {
    label: "outline-blue-600",
    value: "outline-blue-600",
    styles:
      "outline-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets outline to Blue 600 from Tailwind's color palette",
  },
  {
    label: "outline-blue-700",
    value: "outline-blue-700",
    styles:
      "outline-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets outline to Blue 700 from Tailwind's color palette",
  },
  {
    label: "outline-blue-800",
    value: "outline-blue-800",
    styles:
      "outline-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets outline to Blue 800 from Tailwind's color palette",
  },
  {
    label: "outline-blue-900",
    value: "outline-blue-900",
    styles:
      "outline-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets outline to Blue 900 from Tailwind's color palette",
  },
  {
    label: "outline-blue-950",
    value: "outline-blue-950",
    styles:
      "outline-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets outline to Blue 950 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-50",
    value: "outline-indigo-50",
    styles:
      "outline-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description: "Sets outline to Indigo 50 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-100",
    value: "outline-indigo-100",
    styles:
      "outline-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets outline to Indigo 100 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-200",
    value: "outline-indigo-200",
    styles:
      "outline-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets outline to Indigo 200 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-300",
    value: "outline-indigo-300",
    styles:
      "outline-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets outline to Indigo 300 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-400",
    value: "outline-indigo-400",
    styles:
      "outline-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets outline to Indigo 400 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-500",
    value: "outline-indigo-500",
    styles:
      "outline-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets outline to Indigo 500 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-600",
    value: "outline-indigo-600",
    styles:
      "outline-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets outline to Indigo 600 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-700",
    value: "outline-indigo-700",
    styles:
      "outline-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets outline to Indigo 700 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-800",
    value: "outline-indigo-800",
    styles:
      "outline-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets outline to Indigo 800 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-900",
    value: "outline-indigo-900",
    styles:
      "outline-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets outline to Indigo 900 from Tailwind's color palette",
  },
  {
    label: "outline-indigo-950",
    value: "outline-indigo-950",
    styles:
      "outline-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description: "Sets outline to Indigo 950 from Tailwind's color palette",
  },
  {
    label: "outline-violet-50",
    value: "outline-violet-50",
    styles:
      "outline-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description: "Sets outline to Violet 50 from Tailwind's color palette",
  },
  {
    label: "outline-violet-100",
    value: "outline-violet-100",
    styles:
      "outline-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets outline to Violet 100 from Tailwind's color palette",
  },
  {
    label: "outline-violet-200",
    value: "outline-violet-200",
    styles:
      "outline-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets outline to Violet 200 from Tailwind's color palette",
  },
  {
    label: "outline-violet-300",
    value: "outline-violet-300",
    styles:
      "outline-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets outline to Violet 300 from Tailwind's color palette",
  },
  {
    label: "outline-violet-400",
    value: "outline-violet-400",
    styles:
      "outline-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets outline to Violet 400 from Tailwind's color palette",
  },
  {
    label: "outline-violet-500",
    value: "outline-violet-500",
    styles:
      "outline-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets outline to Violet 500 from Tailwind's color palette",
  },
  {
    label: "outline-violet-600",
    value: "outline-violet-600",
    styles:
      "outline-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets outline to Violet 600 from Tailwind's color palette",
  },
  {
    label: "outline-violet-700",
    value: "outline-violet-700",
    styles:
      "outline-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets outline to Violet 700 from Tailwind's color palette",
  },
  {
    label: "outline-violet-800",
    value: "outline-violet-800",
    styles:
      "outline-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets outline to Violet 800 from Tailwind's color palette",
  },
  {
    label: "outline-violet-900",
    value: "outline-violet-900",
    styles:
      "outline-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets outline to Violet 900 from Tailwind's color palette",
  },
  {
    label: "outline-violet-950",
    value: "outline-violet-950",
    styles:
      "outline-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description: "Sets outline to Violet 950 from Tailwind's color palette",
  },
  {
    label: "outline-purple-50",
    value: "outline-purple-50",
    styles:
      "outline-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description: "Sets outline to Purple 50 from Tailwind's color palette",
  },
  {
    label: "outline-purple-100",
    value: "outline-purple-100",
    styles:
      "outline-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets outline to Purple 100 from Tailwind's color palette",
  },
  {
    label: "outline-purple-200",
    value: "outline-purple-200",
    styles:
      "outline-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets outline to Purple 200 from Tailwind's color palette",
  },
  {
    label: "outline-purple-300",
    value: "outline-purple-300",
    styles:
      "outline-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets outline to Purple 300 from Tailwind's color palette",
  },
  {
    label: "outline-purple-400",
    value: "outline-purple-400",
    styles:
      "outline-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets outline to Purple 400 from Tailwind's color palette",
  },
  {
    label: "outline-purple-500",
    value: "outline-purple-500",
    styles:
      "outline-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets outline to Purple 500 from Tailwind's color palette",
  },
  {
    label: "outline-purple-600",
    value: "outline-purple-600",
    styles:
      "outline-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets outline to Purple 600 from Tailwind's color palette",
  },
  {
    label: "outline-purple-700",
    value: "outline-purple-700",
    styles:
      "outline-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets outline to Purple 700 from Tailwind's color palette",
  },
  {
    label: "outline-purple-800",
    value: "outline-purple-800",
    styles:
      "outline-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets outline to Purple 800 from Tailwind's color palette",
  },
  {
    label: "outline-purple-900",
    value: "outline-purple-900",
    styles:
      "outline-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets outline to Purple 900 from Tailwind's color palette",
  },
  {
    label: "outline-purple-950",
    value: "outline-purple-950",
    styles:
      "outline-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description: "Sets outline to Purple 950 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-50",
    value: "outline-fuchsia-50",
    styles:
      "outline-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description: "Sets outline to Fuchsia 50 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-100",
    value: "outline-fuchsia-100",
    styles:
      "outline-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets outline to Fuchsia 100 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-200",
    value: "outline-fuchsia-200",
    styles:
      "outline-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets outline to Fuchsia 200 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-300",
    value: "outline-fuchsia-300",
    styles:
      "outline-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets outline to Fuchsia 300 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-400",
    value: "outline-fuchsia-400",
    styles:
      "outline-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets outline to Fuchsia 400 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-500",
    value: "outline-fuchsia-500",
    styles:
      "outline-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets outline to Fuchsia 500 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-600",
    value: "outline-fuchsia-600",
    styles:
      "outline-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets outline to Fuchsia 600 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-700",
    value: "outline-fuchsia-700",
    styles:
      "outline-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets outline to Fuchsia 700 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-800",
    value: "outline-fuchsia-800",
    styles:
      "outline-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets outline to Fuchsia 800 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-900",
    value: "outline-fuchsia-900",
    styles:
      "outline-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets outline to Fuchsia 900 from Tailwind's color palette",
  },
  {
    label: "outline-fuchsia-950",
    value: "outline-fuchsia-950",
    styles:
      "outline-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description: "Sets outline to Fuchsia 950 from Tailwind's color palette",
  },
  {
    label: "outline-pink-50",
    value: "outline-pink-50",
    styles:
      "outline-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets outline to Pink 50 from Tailwind's color palette",
  },
  {
    label: "outline-pink-100",
    value: "outline-pink-100",
    styles:
      "outline-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets outline to Pink 100 from Tailwind's color palette",
  },
  {
    label: "outline-pink-200",
    value: "outline-pink-200",
    styles:
      "outline-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets outline to Pink 200 from Tailwind's color palette",
  },
  {
    label: "outline-pink-300",
    value: "outline-pink-300",
    styles:
      "outline-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets outline to Pink 300 from Tailwind's color palette",
  },
  {
    label: "outline-pink-400",
    value: "outline-pink-400",
    styles:
      "outline-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets outline to Pink 400 from Tailwind's color palette",
  },
  {
    label: "outline-pink-500",
    value: "outline-pink-500",
    styles:
      "outline-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets outline to Pink 500 from Tailwind's color palette",
  },
  {
    label: "outline-pink-600",
    value: "outline-pink-600",
    styles:
      "outline-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets outline to Pink 600 from Tailwind's color palette",
  },
  {
    label: "outline-pink-700",
    value: "outline-pink-700",
    styles:
      "outline-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets outline to Pink 700 from Tailwind's color palette",
  },
  {
    label: "outline-pink-800",
    value: "outline-pink-800",
    styles:
      "outline-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets outline to Pink 800 from Tailwind's color palette",
  },
  {
    label: "outline-pink-900",
    value: "outline-pink-900",
    styles:
      "outline-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets outline to Pink 900 from Tailwind's color palette",
  },
  {
    label: "outline-pink-950",
    value: "outline-pink-950",
    styles:
      "outline-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets outline to Pink 950 from Tailwind's color palette",
  },
  {
    label: "outline-rose-50",
    value: "outline-rose-50",
    styles:
      "outline-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets outline to Rose 50 from Tailwind's color palette",
  },
  {
    label: "outline-rose-100",
    value: "outline-rose-100",
    styles:
      "outline-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets outline to Rose 100 from Tailwind's color palette",
  },
  {
    label: "outline-rose-200",
    value: "outline-rose-200",
    styles:
      "outline-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets outline to Rose 200 from Tailwind's color palette",
  },
  {
    label: "outline-rose-300",
    value: "outline-rose-300",
    styles:
      "outline-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets outline to Rose 300 from Tailwind's color palette",
  },
  {
    label: "outline-rose-400",
    value: "outline-rose-400",
    styles:
      "outline-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets outline to Rose 400 from Tailwind's color palette",
  },
  {
    label: "outline-rose-500",
    value: "outline-rose-500",
    styles:
      "outline-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets outline to Rose 500 from Tailwind's color palette",
  },
  {
    label: "outline-rose-600",
    value: "outline-rose-600",
    styles:
      "outline-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets outline to Rose 600 from Tailwind's color palette",
  },
  {
    label: "outline-rose-700",
    value: "outline-rose-700",
    styles:
      "outline-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets outline to Rose 700 from Tailwind's color palette",
  },
  {
    label: "outline-rose-800",
    value: "outline-rose-800",
    styles:
      "outline-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets outline to Rose 800 from Tailwind's color palette",
  },
  {
    label: "outline-rose-900",
    value: "outline-rose-900",
    styles:
      "outline-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets outline to Rose 900 from Tailwind's color palette",
  },
  {
    label: "outline-rose-950",
    value: "outline-rose-950",
    styles:
      "outline-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets outline to Rose 950 from Tailwind's color palette",
  },
  {
    label: "outline-slate-50",
    value: "outline-slate-50",
    styles:
      "outline-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description: "Sets outline to Slate 50 from Tailwind's color palette",
  },
  {
    label: "outline-slate-100",
    value: "outline-slate-100",
    styles:
      "outline-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets outline to Slate 100 from Tailwind's color palette",
  },
  {
    label: "outline-slate-200",
    value: "outline-slate-200",
    styles:
      "outline-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets outline to Slate 200 from Tailwind's color palette",
  },
  {
    label: "outline-slate-300",
    value: "outline-slate-300",
    styles:
      "outline-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets outline to Slate 300 from Tailwind's color palette",
  },
  {
    label: "outline-slate-400",
    value: "outline-slate-400",
    styles:
      "outline-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets outline to Slate 400 from Tailwind's color palette",
  },
  {
    label: "outline-slate-500",
    value: "outline-slate-500",
    styles:
      "outline-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets outline to Slate 500 from Tailwind's color palette",
  },
  {
    label: "outline-slate-600",
    value: "outline-slate-600",
    styles:
      "outline-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets outline to Slate 600 from Tailwind's color palette",
  },
  {
    label: "outline-slate-700",
    value: "outline-slate-700",
    styles:
      "outline-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets outline to Slate 700 from Tailwind's color palette",
  },
  {
    label: "outline-slate-800",
    value: "outline-slate-800",
    styles:
      "outline-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets outline to Slate 800 from Tailwind's color palette",
  },
  {
    label: "outline-slate-900",
    value: "outline-slate-900",
    styles:
      "outline-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets outline to Slate 900 from Tailwind's color palette",
  },
  {
    label: "outline-slate-950",
    value: "outline-slate-950",
    styles:
      "outline-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description: "Sets outline to Slate 950 from Tailwind's color palette",
  },
  {
    label: "outline-gray-50",
    value: "outline-gray-50",
    styles:
      "outline-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets outline to Gray 50 from Tailwind's color palette",
  },
  {
    label: "outline-gray-100",
    value: "outline-gray-100",
    styles:
      "outline-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets outline to Gray 100 from Tailwind's color palette",
  },
  {
    label: "outline-gray-200",
    value: "outline-gray-200",
    styles:
      "outline-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets outline to Gray 200 from Tailwind's color palette",
  },
  {
    label: "outline-gray-300",
    value: "outline-gray-300",
    styles:
      "outline-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets outline to Gray 300 from Tailwind's color palette",
  },
  {
    label: "outline-gray-400",
    value: "outline-gray-400",
    styles:
      "outline-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets outline to Gray 400 from Tailwind's color palette",
  },
  {
    label: "outline-gray-500",
    value: "outline-gray-500",
    styles:
      "outline-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets outline to Gray 500 from Tailwind's color palette",
  },
  {
    label: "outline-gray-600",
    value: "outline-gray-600",
    styles:
      "outline-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets outline to Gray 600 from Tailwind's color palette",
  },
  {
    label: "outline-gray-700",
    value: "outline-gray-700",
    styles:
      "outline-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets outline to Gray 700 from Tailwind's color palette",
  },
  {
    label: "outline-gray-800",
    value: "outline-gray-800",
    styles:
      "outline-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets outline to Gray 800 from Tailwind's color palette",
  },
  {
    label: "outline-gray-900",
    value: "outline-gray-900",
    styles:
      "outline-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets outline to Gray 900 from Tailwind's color palette",
  },
  {
    label: "outline-gray-950",
    value: "outline-gray-950",
    styles:
      "outline-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets outline to Gray 950 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-50",
    value: "outline-zinc-50",
    styles: "outline-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets outline to Zinc 50 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-100",
    value: "outline-zinc-100",
    styles:
      "outline-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets outline to Zinc 100 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-200",
    value: "outline-zinc-200",
    styles:
      "outline-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets outline to Zinc 200 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-300",
    value: "outline-zinc-300",
    styles:
      "outline-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets outline to Zinc 300 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-400",
    value: "outline-zinc-400",
    styles:
      "outline-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets outline to Zinc 400 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-500",
    value: "outline-zinc-500",
    styles:
      "outline-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets outline to Zinc 500 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-600",
    value: "outline-zinc-600",
    styles:
      "outline-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets outline to Zinc 600 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-700",
    value: "outline-zinc-700",
    styles:
      "outline-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets outline to Zinc 700 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-800",
    value: "outline-zinc-800",
    styles:
      "outline-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets outline to Zinc 800 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-900",
    value: "outline-zinc-900",
    styles:
      "outline-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets outline to Zinc 900 from Tailwind's color palette",
  },
  {
    label: "outline-zinc-950",
    value: "outline-zinc-950",
    styles:
      "outline-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets outline to Zinc 950 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-50",
    value: "outline-neutral-50",
    styles: "outline-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description: "Sets outline to Neutral 50 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-100",
    value: "outline-neutral-100",
    styles: "outline-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets outline to Neutral 100 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-200",
    value: "outline-neutral-200",
    styles: "outline-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets outline to Neutral 200 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-300",
    value: "outline-neutral-300",
    styles: "outline-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets outline to Neutral 300 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-400",
    value: "outline-neutral-400",
    styles: "outline-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets outline to Neutral 400 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-500",
    value: "outline-neutral-500",
    styles: "outline-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets outline to Neutral 500 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-600",
    value: "outline-neutral-600",
    styles: "outline-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets outline to Neutral 600 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-700",
    value: "outline-neutral-700",
    styles: "outline-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets outline to Neutral 700 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-800",
    value: "outline-neutral-800",
    styles: "outline-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets outline to Neutral 800 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-900",
    value: "outline-neutral-900",
    styles: "outline-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets outline to Neutral 900 from Tailwind's color palette",
  },
  {
    label: "outline-neutral-950",
    value: "outline-neutral-950",
    styles: "outline-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description: "Sets outline to Neutral 950 from Tailwind's color palette",
  },
  {
    label: "outline-stone-50",
    value: "outline-stone-50",
    styles:
      "outline-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description: "Sets outline to Stone 50 from Tailwind's color palette",
  },
  {
    label: "outline-stone-100",
    value: "outline-stone-100",
    styles:
      "outline-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets outline to Stone 100 from Tailwind's color palette",
  },
  {
    label: "outline-stone-200",
    value: "outline-stone-200",
    styles:
      "outline-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets outline to Stone 200 from Tailwind's color palette",
  },
  {
    label: "outline-stone-300",
    value: "outline-stone-300",
    styles:
      "outline-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets outline to Stone 300 from Tailwind's color palette",
  },
  {
    label: "outline-stone-400",
    value: "outline-stone-400",
    styles:
      "outline-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets outline to Stone 400 from Tailwind's color palette",
  },
  {
    label: "outline-stone-500",
    value: "outline-stone-500",
    styles:
      "outline-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets outline to Stone 500 from Tailwind's color palette",
  },
  {
    label: "outline-stone-600",
    value: "outline-stone-600",
    styles:
      "outline-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets outline to Stone 600 from Tailwind's color palette",
  },
  {
    label: "outline-stone-700",
    value: "outline-stone-700",
    styles:
      "outline-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets outline to Stone 700 from Tailwind's color palette",
  },
  {
    label: "outline-stone-800",
    value: "outline-stone-800",
    styles:
      "outline-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets outline to Stone 800 from Tailwind's color palette",
  },
  {
    label: "outline-stone-900",
    value: "outline-stone-900",
    styles:
      "outline-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets outline to Stone 900 from Tailwind's color palette",
  },
  {
    label: "outline-stone-950",
    value: "outline-stone-950",
    styles:
      "outline-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description: "Sets outline to Stone 950 from Tailwind's color palette",
  },
  {
    label: "outline-(<custom-property>)",
    value: "outline-(<custom-property>)",
    styles: "outline-color: var(<custom-property>);",
    description: "Uses a CSS custom property (variable) for the outline color",
  },
  {
    label: "outline-[<value>]",
    value: "outline-[<value>]",
    styles: "outline-color: <value>;",
    description:
      "Sets an arbitrary outline color value using Tailwind's square bracket notation",
  },
];

export const outlineStyle = [
  {
    label: "outline-solid",
    value: "outline-solid",
    styles: "outline-style: solid;",
    description: "Sets outline to a solid continuous line",
  },
  {
    label: "outline-dashed",
    value: "outline-dashed",
    styles: "outline-style: dashed;",
    description: "Sets outline to a series of short dashes",
  },
  {
    label: "outline-dotted",
    value: "outline-dotted",
    styles: "outline-style: dotted;",
    description: "Sets outline to a series of dots",
  },
  {
    label: "outline-double",
    value: "outline-double",
    styles: "outline-style: double;",
    description: "Sets outline to two parallel solid lines",
  },
  {
    label: "outline-none",
    value: "outline-none",
    styles: "outline-style: none;",
    description: "Removes the outline completely",
  },
  {
    label: "outline-hidden",
    value: "outline-hidden",
    styles: "outline: 2px solid transparent;\noutline-offset: 2px;",
    description:
      "Creates an invisible outline with offset, useful for accessibility focus states",
  },
];

export const outlineOffset = [
  {
    label: "outline-offset-<number>",
    value: "outline-offset-<number>",
    styles: "outline-offset: <number>px;",
    description:
      "Sets outline offset to a specific positive pixel value (e.g., outline-offset-2, outline-offset-4)",
  },
  {
    label: "-outline-offset-<number>",
    value: "-outline-offset-<number>",
    styles: "outline-offset: calc(<number>px * -1);",
    description:
      "Sets outline offset to a specific negative pixel value, moving the outline inward (e.g., -outline-offset-2)",
  },
  {
    label: "outline-offset-(<custom-property>)",
    value: "outline-offset-(<custom-property>)",
    styles: "outline-offset: var(<custom-property>);",
    description:
      "Uses a CSS custom property (variable) for the outline offset, automatically wrapping it in var()",
  },
  {
    label: "outline-offset-[<value>]",
    value: "outline-offset-[<value>]",
    styles: "outline-offset: <value>;",
    description:
      "Sets an arbitrary outline offset value using Tailwind's square bracket notation for one-off custom values",
  },
];

export const boxShadow = [
  {
    label: "shadow-2xs",
    value: "shadow-2xs",
    styles: "box-shadow: var(--shadow-2xs); /* 0 1px rgb(0 0 0 / 0.05) */",
    description: "Applies a 2x extra small box shadow with minimal depth",
  },
  {
    label: "shadow-xs",
    value: "shadow-xs",
    styles: "box-shadow: var(--shadow-xs); /* 0 1px 2px 0 rgb(0 0 0 / 0.05) */",
    description: "Applies an extra small box shadow with subtle depth",
  },
  {
    label: "shadow-sm",
    value: "shadow-sm",
    styles:
      "box-shadow: var(--shadow-sm); /* 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) */",
    description: "Applies a small box shadow with gentle depth",
  },
  {
    label: "shadow-md",
    value: "shadow-md",
    styles:
      "box-shadow: var(--shadow-md); /* 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) */",
    description: "Applies a medium box shadow with moderate depth",
  },
  {
    label: "shadow-lg",
    value: "shadow-lg",
    styles:
      "box-shadow: var(--shadow-lg); /* 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) */",
    description: "Applies a large box shadow with noticeable depth",
  },
  {
    label: "shadow-xl",
    value: "shadow-xl",
    styles:
      "box-shadow: var(--shadow-xl); /* 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) */",
    description: "Applies an extra large box shadow with significant depth",
  },
  {
    label: "shadow-2xl",
    value: "shadow-2xl",
    styles:
      "box-shadow: var(--shadow-2xl); /* 0 25px 50px -12px rgb(0 0 0 / 0.25) */",
    description: "Applies a 2x extra large box shadow with dramatic depth",
  },
  {
    label: "shadow-none",
    value: "shadow-none",
    styles: "box-shadow: 0 0 #0000;",
    description: "Removes all box shadows from an element",
  },
  {
    label: "shadow-(<custom-property>)",
    value: "shadow-(<custom-property>)",
    styles: "box-shadow: var(<custom-property>);",
    description: "Applies a box shadow using a custom CSS property",
  },
  {
    label: "shadow-(color:<custom-property>)",
    value: "shadow-(color:<custom-property>)",
    styles: "--tw-shadow-color: var(<custom-property>);",
    description: "Sets the shadow color using a custom CSS property",
  },
  {
    label: "shadow-[<value>]",
    value: "shadow-[<value>]",
    styles: "box-shadow: <value>;",
    description:
      "Applies an arbitrary box shadow value using Tailwind's bracket notation",
  },
  {
    label: "shadow-inherit",
    value: "shadow-inherit",
    styles: "--tw-shadow-color: inherit;",
    description: "Inherits the shadow color from the parent element",
  },
  {
    label: "shadow-current",
    value: "shadow-current",
    styles: "--tw-shadow-color: currentColor;",
    description: "Sets the shadow color to the current text color",
  },
  {
    label: "shadow-transparent",
    value: "shadow-transparent",
    styles: "--tw-shadow-color: transparent;",
    description:
      "Sets the shadow color to transparent, effectively hiding the shadow",
  },
  {
    label: "shadow-black",
    value: "shadow-black",
    styles: "--tw-shadow-color: var(--color-black); /* #000 */",
    description: "Sets the shadow color to black",
  },
  {
    label: "shadow-white",
    value: "shadow-white",
    styles: "--tw-shadow-color: var(--color-white); /* #fff */",
    description: "Sets the shadow color to white",
  },
  {
    label: "shadow-red-50",
    value: "shadow-red-50",
    styles:
      "--tw-shadow-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description: "Sets the shadow color to red-50, the lightest shade of red",
  },
  {
    label: "shadow-red-100",
    value: "shadow-red-100",
    styles:
      "--tw-shadow-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets the shadow color to red-100",
  },
  {
    label: "shadow-red-200",
    value: "shadow-red-200",
    styles:
      "--tw-shadow-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets the shadow color to red-200",
  },
  {
    label: "shadow-red-300",
    value: "shadow-red-300",
    styles:
      "--tw-shadow-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets the shadow color to red-300",
  },
  {
    label: "shadow-red-400",
    value: "shadow-red-400",
    styles:
      "--tw-shadow-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets the shadow color to red-400",
  },
  {
    label: "shadow-red-500",
    value: "shadow-red-500",
    styles:
      "--tw-shadow-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets the shadow color to red-500, the base red shade",
  },
  {
    label: "shadow-red-600",
    value: "shadow-red-600",
    styles:
      "--tw-shadow-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets the shadow color to red-600",
  },
  {
    label: "shadow-red-700",
    value: "shadow-red-700",
    styles:
      "--tw-shadow-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets the shadow color to red-700",
  },
  {
    label: "shadow-red-800",
    value: "shadow-red-800",
    styles:
      "--tw-shadow-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets the shadow color to red-800",
  },
  {
    label: "shadow-red-900",
    value: "shadow-red-900",
    styles:
      "--tw-shadow-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets the shadow color to red-900",
  },
  {
    label: "shadow-red-950",
    value: "shadow-red-950",
    styles:
      "--tw-shadow-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets the shadow color to red-950, the darkest shade of red",
  },
  {
    label: "shadow-orange-50",
    value: "shadow-orange-50",
    styles:
      "--tw-shadow-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description:
      "Sets the shadow color to orange-50, the lightest shade of orange",
  },
  {
    label: "shadow-orange-100",
    value: "shadow-orange-100",
    styles:
      "--tw-shadow-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets the shadow color to orange-100",
  },
  {
    label: "shadow-orange-200",
    value: "shadow-orange-200",
    styles:
      "--tw-shadow-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets the shadow color to orange-200",
  },
  {
    label: "shadow-orange-300",
    value: "shadow-orange-300",
    styles:
      "--tw-shadow-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets the shadow color to orange-300",
  },
  {
    label: "shadow-orange-400",
    value: "shadow-orange-400",
    styles:
      "--tw-shadow-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets the shadow color to orange-400",
  },
  {
    label: "shadow-orange-500",
    value: "shadow-orange-500",
    styles:
      "--tw-shadow-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets the shadow color to orange-500, the base orange shade",
  },
  {
    label: "shadow-orange-600",
    value: "shadow-orange-600",
    styles:
      "--tw-shadow-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets the shadow color to orange-600",
  },
  {
    label: "shadow-orange-700",
    value: "shadow-orange-700",
    styles:
      "--tw-shadow-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets the shadow color to orange-700",
  },
  {
    label: "shadow-orange-800",
    value: "shadow-orange-800",
    styles:
      "--tw-shadow-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets the shadow color to orange-800",
  },
  {
    label: "shadow-orange-900",
    value: "shadow-orange-900",
    styles:
      "--tw-shadow-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets the shadow color to orange-900",
  },
  {
    label: "shadow-orange-950",
    value: "shadow-orange-950",
    styles:
      "--tw-shadow-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description:
      "Sets the shadow color to orange-950, the darkest shade of orange",
  },
  {
    label: "shadow-amber-50",
    value: "shadow-amber-50",
    styles:
      "--tw-shadow-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description:
      "Sets the shadow color to amber-50, the lightest shade of amber",
  },
  {
    label: "shadow-amber-100",
    value: "shadow-amber-100",
    styles:
      "--tw-shadow-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets the shadow color to amber-100",
  },
  {
    label: "shadow-amber-200",
    value: "shadow-amber-200",
    styles:
      "--tw-shadow-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets the shadow color to amber-200",
  },
  {
    label: "shadow-amber-300",
    value: "shadow-amber-300",
    styles:
      "--tw-shadow-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets the shadow color to amber-300",
  },
  {
    label: "shadow-amber-400",
    value: "shadow-amber-400",
    styles:
      "--tw-shadow-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets the shadow color to amber-400",
  },
  {
    label: "shadow-amber-500",
    value: "shadow-amber-500",
    styles:
      "--tw-shadow-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets the shadow color to amber-500, the base amber shade",
  },
  {
    label: "shadow-amber-600",
    value: "shadow-amber-600",
    styles:
      "--tw-shadow-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets the shadow color to amber-600",
  },
  {
    label: "shadow-amber-700",
    value: "shadow-amber-700",
    styles:
      "--tw-shadow-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets the shadow color to amber-700",
  },
  {
    label: "shadow-amber-800",
    value: "shadow-amber-800",
    styles:
      "--tw-shadow-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets the shadow color to amber-800",
  },
  {
    label: "shadow-amber-900",
    value: "shadow-amber-900",
    styles:
      "--tw-shadow-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets the shadow color to amber-900",
  },
  {
    label: "shadow-amber-950",
    value: "shadow-amber-950",
    styles:
      "--tw-shadow-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description:
      "Sets the shadow color to amber-950, the darkest shade of amber",
  },
  {
    label: "shadow-yellow-50",
    value: "shadow-yellow-50",
    styles:
      "--tw-shadow-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
    description:
      "Sets the shadow color to yellow-50, the lightest shade of yellow",
  },
  {
    label: "shadow-yellow-100",
    value: "shadow-yellow-100",
    styles:
      "--tw-shadow-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
    description: "Sets the shadow color to yellow-100",
  },
  {
    label: "shadow-yellow-200",
    value: "shadow-yellow-200",
    styles:
      "--tw-shadow-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
    description: "Sets the shadow color to yellow-200",
  },
  {
    label: "shadow-yellow-300",
    value: "shadow-yellow-300",
    styles:
      "--tw-shadow-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
    description: "Sets the shadow color to yellow-300",
  },
  {
    label: "shadow-yellow-400",
    value: "shadow-yellow-400",
    styles:
      "--tw-shadow-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
    description: "Sets the shadow color to yellow-400",
  },
  {
    label: "shadow-yellow-500",
    value: "shadow-yellow-500",
    styles:
      "--tw-shadow-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
    description: "Sets the shadow color to yellow-500, the base yellow shade",
  },
  {
    label: "shadow-yellow-600",
    value: "shadow-yellow-600",
    styles:
      "--tw-shadow-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
    description: "Sets the shadow color to yellow-600",
  },
  {
    label: "shadow-yellow-700",
    value: "shadow-yellow-700",
    styles:
      "--tw-shadow-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
    description: "Sets the shadow color to yellow-700",
  },
  {
    label: "shadow-yellow-800",
    value: "shadow-yellow-800",
    styles:
      "--tw-shadow-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
    description: "Sets the shadow color to yellow-800",
  },
  {
    label: "shadow-yellow-900",
    value: "shadow-yellow-900",
    styles:
      "--tw-shadow-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
    description: "Sets the shadow color to yellow-900",
  },
  {
    label: "shadow-yellow-950",
    value: "shadow-yellow-950",
    styles:
      "--tw-shadow-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
    description:
      "Sets the shadow color to yellow-950, the darkest shade of yellow",
  },
  {
    label: "shadow-lime-50",
    value: "shadow-lime-50",
    styles:
      "--tw-shadow-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
    description: "Sets the shadow color to lime-50, the lightest shade of lime",
  },
  {
    label: "shadow-lime-100",
    value: "shadow-lime-100",
    styles:
      "--tw-shadow-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
    description: "Sets the shadow color to lime-100",
  },
  {
    label: "shadow-lime-200",
    value: "shadow-lime-200",
    styles:
      "--tw-shadow-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
    description: "Sets the shadow color to lime-200",
  },
  {
    label: "shadow-lime-300",
    value: "shadow-lime-300",
    styles:
      "--tw-shadow-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
    description: "Sets the shadow color to lime-300",
  },
  {
    label: "shadow-lime-400",
    value: "shadow-lime-400",
    styles:
      "--tw-shadow-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
    description: "Sets the shadow color to lime-400",
  },
  {
    label: "shadow-lime-500",
    value: "shadow-lime-500",
    styles:
      "--tw-shadow-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
    description: "Sets the shadow color to lime-500, the base lime shade",
  },
  {
    label: "shadow-lime-600",
    value: "shadow-lime-600",
    styles:
      "--tw-shadow-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
    description: "Sets the shadow color to lime-600",
  },
  {
    label: "shadow-lime-700",
    value: "shadow-lime-700",
    styles:
      "--tw-shadow-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
    description: "Sets the shadow color to lime-700",
  },
  {
    label: "shadow-lime-800",
    value: "shadow-lime-800",
    styles:
      "--tw-shadow-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
    description: "Sets the shadow color to lime-800",
  },
  {
    label: "shadow-lime-900",
    value: "shadow-lime-900",
    styles:
      "--tw-shadow-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
    description: "Sets the shadow color to lime-900",
  },
  {
    label: "shadow-lime-950",
    value: "shadow-lime-950",
    styles:
      "--tw-shadow-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
    description: "Sets the shadow color to lime-950, the darkest shade of lime",
  },
  {
    label: "shadow-green-50",
    value: "shadow-green-50",
    styles:
      "--tw-shadow-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
    description:
      "Sets the shadow color to green-50, the lightest shade of green",
  },
  {
    label: "shadow-green-100",
    value: "shadow-green-100",
    styles:
      "--tw-shadow-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
    description: "Sets the shadow color to green-100",
  },
  {
    label: "shadow-green-200",
    value: "shadow-green-200",
    styles:
      "--tw-shadow-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
    description: "Sets the shadow color to green-200",
  },
  {
    label: "shadow-green-300",
    value: "shadow-green-300",
    styles:
      "--tw-shadow-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
    description: "Sets the shadow color to green-300",
  },
  {
    label: "shadow-green-400",
    value: "shadow-green-400",
    styles:
      "--tw-shadow-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
    description: "Sets the shadow color to green-400",
  },
  {
    label: "shadow-green-500",
    value: "shadow-green-500",
    styles:
      "--tw-shadow-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
    description: "Sets the shadow color to green-500, the base green shade",
  },
  {
    label: "shadow-green-600",
    value: "shadow-green-600",
    styles:
      "--tw-shadow-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
    description: "Sets the shadow color to green-600",
  },
  {
    label: "shadow-green-700",
    value: "shadow-green-700",
    styles:
      "--tw-shadow-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
    description: "Sets the shadow color to green-700",
  },
  {
    label: "shadow-green-800",
    value: "shadow-green-800",
    styles:
      "--tw-shadow-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
    description: "Sets the shadow color to green-800",
  },
  {
    label: "shadow-green-900",
    value: "shadow-green-900",
    styles:
      "--tw-shadow-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
    description: "Sets the shadow color to green-900",
  },
  {
    label: "shadow-green-950",
    value: "shadow-green-950",
    styles:
      "--tw-shadow-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
    description:
      "Sets the shadow color to green-950, the darkest shade of green",
  },
  {
    label: "shadow-emerald-50",
    value: "shadow-emerald-50",
    styles:
      "--tw-shadow-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
    description:
      "Sets the shadow color to emerald-50, the lightest shade of emerald",
  },
  {
    label: "shadow-emerald-100",
    value: "shadow-emerald-100",
    styles:
      "--tw-shadow-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
    description: "Sets the shadow color to emerald-100",
  },
  {
    label: "shadow-emerald-200",
    value: "shadow-emerald-200",
    styles:
      "--tw-shadow-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
    description: "Sets the shadow color to emerald-200",
  },
  {
    label: "shadow-emerald-300",
    value: "shadow-emerald-300",
    styles:
      "--tw-shadow-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
    description: "Sets the shadow color to emerald-300",
  },
  {
    label: "shadow-emerald-400",
    value: "shadow-emerald-400",
    styles:
      "--tw-shadow-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
    description: "Sets the shadow color to emerald-400",
  },
  {
    label: "shadow-emerald-500",
    value: "shadow-emerald-500",
    styles:
      "--tw-shadow-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
    description: "Sets the shadow color to emerald-500, the base emerald shade",
  },
  {
    label: "shadow-emerald-600",
    value: "shadow-emerald-600",
    styles:
      "--tw-shadow-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
    description: "Sets the shadow color to emerald-600",
  },
  {
    label: "shadow-emerald-700",
    value: "shadow-emerald-700",
    styles:
      "--tw-shadow-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
    description: "Sets the shadow color to emerald-700",
  },
  {
    label: "shadow-emerald-800",
    value: "shadow-emerald-800",
    styles:
      "--tw-shadow-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
    description: "Sets the shadow color to emerald-800",
  },
  {
    label: "shadow-emerald-900",
    value: "shadow-emerald-900",
    styles:
      "--tw-shadow-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
    description: "Sets the shadow color to emerald-900",
  },
  {
    label: "shadow-emerald-950",
    value: "shadow-emerald-950",
    styles:
      "--tw-shadow-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
    description:
      "Sets the shadow color to emerald-950, the darkest shade of emerald",
  },
  {
    label: "shadow-teal-50",
    value: "shadow-teal-50",
    styles:
      "--tw-shadow-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
    description: "Sets the shadow color to teal-50, the lightest shade of teal",
  },
  {
    label: "shadow-teal-100",
    value: "shadow-teal-100",
    styles:
      "--tw-shadow-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
    description: "Sets the shadow color to teal-100",
  },
  {
    label: "shadow-teal-200",
    value: "shadow-teal-200",
    styles:
      "--tw-shadow-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
    description: "Sets the shadow color to teal-200",
  },
  {
    label: "shadow-teal-300",
    value: "shadow-teal-300",
    styles:
      "--tw-shadow-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
    description: "Sets the shadow color to teal-300",
  },
  {
    label: "shadow-teal-400",
    value: "shadow-teal-400",
    styles:
      "--tw-shadow-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
    description: "Sets the shadow color to teal-400",
  },
  {
    label: "shadow-teal-500",
    value: "shadow-teal-500",
    styles:
      "--tw-shadow-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
    description: "Sets the shadow color to teal-500, the base teal shade",
  },
  {
    label: "shadow-teal-600",
    value: "shadow-teal-600",
    styles:
      "--tw-shadow-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
    description: "Sets the shadow color to teal-600",
  },
  {
    label: "shadow-teal-700",
    value: "shadow-teal-700",
    styles:
      "--tw-shadow-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
    description: "Sets the shadow color to teal-700",
  },
  {
    label: "shadow-teal-800",
    value: "shadow-teal-800",
    styles:
      "--tw-shadow-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
    description: "Sets the shadow color to teal-800",
  },
  {
    label: "shadow-teal-900",
    value: "shadow-teal-900",
    styles:
      "--tw-shadow-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
    description: "Sets the shadow color to teal-900",
  },
  {
    label: "shadow-teal-950",
    value: "shadow-teal-950",
    styles:
      "--tw-shadow-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
    description: "Sets the shadow color to teal-950, the darkest shade of teal",
  },
  {
    label: "shadow-cyan-50",
    value: "shadow-cyan-50",
    styles:
      "--tw-shadow-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
    description: "Sets the shadow color to cyan-50, the lightest shade of cyan",
  },
  {
    label: "shadow-cyan-100",
    value: "shadow-cyan-100",
    styles:
      "--tw-shadow-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
    description: "Sets the shadow color to cyan-100",
  },
  {
    label: "shadow-cyan-200",
    value: "shadow-cyan-200",
    styles:
      "--tw-shadow-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
    description: "Sets the shadow color to cyan-200",
  },
  {
    label: "shadow-cyan-300",
    value: "shadow-cyan-300",
    styles:
      "--tw-shadow-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
    description: "Sets the shadow color to cyan-300",
  },
  {
    label: "shadow-cyan-400",
    value: "shadow-cyan-400",
    styles:
      "--tw-shadow-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
    description: "Sets the shadow color to cyan-400",
  },
  {
    label: "shadow-cyan-500",
    value: "shadow-cyan-500",
    styles:
      "--tw-shadow-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
    description: "Sets the shadow color to cyan-500, the base cyan shade",
  },
  {
    label: "shadow-cyan-600",
    value: "shadow-cyan-600",
    styles:
      "--tw-shadow-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
    description: "Sets the shadow color to cyan-600",
  },
  {
    label: "shadow-cyan-700",
    value: "shadow-cyan-700",
    styles:
      "--tw-shadow-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
    description: "Sets the shadow color to cyan-700",
  },
  {
    label: "shadow-cyan-800",
    value: "shadow-cyan-800",
    styles:
      "--tw-shadow-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
    description: "Sets the shadow color to cyan-800",
  },
  {
    label: "shadow-cyan-900",
    value: "shadow-cyan-900",
    styles:
      "--tw-shadow-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
    description: "Sets the shadow color to cyan-900",
  },
  {
    label: "shadow-cyan-950",
    value: "shadow-cyan-950",
    styles:
      "--tw-shadow-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
    description: "Sets the shadow color to cyan-950, the darkest shade of cyan",
  },
  {
    label: "shadow-sky-50",
    value: "shadow-sky-50",
    styles:
      "--tw-shadow-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
    description:
      "Sets the shadow color to sky-50, the lightest shade of sky blue",
  },
  {
    label: "shadow-sky-100",
    value: "shadow-sky-100",
    styles:
      "--tw-shadow-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
    description: "Sets the shadow color to sky-100",
  },
  {
    label: "shadow-sky-200",
    value: "shadow-sky-200",
    styles:
      "--tw-shadow-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
    description: "Sets the shadow color to sky-200",
  },
  {
    label: "shadow-sky-300",
    value: "shadow-sky-300",
    styles:
      "--tw-shadow-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
    description: "Sets the shadow color to sky-300",
  },
  {
    label: "shadow-sky-400",
    value: "shadow-sky-400",
    styles:
      "--tw-shadow-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
    description: "Sets the shadow color to sky-400",
  },
  {
    label: "shadow-sky-500",
    value: "shadow-sky-500",
    styles:
      "--tw-shadow-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
    description: "Sets the shadow color to sky-500, the base sky blue shade",
  },
  {
    label: "shadow-sky-600",
    value: "shadow-sky-600",
    styles:
      "--tw-shadow-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
    description: "Sets the shadow color to sky-600",
  },
  {
    label: "shadow-sky-700",
    value: "shadow-sky-700",
    styles:
      "--tw-shadow-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
    description: "Sets the shadow color to sky-700",
  },
  {
    label: "shadow-sky-800",
    value: "shadow-sky-800",
    styles:
      "--tw-shadow-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
    description: "Sets the shadow color to sky-800",
  },
  {
    label: "shadow-sky-900",
    value: "shadow-sky-900",
    styles:
      "--tw-shadow-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
    description: "Sets the shadow color to sky-900",
  },
  {
    label: "shadow-sky-950",
    value: "shadow-sky-950",
    styles:
      "--tw-shadow-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
    description:
      "Sets the shadow color to sky-950, the darkest shade of sky blue",
  },
  {
    label: "shadow-blue-50",
    value: "shadow-blue-50",
    styles:
      "--tw-shadow-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
    description: "Sets the shadow color to blue-50, the lightest shade of blue",
  },
  {
    label: "shadow-blue-100",
    value: "shadow-blue-100",
    styles:
      "--tw-shadow-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
    description: "Sets the shadow color to blue-100",
  },
  {
    label: "shadow-blue-200",
    value: "shadow-blue-200",
    styles:
      "--tw-shadow-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
    description: "Sets the shadow color to blue-200",
  },
  {
    label: "shadow-blue-300",
    value: "shadow-blue-300",
    styles:
      "--tw-shadow-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
    description: "Sets the shadow color to blue-300",
  },
  {
    label: "shadow-blue-400",
    value: "shadow-blue-400",
    styles:
      "--tw-shadow-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
    description: "Sets the shadow color to blue-400",
  },
  {
    label: "shadow-blue-500",
    value: "shadow-blue-500",
    styles:
      "--tw-shadow-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
    description: "Sets the shadow color to blue-500, the base blue shade",
  },
  {
    label: "shadow-blue-600",
    value: "shadow-blue-600",
    styles:
      "--tw-shadow-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
    description: "Sets the shadow color to blue-600",
  },
  {
    label: "shadow-blue-700",
    value: "shadow-blue-700",
    styles:
      "--tw-shadow-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
    description: "Sets the shadow color to blue-700",
  },
  {
    label: "shadow-blue-800",
    value: "shadow-blue-800",
    styles:
      "--tw-shadow-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
    description: "Sets the shadow color to blue-800",
  },
  {
    label: "shadow-blue-900",
    value: "shadow-blue-900",
    styles:
      "--tw-shadow-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
    description: "Sets the shadow color to blue-900",
  },
  {
    label: "shadow-blue-950",
    value: "shadow-blue-950",
    styles:
      "--tw-shadow-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
    description: "Sets the shadow color to blue-950, the darkest shade of blue",
  },
  {
    label: "shadow-indigo-50",
    value: "shadow-indigo-50",
    styles:
      "--tw-shadow-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
    description:
      "Sets the shadow color to indigo-50, the lightest shade of indigo",
  },
  {
    label: "shadow-indigo-100",
    value: "shadow-indigo-100",
    styles:
      "--tw-shadow-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
    description: "Sets the shadow color to indigo-100",
  },
  {
    label: "shadow-indigo-200",
    value: "shadow-indigo-200",
    styles:
      "--tw-shadow-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
    description: "Sets the shadow color to indigo-200",
  },
  {
    label: "shadow-indigo-300",
    value: "shadow-indigo-300",
    styles:
      "--tw-shadow-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
    description: "Sets the shadow color to indigo-300",
  },
  {
    label: "shadow-indigo-400",
    value: "shadow-indigo-400",
    styles:
      "--tw-shadow-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
    description: "Sets the shadow color to indigo-400",
  },
  {
    label: "shadow-indigo-500",
    value: "shadow-indigo-500",
    styles:
      "--tw-shadow-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
    description: "Sets the shadow color to indigo-500, the base indigo shade",
  },
  {
    label: "shadow-indigo-600",
    value: "shadow-indigo-600",
    styles:
      "--tw-shadow-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
    description: "Sets the shadow color to indigo-600",
  },
  {
    label: "shadow-indigo-700",
    value: "shadow-indigo-700",
    styles:
      "--tw-shadow-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
    description: "Sets the shadow color to indigo-700",
  },
  {
    label: "shadow-indigo-800",
    value: "shadow-indigo-800",
    styles:
      "--tw-shadow-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
    description: "Sets the shadow color to indigo-800",
  },
  {
    label: "shadow-indigo-900",
    value: "shadow-indigo-900",
    styles:
      "--tw-shadow-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
    description: "Sets the shadow color to indigo-900",
  },
  {
    label: "shadow-indigo-950",
    value: "shadow-indigo-950",
    styles:
      "--tw-shadow-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
    description:
      "Sets the shadow color to indigo-950, the darkest shade of indigo",
  },
  {
    label: "shadow-violet-50",
    value: "shadow-violet-50",
    styles:
      "--tw-shadow-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
    description:
      "Sets the shadow color to violet-50, the lightest shade of violet",
  },
  {
    label: "shadow-violet-100",
    value: "shadow-violet-100",
    styles:
      "--tw-shadow-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
    description: "Sets the shadow color to violet-100",
  },
  {
    label: "shadow-violet-200",
    value: "shadow-violet-200",
    styles:
      "--tw-shadow-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
    description: "Sets the shadow color to violet-200",
  },
  {
    label: "shadow-violet-300",
    value: "shadow-violet-300",
    styles:
      "--tw-shadow-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
    description: "Sets the shadow color to violet-300",
  },
  {
    label: "shadow-violet-400",
    value: "shadow-violet-400",
    styles:
      "--tw-shadow-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
    description: "Sets the shadow color to violet-400",
  },
  {
    label: "shadow-violet-500",
    value: "shadow-violet-500",
    styles:
      "--tw-shadow-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
    description: "Sets the shadow color to violet-500, the base violet shade",
  },
  {
    label: "shadow-violet-600",
    value: "shadow-violet-600",
    styles:
      "--tw-shadow-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
    description: "Sets the shadow color to violet-600",
  },
  {
    label: "shadow-violet-700",
    value: "shadow-violet-700",
    styles:
      "--tw-shadow-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
    description: "Sets the shadow color to violet-700",
  },
  {
    label: "shadow-violet-800",
    value: "shadow-violet-800",
    styles:
      "--tw-shadow-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
    description: "Sets the shadow color to violet-800",
  },
  {
    label: "shadow-violet-900",
    value: "shadow-violet-900",
    styles:
      "--tw-shadow-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
    description: "Sets the shadow color to violet-900",
  },
  {
    label: "shadow-violet-950",
    value: "shadow-violet-950",
    styles:
      "--tw-shadow-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
    description:
      "Sets the shadow color to violet-950, the darkest shade of violet",
  },
  {
    label: "shadow-purple-50",
    value: "shadow-purple-50",
    styles:
      "--tw-shadow-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
    description:
      "Sets the shadow color to purple-50, the lightest shade of purple",
  },
  {
    label: "shadow-purple-100",
    value: "shadow-purple-100",
    styles:
      "--tw-shadow-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
    description: "Sets the shadow color to purple-100",
  },
  {
    label: "shadow-purple-200",
    value: "shadow-purple-200",
    styles:
      "--tw-shadow-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
    description: "Sets the shadow color to purple-200",
  },
  {
    label: "shadow-purple-300",
    value: "shadow-purple-300",
    styles:
      "--tw-shadow-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
    description: "Sets the shadow color to purple-300",
  },
  {
    label: "shadow-purple-400",
    value: "shadow-purple-400",
    styles:
      "--tw-shadow-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
    description: "Sets the shadow color to purple-400",
  },
  {
    label: "shadow-purple-500",
    value: "shadow-purple-500",
    styles:
      "--tw-shadow-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
    description: "Sets the shadow color to purple-500, the base purple shade",
  },
  {
    label: "shadow-purple-600",
    value: "shadow-purple-600",
    styles:
      "--tw-shadow-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
    description: "Sets the shadow color to purple-600",
  },
  {
    label: "shadow-purple-700",
    value: "shadow-purple-700",
    styles:
      "--tw-shadow-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
    description: "Sets the shadow color to purple-700",
  },
  {
    label: "shadow-purple-800",
    value: "shadow-purple-800",
    styles:
      "--tw-shadow-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
    description: "Sets the shadow color to purple-800",
  },
  {
    label: "shadow-purple-900",
    value: "shadow-purple-900",
    styles:
      "--tw-shadow-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
    description: "Sets the shadow color to purple-900",
  },
  {
    label: "shadow-purple-950",
    value: "shadow-purple-950",
    styles:
      "--tw-shadow-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
    description:
      "Sets the shadow color to purple-950, the darkest shade of purple",
  },
  {
    label: "shadow-fuchsia-50",
    value: "shadow-fuchsia-50",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
    description:
      "Sets the shadow color to fuchsia-50, the lightest shade of fuchsia",
  },
  {
    label: "shadow-fuchsia-100",
    value: "shadow-fuchsia-100",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
    description: "Sets the shadow color to fuchsia-100",
  },
  {
    label: "shadow-fuchsia-200",
    value: "shadow-fuchsia-200",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
    description: "Sets the shadow color to fuchsia-200",
  },
  {
    label: "shadow-fuchsia-300",
    value: "shadow-fuchsia-300",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
    description: "Sets the shadow color to fuchsia-300",
  },
  {
    label: "shadow-fuchsia-400",
    value: "shadow-fuchsia-400",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
    description: "Sets the shadow color to fuchsia-400",
  },
  {
    label: "shadow-fuchsia-500",
    value: "shadow-fuchsia-500",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
    description: "Sets the shadow color to fuchsia-500, the base fuchsia shade",
  },
  {
    label: "shadow-fuchsia-600",
    value: "shadow-fuchsia-600",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
    description: "Sets the shadow color to fuchsia-600",
  },
  {
    label: "shadow-fuchsia-700",
    value: "shadow-fuchsia-700",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
    description: "Sets the shadow color to fuchsia-700",
  },
  {
    label: "shadow-fuchsia-800",
    value: "shadow-fuchsia-800",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
    description: "Sets the shadow color to fuchsia-800",
  },
  {
    label: "shadow-fuchsia-900",
    value: "shadow-fuchsia-900",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
    description: "Sets the shadow color to fuchsia-900",
  },
  {
    label: "shadow-fuchsia-950",
    value: "shadow-fuchsia-950",
    styles:
      "--tw-shadow-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
    description:
      "Sets the shadow color to fuchsia-950, the darkest shade of fuchsia",
  },
  {
    label: "shadow-pink-50",
    value: "shadow-pink-50",
    styles:
      "--tw-shadow-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
    description: "Sets the shadow color to pink-50, the lightest shade of pink",
  },
  {
    label: "shadow-pink-100",
    value: "shadow-pink-100",
    styles:
      "--tw-shadow-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
    description: "Sets the shadow color to pink-100",
  },
  {
    label: "shadow-pink-200",
    value: "shadow-pink-200",
    styles:
      "--tw-shadow-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
    description: "Sets the shadow color to pink-200",
  },
  {
    label: "shadow-pink-300",
    value: "shadow-pink-300",
    styles:
      "--tw-shadow-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
    description: "Sets the shadow color to pink-300",
  },
  {
    label: "shadow-pink-400",
    value: "shadow-pink-400",
    styles:
      "--tw-shadow-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
    description: "Sets the shadow color to pink-400",
  },
  {
    label: "shadow-pink-500",
    value: "shadow-pink-500",
    styles:
      "--tw-shadow-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
    description: "Sets the shadow color to pink-500, the base pink shade",
  },
  {
    label: "shadow-pink-600",
    value: "shadow-pink-600",
    styles:
      "--tw-shadow-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
    description: "Sets the shadow color to pink-600",
  },
  {
    label: "shadow-pink-700",
    value: "shadow-pink-700",
    styles:
      "--tw-shadow-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
    description: "Sets the shadow color to pink-700",
  },
  {
    label: "shadow-pink-800",
    value: "shadow-pink-800",
    styles:
      "--tw-shadow-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
    description: "Sets the shadow color to pink-800",
  },
  {
    label: "shadow-pink-900",
    value: "shadow-pink-900",
    styles:
      "--tw-shadow-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
    description: "Sets the shadow color to pink-900",
  },
  {
    label: "shadow-pink-950",
    value: "shadow-pink-950",
    styles:
      "--tw-shadow-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
    description: "Sets the shadow color to pink-950, the darkest shade of pink",
  },
  {
    label: "shadow-rose-50",
    value: "shadow-rose-50",
    styles:
      "--tw-shadow-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
    description: "Sets the shadow color to rose-50, the lightest shade of rose",
  },
  {
    label: "shadow-rose-100",
    value: "shadow-rose-100",
    styles:
      "--tw-shadow-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
    description: "Sets the shadow color to rose-100",
  },
  {
    label: "shadow-rose-200",
    value: "shadow-rose-200",
    styles:
      "--tw-shadow-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
    description: "Sets the shadow color to rose-200",
  },
  {
    label: "shadow-rose-300",
    value: "shadow-rose-300",
    styles:
      "--tw-shadow-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
    description: "Sets the shadow color to rose-300",
  },
  {
    label: "shadow-rose-400",
    value: "shadow-rose-400",
    styles:
      "--tw-shadow-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
    description: "Sets the shadow color to rose-400",
  },
  {
    label: "shadow-rose-500",
    value: "shadow-rose-500",
    styles:
      "--tw-shadow-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
    description: "Sets the shadow color to rose-500, the base rose shade",
  },
  {
    label: "shadow-rose-600",
    value: "shadow-rose-600",
    styles:
      "--tw-shadow-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
    description: "Sets the shadow color to rose-600",
  },
  {
    label: "shadow-rose-700",
    value: "shadow-rose-700",
    styles:
      "--tw-shadow-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
    description: "Sets the shadow color to rose-700",
  },
  {
    label: "shadow-rose-800",
    value: "shadow-rose-800",
    styles:
      "--tw-shadow-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
    description: "Sets the shadow color to rose-800",
  },
  {
    label: "shadow-rose-900",
    value: "shadow-rose-900",
    styles:
      "--tw-shadow-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
    description: "Sets the shadow color to rose-900",
  },
  {
    label: "shadow-rose-950",
    value: "shadow-rose-950",
    styles:
      "--tw-shadow-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
    description: "Sets the shadow color to rose-950, the darkest shade of rose",
  },
  {
    label: "shadow-slate-50",
    value: "shadow-slate-50",
    styles:
      "--tw-shadow-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
    description:
      "Sets the shadow color to slate-50, the lightest shade of slate",
  },
  {
    label: "shadow-slate-100",
    value: "shadow-slate-100",
    styles:
      "--tw-shadow-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
    description: "Sets the shadow color to slate-100",
  },
  {
    label: "shadow-slate-200",
    value: "shadow-slate-200",
    styles:
      "--tw-shadow-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
    description: "Sets the shadow color to slate-200",
  },
  {
    label: "shadow-slate-300",
    value: "shadow-slate-300",
    styles:
      "--tw-shadow-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
    description: "Sets the shadow color to slate-300",
  },
  {
    label: "shadow-slate-400",
    value: "shadow-slate-400",
    styles:
      "--tw-shadow-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
    description: "Sets the shadow color to slate-400",
  },
  {
    label: "shadow-slate-500",
    value: "shadow-slate-500",
    styles:
      "--tw-shadow-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
    description: "Sets the shadow color to slate-500, the base slate shade",
  },
  {
    label: "shadow-slate-600",
    value: "shadow-slate-600",
    styles:
      "--tw-shadow-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
    description: "Sets the shadow color to slate-600",
  },
  {
    label: "shadow-slate-700",
    value: "shadow-slate-700",
    styles:
      "--tw-shadow-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
    description: "Sets the shadow color to slate-700",
  },
  {
    label: "shadow-slate-800",
    value: "shadow-slate-800",
    styles:
      "--tw-shadow-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
    description: "Sets the shadow color to slate-800",
  },
  {
    label: "shadow-slate-900",
    value: "shadow-slate-900",
    styles:
      "--tw-shadow-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
    description: "Sets the shadow color to slate-900",
  },
  {
    label: "shadow-slate-950",
    value: "shadow-slate-950",
    styles:
      "--tw-shadow-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
    description:
      "Sets the shadow color to slate-950, the darkest shade of slate",
  },
  {
    label: "shadow-gray-50",
    value: "shadow-gray-50",
    styles:
      "--tw-shadow-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
    description: "Sets the shadow color to gray-50, the lightest shade of gray",
  },
  {
    label: "shadow-gray-100",
    value: "shadow-gray-100",
    styles:
      "--tw-shadow-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
    description: "Sets the shadow color to gray-100",
  },
  {
    label: "shadow-gray-200",
    value: "shadow-gray-200",
    styles:
      "--tw-shadow-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
    description: "Sets the shadow color to gray-200",
  },
  {
    label: "shadow-gray-300",
    value: "shadow-gray-300",
    styles:
      "--tw-shadow-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
    description: "Sets the shadow color to gray-300",
  },
  {
    label: "shadow-gray-400",
    value: "shadow-gray-400",
    styles:
      "--tw-shadow-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
    description: "Sets the shadow color to gray-400",
  },
  {
    label: "shadow-gray-500",
    value: "shadow-gray-500",
    styles:
      "--tw-shadow-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
    description: "Sets the shadow color to gray-500, the base gray shade",
  },
  {
    label: "shadow-gray-600",
    value: "shadow-gray-600",
    styles:
      "--tw-shadow-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
    description: "Sets the shadow color to gray-600",
  },
  {
    label: "shadow-gray-700",
    value: "shadow-gray-700",
    styles:
      "--tw-shadow-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
    description: "Sets the shadow color to gray-700",
  },
  {
    label: "shadow-gray-800",
    value: "shadow-gray-800",
    styles:
      "--tw-shadow-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
    description: "Sets the shadow color to gray-800",
  },
  {
    label: "shadow-gray-900",
    value: "shadow-gray-900",
    styles:
      "--tw-shadow-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
    description: "Sets the shadow color to gray-900",
  },
  {
    label: "shadow-gray-950",
    value: "shadow-gray-950",
    styles:
      "--tw-shadow-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
    description: "Sets the shadow color to gray-950, the darkest shade of gray",
  },
  {
    label: "shadow-zinc-50",
    value: "shadow-zinc-50",
    styles: "--tw-shadow-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
    description: "Sets the shadow color to zinc-50, the lightest shade of zinc",
  },
  {
    label: "shadow-zinc-100",
    value: "shadow-zinc-100",
    styles:
      "--tw-shadow-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
    description: "Sets the shadow color to zinc-100",
  },
  {
    label: "shadow-zinc-200",
    value: "shadow-zinc-200",
    styles:
      "--tw-shadow-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
    description: "Sets the shadow color to zinc-200",
  },
  {
    label: "shadow-zinc-300",
    value: "shadow-zinc-300",
    styles:
      "--tw-shadow-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
    description: "Sets the shadow color to zinc-300",
  },
  {
    label: "shadow-zinc-400",
    value: "shadow-zinc-400",
    styles:
      "--tw-shadow-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
    description: "Sets the shadow color to zinc-400",
  },
  {
    label: "shadow-zinc-500",
    value: "shadow-zinc-500",
    styles:
      "--tw-shadow-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
    description: "Sets the shadow color to zinc-500, the base zinc shade",
  },
  {
    label: "shadow-zinc-600",
    value: "shadow-zinc-600",
    styles:
      "--tw-shadow-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
    description: "Sets the shadow color to zinc-600",
  },
  {
    label: "shadow-zinc-700",
    value: "shadow-zinc-700",
    styles:
      "--tw-shadow-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
    description: "Sets the shadow color to zinc-700",
  },
  {
    label: "shadow-zinc-800",
    value: "shadow-zinc-800",
    styles:
      "--tw-shadow-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
    description: "Sets the shadow color to zinc-800",
  },
  {
    label: "shadow-zinc-900",
    value: "shadow-zinc-900",
    styles:
      "--tw-shadow-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
    description: "Sets the shadow color to zinc-900",
  },
  {
    label: "shadow-zinc-950",
    value: "shadow-zinc-950",
    styles:
      "--tw-shadow-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
    description: "Sets the shadow color to zinc-950, the darkest shade of zinc",
  },
  {
    label: "shadow-neutral-50",
    value: "shadow-neutral-50",
    styles:
      "--tw-shadow-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
    description:
      "Sets the shadow color to neutral-50, the lightest shade of neutral",
  },
  {
    label: "shadow-neutral-100",
    value: "shadow-neutral-100",
    styles: "--tw-shadow-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
    description: "Sets the shadow color to neutral-100",
  },
  {
    label: "shadow-neutral-200",
    value: "shadow-neutral-200",
    styles:
      "--tw-shadow-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
    description: "Sets the shadow color to neutral-200",
  },
  {
    label: "shadow-neutral-300",
    value: "shadow-neutral-300",
    styles: "--tw-shadow-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
    description: "Sets the shadow color to neutral-300",
  },
  {
    label: "shadow-neutral-400",
    value: "shadow-neutral-400",
    styles:
      "--tw-shadow-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
    description: "Sets the shadow color to neutral-400",
  },
  {
    label: "shadow-neutral-500",
    value: "shadow-neutral-500",
    styles:
      "--tw-shadow-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
    description: "Sets the shadow color to neutral-500, the base neutral shade",
  },
  {
    label: "shadow-neutral-600",
    value: "shadow-neutral-600",
    styles:
      "--tw-shadow-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
    description: "Sets the shadow color to neutral-600",
  },
  {
    label: "shadow-neutral-700",
    value: "shadow-neutral-700",
    styles:
      "--tw-shadow-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
    description: "Sets the shadow color to neutral-700",
  },
  {
    label: "shadow-neutral-800",
    value: "shadow-neutral-800",
    styles:
      "--tw-shadow-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
    description: "Sets the shadow color to neutral-800",
  },
  {
    label: "shadow-neutral-900",
    value: "shadow-neutral-900",
    styles:
      "--tw-shadow-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
    description: "Sets the shadow color to neutral-900",
  },
  {
    label: "shadow-neutral-950",
    value: "shadow-neutral-950",
    styles:
      "--tw-shadow-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
    description:
      "Sets the shadow color to neutral-950, the darkest shade of neutral",
  },
  {
    label: "shadow-stone-50",
    value: "shadow-stone-50",
    styles:
      "--tw-shadow-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
    description:
      "Sets the shadow color to stone-50, the lightest shade of stone",
  },
  {
    label: "shadow-stone-100",
    value: "shadow-stone-100",
    styles:
      "--tw-shadow-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
    description: "Sets the shadow color to stone-100",
  },
  {
    label: "shadow-stone-200",
    value: "shadow-stone-200",
    styles:
      "--tw-shadow-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
    description: "Sets the shadow color to stone-200",
  },
  {
    label: "shadow-stone-300",
    value: "shadow-stone-300",
    styles:
      "--tw-shadow-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
    description: "Sets the shadow color to stone-300",
  },
  {
    label: "shadow-stone-400",
    value: "shadow-stone-400",
    styles:
      "--tw-shadow-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
    description: "Sets the shadow color to stone-400",
  },
  {
    label: "shadow-stone-500",
    value: "shadow-stone-500",
    styles:
      "--tw-shadow-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
    description: "Sets the shadow color to stone-500, the base stone shade",
  },
  {
    label: "shadow-stone-600",
    value: "shadow-stone-600",
    styles:
      "--tw-shadow-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
    description: "Sets the shadow color to stone-600",
  },
  {
    label: "shadow-stone-700",
    value: "shadow-stone-700",
    styles:
      "--tw-shadow-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
    description: "Sets the shadow color to stone-700",
  },
  {
    label: "shadow-stone-800",
    value: "shadow-stone-800",
    styles:
      "--tw-shadow-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
    description: "Sets the shadow color to stone-800",
  },
  {
    label: "shadow-stone-900",
    value: "shadow-stone-900",
    styles:
      "--tw-shadow-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
    description: "Sets the shadow color to stone-900",
  },
  {
    label: "shadow-stone-950",
    value: "shadow-stone-950",
    styles:
      "--tw-shadow-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
    description:
      "Sets the shadow color to stone-950, the darkest shade of stone",
  },
  {
    label: "inset-shadow-2xs",
    value: "inset-shadow-2xs",
    styles:
      "box-shadow: var(--inset-shadow-2xs); /* inset 0 1px rgb(0 0 0 / 0.05) */",
    description: "Applies a 2x extra small inset box shadow",
  },
  {
    label: "inset-shadow-xs",
    value: "inset-shadow-xs",
    styles:
      "box-shadow: var(--inset-shadow-xs); /* inset 0 1px 1px rgb(0 0 0 / 0.05) */",
    description: "Applies an extra small inset box shadow",
  },
  {
    label: "inset-shadow-sm",
    value: "inset-shadow-sm",
    styles:
      "box-shadow: var(--inset-shadow-sm); /* inset 0 2px 4px rgb(0 0 0 / 0.05) */",
    description: "Applies a small inset box shadow",
  },
  {
    label: "inset-shadow-none",
    value: "inset-shadow-none",
    styles: "box-shadow: inset 0 0 #0000;",
    description: "Removes all inset box shadows from an element",
  },
  {
    label: "inset-shadow-(<custom-property>)",
    value: "inset-shadow-(<custom-property>)",
    styles: "box-shadow: var(<custom-property>);",
    description: "Applies an inset box shadow using a custom CSS property",
  },
  {
    label: "inset-shadow-[<value>]",
    value: "inset-shadow-[<value>]",
    styles: "box-shadow: <value>;",
    description:
      "Applies an arbitrary inset box shadow value using Tailwind's bracket notation",
  },
  {
    label: "inset-shadow-inherit",
    value: "inset-shadow-inherit",
    styles: "--tw-inset-shadow-color: inherit;",
    description: "Inherits the inset shadow color from the parent element",
  },
  {
    label: "inset-shadow-current",
    value: "inset-shadow-current",
    styles: "--tw-inset-shadow-color: currentColor;",
    description: "Sets the inset shadow color to the current text color",
  },
  {
    label: "inset-shadow-transparent",
    value: "inset-shadow-transparent",
    styles: "--tw-inset-shadow-color: transparent;",
    description: "Sets the inset shadow color to transparent",
  },
  {
    label: "inset-shadow-black",
    value: "inset-shadow-black",
    styles: "--tw-inset-shadow-color: var(--color-black); /* #000 */",
    description: "Sets the inset shadow color to black",
  },
  {
    label: "inset-shadow-white",
    value: "inset-shadow-white",
    styles: "--tw-inset-shadow-color: var(--color-white); /* #fff */",
    description: "Sets the inset shadow color to white",
  },
  {
    label: "inset-shadow-red-50",
    value: "inset-shadow-red-50",
    styles:
      "--tw-inset-shadow-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
    description:
      "Sets the inset shadow color to red-50, the lightest shade of red",
  },
  {
    label: "inset-shadow-red-100",
    value: "inset-shadow-red-100",
    styles:
      "--tw-inset-shadow-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
    description: "Sets the inset shadow color to red-100",
  },
  {
    label: "inset-shadow-red-200",
    value: "inset-shadow-red-200",
    styles:
      "--tw-inset-shadow-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
    description: "Sets the inset shadow color to red-200",
  },
  {
    label: "inset-shadow-red-300",
    value: "inset-shadow-red-300",
    styles:
      "--tw-inset-shadow-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
    description: "Sets the inset shadow color to red-300",
  },
  {
    label: "inset-shadow-red-400",
    value: "inset-shadow-red-400",
    styles:
      "--tw-inset-shadow-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
    description: "Sets the inset shadow color to red-400",
  },
  {
    label: "inset-shadow-red-500",
    value: "inset-shadow-red-500",
    styles:
      "--tw-inset-shadow-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
    description: "Sets the inset shadow color to red-500",
  },
  {
    label: "inset-shadow-red-600",
    value: "inset-shadow-red-600",
    styles:
      "--tw-inset-shadow-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
    description: "Sets the inset shadow color to red-600",
  },
  {
    label: "inset-shadow-red-700",
    value: "inset-shadow-red-700",
    styles:
      "--tw-inset-shadow-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
    description: "Sets the inset shadow color to red-700",
  },
  {
    label: "inset-shadow-red-800",
    value: "inset-shadow-red-800",
    styles:
      "--tw-inset-shadow-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
    description: "Sets the inset shadow color to red-800",
  },
  {
    label: "inset-shadow-red-900",
    value: "inset-shadow-red-900",
    styles:
      "--tw-inset-shadow-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
    description: "Sets the inset shadow color to red-900",
  },
  {
    label: "inset-shadow-red-950",
    value: "inset-shadow-red-950",
    styles:
      "--tw-inset-shadow-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
    description: "Sets the inset shadow color to red-950",
  },
  {
    label: "inset-shadow-orange-50",
    value: "inset-shadow-orange-50",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
    description:
      "Sets the inset shadow color to orange-50, the lightest shade of orange",
  },
  {
    label: "inset-shadow-orange-100",
    value: "inset-shadow-orange-100",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
    description: "Sets the inset shadow color to orange-100",
  },
  {
    label: "inset-shadow-orange-200",
    value: "inset-shadow-orange-200",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
    description: "Sets the inset shadow color to orange-200",
  },
  {
    label: "inset-shadow-orange-300",
    value: "inset-shadow-orange-300",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
    description: "Sets the inset shadow color to orange-300",
  },
  {
    label: "inset-shadow-orange-400",
    value: "inset-shadow-orange-400",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
    description: "Sets the inset shadow color to orange-400",
  },
  {
    label: "inset-shadow-orange-500",
    value: "inset-shadow-orange-500",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
    description: "Sets the inset shadow color to orange-500",
  },
  {
    label: "inset-shadow-orange-600",
    value: "inset-shadow-orange-600",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
    description: "Sets the inset shadow color to orange-600",
  },
  {
    label: "inset-shadow-orange-700",
    value: "inset-shadow-orange-700",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
    description: "Sets the inset shadow color to orange-700",
  },
  {
    label: "inset-shadow-orange-800",
    value: "inset-shadow-orange-800",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
    description: "Sets the inset shadow color to orange-800",
  },
  {
    label: "inset-shadow-orange-900",
    value: "inset-shadow-orange-900",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
    description: "Sets the inset shadow color to orange-900",
  },
  {
    label: "inset-shadow-orange-950",
    value: "inset-shadow-orange-950",
    styles:
      "--tw-inset-shadow-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
    description: "Sets the inset shadow color to orange-950",
  },
  {
    label: "inset-shadow-amber-50",
    value: "inset-shadow-amber-50",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
    description:
      "Sets the inset shadow color to amber-50, the lightest shade of amber",
  },
  {
    label: "inset-shadow-amber-100",
    value: "inset-shadow-amber-100",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
    description: "Sets the inset shadow color to amber-100",
  },
  {
    label: "inset-shadow-amber-200",
    value: "inset-shadow-amber-200",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
    description: "Sets the inset shadow color to amber-200",
  },
  {
    label: "inset-shadow-amber-300",
    value: "inset-shadow-amber-300",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
    description: "Sets the inset shadow color to amber-300",
  },
  {
    label: "inset-shadow-amber-400",
    value: "inset-shadow-amber-400",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
    description: "Sets the inset shadow color to amber-400",
  },
  {
    label: "inset-shadow-amber-500",
    value: "inset-shadow-amber-500",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
    description: "Sets the inset shadow color to amber-500",
  },
  {
    label: "inset-shadow-amber-600",
    value: "inset-shadow-amber-600",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
    description: "Sets the inset shadow color to amber-600",
  },
  {
    label: "inset-shadow-amber-700",
    value: "inset-shadow-amber-700",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
    description: "Sets the inset shadow color to amber-700",
  },
  {
    label: "inset-shadow-amber-800",
    value: "inset-shadow-amber-800",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
    description: "Sets the inset shadow color to amber-800",
  },
  {
    label: "inset-shadow-amber-900",
    value: "inset-shadow-amber-900",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
    description: "Sets the inset shadow color to amber-900",
  },
  {
    label: "inset-shadow-amber-950",
    value: "inset-shadow-amber-950",
    styles:
      "--tw-inset-shadow-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
    description: "Sets the inset shadow color to amber-950",
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
  { section: "Place Content", selectors: placeContent },
  { section: "Place Items", selectors: placeItems },
  { section: "Place Self", selectors: placeSelf },
];

const spacingProperties: TailwindSelectorGroupType[] = [
  { section: "Padding", selectors: padding },
  { section: "Margin", selectors: margin },
];

const sizingProperties: TailwindSelectorGroupType[] = [
  { section: "Width", selectors: width },
  { section: "Min Width", selectors: minWidth },
  { section: "Max Width", selectors: maxWidth },
  { section: "Height", selectors: height },
  { section: "Min Height", selectors: minHeight },
  { section: "Max Height", selectors: maxHeight },
];

const typographyProperties: TailwindSelectorGroupType[] = [
  { section: "Font Family", selectors: fontFamily },
  { section: "Font Size", selectors: fontSize },
  { section: "Font Smoothing", selectors: fontSmoothing },
  { section: "Font Style", selectors: fontStyle },
  { section: "Font Weight", selectors: fontWeight },
  { section: "Font Stretch", selectors: fontStretch },
  { section: "Font Variant Numeric", selectors: fontVariantNumeric },
  { section: "Letter Spacing", selectors: letterSpacing },
  { section: "Line Clamp", selectors: lineClamp },
  { section: "Line Height", selectors: lineHeight },
  { section: "List Style Image", selectors: listStyleImage },
  { section: "List Style Position", selectors: listStylePosition },
  { section: "List Style Type", selectors: listStyleType },
  { section: "Text Align", selectors: textAlign },
  { section: "Color", selectors: textColor },
  { section: "Text Decoration Line", selectors: textDecorationLine },
  { section: "Text Decoration Color", selectors: textDecorationColor },
  { section: "Text Decoration Style", selectors: textDecorationStyle },
  { section: "Text Decoration Thickness", selectors: textDecorationThickness },
  { section: "Text Underline Offset", selectors: textUnderlineOffset },
  { section: "Text Transform", selectors: textTransform },
  { section: "Text Overflow", selectors: textOverflow },
  { section: "Text Wrap", selectors: textWrap },
  { section: "Text Indent", selectors: textIndent },
  { section: "Vertical Align", selectors: verticalAlign },
  { section: "White Space", selectors: whiteSpace },
  { section: "Word Break", selectors: wordBreak },
  { section: "Overflow Wrap", selectors: overflowWrap },
  { section: "Hyphens", selectors: hyphens },
  { section: "Content", selectors: content },
];

const backgroundProperties: TailwindSelectorGroupType[] = [
  { section: "Background Attachment", selectors: backgroundAttachment },
  { section: "Background Clip", selectors: backgroundClip },
  { section: "Background Color", selectors: backgroundColor },
  { section: "Background Image", selectors: backgroundImage },
  { section: "Background Origin", selectors: backgroundOrigin },
  { section: "Background Position", selectors: backgroundPosition },
  { section: "Background Repeat", selectors: backgroundRepeat },
  { section: "Background Size", selectors: backgroundSize },
];

const borderProperties: TailwindSelectorGroupType[] = [
  { section: "Border Radius", selectors: borderRadius },
  { section: "Border Width", selectors: borderWidth },
  { section: "Border Color", selectors: borderColor },
  { section: "Border Style", selectors: borderStyle },
  { section: "Outline Width", selectors: outlineWidth },
  { section: "Outline Color", selectors: outlineColor },
  { section: "Outline Style", selectors: outlineStyle },
  { section: "Outline Offset", selectors: outlineOffset },
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
//   { category: "Effects", groups: effectsProperties },
//   { category: "Filters", groups: filterProperties },
//   { category: "Tables", groups: tableProperties },
//   {
//     category: "Transitions & Animation",
//     groups: transitionAnimationProperties,
//   },
//   { category: "Transforms", groups: transformProperties },
//   { category: "Interactivity", groups: interactivityProperties },
//   { category: "SVG", groups: svgProperties },
//   { category: "Accessibility", groups: accessibilityProperties },
];
