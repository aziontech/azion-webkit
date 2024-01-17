import ContentLogoBlock from '../templates/content-logo-block/index.vue';

export default {
  title: 'Blocks/Content Logo Block',
  component: ContentLogoBlock,
  tags: ['autodocs'],
  argTypes: {}
};

const logos = Array(12).fill({
  imageSrc: 'https://www.azion.com/static/images/v3/home/logo-rbs.png',
  alt: 'Item 1'
});

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    isCentralized: false,
    title: 'Logo title',
    logos: logos
  }
};

export const Centralized = {
  args: {
    isCentralized: true,
    title: 'Logo title',
    logos: logos
  }
};
