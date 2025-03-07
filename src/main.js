import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)
app.mount('#app')
