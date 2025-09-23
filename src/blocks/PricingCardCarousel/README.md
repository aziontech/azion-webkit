# PricingCardCarousel

A mobile-first carousel block component for displaying pricing cards using Swiper. Designed specifically for mobile visualization showing 1.25 cards with smooth scrolling.

## Features

- **Mobile-First Design**: Shows 1.25 cards on mobile for optimal UX
- **Responsive Breakpoints**: Adapts to different screen sizes
- **Swiper Integration**: Smooth touch/swipe navigation
- **PricingCard Integration**: Uses existing PricingCard component
- **Event Handling**: Emits card click events with card data and index

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `cards` | `Array<PricingCardData>` | Yes | `[]` | Array of pricing card data objects |

### PricingCardData Interface

```typescript
interface PricingCardData {
  popular?: boolean
  title: string
  subtitle?: string
  features: Array<{
    icon: string
    label: string
  }>
  monthlyPrice: string
  annualPrice?: string
  currentPeriod?: 'monthly' | 'annual'
  savings?: string
  buttonLabel: string
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `card-click` | `{ card: PricingCardData, index: number }` | Emitted when a pricing card button is clicked |

## Responsive Behavior

- **Mobile (320px+)**: 1.25 cards visible, 16px spacing
- **Small Tablets (640px+)**: 2 cards visible, 20px spacing
- **Medium Tablets (768px+)**: 2.5 cards visible, 24px spacing
- **Desktop (1024px+)**: 3 cards visible, 32px spacing

## Usage

```vue
<template>
  <PricingCardCarousel 
    :cards="pricingCards" 
    @card-click="handleCardSelection"
  />
</template>

<script setup>
import PricingCardCarousel from '@/blocks/PricingCardCarousel'

const pricingCards = [
  {
    title: 'Free',
    subtitle: 'Test, learn and vibe code',
    features: [
      { icon: 'pi-check', label: '1 Workspace' },
      { icon: 'pi-check', label: 'Community Support' }
    ],
    monthlyPrice: '$0',
    buttonLabel: 'Get Started'
  },
  {
    popular: true,
    title: 'Pro',
    subtitle: 'For growing businesses',
    features: [
      { icon: 'pi-check', label: '10 Workspaces' },
      { icon: 'pi-check', label: 'Priority Support' }
    ],
    monthlyPrice: '$29',
    annualPrice: '$290',
    savings: 'Save 17%',
    buttonLabel: 'Start Free Trial'
  }
]

const handleCardSelection = ({ card, index }) => {
  console.log('Selected plan:', card.title, 'at index:', index)
}
</script>
```

## Styling

The component uses Tailwind CSS classes and includes:
- Responsive padding and spacing
- Mobile-optimized swiper configuration
- Smooth transitions and interactions
- Proper overflow handling

## Dependencies

- **Swiper**: Vue 3 integration for carousel functionality
- **PricingCard**: Existing component for individual card rendering
- **Tailwind CSS**: For styling and responsive design

## Storybook

View the component in Storybook at `Blocks/PricingCardCarousel` with multiple examples:
- Default (4 cards)
- Three Cards
- Two Cards  
- Mobile Preview

## Technical Notes

- Uses Swiper's Vue 3 components (`Swiper`, `SwiperSlide`)
- Imports only basic Swiper CSS for minimal bundle size
- No additional Swiper modules required for basic functionality
- Emits events for integration with parent components
- Fully typed with TypeScript definitions
