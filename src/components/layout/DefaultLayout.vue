<template>
  <section class="flex flex-col w-full overflow-hidden text-carlos bg-carlos-body">
    <AppHeader />
    <section class="flex flex-row justify-item-center">
      <!-- <aside class="flex-0048">234</aside> -->
    </section>
    <section
      class="mt-20 transition-all duration-500 transform"
      :class="navIsExpanded ? 'ml-48' : 'ml-20'"
    >
      <section class="max-w-full px-6 mx-auto justify-items-center lg:max-w-main-lg xl:max-w-main-max">
        <!-- <Breadcrumb /> -->
        <router-view></router-view>
      </section>
    </section>
    <AppNav />
    <AppFooter />
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
  name: 'DefaultLayout',
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
