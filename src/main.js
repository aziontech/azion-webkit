import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import InstantSearch from 'vue-instantsearch/vue3/es'
import App from './App.vue'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/icons/azionicons.scss'
import './assets/styles/main.css'
import './assets/styles/text.css'
import './assets/styles/hsform.css'
import 'azion-theme'

const app = createApp(App)

app.use(InstantSearch)
app.use(PrimeVue)

app.directive('tooltip', Tooltip)
app.mount('#app')
