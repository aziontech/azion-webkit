# ComponentName

## Purpose

<!-- Clear description of what the component does and when to use it -->
[COMPONENT_DESCRIPTION]

### Use Cases
- [USE_CASE_1]
- [USE_CASE_2]
- [USE_CASE_3]

---

## Props

### Required
| Prop | Type | Description |
|------|------|-----------|
| [PROP_NAME] | `[TYPE]` | [DESCRIPTION] |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-----------|
| [PROP_NAME] | `[TYPE]` | `[DEFAULT]` | `[VALUES]` | [DESCRIPTION] |

---

## Slots

| Slot | Description | Scope |
|------|-------------|-------|
| `default` | [DESCRIPTION] | - |
| `[SLOT_NAME]` | [DESCRIPTION] | `{ [SCOPE] }` |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `[EVENT_NAME]` | `[PAYLOAD_TYPE]` | [DESCRIPTION] |

---

## Dependencies

### External
- [EXTERNAL_DEPENDENCY]

### Internal
- [INTERNAL_COMPONENT]

---

## Examples

### Basic Usage
```vue
<template>
  <[COMPONENT_NAME]
    [PROP]="[VALUE]"
  >
    [CONTENT]
  </[COMPONENT_NAME]>
</template>
```

### Advanced Usage
```vue
<template>
  <[COMPONENT_NAME]
    [PROP1]="[VALUE1]"
    [PROP2]="[VALUE2]"
    @[EVENT]="[HANDLER]"
  >
    <template #[SLOT]>
      [SLOT_CONTENT]
    </template>
  </[COMPONENT_NAME]>
</template>

<script setup>
const [HANDLER] = ([PARAM]) => {
  // [HANDLER_LOGIC]
}
</script>
```

### Com Composables
```vue
<script setup>
import { [COMPOSABLE] } from '@/composables/[COMPOSABLE]'

const { [PROPERTIES] } = [COMPOSABLE]()
</script>
```

---

## Styling

### Main CSS Classes
- `[CLASS_NAME]`: [DESCRIPTION]

### Theme Customization
```css
/* CSS variables available for customization */
:root {
  --[VARIABLE_NAME]: [DEFAULT_VALUE];
}
```

---

## Accessibility

### ARIA
- [ARIA_ATTRIBUTE]: [DESCRIPTION]

### Keyboard Navigation
- [KEY]: [ACTION]

### Screen Reader
- [SCREEN_READER_FEATURE]

---

## Technical Notes

### Performance
- [PERFORMANCE_NOTE]

### Compatibility
- [COMPATIBILITY_NOTE]

### Limitations
- [LIMITATION]

---

## Changelog

### v[VERSION] - [DATE]
- [CHANGE]

### v[VERSION] - [DATE]  
- [PREVIOUS_CHANGE]

---

## Related Links

- [Storybook Story](../src/stories/[CATEGORIA]/[COMPONENT_NAME].stories.js)
- [TypeScript Definitions](./[COMPONENT_NAME].d.ts)
- [Component Implementation](./[COMPONENT_NAME].vue)
- [Export Module](./[COMPONENT_NAME].js)
- [Package Configuration](./package.json)
