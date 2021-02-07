import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import '@/assets/css/index.css'

// directives
import vLoading from './directives/vLoading'

// dayjs
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

// icon-park
import { install as IconParkInstall } from '@icon-park/vue-next/es/all'
import '@icon-park/vue-next/styles/index.css'
// import { DEFAULT_ICON_CONFIGS, IconProvider } from '@icon-park/vue-next'
// console.log(DEFAULT_ICON_CONFIGS)
// IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: 'icon' })
// import '@icon-park/vue-next/styles/index.css'

// global components
import * as GlobalComponents from '@/components/common'

// init
const app = createApp(App)
app.use(router).use(store)
app.directive('loading', vLoading)

IconParkInstall(app)
Object.entries(GlobalComponents).forEach((c) => app.component(c[0], c[1]))

app.config.globalProperties.$dayjs = dayjs

app.mount('#app')
