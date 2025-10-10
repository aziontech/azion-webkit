import Header from '../../blocks/Header/Header.vue'

export default {
  title: 'RebrandingBlocks/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    menuSecondary: {
      control: { type: 'object' },
      description: 'Array of secondary menu items displayed on the right',
      table: {
        type: { summary: 'Array<{text: string, link: string, target: string, title: string, backgroundColor: string}>' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Header Block

A sticky header component with slot-based content for maximum flexibility.

## Features
- **Sticky Positioning**: Stays at top with z-50
- **Responsive Height**: h-18 on mobile, h-19 on xl screens
- **Slot-based**: Logo, navigation, dialog, and mobile menu via slots
- **Secondary Menu**: Configurable menu items on the right
- **Max Width**: 1600px with auto margins
- **Dark Theme**: Neutral-950 background with white text

## Slots

### logo
Left-side logo/brand area.

### navigation
Main navigation menu (desktop).

### dialog
Optional dialog/modal trigger (e.g., search).

### menu-mobile
Mobile menu toggle button.

## Secondary Menu
Array of menu items with:
- \`text\`: Display text
- \`link\`: URL
- \`target\`: Link target (_self, _blank)
- \`title\`: Title attribute
- \`backgroundColor\`: 'dark' for filled button, other for text-only

## Usage

\`\`\`vue
<Header :menuSecondary="[
  { text: 'Login', link: '/login', target: '_self', backgroundColor: '' },
  { text: 'Sign Up', link: '/signup', target: '_self', backgroundColor: 'dark' }
]">
  <template #logo>
    <Logo />
  </template>
  <template #navigation>
    <Menu />
  </template>
</Header>
\`\`\`

## Design Notes
- Sora font family
- Padding: py-4, px-6
- Flexbox layout with justify-between
- Secondary menu hidden below xl breakpoint
- Dark button: neutral-200 bg with neutral-900 text
- Text button: white text with hover to neutral-300
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
  components: { Header },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black min-h-screen">
      <Header v-bind="args">
        <template #logo>
          <div class="text-white font-bold text-xl">Azion</div>
        </template>
        <template #navigation>
          <nav class="hidden xl:flex gap-6 text-white text-sm">
            <a href="#" class="hover:text-neutral-300">Products</a>
            <a href="#" class="hover:text-neutral-300">Solutions</a>
            <a href="#" class="hover:text-neutral-300">Developers</a>
            <a href="#" class="hover:text-neutral-300">Pricing</a>
          </nav>
        </template>
        <template #menu-mobile>
          <button class="xl:hidden text-white">
            <i class="pi pi-bars text-xl"></i>
          </button>
        </template>
      </Header>
      <div class="p-8 text-white">
        <p>Page content here...</p>
      </div>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  menuSecondary: [
    { text: 'Login', link: '#', target: '_self', title: 'Login', backgroundColor: '' },
    { text: 'Sign Up', link: '#', target: '_self', title: 'Sign Up', backgroundColor: 'dark' }
  ]
}
Default.parameters = {
  docs: {
    description: {
      story: 'Default header with logo, navigation, and secondary menu.'
    }
  }
}

export const WithoutSecondaryMenu = Template.bind({})
WithoutSecondaryMenu.args = {
  menuSecondary: []
}
WithoutSecondaryMenu.parameters = {
  docs: {
    description: {
      story: 'Header without secondary menu items.'
    }
  }
}

export const SingleSecondaryButton = Template.bind({})
SingleSecondaryButton.args = {
  menuSecondary: [
    { text: 'Get Started', link: '#', target: '_self', title: 'Get Started', backgroundColor: 'dark' }
  ]
}
SingleSecondaryButton.parameters = {
  docs: {
    description: {
      story: 'Header with single CTA button in secondary menu.'
    }
  }
}

export const MultipleSecondaryItems = Template.bind({})
MultipleSecondaryItems.args = {
  menuSecondary: [
    { text: 'Docs', link: '#', target: '_self', title: 'Documentation', backgroundColor: '' },
    { text: 'Support', link: '#', target: '_self', title: 'Support', backgroundColor: '' },
    { text: 'Console', link: '#', target: '_blank', title: 'Console', backgroundColor: 'dark' }
  ]
}
MultipleSecondaryItems.parameters = {
  docs: {
    description: {
      story: 'Header with multiple secondary menu items.'
    }
  }
}

// With Search Dialog
const WithDialogTemplate = (args) => ({
  components: { Header },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black min-h-screen">
      <Header v-bind="args">
        <template #logo>
          <div class="text-white font-bold text-xl">Azion</div>
        </template>
        <template #navigation>
          <nav class="hidden xl:flex gap-6 text-white text-sm">
            <a href="#" class="hover:text-neutral-300">Products</a>
            <a href="#" class="hover:text-neutral-300">Docs</a>
          </nav>
        </template>
        <template #dialog>
          <button class="text-white hover:text-neutral-300">
            <i class="pi pi-search"></i>
          </button>
        </template>
        <template #menu-mobile>
          <button class="xl:hidden text-white">
            <i class="pi pi-bars text-xl"></i>
          </button>
        </template>
      </Header>
    </div>
  `
})

export const WithSearchDialog = WithDialogTemplate.bind({})
WithSearchDialog.args = {
  menuSecondary: [
    { text: 'Login', link: '#', target: '_self', title: 'Login', backgroundColor: '' }
  ]
}
WithSearchDialog.parameters = {
  docs: {
    description: {
      story: 'Header with search dialog slot filled.'
    }
  }
}
