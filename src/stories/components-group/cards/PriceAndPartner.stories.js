import PriceAndPartner from "../../../templates/priceandpartner"

export default {
  title: 'Components Group/Cards/Price And Partner',
  component: PriceAndPartner,
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: { type: 'select' },
      options: ['en', 'es', 'pt-br']
    }
  }
}

export const Default = {
  args: {
    lang: 'en'
  }
}
