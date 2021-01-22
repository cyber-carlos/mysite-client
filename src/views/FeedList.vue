<template>
  <section class="container flex flex-row flex-wrap p-6 pt-4">
    <div class="flex-1">
      <transition-group
        appear
        name="card"
        tag="div"
        class="grid grid-cols-1 gap-5 auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- <img v-for="(item, index) in feedItems" :key="'card' + index" :src="item.thumbnail" /> -->
        <Card
          v-for="(item, index) in feedItems"
          :key="'card' + index"
          :item="item"
          :style="{ '--i': index }"
        ></Card>
      </transition-group>
    </div>
    <!-- <div class="hidden p-4 lg:flex lg:w-64">123</div> -->
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'

import { IFeed } from '/@/types/interface'
import { useAxios } from '/@/hooks/useAxios'
import Card from '/@/components/Card.vue'

export default defineComponent({
  name: 'FeedList',
  components: { Card },
  props: {},
  setup() {
    const feedItems: IFeed[] = reactive([])
    const fetchFeeds = async () => {
      const { error, data } = await useAxios('feeders')
      // const dataItems = data.value.data
      // const dataMeta = data.value.meta
      if (!error.value) {
        feedItems.splice(0, feedItems.length, ...data.value.data)
      }
    }
    onMounted(() => {
      fetchFeeds()
    })
    return {
      fetchFeeds,
      feedItems,
    }
  },
})
</script>
<style>
.card-enter-active,
.card-leave-active {
  transition: all 0.3s ease;
  transition-delay: calc(var(--i) * 0.1s);
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.1);
}
</style>