<template>
  <div class="w-full overflow-hidden bg-carlos-bg2">
    <div v-if="$slots.header || $slots.headerExtra || cardHeader" class="flex flex-row">
      <div v-if="$slots.header || cardHeader">
        <slot name="header">头</slot>
      </div>
      <div v-if="$slots.headerExtra" class="ml-auto">
        <slot name="headerExtra">头扩展</slot>
      </div>
    </div>
    <div class="flex-1 border-carlos-divider">
      <slot></slot>
    </div>
    <div v-if="$slots.footer || cardFooter" class="border-t border-carlos-divider bg-carlos-bg3">
      <slot name="footer">脚</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'CCard',
  components: {},
  props: {
    header: {
      type: String,
      default: '',
    },
    footer: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const cardHeader = computed(() => props.header)
    const cardFooter = computed(() => props.footer)

    return {
      cardHeader,
      cardFooter,
    }
  },
})
</script>
