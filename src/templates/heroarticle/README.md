# HeroArticle

## Purpose

Component HeroArticle

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |

### Optional

| Prop          | Type     | Default | Values | Description    |
| ------------- | -------- | ------- | ------ | -------------- |
| `date`        | `String` | -       | -      | No description |
| `authors`     | `Object` | -       | -      | No description |
| `description` | `String` | -       | -      | No description |

## Slots

| Slot      | Description               |
| --------- | ------------------------- |
| `default` | Default component content |

## Dependencies

### External

- primevue/avatar

## Usage Example

```vue
<template>
  <HeroArticle
    :title=""exemplo""
  >
    Component content
  </HeroArticle>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroArticle.d.ts)
- [Component Implementation](./HeroArticle.vue)
- [Export Module](./heroarticle.js)
- [Package Configuration](./package.json)
