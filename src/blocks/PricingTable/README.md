# PricingTable

A simple grid container block component for organizing pricing table components. Provides a 5-column grid structure with consistent spacing and responsive design.

## Features

- **5-Column Grid**: Fixed grid structure for pricing table layouts
- **Responsive Design**: Adapts to different screen sizes
- **Slot-based Content**: Flexible content insertion via default slot
- **Consistent Spacing**: Standardized padding and margins
- **White Text Theme**: Optimized for dark backgrounds

## Props

This component doesn't accept any props - it provides a pure layout container.

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `default` | Main content area for pricing table components |

## Usage

### Basic Example

```vue
<template>
  <PricingTable>
    <PricingTableHeader />
    <PricingTableRow
      v-for="feature in features"
      :key="feature.id"
      :feature="feature"
    />
    <PricingTableFooter />
  </PricingTable>
</template>

<script setup>
  import PricingTable from '@/blocks/PricingTable'
  import PricingTableHeader from '@/components/PricingTableHeader'
  import PricingTableRow from '@/components/PricingTableRow'
  import PricingTableFooter from '@/components/PricingTableFooter'

  const features = [
    { id: 1, name: 'Storage', free: '1GB', pro: '100GB', enterprise: 'Unlimited' },
    { id: 2, name: 'Bandwidth', free: '10GB', pro: '1TB', enterprise: 'Unlimited' }
  ]
</script>
```

### With Custom Components

```vue
<template>
  <PricingTable>
    <!-- Header with plan names -->
    <div class="col-span-1 font-bold">Features</div>
    <div class="col-span-1 text-center font-bold">Free</div>
    <div class="col-span-1 text-center font-bold">Pro</div>
    <div class="col-span-1 text-center font-bold">Business</div>
    <div class="col-span-1 text-center font-bold">Enterprise</div>

    <!-- Feature rows -->
    <div class="col-span-1">Storage</div>
    <div class="col-span-1 text-center">1GB</div>
    <div class="col-span-1 text-center">100GB</div>
    <div class="col-span-1 text-center">1TB</div>
    <div class="col-span-1 text-center">Unlimited</div>
  </PricingTable>
</template>
```

## Grid Structure

The component creates a CSS Grid with:

- **Columns**: 5 equal columns (`grid-cols-5`)
- **Max Width**: 1292px with auto centering
- **Padding**: 20px horizontal (`px-5`)
- **Bottom Margin**: Large spacing (`mb-[25rem]`)

## Styling

The component uses:

- **Layout**: CSS Grid with 5 columns
- **Text Color**: White (`text-white`)
- **Background**: Transparent (inherits from parent)
- **Max Width**: 1292px for optimal readability
- **Spacing**: Responsive padding and large bottom margin

## Responsive Behavior

- **All Screens**: Maintains 5-column grid structure
- **Mobile**: May require horizontal scrolling for complex tables
- **Desktop**: Full width up to max-width constraint

## Usage Guidelines

### Best Practices

1. **Content Organization**: Use consistent column spans for alignment
2. **Header Row**: Always include a header row for clarity
3. **Text Alignment**: Center-align numeric values, left-align text
4. **Responsive Considerations**: Consider mobile-friendly alternatives for complex tables

### Common Patterns

```vue
<!-- Header pattern -->
<div class="col-span-1 font-bold">Feature Name</div>
<div class="col-span-1 text-center font-bold">Plan 1</div>
<!-- ... more columns -->

<!-- Feature row pattern -->
<div class="col-span-1">Feature Description</div>
<div class="col-span-1 text-center">Value 1</div>
<!-- ... more values -->

<!-- Highlight pattern -->
<div class="col-span-1 bg-orange-500 text-black p-2 rounded">
  Premium Feature
</div>
```

## Accessibility

- **Semantic Structure**: Use proper table semantics when appropriate
- **Screen Readers**: Consider using table elements for complex data
- **Keyboard Navigation**: Ensure interactive elements are accessible
- **Color Contrast**: White text provides good contrast on dark backgrounds

## Dependencies

- **Tailwind CSS**: For grid layout and styling
- **Vue 3**: Slot system for content insertion

## Alternative Approaches

For more complex pricing tables, consider:

- HTML `<table>` elements for better semantics
- Responsive card layouts for mobile
- PrimeVue DataTable for advanced features
