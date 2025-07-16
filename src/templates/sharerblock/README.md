# SharerBlock

## Purpose

Component SharerBlock

## Props

### Required

| Prop          | Type     | Description    |
| ------------- | -------- | -------------- |
| `data`        | `Array`  | No description |
| `tooltipText` | `String` | No description |
| `sharedURL`   | `URL`    | No description |

### Optional

| Prop    | Type     | Default             | Values | Description    |
| ------- | -------- | ------------------- | ------ | -------------- |
| `title` | `String` | `'Share this post'` | -      | No description |

## Events

| Event   | Description |
| ------- | ----------- |
| `click` | click event |

## Dependencies

### External

- primevue/button

### Internal

- ../linkbutton

## Usage Example

```vue
<template>
  <SharerBlock
    :data="[]"
    :tooltipText=""exemplo""
    :sharedURL=""valor""
  >
  </SharerBlock>
</template>
```

## Related Links

- [TypeScript Definitions](./SharerBlock.d.ts)
- [Component Implementation](./SharerBlock.vue)
- [Export Module](./sharerblock.js)
- [Package Configuration](./package.json)
