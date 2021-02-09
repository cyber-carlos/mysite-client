<template>
  <section class="w-full max-w-full p-8 mx-auto lg:max-w-main-lg xl:max-w-main-max">
    <slot v-if="$slots.header" name="header" />
    <section class="flex mt-8 space-x-6">
      <aside v-if="$slots.leftSider" class="flex-none w-64">
        <div class="sticky top-22">
          <slot name="leftSider">left</slot>
        </div>
      </aside>
      <div class="flex-1 flex-grow">
        <slot></slot>
      </div>

      <aside v-if="$slots.rightSider" class="flex-none w-64">
        <div class="sticky top-22">
          <slot name="rightSider">right</slot>
        </div>
      </aside>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SectionBanner from '@/components/SectionBanner.vue'

export default defineComponent({
  name: 'LayoutContent',
  components: { SectionBanner },
  props: {
    sectionTitle: String,
    sectionDetail: String,
  },
  setup(props) {
    const sectionTitle = ref(props.sectionTitle)
    const sectionDetail = ref(props.sectionDetail)
    
    return {
      sectionTitle,
      sectionDetail,
    }
  },
})
</script>
