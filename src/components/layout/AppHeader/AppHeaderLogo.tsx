import { defineComponent } from 'vue'
import ImageLogo from '@/assets/img/logo.png'

export default defineComponent({
  name: 'AppHeaderLogo',
  components: {},
  props: {},
  setup() {
    const imageLogo = ImageLogo

    return () => (
      <div class="w-48 pl-4 text-sm ">
        <router-link to="/" class="inline-block">
          <img src={imageLogo} class="header-logo h-8 w-8 inline" />
          <span class="ml-2">卡叔实验室</span>
        </router-link>
      </div>
    )
  },
})
