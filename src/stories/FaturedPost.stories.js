import FeaturedPost from '../templates/featured-post/index.vue';
import data from '../mock/featuredPost.js';

export default {
  title: 'Blocks/FeaturedPost',
  component: FeaturedPost,
  tags: ['autodocs'],
  argTypes: {
    linkTarget: {
      control: {
        type: 'select',
      },
      options: ['_self', '_blank']
    },
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    imgSrc: data.imgSrc,
    imgAlt: data.imgAlt,
    tagList: data.tagList,
    title: data.title,
    description: data.description,
    link: data.link,
    linkText: data.linkText,
    linkTarget: data.linkTarget
  }
};



