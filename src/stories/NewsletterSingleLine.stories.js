import NewsletterSingleLine from '../templates/newsletter/single-line/index.vue';
import data from '../mock/newsletterSingleLine.js';

export default {
  title: 'Newsletter/SingleLine',
  component: NewsletterSingleLine,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: data
};