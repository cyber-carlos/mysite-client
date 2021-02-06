<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { hex2rgb } from '@/utils'
import ThemeJson from '@/assets/theme.json'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const { state } = useStore()
    const isDark = computed(() => state.isDark)

    onMounted(() => {
      const domApp = document.getElementById('app')
      watchEffect(() => {
        // document.body.classList.remove('dark', 'light')
        Object.entries(ThemeJson[isDark.value ? 'dark' : 'light']).forEach((e) => {
          domApp?.style.setProperty(e[0], hex2rgb(e[1]))
        })
        // isDark.value ? document.body.classList.add('dark') : document.body.classList.add('light')
      })
    })
  },
})
</script>
