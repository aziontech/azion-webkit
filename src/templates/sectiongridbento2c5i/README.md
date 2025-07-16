# SectionGridBento2c5i

## Purpose

Component SectionGridBento2c5i

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `titleTag` | `String` | No description |
| `cards`    | `Array`  | No description |

### Optional

| Prop                 | Type     | Default               | Values                                                                                                                                | Description    |
| -------------------- | -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `overline`           | `String` | `() => ''`            | -                                                                                                                                     | No description |
| `title`              | `String` | -                     | -                                                                                                                                     | No description |
| `description`        | `String` | `() => ''`            | -                                                                                                                                     | No description |
| `descriptionRawHtml` | `String` | `() => ''`            | -                                                                                                                                     | No description |
| `gridType`           | `String` | `'2-columns-5-items'` | `2-columns-3-items\|2-columns-4-items\|2-columns-5-items\|2-columns-6-items\|3-columns-4-items\|3-columns-7-items\|4-columns-5-items` | No description |

## Dependencies

### Internal

- ../contentsection
- ../cardbase
- ../cardtitle
- ../carddescription
- ../gridbento
- ../themeawareimageswitcher
- ../linkbutton
- ../overline

## Usage Example

```vue
<template>
  <SectionGridBento2c5i
    :titleTag=""exemplo""
    :cards="[]"
  >
  </SectionGridBento2c5i>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionGridBento2c5i.d.ts)
- [Component Implementation](./SectionGridBento2c5i.vue)
- [Export Module](./sectiongridbento2c5i.js)
- [Package Configuration](./package.json)
