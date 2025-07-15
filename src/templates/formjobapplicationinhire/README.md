# FormJobApplicationInHire

## Purpose

Component FormJobApplicationInHire

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `t` | `Object` | No description |
| `jobId` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `referrerId` | `String` | `null` | - | No description |
| `isLinkedinRefferer` | `Boolean` | `false` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `content` | content slot |
| `actions` | actions slot |

## Events

| Event | Description |
|-------|-------------|
| `submit` | submit event |
| `uploader` | uploader event |
| `click` | click event |
| `vee` | vee event |

## Dependencies

### External
- primevue/inputtext
- primevue/inputnumber
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
  <FormJobApplicationInHire
    :t="{}"
    :jobId=""exemplo""
  >
  </FormJobApplicationInHire>
</template>
```

## Related Links

- [TypeScript Definitions](./FormJobApplicationInHire.d.ts)
- [Component Implementation](./FormJobApplicationInHire.vue)
- [Export Module](./formjobapplicationinhire.js)
- [Package Configuration](./package.json)
