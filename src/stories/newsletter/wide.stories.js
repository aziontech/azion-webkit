import NewsletterWide from '../../templates/newsletter/wide/index.vue';
import data from '../../mock/newsletterWide.js';

export default {
  title: 'Newsletter/Wide',
  component: NewsletterWide,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: data
};