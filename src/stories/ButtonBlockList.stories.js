import ButtonBlockList from '../templates/button-block-list/index.vue';
import data from '../mock/buttonBlockList.js';

export default {
  title: 'Blocks/ButtonBlockList',
  component: ButtonBlockList,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: data
};