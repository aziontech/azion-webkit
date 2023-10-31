import TitleGridList from '../../templates/article/title-grid-list/index.vue';
import dataList from '../../mock/titleFlexListData.js';

export default {
  title: 'Article/TitleGridList/Default',
  component: TitleGridList,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    dataList: dataList
  }
};
