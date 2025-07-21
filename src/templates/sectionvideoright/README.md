# SectionVideoRight

## Purpose

Component SectionVideoRight

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `video` | `Object` | No description |

### Optional

| Prop                 | Type     | Default    | Values | Description    |
| -------------------- | -------- | ---------- | ------ | -------------- |
| `overline`           | `String` | `() => ''` | -      | No description |
| `title`              | `String` | `() => ''` | -      | No description |
| `titleTag`           | `String` | `'h2'`     | -      | No description |
| `description`        | `String` | `() => ''` | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -      | No description |
| `cards`              | `Array`  | -          | -      | No description |

## Slots

| Slot        | Description    |
| ----------- | -------------- |
| `main`      | main slot      |
| `action`    | action slot    |
| `content`   | content slot   |
| `principal` | principal slot |

## Dependencies

### Internal

- ../contentsection
- ../basemodal
- ../cardbaseclickable
- ../cardtitle
- ../carddescription
- ../tile

## Usage Example

```vue
<template>
  <SectionVideoRight :video="{}"> </SectionVideoRight>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionVideoRight.d.ts)
- [Component Implementation](./SectionVideoRight.vue)
- [Export Module](./sectionvideoright.js)
- [Package Configuration](./package.json)
