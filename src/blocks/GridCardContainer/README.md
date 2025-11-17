# GridCardContainer

A flexible grid container block component for organizing cards in responsive layouts. Provides consistent spacing, responsive breakpoints, and slot-based content organization.

## Features

- **Responsive Grid**: Adapts from 1 to 4 columns based on screen size
- **Flexible Content**: Slot-based architecture for any card type
- **Consistent Spacing**: Standardized gaps and padding
- **Auto-fit Layout**: Cards automatically adjust to available space
- **Dark Theme**: Optimized for dark backgrounds with white text

## Props

This component doesn't accept any props - it provides a pure layout container with responsive behavior.

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `default` | Main content area for card components          |

## Grid Breakpoints

- **Mobile**: 1 column (`grid-cols-1`)
- **Small (sm+)**: 2 columns (`sm:grid-cols-2`)
- **Large (lg+)**: 3 columns (`lg:grid-cols-3`)
- **Extra Large (xl+)**: 4 columns (`xl:grid-cols-4`)

## Usage

### Basic Example

```vue
<template>
  <GridCardContainer>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :description="product.description"
      :image="product.image"
    />
  </GridCardContainer>
</template>

<script setup>
  import GridCardContainer from '@/blocks/GridCardContainer'
  import ProductCard from '@/components/ProductCard'
  
  const products = [
    {
      id: 1,
      title: 'Edge Application',
      description: 'Build and deploy applications at the edge',
      image: '/images/edge-app.jpg'
    },
    {
      id: 2,
      title: 'Edge Firewall',
      description: 'Advanced security for your applications',
      image: '/images/firewall.jpg'
    }
  ]
</script>
```

### With Feature Cards

```vue
<template>
  <GridCardContainer>
    <FeatureCard
      icon="pi pi-bolt"
      title="Lightning Fast"
      description="Deploy applications in under 60 seconds"
    />
    <FeatureCard
      icon="pi pi-shield"
      title="Secure by Default"
      description="Built-in security features and compliance"
    />
    <FeatureCard
      icon="pi pi-globe"
      title="Global Network"
      description="100+ edge locations worldwide"
    />
    <FeatureCard
      icon="pi pi-chart-line"
      title="Real-time Analytics"
      description="Monitor performance and usage metrics"
    />
  </GridCardContainer>
</template>
```

### Mixed Content Types

```vue
<template>
  <GridCardContainer>
    <!-- Different card types can be mixed -->
    <PricingCard :plan="freePlan" />
    <TestimonialCard :testimonial="customerReview" />
    <BlogCard :article="latestPost" />
    <CTACard 
      title="Get Started"
      description="Ready to build at the edge?"
      buttonLabel="Sign Up Free"
    />
  </GridCardContainer>
</template>
```

## Styling

The component uses:

- **Layout**: CSS Grid with responsive columns
- **Gap**: Consistent 24px spacing between cards (`gap-6`)
- **Padding**: Responsive padding (24px mobile, 48px desktop)
- **Text Color**: White text (`text-white`)
- **Background**: Transparent (inherits from parent)
- **Max Width**: Constrained for optimal readability

## Responsive Behavior

- **Mobile (default)**: Single column layout for easy scrolling
- **Small Tablets (640px+)**: Two columns for better space usage
- **Large Tablets/Desktop (1024px+)**: Three columns for optimal viewing
- **Large Screens (1280px+)**: Four columns for maximum content density

## Best Practices

### Card Consistency
- Use cards with similar heights for better visual alignment
- Maintain consistent content structure across cards
- Consider using aspect ratios for images

### Content Organization
- Group related cards together
- Use logical ordering (importance, alphabetical, chronological)
- Limit to 12-16 cards per container for performance

### Responsive Considerations
- Test card content at different breakpoints
- Ensure text remains readable at all sizes
- Consider card minimum widths for content integrity

## Common Patterns

### Product Showcase
```vue
<GridCardContainer>
  <ProductCard v-for="product in products" :key="product.id" v-bind="product" />
</GridCardContainer>
```

### Feature Grid
```vue
<GridCardContainer>
  <FeatureCard v-for="feature in features" :key="feature.id" v-bind="feature" />
</GridCardContainer>
```

### Team Members
```vue
<GridCardContainer>
  <TeamCard v-for="member in team" :key="member.id" v-bind="member" />
</GridCardContainer>
```

## Accessibility

- **Semantic Structure**: Use appropriate card semantics
- **Keyboard Navigation**: Ensure cards are keyboard accessible
- **Screen Readers**: Proper heading hierarchy within cards
- **Focus Management**: Visible focus indicators for interactive cards

## Performance Considerations

- **Lazy Loading**: Consider lazy loading for image-heavy cards
- **Virtual Scrolling**: For large datasets, consider virtualization
- **Pagination**: Break large card sets into pages
- **Image Optimization**: Use responsive images in cards

## Dependencies

- **Tailwind CSS**: For grid layout and responsive design
- **Vue 3**: Slot system for content insertion

## Related Components

- **GridCardContainerWithToggle**: Grid with filtering capabilities
- **SectionCardCarousel**: Carousel-based card display
- **PricingCardCarousel**: Specialized pricing card carousel
