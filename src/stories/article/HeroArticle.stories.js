import HeroArticle from '../../templates/article/hero/index.vue';
import data from '../../mock/articleHero'

export default {
  title: 'Article/Hero',
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
  }
};

export const WithImage = {
  args: data
}
