# LayoutContainer

A flexible layout container component that provides consistent spacing and responsive design for content sections.

## Usage

```vue
<template>
  <LayoutContainer>
    <h1>Your content here</h1>
    <p>More content...</p>
  </LayoutContainer>
</template>

<script setup>
import LayoutContainer from './blocks/LayoutContainer'
</script>
```

## Features

- **Responsive Design**: Adapts to different screen sizes with appropriate padding
- **Flexible Content**: Uses slots to accept any content
- **Max Width Control**: Maintains optimal reading width across devices
- **Centered Layout**: Automatically centers content horizontally
- **Consistent Spacing**: Provides standardized layout for all content sections

## Components Using LayoutContainer

The following blocks have been updated to use LayoutContainer:

- **SectionTitle** - Title sections with overline and descriptions
- **SectionContent2Column** - Two-column content layouts
- **SectionContent3Column** - Three-column content layouts  
- **SectionCards3Column** - Three-column card grids
- **SectionImageContent2Column** - Image and content combinations
- **BigNumbers** - Carousel component for displaying statistics and metrics
- **SectionCardCarousel** - Card carousel with navigation controls
- **SectionQuoteCarousel** - Quote carousel with testimonials
- **SectionMigratedClients** - Client migration showcase cards
- **SectionCallToAction** - Call-to-action sections with various layouts
- **SectionLogosQuote2Column** - Two-column layout combining client logos and testimonials

## Styling

The component applies the following base classes:
- `relative` - Relative positioning
- `max-w-xl xxxl:max-w-xxl` - Responsive max width
- `mx-auto` - Horizontal centering
- `py-12` - Vertical padding (top and bottom)
- `px-6 md:px-0` - Horizontal padding (responsive: padding on mobile, no padding on desktop)
- `flex flex-col justify-center` - Flexbox layout with vertical centering
