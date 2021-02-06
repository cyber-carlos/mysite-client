<template>
  <section class="container flex flex-wrap p-2 pt-0 sm:p-6 sm:pt-4">
    <div class="relative flex-1" v-loading="isLoading">
      <div class="px-4 rounded bg-carlos-bg-secondary">
        <div class="py-4 text-3xl text-carlos-text-accent">{{ item.title }}</div>
        <div class="flex flex-row flex-wrap flex-auto pb-4 text-xs text-carlos-text-secondary">
          <div class="text-carlos-text-secondary">
            <!-- <IconGlobe class="inline w-4 h-4 mr-1 align-bottom" /> -->
            <a class="text-carlos-link-secondary" :href="item.source?.web || '#'" target="_blank">
              {{ `${item.source?.name || ''} ${item.author || ''}` }}
            </a>
          </div>
          <div class="ml-8 text-carlos-text-secondary">
            <!-- <IconClock class="inline w-4 h-4 mr-1 align-bottom" /> -->
            {{ $dayjs(item.pubDate).fromNow() }}
          </div>
          <div class="ml-auto text-carlos-text-secondary">
            <!-- <IconLink class="inline w-4 h-4 mr-1 align-bottom" /> -->
            <a class="text-carlos-link-secondary" :href="item.link" target="_blank">原文链接</a>
          </div>
        </div>
      </div>
      <article
        class="mt-8 prose max-w-max text-carlos-text-primary dark:prose-dark"
        v-html="item.description"
      ></article>
      <hr class="mt-8 border-carlos-border" />
      <div class="px-4 py-8 text-xs">
        <span>
          版权声明：本文版权归
          <a class="text-carlos-link-secondary" target="_blank" :href="item.source?.web || '#'">
            {{ `${item.source?.name || ''} ${item.author || ''}` }}
          </a>
          所有。<br />原文链接：
          <!-- <IconLink class="inline w-4 h-4 mr-1 align-middle" /> -->
          <a class="text-carlos-link-secondary" :href="item.link" target="_blank">{{
            item.link
          }}</a>
        </span>
      </div>
      <hr class="border-carlos-border" />
      <!-- <div
        class="grid grid-cols-1 gap-4 mt-8 auto-rows-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      > -->
      <div class="mt-8">
        <Card v-for="(item, index) in extraItems" :key="'card' + index" :item="item"></Card>
      </div>
    </div>
    <!-- <div class="hidden p-4 md:w-3/12 md:flex">123</div> -->
    <FeedSider class="hidden lg:w-3/12 lg:flex" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref, watchEffect } from 'vue'
import { useAxios } from '@/hooks/useAxios'
import { IFeed } from '@/types/interface'
import Card from '@/components/Card.vue'
import FeedSider from '@/views/FeedSider.vue'

export default defineComponent({
  name: 'Feed',
  components: { Card, FeedSider },
  props: {
    feedId: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const isLoading = ref(true)
    const itemId = computed(() => props.feedId)
    const item = ref({}) as Ref<IFeed>
    const extraItems = reactive([]) as IFeed[]

    const fetchFeed = async (id: string) => {
      item.value = {} as IFeed
      isLoading.value = true
      const { error, data, finished } = await useAxios(`feeders/${id}`)
      if (!error.value) {
        isLoading.value = !finished.value
        item.value = data.value.data
        item.value.description = item.value.description.replace(/<style[^>]*>.*?<\/style>/g, '')
        item.value.description = item.value.description.replace(
          /<code[^>]*>*<template[^>]*/g,
          '<code>&lt;template'
        )
        item.value.description = item.value.description.replace(
          /<code[^>]*>*<script[^>]*/g,
          '<code>&lt;script'
        )
        item.value.description = item.value.description.replace(
          /<span class="copy-code-btn">复制代码<\/span>/g,
          ''
        ) // 掘金
        item.value.description = item.value.description.replace(
          /<img /g,
          '<img class="m-auto border rounded max-w-img border-carlos-border" '
        )
        // item.value.author = item.value.author || ''
        const meta = data.value.meta
        const { next, prev } = meta
        const extra = [].concat(next.reverse(), prev) as IFeed[]
        extraItems.splice(0, extraItems.length, ...extra)
      }
    }
    watchEffect(() => fetchFeed(itemId.value))

    const handleFeedClick = (event: Event) => {
      console.log(event)
    }
    return {
      isLoading,
      item,
      itemId,
      fetchFeed,
      extraItems,
      handleFeedClick,
    }
  },
})
</script>
