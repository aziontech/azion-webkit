# SectionImageContent2Column

## Purpose

A flexible two-column section component that displays content (text) alongside an image with full layout control and Markdown support. Perfect for feature sections, product showcases, and content-rich layouts.

- [Storybook Demo](https://azion-webkit.netlify.app/?path=/story/blocks-sectionimagecontent2column)

## Props

### Required

| Prop    | Type     | Default | Values | Description                      |
| ------- | -------- | ------- | ------ | -------------------------------- |
| `image` | `String` | -       | -      | URL of the image to be displayed |

### Optional

| Prop                     | Type      | Default     | Values           | Description                                                                |
| ------------------------ | --------- | ----------- | ---------------- | -------------------------------------------------------------------------- |
| `title`                  | `String`  | `''`        | -                | Section title displayed above the content                                  |
| `descriptionRawMarkdown` | `String`  | `''`        | -                | Markdown content converted to HTML (supports headers, bold, italic, links) |
| `alt`                    | `String`  | `''`        | -                | Alternative text for the image (accessibility)                             |
| `height`                 | `String`  | `'default'` | `default\|large` | Controls the height of the image container                                 |
| `backgroundStyle`        | `String`  | `'grid'`    | `grid\|dots`     | Background pattern style for the image container                           |
| `fiftyFifty`             | `Boolean` | `true`      | -                | Layout distribution: true = 50/50 split, false = 1/3 text + 2/3 image      |
| `inverted`               | `Boolean` | `false`     | -                | Block order: true = image first, false = text first (default)              |

## Layout Combinations

| fiftyFifty | inverted | Result                            |
| ---------- | -------- | --------------------------------- |
| `true`     | `false`  | Text first, 50/50 split (default) |
| `true`     | `true`   | Image first, 50/50 split          |
| `false`    | `false`  | Text first, 1/3 text + 2/3 image  |
| `false`    | `true`   | Image first, 1/3 text + 2/3 image |

## Markdown Support

The `descriptionRawMarkdown` prop supports:

- **Headers**: `# ## ###`
- **Bold text**: `**text**` or `__text__`
- **Italic text**: `*text*` or `_text_`
- **Links**: `[text](url)` with `target="_blank"`
- **Line breaks**: Single and double line breaks
- **Lists**: Unordered and ordered lists
- **Paragraphs**: Automatic paragraph wrapping

## Dependencies

### Internal

- `../../services/markdown-service` - Markdown to HTML conversion

### External

- Vue 3 Composition API (`computed`)

## Usage Examples

### Basic Usage

```vue
<template>
  <SectionImageContent2Column
    title="Build at the Edge"
    descriptionRawMarkdown="Deploy applications with our **global network**."
    image="https://example.com/image.jpg"
    alt="Edge computing"
  />
</template>
```

### Advanced Layout Control

```vue
<template>
  <!-- Image first, 1/3 text + 2/3 image -->
  <SectionImageContent2Column
    title="Advanced Features"
    descriptionRawMarkdown="Experience **lightning-fast** performance.

### Key Benefits:
- **Ultra-low latency**
- **Global scale**
- **Enterprise security**

[Learn more](https://docs.azion.com)"
    image="https://example.com/advanced.jpg"
    alt="Advanced features"
    height="large"
    backgroundStyle="dots"
    :fiftyFifty="false"
    :inverted="true"
  />
</template>
```

### Responsive Behavior

- **Mobile**: Always stacks vertically (text above image)
- **Desktop**: Respects `fiftyFifty` and `inverted` props for horizontal layout

## Styling

The component uses:

- **Tailwind CSS** for responsive layout and styling
- **Custom CSS** for decorative elements (corner dots)
- **Dynamic classes** based on props for layout control

## Related Links

- [TypeScript Definitions](./SectionImageContent2Column.d.ts)
- [Component Implementation](./SectionImageContent2Column.vue)
- [Export Module](./index.ts)
- [Package Configuration](./package.json)
- [Markdown Service](../../services/markdown-service.js)
