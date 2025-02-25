import Container from '../../../templates/container/Container'
import HeroHsFormRight from '../../../templates/herohsformright/HeroHsFormRight'
import Rules from '../../rules'

const MOCK = {
  overline: 'WEB APPLICATION FIREWALL (WAF)',
  title: 'Web Application Firewall: a proteção avançada que especialistas de segurança confiam',
  description:
    'Com o WAF da Azion, você protege suas aplicações e APIs das ameaças OWASP Top 10 até os mais sofisticados ataques zero-day.',
  list: [
    {
      icon: 'pi pi-shield',
      title: 'Proteja',
      description: 'Proteja suas aplicações e APIs contra SQL Injection, XSS, RFI e outras ameaças'
    },
    {
      icon: 'pi pi-check',
      title: 'Bloqueie',
      description: 'Bloqueie ameaças no edge, antes de chegarem a sua aplicação ou infraestrutura'
    },
    {
      icon: 'pi pi-dollar',
      title: 'Economize',
      description: 'Economize tempo com regras gerenciadas e passe mais tempo criando aplicações'
    }
  ],
  form: {
    title: 'Transforme a segurança da Azion em seu diferencial competitivo',
    id: '2cb5ef91-3c22-4d2d-b657-5bd102d2d737'
  }
}

const HeroDisplay = `
<Container class="surface-ground">
  <HeroHsFormRight v-bind="args" />
</Container>
`

export default {
  title: 'Blocks/Hero/hero-hsform-right',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.hero.overline}
${Rules.hero.title}
${Rules.hero.description}
        `
      }
    }
  }
}

const Template = (args) => ({
  components: { Container, HeroHsFormRight },
  setup() {
    return { args }
  },
  template: HeroDisplay
})

export const Default = Template.bind({})
Default.args = MOCK
Default.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: HeroDisplay }
  }
}
