# TabMenu

## Purpose

Component TabMenu

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `tabList` | `Array` | No description |

## Slots

| Slot | Description |
|------|-------------|
| `value` | value slot |
| `option` | option slot |

## Events

| Event | Description |
|-------|-------------|
| `click` | click event |
| `keyup` | keyup event |
| `change` | change event |
| `indexChanged` | indexChanged event |

## Dependencies

### External
- primevue/tabmenu
- primevue/dropdown
- vue

## Usage Example

```vue
<template>
  <TabMenu
    :tabList="[]"
  >
  </TabMenu>
</template>
```

## Related Links

- [TypeScript Definitions](./TabMenu.d.ts)
- [Component Implementation](./TabMenu.vue)
- [Export Module](./tabmenu.js)
- [Package Configuration](./package.json)
