import 'amfe-flexible'
import './public/base.css'
import 'vant/lib/index.css';

import Vant from 'vant';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vant);
app.mount('#app')
