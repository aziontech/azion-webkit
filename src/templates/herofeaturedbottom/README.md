# HeroFeaturedBottom

## Purpose

Component HeroFeaturedBottom

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `buttons` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `title` | `String` | - | - | No description |
| `description` | `String` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `actions` | actions slot |
| `main` | main slot |

## Dependencies

### Internal
- ../herobase
- ../linkbutton
- ../featuredcards

## Usage Example

```vue
<template>
  <HeroFeaturedBottom
    :buttons="[]"
  >
  </HeroFeaturedBottom>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroFeaturedBottom.d.ts)
- [Component Implementation](./HeroFeaturedBottom.vue)
- [Export Module](./herofeaturedbottom.js)
- [Package Configuration](./package.json)
