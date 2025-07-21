# HeroContent

## Purpose

HeroContent

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `title` | `String` | No description |

### Optional

| Prop              | Type              | Default | Values | Description    |
| ----------------- | ----------------- | ------- | ------ | -------------- |
| `breadcrumbItems` | `Array // url`    | -       | -      | No description |
| `date`            | `String`          | -       | -      | No description |
| `authors`         | `Array // avatar` | -       | -      | No description |
| `description`     | `String`          | -       | -      | No description |

## Slots

| Slot          | Description      |
| ------------- | ---------------- |
| `breadcrumbs` | breadcrumbs slot |

## Dependencies

### External

- primevue/breadcrumb

### Internal

- ../../templates/heroarticle

## Usage Example

```vue
<template>
  <HeroContent
    :title=""exemplo""
  >
  </HeroContent>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroContent.d.ts)
- [Component Implementation](./HeroContent.vue)
- [Export Module](./herocontent.js)
- [Package Configuration](./package.json)
