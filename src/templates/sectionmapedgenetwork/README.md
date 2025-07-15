# SectionMapEdgeNetwork

## Purpose

Component SectionMapEdgeNetwork

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `titleTag` | `String` | - | - | No description |
| `description` | `String` | - | - | No description |
| `locations` | `Array` | - | - | No description |
| `cities` | `Object` | - | - | No description |
| `tags` | `Array` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Default component content |
| `content` | content slot |

## Dependencies

### External
- primevue/tag
- primevue/tabview
- primevue/tabpanel
- primevue/badge
- tippy.js

### Internal
- ../contentsection
- ../mapedgenetwork

## Usage Example

```vue
<template>
  <SectionMapEdgeNetwork
    :title=""exemplo""
  >
    Component content
  </SectionMapEdgeNetwork>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionMapEdgeNetwork.d.ts)
- [Component Implementation](./SectionMapEdgeNetwork.vue)
- [Export Module](./sectionmapedgenetwork.js)
- [Package Configuration](./package.json)
