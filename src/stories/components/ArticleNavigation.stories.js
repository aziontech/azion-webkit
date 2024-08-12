import ArticleNavigation from '../../templates/articlenavigation'

export default {
  title: '2. Components/ArticleNavigation',
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

export const Default = Template.bind({})
Default.args = {
  cards: {
    prev: {
      text: 'Lorem Ipsum',
      link: ''
    },
    next: {
      text: 'Lorem Ipsum',
      link: ''
    }
  },
  overline: {
    next: "Next",
    prev: "Previous"
  }
}

