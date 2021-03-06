<template>
  <div class="os-host" ref="refScrollbar">
    <div class="os-resize-observer-host"></div>
    <div class="os-padding">
      <div class="os-viewport">
        <div class="os-content">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-horizontal">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle"></div>
      </div>
    </div>
    <div class="os-scrollbar os-scrollbar-vertical">
      <div class="os-scrollbar-track">
        <div class="os-scrollbar-handle"></div>
      </div>
    </div>
    <div class="os-scrollbar-corner"></div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  Ref,
  ref,
  PropType,
  watchEffect,
} from 'vue'
import OverlayScrollbars from 'overlayscrollbars'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CScrollBar',
  components: {},
  props: {
    options: {
      type: Object as PropType<OverlayScrollbars.Options>,
    },
    extensions: {
      type: [String, Array, Object] as PropType<OverlayScrollbars.Extensions>,
    },
  },
  setup(props) {
    const { state } = useStore()
    const isDark = computed(() => state.isDark)

    const refScrollbar: Ref<HTMLElement | null> = ref(null)
    let instance = reactive({}) as Ref<OverlayScrollbars>
    const osOptions = computed(() =>
      Object.assign(
        {
          className: isDark.value ? 'os-theme-dark' : 'os-theme-light',
          scrollbars: {
            autoHide: 'leave',
            clickScrolling: true,
          },
        },
        props.options
      )
    )
    const osExtensions = computed(() => props.extensions)

    const osInstance = () => instance
    
    onMounted(() => {
      instance.value = OverlayScrollbars(
        <HTMLElement>refScrollbar.value,
        osOptions.value,
        osExtensions.value
      )
      watchEffect(() =>
        instance.value.options('className', isDark.value ? 'os-theme-dark' : 'os-theme-light')
      )
    })
    onBeforeUnmount(() => {
      if (OverlayScrollbars.valid(instance.value)) {
        instance.value.destroy()
      }
    })

    return {
      instance,
      refScrollbar,
    }
  },
})
</script>

<style>
@import 'overlayscrollbars/css/OverlayScrollbars.min.css';
/* .os-theme-light > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle,
.os-theme-dark > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle {
  background: var(--scrollbar-handle);
}
.os-theme-light > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle.active,
.os-theme-dark > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle.active {
  background: var(--scrollbar-handle-active)
} */
</style>