import Categories from '../templates/categories/index.vue';
import data from '../mock/categories'

export default {
  title: 'Blocks/Categories',
  component: Categories,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: data
};
