# SectionLogosQuote2Column

A two-column section block component combining logo display with quote/testimonial content. Perfect for showcasing customer logos alongside their testimonials.

## Features

- **Two-Column Layout**: Logos on one side, quote content on the other
- **Logo Grid**: Organized display of customer/partner logos
- **Quote Integration**: Testimonial content with author information
- **Responsive Design**: Adapts from two-column to stacked layout
- **Social Proof**: Combines visual and textual credibility indicators

## Props

| Prop    | Type     | Required | Default | Description                    |
| ------- | -------- | -------- | ------- | ------------------------------ |
| `logos` | `Array`  | Yes      | `[]`    | Array of logo objects          |
| `quote` | `Object` | Yes      | -       | Quote/testimonial object       |

### Logo Interface

```typescript
interface Logo {
  src: string
  alt: string
  title?: string
}
```

### Quote Interface

```typescript
interface Quote {
  text: string
  author: string
  title?: string
  company?: string
}
```

## Usage

```vue
<template>
  <SectionLogosQuote2Column
    :logos="partnerLogos"
    :quote="customerTestimonial"
  />
</template>

<script setup>
  const partnerLogos = [
    { src: '/logos/company1.svg', alt: 'Company 1' },
    { src: '/logos/company2.svg', alt: 'Company 2' }
  ]
  
  const customerTestimonial = {
    text: "The performance improvement was immediate and significant.",
    author: "Jane Smith",
    title: "Engineering Director",
    company: "Innovation Inc"
  }
</script>
```

## Dependencies

- **Tailwind CSS**: For layout and responsive design
- **Vue 3**: Component structure and reactivity
