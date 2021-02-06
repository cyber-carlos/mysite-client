<template>
  <nav
    class="fixed w-48 h-full pt-4 text-sm transition-transform duration-300 ease-in-out transform bg-carlos-box mt-14"
    :class="expandedClass"
  >
    <router-link
      v-for="(item, index) in menuItems"
      :key="index"
      class="flex items-center px-6 py-2"
      :class="[$route.matched[1]?.name === item.name ? activeClass : inactiveClass]"
      :to="item.path"
    >
      <IconPark :name="item.meta?.icon || 'square-small'" size="1.125rem" />
      <span class="mx-4">{{ item.meta?.label || '' }}</span>
    </router-link>
  </nav>
  <nav
    class="fixed w-20 h-full pt-4 text-sm transition-transform duration-300 ease-in-out transform bg-carlos-box mt-14"
    :class="collapsedClass"
  >
    <router-link
      v-for="(item, index) in menuItems"
      :key="index"
      class="flex items-center px-6 py-2"
      :class="[$route.matched[1]?.name === item.name ? activeClass : inactiveClass]"
      :to="item.path"
    >
      <IconPark :name="item.meta?.icon || 'square-small'" size="1.25rem" />
      <!-- <span class="mx-4">{{ item.meta?.label || '' }}</span> -->
    </router-link>
  </nav>
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
    const activeClass = ref('text-carlos-primary')
    const inactiveClass = ref('text-carlos')

    const { state } = useStore()
    const navIsExpanded = computed(() => state.navIsExpanded)
    const expandedClass = ref('')
    const collapsedClass = ref('')
    watchEffect(() => {
      if (navIsExpanded.value) {
        expandedClass.value = 'translate-x-0 delay-300'
        collapsedClass.value = '-translate-x-full '
      } else {
        expandedClass.value = '-translate-x-full'
        collapsedClass.value = 'translate-x-0 delay-300'
      }
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
