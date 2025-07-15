# Footer

## Purpose

Component Footer

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `lang` | `String` | No description |
| `listData` | `Array` | No description |
| `copyright` | `String` | No description |
| `cta` | `Object` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `socialButtons` | `Array` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Default component content |

## Dependencies

### External
- primevue/divider

### Internal
- ../src/assets/icons/azion-icon-logo.vue
- ../overline/Overline.vue
- ../linkbutton/LinkButton.vue

## Usage Example

```vue
<template>
  <Footer
    :lang=""exemplo""
    :listData="[]"
    :copyright=""exemplo""
    :cta="{}"
  >
    Component content
  </Footer>
</template>
```

## Related Links

- [TypeScript Definitions](./Footer.d.ts)
- [Component Implementation](./Footer.vue)
- [Export Module](./footer.js)
- [Package Configuration](./package.json)
