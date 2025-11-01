import LogoSlide from '../../components/LogoSlide/LogoSlide.vue'

export default {
  title: 'Components/Rebranding/LogoSlide',
  component: LogoSlide,
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
      template: '<div class="bg-black p-6"><story /></div>'
    })
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of logo items with src and alt properties'
    },
    title: {
      control: 'text',
      description: 'Title text displayed above the carousel'
    },
    button: {
      control: 'object',
      description: 'Button configuration object with label and link properties'
    }
  }
}

export const Default = {
  args: {
    title: 'Trusted by leading companies',
    items: [
      { src: 'https://www.azion.com/assets/images/logos/dark/nzn-logo.svg', alt: 'NZN Logo' },
      {
        src: 'https://www.azion.com/assets/images/logos/dark/agibank-logo.svg',
        alt: 'Agibank Logo'
      },
      {
        src: 'https://www.azion.com/assets/images/logos/dark/magalu-logo.svg',
        alt: 'Magalu Logo'
      },
      { src: 'https://www.azion.com/assets/images/logos/dark/nzn-logo.svg', alt: 'NZN Logo' },
      {
        src: 'https://www.azion.com/assets/images/logos/dark/agibank-logo.svg',
        alt: 'Agibank Logo'
      },
      { src: 'https://www.azion.com/assets/images/logos/dark/nzn-logo.svg', alt: 'NZN Logo' },
      {
        src: 'https://www.azion.com/assets/images/logos/dark/agibank-logo.svg',
        alt: 'Agibank Logo'
      },
      {
        src: 'https://www.azion.com/assets/images/logos/dark/magalu-logo.svg',
        alt: 'Magalu Logo'
      },
      { src: 'https://www.azion.com/assets/images/logos/dark/nzn-logo.svg', alt: 'NZN Logo' },
      {
        src: 'https://www.azion.com/assets/images/logos/dark/agibank-logo.svg',
        alt: 'Agibank Logo'
      }
    ],
    button: {
      label: 'View all customers',
      link: 'https://www.azion.com/customers'
    }
  }
}
