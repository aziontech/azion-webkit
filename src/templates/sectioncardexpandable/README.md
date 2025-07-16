# SectionCardExpandable

## Purpose

Component SectionCardExpandable

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `titleTag` | `String` | No description |
| `title`    | `String` | No description |
| `cards`    | `Array`  | No description |

### Optional

| Prop                 | Type     | Default    | Values | Description    |
| -------------------- | -------- | ---------- | ------ | -------------- |
| `overline`           | `String` | `() => ''` | -      | No description |
| `description`        | `String` | `() => ''` | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -      | No description |

## Slots

| Slot              | Description          |
| ----------------- | -------------------- |
| `main`            | main slot            |
| `content`         | content slot         |
| `darkImage`       | darkImage slot       |
| `lightImage`      | lightImage slot      |
| `actions`         | actions slot         |
| `disabledContent` | disabledContent slot |

## Dependencies

### Internal

- ../contentsection
- ../cardpanelexpandable
- ../themeawareimageswitcher
- ../linkbutton

## Usage Example

```vue
<template>
  <SectionCardExpandable
    :titleTag=""exemplo""
    :title=""exemplo""
    :cards="[]"
  >
  </SectionCardExpandable>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCardExpandable.d.ts)
- [Component Implementation](./SectionCardExpandable.vue)
- [Export Module](./sectioncardexpandable.js)
- [Package Configuration](./package.json)
