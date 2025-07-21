# HeroVideoRight

## Purpose

Component HeroVideoRight

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |
| `video` | `Object` | No description |

### Optional

| Prop                 | Type     | Default      | Values | Description    |
| -------------------- | -------- | ------------ | ------ | -------------- |
| `overline`           | `String` | `() => ''`   | -      | No description |
| `titleTag`           | `String` | `() => 'h1'` | -      | No description |
| `description`        | `String` | `() => ''`   | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''`   | -      | No description |
| `cards`              | `Array`  | `() => []`   | -      | No description |

## Slots

| Slot        | Description    |
| ----------- | -------------- |
| `main`      | main slot      |
| `action`    | action slot    |
| `content`   | content slot   |
| `principal` | principal slot |

## Dependencies

### Internal

- ../herobase
- ../basemodal
- ../cardbaseclickable
- ../cardtitle
- ../carddescription
- ../tile

## Usage Example

```vue
<template>
  <HeroVideoRight
    :title=""exemplo""
    :video="{}"
  >
  </HeroVideoRight>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroVideoRight.d.ts)
- [Component Implementation](./HeroVideoRight.vue)
- [Export Module](./herovideoright.js)
- [Package Configuration](./package.json)
