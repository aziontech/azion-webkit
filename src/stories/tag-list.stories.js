import TagBlockList from '../templates/tag-block-list/index.vue'

export default {
  title: 'Blocks/Tag List',
  component: TagBlockList,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    tagList: [
      'Serverless', 'Dev', 'Caching'
    ]
  }
};
