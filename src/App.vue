<template>
  <CScrollBar class="h-screen max-h-screen min-h-screen os-host-flexbox">
    <router-view></router-view>
  </CScrollBar>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const { state } = useStore()
    const isDark = computed(() => state.isDark)

    onMounted(() => {
      const appLoader = document.getElementById('app-loader')
      if (appLoader) {
        appLoader.className = 'transition-opacity opacity-0 duration-1000'
        setTimeout(() => document.body.removeChild(appLoader), 1000)
      }

      watchEffect(() => {
        document.body.classList.remove('theme-dark', 'theme-light')
        // Object.entries(ThemeJson[isDark.value ? 'dark' : 'light']).forEach((e) => {
        //   domApp?.style.setProperty(e[0], hex2rgb(e[1]))
        //   console.log(h2g(e[1]))
        // })

        isDark.value
          ? document.body.classList.add('theme-dark')
          : document.body.classList.add('theme-light')
      })
    })
  },
})
</script>
