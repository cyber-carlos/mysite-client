<template>
  <div
    class="relative w-full h-40 pt-12 pl-48 overflow-hidden rounded-xl bg-gradient-to-r from-carlos-primary to-carlos-secondary"
  >
    <p class="text-3xl">
      <slot name="sectionTitle">{{ title }}</slot>
    </p>
    <p class="text-base">
      <slot name="sectionDetail">{{ detail }}</slot>
    </p>
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-repeat bg-texture-skulls"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SectionBanner',
  components: {},
  props: {
    sectionTitle: {
      type: String,
      default: '',
    },
    sectionDetail: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const title = ref(props.sectionTitle)
    const detail = ref(props.sectionDetail)
    return {
      title,
      detail,
    }
  },
})
</script>
