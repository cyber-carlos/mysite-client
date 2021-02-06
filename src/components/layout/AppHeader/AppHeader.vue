<template>
  <!-- <header
    class="fixed z-50 flex flex-row items-center w-full px-4 bg-opacity-50 shadow-header bg-light-primary dark:bg-dark-primary h-14 dark:bg-opacity-50"
  > -->
  <header
    class="fixed z-50 flex flex-row items-center w-full bg-opacity-80 shadow-header h-14 bg-carlos-primary"
  >
    <AppHeaderLogo />
    <AppHeaderTrigger />
    <AppHeaderExtra />
    <!-- <div class="flex justify-center flex-grow">
      <router-link
        class="flex col-span-2 mx-4 text-sm text-center rounded bg-carlos-bg-accent"
        :to="{ name: 'Home' }"
      >
        <div class="p-2 text-white bg-black bg-opacity-25 rounded-l">
          <IconHome class="inline w-4 h-4 mr-1 align-middle" />Home
        </div>
        <div class="px-4 py-2 ml-auto text-carlos-text-tertiary">主页</div>
      </router-link>
      <router-link
        class="flex col-span-2 mx-4 text-sm text-center bg-opacity-25 rounded bg-carlos-bg-accent"
        :to="{ name: 'FeedList' }"
      >
        <div class="p-2 text-white bg-black bg-opacity-25 rounded-l">
          <IconRss class="inline w-4 h-4 mr-1 align-middle" />Feed
        </div>
        <div class="px-4 py-2 ml-auto text-carlos-text-tertiary">阅读</div>
      </router-link>
      <router-link
        class="flex col-span-2 mx-4 text-sm text-center rounded bg-carlos-bg-accent"
        :to="{ name: 'About' }"
      >
        <div class="p-2 text-white bg-black bg-opacity-25 rounded-l">
          <IconInformationCircle class="inline w-4 h-4 mr-1 align-middle" />About
        </div>
        <div class="px-4 py-2 ml-auto text-carlos-text-tertiary">我</div>
      </router-link>
    </div> -->
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import AppHeaderLogo from './AppHeaderLogo'
import AppHeaderTrigger from './AppHeaderTrigger'
import AppHeaderExtra from './AppHeaderExtra'

export default defineComponent({
  name: 'AppHeader',
  components: { AppHeaderLogo, AppHeaderTrigger, AppHeaderExtra },
  props: {},
  setup() {
    const data = reactive({})

    return {
      ...toRefs(data),
    }
  },
})
</script>
