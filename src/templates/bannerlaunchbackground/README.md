# BannerLaunchBackground

## Purpose

Component BannerLaunchBackground

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

| Slot      | Description  |
| --------- | ------------ |
| `content` | content slot |

## Dependencies

### External

- vue

### Internal

- ../cardbase

## Usage Example

```vue
<template>
  <BannerLaunchBackground
    :title=""exemplo""
  >
  </BannerLaunchBackground>
</template>
```

## Related Links

- [TypeScript Definitions](./BannerLaunchBackground.d.ts)
- [Component Implementation](./BannerLaunchBackground.vue)
- [Export Module](./bannerlaunchbackground.js)
- [Package Configuration](./package.json)
