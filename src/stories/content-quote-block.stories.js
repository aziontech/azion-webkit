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
        image: URL,
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
    image: "https://www.azion.com/static/images/landingpage/uploads/logo-forrester.svg"
  },
]

const multipleData = [
  {
    text: "”Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con”",
    label: "Date and/or research.",
    image: "https://www.azion.com/static/images/landingpage/uploads/logo-forrester.svg"
  },
  {
    text: "”Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con”",
    label: "Date and/or research.",
    image: "https://www.azion.com/static/images/landingpage/uploads/logo-forrester.svg"
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
