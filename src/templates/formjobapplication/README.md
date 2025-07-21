# FormJobApplication

## Purpose

Component FormJobApplication

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `t`     | `Object` | No description |
| `jobId` | `String` | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `content` | content slot |
| `actions` | actions slot |

## Events

| Event      | Description    |
| ---------- | -------------- |
| `submit`   | submit event   |
| `uploader` | uploader event |
| `click`    | click event    |
| `vee`      | vee event      |

## Dependencies

### External

- primevue/inputtext
- primevue/button
- primevue/inlinemessage
- primevue/fileupload
- vue
- vee-validate
- yup
- @vee-validate/yup

### Internal

- ../formblock/FormBlock.vue

## Usage Example

```vue
<template>
  <FormJobApplication
    :t="{}"
    :jobId=""exemplo""
  >
  </FormJobApplication>
</template>
```

## Related Links

- [TypeScript Definitions](./FormJobApplication.d.ts)
- [Component Implementation](./FormJobApplication.vue)
- [Export Module](./formjobapplication.js)
- [Package Configuration](./package.json)
