# FormBePartner

## Purpose

Component FormBePartner

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
- primevue/dropdown
- primevue/checkbox
- primevue/inlinemessage
- vue

### Internal

- ../formblock/FormBlock.vue
- ../src/services/hubspot-service

## Usage Example

```vue
<template>
  <FormBePartner
    :t="{}"
    :requester=""exemplo""
    :requesterName=""exemplo""
  >
  </FormBePartner>
</template>
```

## Related Links

- [TypeScript Definitions](./FormBePartner.d.ts)
- [Component Implementation](./FormBePartner.vue)
- [Export Module](./formbepartner.js)
- [Package Configuration](./package.json)
