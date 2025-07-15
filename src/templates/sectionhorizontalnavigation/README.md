# SectionHorizontalNavigation

## Purpose

Component SectionHorizontalNavigation

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | - | - | No description |
| `titleTag` | `String` | `() => 'h2'` | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `buttons` | `[Object` | - | - | No description |
| `leftSidebar` | `[Array` | - | - | No description |
| `cardContent` | `[Array` | - | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `actions` | actions slot |
| `main` | main slot |
| `item` | item slot |
| `content` | content slot |

## Events

| Event | Description |
|-------|-------------|
| `click` | click event |

## Dependencies

### External
- primevue/menu

### Internal
- ../contentsection
- ../cardbase
- ../cardtitle
- ../carddescription
- ../overline
- ../linkbutton

## Usage Example

```vue
<template>
  <SectionHorizontalNavigation
    :title=""exemplo""
  >
  </SectionHorizontalNavigation>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionHorizontalNavigation.d.ts)
- [Component Implementation](./SectionHorizontalNavigation.vue)
- [Export Module](./sectionhorizontalnavigation.js)
- [Package Configuration](./package.json)
