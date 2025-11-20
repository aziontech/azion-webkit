# SectionCallToActionShared

A shared/alternative version of the call-to-action section block component with multiple layout types, background patterns, and markdown support. Identical functionality to SectionCallToAction but maintained as a separate component.

## Features

- **Multiple Layout Types**: Various CTA layouts including 2-column and short variants
- **Background Patterns**: Dots or square grid patterns with customizable size and opacity
- **Markdown Integration**: Built-in markdown parsing for rich text content
- **Flexible Content**: Support for overline, title, description, and buttons
- **Theme Variants**: Orange and neutral color schemes
- **Responsive Design**: Adapts to different screen sizes

## Props

| Prop                | Type        | Required | Default                           | Description                       |
| ------------------- | ----------- | -------- | --------------------------------- | --------------------------------- |
| `id`                | `string`    | No       | -                                 | HTML id attribute                 |
| `type`              | `string`    | No       | `'2-col-70-30'`                   | Layout type variant               |
| `content`           | `CardProps` | No       | -                                 | Content card for 2-column layouts |
| `cta`               | `CardProps` | Yes      | -                                 | Main CTA card content             |
| `backgroundPattern` | `object`    | No       | `{ style: 'dots', size: '12px' }` | Background pattern configuration  |

### Layout Types

| Type                 | Description                              |
| -------------------- | ---------------------------------------- |
| `2-col-70-30`        | Two-column layout (70% CTA, 30% content) |
| `1-col`              | Single-column layout                     |
| `1-col-short-orange` | Compact layout with orange theme         |
| `1-col-short-black`  | Compact layout with black theme          |

### CardProps Interface

```typescript
interface CardProps {
  overline: string // Small label above title
  title: string // Main title text
  descriptionRawMarkdown: string // Description in markdown format
  linkLabel: string // Button label text
  link: string // Button link URL
}
```

### Background Pattern

```typescript
interface BackgroundPattern {
  style: 'dots' | 'square' // Pattern type
  size: '12px' | '24px' | '48px' // Grid size
}
```

## Usage

See SectionCallToAction component documentation for usage examples. This component has identical functionality and API.

## Dependencies

- **LayoutContainer**: Wrapper component for consistent layout
- **Overline Component**: For styled overline text
- **Button Component**: For CTA buttons
- **GridPattern Component**: For background patterns
- **Markdown Parser**: Built-in markdown processing
- **Tailwind CSS**: For styling and responsive design
