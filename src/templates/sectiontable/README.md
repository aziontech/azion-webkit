# SectionTable

A section component that displays a table within a content section layout. Based on `SectionBasicContent` but with a `#content` slot containing the Table component instead of action buttons.

## Usage

```vue
<template>
  <SectionTable
    title="Pricing Comparison"
    description="Compare our different service plans and features"
    :table="tableData"
  />
</template>

<script setup>
  import SectionTable from './SectionTable.vue'

  const tableData = {
    title: 'Service Plans',
    htmlTable: `
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
  }
</script>
```

## Props

### Required Props

- **title** (`string`): The main title of the section
- **table** (`TableData`): Table configuration object containing:
  - `title` (optional `string`): Table title
  - `htmlTable` (`string`): HTML string containing table element

### Optional Props

- **id** (`string`, default: `''`): HTML id attribute for the section
- **isContentCentralized** (`boolean`, default: `true`): Whether to center the content
- **overline** (`string`, default: `''`): Small text above the title
- **titleTag** (`'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'`, default: `'h2'`): HTML tag for the title
- **description** (`string`, default: `''`): Description text below the title
- **descriptionRawHtml** (`string`, default: `''`): HTML description content
- **margin** (`'none' | 'small' | 'default' | 'large'`, default: `'none'`): Section margin size

## Features

- Built on top of the `ContentSection` component
- Integrates the `Table` component in the content slot
- Supports all standard section props (title, description, overline, etc.)
- Validates table data structure
- TypeScript support with proper interfaces

## Examples

### Basic Table Section

```vue
<SectionTable
  title="Feature Comparison"
  :table="{
    columns: ['Feature', 'Basic', 'Premium'],
    rows: ['Users', 'Storage', 'Support'],
    data: [
      ['5', 'Unlimited'],
      ['10GB', '1TB'],
      ['Email', '24/7']
    ]
  }"
/>
```

### With Overline and Description

```vue
<SectionTable
  overline="Plans & Pricing"
  title="Choose Your Plan"
  description="Select the perfect plan for your needs"
  :table="pricingTable"
/>
```

### Centered Content

```vue
<SectionTable title="Performance Metrics" :isContentCentralized="true" :table="metricsTable" />
```
