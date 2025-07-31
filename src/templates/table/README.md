# Table

## Purpose

A dynamic comparison table component built with PrimeVue DataTable, designed for displaying competitive analysis data. Features responsive design, sticky headers, and automatic highlighting for advantageous values. Optimized for theme switching between light and dark modes.

## Props

### Required

| Prop      | Type       | Description                                    |
| --------- | ---------- | ---------------------------------------------- |
| `columns` | `Array`    | Array of column names (providers/competitors)  |
| `rows`    | `Array`    | Array of row names (metrics/features)         |
| `data`    | `Array`    | Matrix of cell values (row x column)          |

### Optional

| Prop    | Type     | Default | Values | Description           |
| ------- | -------- | ------- | ------ | --------------------- |
| `title` | `String` | `''`    | -      | Title of the table    |

## Features

- **Dynamic Structure**: Define columns, rows, and data programmatically
- **Theme Adaptive**: Seamless switching between light and dark themes
- **Responsive Design**: Adapts to different screen sizes with mobile-optimized padding
- **Sticky Headers**: Column headers remain visible when scrolling
- **Auto Highlighting**: Automatically highlights advantageous values (✅, ❌, ⭐)
- **Clean Design**: Borderless table with subtle hover effects
- **PrimeVue Integration**: Uses PrimeVue passthrough (pt) configuration for styling
- **Accessibility**: Proper semantic structure and responsive text sizing

## Slots

| Name      | Description  |
| --------- | ------------ |
| `default` | Default slot |

## Dependencies

### External
- PrimeVue DataTable
- PrimeVue Column
- Overline component (for title display)

### Styling
- TailwindCSS utility classes
- PrimeVue passthrough (pt) configuration
- CSS custom properties for theme-adaptive styling

## Usage Example

```vue
<template>
  <Table
    title="Produto / Métrica"
    :columns="[
      'Cloudflare R2 / Workers / CDN',
      'AWS S3 + CloudFront', 
      'Akamai NetStorage / CDN',
      'Azion Edge Storage + Edge App'
    ]"
    :rows="[
      'Armazenamento (US / BR)',
      'Egressos / Tráfego CDN',
      'Requests (HTTPS / 10k)'
    ]"
    :data="[
      [
        '$0.015/GB - sem egressos PUT/GET pagos',
        '$0.023~$0.024/GB - egressos $0.085/GB',
        '≥ $0.049/GB + ingestão e purga',
        '✅ $0.015/GB com integração edge - sem egressos'
      ],
      [
        'Incluso no plano (fair use)',
        '$0.085~$0.060/GB + $0.0075/10k reqs',
        '$0.049~$0.045/GB + custo variável',
        '✅ $0.110/GB (BR) - $0.085/GB (US/EU) - decrescente'
      ],
      [
        'GET $3.60 - PUT $4.5',
        '~$0.75/10k',
        'Geralmente incluso ou variável',
        '✅ $0.009 (US/EU) - $0.029 (LATAM)'
      ]
    ]"
  />
</template>
```

## Styling

The component uses a combination of TailwindCSS and PrimeVue CSS variables for theme-adaptive styling:

### TailwindCSS Classes
- Responsive padding: `p-2 md:p-4`
- Text sizing: `text-sm md:text-base`
- Positioning: `sticky top-0 z-10`
- Layout: `flex items-center justify-center`

### CSS Custom Properties (Theme Adaptive)
- `--surface-ground`: Background color for headers
- `--surface-border`: Border color for table lines
- `--surface-hover`: Hover background color
- `--text-color`: Primary text color
- `--text-color-secondary`: Secondary text color

### PrimeVue Passthrough Configuration
Styling is applied via PrimeVue's `pt` (passthrough) system, eliminating the need for deep CSS selectors.

## Related Links

- [TypeScript Definitions](./Table.d.ts)
- [Component Implementation](./Table.vue)
- [Export Module](./index.js)
