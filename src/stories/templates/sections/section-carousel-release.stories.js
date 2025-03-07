import SectionCarouselRelease from '../../../templates/sectioncarouselrelease'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-carousel-release',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.cardsRelease}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: { SectionCarouselRelease, Container },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionCarouselRelease v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'MARKET RECOGNITION',
  title: 'What analysts say about Azion',
  items: [
    {
      title:
        'Azion was named a Strong Performer and a good fit for large enterprises seeking to accelerate innovation at the edge with serverless full-stack applications.',
      image: {
        description: 'Edge Development Platforms, Q4 2021.',
        light: 'https://www.azion.com/assets/images/logos/dark/forrester-logo-default.svg?ims=x40',
        dark: 'https://www.azion.com/assets/images/logos/light/forrester-logo.svg?ims=x40',
        alt: 'forrester logo'
      },
      card: {
        ariaLabel: 'Go to original article',
        link: 'https://www.azion.com/en/blog/azion-recognized-strong-performer-forrester-wave-2023/',
        target: '_self',
        icon: 'internal',
        hover: 'outlined',
        action: {
          label: 'Read Article'
        }
      },
      tag: {
        icon: 'pi pi-star-fill',
        label: 'Award'
      }
    },
    {
      title:
        'Azion was named a Leader and identified as the only purpose-built edge platform whose capabilities meet all of the key criteria outlined in the report.',
      image: {
        description: 'GigaOms Radar for Edge Platforms.',
        light: 'https://www.azion.com/assets/images/logos/dark/gigaom-logo-default.svg?ims=x40',
        dark: 'https://www.azion.com/assets/images/logos/light/gigaom-logo-default.svg?ims=x40',
        alt: 'gigaom logo'
      },
      card: {
        ariaLabel: 'Go to original article',
        link: 'https://www.azion.com/en/blog/azion-named-leader-fast-mover-gigaom-report/',
        target: '_self',
        icon: 'internal',
        action: {
          label: 'Read Article'
        }
      },
      tag: {
        icon: 'pi pi-star-fill',
        label: 'Award'
      }
    },
    {
      title:
        'Gartner clients note that Azion excels at providing a consultative approach to orchestration and serverless edge application environments.',
      image: {
        description: 'Gartner Competitive Landscape for CDN and Edge Services.',
        light: 'https://www.azion.com/assets/images/logos/dark/gartner-logo-default.svg?ims=x40',
        dark: 'https://www.azion.com/assets/images/logos/light/gartner-logo.svg?ims=x40',
        alt: 'gartner logo'
      },
      card: {
        ariaLabel: 'Go to original article',
        link: 'https://www.azion.com/en/blog/azion-celebrates-achievements-2023/',
        target: '_self',
        icon: 'internal',
        action: {
          label: 'Read Article'
        }
      },
      tag: {
        icon: 'pi pi-star-fill',
        label: 'Award'
      }
    },
    {
      title:
        "Frost & Sullivan pointed that Azion's serverless edge platform increases business agility by empowering developers to build and scale their applications.",
      image: {
        description: 'Frost & Sullivan Best Practices Award, North.',
        light:
          'https://www.azion.com/assets/images/logos/dark/frostandsullivan-logo-default.svg?ims=x40',
        dark: 'https://www.azion.com/assets/images/logos/light/frostandsullivan-logo.svg?ims=x40',
        alt: 'Frost & Sullivan logo'
      },
      card: {
        ariaLabel: 'Go to original article',
        link: 'https://www.azion.com/en/blog/azion-frost-sullivan-award/',
        target: '_self',
        icon: 'internal',
        action: {
          label: 'Read Article'
        }
      },
      tag: {
        icon: 'pi pi-star-fill',
        label: 'Award'
      }
    }
  ]
}
