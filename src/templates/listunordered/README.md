# ListUnordered

## Purpose

Component ListUnordered

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `data` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `direction` | `String` | `() => 'vertical'` | `vertical\|horizontal` | No description |
| `severity` | `String` | `() => 'default'` | `default\|primary\|secondary\|warning\|success\|info` | No description |
| `gap` | `String` | `() => 'default'` | `small\|default` | No description |

## Dependencies

### Internal
- ../tile

## Usage Example

```vue
<template>
  <ListUnordered
    :data="[]"
  >
  </ListUnordered>
</template>
```

## Related Links

- [TypeScript Definitions](./ListUnordered.d.ts)
- [Component Implementation](./ListUnordered.vue)
- [Export Module](./listunordered.js)
- [Package Configuration](./package.json)
