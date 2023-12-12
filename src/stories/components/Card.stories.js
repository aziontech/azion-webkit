import Card from "../../templates/card/index.vue"

export default {
  title: 'Components/Content Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    imgSrc: '/static/images/blog/ecommerce-black-friday/featured-img.png',
    imgAlt: 'Prepare Your Store for the Biggest Black Friday',
    title: 'Prepare Your Store for the Biggest Black Friday',
    description: 'Edge Computing is critical for pages to load quickly, decreasing the likelihood of rejection. See how to use this Technology to your advantage.',
    link: '/en/blog/ecommerce-ready-black-friday/',
    tagList: [ 'Serverless', 'Market Trends', 'Caching' ],
    authors: { avatars: [], title: 'Azion Technologies' },
    date: 'NOV, 2, 2022',
    estimateReadTime: '15 minutes'
  }
};
