<template>
  <router-link :to="{ name: 'Feed', params: { feedId: item.id } }">
    <div
      class="flex flex-col w-full h-full border rounded-lg shadow-md cursor-pointer transition-carlos border-carlos-border place-content-between bg-carlos-bg-tertiary hover:scale-105"
    >
      <div class="flex-grow-0 rounded-t-lg bg-carlos-bg-secondary">
        <img
          class="object-center w-full rounded-t-lg h-36 max-h-36"
          :class="item.hasThumbnail ? 'object-cover' : 'object-contain'"
          :src="item.thumbnail"
          :alt="item.title"
        />
      </div>
      <div class="flex-grow p-4 font-bold text-carlos-text-accent">{{ item.title }}</div>
      <div
        class="flex flex-row justify-between flex-grow-0 px-2 pb-2 text-xs flex-nowrap text-carlos-text-secondary"
      >
        <div class="whitespace-nowrap overflow-ellipsis" v-if="item.source || item.author">
          <!-- <IconGlobe class="inline w-4 h-4 mr-1" /> -->
          {{ `${item.source?.name || ''} ${item.author || ''}` }}
        </div>
        <div class="ml-auto whitespace-nowrap overflow-ellipsis">
          <!-- <IconClock class="inline w-4 h-4 mr-1" /> -->
          {{ $dayjs(item.pubDate).fromNow() }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ImageThumbnail from '@/assets/img/logo.png'

export default defineComponent({
  name: 'Card',
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props) {
    const item = computed(() => {
      const result = props.item
      result.author = result.author || ''
      if (result.thumbnail) {
        result.thumbnail = result.thumbnail
        result.hasThumbnail = true
      } else {
        result.thumbnail = ImageThumbnail
        result.hasThumbnail = false
      }
      return result
    })
    return {
      item,
    }
  },
})
</script>
