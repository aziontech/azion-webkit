# HeroThumbBottom

## Purpose

Component HeroThumbBottom

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `buttons` | `Array` | No description |
| `images` | `String` | No description |
| `dark` | `String` | No description |
| `alt` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `actions` | actions slot |
| `main` | main slot |
| `darkImage` | darkImage slot |
| `lightImage` | lightImage slot |

## Dependencies

### Internal
- ../herobase
- ../linkbutton
- ../themeawareimageswitcher

## Usage Example

```vue
<template>
  <HeroThumbBottom
    :buttons="[]"
    :images=""exemplo""
    :dark=""exemplo""
    :alt=""exemplo""
  >
  </HeroThumbBottom>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroThumbBottom.d.ts)
- [Component Implementation](./HeroThumbBottom.vue)
- [Export Module](./herothumbbottom.js)
- [Package Configuration](./package.json)
