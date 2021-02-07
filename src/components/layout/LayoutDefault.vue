<template>
  <section
    class="relative flex flex-col w-full h-screen overflow-hidden text-carlos-text bg-carlos-bg1"
  >
    <AppHeader
      class="fixed z-50 flex flex-row items-center w-full bg-opacity-80 shadow-header h-14 bg-carlos-bg4"
    />
    <!-- <section class="flex flex-row justify-item-center">
      <aside class="flex-0048">234</aside>
    </section> -->
    <section class="flex flex-col flex-1 h-full overflow-y-auto mt-14" :class="navIsExpanded ? 'ml-48' : 'ml-20'">
      <section
        class="flex-1 w-full max-w-full mx-auto justify-items-center lg:max-w-main-lg xl:max-w-main-max"
      >
        <!-- <Breadcrumb /> -->
        <router-view></router-view>
      </section>
      <AppFooter class="py-6 text-sm text-center bg-carlos-bg3 text-carlos-text" />
    </section>
    <AppNav class="fixed h-full" :class="navIsExpanded ? 'w-48' : 'w-20'" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
// import CustomRouterView from '@/components/CustomRouterView.vue'

// import Breadcrumb from '@/components/Breadcrumb.vue'
// import { AppHeader, AppFooter, AppNav } from './index'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter.vue'
import AppNav from './AppNav.vue'

export default defineComponent({
  name: 'LayoutDefault',
  components: { AppHeader, AppNav, AppFooter },
  setup() {
    const { state, commit } = useStore()
    const isDark = computed(() => state.isDark)

    const handleChangeTheme = () => {
      commit('changeTheme', !isDark.value)
    }
    const navIsExpanded = computed(() => state.navIsExpanded)

    return {
      isDark,
      handleChangeTheme,
      navIsExpanded,
    }
  },
})
</script>
