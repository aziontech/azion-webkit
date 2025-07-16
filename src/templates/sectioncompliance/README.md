# SectionCompliance

## Purpose

Component SectionCompliance

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
| `overline`           | `String` | -          | -      | No description |
| `description`        | `String` | `() => ''` | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -      | No description |
| `button`             | `Object` | -          | -      | No description |

## Slots

| Slot        | Description    |
| ----------- | -------------- |
| `main`      | main slot      |
| `principal` | principal slot |
| `content`   | content slot   |

## Dependencies

### Internal

- ../contentsection
- ../linkbutton
- ../cardbase
- ../overline
- ../cardtitle
- ../carddescription
- ../tile

## Usage Example

```vue
<template>
  <SectionCompliance
    :titleTag=""exemplo""
    :title=""exemplo""
    :cards="[]"
  >
  </SectionCompliance>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCompliance.d.ts)
- [Component Implementation](./SectionCompliance.vue)
- [Export Module](./sectioncompliance.js)
- [Package Configuration](./package.json)
