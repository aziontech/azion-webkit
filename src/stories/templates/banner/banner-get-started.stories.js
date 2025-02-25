import Container from '../../../templates/container'
import BannerGetStarted from '../../../templates/bannergetstarted'
import Rules from '../../rules'

export default {
  title: 'Blocks/Banner/banner-get-started',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.banner.overline}
${Rules.banner.title}
${Rules.banner.cta}
${Rules.banner.list}
        `
      }
    }
  }
}

const MOCK = {
  overline: 'GET STARTED',
  title:
    "Sign-up and <span class='animate-pretty bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400'>get $300,00 </span> to use for 12 months. Ready to deploy?",
  buttons: [
    {
      label: 'Free Account',
      link: 'https://console.azion.com/signup/',
      outlined: false
    },
    {
      label: 'Talk to an expert',
      link: '/en/contact-sales/',
      outlined: true
    }
  ],
  items: [
    {
      icon: 'pi pi-tags',
      text: 'Access to all products'
    },
    {
      icon: 'pi pi-credit-card',
      text: 'No credit card required'
    },
    {
      icon: 'pi pi-dollar',
      text: 'Credit available to use for 12 months'
    }
  ]
}

const template = `
<Container class="surface-ground">
  <BannerGetStarted v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { BannerGetStarted, Container },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: template }
  }
}
