# NewsletterSingleLine

## Purpose

Component NewsletterSingleLine

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `title`    | `String` | No description |
| `formData` | `Object` | No description |

### Optional

| Prop               | Type     | Default                                        | Values | Description    |
| ------------------ | -------- | ---------------------------------------------- | ------ | -------------- |
| `placeholderInput` | `String` | `'Your e-mail'`                                | -      | No description |
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
- primevue/inputgroup
- primevue/inputgroupaddon
- primevue/button
- yup
- vee-validate
- vue
- primevue/inlinemessage

### Internal

- ../services/newsletter/newsletterSubmitHandler

## Usage Example

```vue
<template>
  <NewsletterSingleLine
    :title=""exemplo""
    :formData="{}"
  >
  </NewsletterSingleLine>
</template>
```

## Related Links

- [TypeScript Definitions](./NewsletterSingleLine.d.ts)
- [Component Implementation](./NewsletterSingleLine.vue)
- [Export Module](./newslettersingleline.js)
- [Package Configuration](./package.json)
