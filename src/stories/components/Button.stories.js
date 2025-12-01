import Button from '../../components/Button/Button.vue'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Size of the button'
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'link', 'linkExternal', 'tertiary', 'linkSecondary'],
      description: 'Visual style variant of the button'
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Color theme of the button'
    },
    target: {
      control: 'radio',
      options: ['_self', '_blank'],
      description: 'Target attribute for link buttons'
    },
    icon: {
      control: 'text',
      description: 'PrimeVue icon class (e.g., pi pi-check)'
    },
    label: {
      control: 'text',
      description: 'Text content of the button'
    },
    href: {
      control: 'text',
      description: 'URL for link buttons'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-[#0a0a0a] flex justify-center py-12 items-center"><story /></div>'
    })
  ]
}

export const Primary = {
  args: {
    label: 'Primary Button',
    type: 'primary'
  }
}

export const Secondary = {
  args: {
    label: 'Secondary Button',
    type: 'secondary'
  }
}

export const Tertiary = {
  args: {
    label: 'Tertiary Button',
    type: 'tertiary'
  }
}

export const Link = {
  args: {
    label: 'Link Button',
    type: 'link',
    href: '#'
  }
}

export const LinkSecondary = {
  args: {
    label: 'Link Secondary',
    type: 'linkSecondary',
    href: '#'
  }
}

export const LinkExternal = {
  args: {
    label: 'Link External',
    type: 'linkExternal',
    href: 'https://azion.com',
    target: '_blank'
  }
}

export const WithIcon = {
  args: {
    label: 'Button with Icon',
    type: 'primary',
    icon: 'pi pi-check'
  }
}

export const Small = {
  args: {
    label: 'Small Button',
    type: 'primary',
    size: 'small'
  }
}

export const LightTheme = {
  args: {
    label: 'Light Theme',
    type: 'primary',
    theme: 'light'
  },
  parameters: {
    backgrounds: { default: 'light' }
  }
}

export const Interactive = {
  args: {
    label: 'Interactive Button',
    type: 'primary',
    icon: 'pi pi-user'
  }
}
