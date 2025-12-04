/**
 * Editor Component
 * Enhanced property editing for Tailwind options with real-time preview
 * Supports different entity types with appropriate form controls
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { PageEntity, ContainerEntity, ComponentEntity } from '@/utils/types';
import { pageFormSchema, containerFormSchema, componentFormSchema } from '@/utils/schemas';

interface EditorProps {
  entity: PageEntity | ContainerEntity | ComponentEntity;
  entityType: 'Page' | 'Container' | 'Component';
  onSave?: (data: unknown) => void;
}

export function Editor({ entity, entityType, onSave }: EditorProps) {
  return (
    <div className="space-y-6">
      {entityType === 'Page' && (
        <PageEditor entity={entity as PageEntity} onSave={onSave} />
      )}
      {entityType === 'Container' && (
        <ContainerEditor entity={entity as ContainerEntity} onSave={onSave} />
      )}
      {entityType === 'Component' && (
        <ComponentEditor entity={entity as ComponentEntity} onSave={onSave} />
      )}
    </div>
  );
}

function PageEditor({ entity, onSave }: { entity: PageEntity; onSave?: (data: unknown) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pageFormSchema),
    defaultValues: {
      name: entity.name,
      meta: entity.meta || {},
    },
  });

  const handleFormSubmit = (data: unknown) => {
    console.log('PageEditor: Form submitted with data:', data);
    onSave?.(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Page Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-[rgb(var(--color-invalid))]">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="meta.title" className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          SEO Title
        </label>
        <input
          {...register('meta.title')}
          id="meta.title"
          type="text"
          placeholder="Page title for search engines"
          className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="meta.description" className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          SEO Description
        </label>
        <textarea
          {...register('meta.description')}
          id="meta.description"
          rows={3}
          placeholder="Brief description for search engines"
          className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[rgb(var(--color-primary))] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:ring-offset-2"
      >
        Save Page
      </button>
    </form>
  );
}

function ContainerEditor({ entity, onSave }: { entity: ContainerEntity; onSave?: (data: unknown) => void }) {
  const [classList, setClassList] = useState<string[]>(entity.tailwindOptions?.classList || []);
  const [newClass, setNewClass] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(containerFormSchema),
    defaultValues: {
      name: entity.name,
    },
  });

  console.log('ContainerEditor: Current form errors:', errors);

  const addTailwindClass = () => {
    if (newClass.trim() && !classList.includes(newClass.trim())) {
      setClassList(prev => [...prev, newClass.trim()]);
      setNewClass('');
    }
  };

  const removeTailwindClass = (index: number) => {
    setClassList(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTailwindClass();
    }
  };

  const handleFormSubmit = (formData: { name: string }) => {
    console.log('ContainerEditor: Form submitted with data:', formData);
    console.log('ContainerEditor: Current classList:', classList);
    const updatedData = {
      ...formData,
      tailwindOptions: {
        ...entity.tailwindOptions,
        classList,
      },
    };
    console.log('ContainerEditor: Final data to save:', updatedData);
    onSave?.(updatedData);
  };

  const handleSubmitWithError = handleSubmit(
    handleFormSubmit,
    (errors) => {
      console.log('ContainerEditor: Form submission failed with errors:', errors);
    }
  );

  return (
    <form onSubmit={handleSubmitWithError} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Container Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-[rgb(var(--color-invalid))]">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Tailwind Classes
        </label>
        <div className="space-y-3">
          {/* Add new class */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={newClass}
              onChange={(e) => setNewClass(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g., bg-blue-500, p-4, rounded-lg"
              className="flex-1 rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
            />
            <button
              type="button"
              onClick={addTailwindClass}
              className="rounded-lg bg-[rgb(var(--color-primary))] px-3 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Add
            </button>
          </div>

          {/* Current classes */}
          {classList.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                Current classes:
              </p>
              <div className="flex flex-wrap gap-2">
                {classList.map((className, index) => (
                  <div
                    key={`${className}-${index}`}
                    className="flex items-center space-x-2 rounded-full bg-[rgb(var(--color-muted))] px-3 py-1 text-sm"
                  >
                    <span className="text-[rgb(var(--color-foreground))]">
                      {className}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeTailwindClass(index)}
                      className="text-[rgb(var(--color-muted-foreground))] hover:text-[rgb(var(--color-invalid))]"
                      aria-label={`Remove ${className}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {classList.length === 0 && (
            <p className="text-sm text-[rgb(var(--color-muted-foreground))] py-4 text-center border border-dashed border-[rgb(var(--color-border))] rounded-lg">
              No Tailwind classes added yet
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[rgb(var(--color-primary))] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:ring-offset-2"
      >
        Save Container
      </button>
    </form>
  );
}

function ComponentEditor({ entity, onSave }: { entity: ComponentEntity; onSave?: (data: unknown) => void }) {
  const [classList, setClassList] = useState<string[]>(entity.tailwindOptions?.classList || []);
  const [newClass, setNewClass] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(componentFormSchema),
    defaultValues: {
      type: entity.type,
      props: entity.props || {},
    },
  });

  console.log('ComponentEditor: Current form errors:', errors);

  const addTailwindClass = () => {
    if (newClass.trim() && !classList.includes(newClass.trim())) {
      setClassList(prev => [...prev, newClass.trim()]);
      setNewClass('');
    }
  };

  const removeTailwindClass = (index: number) => {
    setClassList(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTailwindClass();
    }
  };

  const handleFormSubmit = (formData: { type: string; props: Record<string, unknown> }) => {
    console.log('ComponentEditor: Form submitted with data:', formData);
    console.log('ComponentEditor: Current classList:', classList);
    const updatedData = {
      ...formData,
      tailwindOptions: {
        ...entity.tailwindOptions,
        classList,
      },
    };
    console.log('ComponentEditor: Final data to save:', updatedData);
    onSave?.(updatedData);
  };

  const handleSubmitWithError = handleSubmit(
    handleFormSubmit,
    (errors) => {
      console.log('ComponentEditor: Form submission failed with errors:', errors);
    }
  );

  const getComponentSpecificProps = () => {
    switch (entity.type) {
      case 'Button':
        return (
          <div>
            <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
              Button Text
            </label>
            <input
              {...register('props.text')}
              type="text"
              placeholder="Click me"
              className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
            />
          </div>
        );
      case 'Text':
        return (
          <div>
            <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
              Text Content
            </label>
            <textarea
              {...register('props.text')}
              rows={3}
              placeholder="Enter your text here"
              className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent resize-none"
            />
          </div>
        );
      case 'Input':
        return (
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
                Placeholder
              </label>
              <input
                {...register('props.placeholder')}
                type="text"
                placeholder="Enter placeholder text"
                className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
                Input Type
              </label>
              <select
                {...register('props.type')}
                className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
                <option value="number">Number</option>
              </select>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center py-4">
            <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
              No specific properties for {entity.type} component
            </p>
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmitWithError} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Component Type
        </label>
        <input
          type="text"
          value={entity.type}
          disabled
          className="w-full rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))] px-3 py-2 text-sm"
        />
      </div>

      {/* Component-specific properties */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-[rgb(var(--color-foreground))]">
          Properties
        </h3>
        {getComponentSpecificProps()}
      </div>

      {/* Tailwind classes */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Tailwind Classes
        </label>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newClass}
              onChange={(e) => setNewClass(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g., text-blue-600, px-4, hover:bg-gray-100"
              className="flex-1 rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
            />
            <button
              type="button"
              onClick={addTailwindClass}
              className="rounded-lg bg-[rgb(var(--color-primary))] px-3 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Add
            </button>
          </div>

          {classList.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                Current classes:
              </p>
              <div className="flex flex-wrap gap-2">
                {classList.map((className, index) => (
                  <div
                    key={`${className}-${index}`}
                    className="flex items-center space-x-2 rounded-full bg-[rgb(var(--color-muted))] px-3 py-1 text-sm"
                  >
                    <span className="text-[rgb(var(--color-foreground))]">
                      {className}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeTailwindClass(index)}
                      className="text-[rgb(var(--color-muted-foreground))] hover:text-[rgb(var(--color-invalid))]"
                      aria-label={`Remove ${className}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {classList.length === 0 && (
            <p className="text-sm text-[rgb(var(--color-muted-foreground))] py-4 text-center border border-dashed border-[rgb(var(--color-border))] rounded-lg">
              No Tailwind classes added yet
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[rgb(var(--color-primary))] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:ring-offset-2"
      >
        Save Component
      </button>
    </form>
  );
}