<template>
  <router-link :to="{ name: 'Feed', params: { feedId: item.id } }">
    <div
      class="flex flex-col w-full h-full transition-transform duration-300 transform rounded-lg shadow-md cursor-pointer place-content-between dark:bg-saoqi-bg3 hover:scale-105"
    >
      <div class="flex-grow-0">
        <img
          class="object-cover object-center w-full rounded-t-lg h-36 max-h-36"
          :src="item.thumbnail" :alt="item.title"
        />
      </div>
      <div class="flex-grow p-4 font-bold dark:text-saoqi-lighter2">{{ item.title }}</div>
      <div
        class="flex flex-row justify-between flex-grow-0 px-2 pb-2 text-xs flex-nowrap dark:text-saoqi-text2"
      >
        <div class="whitespace-nowrap overflow-ellipsis" v-if="item.source || item.author">
          <IconGlobe class="inline w-4 h-4 mr-1" />{{ `${item.source?.name|| ''} ${item.author || ''}` }}
        </div>
        <div class="ml-auto whitespace-nowrap overflow-ellipsis">
          <IconClock class="inline w-4 h-4 mr-1" />{{ $dayjs(item.pubDate).fromNow() }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { Clock as IconClock, Globe as IconGlobe } from '/@/components/HeroiconsOutline/'

export default defineComponent({
  name: 'Card',
  components: { IconClock, IconGlobe },
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
      // console.log(result.author)
      result.author = result.author || ''
      return result
    })
    return {
      item,
    }
  },
})
</script>
