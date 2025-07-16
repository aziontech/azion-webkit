# SectionOverview

## Purpose

Component SectionOverview

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |

### Optional

| Prop                 | Type      | Default           | Values                                                | Description    |
| -------------------- | --------- | ----------------- | ----------------------------------------------------- | -------------- |
| `isSticky`           | `Boolean` | `() => true`      | -                                                     | No description |
| `overline`           | `String`  | `() => ''`        | -                                                     | No description |
| `titleTag`           | `String`  | -                 | -                                                     | No description |
| `description`        | `String`  | `() => ''`        | -                                                     | No description |
| `descriptionRawHtml` | `String`  | `() => ''`        | -                                                     | No description |
| `buttons`            | `Array`   | `() => []`        | -                                                     | No description |
| `severity`           | `String`  | `() => 'primary'` | `default\|primary\|secondary\|warning\|success\|info` | No description |
| `data`               | `Array`   | `() => []`        | -                                                     | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `actions` | actions slot |
| `main`    | main slot    |

## Dependencies

### Internal

- ../contentsection
- ../linkbutton
- ../listdescriptionunordered

## Usage Example

```vue
<template>
  <SectionOverview
    :title=""exemplo""
  >
  </SectionOverview>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionOverview.d.ts)
- [Component Implementation](./SectionOverview.vue)
- [Export Module](./sectionoverview.js)
- [Package Configuration](./package.json)
