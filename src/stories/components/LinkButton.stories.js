import LinkButton from '../../templates/button/link.vue';

export default {
  title: 'Components/Link Button',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {}
};


// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    text: 'link button text',
    link: 'https://www.azion.com/en/'
  }
};
