import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import 'v-calendar/dist/style.css'
import store from './store/store'
createApp(App).use(router).use(store).use(VCalendar,{componentPrefix: 'vc',}).mount('#app')
