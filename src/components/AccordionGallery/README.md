# SwitcherGallery Component

A modern, interactive gallery component with step-by-step navigation, auto-play functionality, and smooth transitions between content sections.

## Features

- **Dual Title Display**: Accent and main title with customizable colors
- **Interactive Steps**: Clickable navigation with numbered badges
- **Auto-play Mode**: Automatic progression through items with progress indicator
- **Media Support**: Background images, overlay videos, and images
- **Smooth Transitions**: Fade and scale animations between items
- **Responsive Design**: Flexible layout with customizable dimensions
- **Progress Bar**: Visual indicator of auto-play progression

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accentTitle` | String | `'Tightest feedback loop'` | Accent title text (colored) |
| `mainTitle` | String | `'Steer agents to go from prompt to shippable feature'` | Main title text |
| `accentColor` | String | `'rgb(121, 156, 146)'` | Color for accent title |
| `mainTitleColor` | String | `'rgba(250, 249, 246, 0.9)'` | Color for main title |
| `items` | Array | **Required** | Array of gallery items (see structure below) |
| `padding` | String | `'64px 30px'` | Component padding |
| `galleryHeight` | String | `'600px'` | Height of the gallery area |
| `autoPlay` | Boolean | `true` | Enable auto-play functionality |
| `autoPlayInterval` | Number | `5000` | Auto-play interval in milliseconds |
| `showProgress` | Boolean | `true` | Show progress bar on active step |

## Item Structure

Each item in the `items` array should have the following structure:

```typescript
{
  title: string              // Step title
  description: string        // Step description
  backgroundImage?: string   // Background image URL
  videoSrc?: string         // Video source URL
  videoPoster?: string      // Video poster/thumbnail URL
  overlaySrc?: string       // Overlay image URL (alternative to video)
  overlayClass?: string     // Tailwind classes for overlay positioning
}
```

## Usage Example

```vue
<template>
  <SwitcherGallery
    accent-title="Build faster"
    main-title="Deploy edge applications with confidence"
    accent-color="rgb(243, 101, 43)"
    main-title-color="rgba(250, 249, 246, 0.9)"
    :items="galleryItems"
    :auto-play="true"
    :auto-play-interval="5000"
    :show-progress="true"
    gallery-height="600px"
  />
</template>

<script setup>
import { ref } from 'vue'
import SwitcherGallery from '@/components/SwitcherGallery'

const galleryItems = ref([
  {
    title: 'Start with a prompt',
    description: 'Tell the agent what you want: build a feature, fix a bug, or debug a crash.',
    backgroundImage: '/images/bg-1.jpg',
    videoSrc: '/videos/demo-1.mp4',
    videoPoster: '/images/poster-1.jpg',
    overlayClass: 'top-8 left-8 w-[400px] h-[300px]'
  },
  {
    title: 'Agent writes code',
    description: 'The agent generates code tailored to your codebase.',
    backgroundImage: '/images/bg-2.jpg',
    videoSrc: '/videos/demo-2.mp4',
    videoPoster: '/images/poster-2.jpg',
    overlayClass: 'top-8 right-8 w-[450px] h-[320px]'
  }
])
</script>
```

## Overlay Positioning

Use Tailwind classes in `overlayClass` to position video/image overlays:

```javascript
// Top-left corner
overlayClass: 'top-8 left-8 w-[400px] h-[300px]'

// Top-right corner
overlayClass: 'top-8 right-8 w-[450px] h-[320px]'

// Bottom-left corner
overlayClass: 'bottom-8 left-8 w-[500px] h-[350px]'

// Bottom-right corner
overlayClass: 'bottom-8 right-8 w-[480px] h-[340px]'

// Centered
overlayClass: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]'
```

## Behavior

### Auto-play Mode
- When `autoPlay` is `true`, the gallery automatically cycles through items
- Progress bar shows the current progress within each interval
- Clicking a step resets the auto-play timer

### Manual Mode
- When `autoPlay` is `false`, users must click steps to navigate
- Hovering over steps does not change the active item
- No progress bar is shown

### Transitions
- Background images fade in/out with 500ms duration
- Overlay content scales slightly (0.95) when inactive
- All transitions use smooth easing

## Styling

The component uses:
- **TailwindCSS** for utility classes
- **Custom transitions** for smooth animations
- **Scoped styles** for component-specific styling
- **CSS variables** for dynamic colors

## Accessibility

- Semantic HTML structure
- Keyboard navigation support (clickable steps)
- ARIA attributes for progress bars
- Alt text support for images

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Video autoplay requires user interaction on some browsers
- Smooth transitions require CSS transition support
