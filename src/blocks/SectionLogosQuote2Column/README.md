# SectionLogosQuote2Column

A two-column section block component combining client logos or images with quote/testimonial content. Perfect for showcasing customer logos alongside their testimonials with flexible layout options.

## Features

- **Two-Column Layout**: Client logos/images on one side, quote content on the other
- **Flexible Client Display**: Supports both multiple logos in a grid or a single image
- **Quote Integration**: Testimonial content with author information and company logo
- **Layout Options**: Two layout types - 70/30 split or 50/50 split
- **Optional Header**: Title and link button support
- **Responsive Design**: Adapts gracefully across different screen sizes

## Props

| Prop            | Type                                                | Required | Default   | Description                                                    |
| --------------- | --------------------------------------------------- | -------- | --------- | -------------------------------------------------------------- |
| `clients`       | `LogoQuote2Column[] \| ImageType`                   | No       | `[]`      | Array of client logos or a single image object                 |
| `quote`         | `string`                                            | No       | -         | The testimonial/quote text                                     |
| `author`        | `string`                                            | No       | -         | Name of the quote author                                       |
| `role`          | `string`                                            | No       | -         | Role/title of the quote author                                 |
| `logo`          | `string`                                            | No       | -         | Company logo URL for the quote author                          |
| `logoAlt`       | `string`                                            | No       | -         | Alt text for the company logo                                  |
| `id`            | `string`                                            | No       | -         | HTML id attribute for the section                              |
| `title`         | `string`                                            | No       | -         | Optional section title                                         |
| `link`          | `string`                                            | No       | -         | Optional link URL for the header button                        |
| `linkLabel`     | `string`                                            | No       | -         | Label text for the header link button                          |
| `bottomSpacing` | `'mb-0' \| 'mb-6' \| 'mb-12' \| 'mb-24' \| 'mb-48'` | No       | `'mb-24'` | Bottom margin spacing for the section                          |
| `type`          | `'70x30' \| '50x50'`                                | No       | `'50x50'` | Layout type: 70/30 split (logos 30%, quote 70%) or 50/50 split |

### LogoQuote2Column Interface

Used when `clients` is an array of multiple logos:

```typescript
interface LogoQuote2Column {
  logo: string
  alt?: string
}
```

### ImageType Interface

Used when `clients` is a single image object:

```typescript
interface ImageType {
  image: string
  alt: string
}
```

## Layout Types

### 50x50 (Default)

- Equal split between client logos/images and quote content
- Uses `grid-cols-2` layout
- Each column spans 1 column

### 70x30

- Client logos/images take 30% of the width
- Quote content takes 70% of the width
- Uses `grid-cols-10` layout
- Client column spans 3 columns, quote column spans 7 columns

## Usage

### Multiple Client Logos (50x50 Layout)

```vue
<template>
  <SectionLogosQuote2Column
    title="Trusted by Industry Leaders"
    link="/customers"
    linkLabel="View All Customers"
    :clients="clientLogos"
    :quote="testimonial"
    author="John Smith"
    role="CTO at TechCorp"
    logo="/logos/techcorp.svg"
    logoAlt="TechCorp Logo"
    type="50x50"
  />
</template>

<script setup>
  const clientLogos = [
    { logo: '/logos/company1.svg', alt: 'Company 1' },
    { logo: '/logos/company2.svg', alt: 'Company 2' },
    { logo: '/logos/company3.svg', alt: 'Company 3' },
    { logo: '/logos/company4.svg', alt: 'Company 4' }
  ]

  const testimonial =
    'Azion has transformed how we deliver content globally. The edge platform is incredibly fast and reliable.'
</script>
```

### Single Image (70x30 Layout)

```vue
<template>
  <SectionLogosQuote2Column
    title="Customer Success Story"
    :clients="customerImage"
    :quote="testimonial"
    author="Jane Doe"
    role="Engineering Director"
    logo="/logos/innovation.svg"
    type="70x30"
  />
</template>

<script setup>
  const customerImage = {
    image: '/images/customer-hero.jpg',
    alt: 'Customer using Azion platform'
  }

  const testimonial =
    "The performance improvement was immediate and significant. We've seen a 40% reduction in latency."
</script>
```

### Minimal Usage

```vue
<template>
  <SectionLogosQuote2Column
    :clients="clientLogos"
    :quote="'Great product and excellent support!'"
    author="Sarah Johnson"
  />
</template>
```

## Behavior

- **Array of Clients**: When `clients` is an array, logos are displayed in a 4x3 grid with hover effects (brightness and invert filters)
- **Single Image**: When `clients` is a single `ImageType` object, the image is displayed centered and fills the available space
- **Optional Quote**: The quote section only renders if the `quote` prop is provided
- **Conditional Header**: Title and link button only appear if their respective props are provided

## Dependencies

- **Vue 3**: Component structure and reactivity
- **Tailwind CSS**: For layout and responsive design
- **ProductQuote**: Internal component for quote display
- **Button**: Internal component for link button
- **LayoutContainer**: Internal component for container layout
