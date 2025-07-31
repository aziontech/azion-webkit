# Table

A dynamic comparison table component built with PrimeVue DataTable, designed for displaying competitive analysis data. Features responsive design, sticky headers, and automatic highlighting for advantageous values. Automatically parses HTML table strings into a beautiful, responsive table.

## Features

- **HTML Table Parsing**: Automatically parses HTML table strings into component format
- **Responsive Design**: Adapts to different screen sizes with mobile-optimized padding
- **Sticky Headers**: Column headers remain visible when scrolling
- **Auto Highlighting**: Automatically highlights advantageous values (✅, ❌, ⭐)
- **Icon Support**: Proper styling for icons (✅, ❌, ⭐)
- **Clean Design**: Borderless table with subtle hover effects
- **PrimeVue Integration**: Uses PrimeVue passthrough (pt) configuration for styling
- **Accessibility**: Proper semantic structure and responsive text sizing
- **TypeScript Support**: Complete type definitions for all props

## Props

### Required Props

- **htmlTable** (`string`): HTML string containing a table element

### Optional Props

- **title** (`string`, default: `''`): Title of the table displayed above the table

## Usage

### Usage

```vue
<template>
  <Table
    title="Service Plans Comparison"
    :htmlTable="htmlTableData"
  />
</template>

<script setup>
  import Table from './Table.vue'

  const htmlTableData = `
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Basic</th>
        <th>Pro</th>
        <th>Enterprise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Storage</td>
        <td>10GB</td>
        <td>100GB</td>
        <td>Unlimited</td>
      </tr>
      <tr>
        <td>Bandwidth</td>
        <td>100GB/month</td>
        <td>1TB/month</td>
        <td>Unlimited</td>
      </tr>
      <tr>
        <td>Support</td>
        <td>Email</td>
        <td>Email + Chat</td>
        <td>24/7 Phone</td>
      </tr>
    </tbody>
  </table>
`
</script>
```

## Examples

### HTML Table Example

```vue
<Table
  title="Feature Comparison"
  :htmlTable="`
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Basic</th>
        <th>Premium</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Users</td>
        <td>5</td>
        <td>Unlimited</td>
      </tr>
      <tr>
        <td>Storage</td>
        <td>10GB</td>
        <td>1TB</td>
      </tr>
      <tr>
        <td>Support</td>
        <td>Email</td>
        <td>24/7</td>
      </tr>
    </tbody>
  </table>
`"
/>
```

### Simple HTML Table

```vue
<Table
  title="Simple Comparison"
  :htmlTable="`
  <table>
    <tr>
      <th>Feature</th>
      <th>Basic</th>
      <th>Premium</th>
    </tr>
    <tr>
      <td>Users</td>
      <td>5</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>10GB</td>
      <td>1TB</td>
    </tr>
  </table>
`"
/>
```

## HTML Table Parsing

The component automatically parses HTML table strings and extracts:

- **Title**: From `<caption>` element or `data-title` attribute
- **Columns**: From header cells (`<th>`) in the first row (excluding first cell)
- **Rows**: From first cell of each row (row labels)
- **Data**: From remaining cells in each row

### Supported HTML Structures

- Tables with `<thead>` and `<tbody>`
- Simple tables with just `<tr>` elements
- Tables with `<caption>` for title
- Tables with `data-title` attribute
- Mixed `<th>` and `<td>` elements

## Styling

The component uses:

- PrimeVue DataTable as the base component
- Tailwind CSS for utility classes
- PrimeVue passthrough (pt) configuration
- CSS custom properties for theme-adaptive styling

## TypeScript Support

Complete TypeScript definitions are provided:

```typescript
interface TableProps {
  title?: string // Optional title of the table
  htmlTable: string // HTML string containing a table element
}
```
