# Image Component

A flexible image component with responsive and cover options.

## Features

- **Full Width Control**: Toggle full-width display
- **Cover Mode**: Object-cover with full height
- **Lazy Loading**: Built-in lazy loading support
- **Event Handling**: Load and error events
- **Natural Height**: Maintains image aspect ratio by default

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | *required* | Image source URL |
| `alt` | `string` | `''` | Alternative text for accessibility |
| `fullWidth` | `boolean` | `false` | If true, applies `w-full` class |
| `cover` | `boolean` | `false` | If true, applies `object-cover` and `h-full` |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Native loading strategy |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `load` | `Event` | Emitted when image loads successfully |
| `error` | `Event` | Emitted when image fails to load |

## Usage

### Basic Usage

```vue
<Image 
  src="https://example.com/image.jpg"
  alt="Example image"
/>
```

### Full Width

```vue
<Image 
  src="https://example.com/image.jpg"
  alt="Full width image"
  :fullWidth="true"
/>
```

### Cover Mode

```vue
<div class="h-64">
  <Image 
    src="https://example.com/image.jpg"
    alt="Cover image"
    :cover="true"
  />
</div>
```

### With Event Handlers

```vue
<script setup>
const handleLoad = (event) => {
  console.log('Image loaded:', event)
}

const handleError = (event) => {
  console.error('Image failed to load:', event)
}
</script>

<template>
  <Image 
    src="https://example.com/image.jpg"
    alt="Image with handlers"
    @load="handleLoad"
    @error="handleError"
  />
</template>
```

### Eager Loading

```vue
<Image 
  src="https://example.com/hero.jpg"
  alt="Hero image"
  loading="eager"
  :fullWidth="true"
/>
```

## Behavior

### Height Rules

- **Default**: Height is determined by the natural image dimensions (`h-auto`)
- **Cover Mode**: Height fills parent container (`h-full`) with `object-cover`

### Width Rules

- **Default**: Width is determined by the natural image dimensions (`w-auto`)
- **Full Width**: Width fills parent container (`w-full`)

### Container

The image is wrapped in a container with:
- `relative` positioning
- `overflow-hidden` to prevent overflow
- Width controlled by `fullWidth` prop

## Examples

### Hero Image

```vue
<div class="h-screen">
  <Image 
    src="/hero.jpg"
    alt="Hero background"
    :fullWidth="true"
    :cover="true"
    loading="eager"
  />
</div>
```

### Responsive Gallery

```vue
<div class="grid grid-cols-3 gap-4">
  <Image 
    v-for="image in images"
    :key="image.id"
    :src="image.url"
    :alt="image.title"
    :fullWidth="true"
  />
</div>
```

### Card Image

```vue
<div class="rounded-lg overflow-hidden">
  <Image 
    src="/card-image.jpg"
    alt="Card image"
    :fullWidth="true"
  />
</div>
```

## Design Notes

- Uses Tailwind CSS utility classes
- Maintains aspect ratio by default
- Container provides positioning context
- Supports native lazy loading
- Emits standard DOM events
