import Container from '../../../templates/container'
import SectionImageRight from '../../../templates/sectionimageright'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-image-right',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.image}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionImageRight
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionImageRight v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'Edge Connectivity',
  title:
    'Azion’s robust connectivity strategy helps us deliver the best performance, availability, and resiliency to our customers',
  wysisyg: false,
  description:
    `<p>
    <strong>14h00 - 14h05</strong> - Boas vindas<.br>14h05 - 15h00 - Apresentação dos Lançamentos
    </br>
    <strong>15h00 - 15h30</strong> - Intervalo </br >15h30 - 16h00 - Criando um agente com Azion
    </br>
    <strong>16h00 - 16h30</strong> - Compute e melhorando uma aplicaçao com Functions
    </br>
    <strong>16h30 - 17h00</strong> - Developer Experience
    </p>`,
  image: "https://www.azion.com/assets/pages/products/images/light/edge-network/network-ilustrationEN.png",
  imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-network/network-ilustrationEN.png"
}
