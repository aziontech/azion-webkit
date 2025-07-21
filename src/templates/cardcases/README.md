# CardCases

## Purpose

cardcases

## Props

### Required

| Prop          | Type     | Description    |
| ------------- | -------- | -------------- |
| `tagList`     | `Array`  | No description |
| `description` | `String` | No description |
| `link`        | `String` | No description |

### Optional

| Prop          | Type     | Default     | Values           | Description    |
| ------------- | -------- | ----------- | ---------------- | -------------- |
| `image`       | `String` | -           | -                | No description |
| `imgAlt`      | `String` | -           | -                | No description |
| `buttonLabel` | `String` | -           | -                | No description |
| `size`        | `String` | `'default'` | `large\|default` | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `header`  | header slot  |
| `content` | content slot |
| `footer`  | footer slot  |

## Dependencies

### External

- primevue/card
- primevue/tag
- primevue/button

## Usage Example

```vue
<template>
  <CardCases
    :tagList="[]"
    :description=""exemplo""
    :link=""exemplo""
  >
  </CardCases>
</template>
```

## Related Links

- [TypeScript Definitions](./CardCases.d.ts)
- [Component Implementation](./CardCases.vue)
- [Export Module](./cardcases.js)
- [Package Configuration](./package.json)
