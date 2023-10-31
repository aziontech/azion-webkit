import VerticalPostList from '../../templates/article/title-grid-list/vertical.vue';
import args from "../../mock/verticalListData"

export default {
  title: 'Article/TitleGridList/Vertical',
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
