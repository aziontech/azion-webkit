# SectionCarouselRelease

## Purpose

Component SectionCarouselRelease

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |
| `items` | `Array`  | No description |

### Optional

| Prop                 | Type     | Default      | Values | Description    |
| -------------------- | -------- | ------------ | ------ | -------------- |
| `overline`           | `String` | `() => ''`   | -      | No description |
| `titleTag`           | `String` | `() => 'h2'` | -      | No description |
| `description`        | `String` | `() => ''`   | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''`   | -      | No description |

## Slots

| Slot        | Description    |
| ----------- | -------------- |
| `principal` | principal slot |

## Dependencies

### Internal

- ../contentsection
- ../releasecarousel

## Usage Example

```vue
<template>
  <SectionCarouselRelease
    :title=""exemplo""
    :items="[]"
  >
  </SectionCarouselRelease>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCarouselRelease.d.ts)
- [Component Implementation](./SectionCarouselRelease.vue)
- [Export Module](./sectioncarouselrelease.js)
- [Package Configuration](./package.json)
