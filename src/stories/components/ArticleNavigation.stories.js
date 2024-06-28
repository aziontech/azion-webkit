import ArticleNavigation from '../../templates/articlenavigation'

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

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    cards: {
      next: {
        text: 'Lorem Ipsum'
      },
      prev: {
        text: 'Lorem Ipsum'
      }
    },
    overline: {
      next: 'Next',
      prev: 'Prev'
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
