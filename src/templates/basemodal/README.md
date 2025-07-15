# Modal

## Purpose

Component Modal

## Props

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `backgroundColor` | `String` | `'default'` | `outlined\|default` | No description |
| `showHeader` | `Boolean` | `true` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Default component content |
| `header` | header slot |
| `footer` | footer slot |

## Events

| Event | Description |
|-------|-------------|
| `click` | click event |

## Dependencies

### External
- primevue/dialog
- vue

## Usage Example

```vue
<template>
  <Modal
  >
    Component content
  </Modal>
</template>
```

## Related Links

- [TypeScript Definitions](./Modal.d.ts)
- [Component Implementation](./Modal.vue)
- [Export Module](./basemodal.js)
- [Package Configuration](./package.json)
