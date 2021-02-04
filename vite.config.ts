import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  alias: { '@': resolve(__dirname, 'src') },
  plugins: [vue({ ssr: false })],
  optimizeDeps: {
    include: ['dayjs/locale/zh-cn', 'dayjs/plugin/relativeTime']
  }
})
