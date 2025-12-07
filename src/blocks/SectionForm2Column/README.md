# SectionForm2Column

A two-column section block component that integrates HubSpot forms alongside content. Perfect for embedding contact forms with accompanying information, benefits, or custom content in a flexible two-column layout.

## Features

- **Two-Column Layout**: HubSpot form on one side, content on the other
- **HubSpot Integration**: Automatically loads and embeds HubSpot forms via their JavaScript API
- **Flexible Layouts**: Two layout types - 70/30 split (form 70%, content 30%) or 50/50 split
- **Content Options**: Supports markdown content or custom template via slot
- **Loading State**: Displays a loading indicator while the HubSpot script loads
- **Success Handling**: Supports both redirect and success message display after form submission
- **Responsive Design**: Adapts gracefully across different screen sizes
- **Sticky Content**: Content column can be sticky on larger screens for better UX

## Props

| Prop                     | Type                                                | Required | Default     | Description                                                              |
| ------------------------ | --------------------------------------------------- | -------- | ----------- | ------------------------------------------------------------------------ |
| `id`                     | `string`                                            | No       | `''`        | HTML id attribute for the form container                                 |
| `form`                   | `FormConfig`                                        | Yes      | -           | HubSpot form configuration object (see FormConfig interface below)       |
| `bottomSpacing`          | `'mb-0' \| 'mb-6' \| 'mb-12' \| 'mb-24' \| 'mb-48'` | No       | `'mb-24'`   | Bottom margin spacing for the section                                    |
| `type`                   | `'70x30' \| '50x50'`                                | No       | `'50x50'`   | Layout type: 70/30 split (form 70%, content 30%) or 50/50 split          |
| `template`               | `'default' \| 'custom-template'`                    | No       | `'default'` | Template mode: default (markdown) or custom-template (slot)              |
| `title`                  | `string`                                            | No       | -           | Title displayed in the content column (default template only)            |
| `descriptionRawMarkdown` | `string`                                            | No       | -           | Markdown content displayed in the content column (default template only) |

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

## Layout Types

### 50x50 (Default)

- Equal split between form and content
- Uses `grid-cols-2` layout
- Each column spans 1 column
- Best for balanced layouts where content and form are equally important

### 70x30

- Form takes 70% of the width
- Content takes 30% of the width
- Uses `grid-cols-10` layout
- Form column spans 7 columns, content column spans 3 columns
- Best for forms that need more space or when content is supplementary

## Template Modes

### Default Template

The default template displays a title and markdown content in the content column:

```vue
<SectionForm2Column
  :form="formConfig"
  title="Get in touch"
  description-raw-markdown="Fill out the form to contact us."
/>
```

### Custom Template

Use the `custom-template` mode with a slot to provide custom content:

```vue
<SectionForm2Column :form="formConfig" template="custom-template">
  <template #content>
    <div class="custom-content">
      <!-- Your custom content here -->
    </div>
  </template>
</SectionForm2Column>
```

## Usage

### Basic Two-Column Form (50x50 Layout)

```vue
<template>
  <SectionForm2Column
    id="contact-form"
    :form="formConfig"
    title="Get in touch"
    description-raw-markdown="Fill out the form to get in touch with our team."
  />
</template>

<script setup>
  const formConfig = {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Contact our team',
    action: 'https://www.azion.com',
    successMessage: 'Thank you for your message!',
    redirect: 'https://www.azion.com/en/thank-you/'
  }
</script>
```

### 70x30 Layout with Markdown

```vue
<template>
  <SectionForm2Column
    id="demo-request-form"
    :form="formConfig"
    type="70x30"
    title="Experience Azion Platform"
    description-raw-markdown="**See how Azion can transform your edge computing strategy.**\n\nOur platform provides:\n\n- Edge Computing at scale\n- Global CDN with low latency\n- Security built-in"
  />
</template>

<script setup>
  const formConfig = {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Request a demo',
    action: 'https://www.azion.com',
    successMessage: 'Thank you for your interest!',
    redirect: 'https://www.azion.com/en/thank-you/'
  }
</script>
```

### Custom Template with Slot

```vue
<template>
  <SectionForm2Column
    id="custom-form"
    :form="formConfig"
    template="custom-template"
    type="50x50"
  >
    <template #content>
      <div
        class="flex flex-col justify-center md:sticky top-20 gap-5 shrink-0 w-full p-6 md:p-12 md:min-h-full"
      >
        <h2 class="display-3-mobile md:display-3 font-normal tracking-tight text-gray-200 w-full">
          Custom Content
        </h2>
        <div class="text-base font-sora font-normal leading-[1.4] tracking-tight text-neutral-400">
          <p>This is custom content using the slot. You can add any HTML or components here.</p>
        </div>
      </div>
    </template>
  </SectionForm2Column>
</template>

<script setup>
  const formConfig = {
    id: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    title: 'Join our newsletter',
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
- **Sticky Content**: On medium and larger screens, the content column uses `md:sticky top-20` to remain visible while scrolling
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
- **Markdown Service**: Internal service for parsing markdown (`parseMarkdown`)
- **HubSpot Forms API**: External JavaScript library loaded dynamically

## Styling

The component uses the following CSS classes:

- Form container: `border border-neutral-800 rounded-md p-4 md:p-8`
- Form title: `display-2-mobile md:display-2` with responsive typography
- Field wrapper: `!font-sora` for consistent font family
- Content container: `flex flex-col justify-center md:sticky top-20 gap-5`
- Content title: `display-3-mobile md:display-3 font-normal tracking-tight text-gray-200`
- Content text: `text-base font-sora font-normal leading-[1.4] tracking-tight text-neutral-400`
- Loading indicator: Uses `.loader-ring` class (should be defined in global styles)

## Notes

- The HubSpot form script is loaded asynchronously, so there may be a brief delay before the form appears
- The component hides the form title when the form is successfully submitted (if using success message mode)
- Form validation and submission are handled entirely by HubSpot's form system
- The `form.action` value is set as a hidden input field that HubSpot uses for form processing
- When using the custom template, ensure your slot content follows the same structure and classes for consistent styling
- The content column is sticky on medium screens and above (`md:sticky top-20`) for better user experience
