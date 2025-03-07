import HeroContent from '../../../templates/herocontent'

export default {
  title: 'Blocks/Hero/hero-content',
  component: HeroContent,
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
    'Explore how Azion Edge SQL enhances database operations with edge computing for high scalability, low latency, and cost-effectiveness.'
}

const template = `
<div class="surface-ground p-10 flex flex-col gap-10">
  <HeroContent v-bind="args" />
</div>
`

const Template = (args) => ({
  components: { HeroContent },
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
