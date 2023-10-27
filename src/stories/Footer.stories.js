// required //
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import '../assets/styles/main.css';
//end required //

import Footer from '../templates/footer/index.vue';
import listData from '../mock/footer.js';

export default {
  title: 'Blocks/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    lang: 'en',
    listData: listData
  }
};