import ArticleNavigation from '../../templates/articlenavigation/ArticleNavigation.vue'

export default {
  title: 'Building Blocks/Article Navigation',
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
  template: '<ArticleNavigation v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  cards: {
    next: {
      text: 'Lorem Ipsum',
      link: ''
    },
    prev: {
      text: 'Lorem Ipsum',
      link: ''
    }
  }
}

export const onlyNext = {
  args: {
    cards: {
      next: {
        text: 'Lorem Ipsum'
      }
    }
  }
}

export const onlyPrev = {
  args: {
    cards: {
      prev: {
        text: 'Lorem Ipsum'
      }
    }
  }
}
