# HeroHsFormRight

## Purpose

Component HeroHsFormRight

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `titleTag` | `String` | No description |
| `title` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `list` | `Array` | `() => []` | - | No description |
| `form` | `Object // id` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `content` | content slot |
| `main` | main slot |

## Dependencies

### External
- vue

### Internal
- ../herobase
- ../listunordered

## Usage Example

```vue
<template>
  <HeroHsFormRight
    :titleTag=""exemplo""
    :title=""exemplo""
  >
  </HeroHsFormRight>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroHsFormRight.d.ts)
- [Component Implementation](./HeroHsFormRight.vue)
- [Export Module](./herohsformright.js)
- [Package Configuration](./package.json)
