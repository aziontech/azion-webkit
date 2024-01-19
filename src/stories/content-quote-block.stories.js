import ContentQuoteBlock from '../templates/content-quote-block/index.vue';

export default {
  title: 'Blocks/Content Quote Block',
  component: ContentQuoteBlock,
  tags: ['autodocs'],
  argTypes: {
    isCarousel: Boolean,
    data: {
      type: Array,
      table: {
        imageDark: URL,
        imageLight: URL,
        text: String,
        label: String
      },
    }
  }
};

const data = [
  {
    text: "”Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con”",
    label: "Date and/or research.",
    imageLight: "https://www.azion.com/static/images/landingpage/uploads/logo-forrester.svg",
    imageDark: "https://www.azion.com/static/images/v3/home/logo-digmais.png"
  },
]

const multipleData = [
  {
    text: "”Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con”",
    label: "Date and/or research.",
    imageLight: "src/assets/svg/arezzo-logo.svg",
    imageDark: "https://www.azion.com/static/images/v3/home/logo-digmais.png"
  },
  {
    text: "”Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con”",
    label: "Date and/or research.",
    imageLight: "https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg",
    imageDark: "https://www.azion.com/static/images/v3/home/logo-digmais.png"
  },
  {
    text: "”Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con”",
    label: "Date and/or research.",
    imageLight: "https://www.azion.com/static/images/landingpage/uploads/logo-forrester.svg",
    imageDark: "https://www.azion.com/static/images/v3/home/logo-digmais.png"
  },
]

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

export const _1item = {
  args: {
    data: data,
    isCarousel: false,
  }
}

export const MultipleItens = {
  args: {
    data: multipleData,
    isCarousel: false,
  }
};

export const _1itemCarousel = {
  args: {
    data: data,
    isCarousel: true,
  }
};

export const _MultipleItemCarousel = {
  args: {
    data: multipleData,
    isCarousel: true,
  }
};
