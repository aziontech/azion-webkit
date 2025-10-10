import Tag from '../../components/Tag/Tag.vue'

export default {
  title: 'ComponentsV2/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The text label displayed in the tag',
      table: {
        type: { summary: 'string' },
        required: true
      }
    },
    icon: {
      control: { type: 'text' },
      description: 'Optional PrimeVue icon class (e.g., "pi pi-check"). If not provided, uses default check icon or slot content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Tag Component

A simple tag component for displaying labels with optional icons.

## Features
- **Icon Support**: Can display PrimeVue icons or custom icon slot
- **Default Icon**: Shows check icon by default if no icon is provided
- **Flexible Styling**: Dark background with rounded corners
- **Compact Design**: Small text size perfect for labels and badges
- **Slot Support**: Custom icon can be provided via slot

## Usage

\`\`\`vue
<!-- With default icon -->
<Tag label="Active" />

<!-- With custom icon -->
<Tag label="Premium" icon="pi pi-star" />

<!-- With icon slot -->
<Tag label="Custom">
  <template #icon>
    <svg>...</svg>
  </template>
</Tag>
\`\`\`

## Design Notes
- Uses Sora font family
- Neutral-800 background with white text
- Rounded corners (rounded-md)
- Padding: py-2 px-4
- Text size: text-xs
- Flexbox layout with gap-2 between icon and label
        `
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' }
      ]
    }
  }
}

const Template = (args) => ({
  components: { Tag },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <Tag v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Active'
}
Default.parameters = {
  docs: {
    description: {
      story: 'Default tag with check icon. When no icon prop is provided, displays a check icon.'
    }
  }
}

export const WithCustomIcon = Template.bind({})
WithCustomIcon.args = {
  label: 'Premium',
  icon: 'pi pi-star'
}
WithCustomIcon.parameters = {
  docs: {
    description: {
      story: 'Tag with custom PrimeVue icon. Pass any PrimeVue icon class.'
    }
  }
}

export const StatusTags = () => ({
  components: { Tag },
  template: `
    <div class="bg-black p-8">
      <div class="flex flex-wrap gap-3">
        <Tag label="Active" icon="pi pi-check" />
        <Tag label="Pending" icon="pi pi-clock" />
        <Tag label="Error" icon="pi pi-times" />
        <Tag label="Warning" icon="pi pi-exclamation-triangle" />
        <Tag label="Success" icon="pi pi-check-circle" />
      </div>
    </div>
  `
})
StatusTags.parameters = {
  docs: {
    description: {
      story: 'Different status tags with appropriate icons.'
    }
  }
}

export const FeatureTags = () => ({
  components: { Tag },
  template: `
    <div class="bg-black p-8">
      <div class="flex flex-wrap gap-3">
        <Tag label="New" icon="pi pi-sparkles" />
        <Tag label="Popular" icon="pi pi-star" />
        <Tag label="Featured" icon="pi pi-bookmark" />
        <Tag label="Trending" icon="pi pi-arrow-up" />
        <Tag label="Beta" icon="pi pi-code" />
      </div>
    </div>
  `
})
FeatureTags.parameters = {
  docs: {
    description: {
      story: 'Feature tags for highlighting special items or states.'
    }
  }
}

export const ActionTags = () => ({
  components: { Tag },
  template: `
    <div class="bg-black p-8">
      <div class="flex flex-wrap gap-3">
        <Tag label="Download" icon="pi pi-download" />
        <Tag label="Upload" icon="pi pi-upload" />
        <Tag label="Share" icon="pi pi-share-alt" />
        <Tag label="Edit" icon="pi pi-pencil" />
        <Tag label="Delete" icon="pi pi-trash" />
      </div>
    </div>
  `
})
ActionTags.parameters = {
  docs: {
    description: {
      story: 'Action-oriented tags with relevant icons.'
    }
  }
}

export const CategoryTags = () => ({
  components: { Tag },
  template: `
    <div class="bg-black p-8">
      <div class="flex flex-wrap gap-3">
        <Tag label="Documentation" icon="pi pi-book" />
        <Tag label="Tutorial" icon="pi pi-graduation-cap" />
        <Tag label="API" icon="pi pi-code" />
        <Tag label="Video" icon="pi pi-video" />
        <Tag label="Article" icon="pi pi-file" />
      </div>
    </div>
  `
})
CategoryTags.parameters = {
  docs: {
    description: {
      story: 'Category tags for content classification.'
    }
  }
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  label: 'This is a longer label text',
  icon: 'pi pi-info-circle'
}
LongLabel.parameters = {
  docs: {
    description: {
      story: 'Tag with longer text to show how it handles extended labels.'
    }
  }
}

export const ShortLabel = Template.bind({})
ShortLabel.args = {
  label: 'New',
  icon: 'pi pi-sparkles'
}
ShortLabel.parameters = {
  docs: {
    description: {
      story: 'Tag with short label showing compact design.'
    }
  }
}

// Multiple Tags in Context
const ContextTemplate = () => ({
  components: { Tag },
  template: `
    <div class="bg-black p-8">
      <div class="space-y-6">
        <div>
          <h3 class="text-white mb-3 font-bold">Product Features</h3>
          <div class="flex flex-wrap gap-2">
            <Tag label="Edge Computing" icon="pi pi-server" />
            <Tag label="Real-time" icon="pi pi-bolt" />
            <Tag label="Secure" icon="pi pi-shield" />
            <Tag label="Scalable" icon="pi pi-chart-line" />
          </div>
        </div>
        
        <div>
          <h3 class="text-white mb-3 font-bold">User Status</h3>
          <div class="flex flex-wrap gap-2">
            <Tag label="Verified" icon="pi pi-verified" />
            <Tag label="Premium Member" icon="pi pi-star" />
            <Tag label="Active" icon="pi pi-check" />
          </div>
        </div>
        
        <div>
          <h3 class="text-white mb-3 font-bold">Content Tags</h3>
          <div class="flex flex-wrap gap-2">
            <Tag label="JavaScript" icon="pi pi-code" />
            <Tag label="Vue.js" icon="pi pi-code" />
            <Tag label="Tutorial" icon="pi pi-book" />
            <Tag label="Beginner" icon="pi pi-graduation-cap" />
          </div>
        </div>
      </div>
    </div>
  `
})

export const InContext = ContextTemplate.bind({})
InContext.parameters = {
  docs: {
    description: {
      story: 'Tags used in various contexts showing typical use cases.'
    }
  }
}
