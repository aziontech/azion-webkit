// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import '../assets/styles/main.css';
//end required //

import Categories from '../templates/categories/index.vue';

export default {
  title: 'Blocks/Categories',
  component: Categories,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {}
};