require('./bootstrap')

import { createApp } from 'vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue3,  } from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp({})

app.use(router)
app.use(BootstrapVue3);

app.mount('#app')
