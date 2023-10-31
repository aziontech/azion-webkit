import NewsletterCardSmall from '../../templates/newsletter/card/small.vue';
import data from '../../mock/newsletterSingleLine';

export default {
  title: 'Newsletter/Card/Small',
  component: NewsletterCardSmall,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: data
};
