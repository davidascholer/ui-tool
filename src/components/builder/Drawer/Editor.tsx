/**
 * Editor Component
 * Enhanced property editing for Tailwind options with real-time preview
 * Supports different entity types with appropriate form controls
 */

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Info } from "lucide-react";
import type {
  PageEntity,
  ContainerEntity,
  ComponentEntity,
} from "@/utils/types";
import {
  pageFormSchema,
  containerFormSchema,
} from "@/utils/schemas";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { groupedSelectors } from "@/utils/tailwindSelectors";

interface EditorProps {
  entity: PageEntity | ContainerEntity | ComponentEntity;
  entityType: "Page" | "Container" | "Component";
  onSave?: (data: unknown) => void;
}

export function Editor({ entity, entityType, onSave }: EditorProps) {
  return (
    <div className="space-y-6">
      {entityType === "Page" && (
        <PageEditor entity={entity as PageEntity} onSave={onSave} />
      )}
      {entityType === "Container" && (
        <ContainerEditor entity={entity as ContainerEntity} onSave={onSave} />
      )}
      {entityType === "Component" && (
        <ComponentEditor entity={entity as ComponentEntity} onSave={onSave} />
      )}
    </div>
  );
}

function PageEditor({
  entity,
  onSave,
}: {
  entity: PageEntity;
  onSave?: (data: unknown) => void;
}) {
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
    console.log("PageEditor: Form submitted with data:", data);
    onSave?.(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          Page Name
        </label>
        <input
          {...register("name")}
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
        <label
          htmlFor="meta.title"
          className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          SEO Title
        </label>
        <input
          {...register("meta.title")}
          id="meta.title"
          type="text"
          placeholder="Page title for search engines"
          className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="meta.description"
          className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          SEO Description
        </label>
        <textarea
          {...register("meta.description")}
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

function ContainerEditor({
  entity,
  onSave,
}: {
  entity: ContainerEntity;
  onSave?: (data: unknown) => void;
}) {
  const [classList, setClassList] = useState<string[]>(
    entity.tailwindClassList || []
  );
  const [open, setOpen] = useState(false);
  const [hoveredSelector, setHoveredSelector] = useState<{
    value: string;
    label: string;
    styles: string;
    description: string;
  } | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{
    x: number;
    y: number;
    width?: number;
  } | null>(null);
  const [infoHovered, setInfoHovered] = useState(false);
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

  console.log("ContainerEditor: Current form errors:", errors);

  const toggleClass = (value: string) => {
    setClassList((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const removeTailwindClass = (className: string) => {
    setClassList((prev) => prev.filter((c) => c !== className));
  };

  const handleFormSubmit = (formData: { name: string }) => {
    console.log("ContainerEditor: Form submitted with data:", formData);
    console.log("ContainerEditor: Current classList:", classList);
    const updatedData = {
      ...formData,
      tailwindClassList: classList,
    };
    console.log("ContainerEditor: Final data to save:", updatedData);
    onSave?.(updatedData);
  };

  const handleSubmitWithError = handleSubmit(handleFormSubmit, (errors) => {
    console.log("ContainerEditor: Form submission failed with errors:", errors);
  });

  return (
    <form onSubmit={handleSubmitWithError} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          Container Name
        </label>
        <input
          {...register("name")}
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
          {/* Combobox for selecting classes */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {classList.length > 0
                  ? `${classList.length} class${
                      classList.length === 1 ? "" : "es"
                    } selected`
                  : "Select classes..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-full p-0 animate-fade-in overflow-visible"
              align="start"
              sideOffset={4}
            >
              <Command>
                <CommandInput
                  placeholder="Search classes..."
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-none focus:shadow-none focus-visible:outline-none"
                />
                <CommandList className="overflow-scroll">
                  <CommandEmpty>No class found.</CommandEmpty>
                  {groupedSelectors.map((category) => (
                    <React.Fragment key={category.category}>
                      {category.groups.map((group) => (
                        <CommandGroup
                          key={`${category.category}-${group.section}`}
                          heading={`${category.category} > ${group.section}`}
                        >
                          {group.selectors.map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.value}
                              onSelect={() => toggleClass(option.value)}
                              className="justify-between"
                              onMouseEnter={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                setHoveredSelector(option);
                                setTooltipPos({
                                  x: rect.left,
                                  y: rect.top,
                                });
                              }}
                              onMouseLeave={() => {
                                setHoveredSelector(null);
                                setTooltipPos(null);
                              }}
                            >
                              <div className="flex items-center">
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    classList.includes(option.value)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {option.label}
                              </div>
                              <button
                                type="button"
                                onMouseEnter={(e) => {
                                  setInfoHovered(true);
                                  const rect = e.currentTarget
                                    .closest('[role="option"]')
                                    ?.getBoundingClientRect();
                                  if (rect) {
                                    setHoveredSelector(option);
                                    setTooltipPos({
                                      x: rect.left,
                                      y: rect.top,
                                      width: rect.width,
                                    });
                                  }
                                }}
                                onMouseLeave={() => {
                                  setInfoHovered(false);
                                  setHoveredSelector(null);
                                  setTooltipPos(null);
                                }}
                                className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
                              >
                                <Info className="h-3 w-3" />
                              </button>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      ))}
                    </React.Fragment>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Current classes */}
          {classList.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                Current classes:
              </p>
              <div className="flex flex-wrap gap-2">
                {classList.map((className) => (
                  <div
                    key={className}
                    className="flex items-center space-x-2 rounded-full bg-[rgb(var(--color-muted))] px-3 py-1 text-sm"
                  >
                    <span className="text-[rgb(var(--color-foreground))]">
                      {className}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeTailwindClass(className)}
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
              No Tailwind classes selected yet
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
      {hoveredSelector &&
        tooltipPos &&
        createPortal(
          <div
            className="fixed z-100 rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-xl border border-gray-700 pointer-events-none"
            style={{
              left: `${tooltipPos.x}px`,
              width: `${tooltipPos.width}px`,
              bottom: `${window.innerHeight - tooltipPos.y + 8}px`,
            }}
          >
            {infoHovered ? (
              <p className="text-gray-300">{hoveredSelector.description}</p>
            ) : (
              <p className="text-gray-300">{hoveredSelector.styles}</p>
            )}{" "}
          </div>,
          document.body
        )}
    </form>
  );
}

function ComponentEditor({
  entity,
  onSave,
}: {
  entity: ComponentEntity;
  onSave?: (data: unknown) => void;
}) {
  const [classList, setClassList] = useState<string[]>(
    entity.tailwindClassList || []
  );
  const isLocalUpdate = useRef(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [editingClass, setEditingClass] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [customClassInput, setCustomClassInput] = useState<string>("");
  const [imageWidth, setImageWidth] = useState<number>(
    Number(entity.props?.width) || 200
  );
  const [imageHeight, setImageHeight] = useState<number>(
    Number(entity.props?.height) || 200
  );
  const [imageUrl, setImageUrl] = useState<string>(
    `https://picsum.photos/${imageWidth || 200}/${imageHeight || 200}`
  );
  const [hoveredSelector, setHoveredSelector] = useState<{
    value: string;
    label: string;
    styles: string;
    description: string;
  } | null>(null);
  const [infoHovered, setInfoHovered] = useState(false);

  const [tooltipPos, setTooltipPos] = useState<{
    x: number;
    y: number;
    width: number;
  } | null>(null);

  console.log("ComponentEditor: Component type:", entity.type);
  console.log("ComponentEditor: entity.tailwindClassList:", entity.tailwindClassList);
  console.log("ComponentEditor: classList state:", classList);

  // Sync classList with entity changes (only if change came from outside)
  useEffect(() => {
    console.log("ComponentEditor useEffect: isLocalUpdate.current =", isLocalUpdate.current);
    console.log("ComponentEditor useEffect: entity.tailwindClassList =", entity.tailwindClassList);
    if (!isLocalUpdate.current) {
      console.log("ComponentEditor useEffect: Syncing from entity");
      setClassList(entity.tailwindClassList || []);
    } else {
      console.log("ComponentEditor useEffect: Skipping sync (local update)");
    }
    isLocalUpdate.current = false;
  }, [entity.tailwindClassList]);

  // Filter selectors based on component type
  const getFilteredSelectors = () => {
    if (entity.type === "Image") {
      // For images, show only relevant categories
      const imageRelevantCategories = [
        "Layout", // Aspect Ratio, Object Fit, Object Position
        "Sizing", // Width, Height, Min/Max dimensions
        "Borders", // Border styles and widths
        "Effects", // Shadows, opacity, filters
      ];
      
      return groupedSelectors
        .filter((category) => imageRelevantCategories.includes(category.category))
        .map((category) => {
          if (category.category === "Layout") {
            // Only show image-specific layout properties
            return {
              ...category,
              groups: category.groups.filter((group) =>
                ["Aspect Ratio", "Object Fit", "Object Position"].includes(group.section)
              ),
            };
          }
          return category;
        })
        .filter((category) => category.groups.length > 0);
    }
    // For other components, return all selectors
    return groupedSelectors;
  };

  const filteredSelectors = getFilteredSelectors();

  const toggleClass = (value: string) => {
    isLocalUpdate.current = true;
    setClassList((prev) => {
      const newClassList = prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value];
      
      // When adding a new class with angle brackets (not square brackets), enter edit mode automatically
      // This is for placeholder values like <color> or <size>, not for arbitrary values like [100px]
      const hasAngleBrackets = value.includes('<') || value.includes('>');
      const hasSquareBrackets = value.includes('[') || value.includes(']');
      if (!prev.includes(value) && hasAngleBrackets && !hasSquareBrackets) {
        setEditingClass(value);
        setEditValue(value);
      }
      
      // Update global state immediately
      const updatedData = {
        type: entity.type,
        props: entity.props,
        tailwindClassList: newClassList,
      };
      onSave?.(updatedData);
      
      return newClassList;
    });
  };

  const removeTailwindClass = (className: string) => {
    isLocalUpdate.current = true;
    setClassList((prev) => {
      const newClassList = prev.filter((c) => c !== className);
      
      // Update global state immediately
      const updatedData = {
        type: entity.type,
        props: entity.props,
        tailwindClassList: newClassList,
      };
      onSave?.(updatedData);
      
      return newClassList;
    });
    if (editingClass === className) {
      setEditingClass(null);
      setEditValue("");
    }
  };

  const startEditing = (className: string) => {
    setEditingClass(className);
    setEditValue(className);
  };

  const saveEdit = (oldClassName: string) => {
    if (editValue.trim() && editValue !== oldClassName) {
      isLocalUpdate.current = true;
      const updatedClassList = classList.map((c) =>
        c === oldClassName ? editValue.trim() : c
      );
      setClassList(updatedClassList);
      
      // Update global state immediately
      const updatedData = {
        type: entity.type,
        props: entity.props,
        tailwindClassList: updatedClassList,
      };
      onSave?.(updatedData);
    }
    setEditingClass(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingClass(null);
    setEditValue("");
  };

  const addCustomClass = () => {
    const trimmedClass = customClassInput.trim();
    console.log("ComponentEditor: addCustomClass called with:", trimmedClass);
    console.log("ComponentEditor: current classList:", classList);
    console.log("ComponentEditor: current entity.tailwindClassList:", entity.tailwindClassList);
    if (trimmedClass) {
      isLocalUpdate.current = true;
      setClassList((prev) => {
        console.log("ComponentEditor: setClassList callback, prev:", prev);
        // Don't add if already exists
        if (prev.includes(trimmedClass)) {
          console.log("ComponentEditor: Class already exists, skipping");
          return prev;
        }
        
        const newClassList = [...prev, trimmedClass];
        console.log("ComponentEditor: newClassList:", newClassList);
        
        // Update global state immediately
        const updatedData = {
          type: entity.type,
          props: entity.props,
          tailwindClassList: newClassList,
        };
        console.log("ComponentEditor: Adding custom class, saving:", updatedData);
        onSave?.(updatedData);
        
        return newClassList;
      });
      
      setCustomClassInput("");
    }
  };

  const handleCustomClassKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomClass();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImageUrl(`https://picsum.photos/${imageWidth}/${imageHeight}`);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [imageWidth, imageHeight]);

  // Update the component in global state when imageUrl changes
  useEffect(() => {
    if (entity.type === "Image" && imageUrl) {
      // Check if the URL or dimensions actually changed to avoid infinite loops
      const currentSrc = entity.props?.src as string | undefined;
      const currentWidth = Number(entity.props?.width) || 200;
      const currentHeight = Number(entity.props?.height) || 200;
      
      if (currentSrc !== imageUrl || currentWidth !== imageWidth || currentHeight !== imageHeight) {
        const updatedData = {
          type: entity.type,
          props: {
            ...entity.props,
            src: imageUrl,
            width: imageWidth,
            height: imageHeight,
          },
          tailwindClassList: classList,
        };
        onSave?.(updatedData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl, imageWidth, imageHeight]);

  const getComponentSpecificProps = () => {
    switch (entity.type) {
      case "Button":
        return (
          <div>
            <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
              Button Text
            </label>
            <input
              type="text"
              value={(entity.props?.text as string) || ""}
              onChange={(e) => {
                const updatedData = {
                  type: entity.type,
                  props: { ...entity.props, text: e.target.value },
                  tailwindClassList: classList,
                };
                onSave?.(updatedData);
              }}
              placeholder="Click me"
              className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
            />
          </div>
        );
      case "Text":
        return (
          <div>
            <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
              Text Content
            </label>
            <textarea
              value={(entity.props?.text as string) || ""}
              onChange={(e) => {
                const updatedData = {
                  type: entity.type,
                  props: { ...entity.props, text: e.target.value },
                  tailwindClassList: classList,
                };
                onSave?.(updatedData);
              }}
              rows={3}
              placeholder="Enter your text here"
              className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent resize-none"
            />
          </div>
        );
      case "Input":
        return (
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
                Placeholder
              </label>
              <input
                type="text"
                value={(entity.props?.placeholder as string) || ""}
                onChange={(e) => {
                  const updatedData = {
                    type: entity.type,
                    props: { ...entity.props, placeholder: e.target.value },
                    tailwindClassList: classList,
                  };
                  onSave?.(updatedData);
                }}
                placeholder="Enter placeholder text"
                className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
                Input Type
              </label>
              <select
                value={(entity.props?.type as string) || "text"}
                onChange={(e) => {
                  const updatedData = {
                    type: entity.type,
                    props: { ...entity.props, type: e.target.value },
                    tailwindClassList: classList,
                  };
                  onSave?.(updatedData);
                }}
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
      case "Image":
        return (
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
                Image Source (URL)
              </label>
              <p className="w-full rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))] px-3 py-2 text-sm text-start text-[rgb(var(--color-foreground))]">
                {imageUrl}
              </p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
                Alt Text (Accessibility)
              </label>
              <input
                type="text"
                value={(entity.props?.alt as string) || ""}
                onChange={(e) => {
                  const updatedData = {
                    type: entity.type,
                    props: { ...entity.props, alt: e.target.value },
                    tailwindClassList: classList,
                  };
                  onSave?.(updatedData);
                }}
                placeholder="Description of the image"
                className="w-full rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
                Expected Image Resolution
              </label>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[rgb(var(--color-muted-foreground))]">
                      Width
                    </span>
                    <span className="text-sm font-medium text-[rgb(var(--color-foreground))]">
                      {imageWidth}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={imageWidth}
                    onChange={(e) => setImageWidth(Number(e.target.value))}
                    className="w-full h-2 bg-[rgb(var(--color-muted))] rounded-lg appearance-none cursor-pointer accent-[rgb(var(--color-primary))]"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[rgb(var(--color-muted-foreground))]">
                      Height
                    </span>
                    <span className="text-sm font-medium text-[rgb(var(--color-foreground))]">
                      {imageHeight}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={imageHeight}
                    onChange={(e) => setImageHeight(Number(e.target.value))}
                    className="w-full h-2 bg-[rgb(var(--color-muted))] rounded-lg appearance-none cursor-pointer accent-[rgb(var(--color-primary))]"
                  />
                </div>
              </div>
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
    <div className="space-y-6">
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

        {/* Current classes */}
        {classList.length > 0 && (
          <div className="space-y-2 mb-4">
            <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
              Current classes:
            </p>
            <div className="flex flex-wrap gap-2">
              {classList.map((className) => (
                <div
                  key={className}
                  className="flex items-center space-x-2 rounded-full bg-[rgb(var(--color-muted))] px-3 py-1 text-sm"
                >
                  {editingClass === className ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={() => saveEdit(className)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          saveEdit(className);
                        } else if (e.key === 'Escape') {
                          cancelEdit();
                        }
                      }}
                      onFocus={(e) => e.target.select()}
                      autoFocus
                      className="bg-transparent text-[rgb(var(--color-foreground))] outline-none border-b border-[rgb(var(--color-border))] focus:border-[rgb(var(--color-primary))] min-w-[100px]"
                    />
                  ) : (
                    <span 
                      className="text-[rgb(var(--color-foreground))] cursor-pointer hover:underline"
                      onClick={() => startEditing(className)}
                    >
                      {className}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => removeTailwindClass(className)}
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
          <p className="text-sm text-[rgb(var(--color-muted-foreground))] py-4 mb-4 text-center border border-dashed border-[rgb(var(--color-border))] rounded-lg">
            No Tailwind classes selected yet
          </p>
        )}

        {/* Add custom class input */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-foreground))]">
            Add Custom Class
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customClassInput}
              onChange={(e) => setCustomClassInput(e.target.value)}
              onKeyDown={handleCustomClassKeyDown}
              placeholder="e.g., max-w-[100px], hover:bg-blue-500"
              className="flex-1 rounded-lg border border-[rgb(var(--color-border))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
            />
            <Button
              type="button"
              onClick={addCustomClass}
              disabled={!customClassInput.trim()}
              className="px-4"
            >
              Add
            </Button>
          </div>
          <p className="mt-1 text-xs text-[rgb(var(--color-muted-foreground))]">
            Add any Tailwind class, including arbitrary values like [100px]
          </p>
        </div>

        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {/* Group comboboxes by category */}
          {filteredSelectors.map((category) => (
            <div key={category.category} className="space-y-2">
              <label className="text-sm font-medium text-[rgb(var(--color-foreground))]">
                {category.category}
              </label>
              {category.groups.map((group) => (
                <div key={`${category.category}-${group.section}`}>
                  <Popover
                    open={openSection === `${category.category}-${group.section}`}
                    onOpenChange={(isOpen) =>
                      setOpenSection(isOpen ? `${category.category}-${group.section}` : null)
                    }
                  >
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        role="combobox"
                        aria-expanded={openSection === `${category.category}-${group.section}`}
                        className="w-full justify-between text-left"
                      >
                        <span className="truncate">
                          {group.section}
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                  <PopoverContent
                    className="w-full p-0 animate-fade-in"
                    sideOffset={4}
                  >
                    <Command>
                      <CommandInput
                        placeholder={`Search ${group.section}...`}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-none focus:shadow-none focus-visible:outline-none"
                      />
                      <CommandList className="max-h-[300px] overflow-y-auto">
                        <CommandEmpty>No class found.</CommandEmpty>
                        <CommandGroup>
                          {group.selectors.map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.value}
                              onSelect={() => {
                                toggleClass(option.value);
                                setOpenSection(null);
                                setHoveredSelector(null);
                                setTooltipPos(null);
                              }}
                              onMouseEnter={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                setHoveredSelector(option);
                                setTooltipPos({
                                  x: rect.left,
                                  y: rect.top,
                                  width: rect.width,
                                });
                              }}
                              onMouseLeave={() => {
                                setHoveredSelector(null);
                                setTooltipPos(null);
                              }}
                              className="justify-between"
                            >
                              <div className="flex items-center">
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    classList.includes(option.value)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {option.label}
                              </div>
                              <button
                                type="button"
                                onMouseEnter={(e) => {
                                  setInfoHovered(true);
                                  const rect = e.currentTarget
                                    .closest('[role="option"]')
                                    ?.getBoundingClientRect();
                                  if (rect) {
                                    setHoveredSelector(option);
                                    setTooltipPos({
                                      x: rect.left,
                                      y: rect.top,
                                      width: rect.width,
                                    });
                                  }
                                }}
                                onMouseLeave={() => {
                                  setInfoHovered(false);
                                  setHoveredSelector(null);
                                  setTooltipPos(null);
                                }}
                                className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
                              >
                                <Info className="h-3 w-3" />
                              </button>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            ))}
            </div>
          ))}
        </div>
      </div>

      {hoveredSelector &&
        tooltipPos &&
        createPortal(
          <div
            className="fixed z-100 rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-xl border border-gray-700 pointer-events-none"
            style={{
              left: `${tooltipPos.x}px`,
              width: `${tooltipPos.width}px`,
              bottom: `${window.innerHeight - tooltipPos.y + 8}px`,
            }}
          >
            {infoHovered ? (
              <p className="text-gray-300">{hoveredSelector.description}</p>
            ) : (
              <p className="text-gray-300">{hoveredSelector.styles}</p>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}
