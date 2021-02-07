<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const { state } = useStore()
    const isDark = computed(() => state.isDark)

    onMounted(() => {
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
