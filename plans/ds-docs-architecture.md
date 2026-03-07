# Azion Design System Documentation Platform Architecture

> A comprehensive blueprint for building a product-grade design system documentation platform using Astro.

---

## Table of Contents

1. [Recommended Architecture](#1-recommended-architecture)
2. [Monorepo Folder Structure](#2-monorepo-folder-structure)
3. [Content Model](#3-content-model)
4. [Page Templates and Information Architecture](#4-page-templates-and-information-architecture)
5. [Documentation-Specific Component System](#5-documentation-specific-component-system)
6. [Vue Integration Strategy](#6-vue-integration-strategy)
7. [Theming and Design Token Integration](#7-theming-and-design-token-integration)
8. [Versioning Strategy](#8-versioning-strategy)
9. [i18n Strategy](#9-i18n-strategy)
10. [Search Engine Architecture](#10-search-engine-architecture)
11. [Playground Architecture](#11-playground-architecture)
12. [Delivery Roadmap](#12-delivery-roadmap)
13. [Risks and Technical Debt Prevention](#13-risks-and-technical-debt-prevention)
14. [Recommended Engineering Conventions](#14-recommended-engineering-conventions)
15. [Suggested MVP Scope](#15-suggested-mvp-scope)

---

## 1. Recommended Architecture

### Why Astro is Appropriate

Astro is the optimal foundation for this documentation platform for several strategic reasons:

**Content-First Architecture**
- Astro treats markdown as a first-class citizen with built-in content collections
- File-based routing aligns naturally with documentation information architecture
- Zero JavaScript by default means fast page loads for content-heavy pages

**Framework Agnostic Islands**
- The Islands architecture allows embedding interactive Vue components within static content
- Only components that need interactivity get hydrated
- Perfect for documentation where most content is static but demos need interactivity

**Build Performance**
- Astro's build process is optimized for content-heavy sites
- Partial hydration means smaller bundles compared to full SPA frameworks
- Excellent for monorepo CI/CD where build time matters

**Markdown Extensions**
- Native support for markdown components via the `components` prop
- Custom components can be mapped to markdown elements
- Supports MDX-like syntax without MDX complexity

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Astro Application                         │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Content   │  │   Layouts   │  │   Documentation UI      │  │
│  │  Collections│  │   System    │  │   Components            │  │
│  │  (Markdown) │  │             │  │   (Vue + Astro)         │  │
│  └──────┬──────┘  └──────┬──────┘  └────────────┬────────────┘  │
│         │                │                      │               │
│         └────────────────┼──────────────────────┘               │
│                          │                                      │
│                          ▼                                      │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Page Templates                        │    │
│  │   ComponentPage / FoundationPage / TokenPage / etc.     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                          │                                      │
└──────────────────────────┼──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Design System Packages                        │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   @azion/   │  │   @azion/   │  │      @azion/            │  │
│  │   theme     │  │   icons     │  │      components         │  │
│  │  (tokens)   │  │  (icons)    │  │      (Vue)              │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Integration Strategy

**Markdown with Inline Components**

Astro's content collections support custom components inside markdown through the `<Content />` component's `components` prop:

```astro
---
// src/pages/[...slug].astro
import { getCollection } from 'astro:content';
import CustomDemo from '@/components/docs/Demo.vue';
import PropsTable from '@/components/docs/PropsTable.astro';

const { entry } = Astro.props;
const { Content } = await entry.render();

const components = {
  Demo: CustomDemo,
  PropsTable: PropsTable,
};
---

<Content components={components} />
```

**Markdown authoring example:**

```markdown
---
title: Button
description: Primary action trigger component
status: stable
---

import { Demo } from '@/components/docs';
import { Button } from '@aziontech/components';

# Button

Buttons trigger actions and events.

<Demo>
  <Button variant="primary">Click me</Button>
</Demo>
```

### Separation of Concerns

| Layer | Responsibility | Location |
|-------|---------------|----------|
| Content | Markdown files with frontmatter | `content/` |
| Documentation UI | Docs-specific components (previews, tables) | `src/components/docs/` |
| Design System | Real Vue components | `packages/components/` |
| Theme | Tokens, design variables | `packages/theme/` |
| Layouts | Page structure, navigation | `src/layouts/` |

### Monorepo Package Consumption

The docs app consumes internal packages via workspace protocol:

```json
{
  "dependencies": {
    "@aziontech/icons": "workspace:*",
    "@aziontech/components": "workspace:*",
    "@aziontech/theme": "workspace:*"
  }
}
```

This ensures:
- Always uses latest local changes during development
- Published versions used in production builds
- Proper dependency resolution in the monorepo

---

## 2. Monorepo Folder Structure

### Complete Directory Structure

```
apps/ds-docs/
├── astro.config.mjs                 # Astro configuration
├── package.json                      # Package manifest
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.js                # Tailwind configuration (extends root)
│
├── public/                           # Static assets
│   ├── favicon.ico
│   └── fonts/
│
├── src/
│   ├── env.d.ts                      # Environment type declarations
│   │
│   ├── components/                   # Documentation UI components
│   │   ├── docs/                     # Docs-specific components
│   │   │   ├── page-header/
│   │   │   │   ├── PageHeader.vue
│   │   │   │   └── index.ts
│   │   │   ├── status-badge/
│   │   │   │   ├── StatusBadge.vue
│   │   │   │   └── index.ts
│   │   │   ├── demo-preview/
│   │   │   │   ├── DemoPreview.vue
│   │   │   │   ├── DemoPreview.astro
│   │   │   │   └── index.ts
│   │   │   ├── code-block/
│   │   │   │   ├── CodeBlock.astro
│   │   │   │   └── index.ts
│   │   │   ├── props-table/
│   │   │   │   ├── PropsTable.astro
│   │   │   │   └── index.ts
│   │   │   ├── slots-table/
│   │   │   │   ├── SlotsTable.astro
│   │   │   │   └── index.ts
│   │   │   ├── events-table/
│   │   │   │   ├── EventsTable.astro
│   │   │   │   └── index.ts
│   │   │   ├── token-table/
│   │   │   │   ├── TokenTable.astro
│   │   │   │   └── index.ts
│   │   │   ├── anatomy-block/
│   │   │   │   ├── AnatomyBlock.vue
│   │   │   │   └── index.ts
│   │   │   ├── do-dont/
│   │   │   │   ├── DoDont.vue
│   │   │   │   └── index.ts
│   │   │   ├── callout/
│   │   │   │   ├── Callout.astro
│   │   │   │   └── index.ts
│   │   │   ├── tabs/
│   │   │   │   ├── Tabs.vue
│   │   │   │   ├── Tab.vue
│   │   │   │   └── index.ts
│   │   │   ├── related-links/
│   │   │   │   ├── RelatedLinks.astro
│   │   │   │   └── index.ts
│   │   │   ├── metadata-links/
│   │   │   │   ├── MetadataLinks.astro
│   │   │   │   └── index.ts
│   │   │   └── index.ts              # Barrel export
│   │   │
│   │   └── ui/                       # Shared UI primitives
│   │       ├── button/
│   │       ├── input/
│   │       └── index.ts
│   │
│   ├── layouts/                      # Page layouts
│   │   ├── BaseLayout.astro
│   │   ├── ComponentLayout.astro
│   │   ├── FoundationLayout.astro
│   │   ├── TokenLayout.astro
│   │   └── PlaygroundLayout.astro
│   │
│   ├── pages/                        # File-based routing
│   │   ├── index.astro               # Homepage
│   │   ├── [lang]/                   # i18n routing
│   │   │   ├── index.astro
│   │   │   ├── get-started/
│   │   │   │   └── [...slug].astro
│   │   │   ├── foundations/
│   │   │   │   └── [...slug].astro
│   │   │   ├── tokens/
│   │   │   │   └── [...slug].astro
│   │   │   ├── components/
│   │   │   │   └── [...slug].astro
│   │   │   ├── blocks/
│   │   │   │   └── [...slug].astro
│   │   │   ├── patterns/
│   │   │   │   └── [...slug].astro
│   │   │   ├── templates/
│   │   │   │   └── [...slug].astro
│   │   │   ├── icons/
│   │   │   │   └── index.astro
│   │   │   ├── playground/
│   │   │   │   └── index.astro
│   │   │   └── contributing/
│   │   │       └── [...slug].astro
│   │   └── [version]/                # Version routing (wraps lang)
│   │       └── [lang]/
│   │           └── ...
│   │
│   ├── styles/                       # Global styles
│   │   ├── global.css
│   │   ├── prose.css                 # Typography for markdown
│   │   └── tokens.css                # CSS custom properties
│   │
│   ├── utils/                        # Utility functions
│   │   ├── content.ts                # Content helpers
│   │   ├── navigation.ts             # Navigation generation
│   │   ├── search.ts                 # Search utilities
│   │   └── i18n.ts                   # i18n helpers
│   │
│   └── integrations/                 # Astro integrations
│       ├── vue.ts
│       └── search-indexer.ts
│
├── content/                          # Markdown content
│   ├── config.ts                     # Content collection schemas
│   │
│   ├── en/                           # English content
│   │   ├── get-started/
│   │   │   ├── index.md
│   │   │   ├── installation.md
│   │   │   └── quick-start.md
│   │   ├── foundations/
│   │   │   ├── index.md
│   │   │   ├── color.md
│   │   │   ├── typography.md
│   │   │   ├── spacing.md
│   │   │   ├── elevation.md
│   │   │   └── motion.md
│   │   ├── tokens/
│   │   │   ├── index.md
│   │   │   ├── color-tokens.md
│   │   │   ├── typography-tokens.md
│   │   │   └── spacing-tokens.md
│   │   ├── components/
│   │   │   ├── index.md
│   │   │   ├── button.md
│   │   │   ├── input.md
│   │   │   ├── select.md
│   │   │   └── ...
│   │   ├── blocks/
│   │   │   ├── index.md
│   │   │   └── ...
│   │   ├── patterns/
│   │   │   ├── index.md
│   │   │   └── ...
│   │   ├── templates/
│   │   │   ├── index.md
│   │   │   └── ...
│   │   ├── icons/
│   │   │   └── index.md
│   │   ├── playground/
│   │   │   └── index.md
│   │   └── contributing/
│   │       ├── index.md
│   │       ├── guidelines.md
│   │       └── pull-requests.md
│   │
│   └── pt/                           # Portuguese content
│       └── (mirrors en/ structure)
│
├── data/                             # Generated/manifest data
│   ├── navigation.json               # Navigation structure
│   ├── component-meta.json           # Component metadata
│   ├── token-manifest.json           # Token data
│   └── search-index/
│       ├── en.json
│       └── pt.json
│
├── playground/                       # Playground infrastructure
│   ├── controls/                     # Control components
│   │   ├── BooleanControl.vue
│   │   ├── SelectControl.vue
│   │   ├── TextControl.vue
│   │   └── NumberControl.vue
│   ├── registry/                     # Component registry
│   │   └── index.ts
│   └── preview/                      # Preview rendering
│       └── PreviewRenderer.vue
│
├── scripts/                          # Build scripts
│   ├── generate-navigation.ts
│   ├── generate-search-index.ts
│   └── extract-component-meta.ts
│
└── i18n/                             # i18n configuration
    ├── config.json
    ├── en.json                       # UI strings
    └── pt.json                       # UI strings
```

### Key Directory Purposes

| Directory | Purpose |
|-----------|---------|
| `src/components/docs/` | Documentation-specific UI components that render inside markdown pages |
| `src/components/ui/` | Primitive UI components used by docs app (not DS components) |
| `src/layouts/` | Page structure templates that wrap content |
| `src/pages/` | Astro file-based routing with dynamic routes for i18n/versioning |
| `content/` | All markdown content organized by language |
| `data/` | Generated manifests and search indices |
| `playground/` | Interactive playground infrastructure |
| `i18n/` | UI string translations (not content) |

---

## 3. Content Model

### Content Collection Schema

```typescript
// content/config.ts
import { defineCollection, z } from 'astro:content';

// Base frontmatter schema (shared across all page types)
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(['stable', 'beta', 'deprecated', 'planned', 'experimental']).optional(),
  version: z.string().optional(),          // Added in version
  deprecatedIn: z.string().optional(),     // Deprecated in version
  removedIn: z.string().optional(),        // Removed in version
  since: z.string().optional(),            // Available since version
  contributors: z.array(z.string()).optional(),
  lastUpdated: z.date().optional(),
});

// Component page schema
const componentSchema = baseSchema.extend({
  type: z.literal('component'),
  category: z.enum(['form', 'navigation', 'feedback', 'data-display', 'layout', 'utility']),
  component: z.string(),                   // Component name for import
  source: z.string().optional(),           // Source code link
  storybook: z.string().optional(),        // Storybook link
  figma: z.string().optional(),            // Figma link
  related: z.array(z.string()).optional(), // Related component names
  anatomy: z.array(z.object({
    label: z.string(),
    description: z.string().optional(),
  })).optional(),
  accessibility: z.object({
    keyboard: z.array(z.object({
      keys: z.string(),
      action: z.string(),
    })).optional(),
    aria: z.array(z.object({
      attribute: z.string(),
      usage: z.string(),
    })).optional(),
  }).optional(),
});

// Foundation page schema
const foundationSchema = baseSchema.extend({
  type: z.literal('foundation'),
  category: z.enum(['color', 'typography', 'spacing', 'elevation', 'motion', 'imagery']),
});

// Token page schema
const tokenSchema = baseSchema.extend({
  type: z.literal('token'),
  category: z.enum(['color', 'typography', 'spacing', 'elevation', 'motion', 'border', 'shadow']),
  tokens: z.array(z.object({
    name: z.string(),
    value: z.string(),
    description: z.string().optional(),
  })).optional(),
});

// Block page schema
const blockSchema = baseSchema.extend({
  type: z.literal('block'),
  category: z.string(),
  components: z.array(z.string()).optional(), // Components used in block
});

// Pattern page schema
const patternSchema = baseSchema.extend({
  type: z.literal('pattern'),
  category: z.string(),
  useCases: z.array(z.string()).optional(),
});

// Template page schema
const templateSchema = baseSchema.extend({
  type: z.literal('template'),
  category: z.string(),
  blocks: z.array(z.string()).optional(),
});

// Getting started page schema
const guideSchema = baseSchema.extend({
  type: z.literal('guide'),
  category: z.enum(['installation', 'quick-start', 'migration', 'contribution']),
  prerequisites: z.array(z.string()).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
});

// Icon page schema
const iconSchema = baseSchema.extend({
  type: z.literal('icon'),
  category: z.enum(['azionicons', 'primeicons']),
});

// Contributing page schema
const contributingSchema = baseSchema.extend({
  type: z.literal('contributing'),
  category: z.enum(['guidelines', 'development', 'documentation', 'pull-requests']),
});

// Define collections
const components = defineCollection({
  type: 'content',
  schema: componentSchema,
});

const foundations = defineCollection({
  type: 'content',
  schema: foundationSchema,
});

const tokens = defineCollection({
  type: 'content',
  schema: tokenSchema,
});

const blocks = defineCollection({
  type: 'content',
  schema: blockSchema,
});

const patterns = defineCollection({
  type: 'content',
  schema: patternSchema,
});

const templates = defineCollection({
  type: 'content',
  schema: templateSchema,
});

const getStarted = defineCollection({
  type: 'content',
  schema: guideSchema,
});

const icons = defineCollection({
  type: 'content',
  schema: iconSchema,
});

const contributing = defineCollection({
  type: 'content',
  schema: contributingSchema,
});

export const collections = {
  components,
  foundations,
  tokens,
  blocks,
  patterns,
  templates,
  'get-started': getStarted,
  icons,
  contributing,
};
```

### Frontmatter Examples

**Component Page:**

```yaml
---
title: Button
description: Buttons trigger actions and events when users interact with them.
type: component
category: form
status: stable
since: 1.0.0
component: Button
source: https://github.com/aziontech/webkit/tree/main/packages/components/src/Button
storybook: https://storybook.azion.com/?path=/story/components-button
figma: https://figma.com/file/xxx/azion-design-system?node-id=123
related:
  - ButtonGroup
  - IconButton
  - Link
anatomy:
  - label: Container
    description: The button's clickable area with background and border
  - label: Label
    description: The text content of the button
  - label: Icon (optional)
    description: An optional icon for visual emphasis
accessibility:
  keyboard:
    - keys: Enter
      action: Activates the button
    - keys: Space
      action: Activates the button
  aria:
    - attribute: aria-disabled
      usage: When disabled, use instead of disabled attribute for screen readers
---
```

**Foundation Page:**

```yaml
---
title: Color
description: Color system for Azion Design System including semantic and primitive colors.
type: foundation
category: color
status: stable
since: 1.0.0
---
```

**Token Page:**

```yaml
---
title: Color Tokens
description: Semantic color tokens for consistent theming across applications.
type: token
category: color
status: stable
since: 1.0.0
tokens:
  - name: --color-primary
    value: "#0066CC"
    description: Primary brand color for main actions
  - name: --color-primary-hover
    value: "#0052A3"
    description: Primary color hover state
---
```

### Markdown Authoring Conventions

**1. Import Statements at Top**

All imports must be at the top of the markdown file, immediately after frontmatter:

```markdown
---
title: Button
---

import { Demo } from '@/components/docs';
import { Button, ButtonGroup } from '@aziontech/components';

# Button
```

**2. Heading Hierarchy**

- H1 (`#`) is reserved for page title (auto-generated from frontmatter)
- H2 (`##`) for major sections
- H3 (`###`) for subsections
- Never skip heading levels

**3. Component Demos**

Demos are inline and self-contained:

```markdown
## Examples

### Primary Button

<Demo>
  <Button variant="primary">Primary Action</Button>
</Demo>

### Secondary Button

<Demo>
  <Button variant="secondary">Secondary Action</Button>
</Demo>
```

**4. Code Blocks**

Use fenced code blocks with language specification:

````markdown
```vue
<Button variant="primary">Click me</Button>
```
````

**5. Callouts**

```markdown
<Callout type="info">
  This component requires the theme package to be installed.
</Callout>

<Callout type="warning">
  Deprecated in v2.0. Use ButtonV2 instead.
</Callout>
```

**6. Do/Don't Patterns**

```markdown
<DoDont>
  <Do>
    Use buttons for primary actions.
    <Demo><Button>Submit</Button></Demo>
  </Do>
  <Dont>
    Use buttons for navigation.
    <Demo><Button>Go to page</Button></Demo>
  </Dont>
</DoDont>
```

### Content Consistency Rules

**Required Sections by Page Type:**

| Page Type | Required Sections |
|-----------|------------------|
| Component | Overview, When to use, Examples, API |
| Foundation | Overview, Principles, Values |
| Token | Overview, Usage, Token Reference |
| Block | Overview, When to use, Composition, Examples |
| Pattern | Overview, Problem, Solution, Examples |
| Template | Overview, Use Cases, Composition |

**Prohibited Patterns:**

1. **No inline styles in markdown** - Use components with props
2. **No raw HTML** - Use markdown syntax or components
3. **No hardcoded values** - Reference tokens
4. **No duplicate content** - Use links to canonical sources
5. **No undocumented demos** - Every demo needs context

### Scalable Content Authoring

**Component Registry Pattern:**

Instead of importing components in every markdown file, use a registry:

```typescript
// src/utils/component-registry.ts
import { Button, Input, Select } from '@aziontech/components';

export const componentRegistry = {
  Button,
  Input,
  Select,
};

export type ComponentName = keyof typeof componentRegistry;
```

**Demo Component with Registry:**

```vue
<!-- src/components/docs/demo-preview/DemoPreview.vue -->
<script setup lang="ts">
import { componentRegistry } from '@/utils/component-registry';

const props = defineProps<{
  component?: string;
}>();
</script>

<template>
  <div class="demo-preview">
    <slot />
  </div>
</template>
```

---

## 4. Page Templates and Information Architecture

### Navigation Structure

```
Get Started
├── Introduction
├── Installation
├── Quick Start
└── Migration

Foundations
├── Color
├── Typography
├── Spacing
├── Elevation
├── Motion
└── Imagery

Tokens
├── Color Tokens
├── Typography Tokens
├── Spacing Tokens
├── Border Tokens
└── Shadow Tokens

Components
├── Form
│   ├── Button
│   ├── Input
│   ├── Select
│   └── ...
├── Navigation
│   ├── Tabs
│   ├── Breadcrumb
│   └── ...
├── Feedback
│   ├── Alert
│   ├── Toast
│   └── ...
└── Data Display
    ├── Table
    ├── Card
    └── ...

Blocks
├── Headers
├── Forms
├── Cards
└── ...

Patterns
├── Form Patterns
├── Navigation Patterns
└── ...

Templates
├── Dashboard
├── Settings Page
└── ...

Icons
└── Icon Gallery

Playground
└── Component Playground

Contributing
├── Guidelines
├── Development
├── Documentation
└── Pull Requests
```

### Page Template Definitions

#### Component Page

**Purpose:** Document a single Design System component with comprehensive API reference.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Sidebar Navigation    │    Main Content Area               │
│                         │                                    │
│  - Get Started          │  ┌──────────────────────────────┐  │
│  - Foundations          │  │ Page Header                  │  │
│  - Tokens               │  │ Button         [stable]      │  │
│  - Components           │  │ Description...               │  │
│    - Form               │  │ [Source] [Storybook] [Figma] │  │
│      - Button           │  └──────────────────────────────┘  │
│      - Input            │                                    │
│      - Select           │  ┌──────────────────────────────┐  │
│    - Navigation         │  │ Tabs: Overview | API         │  │
│    ...                  │  └──────────────────────────────┘  │
│                         │                                    │
│                         │  Overview Tab Content:             │
│                         │  - When to use                     │
│                         │  - Anatomy                         │
│                         │  - Examples                        │
│                         │  - States                          │
│                         │  - Accessibility                  │
│                         │  - Related                        │
│                         │                                    │
└─────────────────────────────────────────────────────────────┘
```

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, status, description, metadata links |
| Tabs | Yes | Overview / API tabs |
| When to Use | Yes | Use cases and scenarios |
| Anatomy | Yes | Visual breakdown of component parts |
| Examples | Yes | Interactive demos with code |
| States | Recommended | Visual states (hover, focus, disabled, etc.) |
| Accessibility | Yes | Keyboard navigation, ARIA attributes |
| API | Yes | Props, slots, events tables |
| Related | Recommended | Links to related components |

**Required Metadata:**

```yaml
title: string
description: string
type: component
category: string
status: stable | beta | deprecated | planned
component: string
```

**Optional Metadata:**

```yaml
source: string
storybook: string
figma: string
related: string[]
since: string
deprecatedIn: string
```

---

#### Foundation Page

**Purpose:** Document design principles and guidelines for foundational concepts.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Sidebar Navigation    │    Main Content Area               │
│                         │                                    │
│                         │  ┌──────────────────────────────┐  │
│                         │  │ Page Header                  │  │
│                         │  │ Color                        │  │
│                         │  │ Description...               │  │
│                         │  └──────────────────────────────┘  │
│                         │                                    │
│                         │  ## Principles                     │
│                         │  Content about principles...       │
│                         │                                    │
│                         │  ## System                         │
│                         │  Color system explanation...       │
│                         │                                    │
│                         │  ## Usage                          │
│                         │  Guidelines for usage...           │
│                         │                                    │
│                         │  ## Token Reference                │
│                         │  Link to token page...             │
│                         │                                    │
└─────────────────────────────────────────────────────────────┘
```

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description |
| Principles | Yes | Core design principles |
| System | Yes | How the system works |
| Usage | Yes | Practical guidelines |
| Token Reference | Recommended | Link to related tokens |

**Required Metadata:**

```yaml
title: string
description: string
type: foundation
category: string
```

---

#### Token Page

**Purpose:** Document design tokens with values and usage guidelines.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Sidebar Navigation    │    Main Content Area               │
│                         │                                    │
│                         │  ┌──────────────────────────────┐  │
│                         │  │ Page Header                  │  │
│                         │  │ Color Tokens                 │  │
│                         │  └──────────────────────────────┘  │
│                         │                                    │
│                         │  ## Overview                       │
│                         │  Token overview...                 │
│                         │                                    │
│                         │  ## Usage                          │
│                         │  How to use tokens...              │
│                         │                                    │
│                         │  ## Token Reference                │
│                         │  ┌────────────────────────────┐   │
│                         │  │ Token Table                │   │
│                         │  │ Name | Value | Description │   │
│                         │  └────────────────────────────┘   │
│                         │                                    │
└─────────────────────────────────────────────────────────────┘
```

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description |
| Overview | Yes | Token category overview |
| Usage | Yes | How to use tokens in code |
| Token Reference | Yes | Table of all tokens |

**Required Metadata:**

```yaml
title: string
description: string
type: token
category: string
```

---

#### Block Page

**Purpose:** Document composite UI blocks built from multiple components.

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description, status |
| Overview | Yes | What the block does |
| When to Use | Yes | Appropriate use cases |
| Composition | Yes | Components that make up the block |
| Examples | Yes | Interactive demos |
| API | Recommended | Customization options |

---

#### Pattern Page

**Purpose:** Document recurring design patterns and solutions.

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description |
| Overview | Yes | Pattern overview |
| Problem | Yes | What problem it solves |
| Solution | Yes | How the pattern works |
| Examples | Yes | Real implementations |
| Related | Recommended | Related patterns |

---

#### Template Page

**Purpose:** Document full page templates.

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description |
| Overview | Yes | Template overview |
| Use Cases | Yes | When to use this template |
| Composition | Yes | Blocks and components used |
| Examples | Yes | Preview and code |

---

#### Icon Page

**Purpose:** Display and document the icon library.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Sidebar Navigation    │    Main Content Area               │
│                         │                                    │
│                         │  ┌──────────────────────────────┐  │
│                         │  │ Page Header                  │  │
│                         │  │ Icons                        │  │
│                         │  └──────────────────────────────┘  │
│                         │                                    │
│                         │  ┌──────────────────────────────┐  │
│                         │  │ Search Bar                   │  │
│                         │  └──────────────────────────────┘  │
│                         │                                    │
│                         │  ┌──────────────────────────────┐  │
│                         │  │ Icon Grid                    │  │
│                         │  │ [icon] [icon] [icon] [icon]  │  │
│                         │  │ [icon] [icon] [icon] [icon]  │  │
│                         │  └──────────────────────────────┘  │
│                         │                                    │
└─────────────────────────────────────────────────────────────┘
```

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description |
| Search | Yes | Filter icons by name |
| Icon Grid | Yes | Visual display of all icons |
| Usage Guide | Yes | How to use icons |

---

#### Playground Page

**Purpose:** Interactive component playground for experimentation.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Component Select      │    Preview Area                    │
│  [Button ▼]            │                                    │
│                         │  ┌──────────────────────────────┐  │
│  Controls               │  │                              │  │
│  ┌───────────────────┐  │  │    [Button Preview]          │  │
│  │ Variant: [select] │  │  │                              │  │
│  │ Size: [select]    │  │  └──────────────────────────────┘  │
│  │ Disabled: [bool]  │  │                                    │
│  │ Label: [text]     │  │  Code Output                       │
│  └───────────────────┘  │  ┌──────────────────────────────┐  │
│                         │  │ <Button variant="primary">   │  │
│                         │  │   Click me                   │  │
│                         │  │ </Button>                    │  │
│                         │  └──────────────────────────────┘  │
│                         │                                    │
└─────────────────────────────────────────────────────────────┘
```

---

#### Getting Started Page

**Purpose:** Onboarding and quick start guides.

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description |
| Prerequisites | Recommended | Required setup |
| Steps | Yes | Numbered instructions |
| Next Steps | Recommended | Where to go next |

---

#### Contributing Page

**Purpose:** Contribution guidelines and processes.

**Sections:**

| Section | Required | Description |
|---------|----------|-------------|
| Page Header | Yes | Title, description |
| Guidelines | Yes | Contribution rules |
| Process | Yes | Step-by-step process |
| Code Standards | Yes | Coding conventions |

---

## 5. Documentation-Specific Component System

### Component Categories

```
Documentation Components
├── Page Structure
│   ├── PageHeader
│   ├── MetadataLinks
│   └── RelatedLinks
├── Status & Versioning
│   ├── StatusBadge
│   └── VersionBadge
├── Navigation
│   ├── Tabs
│   └── TableOfContents
├── Demo & Code
│   ├── DemoPreview
│   ├── CodeBlock
│   └── LiveEditor
├── API Reference
│   ├── PropsTable
│   ├── SlotsTable
│   ├── EventsTable
│   └── TokenTable
├── Visual Documentation
│   ├── AnatomyBlock
│   ├── DoDont
│   └── Swatch
├── Callouts
│   ├── Callout
│   └── AccessibilityChecklist
└── Playground
    ├── PlaygroundControls
    └── PreviewRenderer
```

### Component Specifications

#### PageHeader

**Responsibility:** Display page title, status, description, and metadata links.

**Props:**

```typescript
interface PageHeaderProps {
  title: string;
  description: string;
  status?: 'stable' | 'beta' | 'deprecated' | 'planned' | 'experimental';
  version?: string;
  metadataLinks?: {
    source?: string;
    storybook?: string;
    figma?: string;
    design?: string;
  };
}
```

**Usage in Markdown:**

```markdown
---
title: Button
description: Buttons trigger actions...
status: stable
---

<!-- PageHeader is auto-rendered by layout -->
```

**Reusability:** Used by all page templates via layout components.

---

#### StatusBadge

**Responsibility:** Display component status with appropriate styling.

**Props:**

```typescript
interface StatusBadgeProps {
  status: 'stable' | 'beta' | 'deprecated' | 'planned' | 'experimental';
  version?: string;
}
```

**Visual States:**

| Status | Color | Icon |
|--------|-------|------|
| stable | green | checkmark |
| beta | blue | beaker |
| deprecated | orange | warning |
| planned | gray | clock |
| experimental | purple | flask |

---

#### MetadataLinks

**Responsibility:** Display links to external resources (source, Storybook, Figma).

**Props:**

```typescript
interface MetadataLinksProps {
  source?: string;
  storybook?: string;
  figma?: string;
  design?: string;
}
```

---

#### Tabs

**Responsibility:** Tabbed navigation for content sections.

**Props:**

```typescript
interface TabsProps {
  defaultTab?: string;
  persistKey?: string;  // For URL persistence
}
```

**Usage:**

```markdown
<Tabs defaultTab="overview">
  <Tab id="overview" label="Overview">
    Overview content...
  </Tab>
  <Tab id="api" label="API">
    API content...
  </Tab>
</Tabs>
```

---

#### DemoPreview

**Responsibility:** Render component demos with optional code display.

**Props:**

```typescript
interface DemoPreviewProps {
  title?: string;
  showCode?: boolean;
  codeLanguage?: string;
  responsive?: boolean;
  backgroundColor?: string;
}
```

**Usage:**

```markdown
<DemoPreview title="Primary Button" showCode>
  <Button variant="primary">Click me</Button>
</DemoPreview>
```

**Hydration Strategy:** Client-side hydration for interactive demos.

---

#### CodeBlock

**Responsibility:** Syntax-highlighted code display with copy functionality.

**Props:**

```typescript
interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showCopy?: boolean;
  showLineNumbers?: boolean;
}
```

---

#### PropsTable

**Responsibility:** Display component props in a structured table.

**Props:**

```typescript
interface PropsTableProps {
  component: string;  // Component name to look up
  props?: PropDefinition[];  // Or explicit props
}

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required: boolean;
  description: string;
}
```

**Usage:**

```markdown
<PropsTable component="Button" />
```

**Data Source:** Extracted from component TypeScript definitions or JSDoc comments.

---

#### SlotsTable

**Responsibility:** Display component slots documentation.

**Props:**

```typescript
interface SlotsTableProps {
  component: string;
  slots?: SlotDefinition[];
}

interface SlotDefinition {
  name: string;
  description: string;
  props?: string;  // Props available in slot scope
}
```

---

#### EventsTable

**Responsibility:** Display component events documentation.

**Props:**

```typescript
interface EventsTableProps {
  component: string;
  events?: EventDefinition[];
}

interface EventDefinition {
  name: string;
  payload: string;  // Type definition
  description: string;
}
```

---

#### TokenTable

**Responsibility:** Display design tokens with values and descriptions.

**Props:**

```typescript
interface TokenTableProps {
  category: string;  // Token category to display
  tokens?: TokenDefinition[];
}

interface TokenDefinition {
  name: string;
  value: string;
  cssVariable: string;
  description?: string;
}
```

---

#### AnatomyBlock

**Responsibility:** Visual breakdown of component anatomy with labeled parts.

**Props:**

```typescript
interface AnatomyBlockProps {
  image: string;  // Anatomy diagram
  parts: AnatomyPart[];
}

interface AnatomyPart {
  label: string;
  description?: string;
  position: { x: number; y: number };  // For annotation placement
}
```

---

#### DoDont

**Responsibility:** Display do's and don'ts side by side.

**Props:**

```typescript
interface DoDontProps {
  // No props, uses slots
}
```

**Usage:**

```markdown
<DoDont>
  <Do>
    Use for primary actions.
    <Demo><Button>Submit</Button></Demo>
  </Do>
  <Dont>
    Use for navigation.
    <Demo><Button>Go to page</Button></Demo>
  </Dont>
</DoDont>
```

---

#### Callout

**Responsibility:** Highlight important information.

**Props:**

```typescript
interface CalloutProps {
  type: 'info' | 'warning' | 'error' | 'success' | 'tip';
  title?: string;
}
```

**Usage:**

```markdown
<Callout type="warning" title="Deprecation Notice">
  This component is deprecated. Use ButtonV2 instead.
</Callout>
```

---

#### RelatedLinks

**Responsibility:** Display links to related content.

**Props:**

```typescript
interface RelatedLinksProps {
  links: RelatedLink[];
}

interface RelatedLink {
  title: string;
  description?: string;
  href: string;
  type?: 'component' | 'pattern' | 'foundation' | 'external';
}
```

---

#### AccessibilityChecklist

**Responsibility:** Display accessibility requirements checklist.

**Props:**

```typescript
interface AccessibilityChecklistProps {
  items: AccessibilityItem[];
}

interface AccessibilityItem {
  requirement: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  status?: 'pass' | 'fail' | 'na';
}
```

---

### Component Interaction with Markdown

All documentation components are registered with Astro's markdown renderer:

```typescript
// src/utils/markdown-components.ts
import PageHeader from '@/components/docs/page-header/PageHeader.vue';
import StatusBadge from '@/components/docs/status-badge/StatusBadge.vue';
import DemoPreview from '@/components/docs/demo-preview/DemoPreview.vue';
import CodeBlock from '@/components/docs/code-block/CodeBlock.astro';
import PropsTable from '@/components/docs/props-table/PropsTable.astro';
import Callout from '@/components/docs/callout/Callout.astro';
import DoDont from '@/components/docs/do-dont/DoDont.vue';
import Tabs from '@/components/docs/tabs/Tabs.vue';
import Tab from '@/components/docs/tabs/Tab.vue';

export const markdownComponents = {
  PageHeader,
  StatusBadge,
  Demo: DemoPreview,
  CodeBlock,
  PropsTable,
  Callout,
  DoDont,
  Tabs,
  Tab,
};
```

---

## 6. Vue Integration Strategy

### Rendering Strategy

Astro supports Vue components through the `@astrojs/vue` integration. The key is understanding when to use server-side rendering vs. client-side hydration.

**Decision Matrix:**

| Component Type | Rendering | Hydration | Reason |
|---------------|-----------|-----------|--------|
| PageHeader | Server | None | Static content |
| StatusBadge | Server | None | Static display |
| DemoPreview | Server | `client:load` | Interactive |
| CodeBlock | Server | `client:visible` | Copy button |
| PropsTable | Server | None | Static data |
| Tabs | Server | `client:load` | Interactive |
| Callout | Server | None | Static content |
| Playground | Server | `client:only` | Highly interactive |

### Hydration Directives

```astro
---
import DemoPreview from '@/components/docs/demo-preview/DemoPreview.vue';
import PropsTable from '@/components/docs/props-table/PropsTable.astro';
---

<!-- Interactive: loads and hydrates immediately -->
<DemoPreview client:load>
  <Button>Click me</Button>
</DemoPreview>

<!-- Interactive when visible: hydrates when in viewport -->
<CodeBlock client:visible code={code} />

<!-- No hydration: server-rendered only -->
<PropsTable component="Button" />

<!-- Client-only: no server rendering, only client -->
<Playground client:only="vue" />
```

### Vue Component Wrapper Pattern

For Design System Vue components used in markdown:

```typescript
// src/components/docs/demo-preview/DemoPreview.vue
<script setup lang="ts">
import { useSlots, provide } from 'vue';

const props = defineProps<{
  title?: string;
  showCode?: boolean;
  responsive?: boolean;
}>();

const slots = useSlots();

// Provide context for nested components
provide('demoContext', {
  showCode: props.showCode,
});
</script>

<template>
  <div class="demo-preview">
    <div v-if="title" class="demo-preview__title">
      {{ title }}
    </div>
    <div class="demo-preview__content">
      <slot />
    </div>
    <div v-if="showCode" class="demo-preview__code">
      <!-- Code display logic -->
    </div>
  </div>
</template>
```

### Performance Considerations

**1. Minimize Hydration**

Only hydrate components that need interactivity:

```astro
<!-- Bad: Hydrates everything -->
<ComponentWrapper client:load>
  <StaticContent />
  <InteractiveButton />
</ComponentWrapper>

<!-- Good: Hydrate only what's needed -->
<StaticContent />
<InteractiveButton client:load />
```

**2. Use `client:visible` for Below-fold Content**

```astro
<!-- Hydrates only when scrolled into view -->
<CodeBlock client:visible code={code} />
```

**3. Use `client:only` for Heavy Interactive Components**

```astro
<!-- Skip server rendering for complex playground -->
<Playground client:only="vue" />
```

### Compatibility Strategy for Unready Components

**Problem:** Not all DS components exist yet.

**Solution: Placeholder/Stub System**

```typescript
// src/utils/component-registry.ts
import { defineAsyncComponent } from 'vue';

// Real components (when available)
import { Button } from '@aziontech/components';

// Stub components for planned/in-progress
const Input = defineAsyncComponent(() =>
  import('@/components/stubs/InputStub.vue')
);

const Select = defineAsyncComponent(() =>
  import('@/components/stubs/SelectStub.vue')
);

export const componentRegistry = {
  // Available
  Button,
  
  // Planned/In-progress (stubs)
  Input,
  Select,
  
  // Planned (not started)
  DatePicker: null,  // Shows "Coming Soon" placeholder
};

export function getComponent(name: string) {
  const component = componentRegistry[name];
  
  if (component === null) {
    return () => import('@/components/stubs/PlannedStub.vue');
  }
  
  if (component === undefined) {
    return () => import('@/components/stubs/UnknownStub.vue');
  }
  
  return component;
}
```

**Stub Component Example:**

```vue
<!-- src/components/stubs/InputStub.vue -->
<script setup lang="ts">
const props = defineProps<{
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<template>
  <div class="stub-component" data-stub="Input">
    <div class="stub-component__badge">
      ⚠️ Stub Component
    </div>
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="stub-input"
    />
  </div>
</template>

<style scoped>
.stub-component {
  position: relative;
}

.stub-component__badge {
  position: absolute;
  top: -1.5rem;
  right: 0;
  font-size: 0.75rem;
  color: orange;
}
</style>
```

---

## 7. Theming and Design Token Integration

### Dependency Strategy

**Phase 1: No Theme Package (Current)**

Use local tokens and Tailwind configuration:

```javascript
// apps/ds-docs/tailwind.config.js
import { primitiveColors } from 'azion-theme/src/tokens/colors-primitive';

export default {
  theme: {
    extend: {
      colors: {
        ...primitiveColors,
        // Docs-specific colors
        'docs-primary': '#0066CC',
        'docs-surface': '#FFFFFF',
      },
    },
  },
};
```

**Phase 2: Theme Package Available**

```javascript
// apps/ds-docs/tailwind.config.js
import tokens from '@aziontech/theme/tokens';

export default {
  presets: [
    require('@aziontech/theme/tailwind-preset'),
  ],
  theme: {
    extend: {
      // Docs-specific overrides only
    },
  },
};
```

### Token Usage Strategy

**CSS Custom Properties:**

```css
/* src/styles/tokens.css */
:root {
  /* From theme package */
  --color-primary: var(--azion-color-primary, #0066CC);
  --color-secondary: var(--azion-color-secondary, #6B7280);
  
  /* Docs-specific tokens */
  --docs-sidebar-width: 280px;
  --docs-content-max-width: 800px;
  --docs-header-height: 64px;
}
```

**Tailwind Integration:**

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      spacing: {
        'docs-sidebar': 'var(--docs-sidebar-width)',
        'docs-header': 'var(--docs-header-height)',
      },
    },
  },
};
```

### Consistency Enforcement

**1. Use Semantic Tokens, Not Primitives**

```css
/* Bad: Using primitive colors directly */
.button {
  background-color: #0066CC;
}

/* Good: Using semantic tokens */
.button {
  background-color: var(--color-primary);
}
```

**2. Token Documentation Sync**

```typescript
// scripts/sync-tokens.ts
import { readFileSync, writeFileSync } from 'fs';
import tokens from '@aziontech/theme/tokens';

// Generate token documentation
const tokenDocs = Object.entries(tokens).map(([name, value]) => ({
  name,
  value,
  cssVariable: `--${name.replace(/\./g, '-')}`,
}));

writeFileSync(
  'data/token-manifest.json',
  JSON.stringify(tokenDocs, null, 2)
);
```

**3. Visual Regression Testing**

Use visual regression tests to ensure docs styling matches DS:

```typescript
// tests/visual/docs-styling.test.ts
import { test, expect } from '@playwright/test';

test('docs button matches DS button', async ({ page }) => {
  await page.goto('/components/button');
  
  // Compare docs button with reference
  const button = page.locator('.demo-preview button').first();
  expect(await button.screenshot()).toMatchSnapshot('button.png');
});
```

### Fallback Strategy

When theme package is unavailable:

```typescript
// src/utils/tokens.ts
let tokens: TokenSet;

try {
  tokens = await import('@aziontech/theme/tokens');
} catch {
  // Fallback to local tokens
  tokens = await import('@/styles/fallback-tokens');
}

export { tokens };
```

---

## 8. Versioning Strategy

### Route Model

**URL Structure:**

```
/                           → Redirects to /latest/en/
/latest/en/                 → Latest version, English
/latest/pt/                 → Latest version, Portuguese
/v1/en/components/button    → Version 1, English
/v2/en/components/button    → Version 2, English
```

**Route Parameters:**

```typescript
// src/pages/[version]/[lang]/[...slug].astro
---
const { version, lang, slug } = Astro.params;

const versionParam = version === 'latest' 
  ? await getLatestVersion() 
  : version;

const entry = await getCollection('components', ({ id }) => 
  id.startsWith(`${lang}/${slug.join('/')}`) &&
  getVersion(entry) === versionParam
);
---
```

### Content Organization Model

```
content/
├── en/                    → Current version content
│   ├── components/
│   └── ...
├── pt/                    → Current version content
│   └── ...
└── versions/              → Archived versions
    ├── v1/
    │   ├── en/
    │   └── pt/
    └── v2/
        ├── en/
        └── pt/
```

**Alternative: Branch-based Versioning**

```
main branch     → Latest documentation
v1 branch       → Version 1 documentation
v2 branch       → Version 2 documentation
```

### Version Configuration

```typescript
// src/utils/versioning.ts
export interface VersionConfig {
  name: string;
  label: string;
  path: string;
  status: 'current' | 'legacy' | 'archived';
  releaseDate: string;
  endOfLife?: string;
}

export const versions: VersionConfig[] = [
  {
    name: 'v2',
    label: 'Version 2',
    path: '/v2',
    status: 'current',
    releaseDate: '2024-01-15',
  },
  {
    name: 'v1',
    label: 'Version 1',
    path: '/v1',
    status: 'legacy',
    releaseDate: '2023-06-01',
    endOfLife: '2024-06-01',
  },
];

export function getLatestVersion(): VersionConfig {
  return versions.find(v => v.status === 'current')!;
}
```

### Navigation Across Versions

**Version Selector Component:**

```vue
<!-- src/components/docs/version-selector/VersionSelector.vue -->
<script setup lang="ts">
import { versions, getLatestVersion } from '@/utils/versioning';

const currentVersion = useCurrentVersion();
</script>

<template>
  <select v-model="currentVersion" class="version-selector">
    <option 
      v-for="version in versions" 
      :key="version.name"
      :value="version.name"
    >
      {{ version.label }}
      {{ version.status === 'current' ? '(Current)' : '' }}
      {{ version.status === 'legacy' ? '(Legacy)' : '' }}
    </option>
  </select>
</template>
```

### Search Across Versions

**Index Structure:**

```json
{
  "en": {
    "v2": { /* index */ },
    "v1": { /* index */ }
  },
  "pt": {
    "v2": { /* index */ },
    "v1": { /* index */ }
  }
}
```

**Search Behavior:**

1. Default search: Current version only
2. Option to include all versions
3. Results clearly labeled with version

### Maintenance Overhead Reduction

**1. Shared Content**

Content that doesn't change between versions is symlinked:

```bash
# In content/versions/v1/en
ln -s ../../../en/foundations foundations
```

**2. Automated Versioning**

```yaml
# .github/workflows/version-docs.yml
name: Version Documentation
on:
  release:
    types: [published]

jobs:
  version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Create version snapshot
        run: |
          cp -r content/en content/versions/${{ github.event.release.tag_name }}/en
          cp -r content/pt content/versions/${{ github.event.release.tag_name }}/pt
      
      - name: Update version config
        run: |
          # Update src/utils/versioning.ts
          
      - name: Create PR
        # ...
```

---

## 9. i18n Strategy

### Route Structure

**URL Pattern:**

```
/                    → Redirects based on browser language
/en/                 → English homepage
/pt/                 → Portuguese homepage
/en/components/      → English components
/pt/components/      → Portuguese components
```

**Astro i18n Configuration:**

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [vue()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
```

### Content Organization

```
content/
├── en/
│   ├── get-started/
│   ├── foundations/
│   ├── components/
│   └── ...
└── pt/
    ├── get-started/
    ├── foundations/
    ├── components/
    └── ...
```

### UI Strings vs Content

**UI Strings (i18n/):**

```json
// i18n/en.json
{
  "nav": {
    "getStarted": "Get Started",
    "foundations": "Foundations",
    "components": "Components"
  },
  "status": {
    "stable": "Stable",
    "beta": "Beta",
    "deprecated": "Deprecated"
  },
  "search": {
    "placeholder": "Search documentation...",
    "noResults": "No results found"
  }
}
```

```json
// i18n/pt.json
{
  "nav": {
    "getStarted": "Começar",
    "foundations": "Fundamentos",
    "components": "Componentes"
  },
  "status": {
    "stable": "Estável",
    "beta": "Beta",
    "deprecated": "Descontinuado"
  },
  "search": {
    "placeholder": "Buscar na documentação...",
    "noResults": "Nenhum resultado encontrado"
  }
}
```

**Usage in Components:**

```vue
<script setup lang="ts">
import { useI18n } from '@/utils/i18n';

const { t } = useI18n();
</script>

<template>
  <nav>
    <a href="/get-started">{{ t('nav.getStarted') }}</a>
  </nav>
</template>
```

### Translation Management

**1. Required Translations**

All content must exist in both languages:

```typescript
// content/config.ts
import { z } from 'astro:content';

const i18nSchema = z.object({
  i18nReady: z.boolean().default(false),
});

const componentSchema = baseSchema.extend({
  // ... other fields
  i18n: i18nSchema.optional(),
});
```

**2. Fallback Behavior**

```typescript
// src/utils/i18n.ts
export async function getContent(
  collection: string,
  slug: string,
  lang: string
) {
  try {
    // Try requested language
    return await getEntry(collection, `${lang}/${slug}`);
  } catch {
    // Fallback to English
    console.warn(`Content not found in ${lang}, falling back to en`);
    return await getEntry(collection, `en/${slug}`);
  }
}
```

**3. Translation Status**

```typescript
// src/utils/translation-status.ts
export function getTranslationStatus(
  collection: string,
  slug: string
): 'complete' | 'partial' | 'missing' {
  const en = getEntry(collection, `en/${slug}`);
  const pt = getEntry(collection, `pt/${slug}`);
  
  if (en && pt) return 'complete';
  if (en) return 'partial';
  return 'missing';
}
```

### Localized Search

**Index per Language:**

```typescript
// scripts/generate-search-index.ts
import { getCollection } from 'astro:content';

const languages = ['en', 'pt'];

for (const lang of languages) {
  const entries = await getCollection('components', ({ id }) => 
    id.startsWith(lang)
  );
  
  const index = buildIndex(entries);
  
  writeFileSync(
    `data/search-index/${lang}.json`,
    JSON.stringify(index)
  );
}
```

**Search with Language Filter:**

```typescript
// src/utils/search.ts
export async function search(
  query: string,
  lang: string,
  options?: { version?: string }
) {
  const index = await loadIndex(lang, options?.version);
  return index.search(query);
}
```

### Maintainability Over Time

**1. Translation Workflow**

```yaml
# .github/workflows/translation-check.yml
name: Translation Check
on: [pull_request]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Check for missing translations
        run: |
          node scripts/check-translations.js
          
      - name: Comment on PR
        if: failure()
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '⚠️ Some content is missing Portuguese translations.'
            })
```

**2. Translation Status Dashboard**

```typescript
// src/pages/admin/translations.astro
---
const collections = ['components', 'foundations', 'tokens'];
const status = {};

for (const collection of collections) {
  const en = await getCollection(collection, ({ id }) => id.startsWith('en'));
  const pt = await getCollection(collection, ({ id }) => id.startsWith('pt'));
  
  status[collection] = {
    en: en.length,
    pt: pt.length,
    coverage: (pt.length / en.length) * 100,
  };
}
---

<table>
  <tr>
    <th>Collection</th>
    <th>English</th>
    <th>Portuguese</th>
    <th>Coverage</th>
  </tr>
  {Object.entries(status).map(([name, data]) => (
    <tr>
      <td>{name}</td>
      <td>{data.en}</td>
      <td>{data.pt}</td>
      <td>{data.coverage}%</td>
    </tr>
  ))}
</table>
```

---

## 10. Search Engine Architecture

### Phase 1: Simple Client-Side Search

**Architecture:**

```
Build Time                          Runtime
┌─────────────────┐                ┌─────────────────┐
│ Content Files   │                │ Browser         │
│ (Markdown)      │                │                 │
└────────┬────────┘                │  ┌───────────┐  │
         │                         │  │ Search    │  │
         ▼                         │  │ Index     │  │
┌─────────────────┐                │  │ (JSON)   │  │
│ Build Script    │                │  └─────┬─────┘  │
│ - Parse MD      │                │        │        │
│ - Extract text  │                │        ▼        │
│ - Index fields  │                │  ┌───────────┐  │
└────────┬────────┘                │  │ MiniSearch│  │
         │                         │  │ (Library) │  │
         ▼                         │  └───────────┘  │
┌─────────────────┐                └─────────────────┘
│ search-index.json│
└─────────────────┘
```

**Implementation:**

```typescript
// scripts/generate-search-index.ts
import { getCollection } from 'astro:content';
import MiniSearch from 'minisearch';

interface SearchDocument {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  status: string;
  url: string;
}

async function buildSearchIndex() {
  const collections = [
    'components',
    'foundations',
    'tokens',
    'blocks',
    'patterns',
  ];
  
  const documents: SearchDocument[] = [];
  
  for (const collectionName of collections) {
    const entries = await getCollection(collectionName);
    
    for (const entry of entries) {
      const { remarkPluginFrontmatter } = await entry.render();
      
      documents.push({
        id: entry.id,
        title: entry.data.title,
        description: entry.data.description,
        content: remarkPluginFrontmatter.content,
        category: entry.data.category,
        status: entry.data.status || 'stable',
        url: `/${entry.collection}/${entry.slug}`,
      });
    }
  }
  
  const miniSearch = new MiniSearch({
    fields: ['title', 'description', 'content'],
    storeFields: ['title', 'description', 'category', 'status', 'url'],
  });
  
  miniSearch.addAll(documents);
  
  // Write index
  const indexJson = JSON.stringify(miniSearch.toJSON());
  writeFileSync('public/search-index.json', indexJson);
}

buildSearchIndex();
```

**Client-Side Search:**

```vue
<!-- src/components/docs/search/SearchDialog.vue -->
<script setup lang="ts">
import MiniSearch from 'minisearch';
import { ref, onMounted } from 'vue';

const query = ref('');
const results = ref([]);
let miniSearch: MiniSearch;

onMounted(async () => {
  const response = await fetch('/search-index.json');
  const index = await response.json();
  miniSearch = MiniSearch.loadJS(index, {
    fields: ['title', 'description', 'content'],
    storeFields: ['title', 'description', 'category', 'status', 'url'],
  });
});

function search() {
  if (!query.value || !miniSearch) {
    results.value = [];
    return;
  }
  
  results.value = miniSearch.search(query.value, {
    fuzzy: 0.2,
    prefix: true,
  });
}
</script>

<template>
  <div class="search-dialog">
    <input
      v-model="query"
      @input="search"
      placeholder="Search documentation..."
    />
    <ul v-if="results.length">
      <li v-for="result in results" :key="result.id">
        <a :href="result.url">
          <span class="title">{{ result.title }}</span>
          <span class="category">{{ result.category }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
```

### Phase 2: Improved Search with Metadata

**Enhanced Indexing:**

```typescript
interface EnhancedSearchDocument {
  id: string;
  title: string;
  description: string;
  content: string;
  headings: string[];
  keywords: string[];
  category: string;
  type: string;
  status: string;
  version: string;
  lang: string;
  url: string;
  popularity: number;  // From analytics
}

async function buildEnhancedIndex() {
  // ... similar to Phase 1 but with more fields
  
  const miniSearch = new MiniSearch({
    fields: [
      'title',
      'description', 
      'content',
      'headings',
      'keywords',
    ],
    storeFields: [
      'title',
      'description',
      'category',
      'type',
      'status',
      'url',
    ],
    searchOptions: {
      boost: {
        title: 3,
        headings: 2,
        keywords: 2,
        description: 1.5,
      },
    },
  });
}
```

**Filter Support:**

```typescript
// Search with filters
function searchWithFilters(
  query: string,
  filters: {
    category?: string[];
    type?: string[];
    status?: string[];
    version?: string;
  }
) {
  return miniSearch.search(query, {
    filter: (result) => {
      if (filters.category && !filters.category.includes(result.category)) {
        return false;
      }
      if (filters.type && !filters.type.includes(result.type)) {
        return false;
      }
      if (filters.status && !filters.status.includes(result.status)) {
        return false;
      }
      return true;
    },
  });
}
```

### Phase 3: Advanced Search

**Architecture:**

```
┌─────────────────────────────────────────────────────────────┐
│                     Search Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐   │
│  │ Content      │    │ Indexer      │    │ Search API   │   │
│  │ Sources      │───▶│ Pipeline     │───▶│ (Edge)       │   │
│  └──────────────┘    └──────────────┘    └──────────────┘   │
│         │                   │                    │          │
│         │                   ▼                    ▼          │
│         │           ┌──────────────┐    ┌──────────────┐   │
│         │           │ Search Index │    │ Analytics    │   │
│         │           │ (KV Storage) │    │ & Ranking    │   │
│         │           └──────────────┘    └──────────────┘   │
│         │                   │                               │
│         ▼                   ▼                               │
│  ┌──────────────┐    ┌──────────────┐                      │
│  │ Component    │    │ Search       │                      │
│  │ Metadata     │    │ Suggestions  │                      │
│  └──────────────┘    └──────────────┘                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Features:**

1. **Typo Tolerance:** Fuzzy matching with configurable distance
2. **Synonym Support:** Map related terms
3. **Faceted Search:** Filter by multiple dimensions
4. **Relevance Ranking:** Based on popularity, recency, and match quality
5. **Search Analytics:** Track queries and clicks

**Edge Deployment (Azion):**

```typescript
// functions/api/search.ts
import { getKV } from '@azion/edge-kv';

export default async function handler(request: Request) {
  const { query, filters, lang, version } = await request.json();
  
  const kv = await getKV('search-index');
  const index = await kv.get(`${lang}/${version}/index`);
  
  const results = search(index, query, filters);
  
  // Log search for analytics
  await logSearch(query, results);
  
  return new Response(JSON.stringify(results));
}
```

---

## 11. Playground Architecture

### Component Metadata Strategy

**Metadata Schema:**

```typescript
// playground/registry/types.ts
interface ComponentMeta {
  name: string;
  importPath: string;
  description: string;
  props: PropMeta[];
  slots: SlotMeta[];
  events: EventMeta[];
  examples: ExampleMeta[];
}

interface PropMeta {
  name: string;
  type: string;
  default?: string;
  required: boolean;
  description: string;
  control: ControlType;
  controlProps?: Record<string, any>;
  options?: string[];  // For select controls
}

type ControlType = 
  | 'boolean'
  | 'text'
  | 'number'
  | 'select'
  | 'color'
  | 'object'
  | 'array';
```

**Metadata Extraction:**

```typescript
// scripts/extract-component-meta.ts
import { parse } from 'vue-docgen-api';

async function extractMeta(componentPath: string): Promise<ComponentMeta> {
  const doc = await parse(componentPath);
  
  return {
    name: doc.displayName,
    importPath: componentPath,
    description: doc.description,
    props: doc.props?.map(prop => ({
      name: prop.name,
      type: prop.type?.name || 'any',
      default: prop.defaultValue?.value,
      required: prop.required || false,
      description: prop.description || '',
      control: inferControlType(prop.type?.name),
      options: prop.type?.name === 'union' 
        ? extractUnionValues(prop.type.elements) 
        : undefined,
    })) || [],
    slots: doc.slots?.map(slot => ({
      name: slot.name,
      description: slot.description || '',
    })) || [],
    events: doc.events?.map(event => ({
      name: event.name,
      description: event.description || '',
    })) || [],
    examples: [],
  };
}

function inferControlType(type: string): ControlType {
  switch (type) {
    case 'boolean': return 'boolean';
    case 'string': return 'text';
    case 'number': return 'number';
    default:
      if (type?.includes('|')) return 'select';
      return 'text';
  }
}
```

**Registry:**

```typescript
// playground/registry/index.ts
import { Button } from '@aziontech/components';
import buttonMeta from './meta/Button.json';

export const componentRegistry: Record<string, RegisteredComponent> = {
  Button: {
    component: Button,
    meta: buttonMeta,
  },
  // ... more components
};

export function getComponent(name: string) {
  return componentRegistry[name];
}

export function getAllComponents() {
  return Object.entries(componentRegistry).map(([name, { meta }]) => ({
    name,
    description: meta.description,
  }));
}
```

### Control Components

**Base Control Interface:**

```typescript
// playground/controls/types.ts
interface ControlProps<T> {
  value: T;
  onChange: (value: T) => void;
  propMeta: PropMeta;
}
```

**Boolean Control:**

```vue
<!-- playground/controls/BooleanControl.vue -->
<script setup lang="ts">
import { Toggle } from '@aziontech/components';

const props = defineProps<{
  value: boolean;
  onChange: (value: boolean) => void;
  propMeta: PropMeta;
}>();
</script>

<template>
  <label class="control">
    <span class="control__label">{{ propMeta.name }}</span>
    <Toggle
      :modelValue="value"
      @update:modelValue="onChange"
    />
  </label>
</template>
```

**Select Control:**

```vue
<!-- playground/controls/SelectControl.vue -->
<script setup lang="ts">
import { Select } from '@aziontech/components';

const props = defineProps<{
  value: string;
  onChange: (value: string) => void;
  propMeta: PropMeta;
}>();

const options = propMeta.options?.map(opt => ({
  label: opt,
  value: opt,
})) || [];
</script>

<template>
  <label class="control">
    <span class="control__label">{{ propMeta.name }}</span>
    <Select
      :modelValue="value"
      @update:modelValue="onChange"
      :options="options"
    />
  </label>
</template>
```

**Text Control:**

```vue
<!-- playground/controls/TextControl.vue -->
<script setup lang="ts">
import { Input } from '@aziontech/components';

const props = defineProps<{
  value: string;
  onChange: (value: string) => void;
  propMeta: PropMeta;
}>();
</script>

<template>
  <label class="control">
    <span class="control__label">{{ propMeta.name }}</span>
    <Input
      :modelValue="value"
      @update:modelValue="onChange"
      :placeholder="propMeta.description"
    />
  </label>
</template>
```

### Preview Rendering

**Preview Renderer:**

```vue
<!-- playground/preview/PreviewRenderer.vue -->
<script setup lang="ts">
import { computed, h, defineComponent } from 'vue';
import { getComponent } from '../registry';

const props = defineProps<{
  componentName: string;
  propValues: Record<string, any>;
  slotContent?: string;
}>();

const componentDef = computed(() => getComponent(props.componentName));

const renderedComponent = computed(() => {
  if (!componentDef.value) return null;
  
  return h(componentDef.value.component, props.propValues, {
    default: () => props.slotContent,
  });
});
</script>

<template>
  <div class="preview-renderer">
    <component :is="renderedComponent" />
  </div>
</template>
```

### Code Snippet Generation

```typescript
// playground/utils/code-generator.ts
export function generateCode(
  componentName: string,
  propValues: Record<string, any>,
  slotContent?: string
): string {
  const props = Object.entries(propValues)
    .filter(([key, value]) => value !== undefined)
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${key}="${value}"`;
      }
      if (typeof value === 'boolean') {
        return value ? key : '';
      }
      return `:${key}="${JSON.stringify(value)}"`;
    })
    .filter(Boolean)
    .join(' ');
  
  if (slotContent) {
    return `<${componentName} ${props}>
  ${slotContent}
</${componentName}>`;
  }
  
  return `<${componentName} ${props} />`;
}
```

### Playground Page

```vue
<!-- src/pages/[lang]/playground/index.astro -->
---
import PlaygroundLayout from '@/layouts/PlaygroundLayout.astro';
import Playground from '@/playground/Playground.vue';
---

<PlaygroundLayout>
  <Playground client:only="vue" />
</PlaygroundLayout>
```

```vue
<!-- playground/Playground.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import { getAllComponents, getComponent } from './registry';
import PreviewRenderer from './preview/PreviewRenderer.vue';
import BooleanControl from './controls/BooleanControl.vue';
import SelectControl from './controls/SelectControl.vue';
import TextControl from './controls/TextControl.vue';
import { generateCode } from './utils/code-generator';

const components = getAllComponents();
const selectedComponent = ref('Button');
const propValues = ref<Record<string, any>>({});

const componentMeta = computed(() => 
  getComponent(selectedComponent.value)?.meta
);

function getControlComponent(type: string) {
  switch (type) {
    case 'boolean': return BooleanControl;
    case 'select': return SelectControl;
    default: return TextControl;
  }
}

const codeSnippet = computed(() => 
  generateCode(selectedComponent.value, propValues.value)
);
</script>

<template>
  <div class="playground">
    <aside class="playground__sidebar">
      <select v-model="selectedComponent">
        <option 
          v-for="comp in components" 
          :key="comp.name" 
          :value="comp.name"
        >
          {{ comp.name }}
        </option>
      </select>
      
      <div class="controls">
        <template v-for="prop in componentMeta?.props" :key="prop.name">
          <component
            :is="getControlComponent(prop.control)"
            :value="propValues[prop.name]"
            :onChange="(v) => propValues[prop.name] = v"
            :propMeta="prop"
          />
        </template>
      </div>
    </aside>
    
    <main class="playground__main">
      <div class="preview">
        <PreviewRenderer
          :componentName="selectedComponent"
          :propValues="propValues"
        />
      </div>
      
      <div class="code">
        <pre><code>{{ codeSnippet }}</code></pre>
      </div>
    </main>
  </div>
</template>
```

---

## 12. Delivery Roadmap

### Phase 0: Architecture Setup

**Goals:**
- Establish project foundation
- Configure build tooling
- Set up monorepo integration

**Deliverables:**
- [ ] Initialize Astro project in `apps/ds-docs/`
- [ ] Configure `package.json` with workspace dependencies
- [ ] Set up TypeScript configuration
- [ ] Configure Tailwind CSS extending root config
- [ ] Set up ESLint and Prettier
- [ ] Create basic folder structure
- [ ] Configure Astro with Vue integration
- [ ] Set up content collections schema

**Risks:**
- Astro/Vue integration issues
- Tailwind configuration conflicts

**Dependencies:**
- None

**Definition of Done:**
- `pnpm dev` starts development server
- Basic page renders with Tailwind styles
- Content collections are configured

---

### Phase 1: Docs Shell and Content Engine

**Goals:**
- Build the documentation shell
- Implement content rendering
- Create basic navigation

**Deliverables:**
- [ ] Base layout with header and sidebar
- [ ] Navigation component
- [ ] Content collection rendering
- [ ] Markdown component integration
- [ ] Basic routing structure
- [ ] Homepage

**Risks:**
- Navigation complexity
- Markdown rendering issues

**Dependencies:**
- Phase 0 complete

**Definition of Done:**
- Navigation renders correctly
- Markdown pages render with components
- Routing works for all content types

---

### Phase 2: Documentation Component System

**Goals:**
- Build all documentation UI components
- Establish component patterns

**Deliverables:**
- [ ] PageHeader component
- [ ] StatusBadge component
- [ ] MetadataLinks component
- [ ] Tabs component
- [ ] DemoPreview component
- [ ] CodeBlock component
- [ ] PropsTable component
- [ ] SlotsTable component
- [ ] EventsTable component
- [ ] TokenTable component
- [ ] AnatomyBlock component
- [ ] DoDont component
- [ ] Callout component
- [ ] RelatedLinks component

**Risks:**
- Component API inconsistency
- Performance issues with many components

**Dependencies:**
- Phase 1 complete

**Definition of Done:**
- All components render correctly
- Components work in markdown
- Components are documented

---

### Phase 3: DS Package Integration

**Goals:**
- Integrate Design System packages
- Enable real component demos

**Deliverables:**
- [ ] Integrate `@aziontech/icons` package
- [ ] Integrate `@aziontech/components` package (when available)
- [ ] Integrate `@aziontech/theme` package (when available)
- [ ] Component registry system
- [ ] Stub component system for unavailable components
- [ ] Token integration

**Risks:**
- Package not ready
- Version conflicts

**Dependencies:**
- Phase 2 complete
- Icons package available

**Definition of Done:**
- Icons render in docs
- Components render in demos
- Theme tokens apply to docs

---

### Phase 4: Versioning + i18n

**Goals:**
- Implement versioning system
- Implement multilingual support

**Deliverables:**
- [ ] Version routing
- [ ] Version selector
- [ ] Versioned content structure
- [ ] i18n routing
- [ ] Language selector
- [ ] UI string translations
- [ ] Content translations (initial)

**Risks:**
- Content duplication
- Translation maintenance

**Dependencies:**
- Phase 3 complete

**Definition of Done:**
- Multiple versions accessible
- Language switching works
- Translations render correctly

---

### Phase 5: Custom Search

**Goals:**
- Implement search functionality
- Build search index

**Deliverables:**
- [ ] Search index generation
- [ ] Search UI component
- [ ] Search results display
- [ ] Keyboard shortcuts
- [ ] Search analytics (basic)

**Risks:**
- Performance with large index
- Search relevance

**Dependencies:**
- Phase 4 complete

**Definition of Done:**
- Search returns relevant results
- Search works across languages
- Search works across versions

---

### Phase 6: Interactive Playground

**Goals:**
- Build component playground
- Enable live editing

**Deliverables:**
- [ ] Component selector
- [ ] Props controls
- [ ] Live preview
- [ ] Code snippet generation
- [ ] Preset examples

**Risks:**
- Complex component support
- Performance

**Dependencies:**
- Phase 5 complete
- Components package available

**Definition of Done:**
- Playground renders components
- Controls update preview
- Code snippets are accurate

---

### Phase 7: Quality, Governance, and Automation

**Goals:**
- Ensure quality
- Automate processes
- Enable governance

**Deliverables:**
- [ ] Visual regression tests
- [ ] Content validation scripts
- [ ] Translation status dashboard
- [ ] Automated versioning workflow
- [ ] Performance monitoring
- [ ] Accessibility audits
- [ ] Documentation guidelines

**Risks:**
- Test flakiness
- Process overhead

**Dependencies:**
- Phase 6 complete

**Definition of Done:**
- Tests pass consistently
- Automation runs on CI
- Guidelines are documented

---

## 13. Risks and Technical Debt Prevention

### Risk 1: Content Inconsistency

**Description:** Different authors write documentation differently, leading to inconsistent structure, tone, and quality.

**Prevention:**
- Strict frontmatter schema validation
- Required sections per page type
- Content templates
- Linting for markdown structure
- PR review checklist

**Implementation:**

```typescript
// scripts/validate-content.ts
import { getCollection } from 'astro:content';

const requiredSections: Record<string, string[]> = {
  component: ['Overview', 'When to use', 'Examples', 'API'],
  foundation: ['Overview', 'Principles', 'Usage'],
  token: ['Overview', 'Usage', 'Token Reference'],
};

async function validateContent() {
  const issues: string[] = [];
  
  for (const [collection, sections] of Object.entries(requiredSections)) {
    const entries = await getCollection(collection);
    
    for (const entry of entries) {
      const { headings } = await entry.render();
      const headingTexts = headings.map(h => h.text);
      
      for (const section of sections) {
        if (!headingTexts.includes(section)) {
          issues.push(
            `${entry.id}: Missing required section "${section}"`
          );
        }
      }
    }
  }
  
  if (issues.length) {
    console.error('Content validation failed:');
    issues.forEach(issue => console.error(`  - ${issue}`));
    process.exit(1);
  }
}
```

---

### Risk 2: Overuse of Inline Custom Logic in Markdown

**Description:** Authors embed complex logic directly in markdown, making content hard to maintain and debug.

**Prevention:**
- Limited component set for markdown
- No raw HTML in markdown
- No inline scripts
- Complex logic moved to components
- Code review guidelines

**Implementation:**

```typescript
// astro.config.mjs
export default defineConfig({
  markdown: {
    // Disable raw HTML
    rehypePlugins: [
      ['rehype-raw', { passThrough: [] }],
    ],
  },
});
```

---

### Risk 3: Tight Coupling Between Docs and DS Internals

**Description:** Documentation depends on internal implementation details, breaking when DS changes.

**Prevention:**
- Use public APIs only
- Component registry abstraction
- Versioned documentation
- Integration tests
- Semantic versioning

**Implementation:**

```typescript
// src/utils/component-registry.ts
// Only import from published packages, never from src/
import { Button } from '@aziontech/components';
// NOT: import { Button } from '../../../packages/components/src/Button';
```

---

### Risk 4: Broken Scalability for i18n/Versioning

**Description:** Adding languages or versions becomes exponentially harder as content grows.

**Prevention:**
- Content structure designed for scale
- Automated translation workflows
- Translation status tracking
- Shared content where possible
- Version automation

**Implementation:**

```yaml
# .github/workflows/sync-translations.yml
name: Sync Translations
on:
  push:
    paths:
      - 'content/en/**'

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Create translation tasks
        # Create issues for missing translations
```

---

### Risk 5: Performance Issues from Excessive Hydration

**Description:** Too many interactive components cause slow page loads and poor UX.

**Prevention:**
- Hydration budget per page
- Use `client:visible` for below-fold
- Use `client:only` for isolated features
- Performance monitoring
- Lighthouse CI

**Implementation:**

```typescript
// astro.config.mjs
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue'],
            'docs-components': [
              './src/components/docs/demo-preview',
              './src/components/docs/tabs',
            ],
          },
        },
      },
    },
  },
});
```

---

### Risk 6: Documentation Components Becoming Ungoverned

**Description:** Documentation components proliferate without clear ownership or standards.

**Prevention:**
- Component inventory
- Clear ownership model
- Component documentation
- Deprecation process
- Regular audits

**Implementation:**

```typescript
// src/components/docs/index.ts
// Central registry of all documentation components
export const docsComponents = {
  // Page Structure
  PageHeader: () => import('./page-header'),
  MetadataLinks: () => import('./metadata-links'),
  
  // Status
  StatusBadge: () => import('./status-badge'),
  
  // ... all components listed
};

// Type-safe component access
export type DocsComponentName = keyof typeof docsComponents;
```

---

## 14. Recommended Engineering Conventions

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files (components) | PascalCase | `PageHeader.vue` |
| Files (utilities) | kebab-case | `content-helpers.ts` |
| Directories | kebab-case | `page-header/` |
| Vue components | PascalCase | `<PageHeader />` |
| Astro components | PascalCase | `<CodeBlock />` |
| Props | camelCase | `showCode` |
| Events | kebab-case | `@update:value` |
| CSS classes | BEM | `.page-header__title` |
| CSS variables | kebab-case | `--docs-sidebar-width` |
| Frontmatter fields | camelCase | `componentName` |
| Content files | kebab-case | `button.md` |

### Folder Conventions

```
src/components/docs/[component-name]/
├── [ComponentName].vue       # Main component
├── [ComponentName].astro     # Astro version (if needed)
├── index.ts                  # Barrel export
├── types.ts                  # TypeScript types
└── [ComponentName].test.ts   # Tests
```

### Content File Conventions

```
content/[lang]/[collection]/
├── index.md                  # Collection landing page
├── [item-slug].md            # Individual item
└── [category]/
    ├── index.md
    └── [item-slug].md
```

### Frontmatter Field Conventions

**Required Fields (All Pages):**

```yaml
title: string           # Page title
description: string     # SEO description
type: string            # Page type (component, foundation, etc.)
```

**Optional Fields (Standard):**

```yaml
status: string          # Component status
since: string           # Version introduced
contributors: string[]  # Contributors
lastUpdated: date       # Last update date
```

### Markdown Authoring Constraints

**Allowed:**
- Standard markdown syntax
- Imported components
- Fenced code blocks with language
- Frontmatter metadata

**Prohibited:**
- Raw HTML blocks
- Inline `<script>` tags
- Inline `<style>` tags
- Complex JavaScript expressions
- Direct DOM manipulation

### Reusable Component Boundaries

**When to create a new docs component:**
1. Used in 3+ different pages
2. Has clear, single responsibility
3. Has consistent API across use cases
4. Benefits from isolation and testing

**When NOT to create:**
1. One-off usage
2. Simple presentation that markdown handles
3. Highly context-dependent rendering

### Playground Metadata Conventions

```typescript
// playground/registry/meta/[ComponentName].json
{
  "name": "Button",
  "importPath": "@aziontech/components",
  "description": "Primary action trigger component",
  "props": [
    {
      "name": "variant",
      "type": "'primary' | 'secondary' | 'ghost'",
      "default": "'primary'",
      "required": false,
      "description": "Visual style variant",
      "control": "select",
      "options": ["primary", "secondary", "ghost"]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "Button content"
    }
  ],
  "events": [
    {
      "name": "click",
      "payload": "MouseEvent",
      "description": "Fired when button is clicked"
    }
  ]
}
```

### Versioning Conventions

- **Version format:** `v{major}` (e.g., `v1`, `v2`)
- **Latest alias:** `latest` always points to current version
- **Version config:** `src/utils/versioning.ts`
- **Versioned content:** `content/versions/{version}/{lang}/`

### Translation File Conventions

```
i18n/
├── config.json           # i18n configuration
├── en.json               # English UI strings
└── pt.json               # Portuguese UI strings
```

**UI String Structure:**

```json
{
  "namespace": {
    "key": "value",
    "nested": {
      "key": "value"
    }
  }
}
```

### Search Index Generation

```typescript
// scripts/generate-search-index.ts
interface SearchIndexConfig {
  collections: string[];
  fields: string[];
  storeFields: string[];
  languages: string[];
  versions: string[];
}
```

---

## 15. Suggested MVP Scope

### MVP Philosophy

The MVP should prove the architecture is correct while delivering immediate value. It should be the smallest functional version that validates core decisions and enables iterative improvement.

### MVP Pages

**Required:**

| Page | Purpose | Priority |
|------|---------|----------|
| Homepage | Landing page with navigation | High |
| Get Started Index | Onboarding entry point | High |
| Installation Guide | Setup instructions | High |
| Foundations Index | Design principles overview | Medium |
| Color Foundation | Color system documentation | Medium |
| Components Index | Component catalog | High |
| Button Component | First documented component | High |
| Icons Gallery | Icon library browser | High |

**Postponed:**

| Page | Reason |
|------|--------|
| Tokens pages | Can link to Figma/design files initially |
| Blocks pages | Requires more components |
| Patterns pages | Requires component library maturity |
| Templates pages | Requires blocks and patterns |
| Playground | Complex feature, not essential for MVP |

### MVP Documentation Components

**Required:**

| Component | Purpose | Priority |
|-----------|---------|----------|
| PageHeader | Page title and metadata | High |
| StatusBadge | Component status indicator | High |
| DemoPreview | Component demo rendering | High |
| CodeBlock | Syntax-highlighted code | High |
| Callout | Important information highlight | Medium |
| Tabs | Content organization | Medium |
| PropsTable | API documentation | High |

**Postponed:**

| Component | Reason |
|-----------|--------|
| AnatomyBlock | Requires design assets workflow |
| DoDont | Can use simple callouts initially |
| TokenTable | Postponed with token pages |
| AccessibilityChecklist | Can be inline content initially |
| PlaygroundControls | Postponed with playground |

### MVP Features

**Included:**

- ✅ Basic navigation (sidebar + header)
- ✅ Content collection rendering
- ✅ Markdown with inline components
- ✅ Component demo rendering
- ✅ Code syntax highlighting
- ✅ Basic responsive layout
- ✅ Icon library integration
- ✅ Single language (English only initially)

**Postponed:**

- ❌ Versioning (start with single version)
- ❌ i18n (add Portuguese post-MVP)
- ❌ Search (add in Phase 5)
- ❌ Playground (add in Phase 6)
- ❌ Advanced navigation (breadcrumbs, table of contents)

### MVP Mocking Strategy

**While theme package is unavailable:**

```javascript
// apps/ds-docs/tailwind.config.js
import { primitiveColors } from 'azion-theme/src/tokens/colors-primitive';

// Use primitive colors as fallback
export default {
  theme: {
    extend: {
      colors: primitiveColors,
    },
  },
};
```

**While components package is unavailable:**

```vue
<!-- src/components/stubs/ButtonStub.vue -->
<template>
  <button class="stub-button" :class="variant">
    <slot />
  </button>
</template>

<script setup>
defineProps<{
  variant?: 'primary' | 'secondary';
}>();
</script>

<style scoped>
.stub-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
}
.stub-button.primary {
  background: #0066CC;
  color: white;
}
.stub-button.secondary {
  background: #E5E7EB;
  color: #374151;
}
</style>
```

**Icon integration (available now):**

```typescript
// Use existing @aziontech/icons package
import '@aziontech/icons';
```

### MVP Content Strategy

**Initial content:**

1. **Homepage:** Brief introduction, quick links, getting started CTA
2. **Installation:** npm/yarn/pnpm install commands, basic setup
3. **Color Foundation:** Color system overview, primitive colors, usage guidelines
4. **Button Component:** Full documentation as template for other components
5. **Icons:** Browse and search icons (leverage existing gallery)

**Content templates:**

Create templates for each page type to ensure consistency:

```
templates/
├── component.md
├── foundation.md
└── guide.md
```

### MVP Success Criteria

**Architecture Validation:**

- [ ] Astro renders pages correctly
- [ ] Vue components hydrate properly
- [ ] Markdown with components works
- [ ] Tailwind styles apply correctly
- [ ] Icons render from package
- [ ] Build completes successfully
- [ ] Development server works

**User Value:**

- [ ] Users can learn about the design system
- [ ] Users can see component examples
- [ ] Users can browse icons
- [ ] Users can copy code snippets
- [ ] Documentation is navigable

**Technical Quality:**

- [ ] No console errors
- [ ] Accessible navigation
- [ ] Mobile-responsive layout
- [ ] Fast page loads (< 3s)
- [ ] Clean URL structure

### MVP Timeline Suggestion

**Week 1-2: Foundation**
- Initialize Astro project
- Configure Tailwind
- Set up content collections
- Create base layout
- Implement navigation

**Week 3-4: Core Components**
- Build PageHeader
- Build DemoPreview
- Build CodeBlock
- Build PropsTable
- Build Callout

**Week 5-6: Content & Integration**
- Write initial content
- Integrate icons package
- Create Button documentation
- Create Color documentation
- Build Icons page

**Week 7-8: Polish & Deploy**
- Responsive design
- Accessibility review
- Performance optimization
- Deploy to staging
- Gather feedback

### Post-MVP Priorities

**Immediate (1-2 sprints):**
1. Add Portuguese translations
2. Add search functionality
3. Add more component documentation
4. Add token pages

**Short-term (2-4 sprints):**
1. Add versioning
2. Add playground
3. Add blocks/patterns
4. Integrate theme package

**Long-term (ongoing):**
1. Expand component coverage
2. Improve search
3. Add analytics
4. Automate content generation

---

## Summary

This architecture provides a comprehensive blueprint for building a product-grade design system documentation platform. Key decisions:

1. **Astro as foundation** - Optimal for content-heavy sites with interactive islands
2. **Vue for interactivity** - Aligns with DS stack, selective hydration
3. **Markdown-first content** - Scalable authoring with inline components
4. **Monorepo integration** - Workspace dependencies for packages
5. **Built-in scalability** - Versioning and i18n from day one
6. **Custom search** - Full control over indexing and UX
7. **Interactive playground** - Lightweight Storybook alternative

The phased delivery approach allows incremental value delivery while validating architecture decisions early. The MVP scope proves the core architecture while delivering immediate documentation value.

---

*Document Version: 1.0*
*Last Updated: 2026-03-07*
*Author: Architecture Team*
