<template>
  <div class="flex items-center justify-center h-full">
    <CButton
      icon="application-two"
      icon-size="24"
      transparent
      class="hover:text-carlos-header-button-light"
      :class="navIsExpanded ? ' text-carlos-header-button-light' : 'text-carlos-header-button'"
      @click="handleNavTrigger"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AppHeaderNavTrigger',
  components: {  },
  props: {},
  setup(props) {
    const { state, commit } = useStore()
    const navIsExpanded = computed(() => state.navIsExpanded)

    const handleNavTrigger = () => {
      commit('updateNavState', !navIsExpanded.value)
    }
    return {
      navIsExpanded,
      handleNavTrigger,
    }
  },
})
</script>
