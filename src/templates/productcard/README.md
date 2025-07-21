# ProductCard

## Purpose

ProductCard

## Props

### Required

| Prop    | Type    | Description    |
| ------- | ------- | -------------- |
| `links` | `Array` | No description |

### Optional

| Prop              | Type      | Default      | Values                                  | Description    |
| ----------------- | --------- | ------------ | --------------------------------------- | -------------- |
| `title`           | `String`  | `''`         | -                                       | No description |
| `description`     | `String`  | `''`         | -                                       | No description |
| `icon`            | `String`  | `''`         | -                                       | No description |
| `link`            | `String`  | -            | -                                       | No description |
| `addons`          | `Boolean` | `false`      | -                                       | No description |
| `backgroundColor` | `String`  | `'outlined'` | `outlined\|highlighted\|shape\|default` | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `content` | content slot |

## Dependencies

### Internal

- ../cardbase
- ../linkbutton
- ../icontextsegment
- ../overline

## Usage Example

```vue
<template>
  <ProductCard :links="[]"> </ProductCard>
</template>
```

## Related Links

- [TypeScript Definitions](./ProductCard.d.ts)
- [Component Implementation](./ProductCard.vue)
- [Export Module](./productcard.js)
- [Package Configuration](./package.json)
