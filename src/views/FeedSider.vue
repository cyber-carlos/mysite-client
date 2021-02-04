<template>
  <section class="container flex flex-row flex-wrap pl-6">
    <div class="relative flex-1" v-loading="isLoading">
      <transition-group appear name="card" tag="div" class="grid grid-cols-1 gap-4">
        <!-- <img v-for="(item, index) in feedItems" :key="'card' + index" :src="item.thumbnail" /> -->
        <Card
          class="inline-block"
          v-for="(item, index) in feedItems"
          :key="item.id"
          :item="item"
          :style="{ '--i': index }"
        ></Card>
      </transition-group>
    </div>
    <!-- <div class="hidden p-4 lg:flex lg:w-64">123</div> -->
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { useAxios } from '@/hooks/useAxios'
import { IFeed } from '@/types/interface'
import Card from '@/components/Card.vue'

export default defineComponent({
  name: 'FeedSider',
  components: { Card },
  props: {},
  setup(props) {
    const feedItems = reactive<IFeed[]>([])
    const isLoading = ref(true)
    const fetchFeeds = async () => {
      isLoading.value = true
      const { error, data, finished } = await useAxios('feeders')
      if (!error.value) {
        isLoading.value = !finished.value
        feedItems.splice(0, feedItems.length, ...data.value.data.slice(0, 4))
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
</script>
