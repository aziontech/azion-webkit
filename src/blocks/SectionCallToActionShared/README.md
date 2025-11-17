# SectionCallToActionShared

A shared call-to-action section block component with consistent styling and behavior across different contexts. Provides reusable CTA functionality for various sections.

## Features

- **Consistent Design**: Standardized CTA appearance across the application
- **Flexible Content**: Configurable title, description, and button text
- **Responsive Layout**: Adapts to different screen sizes
- **Theme Support**: Multiple visual themes and variants
- **Reusable**: Designed for use across multiple sections

## Props

| Prop          | Type     | Required | Default | Description                    |
| ------------- | -------- | -------- | ------- | ------------------------------ |
| `title`       | `string` | Yes      | -       | CTA heading text               |
| `description` | `string` | No       | -       | Supporting description text    |
| `buttonLabel` | `string` | Yes      | -       | Button text                    |
| `buttonHref`  | `string` | Yes      | -       | Button destination URL         |
| `theme`       | `string` | No       | `'default'` | Visual theme variant       |

## Usage

### Basic Example

```vue
<template>
  <SectionCallToActionShared
    title="Ready to Get Started?"
    description="Join thousands of developers building faster applications."
    buttonLabel="Start Free Trial"
    buttonHref="/signup"
  />
</template>

<script setup>
  import SectionCallToActionShared from '@/blocks/SectionCallToActionShared'
</script>
```

### With Theme

```vue
<template>
  <SectionCallToActionShared
    title="Upgrade Your Plan"
    description="Get access to advanced features and priority support."
    buttonLabel="View Plans"
    buttonHref="/pricing"
    theme="orange"
  />
</template>
```

## Dependencies

- **Button Component**: For CTA button rendering
- **Tailwind CSS**: For styling and responsive design
