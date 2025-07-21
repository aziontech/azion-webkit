# SectionCardNavigation

## Purpose

Component SectionCardNavigation

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

| Slot      | Description  |
| --------- | ------------ |
| `content` | content slot |

## Dependencies

### Internal

- ../contentsection
- ../cardbase
- ../cardtitle
- ../carddescription
- ../linkbutton

## Usage Example

```vue
<template>
  <SectionCardNavigation
    :titleTag=""exemplo""
    :title=""exemplo""
    :cards="[]"
  >
  </SectionCardNavigation>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCardNavigation.d.ts)
- [Component Implementation](./SectionCardNavigation.vue)
- [Export Module](./sectioncardnavigation.js)
- [Package Configuration](./package.json)
