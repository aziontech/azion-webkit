# SectionBigNumbers

## Purpose

Component SectionBigNumbers

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `data`  | `Object` | No description |
| `title` | `String` | No description |

### Optional

| Prop       | Type     | Default | Values | Description    |
| ---------- | -------- | ------- | ------ | -------------- |
| `overline` | `String` | -       | -      | No description |
| `button`   | `Object` | -       | -      | No description |

## Slots

| Slot        | Description    |
| ----------- | -------------- |
| `principal` | principal slot |

## Dependencies

### Internal

- ../contentsection
- ../bignumbers
- ../linkbutton

## Usage Example

```vue
<template>
  <SectionBigNumbers
    :data="{}"
    :title=""exemplo""
  >
  </SectionBigNumbers>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionBigNumbers.d.ts)
- [Component Implementation](./SectionBigNumbers.vue)
- [Export Module](./sectionbignumbers.js)
- [Package Configuration](./package.json)
