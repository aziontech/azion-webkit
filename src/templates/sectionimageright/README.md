# SectionImageRight

## Purpose

Component SectionImageRight

## Props

### Required

| Prop        | Type     | Description    |
| ----------- | -------- | -------------- |
| `title`     | `String` | No description |
| `image`     | `String` | No description |
| `imageDark` | `String` | No description |

### Optional

| Prop                 | Type     | Default    | Values | Description    |
| -------------------- | -------- | ---------- | ------ | -------------- |
| `overline`           | `String` | `() => ''` | -      | No description |
| `titleTag`           | `String` | -          | -      | No description |
| `description`        | `String` | `() => ''` | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -      | No description |
| `buttons`            | `Array`  | -          | -      | No description |

## Slots

| Slot         | Description     |
| ------------ | --------------- |
| `actions`    | actions slot    |
| `main`       | main slot       |
| `darkImage`  | darkImage slot  |
| `lightImage` | lightImage slot |

## Dependencies

### Internal

- ../contentsection
- ../linkbutton
- ../themeawareimageswitcher

## Usage Example

```vue
<template>
  <SectionImageRight
    :title=""exemplo""
    :image=""exemplo""
    :imageDark=""exemplo""
  >
  </SectionImageRight>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionImageRight.d.ts)
- [Component Implementation](./SectionImageRight.vue)
- [Export Module](./sectionimageright.js)
- [Package Configuration](./package.json)
