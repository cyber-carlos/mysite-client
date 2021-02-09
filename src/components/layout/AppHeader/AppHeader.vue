<template>
  <!-- <header
    class="fixed z-50 flex flex-row items-center w-full px-4 bg-opacity-50 shadow-header bg-light-primary dark:bg-dark-primary h-14 dark:bg-opacity-50"
  > -->
  <header>
    <div class="w-48 pl-4 text-sm">
      <router-link to="/" class="inline-block">
        <img :src="imageLogo" class="inline w-8 h-8 header-logo" />
        <span class="ml-2">卡叔实验室</span>
      </router-link>
    </div>
    <AppHeaderNavTrigger />
    <AppHeaderExtra />
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import AppHeaderNavTrigger from './AppHeaderNavTrigger.vue'
import AppHeaderExtra from './AppHeaderExtra.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { AppHeaderNavTrigger, AppHeaderExtra },
  props: {},
  setup() {
    const imageLogo = ref('/logo.png')
    return {
      imageLogo,
    }
  },
})
</script>
