import ProductCard from '../../../templates/productcard'

export default {
  title: 'Components Group/Cards/Product',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      description: 'Defina o estilo de background do card',
      options: ['outlined', 'highlighted', 'shape', 'default'],
      control: { type: 'radio' }
    },
    addons: {
      description: 'Quando true exibe a label "Add-ons" acima dos links'
    }
  }
}

const cardTemplate = ` <ProductCard v-bind="args" />`

const Template = (args) => ({
  components: { ProductCard },
  setup() {
    return { args }
  },
  template: cardTemplate
})

const DefaultProps = {
  title: 'Edge Cache',
  description: 'Cache your content at the edge to improve performance.',
  icon: 'pi pi-star',
  link: '#',
  links: [
    { label: 'Docs', link: '#', icon: '' },
    { label: 'Get started', link: '#', icon: 'pi pi-arrow-right' }
  ]
}

export const Default = Template.bind({})
Default.args = DefaultProps

export const withAddons = Template.bind({})
withAddons.args = {
  ...DefaultProps,
  addons: true
}
