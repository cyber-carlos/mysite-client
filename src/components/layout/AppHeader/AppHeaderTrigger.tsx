import { computed, defineComponent, ref } from 'vue'
import { ApplicationTwo } from '@icon-park/vue-next'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AppHeaderTrigger',
  components: { ApplicationTwo },
  props: {},
  setup() {
    const { state, commit } = useStore()
    const navIsExpanded = computed(() => state.navIsExpanded)

    const handleClickTrigger = () => {
      commit('updateNavState', !navIsExpanded.value)
    }
    return () => (
      <div class="h-full flex justify-center items-center ml-4">
        <ApplicationTwo
          class={[
            navIsExpanded.value ? 'text-opacity-100' : 'text-opacity-40',
            'cursor-pointer text-white hover:text-opacity-100',
          ]}
          size="1.5rem"
          onClick={handleClickTrigger}
        />
      </div>
    )
  },
})
