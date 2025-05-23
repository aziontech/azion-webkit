import HeroContentNavigation from '../../../templates/herocontentnavigation'

export default {
  title: 'Blocks/Hero/hero-content-navigation',
  component: HeroContentNavigation,
  tags: ['autodocs'],
  argTypes: {}
}

const MOCK = {
  breadcrumbItems: [
    {
      url: `/en/blog/`,
      target: '_self',
      label: 'Blog'
    },
    {
      url: 'www.azion.com',
      target: '_self',
      label: 'This Article'
    }
  ],
  date: 'JUN 27, 2024 • 15 min read',
  title: 'Azion Edge SQL: enabling access and analysis of structured data at the edge',
  authors: [
    {
      avatar: 'https://www.azion.com/assets/blog/images/uploads/img-prof.png',
      title: 'Mariana Bellorín Aguilera',
      role: 'Technical Writer'
    }
  ],
  description:
    'Explore how Azion Edge SQL enhances database operations with edge computing for high scalability, low latency, and cost-effectiveness.',
  menuTitle: 'Learning Center',
  menuItems: [
    {
      label: 'DDoS Attacks',
      url: '/en/learning/ddos/what-is-ddos-attack/',
      items: [
        {
          label: null,
          url: null
        }
      ]
    },
    {
      label: 'Glossary',
      url: '',
      items: [
        {
          label: 'What is a DDoS Attack?',
          url: '/en/learning/ddos/what-is-ddos-attack/'
        },
        {
          label: 'What is a Botnet?',
          url: '/en/learning/ddos/what-is-a-ddos-botnet/'
        },
        {
          label: 'What Are Application Layer Attacks?',
          url: '/en/learning/ddos/application-layer-attack/'
        }
      ]
    }
  ],
  mobileLabel: 'DDoS Attacks'
}

const template = `
<div class="surface-ground p-10 flex flex-col gap-10">
  <HeroContentNavigation v-bind="args" />
</div>
`

const Template = (args) => ({
  components: { HeroContentNavigation },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: { source: { code: template } }
}
