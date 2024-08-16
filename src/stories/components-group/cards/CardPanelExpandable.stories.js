import CardPanelExpandable from "../../../templates/cardpanelexpandable"

export default {
  title: 'Components Group/Card Panel Expandable',
  component: CardPanelExpandable,
  tags: ['autodocs'],
  argTypes: {
    activeIndex: {
      description: "Card que estará expandido após o render"
    },
    maxHeight: {
      description: "Para garantir que o grid não pule com a animação é necessário setar o height do componente"
    }
  },
}

const DefaultCard = new Array(3).fill({
  "title": "New at Azion? Start your Azion journey seamlessly",
  "description": "This documentation will assist you to Get started and walk your first steps on Azion.",
})

const props = {
  activeIndex: 2,
  maxHeight: '420px',
  cards: DefaultCard
}

export const Default = {
  args: {
     ...props
    }
}
