# HeroIframeRight

## Purpose

Hero with content on the left and an iframe on the right (or vice‑versa).

## Props

### Required

| Prop         | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `title`      | `String` | Main heading text            |
| `iframeUrl`  | `String` | URL rendered inside the iframe |

### Optional

| Prop                 | Type                                  | Default     | Values                             | Description                           |
| -------------------- | ------------------------------------- | ----------- | ---------------------------------- | ------------------------------------- |
| `id`                 | `String`                               | `''`        | -                                  | Section id                            |
| `overline`           | `String`                               | `''`        | -                                  | Small label above the title           |
| `descriptionRawHtml` | `String`                               | `''`        | -                                  | HTML description (rendered as raw)    |
| `list`               | `Array<{ title, description, icon }>` | `[]`        | -                                  | Bullet list below the overline/title  |
| `position`           | `String`                               | `'left'`    | `'left' | 'right'`                  | Content block position                |
| `margin`             | `String`                               | `'none'`    | `'none' | 'small' | 'default' | 'large'` | Section vertical margin preset        |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `content` | content slot |
| `main`    | main slot    |

## Dependencies

### External

- vue

### Internal

- ../herobase
- ../listunordered

## Usage Example

```vue
<template>
  <HeroIframeRight
    id="hero-iframe"
    overline="Get started"
    title="Build at the edge, faster"
    descriptionRawHtml="<p>Deploy globally in minutes with our edge platform.</p>"
    :list="[
      { icon: 'pi pi-check', title: 'Global scale', description: 'Run closer to users' },
      { icon: 'pi pi-bolt', title: 'Fast', description: 'Ultra-low latency' }
    ]"
    position="right"
    margin="default"
    iframeUrl="https://web-assessment.azion.app/"
  />
</template>
```

Notes:
- For cross-origin iframes you cannot auto-read content height. The component sets iframe height on window resize; prefer a responsive wrapper if full auto-fit is not possible.

## Related Links

- [TypeScript Definitions](./HeroIframeRight.d.ts)
- [Component Implementation](./HeroIframeRight.vue)
- [Export Module](./HeroIframeRight.js)
- [Package Configuration](./package.json)
