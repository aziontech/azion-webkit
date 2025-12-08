# SectionFormContactUs

A two-column section block component that combines a contact form with supporting content cards and office locations. Perfect for contact sales pages, lead generation, and customer support forms with integrated HubSpot submission.

## Features

- **Two-Column Layout**: Contact form on one side, supporting content on the other
- **HubSpot Integration**: Direct API integration for form submissions
- **Flexible Layouts**: Two layout types - 70/30 split (form 70%, content 30%) or 50/50 split
- **Phone Input**: Country code dropdown with flag display and phone number validation
- **Support Cards**: Two configurable cards (e.g., support link, cyberattack mitigation)
- **Office Locations**: Display multiple office locations with map links
- **Form Validation**: Built-in validation and error handling
- **Success/Error Messages**: User-friendly feedback for form submissions
- **Responsive Design**: Adapts gracefully across different screen sizes
- **Sticky Positioning**: Both columns sticky on larger screens for better UX

## Props

| Prop               | Type                                                | Required | Default   | Description                                                          |
| ------------------ | --------------------------------------------------- | -------- | --------- | -------------------------------------------------------------------- |
| `id`               | `string`                                            | No       | `''`      | HTML id attribute for the section container                          |
| `bottomSpacing`    | `'mb-0' \| 'mb-6' \| 'mb-12' \| 'mb-24' \| 'mb-48'` | No       | `'mb-24'` | Bottom margin spacing for the section                                |
| `type`             | `'70x30' \| '50x50'`                                | No       | `'50x50'` | Layout type: 70/30 split (form 70%, content 30%) or 50/50 split      |
| `form`             | `FormConfig`                                        | Yes      | -         | Form configuration object (see FormConfig interface below)           |
| `hubspot`          | `HubSpotConfig`                                     | Yes      | -         | HubSpot API configuration (see HubSpotConfig interface below)        |
| `requester`        | `string`                                            | Yes      | -         | Page URL/hostname for form context                                   |
| `requesterName`    | `string`                                            | Yes      | -         | Page title/name for form context                                     |
| `responseMessages` | `ResponseMessages`                                  | Yes      | -         | Success and error messages (see ResponseMessages interface below)    |
| `card`             | `CardConfig`                                        | Yes      | -         | First card configuration (see CardConfig interface below)            |
| `card2`            | `CardConfig`                                        | Yes      | -         | Second card configuration (see CardConfig interface below)           |
| `locations`        | `LocationsConfig`                                   | Yes      | -         | Office locations configuration (see LocationsConfig interface below) |
| `lang`             | `string`                                            | No       | `'en'`    | Language code for default phone country (en, pt-br, es)              |

### FormConfig Interface

```typescript
interface FormConfig {
  title: string // Form title/heading
  description: string // Form description text
  name: string // First name label
  namePlaceholder: string // First name input placeholder
  lastName?: string // Last name label (optional)
  lastNamePlaceholder?: string // Last name input placeholder (optional)
  phone?: string // Phone label (optional)
  phonePlaceholder?: string // Phone input placeholder (optional)
  email: string // Email label
  emailPlaceholder: string // Email input placeholder
  segment: string // Business segment label
  segmentPlaceholder: string // Segment dropdown placeholder
  segmentData: Array<{
    // Segment dropdown options
    value: string
    label: string
  }>
  message: string // Message textarea label
  terms: string // Terms acceptance text
  buttonText: string // Submit button label
}
```

### HubSpotConfig Interface

```typescript
interface HubSpotConfig {
  formId: string // HubSpot form ID (UUID)
  companyId: string // HubSpot portal/company ID
}
```

### ResponseMessages Interface

```typescript
interface ResponseMessages {
  success: string // Success message displayed after successful submission
  error: string // Error message displayed on submission failure
}
```

### CardConfig Interface

```typescript
interface CardConfig {
  overline: string // Card overline text
  title: string // Card title
  button: {
    label: string
    link: string
    severity?: string // Button severity (primary, secondary, etc.)
    outlined?: boolean // Whether button is outlined
  }
}
```

### LocationsConfig Interface

```typescript
interface LocationsConfig {
  overline: string // Locations section overline
  offices: Array<{
    city: string // Office city name
    address: string // Office full address
    button: {
      label: string // Map link button label
      link: string // Map URL
    }
  }>
}
```

## Layout Types

### 50x50 (Default)

- Equal split between form and content
- Uses `grid-cols-2` layout
- Each column spans 1 column
- Best for balanced layouts where form and content are equally important

### 70x30

- Form takes 70% of the width
- Content takes 30% of the width
- Uses `grid-cols-10` layout
- Form column spans 7 columns, content column spans 3 columns
- Best for forms that need more space or when content is supplementary

## Usage

### Basic Contact Sales Form

