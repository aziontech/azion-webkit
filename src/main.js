import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
// import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import './assets/styles/main.css';

// this should be imported from azion-platform-kit, or not
// import "../../styles/themes/scss/themes/azion-dark/theme.scss";
// import '../../styles/themes/scss/themes/azion-light/theme.scss';

createApp(App).mount('#app');

App.use(PrimeVue, { ripple: true });
App.mount('#app')
