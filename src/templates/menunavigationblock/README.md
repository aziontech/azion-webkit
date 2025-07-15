# MenuNavigationBlock

## Purpose

Component MenuNavigationBlock

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `menuTitle` | `String` | No description |
| `menuItems` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `mobileLabel` | `String` | - | - | No description |
| `isContainer` | `Boolean` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `start` | start slot |
| `item` | item slot |

## Dependencies

### External
- vue
- primevue/menubar
- primevue/panelmenu

## Usage Example

```vue
<template>
  <MenuNavigationBlock
    :menuTitle=""exemplo""
    :menuItems="[]"
  >
  </MenuNavigationBlock>
</template>
```

## Related Links

- [TypeScript Definitions](./MenuNavigationBlock.d.ts)
- [Component Implementation](./MenuNavigationBlock.vue)
- [Export Module](./menunavigationblock.js)
- [Package Configuration](./package.json)
