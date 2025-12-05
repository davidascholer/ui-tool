# Data Model: Drag-and-Drop UI Builder

## Entities

- Page
  - id: string
  - name: string
  - meta?: { title?: string, description?: string }
  - children: Container[]

- Container
  - id: string
  - name: string
  - tailwindClassList: string[]
  - children: Component[]

- Component
  - id: string
  - type: 'Button' | 'Input' | 'Card' | 'Text' | 'Image' | 'List'
  - props: Record<string, unknown>
  - tailwindClassList: string[]

- Selection
  - entityType: 'Page' | 'Container' | 'Component'
  - entityId: string

- CodeView
  - mode: 'react' | 'react-native'

- string[] (Tailwind class list)
  - classList: string[]
  - theme?: { primary?: string, secondary?: string, accent?: string }

## Validation Rules (zod)

- Page must contain 0..n Containers.
- Container must contain 0..n Components.
- Component placement: only inside Container.
- string[] (Tailwind class list) classList entries must be valid Tailwind utility tokens (basic validation via allowlist per component type).

## State Transitions

- Create Page → Add Container(s) → Add Component(s) → Edit options → Export code → Save/Reset.
- Select entity → Edit/Delete → Update hierarchy.
