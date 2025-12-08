# ContentSection

## Purpose

Component ContentSection

## Props

### Optional

| Prop                   | Type      | Default         | Values                      | Description                  |
| ---------------------- | --------- | --------------- | --------------------------- | ---------------------------- |
| `overline`             | `String`  | `() => ''`      | -                           | No description               |
| `title`                | `String`  | `() => ''`      | -                           | No description               |
| `titleTag`             | `String`  | `() => 'h2'`    | -                           | No description               |
| `description`          | `String`  | `() => ''`      | -                           | No description               |
| `descriptionRawHtml`   | `String`  | `() => ''`      | -                           | No description               |
| `position`             | `String`  | `() => 'left'`  | `left\|right\|center\|full` | No description               |
| `isContentCentralized` | `Boolean` | `() => false`   | -                           | No description               |
| `textCenter`           | `Boolean` | `() => false`   | -                           | No description               |
| `reverse`              | `Boolean` | `() => false`   | -                           | No description               |
| `isSticky`             | `Boolean` | `() => false`   | -                           | No description               |
| `pt`                   | `Object`  | -               | -                           | No description               |
| `bottomSpacing`        | `String`  | `() => 'mb-24'` | -                           | Bottom margin spacing        |
| `hasContainer`         | `Boolean` | `() => true`    | -                           | Controls padding application |

## Slots

| Slot      | Description               |
| --------- | ------------------------- |
| `default` | Default component content |

## Dependencies

### Internal

- ../titlesection
- ../overline

## Usage Example

```vue
<template>
  <!-- Basic usage -->
  <ContentSection
    title="Section Title"
    overline="Section Overline"
    description="Section description"
  >
    <template #content>
      <!-- Your content here -->
    </template>
  </ContentSection>

  <!-- With custom spacing -->
  <ContentSection
    title="Custom Spacing Section"
    bottomSpacing="mb-32"
    :hasContainer="false"
  >
    <template #content>
      <!-- Content without container padding -->
    </template>
  </ContentSection>

  <!-- Centralized content -->
  <ContentSection
    title="Centered Section"
    position="center"
    :isContentCentralized="true"
    bottomSpacing="mb-16"
  >
    <template #main>
      <!-- Main content area -->
    </template>
  </ContentSection>
</template>
```

## Related Links

- [TypeScript Definitions](./ContentSection.d.ts)
- [Component Implementation](./ContentSection.vue)
- [Export Module](./contentsection.js)
- [Package Configuration](./package.json)
