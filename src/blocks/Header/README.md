# Header

A flexible header block component with sticky positioning and slot-based architecture for maximum customization. Features responsive design with mobile and desktop layouts.

## Features

- **Sticky Positioning**: Remains at top of viewport during scroll
- **Slot-based Architecture**: Flexible content insertion via slots
- **Responsive Design**: Adapts to different screen sizes
- **Secondary Menu**: Built-in support for secondary navigation items
- **Dark Theme**: Consistent with Azion's dark design system
- **TypeScript Support**: Full type definitions included

## Props

| Prop            | Type     | Required | Default | Description                           |
| --------------- | -------- | -------- | ------- | ------------------------------------- |
| `menuSecondary` | `Object` | No       | `{}`    | Configuration for secondary menu items |

### MenuSecondary Interface

```typescript
interface MenuSecondaryItem {
  text: string
  link: string
  title?: string
  target?: '_blank' | '_self'
  backgroundColor?: 'dark' | 'light'
}
```

## Slots

| Slot           | Description                                    |
| -------------- | ---------------------------------------------- |
| `logo`         | Logo or brand element (left side)             |
| `navigation`   | Main navigation menu (left side, after logo)  |
| `dialog`       | Dialog trigger or search (right side)         |
| `menu-mobile`  | Mobile menu trigger (right side, last item)   |

## Usage

### Basic Example

```vue
<template>
  <Header :menuSecondary="secondaryMenu">
    <template #logo>
      <AzionLogo href="/" />
    </template>
    
    <template #navigation>
      <MainNavigation :items="navItems" />
    </template>
    
    <template #dialog>
      <SearchDialog />
    </template>
    
    <template #menu-mobile>
      <MobileMenuButton @click="toggleMobileMenu" />
    </template>
  </Header>
</template>

<script setup>
  import Header from '@/blocks/Header'
  
  const secondaryMenu = [
    {
      text: 'Login',
      link: '/login',
      target: '_self'
    },
    {
      text: 'Sign Up',
      link: '/signup',
      backgroundColor: 'dark'
    }
  ]
</script>
```

### With Secondary Menu

```vue
<template>
  <Header :menuSecondary="menuItems">
    <!-- slots content -->
  </Header>
</template>

<script setup>
  const menuItems = [
    {
      text: 'Support',
      link: '/support',
      title: 'Get help and support'
    },
    {
      text: 'Console',
      link: 'https://console.azion.com',
      target: '_blank',
      backgroundColor: 'dark'
    }
  ]
</script>
```

## Styling

The component uses:

- **Background**: Dark neutral (bg-neutral-950)
- **Height**: 72px (h-18) on mobile, 76px (h-19) on desktop
- **Font**: Sora for consistent typography
- **Z-index**: 50 for proper layering
- **Sticky positioning**: Remains at top during scroll

## Responsive Behavior

- **Mobile**: Compact layout, secondary menu hidden on small screens
- **Desktop (xl+)**: Full layout with visible secondary menu
- **Sticky**: Maintains position at top of viewport on all screen sizes

## Accessibility

- Semantic `<header>` element
- Proper link attributes (title, target)
- Keyboard-accessible navigation
- Screen reader friendly structure

## Dependencies

- **Tailwind CSS**: For styling and responsive design
- **Vue 3**: Composition API and slots
- **Sora Font**: Typography consistency
