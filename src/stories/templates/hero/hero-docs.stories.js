import HeroDocs from '../../../templates/herodocs'
import Container from '../../../templates/container'
import Rules from '../../rules'

const MOCK = {
  title: "Welcome to <span style='color:#F3652B!important'>Azion</span> Docs",
  description: "We make every application fast and reliable. Deploy your projects instantly on the most reliable global network, leverage enterprise-grade security, and scale from zero to peak without cold starts.",
  buttons: [
    { label: "Overview", link: "https://console.azion.com/signup/", outlined: false },
    { label: "Import a project", link: "/en/contact-sales/", outlined: true }
  ]
}

const Template = (args) => ({
  components: { HeroDocs },
  setup() {
    return { args }
  },
  template: `
    <div class="[&_.flex.flex-col]:!gap-4 [&_.flex.flex-col]:md:!gap-6 [&_.flex.flex-col]:2xl:!gap-8">
      <HeroDocs v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = MOCK

export default {
  title: 'Blocks/Hero/hero-docs',
  component: HeroDocs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.hero.banner}
${Rules.hero.title}
${Rules.hero.description}
${Rules.hero.cta}
        `
      }
    }
  }
} 