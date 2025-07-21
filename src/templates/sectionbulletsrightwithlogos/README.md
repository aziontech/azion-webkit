# SectionBulletsRightWithLogos

## Purpose

Component SectionBulletsRightWithLogos

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |

### Optional

| Prop       | Type     | Default           | Values                                                | Description    |
| ---------- | -------- | ----------------- | ----------------------------------------------------- | -------------- |
| `gap`      | `String` | `() => 'default'` | `small\|default`                                      | No description |
| `button`   | `Object` | -                 | -                                                     | No description |
| `logos`    | `Array`  | -                 | -                                                     | No description |
| `severity` | `String` | `() => 'primary'` | `default\|primary\|secondary\|warning\|success\|info` | No description |
| `list`     | `Array`  | -                 | -                                                     | No description |

## Dependencies

### Internal

- ../contentsection
- ../contentlogo
- ../linkbutton
- ../listunordered

## Usage Example

```vue
<template>
  <SectionBulletsRightWithLogos
    :title=""exemplo""
  >
  </SectionBulletsRightWithLogos>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionBulletsRightWithLogos.d.ts)
- [Component Implementation](./SectionBulletsRightWithLogos.vue)
- [Export Module](./sectionbulletsrightwithlogos.js)
- [Package Configuration](./package.json)
