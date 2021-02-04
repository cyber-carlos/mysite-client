<template>
  <div v-if="$route.path !== '/'" class="flex px-8 pt-3.5 text-sm text-carlos-text-secondary">
    <div v-for="(item, index) in items" :key="index">
      <IconHome v-if="index === 0" class="inline-block w-3 h-3 mr-1" />
      <IconChevronRight
        v-else-if="index < items.length && item.meta.label"
        class="inline-block w-3 h-3 ml-1"
      />
      <router-link :to="item.path" class="hover:text-carlos-link-primary-hover">{{
        item.meta.label
      }}</router-link>
    </div>
    <!-- <div class="ml-auto">
      <a
        href="#"
        class="align-middle hover:cursor-pointer hover:text-carlos-text-accent"
        @click="handleChangeTheme"
      >
        <IconLightBulb class="inline w-5 h-5 transform rotate-180" />
      </a>
    </div> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRaw, toRefs, watchEffect } from 'vue'
import {
  Home as IconHome,
  ChevronRight as IconChevronRight,
  LightBulb as IconLightBulb,
} from '@/components/HeroiconsOutline'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Breadcrumb',
  components: { IconHome, IconChevronRight, IconLightBulb },
  props: {},
  setup(props) {
    const { currentRoute } = useRouter()
    const matched = computed(() => currentRoute.value.matched)
    const items = reactive([]) as any[]

    watchEffect(() => {
      items.splice(0, items.length, ...matched.value)
    })

    const { state, commit } = useStore()
    const isDark = computed(() => state.isDark)
    const handleChangeTheme = () => {
      commit('changeTheme', !isDark.value)
    }

    return {
      items,
      handleChangeTheme,
    }
  },
})
</script>
