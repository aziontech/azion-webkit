# SectionGridHighlight

## Purpose

Component SectionGridHighlight

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `titleTag` | `String` | No description |
| `title` | `String` | No description |
| `cards` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `button` | `Object` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `main` | main slot |

## Dependencies

### Internal
- ../contentsection
- ../gridhighlight

## Usage Example

```vue
<template>
  <SectionGridHighlight
    :titleTag=""exemplo""
    :title=""exemplo""
    :cards="[]"
  >
  </SectionGridHighlight>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionGridHighlight.d.ts)
- [Component Implementation](./SectionGridHighlight.vue)
- [Export Module](./sectiongridhighlight.js)
- [Package Configuration](./package.json)
