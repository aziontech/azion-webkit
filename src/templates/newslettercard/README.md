# NewsletterCard

## Purpose

Component NewsletterCard

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `title`    | `String` | No description |
| `formData` | `Object` | No description |

### Optional

| Prop               | Type     | Default                                        | Values | Description    |
| ------------------ | -------- | ---------------------------------------------- | ------ | -------------- |
| `placeholderInput` | `String` | `'Your Email'`                                 | -      | No description |
| `buttonText`       | `String` | `'submit'`                                     | -      | No description |
| `responseMessages` | `String` | `'Thanks for subscribing to Azion newsletter'` | -      | No description |
| `errorMessage`     | `String` | `'Error while subscribing to Azion newsletter` | -      | No description |

## Events

| Event    | Description  |
| -------- | ------------ |
| `submit` | submit event |

## Dependencies

### External

- primevue/inputtext
- primevue/button
- yup
- vee-validate
- primevue/inlinemessage
- vue

### Internal

- ../services/newsletter/newsletterSubmitHandler

## Usage Example

```vue
<template>
  <NewsletterCard
    :title=""exemplo""
    :formData="{}"
  >
  </NewsletterCard>
</template>
```

## Related Links

- [TypeScript Definitions](./NewsletterCard.d.ts)
- [Component Implementation](./NewsletterCard.vue)
- [Export Module](./newslettercard.js)
- [Package Configuration](./package.json)
