
import Container from '../../../templates/container'
import SectionCompliance from '../../../templates/sectioncompliance'

export default {
  title: 'Blocks/Sections/section-compliance',
  tags: ['autodocs'],
}

const MOCK = {
  "overline": "SECURE BY DESIGN",
  "title": "Confianza construida con las certificaciones más exigentes del mercado",
  "description": "Azion cumple estrictas normas de seguridad, disponibilidad y privacidad para que los clientes puedan adoptar nuestros servicios con confianza.",
  "button": {
    "label": "Ver todas las certificaciones",
    "link": "/es/compliance/",
    "target": "_self"
  },
  "cards": [
    {
      "overline": "Certificación",
      "title": "PCI DSS 4.0",
      "description": "Certificación PCI DSS 4.0 obtenida en su mismo año de lanzamiento, 2023"
    },
    {
      "overline": "Certificación",
      "title": "SOC 2 Type II",
      "description": "Seguridad y disponibilidad para el procesamiento de datos cerca de los usuarios finales en toda la red de Azion"
    },
    {
      "overline": "Certificación",
      "title": "SOC 3",
      "description": "El informe SOC 3 certifica públicamente nuestra seguridad corporativa"
    }
  ]
}

const template = `
<Container class="surface-ground">
  <SectionCompliance v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { SectionCompliance, Container },
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
    source: { code: template } },
};
