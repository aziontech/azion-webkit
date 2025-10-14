import Button from '../../components/Button/Button.vue'

export default {
  title: 'Components/Rebranding/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The text label displayed on the button'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Controls the button size'
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'link', 'linkExternal', 'linkSecondary'],
      description: 'Defines the button style variant'
    },
    theme: {
      control: { type: 'select' },
      options: ['dark', 'light'],
      description: 'Theme variant for the button'
    },
    href: {
      control: { type: 'text' },
      description: 'Optional URL for link buttons'
    },
    icon: {
      control: { type: 'text' },
      description: 'PrimeVue icon class (e.g., "pi pi-check")'
    }
  }
}

export const Default = {
  args: {
    type: 'primary',
    label: 'Primary Button',
    size: 'large',
    theme: 'dark'
  }
}
