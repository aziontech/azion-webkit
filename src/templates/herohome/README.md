# HeroHome

## Purpose

Component HeroHome

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `titleTag` | `String` | No description |
| `logos`    | `Array`  | No description |

### Optional

| Prop                 | Type     | Default    | Values | Description    |
| -------------------- | -------- | ---------- | ------ | -------------- |
| `bannerNews`         | `Object` | -          | -      | No description |
| `overline`           | `String` | `() => ''` | -      | No description |
| `title`              | `String` | `() => ''` | -      | No description |
| `description`        | `String` | `() => ''` | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -      | No description |
| `logosTitle`         | `String` | `() => ''` | -      | No description |
| `buttons`            | `Array`  | `() => []` | -      | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `title`   | title slot   |
| `actions` | actions slot |
| `content` | content slot |

## Dependencies

### Internal

- ../herobase
- ../linkbutton
- ../contentlogo

## Usage Example

```vue
<template>
  <HeroHome
    :titleTag=""exemplo""
    :logos="[]"
  >
  </HeroHome>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroHome.d.ts)
- [Component Implementation](./HeroHome.vue)
- [Export Module](./herohome.js)
- [Package Configuration](./package.json)
