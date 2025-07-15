# BannerGetStarted

## Purpose

Component BannerGetStarted

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |
| `buttons` | `Array` | No description |
| `items` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `title` | title slot |
| `content` | content slot |
| `main` | main slot |

## Dependencies

### Internal
- ../linkbutton
- ../contentsection
- ../tile

## Usage Example

```vue
<template>
  <BannerGetStarted
    :title=""exemplo""
    :buttons="[]"
    :items="[]"
  >
  </BannerGetStarted>
</template>
```

## Related Links

- [TypeScript Definitions](./BannerGetStarted.d.ts)
- [Component Implementation](./BannerGetStarted.vue)
- [Export Module](./bannergetstarted.js)
- [Package Configuration](./package.json)
