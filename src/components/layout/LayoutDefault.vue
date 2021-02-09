<template>
  <section class="relative flex flex-col w-full h-screen text-carlos-text-primary">
    <AppHeader
      class="fixed z-50 flex flex-row items-center w-full bg-opacity-80 shadow-header h-14 bg-carlos-bg4"
    />
    <section class="flex flex-col flex-1 mt-14" :class="navIsExpanded ? 'ml-48' : 'ml-20'">
      <section class="flex-1">
        <!-- <Breadcrumb /> -->
        <router-view></router-view>
      </section>
      <AppFooter />
    </section>
    <AppNav class="fixed bottom-0 left-0 top-14" :class="navIsExpanded ? 'w-48' : 'w-20'" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

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
