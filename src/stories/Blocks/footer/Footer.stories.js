import Footer from '../../../../dist/footer/Footer.js';
import footerData from '../../../mock/footer.js';

export default {
  title: 'Blocks/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    lang: 'en',
    listData: footerData.listData,
    cta: footerData.cta,
    copyright: footerData.copyright,
    i18nPages: [{ lang: 'EN', slug: '/' }],
    socialButtons: footerData.socialButtons
  }
};
