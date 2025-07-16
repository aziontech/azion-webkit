# SectionHorizontalCardNavigation

## Purpose

Component SectionHorizontalCardNavigation

## Props

### Optional

| Prop          | Type     | Default | Values | Description    |
| ------------- | -------- | ------- | ------ | -------------- |
| `leftSidebar` | `[Array` | -       | -      | No description |
| `items`       | `[Array` | -       | -      | No description |

## Slots

| Slot        | Description    |
| ----------- | -------------- |
| `main`      | main slot      |
| `item`      | item slot      |
| `content`   | content slot   |
| `principal` | principal slot |

## Events

| Event   | Description |
| ------- | ----------- |
| `click` | click event |

## Dependencies

### External

- primevue/menu

### Internal

- ../contentsection
- ../cardbaseclickable
- ../cardtitle
- ../carddescription

## Usage Example

```vue
<template>
  <SectionHorizontalCardNavigation> </SectionHorizontalCardNavigation>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionHorizontalCardNavigation.d.ts)
- [Component Implementation](./SectionHorizontalCardNavigation.vue)
- [Export Module](./sectionhorizontalcardnavigation.js)
- [Package Configuration](./package.json)
