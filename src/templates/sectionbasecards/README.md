# SectionBaseCards

## Purpose

Component SectionBaseCards

## Props

### Required

| Prop    | Type    | Description    |
| ------- | ------- | -------------- |
| `cards` | `Array` | No description |

### Optional

| Prop                 | Type     | Default      | Values | Description    |
| -------------------- | -------- | ------------ | ------ | -------------- |
| `overline`           | `String` | `() => ''`   | -      | No description |
| `titleTag`           | `String` | `() => 'h2'` | -      | No description |
| `title`              | `String` | `() => ''`   | -      | No description |
| `description`        | `String` | `() => ''`   | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''`   | -      | No description |

## Dependencies

### Internal

- ../contentsection
- ../cardbase
- ../cardtitle
- ../carddescription

## Usage Example

```vue
<template>
  <SectionBaseCards :cards="[]"> </SectionBaseCards>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionBaseCards.d.ts)
- [Component Implementation](./SectionBaseCards.vue)
- [Export Module](./sectionbasecards.js)
- [Package Configuration](./package.json)
