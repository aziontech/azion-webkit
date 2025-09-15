# PricingCard Component

A flexible and modern pricing card component for displaying pricing plans with features, pricing information, and call-to-action buttons.

## Features

- **Responsive Design**: Adapts to different screen sizes with proper spacing and typography
- **Dark Mode Support**: Full dark/light mode compatibility with PrimeVue theme system
- **Interactive Elements**: Hover effects and smooth transitions
- **Flexible Content**: Configurable title, subtitle, description, features list, and pricing
- **Customizable Button**: Primary/secondary button variants with click events
- **TypeScript Support**: Full type definitions included
- **Accessibility**: Proper semantic HTML and ARIA support

## Usage

### Basic Example

```vue
<template>
  <PricingCard
    title="Free"
    subtitle="Test, learn and vibe code"
    description="Free Forever"
    :features="['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']"
    price="0"
    @button-click="handlePlanSelection"
  />
</template>

<script>
import PricingCard from '@/components/PricingCard'

export default {
  components: {
    PricingCard
  },
  methods: {
    handlePlanSelection(planData) {
      console.log('Selected plan:', planData)
      // Handle plan selection logic
    }
  }
}
</script>
```

### Advanced Example

```vue
<template>
  <PricingCard
    title="Pro"
    subtitle="For growing teams"
    description="Everything you need to scale"
    :features="[
      'Unlimited Workspaces',
      'Advanced Analytics',
      'Priority Support',
      'Custom Integrations'
    ]"
    price="29"
    price-label="STARTING AT"
    price-period="/MONTH"
    button-label="UPGRADE NOW"
    button-variant="primary"
    additional-info="Cancel anytime"
    :highlighted="true"
    @button-click="handleUpgrade"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | **Required.** Title of the pricing card |
| `subtitle` | `string` | `''` | Subtitle text displayed below the title |
| `description` | `string` | `''` | Description text displayed below the subtitle |
| `features` | `string[]` | `[]` | Array of feature strings to display with checkmarks |
| `price` | `string \| number` | - | **Required.** Price value |
| `priceLabel` | `string` | `'START AT'` | Label displayed above the price |
| `pricePeriod` | `string` | `'/MO'` | Period text displayed after the price |
| `buttonLabel` | `string` | `'START NOW'` | Text for the call-to-action button |
| `buttonVariant` | `'primary' \| 'secondary'` | `'secondary'` | Button variant style |
| `additionalInfo` | `string` | `''` | Additional information text displayed below the button |
| `highlighted` | `boolean` | `false` | Whether the card should be highlighted with primary color border |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `button-click` | `{ title: string, price: string \| number }` | Emitted when the CTA button is clicked |

## Styling

The component uses PrimeVue's theme system and includes:

- **Hover Effects**: Card lifts slightly on hover with enhanced shadow
- **Dark Mode**: Automatic color adaptation based on theme
- **Responsive Typography**: Scales appropriately across screen sizes
- **Smooth Transitions**: All interactive elements have smooth animations

### CSS Classes

- `.pricing-card`: Main container class
- `.pricing-card.highlighted`: Applied when `highlighted` prop is true

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- ARIA labels and roles where appropriate
- Keyboard navigation support through PrimeVue Button component
- High contrast colors in both light and dark modes

## Examples

### Free Plan Card
```vue
<PricingCard
  title="Free"
  subtitle="Test, learn and vibe code"
  description="Free Forever"
  :features="['1 Workspace', 'Basic Support', 'Community Access']"
  price="0"
/>
```

### Premium Plan Card
```vue
<PricingCard
  title="Enterprise"
  subtitle="For large organizations"
  description="Custom solutions at scale"
  :features="[
    'Unlimited Everything',
    'Dedicated Support',
    'Custom Integrations',
    'SLA Guarantee'
  ]"
  price="Contact Us"
  price-label="PRICING"
  price-period=""
  button-label="CONTACT SALES"
  button-variant="primary"
  :highlighted="true"
/>
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Supports all screen sizes from mobile to desktop
