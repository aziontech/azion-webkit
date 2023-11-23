import NewsletterSingleLine from '../../templates/newsletter/single-line/index.vue';
import data from '../../mock/newsletterSingleLine.js';

export default {
  title: 'Newsletter/Card/SingleLine',
  component: NewsletterSingleLine,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    ...data,
    formData: {
      acceptanceTermText: 'Eu aceito receber comunicações da Azion',
      fetchLink: `https://api.hsforms.com/submissions/v3/integration/submit/5759082/2c0be612-855f-4141-95d3-da64d1a12535`,
      uri: `/en/blog/`,
      pageName: "azion-blog",
    }
  }
};
