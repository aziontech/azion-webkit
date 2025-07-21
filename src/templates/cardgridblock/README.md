# CardGridBlock

## Purpose

Component CardGridBlock

## Props

### Required

| Prop         | Type     | Description    |
| ------------ | -------- | -------------- |
| `data`       | `Array`  | No description |
| `categories` | `Array`  | No description |
| `defaultTab` | `String` | No description |

### Optional

| Prop                     | Type      | Default                | Values        | Description    |
| ------------------------ | --------- | ---------------------- | ------------- | -------------- |
| `inputPlaceholder`       | `String`  | `'Search articles...'` | -             | No description |
| `buttonText`             | `String`  | `'Show more'`          | -             | No description |
| `loadMoreNumber`         | `Number`  | `12`                   | -             | No description |
| `pt`                     | `Object`  | `() => {`              | -             | No description |
| `isSearchEnabled`        | `Boolean` | `false`                | -             | No description |
| `isSearchAndLinkEnabled` | `Boolean` | `false`                | -             | No description |
| `isLoadMoreEnabled`      | `Boolean` | `false`                | -             | No description |
| `cardType`               | `String`  | `'blog'`               | `blog\|cases` | No description |

## Events

| Event          | Description        |
| -------------- | ------------------ |
| `indexChanged` | indexChanged event |

## Dependencies

### External

- vue

### Internal

- ../cardgridlist/CardGridList.vue
- ../cardgridlistwithloadmore/CardGridListWithLoadMore.vue
- ../tabmenu/TabMenu.vue
- ../tabmenuwithsearch/TabMenuWithSearch.vue
- ../tabmenuwithsearchlink/TabMenuWithSearchLink.vue

## Usage Example

```vue
<template>
  <CardGridBlock
    :data="[]"
    :categories="[]"
    :defaultTab=""exemplo""
  >
  </CardGridBlock>
</template>
```

## Related Links

- [TypeScript Definitions](./CardGridBlock.d.ts)
- [Component Implementation](./CardGridBlock.vue)
- [Export Module](./cardgridblock.js)
- [Package Configuration](./package.json)
