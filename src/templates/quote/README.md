# Quote

## Purpose

Component Quote

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `text` | `String` | No description |
| `imageDark` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `border` | `Boolean` | `true` | - | No description |
| `disableDegrade` | `Boolean` | `false` | - | No description |
| `author` | `String` | - | - | No description |
| `imageLight` | `String` | - | - | No description |
| `button` | `Object` | - | - | No description |
| `alt` | `String` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `lightImage` | lightImage slot |
| `darkImage` | darkImage slot |

## Dependencies

### Internal
- ../themeawareimageswitcher
- ../linkbutton

## Usage Example

```vue
<template>
  <Quote
    :text=""exemplo""
    :imageDark=""exemplo""
  >
  </Quote>
</template>
```

## Related Links

- [TypeScript Definitions](./Quote.d.ts)
- [Component Implementation](./Quote.vue)
- [Export Module](./quote.js)
- [Package Configuration](./package.json)
