import HeroVideoRight from "../../../templates/herovideoright"
import Rules from '../../rules'

const MOCK = {
  hero: {
    "overline": "About us",
    "title": "Our mission is to power the hyper-connected economy",
    "description": "From the beginning, our goal has been to create technologies that unlock new possibilities."
  },
  video: {
    title: 'Azion Overview',
    src: 'https://www.youtube.com/embed/your_video_id',
    image: {
      alt: "Image of a globe illustrating Azion's connections",
      dark: {
        src: 'https://www.azion.com/assets/pages/about/globe-about.png'
      },
      light: {
        src: 'https://www.azion.com/assets/pages/about/globe-about-light.png'
      }
    }
  }
}

const MOCK_WITH_CARDS = {
  ...MOCK,
  cards: [
    {
      title: "Release",
      description: "Release conidently and consistently.",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    },
    {
      title: "Target",
      description: "Deliver personalized experiences",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    },
    {
      title: "Remediate",
      description: "Find and fix issues faster.",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    },
    {
      title: "Experiment",
      description: "Continuously measure and optimize.",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    }
  ]
}

const config= (args) => {
  return {
    components: { HeroVideoRight },
    setup() {
      return { args }
    },
    template: '<HeroVideoRight v-bind="args" />'
  }
}

const Template = (args) => (config(args))
export const Default = Template.bind({})
Default.args = MOCK

const TemplateWithCards = (args) => (config(args))
export const DefaultWithCards = TemplateWithCards.bind({})
DefaultWithCards.args = MOCK_WITH_CARDS

export default {
  title: 'Blocks/Hero/hero-video-right',
  component: HeroVideoRight,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.hero.overline}
${Rules.hero.title}
${Rules.hero.description}
${Rules.hero.imageVideo}
${Rules.hero.cards}
        `,
      },
    },
  },
};
