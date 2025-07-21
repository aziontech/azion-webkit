# ListDescriptionUnordered

## Purpose

Component ListDescriptionUnordered

## Props

### Required

| Prop   | Type    | Description    |
| ------ | ------- | -------------- |
| `data` | `Array` | No description |

### Optional

| Prop        | Type     | Default            | Values                                                | Description    |
| ----------- | -------- | ------------------ | ----------------------------------------------------- | -------------- |
| `direction` | `String` | `() => 'vertical'` | `vertical\|horizontal`                                | No description |
| `severity`  | `String` | `() => 'default'`  | `default\|primary\|secondary\|warning\|success\|info` | No description |

## Dependencies

### Internal

- ../listunordered

## Usage Example

```vue
<template>
  <ListDescriptionUnordered :data="[]"> </ListDescriptionUnordered>
</template>
```

## Related Links

- [TypeScript Definitions](./ListDescriptionUnordered.d.ts)
- [Component Implementation](./ListDescriptionUnordered.vue)
- [Export Module](./listdescriptionunordered.js)
- [Package Configuration](./package.json)
