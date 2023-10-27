// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import '../assets/styles/main.css';
//end required //

import FeaturedPost from '../templates/article/featured-post/index.vue';

export default {
  title: 'Article/FeaturedPost',
  component: FeaturedPost,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {}
};