import Footer from '../../blocks/Footer/Footer.vue'

export default {
  title: 'BlocksV2/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    listData: {
      control: { type: 'object' },
      description: 'Array of footer column data with title and list items',
      table: {
        type: { summary: 'Array<{title: string, list: Array<{link: string, title: string, icon?: string}>}>' }
      }
    },
    content: {
      control: { type: 'object' },
      description: 'Main content section with title and description',
      table: {
        type: { summary: '{title: string, description: string}' }
      }
    },
    securityInformation: {
      control: { type: 'object' },
      description: 'Security section with title and tags',
      table: {
        type: { summary: '{title: string, tags: Array<{title: string, icon: string}>}' }
      }
    },
    socialButtons: {
      control: { type: 'object' },
      description: 'Array of social media links',
      table: {
        type: { summary: 'Array<{title: string, link: string, icon: string}>' }
      }
    },
    copyright: {
      control: { type: 'text' },
      description: 'Copyright text displayed at the bottom',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Footer Block

A comprehensive footer component with multiple sections and slot-based customization.

## Features
- **Multi-section Layout**: Security info, main content, link columns, tagline, social
- **Responsive Design**: Adapts from mobile to desktop layouts
- **Slot Support**: Status, tagline, and language selector slots
- **Tag Integration**: Uses Tag component for security badges
- **Link Columns**: Flexible column system for navigation links
- **Social Media**: Icon-based social links
- **Max Width**: 1600px with auto margins

## Sections

### Top Section (Dark - neutral-950)
- Status slot (left)
- Security information with tags (right)

### Main Section (Light - #CEC9C9)
- Content area with title and description (left 1/3)
- Link columns (right 2/3)
- Tagline slot at bottom

### Bottom Section (Light - neutral-100)
- Language selector slot (left)
- Social media icons
- Copyright text (right)

## Slots

### status
System status indicator (top-left).

### tagline
Company tagline or branding (middle section).

### lang
Language selector (bottom-left).

## Usage

\`\`\`vue
<Footer
  :listData="[
    {
      title: 'Product',
      list: [
        { link: '/features', title: 'Features' },
        { link: '/pricing', title: 'Pricing' }
      ]
    }
  ]"
  :content="{
    title: 'Company',
    description: 'Building the future of edge computing'
  }"
  :securityInformation="{
    title: 'Security & Compliance',
    tags: [
      { title: 'SOC 2', icon: 'pi-shield' },
      { title: 'GDPR', icon: 'pi-check' }
    ]
  }"
  :socialButtons="[
    { title: 'Twitter', link: 'https://twitter.com', icon: 'pi pi-twitter' }
  ]"
  copyright="© 2025 Azion Technologies"
>
  <template #status>
    <SystemStatus lang="en" />
  </template>
</Footer>
\`\`\`

## Design Notes
- Proto Mono font for labels and copyright
- Sora font for main content and links
- Hover effects on links with underline animation
- External link icon for external URLs
- Responsive grid: 1 col mobile, 2-4 cols desktop
- Border-bottom on section titles
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
  components: { Footer },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black min-h-screen">
      <div class="flex-grow p-8 text-white">
        <p>Page content here...</p>
      </div>
      <Footer v-bind="args">
        <template #status>
          <div class="text-white text-sm flex items-center gap-2">
            <span class="h-2 w-2 bg-green-500 rounded-full"></span>
            <span>All Systems Operational</span>
          </div>
        </template>
        <template #tagline>
          <div class="text-center text-neutral-900 font-bold text-lg">
            The web platform for modern workloads
          </div>
        </template>
        <template #lang>
          <select class="bg-transparent border border-neutral-400 rounded px-3 py-1 text-sm">
            <option>English</option>
            <option>Português</option>
            <option>Español</option>
          </select>
        </template>
      </Footer>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  listData: [
    {
      title: 'Product',
      list: [
        { link: '/features', title: 'Features' },
        { link: '/pricing', title: 'Pricing' },
        { link: '/documentation', title: 'Documentation' },
        { link: '/api', title: 'API Reference' }
      ]
    },
    {
      title: 'Company',
      list: [
        { link: '/about', title: 'About Us' },
        { link: '/blog', title: 'Blog' },
        { link: '/careers', title: 'Careers' },
        { link: '/contact', title: 'Contact' }
      ]
    },
    {
      title: 'Resources',
      list: [
        { link: '/help', title: 'Help Center' },
        { link: '/community', title: 'Community' },
        { link: '/status', title: 'Status Page', icon: true },
        { link: '/changelog', title: 'Changelog' }
      ]
    },
    {
      title: 'Legal',
      list: [
        { link: '/privacy', title: 'Privacy Policy' },
        { link: '/terms', title: 'Terms of Service' },
        { link: '/security', title: 'Security' },
        { link: '/compliance', title: 'Compliance' }
      ]
    }
  ],
  content: {
    title: 'Azion Technologies',
    description: 'Building the <strong>future</strong> of edge computing'
  },
  securityInformation: {
    title: 'Security & Compliance',
    tags: [
      { title: 'SOC 2 Type II', icon: 'pi-shield' },
      { title: 'GDPR Compliant', icon: 'pi-check' },
      { title: 'ISO 27001', icon: 'pi-verified' }
    ]
  },
  socialButtons: [
    { title: 'Twitter', link: 'https://twitter.com/aziontech', icon: 'pi pi-twitter' },
    { title: 'LinkedIn', link: 'https://linkedin.com/company/azion', icon: 'pi pi-linkedin' },
    { title: 'GitHub', link: 'https://github.com/aziontech', icon: 'pi pi-github' },
    { title: 'YouTube', link: 'https://youtube.com/@azion', icon: 'pi pi-youtube' }
  ],
  copyright: '© 2025 Azion Technologies. All rights reserved.'
}
Default.parameters = {
  docs: {
    description: {
      story: 'Complete footer with all sections populated and slots filled.'
    }
  }
}

export const MinimalFooter = Template.bind({})
MinimalFooter.args = {
  listData: [
    {
      title: 'Product',
      list: [
        { link: '/features', title: 'Features' },
        { link: '/pricing', title: 'Pricing' }
      ]
    },
    {
      title: 'Company',
      list: [
        { link: '/about', title: 'About' },
        { link: '/contact', title: 'Contact' }
      ]
    }
  ],
  content: {
    title: 'Azion',
    description: 'Edge computing platform'
  },
  securityInformation: {
    title: 'Certified',
    tags: [
      { title: 'SOC 2', icon: 'pi-shield' }
    ]
  },
  socialButtons: [
    { title: 'Twitter', link: '#', icon: 'pi pi-twitter' },
    { title: 'GitHub', link: '#', icon: 'pi pi-github' }
  ],
  copyright: '© 2025 Azion'
}
MinimalFooter.parameters = {
  docs: {
    description: {
      story: 'Minimal footer with reduced content.'
    }
  }
}

export const WithoutSecuritySection = Template.bind({})
WithoutSecuritySection.args = {
  listData: [
    {
      title: 'Links',
      list: [
        { link: '#', title: 'Link 1' },
        { link: '#', title: 'Link 2' }
      ]
    }
  ],
  content: {
    title: 'Company',
    description: 'Description here'
  },
  securityInformation: {
    title: '',
    tags: []
  },
  socialButtons: [
    { title: 'Twitter', link: '#', icon: 'pi pi-twitter' }
  ],
  copyright: '© 2025'
}
WithoutSecuritySection.parameters = {
  docs: {
    description: {
      story: 'Footer without security tags section.'
    }
  }
}

// Full Page Context
const FullPageTemplate = (args) => ({
  components: { Footer },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black min-h-screen flex flex-col">
      <header class="bg-neutral-950 p-6">
        <div class="max-w-7xl mx-auto text-white font-bold text-xl">
          Azion
        </div>
      </header>
      
      <main class="flex-grow">
        <div class="max-w-7xl mx-auto py-20 px-6">
          <h1 class="text-white text-4xl font-bold mb-4">Page Content</h1>
          <p class="text-neutral-400">Main content area...</p>
        </div>
      </main>
      
      <Footer v-bind="args">
        <template #status>
          <div class="text-white text-sm flex items-center gap-2">
            <span class="h-2 w-2 bg-green-500 rounded-full"></span>
            <span>All Systems Operational</span>
          </div>
        </template>
        <template #tagline>
          <div class="text-center text-neutral-900 font-bold">
            The web platform for modern workloads
          </div>
        </template>
        <template #lang>
          <select class="bg-transparent border border-neutral-400 rounded px-3 py-1 text-sm">
            <option>English</option>
          </select>
        </template>
      </Footer>
    </div>
  `
})

export const FullPageContext = FullPageTemplate.bind({})
FullPageContext.args = {
  ...Default.args
}
FullPageContext.parameters = {
  docs: {
    description: {
      story: 'Footer in a complete page layout with header and content.'
    }
  }
}
