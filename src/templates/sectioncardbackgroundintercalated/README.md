# SectionCardBackgroundIntercalated

## Purpose

Component SectionCardBackgroundIntercalated

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `titleTag` | `String` | No description |
| `title` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `cards` | `Array` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `content` | content slot |

## Dependencies

### Internal
- ../contentsection
- ../overline
- ../cardbase
- ../cardtitle
- ../cardbgimage

## Usage Example

```vue
<template>
  <SectionCardBackgroundIntercalated
    :titleTag=""exemplo""
    :title=""exemplo""
  >
  </SectionCardBackgroundIntercalated>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCardBackgroundIntercalated.d.ts)
- [Component Implementation](./SectionCardBackgroundIntercalated.vue)
- [Export Module](./sectioncardbackgroundintercalated.js)
- [Package Configuration](./package.json)
