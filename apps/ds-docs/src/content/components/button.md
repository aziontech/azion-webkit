---
title: Button
description: Buttons trigger actions and events when users interact with them.
navLabel: Button
order: 1
type: component
category: form
status: stable
component: Button
source: https://github.com/aziontech/webkit/tree/main/packages/components/src/Button
storybook: https://storybook.azion.com/components/button
figma: https://figma.com/file/azion-design-system/components/button
related:
  - Input
  - Select
---

# Button

Buttons are interactive elements that trigger actions when clicked or tapped. They communicate actions that users can take and are typically placed throughout your UI.

## When to Use

Use buttons to:
- Trigger primary actions (Submit, Save, Continue)
- Navigate to different views or pages
- Toggle states or settings
- Trigger secondary actions (Cancel, Delete)

## Anatomy

A button consists of:
1. **Container** - The clickable area with background styling
2. **Label** - Text describing the action
3. **Icon** (optional) - Visual indicator before or after the label

## Examples

### Primary Button

Use for the main action in a context.

<DemoPreview>
  <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
    Primary Button
  </button>
</DemoPreview>

### Secondary Button

Use for secondary or alternative actions.

<DemoPreview>
  <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors border border-gray-300">
    Secondary Button
  </button>
</DemoPreview>

### Destructive Button

Use for destructive or irreversible actions.

<DemoPreview>
  <button class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
    Delete
  </button>
</DemoPreview>

## States

Buttons have the following states:
- **Default** - The normal resting state
- **Hover** - When the cursor is over the button
- **Focus** - When the button has keyboard focus
- **Active** - When the button is being pressed
- **Disabled** - When the button is not interactive

## Accessibility

### Keyboard Interaction
- **Tab**: Moves focus to the button
- **Enter/Space**: Activates the button when focused

### ARIA Attributes
- Use `aria-disabled="true"` for disabled buttons that should be announced
- Use `aria-label` for icon-only buttons

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'destructive'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `icon` | `string` | - | Icon name to display |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Button label content |
| `icon-left` | Icon before the label |
| `icon-right` | Icon after the label |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Fired when button is clicked |

## Related

- [Input](/components/input) - Text input component
- [Select](/components/select) - Select dropdown component