```vue
<template>
  <SectionFormContactUs
    id="contact-sales"
    :form="formConfig"
    :hubspot="hubspotConfig"
    requester="https://www.azion.com"
    requester-name="Contact Sales"
    :response-messages="responseMessages"
    :card="supportCard"
    :card2="cyberattackCard"
    :locations="officeLocations"
  />
</template>

<script setup>
  const formConfig = {
    title: 'Get in touch with us',
    description: 'We're here to help you get started...',
    name: 'First name',
    namePlaceholder: 'Enter your name',
    email: 'Corporate email',
    emailPlaceholder: 'Enter your corporate email',
    phone: 'Phone number',
    phonePlaceholder: 'Enter your phone number',
    segment: 'Business segment',
    segmentPlaceholder: 'Please select a business segment',
    segmentData: [
      { value: 'Technology', label: 'Technology' },
      { value: 'Finance', label: 'Finance' }
    ],
    message: 'Message',
    terms: 'I agree to receive communications from Azion',
    buttonText: 'Send message'
  }

  const hubspotConfig = {
    formId: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
    companyId: '5759082'
  }

  const responseMessages = {
    success: 'Thank you for your interest in Azion. Our Sales team will contact you shortly.',
    error: 'Error while submitting, try again later'
  }

  const supportCard = {
    overline: 'Support',
    title: 'Do you need technical support?',
    button: {
      label: 'Sign in to your account',
      link: 'https://tickets.azion.com/en/support/login',
      severity: 'secondary',
      outlined: false
    }
  }

  const cyberattackCard = {
    overline: 'Mitigating Cyberattacks',
    title: 'Under Cyberattack?',
    button: {
      label: 'Request contact',
      link: '/en/lp/under-attack-mitigation/',
      severity: 'secondary',
      outlined: true
    }
  }

  const officeLocations = {
    overline: 'Our Offices',
    offices: [
      {
        city: 'Palo Alto, United States of America',
        address: '228 Hamilton Avenue, 3rd Floor, Palo Alto, California, 94301',
        button: {
          label: 'Map view',
          link: 'https://maps.app.goo.gl/wUATTRsySvcZqJi87'
        }
      }
    ]
  }
</script>
```

### 70x30 Layout

```vue
<template>
  <SectionFormContactUs
    type="70x30"
    :form="formConfig"
    :hubspot="hubspotConfig"
    requester="https://www.azion.com"
    requester-name="Contact Sales"
    :response-messages="responseMessages"
    :card="supportCard"
    :card2="cyberattackCard"
    :locations="officeLocations"
  />
</template>
```

## Behavior

- **Form Submission**: Submits form data directly to HubSpot API using the configured form ID and company ID
- **Phone Input**:
  - Country code dropdown defaults based on `lang` prop (pt-br: +55, es: +52, en: +1)
  - Phone number input only accepts numeric characters
  - Country flags displayed in dropdown
- **Form Fields**:
  - `lastName` and `phone` fields are conditionally rendered based on form config
  - Segment dropdown uses provided `segmentData` options
  - All fields are sent to HubSpot on submission
- **Sticky Positioning**:
  - Form column: `lg:sticky lg:top-10`
  - Content column: `lg:sticky lg:top-20`
  - Both columns remain visible while scrolling on medium+ screens
- **Response Handling**:
  - Success/error messages displayed below form
  - Messages use PrimeVue `InlineMessage` component
- **Country Data**: Automatically fetches country data from `country-state-city` library on mount

## Dependencies

- **Vue 3**: Component structure and reactivity
- **PrimeVue Components**:
  - `inputtext` - Text inputs
  - `button` - Submit button
  - `textarea` - Message input
  - `dropdown` - Segment and country code selectors
  - `inlinemessage` - Success/error messages
- **country-state-city**: Country data for phone code dropdown
- **Tailwind CSS**: For layout and responsive design
- **LayoutContainer**: Internal component for container layout
- **CardBase, LinkButton, CardTitle, Overline**: Internal template components
- **hubspot-service**: Internal service for HubSpot API calls

## Styling

The component uses the following CSS classes:

- Form container: `border border-neutral-800 p-6 md:p-12`
- Content container: `border border-l-0 border-neutral-800`
- Form title: `text-xl font-medium`
- Form description: `text-sm text-color-secondary`
- Input labels: `text-sm`
- Sticky positioning: `lg:sticky lg:top-10` (form), `lg:sticky lg:top-20` (content)

## Notes

- The component submits directly to HubSpot API, not using HubSpot Forms JavaScript library
- Phone country code defaults are based on the `lang` prop
- Form validation is handled by the browser and PrimeVue components
- The `segment` field value is sent as `segmento_de_neg_cio` to HubSpot
- Terms acceptance is always set to `true` in the current implementation
- Office locations are rendered as a list with map links
- Both columns are sticky on medium screens and above for better user experience
