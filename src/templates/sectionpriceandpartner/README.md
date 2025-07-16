# SectionPriceAndPartner

## Purpose

Component SectionPriceAndPartner

## Props

### Required

| Prop          | Type     | Description    |
| ------------- | -------- | -------------- |
| `title`       | `String` | No description |
| `description` | `String` | No description |
| `lang`        | `String` | No description |

### Optional

| Prop       | Type      | Default | Values | Description    |
| ---------- | --------- | ------- | ------ | -------------- |
| `isSticky` | `Boolean` | -       | -      | No description |
| `overline` | `String`  | -       | -      | No description |
| `titleTag` | `String`  | -       | -      | No description |

## Slots

| Slot   | Description |
| ------ | ----------- |
| `main` | main slot   |

## Dependencies

### Internal

- ../priceandpartner
- ../contentsection

## Usage Example

```vue
<template>
  <SectionPriceAndPartner
    :title=""exemplo""
    :description=""exemplo""
    :lang=""exemplo""
  >
  </SectionPriceAndPartner>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionPriceAndPartner.d.ts)
- [Component Implementation](./SectionPriceAndPartner.vue)
- [Export Module](./sectionpriceandpartner.js)
- [Package Configuration](./package.json)
