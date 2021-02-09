<template>
  <div>
    <CScrollBar class="relative h-full">
      <!-- FIXME 当高度不同时滚动条显示错误 -->
      <nav
        class="absolute top-0 w-48 min-h-full pt-4 ease-linear transform transition-carlos bg-carlos-bg2"
        :class="expandedClass"
      >
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          class="flex items-center px-6 py-2"
          :class="[$route.matched[1]?.name === item.name ? activeClass : inactiveClass]"
          :to="item.path"
        >
          <IconPark :name="item.meta?.icon || 'square-small'" size="1.5rem" />
          <span class="mx-4">{{ item.meta?.label || '' }}</span>
        </router-link>
      </nav>
      <nav
        class="absolute top-0 w-20 min-h-full pt-4 ease-linear transform transition-carlos bg-carlos-bg2"
        :class="collapsedClass"
      >
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          class="block w-full px-6 py-2 text-center"
          :class="[$route.matched[1]?.name === item.name ? activeClass : inactiveClass]"
          :to="item.path"
        >
          <IconPark :name="item.meta?.icon || 'square-small'" size="1.5rem" />
        </router-link>
      </nav>
    </CScrollBar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AppNav',
  components: {},
  props: {
    menuItems: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  setup() {
    const menuItems = computed(() => useRouter().options.routes[0].children)
    const activeClass = ref('text-carlos-primary hover:text-carlos-primary-hover')
    const inactiveClass = ref('text-carlos-nav-button hover:text-carlos-nav-button-light')

    const { state } = useStore()
    const navIsExpanded = computed(() => state.navIsExpanded)
    const expandedClass = ref(navIsExpanded ? 'translate-x-0' : '-translate-x-full')
    const collapsedClass = ref(navIsExpanded ? '-translate-x-full' : 'translate-x-0')

    watchEffect(() => {
      if (navIsExpanded.value) {
        collapsedClass.value = '-translate-x-full duration-400'
        expandedClass.value = 'translate-x-0 delay-400 duration-400'
      } else {
        expandedClass.value = '-translate-x-full duration-400'
        collapsedClass.value = 'translate-x-0 delay-400 duration-400'
      }
      setTimeout(() => {
        expandedClass.value = expandedClass.value.replace('delay-400', '')
        collapsedClass.value = collapsedClass.value.replace('delay-400', '')
        expandedClass.value = expandedClass.value.replace('duration-400', '')
        collapsedClass.value = collapsedClass.value.replace('duration-400', '')
      }, 1000)
    })

    return {
      menuItems,
      activeClass,
      inactiveClass,
      expandedClass,
      collapsedClass,
    }
  },
})
</script>
