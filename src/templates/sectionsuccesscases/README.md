# SectionSuccessCases

## Purpose

Component SectionSuccessCases

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |
| `cards` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `button` | `Object` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `main` | main slot |
| `principal` | principal slot |
| `content` | content slot |

## Dependencies

### External
- primevue/tag

### Internal
- ../contentsection
- ../cardbaseclickable
- ../carddescription
- ../linkbutton

## Usage Example

```vue
<template>
  <SectionSuccessCases
    :title=""exemplo""
    :cards="[]"
  >
  </SectionSuccessCases>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionSuccessCases.d.ts)
- [Component Implementation](./SectionSuccessCases.vue)
- [Export Module](./sectionsuccesscases.js)
- [Package Configuration](./package.json)
