<template>
  <footer
    class="flex flex-grow-0 w-full py-6 text-center text-carlos-text-secondary bg-carlos-bg-tertiary"
  >
    <span class="m-auto">
      © 2021 Coded & Designed with
      <div class="inline-block heartbeating">❤</div>
      by Carlos.<br />
      <span class="text-xs">京ICP备15031620号</span>
    </span>
  </footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'AppFooter',
  components: {},
  props: {},
  setup(props) {
    const data = reactive({})

    return {
      ...toRefs(data),
    }
  },
})
</script>
