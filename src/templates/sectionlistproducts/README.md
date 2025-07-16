# SectionListProducts

## Purpose

Component SectionListProducts

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |

### Optional

| Prop                 | Type      | Default       | Values | Description    |
| -------------------- | --------- | ------------- | ------ | -------------- |
| `overline`           | `String`  | -             | -      | No description |
| `titleTag`           | `String`  | -             | -      | No description |
| `description`        | `String`  | `() => ''`    | -      | No description |
| `descriptionRawHtml` | `String`  | `() => ''`    | -      | No description |
| `list`               | `Array`   | `() => []`    | -      | No description |
| `grid`               | `Boolean` | `() => false` | -      | No description |

## Slots

| Slot   | Description |
| ------ | ----------- |
| `main` | main slot   |

## Dependencies

### Internal

- ../contentsection
- ../productcard

## Usage Example

```vue
<template>
  <SectionListProducts
    :title=""exemplo""
  >
  </SectionListProducts>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionListProducts.d.ts)
- [Component Implementation](./SectionListProducts.vue)
- [Export Module](./sectionlistproducts.js)
- [Package Configuration](./package.json)
