# HeroVideoRightCardBackround

## Purpose

Component HeroVideoRightCardBackround

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `video` | `Object` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `titleTag` | `String` | `() => 'h1'` | - | No description |
| `title` | `String` | - | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `cards` | `Array` | `() => []` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `main` | main slot |
| `action` | action slot |
| `content` | content slot |
| `principal` | principal slot |

## Dependencies

### Internal
- ../herobase
- ../basemodal
- ../linkbutton
- ../cardbase
- ../overline
- ../cardtitle
- ../cardbgimage
- ../carddescription

## Usage Example

```vue
<template>
  <HeroVideoRightCardBackround
    :video="{}"
  >
  </HeroVideoRightCardBackround>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroVideoRightCardBackround.d.ts)
- [Component Implementation](./HeroVideoRightCardBackround.vue)
- [Export Module](./herovideorightcardbackground.js)
- [Package Configuration](./package.json)
