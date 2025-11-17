# SectionContent3Column

A three-column content section block component with responsive layout and slot-based architecture. Perfect for feature showcases, service descriptions, and organized content presentation.

## Features

- **Three-Column Layout**: Responsive design that adapts to screen size
- **Flexible Content**: Slot-based architecture for custom content in each column
- **Responsive Breakpoints**: Adapts from single to three-column layout
- **Consistent Spacing**: Standardized padding and gaps between columns
- **Dark Theme**: Optimized for dark backgrounds with proper contrast

## Props

This component doesn't accept any props - it provides a pure layout container with responsive behavior.

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `column1` | Content for the first column (left)           |
| `column2` | Content for the second column (center)        |
| `column3` | Content for the third column (right)          |

## Grid Breakpoints

- **Mobile**: 1 column (stacked layout)
- **Medium (md+)**: 2 columns (first column full width, others split)
- **Large (lg+)**: 3 equal columns

## Usage

### Basic Example

```vue
<template>
  <SectionContent3Column>
    <template #column1>
      <h3 class="text-xl font-sora text-white mb-4">Performance</h3>
      <p class="text-neutral-200">
        Deploy applications closer to users with our global edge network 
        for improved performance and reduced latency.
      </p>
    </template>
    
    <template #column2>
      <h3 class="text-xl font-sora text-white mb-4">Security</h3>
      <p class="text-neutral-200">
        Built-in security features including DDoS protection, 
        Web Application Firewall, and SSL certificates.
      </p>
    </template>
    
    <template #column3>
      <h3 class="text-xl font-sora text-white mb-4">Scalability</h3>
      <p class="text-neutral-200">
        Automatic scaling based on demand with no configuration required. 
        Handle traffic spikes effortlessly.
      </p>
    </template>
  </SectionContent3Column>
</template>

<script setup>
  import SectionContent3Column from '@/blocks/SectionContent3Column'
</script>
```

### Feature Showcase

```vue
<template>
  <SectionContent3Column>
    <template #column1>
      <FeatureCard
        icon="pi pi-bolt"
        title="Lightning Fast"
        description="Deploy applications in under 60 seconds with our optimized build process."
        :features="['Sub-second builds', 'Global CDN', 'Edge caching']"
      />
    </template>
    
    <template #column2>
      <FeatureCard
        icon="pi pi-shield"
        title="Enterprise Security"
        description="Advanced security features to protect your applications and data."
        :features="['DDoS protection', 'WAF included', 'SSL certificates']"
      />
    </template>
    
    <template #column3>
      <FeatureCard
        icon="pi pi-chart-line"
        title="Real-time Analytics"
        description="Monitor your applications with detailed analytics and insights."
        :features="['Live metrics', 'Custom dashboards', 'Alerting']"
      />
    </template>
  </SectionContent3Column>
</template>
```

### Service Tiers

```vue
<template>
  <SectionContent3Column>
    <template #column1>
      <ServiceTier
        title="Starter"
        price="Free"
        description="Perfect for personal projects and learning"
        :features="['1 Application', '10GB Bandwidth', 'Community Support']"
        buttonLabel="Get Started"
        buttonHref="/signup"
      />
    </template>
    
    <template #column2>
      <ServiceTier
        title="Professional"
        price="$29/month"
        description="Ideal for growing businesses and teams"
        :features="['10 Applications', '1TB Bandwidth', 'Priority Support']"
        buttonLabel="Start Trial"
        buttonHref="/trial"
        highlighted
      />
    </template>
    
    <template #column3>
      <ServiceTier
        title="Enterprise"
        price="Custom"
        description="For large organizations with specific needs"
        :features="['Unlimited Apps', 'Custom Bandwidth', 'Dedicated Support']"
        buttonLabel="Contact Sales"
        buttonHref="/contact"
      />
    </template>
  </SectionContent3Column>
</template>
```

### Mixed Content Types

```vue
<template>
  <SectionContent3Column>
    <template #column1>
      <div class="text-center">
        <img src="/images/icon-performance.svg" alt="Performance" class="mx-auto mb-4 w-16 h-16">
        <h4 class="text-lg font-sora text-white mb-2">99.9% Uptime</h4>
        <p class="text-neutral-300 text-sm">Guaranteed reliability</p>
      </div>
    </template>
    
    <template #column2>
      <div class="text-center">
        <img src="/images/icon-global.svg" alt="Global" class="mx-auto mb-4 w-16 h-16">
        <h4 class="text-lg font-sora text-white mb-2">100+ Locations</h4>
        <p class="text-neutral-300 text-sm">Worldwide coverage</p>
      </div>
    </template>
    
    <template #column3>
      <div class="text-center">
        <img src="/images/icon-support.svg" alt="Support" class="mx-auto mb-4 w-16 h-16">
        <h4 class="text-lg font-sora text-white mb-2">24/7 Support</h4>
        <p class="text-neutral-300 text-sm">Always here to help</p>
      </div>
    </template>
  </SectionContent3Column>
</template>
```

## Styling

The component uses:

- **Layout**: CSS Grid with responsive columns
- **Gap**: Consistent 24px spacing between columns (`gap-6`)
- **Padding**: Responsive padding (24px mobile, 48px desktop)
- **Text Color**: White text (`text-white`)
- **Background**: Transparent (inherits from parent)
- **Max Width**: Constrained for optimal readability

## Responsive Behavior

- **Mobile (default)**: Single column, stacked layout
- **Medium (768px+)**: Two columns (first full width, others split)
- **Large (1024px+)**: Three equal columns
- **Content**: Maintains readability at all breakpoints

## Best Practices

### Content Balance
- Keep content length similar across columns
- Use consistent heading levels
- Maintain visual hierarchy within each column

### Responsive Design
- Test content at all breakpoints
- Ensure readability on mobile devices
- Consider content priority for stacking order

### Visual Consistency
- Use consistent spacing within columns
- Maintain similar content structure
- Apply consistent styling patterns

## Common Patterns

### Feature Comparison
```vue
<template #column1>
  <FeatureList title="Basic Features" :features="basicFeatures" />
</template>
<template #column2>
  <FeatureList title="Advanced Features" :features="advancedFeatures" />
</template>
<template #column3>
  <FeatureList title="Enterprise Features" :features="enterpriseFeatures" />
</template>
```

### Step-by-Step Process
```vue
<template #column1>
  <ProcessStep number="1" title="Deploy" description="Push your code" />
</template>
<template #column2>
  <ProcessStep number="2" title="Configure" description="Set up your settings" />
</template>
<template #column3>
  <ProcessStep number="3" title="Scale" description="Grow with demand" />
</template>
```

## Accessibility

- **Semantic Structure**: Use proper heading hierarchy in each column
- **Screen Readers**: Clear content organization and flow
- **Keyboard Navigation**: Ensure interactive elements are accessible
- **Color Contrast**: Maintain proper contrast ratios

## Dependencies

- **Tailwind CSS**: For grid layout and responsive design
- **Vue 3**: Slot system for content organization

## Related Components

- **SectionContent2Column**: Two-column variant
- **GridCardContainer**: Card-based grid layout
- **SectionCards3Column**: Card-specific three-column layout
