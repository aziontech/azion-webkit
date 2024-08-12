import CardBgImage from '../../../templates/cardbgimage/CardBgImage'
import CardBase from '../../../templates/cardbase/CardBase'

export default {
  title: 'Components/Card/CardBgImage',
  component: CardBgImage,
  tags: ['autodocs'],
  argTypes: {
    image: {
      description: 'Card background image path url'
    },
    alt: {
      description: 'Image alt'
    },
    customGradient: {
      description: 'Pass through para definir o gradiente shadow do elemento'
    }
  },
}

const cardTemplate = `<CardBase>
                        <template #content-raw>
                          <CardBgImage v-bind="args" />
                        </template>
                      </CardBase>`

const Template = (args) => ({
  components: { CardBase, CardBgImage },
  setup() {
    return { args }
  },
  template: cardTemplate
})

export const Default = Template.bind({})
Default.args = {
  "image": "https://www.azion.com/assets/pages/about/azion-01.jpg",
  "alt": "A team of professionals from Azion, aligned in a meeting room, discussing business strategies and collaborating in a modern and dynamic work environment."
}
