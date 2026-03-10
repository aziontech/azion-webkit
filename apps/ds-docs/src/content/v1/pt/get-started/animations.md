---
title: Animações com Motion
description: Como usar a biblioteca Motion (motion.dev) no projeto para animações fluidas e acessíveis
type: guide
category: animations
language: pt
translatedFrom: en
translationStatus: complete
navLabel: Animações
order: 15
---

## Visão geral

A plataforma ds-docs usa [Motion](https://motion.dev/) (via o binding Vue **motion-v**) para animações de entrada/saída, hover e baseadas em scroll. O Motion oferece API declarativa, desempenho com aceleração por hardware e comportamento consistente em dispositivos touch e com mouse.

## Instalação

O Motion já está instalado neste projeto:

```bash
pnpm add motion-v
```

## Uso em componentes Vue

### Importando

Importe o componente `motion` e o `AnimatePresence` onde for necessário:

```vue
<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
</script>
```

Use `motion` no lugar de elementos HTML: `motion.div`, `motion.button`, `motion.span`, etc.

### Animação de entrada / inicial

Controle como os elementos aparecem com `initial` e `animate`:

```vue
<template>
  <motion.div
    :initial="{ opacity: 0, y: 8 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.2 }"
  >
    Conteúdo
  </motion.div>
</template>
```

Use `:initial="false"` para desativar a animação no primeiro frame.

### Animação de saída com AnimatePresence

Envolva conteúdo condicional em `AnimatePresence` e use a prop `exit` para que os elementos animem a saída antes de serem removidos:

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
      Conteúdo do painel
    </motion.div>
  </AnimatePresence>
</template>
```

Cada filho animado precisa de um `key` único para o Motion rastrear entrada/saída corretamente.

### Gestos (hover, press)

Use `whileHover` e `whilePress` para feedback de interação:

```vue
<motion.button
  :whileHover="{ scale: 1.02 }"
  :whilePress="{ scale: 0.98 }"
>
  Clique aqui
</motion.button>
```

Os gestos do Motion funcionam corretamente em touch (sem hover falso ao toque).

### Disparo por scroll (whileInView)

Anime quando o elemento entra na viewport:

```vue
<motion.section
  :initial="{ opacity: 0, y: 20 }"
  :whileInView="{ opacity: 1, y: 0 }"
  :transition="{ duration: 0.4 }"
>
  Conteúdo da seção
</motion.section>
```

### Revelação no scroll (Motion vanilla)

O layout da doc usa o pacote **vanilla** `motion` para revelação no scroll: blocos de conteúdo animam ao entrar na viewport, sem envolver o HTML em Vue (mantendo abas e outros scripts). Veja `src/scripts/scroll-reveal.ts`:

- **inView** (Intersection Observer) detecta quando cada bloco entra na viewport; o callback roda uma vez por elemento.
- **animate()** aplica a revelação (opacity 0→1, y 12→0) com uma pequena margem inferior.

Para customizar, edite `REVEAL_OPTIONS` e `INVIEW_OPTIONS` nesse script. [Docs inView](https://motion.dev/docs/inview).

### Opções de transição

Configure o tempo pela prop `transition`:

```vue
<motion.div
  :animate="{ x: 100 }"
  :transition="{
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1]
  }"
/>
```

Ou use física de mola (spring):

```vue
<motion.div
  :animate="{ scale: 1.1 }"
  :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
/>
```

## Onde o Motion é usado no ds-docs

- **DocsShellLayout / DocsLayout**: A área principal usa **animação CSS** (`docsContentReveal`) na entrada. **Revelação no scroll**: o script `src/scripts/scroll-reveal.ts` usa **inView** (Intersection Observer) e **animate()** do Motion para revelar blocos de conteúdo ao entrarem na viewport—cada bloco anima (opacidade + y) quando cruza a área visível, com `once: true` e uma pequena margem inferior. Usa o pacote vanilla `motion` para máxima eficiência e não envolve o conteúdo em Vue, então abas e outros scripts continuam funcionando.
- **PageHeader**: Títulos e metadados usam fade + deslize na entrada (Motion).
- **SearchModal**: Backdrop e painel usam `AnimatePresence` com `initial` / `animate` / `exit`.
- **DocsSidebarItem**: Opcional `whileHover` para feedback no link.

## Diretrizes

1. **Prefira movimento sutil** – Durações curtas (0,15–0,3s) e transforms pequenos (ex.: `y: 4`, `scale: 1.02`) mantêm a interface responsiva.
2. **Respeite reduced motion** – O Motion respeita `prefers-reduced-motion`; evite adicionar animação que não possa ser desativada.
3. **Não bloquear interação** – Use `AnimatePresence` com `mode="wait"` só quando uma saída precisar terminar antes da próxima entrada; caso contrário prefira `sync` ou o padrão.
4. **Keys estáveis** – Use valores de `key` estáveis e únicos para itens de lista e ramos condicionais dentro de `AnimatePresence`.

## Recursos

- [Motion for Vue – Começar](https://motion.dev/docs/vue)
- [Componente Motion](https://motion.dev/docs/vue-motion-component)
- [AnimatePresence](https://motion.dev/docs/vue-animate-presence)
- [Animações por scroll no Vue](https://motion.dev/docs/vue-scroll-animations)
