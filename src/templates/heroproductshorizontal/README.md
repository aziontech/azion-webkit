# HeroProductsHorizontal

## Purpose

Component HeroProductsHorizontal

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `hgroup`   | `String` | No description |
| `subtitle` | `String` | No description |
| `images`   | `String` | No description |
| `dark`     | `String` | No description |
| `alt`      | `String` | No description |
| `list`     | `Object` | No description |

### Optional

| Prop                 | Type     | Default    | Values   | Description    |
| -------------------- | -------- | ---------- | -------- | -------------- |
| `justify`            | `String` | -          | `center` | No description |
| `overline`           | `String` | `() => ''` | -        | No description |
| `description`        | `String` | `() => ''` | -        | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -        | No description |
| `buttons`            | `Array`  | `() => []` | -        | No description |

## Slots

| Slot         | Description     |
| ------------ | --------------- |
| `title`      | title slot      |
| `actions`    | actions slot    |
| `main`       | main slot       |
| `lightImage` | lightImage slot |
| `darkImage`  | darkImage slot  |
| `principal`  | principal slot  |

## Dependencies

### Internal

- ../herobase
- ../linkbutton
- ../themeawareimageswitcher
- ../listunordered
- ../titlegroup

## Usage Example

```vue
<template>
  <HeroProductsHorizontal
    :hgroup=""exemplo""
    :subtitle=""exemplo""
    :images=""exemplo""
    :dark=""exemplo""
    :alt=""exemplo""
    :list="{}"
  >
  </HeroProductsHorizontal>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroProductsHorizontal.d.ts)
- [Component Implementation](./HeroProductsHorizontal.vue)
- [Export Module](./heroproductshorizontal.js)
- [Package Configuration](./package.json)
