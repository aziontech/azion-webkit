# Message

## Purpose

Component Message

## Props

### Optional

| Prop          | Type      | Default     | Values                                            | Description    |
| ------------- | --------- | ----------- | ------------------------------------------------- | -------------- |
| `size`        | `String`  | `undefined` | -                                                 | No description |
| `severity`    | `String`  | `'info'`    | `success\|info\|warn\|error\|secondary\|contrast` | No description |
| `closable`    | `Boolean` | `false`     | -                                                 | No description |
| `sticky`      | `Boolean` | `true`      | -                                                 | No description |
| `life`        | `Number`  | `3000`      | -                                                 | No description |
| `icon`        | `String`  | `null`      | -                                                 | No description |
| `customClass` | `String`  | `''`        | -                                                 | No description |

## Slots

| Slot          | Description               |
| ------------- | ------------------------- |
| `default`     | Default component content |
| `messageicon` | messageicon slot          |

## Events

| Event   | Description |
| ------- | ----------- |
| `close` | close event |

## Dependencies

### External

- primevue/message
- vue

## Usage Example

```vue
<template>
  <Message> Component content </Message>
</template>
```

## Related Links

- [Storybook Story](../src/stories/elements/message.stories.js)
- [TypeScript Definitions](./Message.d.ts)
- [Component Implementation](./Message.vue)
- [Export Module](./message.js)
- [Package Configuration](./package.json)
