# SectionContent2Column

A flexible two-column content section block component with responsive layout, overline support, and slot-based architecture. Perfect for feature descriptions, product information, and content sections.

## Features

- **Two-Column Layout**: Responsive design with title and content columns
- **Overline Support**: Optional overline text with Azion styling
- **Flexible Content**: Slot-based architecture for custom content
- **Responsive Design**: Adapts from single to two-column layout
- **Consistent Spacing**: Standardized padding and gaps
- **Dark Theme**: Optimized for dark backgrounds

## Props

| Prop           | Type     | Required | Default | Description                           |
| -------------- | -------- | -------- | ------- | ------------------------------------- |
| `overline`     | `string` | No       | `''`    | Small text above title                |
| `title`        | `string` | No       | `''`    | Main section heading                  |
| `bottomSpacing`| `string` | No       | `''`    | Additional bottom spacing classes     |

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `default` | Main content area (right column on desktop)    |

## Usage

### Basic Example

```vue
<template>
  <SectionContent2Column
    overline="Edge Computing"
    title="Build Faster Applications"
  >
    <p class="text-neutral-200 mb-4">
      Deploy your applications closer to users with our global edge network 
      for improved performance and reduced latency.
    </p>
    <ul class="list-disc list-inside text-neutral-300 space-y-2">
      <li>Global edge locations</li>
      <li>Sub-second deployment</li>
      <li>Automatic scaling</li>
    </ul>
  </SectionContent2Column>
</template>

<script setup>
  import SectionContent2Column from '@/blocks/SectionContent2Column'
</script>
```

### With Rich Content

```vue
<template>
  <SectionContent2Column
    overline="Our Platform"
    title="Everything You Need to Build at the Edge"
    bottomSpacing="mb-16"
  >
    <div class="space-y-6">
      <p class="text-neutral-200 text-lg">
        Our comprehensive edge computing platform provides all the tools 
        and services you need to build, deploy, and scale modern applications.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureItem 
          icon="pi pi-bolt"
          title="Lightning Fast"
          description="Deploy in under 60 seconds"
        />
        <FeatureItem 
          icon="pi pi-shield"
          title="Secure by Default"
          description="Built-in security features"
        />
      </div>
      
      <Button 
        label="Get Started" 
        type="primary" 
        href="/signup"
      />
    </div>
  </SectionContent2Column>
</template>
```

### Content Only (No Title)

```vue
<template>
  <SectionContent2Column>
    <div class="prose prose-invert max-w-none">
      <h3>Custom Content Section</h3>
      <p>
        This section uses only the content slot without the predefined 
        title structure, giving you complete control over the layout.
      </p>
    </div>
  </SectionContent2Column>
</template>
```

### With Custom Spacing

```vue
<template>
  <SectionContent2Column
    title="Technical Specifications"
    bottomSpacing="mb-32"
  >
    <TechnicalSpecs :specs="specifications" />
  </SectionContent2Column>
</template>
```

## Layout Structure

### Desktop Layout (md+)
- **Left Column**: Title and overline (1/3 width)
- **Right Column**: Slot content (2/3 width)
- **Gap**: 24px between columns

### Mobile Layout
- **Single Column**: Stacked layout
- **Order**: Overline → Title → Content
- **Spacing**: Consistent vertical gaps

## Styling

The component uses:

- **Layout**: CSS Grid with responsive breakpoints
- **Typography**: 
  - Overline: Orange accent via Overline component
  - Title: Large display text with Sora font
- **Colors**: White text optimized for dark backgrounds
- **Spacing**: Responsive padding (24px mobile, 48px desktop)
- **Max Width**: Constrained for optimal readability

## Responsive Behavior

- **Mobile**: Single column, stacked content
- **Tablet**: Maintains single column with larger spacing
- **Desktop (md+)**: Two-column grid layout
- **Typography**: Responsive text sizing

## Content Guidelines

### Left Column (Title Area)
- Keep titles concise and descriptive
- Use overlines for context or categorization
- Maintain consistent title hierarchy

### Right Column (Content Area)
- Use semantic HTML structure
- Maintain proper text contrast
- Consider content length and readability
- Use consistent spacing between elements

## Common Patterns

### Feature Description
```vue
<SectionContent2Column
  overline="Features"
  title="Advanced Security"
>
  <SecurityFeatureList :features="securityFeatures" />
</SectionContent2Column>
```

### Product Information
```vue
<SectionContent2Column
  overline="Products"
  title="Edge Application"
>
  <ProductDetails :product="edgeApplication" />
</SectionContent2Column>
```

### How It Works
```vue
<SectionContent2Column
  overline="Process"
  title="How It Works"
>
  <StepByStepGuide :steps="deploymentSteps" />
</SectionContent2Column>
```

## Accessibility

- **Semantic Structure**: Uses proper heading hierarchy
- **Screen Readers**: Clear content organization
- **Keyboard Navigation**: Accessible content flow
- **Color Contrast**: Optimized text colors for readability

## Best Practices

1. **Content Balance**: Ensure content doesn't overwhelm the title
2. **Consistent Styling**: Use consistent text styles within content
3. **Responsive Testing**: Verify layout at different breakpoints
4. **Semantic HTML**: Use proper HTML structure in slot content

## Dependencies

- **Overline Component**: For styled overline text
- **Tailwind CSS**: For layout and responsive design
- **Vue 3**: Composition API and slots
