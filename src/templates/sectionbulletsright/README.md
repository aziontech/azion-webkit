# SectionBulletsRight

## Purpose

Component SectionBulletsRight

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `titleTag` | `String` | `() => 'h2'` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `buttons` | `Array` | `() => []` | - | No description |
| `data` | `Array` | `() => []` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `actions` | actions slot |
| `main` | main slot |

## Dependencies

### Internal
- ../contentsection
- ../linkbutton
- ../listunordered

## Usage Example

```vue
<template>
  <SectionBulletsRight
    :title=""exemplo""
  >
  </SectionBulletsRight>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionBulletsRight.d.ts)
- [Component Implementation](./SectionBulletsRight.vue)
- [Export Module](./sectionbulletsright.js)
- [Package Configuration](./package.json)
