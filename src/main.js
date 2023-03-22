import { createApp } from 'vue'
import router from '@/router'
import i18n from '@/lang'
import store from '@/store'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.scss'
import App from './App.vue'
import 'windi.css'
import Spinner from "@/components/Spinner.vue";

createApp(App)
  .component('c-spinner', Spinner)
  .use(router)
  .use(i18n)
  .use(store)
  .mount('#app')

