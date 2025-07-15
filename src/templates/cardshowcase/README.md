# CardShowCase

## Purpose

- [Live Demo](https://primevue.org/avatar)

## Props

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `title` | `String` | `'Browse Integrations'` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `content` | content slot |

## Events

| Event | Description |
|-------|-------------|
| `apply` | apply event |
| `media` | media event |

## Dependencies

### External
- primevue/card

### Internal
- ../src/assets/icons/frameworks/AstroDark.vue
- ../src/assets/icons/frameworks/AstroLight.vue
- ../src/assets/icons/frameworks/Angular.vue
- ../src/assets/icons/frameworks/OpenIa.vue
- ../src/assets/icons/frameworks/Vue.vue

## Usage Example

```vue
<template>
  <CardShowCase
  >
  </CardShowCase>
</template>
```

## Related Links

- [TypeScript Definitions](./CardShowCase.d.ts)
- [Component Implementation](./CardShowCase.vue)
- [Export Module](./cardshowcase.js)
- [Package Configuration](./package.json)
