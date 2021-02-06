<template>
  <footer
    class="flex py-6 text-sm text-center transition-all duration-300 ease-in-out bg-carlos-box-alt text-carlos"
    :class="navIsExpanded ? 'ml-48' : 'ml-20'"
  >
    <span class="m-auto">
      © 2021 carlos.com.cn<br /><br />
      Coded & Designed with
      <div class="inline-block heartbeating">❤</div>
      by Carlos.<br />
      <span class="text-xs">京ICP备15031620号</span>
    </span>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AppFooter',
  components: {},
  props: {},
  setup() {
    const { state } = useStore()
    const navIsExpanded = computed(() => state.navIsExpanded)
    return {
      navIsExpanded,
    }
  },
})
</script>
