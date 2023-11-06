import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import './assets/main.css';
import './assets/themes/scss/themes/azion-light/theme.scss';
import './assets/themes/scss/themes/azion-dark/theme.scss';

createApp(App).mount('#app');

App.use(PrimeVue, { ripple: true });
App.mount('#app');
