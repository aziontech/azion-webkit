# Toggle

A flexible toggle component for switching between two options with customizable labels and description.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String` | `'main'` | The currently selected option ('main' or 'alternative') |
| `mainLabel` | `String` | `'Main'` | Label for the main option |
| `alternativeLabel` | `String` | `'Alternative'` | Label for the alternative option |
| `description` | `String` | `''` | Optional description text displayed below the toggle |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String` | Emitted when the selected option changes |
| `change` | `String` | Emitted when the selected option changes |

## Usage

```vue
<template>
  <Toggle
    v-model="selectedPlan"
    :main-label="'Monthly'"
    :alternative-label="'Annual'"
    :description="'Save 20% with annual billing'"
    @change="handlePlanChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import Toggle from '@/blocks/Toggle'

const selectedPlan = ref('main')

const handlePlanChange = (option) => {
  console.log('Selected option:', option)
}
</script>
```

## Features

- Generic toggle between two options (no hardcoded references to specific terms)
- Smooth sliding animation for the selection indicator
- Customizable labels for both options
- Optional description text below the toggle
- Full v-model support for two-way binding
- Responsive and accessible design
- Dark theme with purple accent color
