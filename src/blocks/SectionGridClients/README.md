# SectionGridClients

A responsive grid section component for displaying client showcase cards, logo cards, and persona/profile cards in a flexible layout. The component automatically positions showcase cards at fixed positions while filling remaining slots with cards from the `cards` array.

## Features

- **Showcase Cards**: Large featured cards with titles, actions, and logos
- **Logo Cards**: Simple logo display cards with customizable background colors
- **Persona Cards**: Profile cards with background images and titles
- **Responsive Layout**: Cards hide/show at different breakpoints (md, xl)
- **Fixed Grid Positions**: Showcase cards maintain their exact positions in the layout
- **Flexible Card Array**: Other cards are filled sequentially into remaining positions

## Props

| Prop            | Type             | Required | Default   | Description                                                      |
| --------------- | ---------------- | -------- | --------- | ---------------------------------------------------------------- |
| `showcaseCards` | `ShowcaseCard[]` | No       | `[]`      | Array of showcase cards (positioned at fixed layout positions)   |
| `cards`         | `Card[]`         | Yes      | `[]`      | Array of cards (LogoCard or PersonaCard) filled sequentially     |
| `bottomSpacing` | `string`         | No       | `'mb-24'` | Bottom spacing class (`mb-0`, `mb-6`, `mb-12`, `mb-24`, `mb-48`) |
| `id`            | `string`         | No       | `''`      | Section ID attribute                                             |

## Card Types

### ShowcaseCard

Large featured cards with rich content and call-to-action.

```typescript
interface ShowcaseCard {
  component: 'showcase'
  title: string // Card title
  action: string // Action text displayed at the bottom
  href: string // Link URL
  logo: string // Logo as HTML string (SVG)
  size?: '2x2' | '2x1' // Card size - 2x2 spans 2 columns and 2 rows, 2x1 spans 2 columns and 1 row
  type?: 'lavander' | 'white' | 'image' // Card type/theme
  backgroundImage?: string // Background image URL (used when type is 'image')
  target?: '_blank' | '_self' // Link target
}
```

**Card Types:**

- `lavander`: Violet background with dark text
- `white`: White background with black text
- `image`: Transparent background with image overlay and white text

### LogoCard

Simple logo display cards with customizable background colors.

```typescript
interface LogoCard {
  component: 'logo'
  type?: 'neutral' | 'orange' | 'white' | 'lavander' // Background color
  logo: string // Logo as HTML string (SVG) - required
}
```

**Background Colors:**

- `neutral`: Dark gray background (`bg-neutral-900`)
- `orange`: Orange background (`bg-orange-500`)
- `white`: White background (`bg-white`)
- `lavander`: Violet background (`bg-violet-500`)

### PersonaCard

Profile cards with background images and titles.

```typescript
interface PersonaCard {
  component: 'persona'
  title: string // Profile title
  backgroundImage: string // Background image URL
}
```

## Layout Structure

The component uses a fixed 11-position grid layout:

1. **Position 0**: Showcase card - Always visible
2. **Position 1**: Card slot - Hidden on mobile, visible from `md` breakpoint
3. **Position 2**: Card slot - Hidden until `xl` breakpoint
4. **Position 3**: Card slot - Hidden on mobile, visible from `md` breakpoint
5. **Position 4**: Showcase card - Hidden until `xl` breakpoint
6. **Position 5**: Card slot - Hidden on mobile, visible from `md` breakpoint
7. **Position 6**: Showcase card - Always visible
8. **Position 7**: Card slot - Hidden on mobile, visible from `md` breakpoint
9. **Position 8**: Card slot - Hidden on mobile, visible from `md` breakpoint
10. **Position 9**: Card slot - Hidden on mobile, visible from `md` breakpoint
11. **Position 10**: Card slot - Hidden until `xl` breakpoint

### Responsive Behavior

- **Mobile (< md)**: Only showcase cards at positions 0 and 6 are visible
- **Tablet (md to xl)**: Showcase cards + cards with `hidden md:flex` classes
- **Desktop (xl+)**: All cards visible

## Usage

```vue
<template>
  <SectionGridClients
    :showcase-cards="showcaseCards"
    :cards="cards"
    bottom-spacing="mb-24"
    id="clients-section"
  />
</template>

<script setup>
  import SectionGridClients from 'azion-webkit/blocks/SectionGridClients'

  const showcaseCards = [
    {
      component: 'showcase',
      title: 'Client Success Story',
      action: 'Learn More',
      href: '/case-study',
      logo: '<svg>...</svg>',
      size: '2x2',
      type: 'lavander'
    }
  ]

  const cards = [
    {
      component: 'logo',
      type: 'white',
      logo: '<svg>...</svg>'
    },
    {
      component: 'persona',
      title: 'John Doe',
      backgroundImage: '/images/profile.jpg'
    }
  ]
</script>
```

## Grid Layout

The component uses a responsive grid:

- **Mobile**: 1 column
- **Tablet (md)**: 3 columns
- **Desktop (xl)**: 4 columns

Cards automatically span based on their type:

- Showcase cards with `size: '2x2'` span 2 columns and 2 rows
- Showcase cards with `size: '2x1'` span 2 columns and 1 row
- Logo and Persona cards span 1 column and 1 row

## Dependencies

- **Tailwind CSS**: For grid layout, responsive design, and styling
- **Vue 3**: Component structure and reactivity
- **PrimeVue Icons**: For action icons (pi-angle-right)
