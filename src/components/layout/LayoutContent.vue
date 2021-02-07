<template>
  <section class="flex flex-row p-8">
    <div>
      <slot></slot>
    </div>
    <aside>
      <slot name="left-sider"></slot>
    </aside>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'LayoutContent',
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
