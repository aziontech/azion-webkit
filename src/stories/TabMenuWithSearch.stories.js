import TabMenuWithSearch from '../templates/tab-menu/with-search.vue';

export default {
  title: 'Blocks/TabMenu/with-search',
  component: TabMenuWithSearch,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    tabList: [
      {
        label: 'Serverless'
      },
      {
        label: 'Security'
      },
      {
        label: 'Orchestration'
      },
    ]
  }
};
