# TitleList

## Purpose

- [Live Demo](https://primevue.org/avatar)

## Props

### Required

| Prop   | Type    | Description    |
| ------ | ------- | -------------- |
| `data` | `Array` | No description |

### Optional

| Prop         | Type     | Default           | Values | Description    |
| ------------ | -------- | ----------------- | ------ | -------------- |
| `buttonText` | `String` | `'See all posts'` | -      | No description |
| `link`       | `String` | -                 | -      | No description |

## Dependencies

### Internal

- ../linkbutton/LinkButton.vue

## Usage Example

```vue
<template>
  <TitleList :data="[]"> </TitleList>
</template>
```

## Related Links

- [TypeScript Definitions](./TitleList.d.ts)
- [Component Implementation](./TitleList.vue)
- [Export Module](./titlelist.js)
- [Package Configuration](./package.json)
