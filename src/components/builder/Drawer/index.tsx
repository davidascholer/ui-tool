/**
 * Drawer Component
 * Property editor for selected entities
 * Uses react-hook-form with zod validation
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Selection, PageEntity, ContainerEntity, ComponentEntity } from '@/utils/types';
import { pageFormSchema, containerFormSchema, componentFormSchema } from '@/utils/schemas';

interface DrawerProps {
  selection: Selection | null;
  entity: PageEntity | ContainerEntity | ComponentEntity | null;
  onSave?: (data: unknown) => void;
  onClose?: () => void;
}

export function Drawer({ selection, entity, onSave, onClose }: DrawerProps) {
  if (!selection || !entity) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <div className="mb-4 text-4xl" aria-hidden="true">
            ✏️
          </div>
          <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
            Select an element to edit its properties
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] p-4">
        <h2 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
          Edit {selection.entityType}
        </h2>
        <button
          onClick={onClose}
          className="rounded p-1 hover:bg-[rgb(var(--color-muted))] focus-visible:outline-2 focus-visible:outline-[rgb(var(--color-primary))]"
          aria-label="Close drawer"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {selection.entityType === 'Page' && (
          <PageForm entity={entity as PageEntity} onSave={onSave} />
        )}
        {selection.entityType === 'Container' && (
          <ContainerForm entity={entity as ContainerEntity} onSave={onSave} />
        )}
        {selection.entityType === 'Component' && (
          <ComponentForm entity={entity as ComponentEntity} onSave={onSave} />
        )}
      </div>
    </div>
  );
}

function PageForm({ entity, onSave }: { entity: PageEntity; onSave?: (data: unknown) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pageFormSchema),
    defaultValues: {
      name: entity.name,
      meta: entity.meta,
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => onSave?.(data))} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Page Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className="w-full rounded border border-[rgb(var(--color-border))] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-[rgb(var(--color-invalid))]">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="meta.title" className="mb-1 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          SEO Title
        </label>
        <input
          {...register('meta.title')}
          id="meta.title"
          type="text"
          className="w-full rounded border border-[rgb(var(--color-border))] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]"
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="meta.description" className="mb-1 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          SEO Description
        </label>
        <textarea
          {...register('meta.description')}
          id="meta.description"
          rows={3}
          className="w-full rounded border border-[rgb(var(--color-border))] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]"
          placeholder="Optional"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded bg-[rgb(var(--color-primary))] px-4 py-2 text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-[rgb(var(--color-primary))]"
      >
        Save Changes
      </button>
    </form>
  );
}

function ContainerForm({ entity, onSave }: { entity: ContainerEntity; onSave?: (data: unknown) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(containerFormSchema),
    defaultValues: {
      name: entity.name,
      tailwindOptions: entity.tailwindOptions,
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => onSave?.(data))} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Container Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className="w-full rounded border border-[rgb(var(--color-border))] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-[rgb(var(--color-invalid))]">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-[rgb(var(--color-foreground))]">
          Tailwind Classes
        </p>
        <p className="text-xs text-[rgb(var(--color-muted-foreground))]">
          Advanced styling options coming soon...
        </p>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-[rgb(var(--color-primary))] px-4 py-2 text-white hover:opacity-90"
      >
        Save Changes
      </button>
    </form>
  );
}

function ComponentForm({ entity, onSave }: { entity: ComponentEntity; onSave?: (data: unknown) => void }) {
  const {
    handleSubmit,
  } = useForm({
    resolver: zodResolver(componentFormSchema),
    defaultValues: {
      type: entity.type,
      props: entity.props,
      tailwindOptions: entity.tailwindOptions,
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => onSave?.(data))} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Component Type
        </label>
        <input
          type="text"
          value={entity.type}
          disabled
          className="w-full rounded border border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))] px-3 py-2"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-[rgb(var(--color-foreground))]">
          Properties
        </p>
        <p className="text-xs text-[rgb(var(--color-muted-foreground))]">
          Component-specific properties coming soon...
        </p>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-[rgb(var(--color-primary))] px-4 py-2 text-white hover:opacity-90"
      >
        Save Changes
      </button>
    </form>
  );
}
