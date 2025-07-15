# HeroImageRightLogos

## Purpose

Component HeroImageRightLogos

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |
| `images` | `Object` | No description |
| `logos` | `Object` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `buttons` | `Array` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `actions` | actions slot |
| `content` | content slot |
| `main` | main slot |
| `darkImage` | darkImage slot |
| `lightImage` | lightImage slot |

## Dependencies

### Internal
- ../herobase
- ../linkbutton
- ../contentlogo
- ../themeawareimageswitcher

## Usage Example

```vue
<template>
  <HeroImageRightLogos
    :title=""exemplo""
    :images="{}"
    :logos="{}"
  >
  </HeroImageRightLogos>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroImageRightLogos.d.ts)
- [Component Implementation](./HeroImageRightLogos.vue)
- [Export Module](./heroimagerightlogos.js)
- [Package Configuration](./package.json)
