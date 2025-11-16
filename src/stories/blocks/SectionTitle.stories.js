import SectionTitle from '../../blocks/SectionTitle/SectionTitle.vue'

export default {
  title: 'Blocks/Rebranding/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 p-12"><story /></div>'
    })
  ],
  argTypes: {
    overline: {
      control: 'text',
      description: 'Small label text displayed above the title'
    },
    title: {
      control: 'text',
      description: 'Main title text displayed prominently'
    },
    description: {
      control: 'text',
      description: 'Description text displayed next to or below the title'
    },
    align: {
      control: 'select',
      options: ['default', 'center'],
      description: 'Alignment of the section content'
    },
    titleTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML tag for the title element'
    }
  }
}

export const Default = {
  args: {
    overline: 'our platform',
    title: 'The Power Behind Modern Workloads',
    description:
      'Azion empowers you to create, protect, and expand applications seamlessly. With cutting-edge solutions for edge computing and security, we deliver exceptional digital experiences everywhere.',
    align: 'default'
  }
}

export const WithoutOverline = {
  args: {
    title: 'The Power Behind Modern Workloads',
    description:
      'Azion empowers you to create, protect, and expand applications seamlessly. With cutting-edge solutions for edge computing and security, we deliver exceptional digital experiences everywhere.',
    align: 'default'
  }
}

export const WithoutDescription = {
  args: {
    overline: 'our platform',
    title: 'The Power Behind Modern Workloads',
    align: 'default'
  }
}

export const Centered = {
  args: {
    overline: 'our platform',
    title: 'The Power Behind Modern Workloads',
    description:
      'Azion empowers you to create, protect, and expand applications seamlessly. With cutting-edge solutions for edge computing and security, we deliver exceptional digital experiences everywhere.',
    align: 'center'
  }
}

export const CenteredWithoutOverline = {
  args: {
    title: 'The Power Behind Modern Workloads',
    description:
      'Azion empowers you to create, protect, and expand applications seamlessly. With cutting-edge solutions for edge computing and security, we deliver exceptional digital experiences everywhere.',
    align: 'center'
  }
}

export const CenteredWithoutDescription = {
  args: {
    overline: 'our platform',
    title: 'The Power Behind Modern Workloads',
    align: 'center'
  }
}
