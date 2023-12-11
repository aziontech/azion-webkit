import HeroArticle from '../../templates/post/hero/index.vue';
import data from '../../mock/articleHero'

export default {
  title: 'Blocks/Article/Hero',
  component: HeroArticle,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    date: data.date,
    title: data.title,
    tagList: data.tagList,
    authors: data.authors,
    breadcrumbItems: [
      {
        url: "/en/blog/",
        target: "_self",
        label: "Blog",
      },
      {
        url: '',
        target: "_self",
        label: "This article",
      },
    ]
  }
};

export const WithImage = {
  args: data
}
