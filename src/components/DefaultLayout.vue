<template>
  <section class="w-full overflow-hidden">
    <section
      class="flex flex-col min-h-screen overflow-hidden dark:text-saoqi-text1 dark:bg-saoqi-bg1"
    >
      <div class="relative z-0 p-10 header-bg">
        <h2 class="text-3xl text-center stroke-1 font-welcome dark:text-saoqi-lighter2">
          👋🏼Hi~, I'm Carlos<br />
          Welcome to my site<br />
          The following is my favorite feed
        </h2>
        <!-- <label class="z-20"><input type="checkbox" :checked="isDark" @click="handleChangeTheme" /> 骚气</label> -->
      </div>
      <header
        class="flex flex-row justify-center flex-grow-0 w-full py-2 mx-auto dark:shadow dark:bg-saoqi-lighter1"
      >
        <div class="flex justify-center flex-grow">
          <router-link
            class="flex col-span-2 mx-4 text-sm text-center rounded dark:bg-saoqi-bg4"
            :to="{ name: 'Home' }"
          >
            <div class="p-2 bg-opacity-25 rounded-l bg-saoqi-black dark:text-saoqi-white">
              <IconHome class="inline w-3.5 h-3.5 mr-1" />Home
            </div>
            <div class="px-4 py-2 ml-auto dark:text-saoqi-text4">主页</div>
          </router-link>
          <router-link
            class="flex col-span-2 mx-4 text-sm text-center bg-opacity-25 rounded dark:bg-saoqi-bg4"
            :to="{ name: 'FeedList' }"
          >
            <div class="p-2 bg-opacity-25 rounded-l bg-saoqi-black dark:text-saoqi-white">
              <IconRss class="inline w-3.5 h-3.5 mr-1" />Feed
            </div>
            <div class="px-4 py-2 ml-auto dark:text-saoqi-text4">阅读</div>
          </router-link>
          <router-link
            class="flex col-span-2 mx-4 text-sm text-center rounded dark:bg-saoqi-bg4"
            :to="{ name: 'About' }"
          >
            <div class="p-2 bg-opacity-25 rounded-l bg-saoqi-black dark:text-saoqi-white">
              <IconInformationCircle class="inline w-3.5 h-3.5 mr-1" />About
            </div>
            <div class="px-4 py-2 ml-auto dark:text-saoqi-text4">我</div>
          </router-link>
        </div>
      </header>
      <main class="container flex flex-col flex-grow m-auto">
        <Breadcrumb />
        <CustomRouterView />
      </main>
      <footer
        class="flex flex-grow-0 w-full py-6 text-center dark:text-saoqi-text2 dark:bg-saoqi-bg3"
      >
        <span class="m-auto">
          © 2021 carlos.com.cn<br />
          <span class="text-xs">京ICP备15031620号</span>
        </span>
      </footer>
    </section>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watchEffect } from 'vue'
import CustomRouterView from '/@/components/CustomRouterView.vue'
import { useStore } from 'vuex'
import Breadcrumb from '/@/components/Breadcrumb.vue'
import {
  Home as IconHome,
  Rss as IconRss,
  InformationCircle as IconInformationCircle,
} from '/@/components/HeroiconsOutline'

export default defineComponent({
  name: 'DefaultLayout',
  components: { CustomRouterView, Breadcrumb, IconHome, IconRss, IconInformationCircle },
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

