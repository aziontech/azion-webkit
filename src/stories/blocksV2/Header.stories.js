import Header from '../../blocks/Header/Header.vue'

export default {
  title: 'Blocks/Rebranding/Header',
  component: Header,
  tags: ['autodocs']
}

export const Default = {
  args: {
    logo: { src: '/logo.svg', alt: 'Azion' },
    menuItems: [
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Docs', href: '/docs' }
    ]
  }
}
