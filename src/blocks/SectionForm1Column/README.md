# SectionForm1Column

A single-column section block component that integrates HubSpot forms for lead capture and contact forms. Perfect for embedding HubSpot forms with customizable success handling and redirect options.

## Features

- **HubSpot Integration**: Automatically loads and embeds HubSpot forms via their JavaScript API
- **Loading State**: Displays a loading indicator while the HubSpot script loads
- **Success Handling**: Supports both redirect and success message display after form submission
- **Customizable Styling**: Configurable bottom spacing and form title
- **Responsive Design**: Adapts gracefully across different screen sizes
- **Form Action Override**: Automatically sets form action URL from props

## Props

| Prop            | Type                                                | Required | Default   | Description                                                        |
| --------------- | --------------------------------------------------- | -------- | --------- | ------------------------------------------------------------------ |
| `id`            | `string`                                            | No       | `''`      | HTML id attribute for the form container                           |
| `form`          | `FormConfig`                                        | Yes      | -         | HubSpot form configuration object (see FormConfig interface below) |
| `bottomSpacing` | `'mb-0' \| 'mb-6' \| 'mb-12' \| 'mb-24' \| 'mb-48'` | No       | `'mb-24'` | Bottom margin spacing for the section                              |

### FormConfig Interface

The `form` prop requires an object with the following structure:

```typescript
interface FormConfig {
  id: string // HubSpot form ID (UUID format)
  title: string // Form title displayed above the form
  action: string // Form action URL (set as hidden input value)
  successMessage: string // Success message displayed if no redirect is provided
  redirect: string // Optional redirect URL after successful submission
}
```

## Usage

### Basic Form with Success Message

```vue
<template>
  <SectionForm1Column
    id="contact-form"
    :form="formConfig"
  />
</template>

<script setup>
  const formConfig = {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Contact our team',
    action: 'https://www.azion.com',
    successMessage: 'Thank you for your message! We will get back to you soon.',
    redirect: ''
  }
</script>
```

### Form with Redirect

```vue
<template>
  <SectionForm1Column
    id="demo-request-form"
    :form="formConfig"
    bottom-spacing="mb-12"
  />
</template>

<script setup>
  const formConfig = {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Request a demo',
    action: 'https://www.azion.com/demo',
    successMessage: 'Thank you for your interest!',
    redirect: 'https://www.azion.com/en/thank-you/'
  }
</script>
```

### Minimal Usage

```vue
<template>
  <SectionForm1Column :form="formConfig" />
</template>

<script setup>
  const formConfig = {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Subscribe to our newsletter',
    action: 'https://www.azion.com',
    successMessage: 'You have been successfully subscribed!',
    redirect: ''
  }
</script>
```

## Behavior

- **Script Loading**: The component automatically loads the HubSpot Forms JavaScript library (`https://js.hsforms.net/forms/v2.js`) when mounted
- **Form Creation**: Once the script loads, the HubSpot form is created and embedded in the `.field-wrap` container
- **Form Action**: The component automatically sets the `form_action` hidden input field with the value from `form.action`
- **Submission Handling**:
  - If `form.redirect` is provided and not empty, the user is redirected to that URL after submission
  - Otherwise, the form title is hidden and a success message is displayed
- **Loading State**: A loading indicator is shown while the HubSpot script loads and the form is being created
- **Error Handling**: Errors during script loading are logged to the console

## HubSpot Configuration

The component uses the following HubSpot settings:

- **Region**: `na1` (North America)
- **Portal ID**: `5759082` (hardcoded)
- **Form ID**: Provided via `form.id` prop

To use a different HubSpot portal, you'll need to modify the `portalId` in the component code.

## Dependencies

- **Vue 3**: Component structure and reactivity
- **Tailwind CSS**: For layout and responsive design
- **LayoutContainer**: Internal component for container layout
- **HubSpot Forms API**: External JavaScript library loaded dynamically

## Styling

The component uses the following CSS classes:

- Form container: `border border-neutral-800 rounded-md p-4 md:p-8`
- Form title: `display-2-mobile md:display-2` with responsive typography
- Field wrapper: `!font-sora` for consistent font family
- Loading indicator: Uses `.loader-ring` class (should be defined in global styles)

## Notes

- The HubSpot form script is loaded asynchronously, so there may be a brief delay before the form appears
- The component hides the form title when the form is successfully submitted (if using success message mode)
- Form validation and submission are handled entirely by HubSpot's form system
- The `form.action` value is set as a hidden input field that HubSpot uses for form processing
