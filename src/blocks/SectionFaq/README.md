# SectionFaq

A responsive FAQ (Frequently Asked Questions) section component with smooth expand/collapse animations. Features a two-column layout with a title section and an interactive FAQ list with markdown support.

## Features

- **Interactive FAQ Items**: Click to expand/collapse with smooth animations
- **Markdown Support**: FAQ answers support markdown formatting
- **Smooth Transitions**: CSS Grid-based animations for performant height transitions
- **Responsive Design**: Adapts from single column on mobile to two columns on desktop
- **Accessible**: Keyboard accessible and screen reader friendly
- **Customizable Spacing**: Configurable bottom spacing options

## Props

| Prop            | Type         | Required | Default | Description                             |
| --------------- | ------------ | -------- | ------- | --------------------------------------- |
| `id`            | `string`     | No       | -       | HTML id attribute for the section       |
| `bottomSpacing` | `string`     | No       | `mb-24` | Bottom margin spacing class             |
| `title`         | `string`     | Yes      | -       | Main title displayed in the left column |
| `faqs`          | `FaqProps[]` | Yes      | -       | Array of FAQ items to display           |

### Bottom Spacing Options

| Value   | Description               |
| ------- | ------------------------- |
| `mb-0`  | No bottom margin          |
| `mb-6`  | Small bottom margin       |
| `mb-12` | Medium bottom margin      |
| `mb-24` | Large bottom margin       |
| `mb-48` | Extra large bottom margin |

### FaqProps Interface

```typescript
interface FaqProps {
  id?: string | number // Unique identifier for the FAQ item
  question: string // The question text
  answer: string // The answer in markdown format
  isOpen?: boolean // Whether the FAQ is initially open (default: false)
}
```

## Usage

### Basic FAQ Section

```vue
<template>
  <SectionFaq
    title="Frequently Asked Questions"
    :faqs="[
      {
        id: 1,
        question: 'What is edge computing?',
        answer:
          'Edge computing is a **distributed computing** paradigm that brings computation and data storage closer to the location where it is needed.'
      },
      {
        id: 2,
        question: 'How does it improve performance?',
        answer:
          'By reducing latency and bandwidth usage, edge computing can improve application performance by up to *90%*.'
      }
    ]"
  />
</template>

<script setup>
  import SectionFaq from '@/blocks/SectionFaq'
</script>
```

### With Pre-opened FAQ

```vue
<template>
  <SectionFaq
    title="Common Questions"
    :faqs="[
      {
        id: 1,
        question: 'What is the pricing?',
        answer:
          'We offer **flexible pricing** plans starting from free tier to enterprise solutions.',
        isOpen: true
      },
      {
        id: 2,
        question: 'How do I get started?',
        answer: 'Simply [sign up](https://console.azion.com) and follow our quick start guide.'
      }
    ]"
  />
</template>
```

### Custom Spacing

```vue
<template>
  <SectionFaq
    id="faq-section"
    bottomSpacing="mb-48"
    title="Product FAQ"
    :faqs="faqList"
  />
</template>
```

## Layout Structure

The component uses a two-column grid layout:

- **Left Column (3/10 on desktop)**: Contains the section title with decorative corner elements
- **Right Column (7/10 on desktop)**: Contains the FAQ items list with expand/collapse functionality

On mobile devices, the layout stacks vertically into a single column.

## Markdown Support

FAQ answers support full markdown syntax:

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Line breaks**: Double line breaks for paragraphs
- **Lists**: Ordered and unordered lists
- **Code**: Inline code with backticks

### Example with Markdown

```vue
<template>
  <SectionFaq
    title="Technical FAQ"
    :faqs="[
      {
        id: 1,
        question: 'What technologies are supported?',
        answer:
          'We support:\n\n- **JavaScript** and TypeScript\n- **Python** and Go\n- **Docker** containers\n- And more!'
      }
    ]"
  />
</template>
```

## Animations

The component uses CSS Grid-based transitions for smooth expand/collapse animations:

- **Height Transition**: Uses `grid-rows-[0fr]` to `grid-rows-[1fr]` for performant height animations
- **Opacity**: Fades in/out during transitions
- **Chevron Rotation**: Smooth 180-degree rotation on expand/collapse
- **Duration**: 300ms with ease-in-out timing function

The grid-based approach eliminates throttling issues that can occur with `max-height` transitions.

## Styling

The component uses:

- **Background**: Dark theme with neutral-900 borders
- **Typography**: Sora font family with responsive sizing
- **Colors**:
  - Title: `text-neutral-50`
  - Questions: `text-white`
  - Answers: `text-neutral-400`
  - Hover: `bg-neutral-900` with orange accent on chevron
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)
- **Borders**: Neutral-900 borders with decorative corner elements

## Responsive Behavior

- **Mobile**: Single column layout, stacked content
- **Tablet (md+)**: Two-column layout (3/10 and 7/10 split)
- **Typography**: Scales from mobile to desktop display sizes
- **Spacing**: Adaptive padding and margins

## Accessibility

- Semantic HTML structure
- Keyboard accessible (clickable FAQ items)
- Screen reader friendly with proper ARIA attributes
- Focus states for interactive elements
- Sufficient color contrast ratios

## State Management

The component manages FAQ open/close state internally:

- Each FAQ item can be independently opened or closed
- Initial state can be set via the `isOpen` property
- State is reactive and updates smoothly on user interaction

## Dependencies

- **LayoutContainer**: Wrapper component for consistent layout
- **Markdown Service**: Parses markdown in FAQ answers
- **Tailwind CSS**: For styling and responsive design
- **PrimeIcons**: For chevron icon (pi-chevron-down)
