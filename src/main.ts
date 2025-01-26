import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './config/i18n.ts';

createApp(App).use(i18n).mount('#app');
