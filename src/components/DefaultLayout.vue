<template>
  <section class="w-full overflow-hidden">
    <section
      class="flex flex-col min-h-screen overflow-hidden text-carlos-text-primary bg-carlos-bg-primary"
    >
      <div class="relative z-0 p-10 header-bg">
        <h2 class="text-3xl text-center stroke-1 font-welcome text-carlos-text-accent">
          👋🏼Hi~, I'm Carlos<br />
          Welcome to my site<br />
          The following is my favorite feed
        </h2>
        <!-- <label class="z-20"><input type="checkbox" :checked="isDark" @click="handleChangeTheme" /> 骚气</label> -->
      </div>
      <header
        class="flex flex-row justify-center flex-grow-0 w-full py-2 mx-auto shadow bg-carlos-header"
      >
        <div class="flex justify-center flex-grow">
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
        </div>
      </header>
      <main class="container flex flex-col flex-grow m-auto">
        <Breadcrumb />
        <CustomRouterView />
      </main>
    </section>
    <AppFooter />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watchEffect } from 'vue'
import CustomRouterView from '@/components/CustomRouterView.vue'
import { useStore } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb.vue'
import AppFooter from '@/components/AppFooter.vue'
import {
  Home as IconHome,
  Rss as IconRss,
  InformationCircle as IconInformationCircle,
} from '@/components/HeroiconsOutline'

export default defineComponent({
  name: 'DefaultLayout',
  components: { CustomRouterView, AppFooter, Breadcrumb, IconHome, IconRss, IconInformationCircle },
  setup() {
    const { state, commit } = useStore()
    const isDark = computed(() => state.isDark)

    const handleChangeTheme = () => {
      commit('changeTheme', !isDark.value)
    }

    onMounted(async () => {
      watchEffect(() => {
        if (isDark.value) document.body.classList.add('dark')
        else document.body.classList.remove('dark')
      })
    })
    return {
      isDark,
      handleChangeTheme,
    }
  },
})
</script>

