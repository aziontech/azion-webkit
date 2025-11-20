# SectionImageContent2Column

A two-column section component combining text content with images, featuring background patterns, flexible layouts, and markdown support. Perfect for showcasing features, products, or content with visual elements.

## Features

- **Two-Column Layout**: Text and image side-by-side with flexible distribution
- **Background Patterns**: Dots or square grid patterns on image section
- **Markdown Support**: Rich text descriptions with markdown formatting
- **Flexible Layouts**: 50/50 or 30/70 text/image distribution
- **Reversible Order**: Image can be on left or right
- **Responsive Design**: Adapts from mobile to desktop layouts
- **Decorative Elements**: Corner dots for visual interest

## Props

| Prop                     | Type      | Required | Default                           | Description                          |
| ------------------------ | --------- | -------- | --------------------------------- | ------------------------------------ |
| `title`                  | `string`  | No       | -                                 | Section title text                   |
| `descriptionRawMarkdown` | `string`  | No       | -                                 | Description in markdown format       |
| `image`                  | `string`  | Yes      | -                                 | Image URL                            |
| `alt`                    | `string`  | No       | -                                 | Image alt text                       |
| `layout`                 | `string`  | No       | `'50/50'`                         | Layout distribution (50/50 or 30/70) |
| `inverted`               | `boolean` | No       | `false`                           | Reverse order (image first)          |
| `bottomSpacing`          | `string`  | No       | `mb-24`                           | Bottom margin spacing class          |
| `backgroundPattern`      | `object`  | No       | `{ style: 'dots', size: '24px' }` | Background pattern configuration     |

### Layout Options

| Value   | Description                       |
| ------- | --------------------------------- |
| `50/50` | Equal split (50% text, 50% image) |
| `30/70` | Text takes 1/3, image takes 2/3   |

### Background Pattern

```typescript
interface BackgroundPattern {
  style: 'dots' | 'square' // Pattern type
  size: '12px' | '24px' | '48px' // Grid size
}
```

## Usage

### Basic 50/50 Layout

```vue
<template>
  <SectionImageContent2Column
    title="Edge Computing Platform"
    descriptionRawMarkdown="Deploy applications **closer to users** with our global edge network. Reduce latency by up to 90%."
    image="/images/edge-platform.png"
    alt="Edge computing platform"
  />
</template>

<script setup>
  import SectionImageContent2Column from '@/blocks/SectionImageContent2Column'
</script>
```

### 30/70 Layout with Inverted Order

```vue
<template>
  <SectionImageContent2Column
    title="Global Infrastructure"
    descriptionRawMarkdown="Our network spans **200+ locations** worldwide."
    image="/images/global-network.png"
    alt="Global network map"
    layout="30/70"
    :inverted="true"
  />
</template>
```

### Custom Background Pattern

```vue
<template>
  <SectionImageContent2Column
    title="Enterprise Security"
    descriptionRawMarkdown="Built-in security features for enterprise needs."
    image="/images/security.png"
    :backgroundPattern="{ style: 'square', size: '48px' }"
  />
</template>
```

## Markdown Support

The `descriptionRawMarkdown` prop supports full markdown syntax:

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Line breaks**: Double line breaks for paragraphs

## Layout Structure

The component creates a flexible two-column layout:

- **Text Column**: Contains title and markdown description
- **Image Column**: Contains image with background pattern overlay
- **Mobile**: Stacks vertically
- **Desktop**: Side-by-side with configurable distribution

## Styling

The component uses:

- **Background Patterns**: GridPattern component on image section
- **Borders**: Neutral-900 borders with decorative corner elements
- **Typography**:
  - Title: Gray-200, Sora font, display-3 sizes
  - Description: Neutral-400, Sora font
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)

## Responsive Behavior

- **Mobile**: Single column, stacked layout
- **Desktop (md+)**: Two-column layout with configurable distribution
- **Sticky Text**: Text column can be sticky on desktop
- **Spacing**: Adaptive padding and margins

## Accessibility

- Semantic HTML structure
- Proper alt text for images
- Screen reader friendly content structure
- Sufficient color contrast ratios

## Dependencies

- **LayoutContainer**: Wrapper component for consistent layout
- **GridPattern Component**: For background patterns
- **Markdown Parser**: Built-in markdown processing
- **Tailwind CSS**: For styling and responsive design
