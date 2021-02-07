<template>
  <LayoutContent>
    <div>颜色计算</div>
    <input v-model="colorValue" class="h-6 px-2 mr-2 text-xs" /><CButton
      type="primary"
      icon="platte"
      @click="handleComputeColor"
    />
    <div class="flex flex-row my-2 mt-2 space-x-2 text-xs">
      <div
        class="w-20 h-20 text-center"
        v-for="(key, index) in Object.keys(colorPreview)"
        :key="index"
        :style="{ backgroundColor: colorPreview[key] }"
      >
        {{ key }} <br />
        {{ colorPreview[key] }}
      </div>
    </div>
    <pre>{{ colorResult }}</pre>
    <div class="mt-4">按钮 - 样式</div>
    <div class="flex flex-row mt-2 space-x-2">
      <CButton class="px-10" type="default">默认</CButton>
      <CButton type="primary">主要</CButton>
      <CButton type="default" :border="false">无边框</CButton>
      <CButton type="default" transparent>透明</CButton>
    </div>
    <div class="mt-4">按钮 - 图标</div>
    <div class="flex flex-row mt-2 space-x-2">
      <CButton icon="save">图标</CButton>
      <CButton type="default" :border="false" icon="mail"></CButton>
      <CButton type="default" transparent icon="editor"></CButton>
    </div>
    <div class="mt-4">按钮 - 禁用</div>
    <div class="flex flex-row mt-2 space-x-2">
      <CButton :disabled="true">禁用</CButton>
      <CButton :disabled="true" :border="false">无边框禁用</CButton>
      <CButton :disabled="true" transparent>透明禁用</CButton>
    </div>
    <div class="mt-4">按钮 - 载入状态</div>
    <div class="flex flex-row mt-2 space-x-2">
      <CButton :loading="true">载入中</CButton>
      <CButton :loading="true"></CButton>
      <CButton :loading="true" transparent></CButton>
    </div>
    <div class="mt-4">链接</div>
    <div class="flex flex-row mt-2 space-x-2">
      <CLink href="//www.baidu.com" >默认</CLink>
      <CLink type="primary" href="//www.baidu.com">主要</CLink>
      <CLink icon="link-one" href="//www.baidu.com">图标</CLink>
      <CLink icon="shopping-cart" href="//www.baidu.com" target="_blank">新窗口</CLink>
    </div>
  </LayoutContent>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LayoutContent } from '@/components/layout'

import { CButton, CLink } from '@/components/common'

import Color from 'color'

export default defineComponent({
  name: 'Components',
  components: { LayoutContent, CButton, CLink },
  props: {},
  setup(props) {
    const colorValue = ref('#f44f61')
    const colorPreview = ref({})
    const colorResult = ref('')
    const handleComputeColor = () => {
      colorPreview.value = {
        source: colorValue.value,
        lighten: Color(colorValue.value).lighten(0.1).hex(),
        darken: Color(colorValue.value).darken(0.1).hex(),
        whiten: Color(colorValue.value).whiten(0.1).hex(),
        blacken: Color(colorValue.value).blacken(0.1).hex(),
        saturate: Color(colorValue.value).saturate(0.1).hex(),
        desaturate: Color(colorValue.value).desaturate(0.1).hex(),
        mixWhite: Color(colorValue.value).mix(Color('#ffffff'), 0.1).hex(),
        mixBlack: Color(colorValue.value).mix(Color('#000000'), 0.1).hex(),
      }
      const payload = Object.entries(colorPreview.value).slice(1)
      colorResult.value = ''
      for (let i = 0; i < payload.length; i = i + 2) {
        colorResult.value += `--$$-hover: ${payload[i][1]};\n`
        colorResult.value += `--$$-active: ${payload[i + 1][1]};\n`
      }
    }
    return {
      colorValue,
      colorPreview,
      colorResult,
      handleComputeColor,
    }
  },
})
</script>
