import CardGridList from '../templates/card-grid-list/index.vue';
import cardData from '../mock/cards.js'

export default {
  title: 'Blocks/CardGridList',
  component: CardGridList,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    data: cardData
  }
};
