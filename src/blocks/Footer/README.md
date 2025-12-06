# Footer

A comprehensive footer block component with security information, status section, and multi-column link organization. Features responsive design and slot-based content areas.

## Features

- **Two-section Layout**: Security status bar and main content area
- **Security Information**: Dedicated area for compliance badges and certifications
- **Multi-column Links**: Organized navigation with category headers
- **Slot-based Content**: Flexible content insertion via slots
- **Responsive Design**: Adapts from mobile to desktop layouts
- **Tag Integration**: Built-in PrimeVue Tag components for badges

## Props

| Prop                  | Type     | Required | Default | Description                              |
| --------------------- | -------- | -------- | ------- | ---------------------------------------- |
| `securityInformation` | `Object` | Yes      | -       | Security badges and certification info   |
| `content`             | `Object` | Yes      | -       | Main footer content (title, description) |
| `listData`            | `Array`  | Yes      | -       | Navigation columns data                  |

### SecurityInformation Interface

```typescript
interface SecurityInformation {
  title: string
  tags: Array<{
    title: string
    icon?: string
  }>
}
```

### Content Interface

```typescript
interface Content {
  title: string
  description: string // Supports HTML
}
```

### ListData Interface

```typescript
interface ListData {
  title: string
  list: Array<{
    title: string
    link: string
    icon?: string
  }>
}
```

## Slots

| Slot        | Description                              |
| ----------- | ---------------------------------------- |
| `status`    | Status information or additional content |
| `list-data` | Custom content for navigation list areas |

## Usage

### Basic Example

```vue
<template>
  <Footer
    :securityInformation="securityInfo"
    :content="footerContent"
    :listData="navigationData"
  >
    <template #status>
      <StatusIndicator />
    </template>
  </Footer>
</template>

<script setup>
  import Footer from '@/blocks/Footer'

  const securityInfo = {
    title: 'Security & Compliance',
    tags: [
      { title: 'SOC 2 Type II', icon: 'pi pi-shield' },
      { title: 'ISO 27001', icon: 'pi pi-verified' },
      { title: 'GDPR Compliant', icon: 'pi pi-lock' }
    ]
  }

  const footerContent = {
    title: 'Build at the Edge',
    description:
      'The <strong>edge computing platform</strong> that accelerates your applications worldwide.'
  }

  const navigationData = [
    {
      title: 'Products',
      list: [
        { title: 'Edge Application', link: '/products/edge-application' },
        { title: 'Edge Firewall', link: '/products/edge-firewall' },
        { title: 'Edge Functions', link: '/products/edge-functions' }
      ]
    },
    {
      title: 'Solutions',
      list: [
        { title: 'E-commerce', link: '/solutions/ecommerce' },
        { title: 'Gaming', link: '/solutions/gaming' },
        { title: 'Media & Entertainment', link: '/solutions/media' }
      ]
    }
  ]
</script>
```

### With Custom Status

```vue
<template>
  <Footer v-bind="footerProps">
    <template #status>
      <div class="flex items-center gap-4">
        <StatusBadge status="operational" />
        <span class="text-white text-sm">All systems operational</span>
      </div>
    </template>
  </Footer>
</template>
```

## Styling

The component uses:

- **Security Section**: Dark background (bg-neutral-950)
- **Main Section**: Light background (bg-[#CEC9C9])
- **Typography**: Proto Mono for labels, Sora for headings
- **Colors**: Black text on light background, white on dark
- **Borders**: Subtle black borders for section separation

## Responsive Behavior

- **Mobile**: Single column layout, stacked navigation
- **Tablet**: Partial multi-column layout
- **Desktop (lg+)**: Full multi-column layout with proper spacing

## Accessibility

- Semantic `<footer>` element
- Proper heading hierarchy
- Accessible link structure
- Screen reader friendly navigation
- Keyboard-accessible elements

## Dependencies

- **PrimeVue Tag**: For security badges
- **Tailwind CSS**: For styling and responsive design
- **Vue 3**: Composition API and slots
