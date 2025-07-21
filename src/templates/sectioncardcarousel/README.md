# SectionCardCarousel

## Purpose

Component SectionCardCarousel

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `titleTag` | `String` | No description |
| `title`    | `String` | No description |

### Optional

| Prop                 | Type     | Default    | Values | Description    |
| -------------------- | -------- | ---------- | ------ | -------------- |
| `overline`           | `String` | `() => ''` | -      | No description |
| `description`        | `String` | `() => ''` | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -      | No description |
| `cards`              | `Array`  | -          | -      | No description |
| `responsiveOptions`  | `Array`  | `() => [`  | -      | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `main`    | main slot    |
| `item`    | item slot    |
| `content` | content slot |

## Dependencies

### External

- vue
- primevue/carousel

### Internal

- ../contentsection
- ../cardbaseclickable
- ../cardtitle
- ../carddescription

## Usage Example

```vue
<template>
  <SectionCardCarousel
    :titleTag=""exemplo""
    :title=""exemplo""
  >
  </SectionCardCarousel>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCardCarousel.d.ts)
- [Component Implementation](./SectionCardCarousel.vue)
- [Export Module](./sectioncardcarousel.js)
- [Package Configuration](./package.json)
