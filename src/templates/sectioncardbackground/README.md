# SectionCardBackground

## Purpose

SectionCardBackground

## Props

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `titleTag` | `String` | `() => 'h2'` | - | No description |
| `title` | `String` | `() => ''` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `buttons` | `Array` | `() => []` | - | No description |
| `cards` | `Array` | `() => []` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `actions` | actions slot |
| `main` | main slot |
| `content` | content slot |

## Dependencies

### Internal
- ../contentsection
- ../linkbutton
- ../cardbase
- ../overline
- ../cardtitle
- ../cardbgimage
- ../carddescription

## Usage Example

```vue
<template>
  <SectionCardBackground
  >
  </SectionCardBackground>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionCardBackground.d.ts)
- [Component Implementation](./SectionCardBackground.vue)
- [Export Module](./sectioncardbackground.js)
- [Package Configuration](./package.json)
