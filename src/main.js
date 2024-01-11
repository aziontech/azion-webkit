import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import InstantSearch from 'vue-instantsearch/vue3/es';

import App from './App.vue';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './assets/icons/azionicons.scss'

import './assets/main.css';
import '../node_modules/@aziontech/azion-theme/src/azion-light/theme.scss';
import '../node_modules/@aziontech/azion-theme/src/azion-dark/theme.scss';

const app = createApp(App);

app.use(InstantSearch);
app.use(PrimeVue);

app.directive('tooltip', Tooltip)
app.mount('#app');
