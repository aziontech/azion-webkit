# TabMenuWithSearchLink

## Purpose

Component TabMenuWithSearchLink

## Props

### Required

| Prop      | Type    | Description    |
| --------- | ------- | -------------- |
| `tabList` | `Array` | No description |

### Optional

| Prop               | Type     | Default                | Values | Description    |
| ------------------ | -------- | ---------------------- | ------ | -------------- |
| `inputPlaceholder` | `String` | `'Search articles...'` | -      | No description |
| `activeIndex`      | `Number` | -                      | -      | No description |

## Slots

| Slot     | Description |
| -------- | ----------- |
| `value`  | value slot  |
| `option` | option slot |

## Events

| Event   | Description |
| ------- | ----------- |
| `click` | click event |
| `close` | close event |

## Dependencies

### External

- primevue/tabmenu
- primevue/dropdown
- vue

### Internal

- ../aisdialog/AlgoliaDialog.vue

## Usage Example

```vue
<template>
  <TabMenuWithSearchLink :tabList="[]"> </TabMenuWithSearchLink>
</template>
```

## Related Links

- [TypeScript Definitions](./TabMenuWithSearchLink.d.ts)
- [Component Implementation](./TabMenuWithSearchLink.vue)
- [Export Module](./tabmenuwithsearchlink.js)
- [Package Configuration](./package.json)
