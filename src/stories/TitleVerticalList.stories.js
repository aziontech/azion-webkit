import VerticalPostList from '../templates/title-grid-list/vertical.vue';
import args from "../mock/verticalListData"

export default {
  title: 'Blocks/TitleVerticalList',
  component: VerticalPostList,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    data: args
  }
};
