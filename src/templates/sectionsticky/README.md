# SectionSticky

## Purpose

Component SectionSticky

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |
| `sections` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `titleTag` | `String` | `() => 'h2'` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `actions` | actions slot |
| `main` | main slot |
| `lightImage` | lightImage slot |
| `darkImage` | darkImage slot |

## Dependencies

### Internal
- ../contentsection
- ../linkbutton
- ../themeawareimageswitcher

## Usage Example

```vue
<template>
  <SectionSticky
    :title=""exemplo""
    :sections="[]"
  >
  </SectionSticky>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionSticky.d.ts)
- [Component Implementation](./SectionSticky.vue)
- [Export Module](./sectionsticky.js)
- [Package Configuration](./package.json)
