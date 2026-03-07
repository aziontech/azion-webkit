# Azion Design System Documentation Platform

A product-grade documentation platform for the Azion Design System, built with Astro and Vue.

## Overview

This documentation platform serves as the central hub for the Azion Design System, providing:

- **Component Documentation**: Comprehensive docs for all Vue components
- **Design Foundations**: Principles, tokens, and guidelines
- **Interactive Demos**: Live component previews with code examples
- **Accessibility Guidelines**: WCAG compliance information

## Tech Stack

- **[Astro](https://astro.build/)**: Static site generator with Islands architecture
- **[Vue 3](https://vuejs.org/)**: Interactive components via Astro integration
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first styling

## Architecture

### Key Decisions

1. **Astro without Starlight**: We built a custom documentation platform instead of using Starlight to have full control over layout, behavior, and custom components.

2. **Islands Architecture**: Vue components are hydrated selectively using Astro's Islands pattern:
   - `client:load` for immediately interactive components
   - `client:visible` for below-fold content
   - `client:only` for heavy interactive features

3. **Content Collections**: All documentation content is managed through Astro's Content Collections with Zod schema validation.

4. **Monorepo Integration**: The docs app consumes Design System packages via workspace protocol (`workspace:*`).

### Directory Structure

```
apps/docs/
├── src/
│   ├── components/
│   │   └── docs/           # Documentation UI components
│   │       ├── PageHeader.vue
│   │       ├── StatusBadge.vue
│   │       ├── MetadataLinks.vue
│   │       ├── DemoPreview.vue
│   │       └── CodeBlock.astro
│   │
│   ├── content/            # Markdown content
│   │   ├── config.ts       # Content collection schemas
│   │   ├── components/     # Component documentation
│   │   └── get-started/    # Getting started guides
│   │
│   ├── layouts/
│   │   ├── DocsLayout.astro      # Base layout
│   │   └── ComponentPage.astro   # Component page template
│   │
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── components/           # Component routes
│   │   └── get-started/          # Guide routes
│   │
│   ├── lib/                # Utility functions
│   │   └── content.ts
│   │
│   └── styles/
│       └── global.css      # Global styles
│
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# From the monorepo root
pnpm install
```

### Development

```bash
# Start development server
pnpm docs:dev

# Or from this directory
pnpm dev
```

### Build

```bash
# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Content Authoring

### Creating a Component Page

1. Create a new markdown file in `src/content/components/`:

```markdown
---
title: ComponentName
description: Brief description of the component.
type: component
category: form
status: stable
since: 1.0.0
figma: https://figma.com/...
storybook: https://storybook.azion.com/...
source: https://github.com/aziontech/webkit/...
---

## Overview

Description of the component...

## Examples

<DemoPreview title="Example title">
  <!-- Component demo HTML -->
</DemoPreview>

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propName` | `string` | - | Description |
```

2. The page will automatically be available at `/components/[slug]`.

### Frontmatter Schema

All component pages require:

```yaml
title: string           # Component name
description: string     # Brief description
type: component         # Page type
category: string        # Component category
```

Optional fields:

```yaml
status: stable | beta | deprecated | planned | experimental
since: string           # Version introduced
figma: string           # Figma link
storybook: string       # Storybook link
source: string          # Source code link
related: string[]       # Related components
```

## Documentation Components

### PageHeader

Displays page title, status, and metadata links.

```astro
<PageHeader
  title="Button"
  description="Primary action trigger"
  status="stable"
  since="1.0.0"
  source="https://github.com/..."
  figma="https://figma.com/..."
/>
```

### DemoPreview

Renders component demos with optional code display.

```markdown
<DemoPreview title="Basic example">
  <button class="btn">Click me</button>
</DemoPreview>
```

### StatusBadge

Shows component status with appropriate styling.

```astro
<StatusBadge status="stable" />
```

### CodeBlock

Syntax-highlighted code with copy functionality.

```astro
<CodeBlock code={codeString} language="vue" />
```

## Integration with Design System Packages

The docs app is prepared to consume Design System packages:

```json
{
  "dependencies": {
    "@aziontech/icons": "workspace:*",
    "@aziontech/components": "workspace:*",
    "@aziontech/theme": "workspace:*"
  }
}
```

Currently, only `@aziontech/icons` is available. When other packages are ready:

1. Import components in markdown:

```markdown
---
title: Button
---

import { Button } from '@aziontech/components';

<DemoPreview>
  <Button variant="primary">Click me</Button>
</DemoPreview>
```

2. Use theme tokens in Tailwind config:

```javascript
import tokens from '@aziontech/theme/tokens';
```

## Future Features

The following features are planned but not yet implemented:

- **Versioning**: Support for multiple documentation versions
- **i18n**: Multilingual support (English, Portuguese)
- **Search**: Custom search engine with MiniSearch
- **Playground**: Interactive component playground

See the [Architecture Document](../../plans/ds-docs-architecture.md) for the complete roadmap.

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

## License

MIT License - see [LICENSE](../../LICENSE) for details.
