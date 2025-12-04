/**
 * Zod validation schemas for UI Builder entities
 * Used with react-hook-form for form validation
 */

import { z } from 'zod';

// Tailwind class validation (basic allowlist)
const tailwindClassRegex = /^[a-z-]+(-[a-z0-9]+)*$/;

export const tailwindOptionsSchema = z.object({
  classList: z.array(z.string().regex(tailwindClassRegex, 'Invalid Tailwind class')),
  theme: z.object({
    primary: z.string().optional(),
    secondary: z.string().optional(),
    accent: z.string().optional(),
  }).optional(),
});

export const componentSchema = z.object({
  id: z.string(),
  type: z.enum(['Button', 'Input', 'Card', 'Text', 'Image', 'List']),
  props: z.record(z.string(), z.unknown()),
  tailwindOptions: tailwindOptionsSchema,
});

export const containerSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Container name is required'),
  tailwindOptions: tailwindOptionsSchema,
  children: z.array(componentSchema),
});

export const pageSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Page name is required'),
  meta: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }).optional(),
  children: z.array(containerSchema),
});

// Form schemas for editing
export const pageFormSchema = z.object({
  name: z.string().min(1, 'Page name is required').max(100, 'Page name too long'),
  meta: z.object({
    title: z.string().max(60, 'Title should be under 60 characters').optional(),
    description: z.string().max(160, 'Description should be under 160 characters').optional(),
  }).optional(),
});

export const containerFormSchema = z.object({
  name: z.string().min(1, 'Container name is required').max(100, 'Container name too long'),
});

export const componentFormSchema = z.object({
  type: z.enum(['Button', 'Input', 'Card', 'Text', 'Image', 'List']),
  props: z.record(z.string(), z.unknown()),
});

// Component-specific prop schemas
export const buttonPropsSchema = z.object({
  text: z.string().min(1, 'Button text is required'),
  variant: z.enum(['primary', 'secondary', 'outline', 'ghost']).default('primary'),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
  disabled: z.boolean().default(false),
});

export const inputPropsSchema = z.object({
  placeholder: z.string().optional(),
  type: z.enum(['text', 'email', 'password', 'number', 'tel', 'url']).default('text'),
  required: z.boolean().default(false),
  disabled: z.boolean().default(false),
});

export const cardPropsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
});

export const textPropsSchema = z.object({
  content: z.string().min(1, 'Text content is required'),
  variant: z.enum(['body', 'heading', 'caption', 'label']).default('body'),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl']).default('md'),
});

export const imagePropsSchema = z.object({
  src: z.string().url('Invalid image URL').or(z.string().min(1, 'Image source is required')),
  alt: z.string().min(1, 'Alt text is required for accessibility'),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});

export const listPropsSchema = z.object({
  items: z.array(z.string()).min(1, 'At least one item is required'),
  ordered: z.boolean().default(false),
});

// Allowlists for Tailwind options per component type
export const tailwindAllowlists = {
  Button: [
    'bg-blue-500', 'bg-blue-600', 'bg-gray-500', 'bg-gray-600',
    'text-white', 'text-black', 'text-gray-900',
    'px-4', 'px-6', 'py-2', 'py-3',
    'rounded', 'rounded-md', 'rounded-lg',
    'font-medium', 'font-semibold',
    'hover:bg-blue-600', 'hover:bg-gray-600',
    'disabled:opacity-50', 'disabled:cursor-not-allowed',
  ],
  Input: [
    'border', 'border-gray-300', 'border-gray-400',
    'rounded', 'rounded-md',
    'px-3', 'px-4', 'py-2',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500',
    'disabled:bg-gray-100', 'disabled:cursor-not-allowed',
    'w-full', 'w-auto',
  ],
  Card: [
    'bg-white', 'bg-gray-50', 'bg-gray-100',
    'border', 'border-gray-200',
    'rounded', 'rounded-lg', 'rounded-xl',
    'shadow', 'shadow-md', 'shadow-lg',
    'p-4', 'p-6', 'p-8',
    'hover:shadow-lg',
  ],
  Text: [
    'text-gray-900', 'text-gray-700', 'text-gray-600',
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl',
    'font-normal', 'font-medium', 'font-semibold', 'font-bold',
    'leading-tight', 'leading-normal', 'leading-relaxed',
  ],
  Image: [
    'rounded', 'rounded-md', 'rounded-lg', 'rounded-full',
    'shadow', 'shadow-md', 'shadow-lg',
    'w-full', 'w-auto', 'h-auto',
    'object-cover', 'object-contain',
  ],
  List: [
    'list-disc', 'list-decimal', 'list-none',
    'pl-4', 'pl-6', 'pl-8',
    'space-y-1', 'space-y-2', 'space-y-3',
    'text-gray-700', 'text-gray-900',
  ],
  Container: [
    'flex', 'grid', 'block',
    'flex-col', 'flex-row',
    'gap-2', 'gap-4', 'gap-6', 'gap-8',
    'p-4', 'p-6', 'p-8',
    'bg-white', 'bg-gray-50', 'bg-gray-100',
    'border', 'border-gray-200',
    'rounded', 'rounded-lg',
  ],
  Page: [
    'min-h-screen',
    'bg-white', 'bg-gray-50', 'bg-gray-100',
    'p-4', 'p-6', 'p-8',
  ],
};

// Feature 004: Real-Time Hierarchy Updates - Validation Schemas

export const visualIndicatorSchema = z.object({
  type: z.enum(['color', 'spacing', 'text', 'image', 'size']),
  value: z.string().min(1, 'Value is required'),
  displayValue: z.string().min(1, 'Display value is required'),
  tooltip: z.string().min(1, 'Tooltip is required'),
  priority: z.number().int().min(1).max(5),
  isValid: z.boolean(),
});

export const propertyChangeSchema = z.object({
  entityId: z.string().min(1, 'Entity ID is required'),
  entityType: z.enum(['Page', 'Container', 'Component']),
  field: z.string().min(1, 'Field name is required'),
  oldValue: z.unknown(),
  newValue: z.unknown(),
  timestamp: z.number().int().positive('Timestamp must be positive'),
});

export const hierarchyViewItemSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  type: z.enum(['Page', 'Container', 'Component']),
  displayName: z.string().max(25, 'Display name must be 25 characters or less'),
  fullName: z.string().min(1, 'Full name is required'),
  isExpanded: z.boolean(),
  isEditing: z.boolean(),
  level: z.number().int().min(0).max(2),
  parentId: z.string().optional(),
  indicators: z.array(visualIndicatorSchema).max(5, 'Maximum 5 indicators allowed'),
});

export const updateContextSchema = z.object({
  lastUpdate: z.number().int().nonnegative('Last update timestamp must be non-negative'),
  batchCount: z.number().int().nonnegative('Batch count must be non-negative'),
  isProcessing: z.boolean(),
});
