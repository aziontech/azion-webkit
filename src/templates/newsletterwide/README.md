# NewsletterWide

## Purpose

Component NewsletterWide

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `title` | `String` | No description |
| `overline` | `String` | No description |
| `description` | `String` | No description |
| `formData` | `Object` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `placeholderInput` | `String` | `'Your Full Name'` | - | No description |
| `placeholderEmail` | `String` | `'Your e-mail'` | - | No description |
| `buttonText` | `String` | `'submit'` | - | No description |
| `responseMessages` | `String` | `'Thanks for subscribing to Azion newsletter'` | - | No description |
| `errorMessage` | `String` | `'Error while subscribing to Azion newsletter` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `content` | content slot |

## Events

| Event | Description |
|-------|-------------|
| `submit` | submit event |

## Dependencies

### External
- primevue/inputtext
- primevue/inputgroup
- primevue/inputgroupaddon
- primevue/button
- primevue/inlinemessage
- yup
- vee-validate
- vue

### Internal
- ../cardbase
- ../overline
- ../cardtitle
- ../carddescription
- ../src/services/newsletter/newsletterSubmitHandler

## Usage Example

```vue
<template>
  <NewsletterWide
    :title=""exemplo""
    :overline=""exemplo""
    :description=""exemplo""
    :formData="{}"
  >
  </NewsletterWide>
</template>
```

## Related Links

- [TypeScript Definitions](./NewsletterWide.d.ts)
- [Component Implementation](./NewsletterWide.vue)
- [Export Module](./newsletterwide.js)
- [Package Configuration](./package.json)
