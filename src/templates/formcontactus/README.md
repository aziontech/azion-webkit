# FormContactUs

## Purpose

Component FormContactUs

## Props

### Required

| Prop            | Type     | Description    |
| --------------- | -------- | -------------- |
| `t`             | `Object` | No description |
| `requester`     | `String` | No description |
| `requesterName` | `String` | No description |

### Optional

| Prop               | Type      | Default                                        | Values | Description    |
| ------------------ | --------- | ---------------------------------------------- | ------ | -------------- |
| `hubspot`          | `unknown` | -                                              | -      | No description |
| `responseMessages` | `String`  | `'Thanks for subscribing to Azion newsletter'` | -      | No description |
| `error`            | `String`  | `'Error while subscribing to Azion newsletter` | -      | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `content` | content slot |
| `actions` | actions slot |

## Events

| Event   | Description |
| ------- | ----------- |
| `click` | click event |

## Dependencies

### External

- primevue/inputtext
- primevue/button
- primevue/textarea
- primevue/dropdown
- primevue/inlinemessage
- vue

### Internal

- ../formblock/FormBlock.vue
- ../services/hubspot-service

## Usage Example

```vue
<template>
  <FormContactUs
    :t="{}"
    :requester=""exemplo""
    :requesterName=""exemplo""
  >
  </FormContactUs>
</template>
```

## Related Links

- [TypeScript Definitions](./FormContactUs.d.ts)
- [Component Implementation](./FormContactUs.vue)
- [Export Module](./formcontactus.js)
- [Package Configuration](./package.json)
