# SectionBigNumbersCarousel

A carousel section block component for displaying large numbers, statistics, or metrics with Swiper integration. Perfect for showcasing key performance indicators and impressive statistics.

## Features

- **Big Numbers Display**: Optimized for large numerical data presentation
- **Swiper Integration**: Smooth carousel navigation with touch support
- **Responsive Design**: Adapts to different screen sizes
- **Custom Navigation**: Styled navigation controls
- **Statistics Focus**: Designed specifically for metrics and KPIs

## Props

| Prop            | Type     | Required | Default | Description                       |
| --------------- | -------- | -------- | ------- | --------------------------------- |
| `title`         | `string` | No       | -       | Section title                     |
| `numbers`       | `Array`  | Yes      | `[]`    | Array of number/statistic objects |
| `bottomSpacing` | `string` | No       | `''`    | Additional bottom spacing classes |

### Number Interface

```typescript
interface NumberItem {
  value: string | number
  label: string
  description?: string
  suffix?: string
  prefix?: string
}
```

## Usage

### Basic Example

```vue
<template>
  <SectionBigNumbersCarousel
    title="Platform Statistics"
    :numbers="platformStats"
  />
</template>

<script setup>
  import SectionBigNumbersCarousel from '@/blocks/SectionBigNumbersCarousel'

  const platformStats = [
    {
      value: '100+',
      label: 'Edge Locations',
      description: 'Worldwide coverage'
    },
    {
      value: '99.9',
      label: 'Uptime SLA',
      suffix: '%',
      description: 'Guaranteed reliability'
    },
    {
      value: '60',
      label: 'Deploy Time',
      suffix: 's',
      description: 'Average deployment'
    }
  ]
</script>
```

## Dependencies

- **Swiper**: Vue 3 integration for carousel functionality
- **Tailwind CSS**: For styling and responsive design
