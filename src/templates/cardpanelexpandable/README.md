# CardPanelExpandable

## Purpose

Component CardPanelExpandable

## Props

### Required

| Prop    | Type    | Description    |
| ------- | ------- | -------------- |
| `cards` | `Array` | No description |

### Optional

| Prop          | Type     | Default | Values | Description    |
| ------------- | -------- | ------- | ------ | -------------- |
| `activeIndex` | `Number` | `0`     | -      | No description |
| `maxHeight`   | `String` | -       | -      | No description |

## Slots

| Slot      | Description               |
| --------- | ------------------------- |
| `default` | Default component content |
| `content` | content slot              |

## Events

| Event       | Description     |
| ----------- | --------------- |
| `mouseover` | mouseover event |
| `click`     | click event     |
| `media`     | media event     |

## Dependencies

### External

- vue

### Internal

- ../cardbase
- ../tile
- ../cardtitle
- ../carddescription

## Usage Example

```vue
<template>
  <CardPanelExpandable :cards="[]"> Component content </CardPanelExpandable>
</template>
```

## Related Links

- [TypeScript Definitions](./CardPanelExpandable.d.ts)
- [Component Implementation](./CardPanelExpandable.vue)
- [Export Module](./cardpanelexpandable.js)
- [Package Configuration](./package.json)
