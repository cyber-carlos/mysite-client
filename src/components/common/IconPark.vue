<template>
  <component :is="iconName" :size="iconSize" aria-hidden="true" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'IconPark',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '1rem',
    },
  },
  setup(props) {
    const iconName = computed(() => `icon-${props.name}`)
    const iconSize = computed(() => props.size)
    return {
      iconName,
      iconSize,
    }
  },
})
</script>