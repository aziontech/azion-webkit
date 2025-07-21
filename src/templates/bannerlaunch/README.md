# BannerLaunch

## Purpose

Component BannerLaunch

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |

### Optional

| Prop          | Type     | Default      | Values | Description    |
| ------------- | -------- | ------------ | ------ | -------------- |
| `titleTag`    | `String` | `() => 'h1'` | -      | No description |
| `description` | `String` | -            | -      | No description |
| `imageDark`   | `String` | -            | -      | No description |
| `imageLight`  | `String` | -            | -      | No description |
| `alt`         | `String` | -            | -      | No description |

## Slots

| Slot         | Description     |
| ------------ | --------------- |
| `content`    | content slot    |
| `darkImage`  | darkImage slot  |
| `lightImage` | lightImage slot |

## Dependencies

### Internal

- ../cardbase
- ../themeawareimageswitcher

## Usage Example

```vue
<template>
  <BannerLaunch
    :title=""exemplo""
  >
  </BannerLaunch>
</template>
```

## Related Links

- [TypeScript Definitions](./BannerLaunch.d.ts)
- [Component Implementation](./BannerLaunch.vue)
- [Export Module](./bannerlaunch.js)
- [Package Configuration](./package.json)
