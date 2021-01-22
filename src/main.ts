import { createApp } from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'

import '/@/assets/css/index.css'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

const app = createApp(App)
app.use(router).use(store)

app.config.globalProperties.$dayjs = dayjs

app.mount('#app')
