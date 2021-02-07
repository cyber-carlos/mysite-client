<template>
  <section class="flex flex-row ml-auto mr-4 space-x-4 flex-nowrap">
    <CButton
      @click="handleChangeTheme"
      icon="dark-mode"
      icon-size="1.5rem"
      transparent
      class="p-0 text-carlos-header-button hover:text-carlos-header-button-light"
    />
    <CButton
      icon="message"
      icon-size="1.5rem"
      transparent
      class="p-0 text-carlos-header-button hover:text-carlos-header-button-light"
    />
    <CButton
      icon="setting-two"
      icon-size="1.5rem"
      transparent
      class="p-0 text-carlos-header-button hover:text-carlos-header-button-light"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { CButton } from '@/components/common'

export default defineComponent({
  name: 'AppHeaderExtra',
  components: { CButton },
  props: {},
  setup(props) {
    const { state, commit } = useStore()

    const handleChangeTheme = () => {
      commit('changeTheme', !state.isDark)
    }
    return {
      handleChangeTheme,
    }
  },
})
</script>
