# ContentSection

## Purpose

Component ContentSection

## Props

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `title` | `String` | `() => ''` | - | No description |
| `titleTag` | `String` | `() => 'h2'` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `position` | `String` | `() => 'left'` | `left\|right\|center\|full` | No description |
| `isContentCentralized` | `Boolean` | `() => false` | - | No description |
| `textCenter` | `Boolean` | `() => false` | - | No description |
| `reverse` | `Boolean` | `() => false` | - | No description |
| `isSticky` | `Boolean` | `() => false` | - | No description |
| `pt` | `Object` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Default component content |

## Dependencies

### Internal
- ../titlesection
- ../overline

## Usage Example

```vue
<template>
  <ContentSection
  >
    Component content
  </ContentSection>
</template>
```

## Related Links

- [TypeScript Definitions](./ContentSection.d.ts)
- [Component Implementation](./ContentSection.vue)
- [Export Module](./contentsection.js)
- [Package Configuration](./package.json)
