import ArticleNavigation from '../../templates/articlenavigation'

export default {
  title: 'Components/ArticleNavigation',
  component: ArticleNavigation,
  tags: ['autodocs'],
  argTypes: {
    cards: {
      description: 'Attribute to specify where to open linked document'
    }
  }
}

const Template = (args) => ({
  components: { ArticleNavigation },
  setup() {
    return { args }
  },
  template: '<ArticleNavigation v-bind="args" />',
})

export const Docs = Template.bind({})
Docs.args = {
  cards: {
    prev: {
      text: 'Get help',
      link: 'https://www.azion.com/en/documentation/products/get-help/'
    },
    next: {
      text: 'Start with a template',
      link: 'https://www.azion.com/en/documentation/products/start-with-a-template/'
    }
  },
  overline: {
    next: "Next Page",
    prev: "Back"
  }
}

export const Blog = Template.bind({});
Blog.args = {
  cards: {
    prev: {
      text: 'Implement a Tiered Cache and Reduce Costs for Your E-commerce',
      link: 'https://www.azion.com/en/blog/implement-tiered-cache/'
    },
    next: {
      text: "Enhancing Data Management with Azion's Edge Storage",
      link: 'https://www.azion.com/en/blog/enhancing-data-management-with-azion-edge-storage/'
    }
  },
  overline: {
    next: "Next Article",
    prev: "Previous Article"
  }
}

