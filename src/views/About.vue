<template>
  <div class="flex flex-col flex-grow w-full h-full p-6 m-auto ">
    <p class="m-auto"><span class="text-9xl">😎</span></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'About',
  components: {},
  props: {},
  setup() {
    const data = reactive({})

    return {
      ...toRefs(data),
    }
  },
})
</script>
