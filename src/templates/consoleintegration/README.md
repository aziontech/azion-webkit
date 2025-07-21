# ConsoleIntegration

## Purpose

- [Live Demo](https://primevue.org/avatar)

## Props

### Optional

| Prop    | Type     | Default                 | Values | Description    |
| ------- | -------- | ----------------------- | ------ | -------------- |
| `title` | `String` | `'Browse Integrations'` | -      | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `content` | content slot |

## Events

| Event   | Description |
| ------- | ----------- |
| `click` | click event |
| `apply` | apply event |

## Dependencies

### External

- primevue/card
- primevue/button

### Internal

- ../../assets/icons/tools/VSCode.vue
- ../../assets/icons/tools/TerminalLight.vue
- ../../assets/icons/tools/TerminalDark.vue
- ../src/assets/icons/tools/VSCode.vue
- ../src/assets/icons/tools/TerminalLight.vue
- ../src/assets/icons/tools/TerminalDark.vue

## Usage Example

```vue
<template>
  <ConsoleIntegration> </ConsoleIntegration>
</template>
```

## Related Links

- [TypeScript Definitions](./ConsoleIntegration.d.ts)
- [Component Implementation](./ConsoleIntegration.vue)
- [Export Module](./consoleintegration.js)
- [Package Configuration](./package.json)
