import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import IconPark from '@/components/common/IconPark.vue'

export default defineComponent({
  name: 'AppHeaderExtra',
  components: { IconPark },
  props: {},
  setup() {
    const { state, commit } = useStore()

    const handleChangeTheme = () => {
      commit('changeTheme', !state.isDark)
    }
    return () => (
      // <section class="ml-auto grid grid-cols-3 gap-4">
      <section class="ml-auto flex flex-row flex-nowrap space-x-4 mr-4">
        <IconPark
          onClick={handleChangeTheme}
          name="dark-mode"
          size="1.25rem"
          class="cursor-pointer"
        />
        <IconPark name="message" size="1.25rem" />
        <IconPark name="setting-two" size="1.25rem" />
      </section>
    )
  },
})
