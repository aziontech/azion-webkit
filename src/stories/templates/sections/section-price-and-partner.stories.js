import Container from '../../../templates/container'
import SectionPriceAndPartner from '../../../templates/sectionpriceandpartner'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-price-and-partner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionPriceAndPartner
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionPriceAndPartner v-bind="args" />
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
  description:
    "Our highly distributed architecture includes edge nodes strategically located inside ISPs' (Internet Service Providers) last-mile networks and connectivity to multiple IXPs (Internet Exchange Points), private and public peerings, and Tier 1 transit providers around the world.",
  lang: 'en',
  titleTag: 'h2',
  isSticky: false
}
