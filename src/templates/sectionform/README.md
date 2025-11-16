# SectionForm

A Vue component that displays a HubSpot form within a styled section container.

## Features

- Integrates with HubSpot forms via their JavaScript SDK
- Supports custom form actions and redirects
- Displays success messages after form submission
- Configurable vertical spacing/margins
- Loading state handling
- Form tracking analytics support (commented out by default)

## Usage

```vue
<template>
  <SectionForm
    id="contact-form"
    :form="formConfig"
    margin="default"
  />
</template>

<script setup>
import SectionForm from '@azion-webkit/templates/sectionform'

const formConfig = {
  id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
  title: 'Get in touch with us',
  action: 'https://www.azion.com',
  successMessage: 'Thank you for your interest in Azion. Our Sales team will contact you shortly.',
  redirect: '' // Optional: leave empty to show success message
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | `''` | Section ID attribute |
| `form` | `FormConfig` | **required** | Form configuration object |
| `margin` | `'none' \| 'small' \| 'default' \| 'large'` | `'none'` | Vertical spacing/margin for the section |

## FormConfig Interface

```typescript
interface FormConfig {
  id: string                    // HubSpot form ID (required)
  title: string                 // Form title displayed above the form fields
  action?: string               // Optional custom form action URL
  successMessage?: string       // Success message (if redirect is not provided)
  redirect?: string             // Optional URL to redirect after form submission
}
```

## Margin Options

- `none`: No vertical padding
- `small`: `py-5 lg:py-10 xl:py-16 2xl:py-20`
- `default`: `py-10 lg:py-20 xl:py-30 2xl:py-40`
- `large`: `py-14 lg:py-30 xl:py-40 2xl:py-48`

## Notes

- The component automatically loads the HubSpot forms JavaScript SDK
- Forms are configured to use the `na1` region and portal ID `5759082`
- If `redirect` is provided and not empty, users will be redirected after submission instead of seeing the success message
- Form tracking analytics can be enabled by uncommenting the `setupFormTrackingAnalytics()` call in the component

