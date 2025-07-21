# CardRelease

## Purpose

- [Live Demo](https://primevue.org/avatar)

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |
| `image` | `Object` | No description |
| `tag`   | `Object` | No description |
| `card`  | `Object` | No description |

### Optional

| Prop    | Type      | Default | Values               | Description    |
| ------- | --------- | ------- | -------------------- | -------------- |
| `grid`  | `Boolean` | `false` | -                    | No description |
| `hover` | `String`  | -       | `slide-up\|outlined` | No description |

## Slots

| Slot         | Description     |
| ------------ | --------------- |
| `content`    | content slot    |
| `darkImage`  | darkImage slot  |
| `lightImage` | lightImage slot |

## Dependencies

### External

- primevue/tag

### Internal

- ../cardbaseclickable
- ../themeawareimageswitcher

## Usage Example

```vue
<template>
  <CardRelease
    :title=""exemplo""
    :image="{}"
    :tag="{}"
    :card="{}"
  >
  </CardRelease>
</template>
```

## Related Links

- [TypeScript Definitions](./CardRelease.d.ts)
- [Component Implementation](./CardRelease.vue)
- [Export Module](./cardrelease.js)
- [Package Configuration](./package.json)
