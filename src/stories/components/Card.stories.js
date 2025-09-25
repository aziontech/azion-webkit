import Card from '../../components/Card/Card.vue'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Card title text'
    },
    description: {
      control: { type: 'text' },
      description: 'Card description text'
    },
    cta: {
      control: { type: 'text' },
      description: 'Call-to-action text displayed below the description'
    },
    href: {
      control: { type: 'text' },
      description:
        'Optional link URL; when provided, the Card content is wrapped in an anchor and gets hover effects'
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank'],
      description: 'Link target attribute (only applies when href is provided)'
    },
    theme: {
      control: { type: 'select' },
      options: ['default'],
      description: 'Predefined visual theme (currently only default)'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A Card component with Azion styling. Cards with href prop become clickable links with hover effects, while cards without href are static.'
      }
    }
  }
}

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-6">
      <div class="max-w-xl mx-auto">
        <Card v-bind="args" />
      </div>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Edge-ready infrastructure',
  description: 'Build, secure, and scale globally with our developer-first platform.',
  cta: '',
  href: ''
}

export const WithLink = Template.bind({})
WithLink.args = {
  title: 'Explore Documentation',
  description: 'Start shipping faster with guides, examples, and API references.',
  cta: 'View docs',
  href: '#',
  target: '_self'
}
