import LinkIconButton from '../../templates/button/link-icon.vue';

export default {
  title: 'Components/Link Icon Button',
  component: LinkIconButton,
  tags: ['autodocs'],
  argTypes: {}
};


// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    icon: 'pi pi-facebook',
    link: 'https://www.azion.com/en/'
  }
};
