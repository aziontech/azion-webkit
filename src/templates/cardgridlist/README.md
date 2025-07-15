# CardGridList

## Purpose

Component CardGridList

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `data` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `pt` | `Object` | `() => {` | - | No description |
| `cardType` | `String` | `'blog'` | `blog\|cases` | No description |
| `cardDirection` | `String` | `'column'` | `column\|row` | No description |

## Dependencies

### Internal
- ../cardblog/CardBlog.vue
- ../cardcases/CardCases.vue

## Usage Example

```vue
<template>
  <CardGridList
    :data="[]"
  >
  </CardGridList>
</template>
```

## Related Links

- [TypeScript Definitions](./CardGridList.d.ts)
- [Component Implementation](./CardGridList.vue)
- [Export Module](./cardgridlist.js)
- [Package Configuration](./package.json)
