import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  alias: { '@': resolve(__dirname, 'src') },
  plugins: [vue({ ssr: false }), vueJsx()],
  optimizeDeps: {
    include: ['dayjs/locale/zh-cn', 'dayjs/plugin/relativeTime']
  }
})
