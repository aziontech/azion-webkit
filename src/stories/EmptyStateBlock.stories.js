import EmptyStateBlock from '../templates/empty-state-block/index.vue';

export default {
  title: 'Blocks/Empty State Block',
  component: EmptyStateBlock,
  tags: ['autodocs']
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    title: 'No one is here',
    description: 'Its seen you found a portal to another dimension'
  }
};



