# HeroContentNavigation

## Purpose

HeroContentNavigation

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `breadcrumbItems` | `Array // url` | - | - | No description |
| `date` | `String` | - | - | No description |
| `authors` | `Array // avatar` | - | - | No description |
| `description` | `String` | - | - | No description |
| `menuTitle` | `String` | - | - | No description |
| `mobileLabel` | `String` | - | - | No description |
| `menuItems` | `Array` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `breadcrumbs` | breadcrumbs slot |

## Dependencies

### External
- primevue/breadcrumb
- primevue/divider

### Internal
- ../../templates/heroarticle
- ../../templates/menunavigationblock

## Usage Example

```vue
<template>
  <HeroContentNavigation
    :title=""exemplo""
  >
  </HeroContentNavigation>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroContentNavigation.d.ts)
- [Component Implementation](./HeroContentNavigation.vue)
- [Export Module](./herocontentnavigation.js)
- [Package Configuration](./package.json)
