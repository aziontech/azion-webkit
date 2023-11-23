import Overline from '../templates/overline/index.vue';

export default {
  title: 'Components/Overline',
  component: Overline,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    label: "Azion Overline"
  }
}

