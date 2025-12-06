# SectionNetwork

A specialized section block component for displaying network information, infrastructure details, and global presence. Perfect for showcasing edge locations, data centers, and network coverage.

## Features

- **Network Visualization**: Display of network infrastructure and coverage
- **Global Presence**: Showcase of worldwide locations and presence
- **Interactive Elements**: Support for interactive network maps or diagrams
- **Statistics Integration**: Network performance metrics and statistics
- **Responsive Design**: Adapts to different screen sizes

## Props

| Prop          | Type     | Required | Default | Description                |
| ------------- | -------- | -------- | ------- | -------------------------- |
| `title`       | `string` | No       | -       | Section title              |
| `description` | `string` | No       | -       | Network description        |
| `locations`   | `Array`  | No       | `[]`    | Array of network locations |
| `statistics`  | `Object` | No       | -       | Network performance stats  |

### Location Interface

```typescript
interface Location {
  city: string
  country: string
  region: string
  coordinates?: [number, number]
}
```

### Statistics Interface

```typescript
interface Statistics {
  totalLocations: number
  coverage: string
  latency: string
  uptime: string
}
```

## Usage

```vue
<template>
  <SectionNetwork
    title="Global Edge Network"
    description="Deploy closer to your users with our worldwide infrastructure"
    :locations="edgeLocations"
    :statistics="networkStats"
  />
</template>

<script setup>
  const edgeLocations = [
    { city: 'São Paulo', country: 'Brazil', region: 'South America' },
    { city: 'New York', country: 'USA', region: 'North America' }
  ]

  const networkStats = {
    totalLocations: 100,
    coverage: '6 continents',
    latency: '<50ms',
    uptime: '99.9%'
  }
</script>
```

## Dependencies

- **Tailwind CSS**: For styling and responsive design
- **Vue 3**: Component structure and reactivity
