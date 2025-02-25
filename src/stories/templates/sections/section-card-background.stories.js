import ContentSection from '../../../templates/contentsection'
import CardBase from '../../../templates/cardbase'
import Overline from '../../../templates/overline'
import CardTitle from '../../../templates/cardtitle'
import CardBgImage from '../../../templates/cardbgimage'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-card-background',
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
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      ContentSection,
      CardBase,
      Overline,
      CardTitle,
      CardBgImage,
      Container
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <ContentSection
          titleTag="h2"
          position="center"
          isContentCentralized
          textCenter
          :title="args.title"
        >
          <template #actions>
            <LinkButton
              v-for="({ link, label, outlined }) in args.buttons"
              :link="link"
              :label="label"
              :outlined="outlined"
            />
          </template>

          <template #main>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <CardBase v-for="({ label, title, image, alt }) in args.cards">
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
          </template>
        </ContentSection>
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  title: "Let's build together",
  description:
    'Azion has always focused on the core values of innovation, reliability, and the ability to make transparent, forward-looking decisions, and execute them with precision and agility. We believe that our success depends on the success of our customers.',
  buttons: [
    {
      label: 'See jobs',
      link: 'https://console.azion.com/signup'
    },
    {
      label: 'About Us',
      link: 'https://console.azion.com/signup',
      outlined: 'true'
    }
  ],
  cards: [
    {
      label: 'Quality',
      title:
        'Meeting high expectations is the norm. Exceeding them is what sets us apart and drives our success.',
      image: 'https://www.azion.com/assets/pages/careers/quality.png',
      alt: 'A group of Azion employees collaborating in a bright and spacious office environment, with modern decor and vibrant energy.'
    },
    {
      label: 'Agility',
      title: 'We move quickly in response to a challenge or opportunity.',
      image: 'https://www.azion.com/assets/pages/careers/agility.png',
      alt: 'Employees in an office working on their computers, appearing happy and engaged.'
    },
    {
      label: 'Ownership',
      title: 'We are empowered to act and accountable for our actions.',
      image: 'https://www.azion.com/assets/pages/careers/ownership.png',
      alt: 'An image illustrating a sense of ownership and responsibility in the workplace at Azion.'
    },
    {
      label: 'Innovation',
      title: 'We create solutions that unlock new possibilities.',
      image: 'https://www.azion.com/assets/pages/careers/innovation.png',
      alt: 'An image representing innovation and creativity in the workplace at Azion.'
    }
  ]
}
