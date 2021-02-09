<template>
  <button
    class="space-y-2"
    :class="[
      'c-button',
      type ? 'c-button--' + type : '',
      {
        'is-disabled': btnDisabled,
        'is-loading': btnLoading,
        'c-button--border': btnBorder,
        'is-transparent': btnTransparent,
      },
    ]"
    :disabled="btnDisabled || btnLoading"
    @click="handleClick"
  >
    <SpinLoading
      v-if="btnLoading"
      class="inline-block w-3 h-3"
      :class="$slots.default ? 'mr-2' : ''"
    />
    <IconPark
      v-if="btnIcon && !btnLoading"
      :name="btnIcon"
      :size="btnIconSize"
      :class="[$slots.default ? 'mr-2' : '']"
    />
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SpinLoading from '@/components/common/SpinLoading.vue'
import IconPark from '@/components/common/IconPark.vue'

import type { PropType } from 'vue'

type IButtonType = PropType<'default' | 'primary'>

export default defineComponent({
  name: 'CButton',
  components: {IconPark, SpinLoading },
  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => ['default', 'primary'].includes(val),
    },
    disabled: Boolean,
    loading: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
    transparent: Boolean,
    icon: String,
    iconSize: String,
  },
  emits: ['click'],
  setup(props, { emit }) {
    const btnDisabled = computed(() => props.disabled)
    const btnLoading = computed(() => props.loading)
    const btnBorder = computed(() => props.border)
    const btnTransparent = computed(() => props.transparent)

    const btnIcon = computed(() => props.icon)
    const btnIconSize = computed(() => props.iconSize)
    const handleClick = (event: Event) => {
      emit('click', event)
    }
    return {
      btnDisabled,
      btnLoading,
      btnBorder,
      btnIcon,
      btnIconSize,
      btnTransparent,
      handleClick,
    }
  },
})
</script>
