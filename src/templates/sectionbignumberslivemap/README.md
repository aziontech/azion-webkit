# SectionBigNumbersLivemap

## Purpose

Component SectionBigNumbersLivemap

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `data`  | `Object` | No description |
| `title` | `String` | No description |

### Optional

| Prop       | Type     | Default   | Values | Description    |
| ---------- | -------- | --------- | ------ | -------------- |
| `overline` | `String` | -         | -      | No description |
| `lang`     | `String` | `'pt-br'` | -      | No description |
| `button`   | `Object` | -         | -      | No description |

## Slots

| Slot        | Description    |
| ----------- | -------------- |
| `principal` | principal slot |

## Dependencies

### Internal

- ../contentsection
- ../bignumbers
- ../livemap
- ../linkbutton

## Usage Example

```vue
<template>
  <SectionBigNumbersLivemap
    :data="{}"
    :title=""exemplo""
  >
  </SectionBigNumbersLivemap>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionBigNumbersLivemap.d.ts)
- [Component Implementation](./SectionBigNumbersLivemap.vue)
- [Export Module](./sectionbignumberslivemap.js)
- [Package Configuration](./package.json)
