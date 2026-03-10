---
title: Animações com Motion
description: Como usar a biblioteca Motion (motion.dev) no projeto para animações fluidas e acessíveis
type: guide
category: animations
language: en
navLabel: Animations
order: 15
---

## Overview

The ds-docs platform uses [Motion](https://motion.dev/) (via the Vue binding **motion-v**) for enter/exit, hover, and scroll-driven animations. Motion provides a declarative API, hardware-accelerated performance, and consistent behavior across touch and pointer devices.

## Installation

Motion is already installed in this project:

```bash
pnpm add motion-v
```

## Usage in Vue components

### Importing

Import the `motion` component and `AnimatePresence` where needed:

```vue
<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
</script>
```

Use `motion` as a drop-in for HTML elements: `motion.div`, `motion.button`, `motion.span`, etc.

### Enter / initial animation

Control how elements appear with `initial` and `animate`:

```vue
<template>
  <motion.div
    :initial="{ opacity: 0, y: 8 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.2 }"
  >
    Content
  </motion.div>
</template>
```

Set `:initial="false"` to skip the first-frame animation.

### Exit animation with AnimatePresence

Wrap conditional content in `AnimatePresence` and use the `exit` prop so elements animate out before being removed:

```vue
<template>
  <AnimatePresence>
    <motion.div
      v-if="isOpen"
      key="panel"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
    >
      Panel content
    </motion.div>
  </AnimatePresence>
</template>
```

Each animated child must have a unique `key` so Motion can track enter/exit correctly.

### Gestures (hover, press)

Use `whileHover` and `whilePress` for interaction feedback:

```vue
<motion.button
  :whileHover="{ scale: 1.02 }"
  :whilePress="{ scale: 0.98 }"
>
  Click me
</motion.button>
```

Motion’s gestures work correctly on touch (no spurious hover from taps).

### Scroll-triggered (whileInView)

Animate when the element enters the viewport:

```vue
<motion.section
  :initial="{ opacity: 0, y: 20 }"
  :whileInView="{ opacity: 1, y: 0 }"
  :transition="{ duration: 0.4 }"
>
  Section content
</motion.section>
```

### Scroll reveal (vanilla Motion)

The docs layout uses the **vanilla** `motion` package for scroll reveal so content blocks animate as they enter the viewport, without wrapping HTML in Vue (keeping tab scripts and other DOM logic intact). See `src/scripts/scroll-reveal.ts`:

- **inView** (Intersection Observer) detects when each block enters the viewport; callback runs once per element.
- **animate()** runs the reveal (opacity 0→1, y 12→0) with a small bottom margin so the animation starts just before the block is fully visible.

To customize, edit `REVEAL_OPTIONS` (duration, ease) and `INVIEW_OPTIONS` (margin, amount) in that script. [Motion inView docs](https://motion.dev/docs/inview).

Configure timing via the `transition` prop:

```vue
<motion.div
  :animate="{ x: 100 }"
  :transition="{
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1]
  }"
/>
```

Or use spring physics:

```vue
<motion.div
  :animate="{ scale: 1.1 }"
  :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
/>
```

## Where Motion is used in ds-docs

- **DocsShellLayout / DocsLayout**: The main content area uses a **CSS keyframe animation** (`docsContentReveal`) for a smooth enter (opacity + slide up). **Scroll reveal**: A script (`src/scripts/scroll-reveal.ts`) uses Motion's **inView** (Intersection Observer) and **animate()** to reveal content blocks as they enter the viewport—each block animates (opacity + y) when it crosses into view, with `once: true` and a small bottom margin so it triggers just before the block is fully visible. This uses the vanilla `motion` package for maximum efficiency and does not wrap content in Vue, so tab switchers and other scripts keep working.
- **PageHeader**: Doc page titles and metadata use a subtle fade + slide up on enter (Motion).
- **SearchModal**: Backdrop and panel use `AnimatePresence` with `initial` / `animate` / `exit` for open/close.
- **DocsSidebarItem**: Optional subtle `whileHover` for link feedback.

## Guidelines

1. **Prefer subtle motion** – Short durations (0.15–0.3s) and small transforms (e.g. `y: 4`, `scale: 1.02`) keep the UI responsive.
2. **Respect reduced motion** – Motion respects `prefers-reduced-motion`; avoid adding motion that cannot be disabled.
3. **Don’t block interaction** – Use `AnimatePresence` with `mode="wait"` only when a single exit must finish before the next enter; otherwise prefer `sync` or default.
4. **Keep keys stable** – Use stable, unique `key` values for list items and conditional branches inside `AnimatePresence`.

## Resources

- [Motion for Vue – Get started](https://motion.dev/docs/vue)
- [Motion component](https://motion.dev/docs/vue-motion-component)
- [AnimatePresence](https://motion.dev/docs/vue-animate-presence)
- [Vue scroll animations](https://motion.dev/docs/vue-scroll-animations)
