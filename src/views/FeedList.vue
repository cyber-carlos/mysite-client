<template>
  <LayoutContent>
    <template #header>
      <SectionBanner section-title="Feed" section-detail="订阅你喜欢的Feed" />
    </template>
    <div class="flex flex-col space-y-6" v-loading="isLoading">
      <CCard v-for="item in feedItems" :key="`feed-${item.id}`" class="flex-1 rounded-lg">
        <div>
          <CImage
            class="w-full rounded-t-lg h-36 max-h-36"
            :fit="item.hasThumbnail ? 'cover' : 'contain'"
            :src="item.thumbnail"
            :alt="item.title"
          />
        </div>
        <div class="mx-4 mt-4">
          {{ item.title }}
        </div>
        <div
          class="flex flex-row p-2 mx-4 mt-4 text-xs border-t border-carlos-divider text-carlos-text-secondary"
        >
          <div v-if="item.source || item.author">
            <IconPark name="world" size="12" />
            {{ `${item.source?.name || ''} ${item.author || ''}` }}
          </div>
          <div class="ml-auto">
            <span>
              <IconPark name="time" size="12" />
              {{ $dayjs(item.pubDate).fromNow() }}
            </span>
          </div>
        </div>
      </CCard>
    </div>
    <template #leftSider>
      <CCard class="rounded-lg">
        <template #header><div class="p-4">分类</div></template>
      </CCard>
    </template>
    <template #rightSider>
      <CCard class="rounded-lg">
        <template #header><div class="p-4">推荐</div></template>
      </CCard>
    </template>
  </LayoutContent>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'

import { LayoutContent } from '@/components/layout'

import SectionBanner from '@/components/SectionBanner.vue'

import { IFeed } from '@/types/interface'
import { useAxios } from '@/hooks/useAxios'

export default defineComponent({
  name: 'FeedList',
  components: { LayoutContent, SectionBanner },
  props: {},
  setup() {
    const feedItems = reactive<IFeed[]>([])
    const isLoading = ref(true)
    const fetchFeeds = async () => {
      isLoading.value = true
      const { error, data, finished } = await useAxios('feeders')
      if (!error.value) {
        isLoading.value = !finished.value
        feedItems.splice(0, feedItems.length, ...data.value.data)
        feedItems.forEach((e) => {
          if (e.thumbnail) {
            e.thumbnail = e.thumbnail
            e.hasThumbnail = true
          } else {
            e.thumbnail = '/logo.png'
            e.hasThumbnail = false
          }
        })
      }
    }
    onMounted(() => {
      fetchFeeds()
    })
    return {
      isLoading,
      fetchFeeds,
      feedItems,
    }
  },
})
// <style>
// .card-enter-active {
//   transition: all 0.3s ease;
//   transition-delay: calc(var(--i) * 0.1s);
// }
// .card-leave-active {
//   transition: all 0.3s ease;
//   transition-delay: 0;
// }
// .card-enter-from,
// .card-leave-to {
//   opacity: 0;
//   transform: translateY(100%);
// }
// </style>
</script>
