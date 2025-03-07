import Container from '../../../templates/container'
import SectionCompliance from '../../../templates/sectioncompliance'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-compliance',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.link}
${Rules.section.cards}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      SectionCompliance,
      Container
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionCompliance v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'SECURE BY DESIGN',
  title: 'Confianza construida con las certificaciones más exigentes del mercado',
  description:
    'Azion cumple estrictas normas de seguridad, disponibilidad y privacidad para que los clientes puedan adoptar nuestros servicios con confianza.',
  button: {
    label: 'Ver todas las certificaciones',
    link: '/es/compliance/',
    target: '_self'
  },
  cards: [
    {
      overline: 'Certificación',
      title: 'PCI DSS 4.0',
      description: 'Certificación PCI DSS 4.0 obtenida en su mismo año de lanzamiento, 2023'
    },
    {
      overline: 'Certificación',
      title: 'SOC 2 Type II',
      description:
        'Seguridad y disponibilidad para el procesamiento de datos cerca de los usuarios finales en toda la red de Azion'
    },
    {
      overline: 'Certificación',
      title: 'SOC 3',
      description: 'El informe SOC 3 certifica públicamente nuestra seguridad corporativa'
    }
  ]
}
