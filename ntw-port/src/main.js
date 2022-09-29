import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router'
import 'flowbite';

createApp(App).use(router).mount('#app')
