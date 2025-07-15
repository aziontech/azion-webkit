# LinkButton

## Purpose

Component LinkButton

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `link` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `icon` | `String` | - | - | No description |
| `customIconStyle` | `String` | - | - | No description |
| `iconPos` | `String` | - | `left\|right\|center` | No description |
| `label` | `String` | - | - | No description |
| `outlined` | `Boolean` | `false` | - | No description |
| `text` | `Boolean` | `false` | - | No description |
| `severity` | `String` | - | `secondary\|info` | No description |
| `target` | `String` | `'_self'` | `_blank\|_self` | No description |
| `size` | `String` | `'medium'` | `small\|medium` | No description |
| `textLink` | `Boolean` | - | - | No description |

## Usage Example

```vue
<template>
  <LinkButton
    :link=""exemplo""
  >
  </LinkButton>
</template>
```

## Related Links

- [TypeScript Definitions](./LinkButton.d.ts)
- [Component Implementation](./LinkButton.vue)
- [Export Module](./linkbutton.js)
- [Package Configuration](./package.json)
