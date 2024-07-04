import CardGridblock from '../../../templates/cardgridblock'

export default {
  title: 'Azion Web Kit/Blocks/Card Grid Block',
  component: CardGridblock,
  tags: ['autodocs'],
  argTypes: {
    cardType: {
      control: { type: 'radio' },
      options: ['blog', 'cases']
    }
  },
}

const DefaultCard = new Array(10).fill({
  "title": "New at Azion? Start your Azion journey seamlessly",
  "imgSrc": "https://www.azion.com/assets/blog/images/fallback-cards/card-empty-1.png",
  "imgAlt": "Azion logo",
  "description": "This documentation will assist you to Get started and walk your first steps on Azion.",
  "link": "https://www.azion.com/en/documentation/products/get-started/",
  tagList: ["Blog"]
})


const props = {
  categories: ['All posts', 'Blog', 'Cases'],
  defaultTab: 'All posts',
  inputPlaceholder: 'Search',
  data: DefaultCard,
}

export const Default = {
  args: {
     ...props
    }
}

export const isSearchEnabled = {
  args: {
    ...props,
    isSearchEnabled: true,
    algoliaAppId: "",
    algoliaApiKey: "",
    algoliaIndex: [],
    algoliaModel: [],
  }
}

export const isLoadMoreEnabled = {
  args: {
    ...props,
    isLoadMoreEnabled: true,
    loadMoreNumber: 3,
    buttonText: "Load more",
  }
}
