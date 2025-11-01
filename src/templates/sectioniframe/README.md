# SectionIframe

## Purpose

A simple iframe container component that automatically manages iframe height on window resize and exposes a global function to manually set iframe height.

## Props

### Required

| Prop        | Type     | Description                    |
| ----------- | -------- | ------------------------------ |
| `iframeUrl` | `String` | URL rendered inside the iframe |

### Optional

| Prop | Type     | Default | Description                                                                                                       |
| ---- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `id` | `String` | `''`    | Optional ID for the iframe element. **This ID will be sent to the iframe URL as a query parameter (`?id=value`)** |

## ID Query Parameter

The component automatically appends the `id` prop value to the iframe URL as a query parameter. This allows the iframe content to know its container ID.

**Example:**

```vue
<SectionIframe
  id="assessment-iframe"
  iframeUrl="https://web-assessment.azion.app/?id=assessment-iframe"
/>
```

The iframe will load: `https://web-assessment.azion.app/?id=assessment-iframe`

The iframe content can access this ID using:

```javascript
const urlParams = new URLSearchParams(window.location.search)
const containerId = urlParams.get('id') // Returns "assessment-iframe"
```

## Exposed Window Function

The component exposes a global function on `window.azion.sectionIframeSetHeight` that allows you to manually set the iframe height for any iframe on the page. This function works with multiple iframe components simultaneously.

### `window.azion.sectionIframeSetHeight(iframeId, height)`

Sets the iframe height and removes the automatic resize listener for the specified iframe.

**Parameters:**

- `iframeId` (required): `string` - The ID of the iframe element to target
- `height` (required): `number | string` - Height value in pixels (number) or CSS string (e.g., `'500px'`, `'80vh'`)

**Returns:**

- `boolean` - Returns `true` if height was set successfully, `false` otherwise

**Behavior:**

- When called, it automatically removes the window resize listener for that specific iframe
- This prevents conflicts between manual height control and automatic resizing
- The iframe will use the specified height and won't adjust on window resize
- Works with multiple iframe components - each can be controlled independently by its ID

**Usage Example:**

```javascript
// Set height for a specific iframe using number (pixels)
window.azion.sectionIframeSetHeight('iframe-1', 500)

// Set height using CSS string
window.azion.sectionIframeSetHeight('iframe-1', '500px')
window.azion.sectionIframeSetHeight('iframe-2', '80vh')

// Multiple iframes on the same page
window.azion.sectionIframeSetHeight('assessment-iframe', 800)
window.azion.sectionIframeSetHeight('demo-iframe', '90vh')

// The function will automatically remove the resize listener
// so the iframe maintains the specified height
```

**Notes:**

- This function is automatically available after any SectionIframe component is mounted
- The function requires the iframe ID to target a specific iframe on the page
- Works with multiple iframe components - pass different IDs to control each one
- If the iframe is not found, a warning will be logged to the console
- The ID passed to this function should match the `id` prop of the SectionIframe component

## Automatic Height Management

By default, the component automatically sets the iframe height based on its scroll width when:

- The component is mounted
- The window is resized

This automatic behavior is disabled when `window.azion.sectionIframeSetHeight(iframeId, height)` is called for that specific iframe.

## Dependencies

### External

- vue

### Internal

- None

## Usage Example

```vue
<template>
  <SectionIframe
    id="hero-iframe"
    iframeUrl="https://web-assessment.azion.app/"
  />
</template>

<script setup>
  import SectionIframe from './templates/SectionIframe/SectionIframe.vue'
</script>
```

## Advanced Usage

If you need to manually control the iframe height from within the iframe content or from external scripts:

```javascript
// From parent window - control specific iframe by ID
setTimeout(() => {
  if (window.azion && window.azion.sectionIframeSetHeight) {
    window.azion.sectionIframeSetHeight('iframe-1', 800) // Set to 800px
  }
}, 100)

// From inside the iframe - get ID from URL query parameter
const urlParams = new URLSearchParams(window.location.search)
const containerId = urlParams.get('id')

if (containerId && window.parent && window.parent.azion) {
  // Access parent window function to set height
  window.parent.azion.sectionIframeSetHeight(containerId, 1000)
}

// Multiple iframes example
window.azion.sectionIframeSetHeight('assessment-iframe', 800)
window.azion.sectionIframeSetHeight('demo-iframe', '90vh')
window.azion.sectionIframeSetHeight('widget-iframe', 600)
```

## Notes

- For cross-origin iframes, you cannot auto-read content height due to browser security restrictions
- The component automatically sets height based on scroll width by default
- Use `window.azion.sectionIframeSetHeight(iframeId, height)` to disable automatic resizing and set a fixed height
- The resize listener is properly cleaned up when the component is unmounted
- **The `id` prop is automatically appended to the iframe URL as a query parameter** (`?id=value`), allowing the iframe content to identify its container
- When using multiple iframe components, each must have a unique `id` to be controlled independently
- The iframe content can access its container ID using `URLSearchParams` from the current URL

## Related Links

- [TypeScript Definitions](./SectionIframe.d.ts)
- [Component Implementation](./SectionIframe.vue)
- [Export Module](./SectionIframe.js)
- [Package Configuration](./package.json)
