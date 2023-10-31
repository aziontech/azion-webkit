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
    imgSrc: 'https://www.azion.com/static/images/uploads/thumbnailblogterraform440x343px-2.png?ims=622x',
    imgAlt: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    tagList: [
        'Featured',
        'Edge Computing'
    ],
    title: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    description: "Here at Azion, we're very excited to announce that Azion Technologies has been named a “best fit for companies that need global edge performance…” in The Forrester New WaveTM: Edge Development Platforms, Q4 2021.",
    link: 'https://www.azion.com/en/blog/azion-listed-in-forrester-new-wave-edge-platforms/',
    linkText: "read more",
    linkTarget: "_self"
  }
};

export const NoTag = {
  args: {
    imgSrc: 'https://www.azion.com/static/images/uploads/thumbnailblogterraform440x343px-2.png?ims=622x',
    imgAlt: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    tagList: [],
    title: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    description: "Here at Azion, we're very excited to announce that Azion Technologies has been named a “best fit for companies that need global edge performance…” in The Forrester New WaveTM: Edge Development Platforms, Q4 2021.",
    link: 'https://www.azion.com/en/blog/azion-listed-in-forrester-new-wave-edge-platforms/',
    linkText: "read more",
    linkTarget: "_self"
  }
};

export const NoTagNoImg = {
  args: {
    // imgSrc: 'https://www.azion.com/static/images/uploads/thumbnailblogterraform440x343px-2.png?ims=622x',
    // imgAlt: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    tagList: [],
    title: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    description: "Here at Azion, we're very excited to announce that Azion Technologies has been named a “best fit for companies that need global edge performance…” in The Forrester New WaveTM: Edge Development Platforms, Q4 2021.",
    link: 'https://www.azion.com/en/blog/azion-listed-in-forrester-new-wave-edge-platforms/',
    linkText: "read more",
    linkTarget: "_self"
  }
};


export const NoImg = {
  args: {
    // imgSrc: 'https://www.azion.com/static/images/uploads/thumbnailblogterraform440x343px-2.png?ims=622x',
    // imgAlt: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    tagList: [
      'Featured',
      'Edge Computing'
    ],
    title: 'Azion Listed in Forrester New Wave Report for Edge Development Platforms',
    description: "Here at Azion, we're very excited to announce that Azion Technologies has been named a “best fit for companies that need global edge performance…” in The Forrester New WaveTM: Edge Development Platforms, Q4 2021.",
    link: 'https://www.azion.com/en/blog/azion-listed-in-forrester-new-wave-edge-platforms/',
    linkText: "read more",
    linkTarget: "_self"
  }
};