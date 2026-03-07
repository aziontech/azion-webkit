---
title: Fieldset
description: Group related form inputs under a shared label for better organization and accessibility.
type: component
category: form
status: stable
since: 1.0.0
figma: https://figma.com/file/azion-design-system?node-id=fieldset
storybook: https://storybook.azion.com/?path=/story/form-fieldset
source: https://github.com/aziontech/webkit/tree/main/packages/components/src/Fieldset
related:
  - Form
  - Input
  - Select
---

## Overview

The Fieldset component provides a way to group related form controls together. It renders a native HTML `<fieldset>` element with proper accessibility features, including an associated `<legend>` for the group label.

Fieldsets are essential for creating accessible forms, as they help screen reader users understand the relationship between form controls.

## When to Use

Use Fieldset when you need to:

- Group related form inputs (e.g., address fields, contact information)
- Create logical sections within a larger form
- Improve form accessibility with proper semantic structure
- Apply a shared label or description to multiple inputs

## Examples

### Basic Fieldset

<DemoPreview title="Basic fieldset with legend">
  <fieldset class="border border-gray-300 rounded-lg p-4">
    <legend class="text-sm font-medium text-text-primary px-2">Personal Information</legend>
    <div class="space-y-4 mt-2">
      <div>
        <label class="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your name" />
      </div>
      <div>
        <label class="block text-sm font-medium text-text-secondary mb-1">Email</label>
        <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" />
      </div>
    </div>
  </fieldset>
</DemoPreview>

### Address Grouping

<DemoPreview title="Address fields grouped together">
  <fieldset class="border border-gray-300 rounded-lg p-4">
    <legend class="text-sm font-medium text-text-primary px-2">Shipping Address</legend>
    <div class="space-y-4 mt-2">
      <div>
        <label class="block text-sm font-medium text-text-secondary mb-1">Street Address</label>
        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="123 Main St" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-text-secondary mb-1">City</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="City" />
        </div>
        <div>
          <label class="block text-sm font-medium text-text-secondary mb-1">ZIP Code</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="12345" />
        </div>
      </div>
    </div>
  </fieldset>
</DemoPreview>

### Disabled State

<DemoPreview title="Disabled fieldset">
  <fieldset class="border border-gray-300 rounded-lg p-4 opacity-50" disabled>
    <legend class="text-sm font-medium text-text-primary px-2">Disabled Group</legend>
    <div class="space-y-4 mt-2">
      <div>
        <label class="block text-sm font-medium text-text-secondary mb-1">Input 1</label>
        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" placeholder="Disabled" />
      </div>
      <div>
        <label class="block text-sm font-medium text-text-secondary mb-1">Input 2</label>
        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" placeholder="Disabled" />
      </div>
    </div>
  </fieldset>
</DemoPreview>

## Accessibility

### Keyboard Navigation

| Keys | Action |
|------|--------|
| Tab | Moves focus to the first focusable element within the fieldset |

### ARIA Attributes

The Fieldset component uses native HTML elements that provide built-in accessibility:

- `<fieldset>` - Groups related form controls
- `<legend>` - Provides the accessible name for the group

No additional ARIA attributes are required when using the native elements correctly.

### Best Practices

1. **Always include a legend**: The `<legend>` element is required for accessibility
2. **Use for related inputs**: Only group inputs that are logically related
3. **Avoid nested fieldsets**: Deeply nested fieldsets can be confusing for screen reader users
4. **Consider visual grouping**: Use styling to visually reinforce the grouping

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `legend` | `string` | - | The text for the fieldset legend |
| `disabled` | `boolean` | `false` | Whether all controls in the fieldset are disabled |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Form controls and content inside the fieldset |
| `legend` | Custom legend content (overrides `legend` prop) |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| - | - | Fieldset does not emit custom events |

## Related

- [Form](/components/form) - Form wrapper component
- [Input](/components/input) - Text input component
- [Select](/components/select) - Select dropdown component
