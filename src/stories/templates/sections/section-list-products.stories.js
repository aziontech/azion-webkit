import Container from '../../../templates/container'
import SectionListProducts from '../../../templates/sectionlistproducts'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-list-products',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.cardsProducts}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionListProducts
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionListProducts v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'Products',
  titleTag: 'h2',
  title: 'Products and Services Related to Jamstack Websites',
  grid: false,
  list: [
    {
      icon: 'ai ai-edge-application',
      title: 'Edge Application',
      description:
        'Enables the development of web applications to run on the Azion Edge Computing Platform.',
      // link: 'https://www.azion.com/en/products/edge-application/',
      addons: true,
      links: [
        {
          label: 'Application Accelerator',
          link: 'https://www.azion.com/en/products/application-accelerator/',
          icon: 'pi pi-check'
        },
        {
          label: 'Edge Functions',
          link: 'https://www.azion.com/en/products/edge-functions/'
        },
        {
          label: 'Edge Cache',
          link: 'https://www.azion.com/en/products/edge-cache/'
        }
      ]
    },
    {
      icon: 'ai ai-edge-storage',
      title: 'Edge Storage',
      description:
        'Facilitates low-latency storage and retrieval of objects anywhere, with no vendor lock-in via an S3-compatible API.',
      link: 'https://www.azion.com/en/products/edge-storage/',
      addons: false,
      links: [
        {
          label: 'Application Accelerator',
          link: 'https://www.azion.com/en/products/application-accelerator/'
        }
      ]
    },
    {
      icon: 'ai ai-edge-storage',
      title: 'Edge Storage',
      description:
        'Facilitates low-latency storage and retrieval of objects anywhere, with no vendor lock-in via an S3-compatible API.',
      // link: 'https://www.azion.com/en/products/edge-storage/',
      addons: true,
      links: [
        {
          label: 'Application Accelerator',
          link: 'https://www.azion.com/en/products/application-accelerator/'
        }
      ]
    },
    {
      addons: false,
      icon: 'ai ai-edge-storage',
      title: 'Edge Storage',
      description:
        'Facilitates low-latency storage and retrieval of objects anywhere, with no vendor lock-in via an S3-compatible API.',
      // link: 'https://www.azion.com/en/products/edge-storage/',
      links: [
        {
          label: 'Application Accelerator',
          link: 'https://www.azion.com/en/products/application-accelerator/'
        },
        {
          label: 'Application Accelerator',
          link: 'https://www.azion.com/en/products/application-accelerator/'
        }
      ]
    },
    {
      addons: false,
      icon: 'ai ai-edge-storage',
      title: 'Edge Storage',
      description:
        'Facilitates low-latency storage and retrieval of objects anywhere, with no vendor lock-in via an S3-compatible API.',
      link: 'https://www.azion.com/en/products/edge-storage/'
    },
    {
      addons: false,
      icon: 'ai ai-edge-storage',
      title: 'Edge Storage',
      description:
        'Facilitates low-latency storage and retrieval of objects anywhere, with no vendor lock-in via an S3-compatible API.',
      link: 'https://www.azion.com/en/products/edge-storage/'
    },
    {
      addons: false,
      icon: 'ai ai-edge-storage',
      title: 'Edge Storage',
      description:
        'Facilitates low-latency storage and retrieval of objects anywhere, with no vendor lock-in via an S3-compatible API.',
      link: 'https://www.azion.com/en/products/edge-storage/'
    }
  ]
}
