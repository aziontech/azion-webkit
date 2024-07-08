import ArticleNavigation from '../../templates/articlenavigation/ArticleNavigation.vue'

export default {
  title: 'Azion Web Kit/Blocks/Article Navigation',
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

