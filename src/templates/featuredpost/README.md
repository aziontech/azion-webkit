# FeaturedPost

## Purpose

Component FeaturedPost

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `description` | `String` | No description |
| `link` | `String` | No description |
| `title` | `String` | No description |
| `authors` | `Object` | No description |
| `date` | `String` | No description |
| `estimateReadTime` | `String` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `linkTarget` | `String` | `'_self'` | `_blank\|_self` | No description |
| `image` | `String` | - | - | No description |

## Dependencies

### External
- primevue/avatar
- primevue/avatargroup

## Usage Example

```vue
<template>
  <FeaturedPost
    :description=""exemplo""
    :link=""exemplo""
    :title=""exemplo""
    :authors="{}"
    :date=""exemplo""
    :estimateReadTime=""exemplo""
  >
  </FeaturedPost>
</template>
```

## Related Links

- [TypeScript Definitions](./FeaturedPost.d.ts)
- [Component Implementation](./FeaturedPost.vue)
- [Export Module](./featuredpost.js)
- [Package Configuration](./package.json)
