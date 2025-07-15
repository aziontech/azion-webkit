# SectionHighlight

## Purpose

Component SectionHighlight

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |
| `images` | `Object` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `button` | `Object` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `darkImage` | darkImage slot |
| `lightImage` | lightImage slot |

## Dependencies

### Internal
- ../linkbutton
- ../overline
- ../themeawareimageswitcher

## Usage Example

```vue
<template>
  <SectionHighlight
    :title=""exemplo""
    :images="{}"
  >
  </SectionHighlight>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionHighlight.d.ts)
- [Component Implementation](./SectionHighlight.vue)
- [Export Module](./sectionhighlight.js)
- [Package Configuration](./package.json)
