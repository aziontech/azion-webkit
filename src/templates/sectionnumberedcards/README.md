# SectionNumberedCards

## Purpose

Component SectionNumberedCards

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `titleTag` | `String` | No description |
| `title`    | `String` | No description |

### Optional

| Prop                 | Type     | Default    | Values | Description    |
| -------------------- | -------- | ---------- | ------ | -------------- |
| `overline`           | `String` | -          | -      | No description |
| `description`        | `String` | `() => ''` | -      | No description |
| `descriptionRawHtml` | `String` | `() => ''` | -      | No description |
| `cards`              | `Array`  | -          | -      | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `main`    | main slot    |
| `content` | content slot |

## Dependencies

### Internal

- ../contentsection
- ../cardbase
- ../cardtitle
- ../carddescription
- ../tile
- ../linkbutton

## Usage Example

```vue
<template>
  <SectionNumberedCards
    :titleTag=""exemplo""
    :title=""exemplo""
  >
  </SectionNumberedCards>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionNumberedCards.d.ts)
- [Component Implementation](./SectionNumberedCards.vue)
- [Export Module](./sectionnumberedcards.js)
- [Package Configuration](./package.json)
