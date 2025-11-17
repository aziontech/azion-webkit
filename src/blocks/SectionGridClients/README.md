# SectionGridClients

A grid section block component for displaying client logos and information in an organized layout. Perfect for showcasing customers, partners, and testimonials.

## Features

- **Client Grid**: Organized display of client information
- **Logo Support**: Client logos with proper sizing and alignment
- **Flexible Layout**: Responsive grid that adapts to content
- **Client Information**: Support for names, descriptions, and links
- **Social Proof**: Builds credibility through client showcase

## Props

| Prop      | Type    | Required | Default | Description                    |
| --------- | ------- | -------- | ------- | ------------------------------ |
| `clients` | `Array` | Yes      | `[]`    | Array of client objects        |
| `title`   | `string`| No       | -       | Section title                  |

### Client Interface

```typescript
interface Client {
  name: string
  logo: string
  description?: string
  link?: string
  industry?: string
}
```

## Usage

```vue
<template>
  <SectionGridClients
    title="Trusted by Industry Leaders"
    :clients="clientList"
  />
</template>

<script setup>
  const clientList = [
    {
      name: "Tech Corp",
      logo: "/logos/techcorp.svg",
      description: "Leading technology company",
      industry: "Technology"
    }
  ]
</script>
```

## Dependencies

- **Tailwind CSS**: For grid layout and responsive design
- **Vue 3**: Component structure and reactivity
