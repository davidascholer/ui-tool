/**
 * Zod validation schemas for UI Builder entities
 * Used with react-hook-form for form validation
 */

import { z } from "zod";

// Tailwind class validation (basic allowlist)
const tailwindClassRegex = /^[a-z-]+(-[a-z0-9]+)*$/;

export const tailwindClassListSchema = z.array(
  z.string().regex(tailwindClassRegex, "Invalid Tailwind class")
);

export const componentSchema = z.object({
  id: z.string(),
  type: z.enum(["Button", "Input", "Card", "Text", "Image", "List"]),
  props: z.record(z.string(), z.unknown()),
  tailwindClassList: tailwindClassListSchema,
  uitType: z.string(),
  parentId: z.string(),
});

export const containerSchema: z.ZodType<unknown> = z.lazy(() =>
  z.object({
    id: z.string(),
    name: z.string().min(1, "Container name is required"),
    tailwindClassList: tailwindClassListSchema,
    uitType: z.string(),
    children: z.array(z.union([componentSchema, containerSchema])),
    parentId: z.string(),
    parentType: z.enum(["Page", "Container"]),
  })
);

export const pageSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Page name is required"),
  uitType: z.string(),
  meta: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
    })
    .optional(),
  children: z.array(containerSchema),
});

// Form schemas for editing
export const pageFormSchema = z.object({
  name: z
    .string()
    .min(1, "Page name is required")
    .max(100, "Page name too long"),
  meta: z
    .object({
      title: z
        .string()
        .max(60, "Title should be under 60 characters")
        .optional(),
      description: z
        .string()
        .max(160, "Description should be under 160 characters")
        .optional(),
    })
    .optional(),
});

export const containerFormSchema = z.object({
  name: z
    .string()
    .min(1, "Container name is required")
    .max(100, "Container name too long"),
});

export const componentFormSchema = z.object({
  type: z.enum(["Button", "Input", "Card", "Text", "Image", "List"]),
  props: z.record(z.string(), z.unknown()),
});

// Component-specific prop schemas
export const buttonPropsSchema = z.object({
  text: z.string().min(1, "Button text is required"),
  variant: z
    .enum(["primary", "secondary", "outline", "ghost"])
    .default("primary"),
  size: z.enum(["sm", "md", "lg"]).default("md"),
  disabled: z.boolean().default(false),
});

export const inputPropsSchema = z.object({
  placeholder: z.string().optional(),
  type: z
    .enum(["text", "email", "password", "number", "tel", "url"])
    .default("text"),
  required: z.boolean().default(false),
  disabled: z.boolean().default(false),
});

export const cardPropsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const textPropsSchema = z.object({
  content: z.string().min(1, "Text content is required"),
  variant: z.enum(["body", "heading", "caption", "label"]).default("body"),
  size: z.enum(["xs", "sm", "md", "lg", "xl", "2xl"]).default("md"),
});

export const imagePropsSchema = z.object({
  src: z
    .string()
    .url("Invalid image URL")
    .or(z.string().min(1, "Image source is required")),
  alt: z.string().min(1, "Alt text is required for accessibility"),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});

export const listPropsSchema = z.object({
  items: z.array(z.string()).min(1, "At least one item is required"),
  ordered: z.boolean().default(false),
});