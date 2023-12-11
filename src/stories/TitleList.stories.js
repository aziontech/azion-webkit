import TitleList from '../templates/title-list/index.vue';
import args from '../mock/verticalListData.js';

export default {
  title: 'Blocks/TitleList',
  component: TitleList,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    data: args
  }
};
