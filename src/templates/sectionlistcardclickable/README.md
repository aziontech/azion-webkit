# SectionListCardClickable

## Purpose

Component SectionListCardClickable

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
| `overline` | `String` | `() => ''` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `main` | main slot |
| `content` | content slot |

## Dependencies

### Internal
- ../contentsection
- ../cardbaseclickable
- ../cardtitle
- ../carddescription

## Usage Example

```vue
<template>
  <SectionListCardClickable
    :titleTag=""exemplo""
    :title=""exemplo""
    :cards="[]"
  >
  </SectionListCardClickable>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionListCardClickable.d.ts)
- [Component Implementation](./SectionListCardClickable.vue)
- [Export Module](./sectionlistcardclickable.js)
- [Package Configuration](./package.json)
