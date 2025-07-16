# CardBase

## Purpose

- [Live Demo](https://primevue.org/avatar)

## Props

### Optional

| Prop              | Type      | Default     | Values                                  | Description    |
| ----------------- | --------- | ----------- | --------------------------------------- | -------------- |
| `spacing`         | `String`  | `'base'`    | `compact\|relaxed\|base`                | No description |
| `grid`            | `Boolean` | -           | -                                       | No description |
| `backgroundColor` | `String`  | `'default'` | `outlined\|highlighted\|shape\|default` | No description |
| `hover`           | `String`  | -           | `default\|outlined\|slide-up`           | No description |
| `pt`              | `Object`  | -           | -                                       | No description |

## Slots

| Slot      | Description               |
| --------- | ------------------------- |
| `default` | Default component content |
| `content` | content slot              |

## Dependencies

### External

- primevue/card

## Usage Example

```vue
<template>
  <CardBase> Component content </CardBase>
</template>
```

## Related Links

- [TypeScript Definitions](./CardBase.d.ts)
- [Component Implementation](./CardBase.vue)
- [Export Module](./cardbase.js)
- [Package Configuration](./package.json)
