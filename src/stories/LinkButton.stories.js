import LinkButton from '../templates/link-button/index.vue';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {}
};


// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    text: 'link button text',
    link: 'https://www.azion.conm/en/'
  }
};
