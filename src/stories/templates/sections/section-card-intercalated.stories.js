import ContentSection from '../../../templates/contentsection/ContentSection'
import CardBase from '../../../templates/cardbase/CardBase'
import CardTitle from '../../../templates/cardtitle/CardTitle'
import Container from '../../../templates/container/Container'
import CardBgImage from '../../../templates/cardbgimage/CardBgImage'
import Overline from '../../../templates/overline/Overline'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-card-intercalated',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.cards}
        `,
      },
    },
  },
}

const MOCK = {
  "hero": {
    "title": "Let's build together",
    "description": "Azion has always focused on the core values of innovation, reliability, and the ability to make transparent, forward-looking decisions, and execute them with precision and agility. We believe that our success depends on the success of our customers.",
    "image": "/assets/pages/careers/_hero-illustration.png",
    "buttons": [
      {
        "label": "See jobs",
        "link": "/en/careers/jobs/"
      },
      {
        "label": "About us",
        "link": "/en/about-us/",
        "outlined": true
      }
    ]
  },
  "cards": {
    "title": "Azion values",
    "description": "Our values underpin the way we work and interact, not only among us, but also with our customers and the global community",
    "cards": [
      {
        "label": "Quality",
        "title": "Meeting high expectations is the norm. Exceeding them is what sets us apart and drives our success.",
        "image": "https://52082s.ha.azioncdn.net/assets/pages/careers/quality.png",
        "alt": "A group of Azion employees collaborating in a bright and spacious office environment, with modern decor and vibrant energy."
      },
      {
        "label": "Agility",
        "title": "We move quickly in response to a challenge or opportunity.",
        "image": "https://52082s.ha.azioncdn.net/assets/pages/careers/agility.png",
        "alt": "Employees in an office working on their computers, appearing happy and engaged."
      },
      {
        "label": "Ownership",
        "title": "We are empowered to act and accountable for our actions.",
        "image": "https://52082s.ha.azioncdn.net/assets/pages/careers/ownership.png",
        "alt": "An image illustrating a sense of ownership and responsibility in the workplace at Azion."
      },
      {
        "label": "Innovation",
        "title": "We create solutions that unlock new possibilities.",
        "image": "https://52082s.ha.azioncdn.net/assets/pages/careers/innovation.png",
        "alt": "An image representing innovation and creativity in the workplace at Azion."
      }
    ]
  },
}

const template = `
<Container class="surface-ground">
  <ContentSection v-bind="args.hero">
    <template #content>
      <div class="m-0 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto md:pt-32">
        <div v-for="({ label, title, image, alt }, index) in args.cards.cards" :class="[index % 2 !== 0 && 'md:-mt-32']">
          <CardBase>
            <template #content-raw>
              <CardBgImage :alt="alt" :image="image">
                <template #content>
                  <div class="flex flex-col gap-5 z-20">
                    <Overline :label="label" />
                    <CardTitle>{{ title }}</CardTitle>
                  </div>
                </template>
              </CardBgImage>
            </template>
          </CardBase>
        </div>
      </div>
    </template>
  </ContentSection>
</Container>
`

const Template = (args) => ({
  components: { ContentSection, CardBase, CardTitle, Container, CardBgImage, Overline },
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
  },
};
