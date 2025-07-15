# SectionCarousel

## Purpose

Component SectionCarousel

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |
| `cards` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `description` | `String` | - | - | No description |
| `button` | `Object` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `principal` | principal slot |
| `item` | item slot |
| `content` | content slot |

## Dependencies

### External
- vue
- primevue/carousel
- primevue/tag

### Internal
- ../contentsection
- ../linkbutton
- ../cardbaseclickable
- ../cardtitle
- ../carddescription

## Usage Example

```vue
<template>
  <SectionCarousel
    :title=""exemplo""
    :cards="[]"
  >
  </SectionCarousel>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCarousel.d.ts)
- [Component Implementation](./SectionCarousel.vue)
- [Export Module](./sectioncarousel.js)
- [Package Configuration](./package.json)
