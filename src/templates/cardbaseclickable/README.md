# CardBaseClickable

## Purpose

cardbaseclickable

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `link` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `spacing` | `String` | `'base'` | `compact\|relaxed\|base` | No description |
| `grid` | `Boolean` | - | - | No description |
| `backgroundColor` | `String` | `'default'` | `outlined\|shape\|default` | No description |
| `hover` | `String` | `'default'` | `default\|outlined` | No description |
| `title` | `String` | - | - | No description |
| `ariaLabel` | `String` | - | - | No description |
| `target` | `String` | `'_self'` | `_blank\|_self` | No description |
| `disableAction` | `Boolean` | `false` | - | No description |
| `action` | `Object` | - | - | No description |
| `pt` | `Object` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Default component content |

## Dependencies

### Internal
- ../cardbase

## Usage Example

```vue
<template>
  <CardBaseClickable
    :link=""exemplo""
  >
    Component content
  </CardBaseClickable>
</template>
```

## Related Links

- [TypeScript Definitions](./CardBaseClickable.d.ts)
- [Component Implementation](./CardBaseClickable.vue)
- [Export Module](./cardbaseclickable.js)
- [Package Configuration](./package.json)
