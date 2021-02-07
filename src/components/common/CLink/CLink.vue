<template>
  <a
    :class="['c-link', type ? `c-link--${type}` : '', linkDisabled && 'is-disabled']"
    :href="linkHref"
    :target="linkTarget"
  >
    <IconPark
      v-if="linkIcon"
      :name="linkIcon"
      :size="linkIconSize"
      :class="[linkIconClass, $slots.default ? 'mr-2' : '']"
    />
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import IconPark from '@/components/common/IconPark.vue'

export default defineComponent({
  name: 'CLink',
  components: { IconPark },
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val: string) => ['default', 'primary'].includes(val),
    },
    disabled: Boolean,
    icon: String,
    iconSize: String,
    iconClass: String,
    href: String,
    target: {
      type: String,
      validator: (val: string | undefined) => ['_blank', undefined].includes(val),
    },
  },
  setup(props, { emit }) {
    const linkDisabled = computed(() => props.disabled)
    const linkIcon = computed(() => props.icon)
    const linkIconSize = computed(() => props.iconSize)
    const linkIconClass = computed(() => props.iconClass)
    const linkHref = computed(() => props.href)
    const linkTarget = computed(() => props.target)

    const handleClick = (event: Event) => {
      emit('click', event)
    }
    return {
      linkDisabled,
      linkIcon,
      linkIconSize,
      linkIconClass,
      linkHref,
      linkTarget,
      handleClick,
    }
  },
})
</script>
