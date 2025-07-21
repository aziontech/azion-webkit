# TabMenuWithSearch

## Purpose

Component TabMenuWithSearch

## Props

### Required

| Prop      | Type    | Description    |
| --------- | ------- | -------------- |
| `tabList` | `Array` | No description |

### Optional

| Prop               | Type     | Default                | Values | Description    |
| ------------------ | -------- | ---------------------- | ------ | -------------- |
| `inputPlaceholder` | `String` | `'Search articles...'` | -      | No description |

## Slots

| Slot     | Description |
| -------- | ----------- |
| `value`  | value slot  |
| `option` | option slot |

## Events

| Event          | Description        |
| -------------- | ------------------ |
| `click`        | click event        |
| `keyup`        | keyup event        |
| `change`       | change event       |
| `close`        | close event        |
| `indexChanged` | indexChanged event |

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
  <TabMenuWithSearch :tabList="[]"> </TabMenuWithSearch>
</template>
```

## Related Links

- [TypeScript Definitions](./TabMenuWithSearch.d.ts)
- [Component Implementation](./TabMenuWithSearch.vue)
- [Export Module](./tabmenuwithsearch.js)
- [Package Configuration](./package.json)
