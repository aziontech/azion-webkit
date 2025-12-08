# SectionTitle

A flexible section title block component with overline, title, and description. Features responsive layout with alignment options and customizable HTML heading tags.

## Features

- **Flexible Layout**: Default two-column or centered single-column layouts
- **Overline Support**: Optional overline text with Azion styling
- **Responsive Typography**: Adaptive text sizing across devices
- **Custom HTML Tags**: Configurable heading tag (h1-h6)
- **Alignment Options**: Left-aligned (default) or centered layouts
- **Bottom Spacing**: Configurable spacing for section separation

## Props

| Prop            | Type     | Required | Default     | Description                            |
| --------------- | -------- | -------- | ----------- | -------------------------------------- |
| `overline`      | `string` | No       | `''`        | Small text above title                 |
| `title`         | `string` | No       | `''`        | Main section heading                   |
| `description`   | `string` | No       | `''`        | Supporting description text            |
| `align`         | `string` | No       | `'default'` | Layout alignment ('default', 'center') |
| `titleTag`      | `string` | No       | `'h2'`      | HTML heading tag (h1-h6)               |
| `bottomSpacing` | `string` | No       | `''`        | Additional bottom spacing classes      |

## Usage

### Basic Example

```vue
<template>
  <SectionTitle
    overline="Edge Computing"
    title="Build Faster Applications"
    description="Deploy your applications closer to users with our global edge network for improved performance and reduced latency."
  />
</template>

<script setup>
  import SectionTitle from '@/blocks/SectionTitle'
</script>
```

### Centered Layout

```vue
<template>
  <SectionTitle
    overline="Our Products"
    title="Edge Computing Solutions"
    description="Comprehensive tools and services for modern web applications"
    align="center"
    titleTag="h1"
  />
</template>
```

### With Custom Spacing

```vue
<template>
  <SectionTitle
    title="Getting Started"
    description="Follow these steps to deploy your first application"
    titleTag="h3"
    bottomSpacing="mb-16"
  />
</template>
```

### Minimal Title Only

```vue
<template>
  <SectionTitle
    title="Features Overview"
    align="center"
  />
</template>
```

## Layout Options

### Default Layout

- **Desktop**: Two-column grid (title | description)
- **Mobile**: Single column, stacked layout
- **Alignment**: Left-aligned text

### Center Layout

- **All Screens**: Single column, centered
- **Alignment**: Center-aligned text
- **Use Case**: Hero sections, feature introductions

## Styling

The component uses:

- **Typography**: Sora font family for headings and body text
- **Colors**:
  - Title: Light neutral (text-neutral-50)
  - Description: Medium neutral (text-neutral-200)
  - Overline: Orange accent via Overline component
- **Spacing**: Responsive padding (6 on mobile, 12 on desktop)
- **Layout**: CSS Grid with responsive breakpoints

## Responsive Behavior

- **Mobile**: Single column layout, compact typography
- **Desktop (md+)**: Two-column layout (default) or centered (center)
- **Typography**: Scales from display-2-mobile to display-2
- **Max Width**: Constrained for optimal readability

## Accessibility

- **Semantic HTML**: Uses proper heading tags (h1-h6)
- **Heading Hierarchy**: Configurable via titleTag prop
- **Text Balance**: CSS text-balance for improved readability
- **Screen Reader**: Proper content structure and flow

## Dependencies

- **Overline Component**: For styled overline text
- **Tailwind CSS**: For styling and responsive design
- **Vue 3**: Composition API and dynamic components
