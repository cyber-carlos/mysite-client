<template>
  <LayoutContent class="container flex flex-row flex-wrap">
    <div class="relative flex-1" v-loading="isLoading">
      <!-- <transition-group
        appear
        name="card"
        tag="div"
        class="grid grid-cols-1 gap-5 auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      > -->
      <!-- <transition-group appear name="card" tag="div" class="auto-rows-auto"> -->
      <!-- <img v-for="(item, index) in feedItems" :key="'card' + index" :src="item.thumbnail" /> -->
      <!-- :style="{ '--i': index }" -->
      <Card
        class="inline-block"
        v-for="(item, index) in feedItems"
        :key="item.id"
        :item="item"
      ></Card>
      <!-- </transition-group> -->
    </div>
    <!-- <div class="hidden p-4 lg:flex lg:w-64">123</div> -->
  </LayoutContent>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'

import { LayoutContent } from '@/components/layout'

import { IFeed } from '@/types/interface'
import { useAxios } from '@/hooks/useAxios'
import Card from '@/components/Card.vue'

export default defineComponent({
  name: 'FeedList',
  components: { LayoutContent, Card },
  props: {},
  setup() {
    const feedItems = reactive<IFeed[]>([])
    const isLoading = ref(true)
    const fetchFeeds = async () => {
      isLoading.value = true
      const { error, data, finished } = await useAxios('feeders')
      // const dataItems = data.value.data
      // const dataMeta = data.value.meta
      if (!error.value) {
        isLoading.value = !finished.value
        feedItems.splice(0, feedItems.length, ...data.value.data)
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
