<template>
  <LayoutContent>
    <template #header>
      <SectionBanner section-title="组件" section-detail="自定义组件预览" />
    </template>

    <CCard class="rounded-lg">
      <template #header><div class="p-4">按钮 CButton</div></template>
      <div class="p-4 pt-0">
        <div>样式</div>
        <div class="flex flex-row mt-2 space-x-2">
          <CButton class="px-10" type="default">默认</CButton>
          <CButton type="primary">主要</CButton>
          <CButton type="default" :border="false">无边框</CButton>
          <CButton type="default" transparent>透明</CButton>
        </div>
        <div class="mt-4">图标</div>
        <div class="flex flex-row mt-2 space-x-2">
          <CButton icon="save">图标</CButton>
          <CButton type="default" :border="false" icon="mail"></CButton>
          <CButton type="default" transparent icon="editor"></CButton>
        </div>
        <div class="mt-4">禁用</div>
        <div class="flex flex-row mt-2 space-x-2">
          <CButton :disabled="true">禁用</CButton>
          <CButton :disabled="true" :border="false">无边框禁用</CButton>
          <CButton :disabled="true" transparent>透明禁用</CButton>
        </div>
        <div class="mt-4">载入状态</div>
        <div class="flex flex-row mt-2 space-x-2">
          <CButton :loading="true">载入中</CButton>
          <CButton :loading="true"></CButton>
          <CButton :loading="true" transparent></CButton>
        </div>
      </div>
    </CCard>

    <CCard class="mt-6 rounded-lg">
      <template #header><div class="p-4">链接 CLink</div></template>
      <div class="p-4 pt-0 space-x-2">
        <CLink href="//www.baidu.com">默认</CLink>
        <CLink type="primary" href="//www.baidu.com">主要</CLink>
        <CLink icon="link-one" href="//www.baidu.com">图标</CLink>
        <CLink icon="shopping-cart" href="//www.baidu.com" target="_blank">新窗口</CLink>
      </div>
    </CCard>

    <CCard class="mt-6 rounded-lg">
      <template #header><div class="p-4">图片 CImage</div></template>
      <template #headerExtra>
        <div class="p-4 space-x-2">
          <CButton @click="handleChangeIamge()">随机图片</CButton>
          <CButton @click="handleChangeIamge('500/200')">随机宽图</CButton>
          <CButton @click="handleChangeIamge('200/500')">随机高图</CButton>
        </div>
      </template>
      <div class="flex flex-wrap p-4 pt-0">
        <div class="flex flex-col items-center justify-center w-full m-2">
          <span>原始大小</span>
          <CImage :src="randomImage" class="border rounded-lg border-carlos-border" />
        </div>
        <div
          v-for="(item, index) in ['none', 'cover', 'contain', 'fill', 'scale-down']"
          :key="index"
          class="flex flex-col items-center justify-center inline-block m-2"
        >
          <span>{{ item }}</span>
          <CImage
            :src="randomImage"
            class="w-40 h-40 border rounded-lg border-carlos-border"
            :fit="item"
          />
        </div>
        <div class="flex flex-col items-center justify-center inline-block m-2">
          <span>error</span>
          <CImage src="https://unknown" class="w-40 h-40 border rounded-lg border-carlos-border" />
        </div>
      </div>
    </CCard>

    <template #rightSider>
      <CCard class="rounded-lg">
        <template #header><div class="p-4">颜色计算</div></template>
        <template #headerExtra
          ><div class="p-4"><CButton :border="false" transparent icon="more" class="p-0" /></div
        ></template>
        <div class="p-4 pt-0">
          <input v-model="colorValue" class="h-6 px-2 mr-2 text-xs" /><CButton
            type="primary"
            icon="platte"
            @click="handleComputeColor"
          />
          <div class="flex flex-wrap my-2 mt-2 text-xs">
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
        </div>
      </CCard>
    </template>
  </LayoutContent>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { LayoutContent } from '@/components/layout'
import SectionBanner from '@/components/SectionBanner.vue'

import Color from 'color'

export default defineComponent({
  name: 'Components',
  components: { LayoutContent, SectionBanner },
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

    const randomImage = ref('')
    const handleChangeIamge = (ratio?: string) => {
      ratio =
        ratio ||
        `${Math.floor(Math.random() * (500 - 100) + 100)}/${Math.floor(
          Math.random() * (500 - 100) + 100
        )}`
      randomImage.value = `https://picsum.photos/${ratio}?random=${Math.random()}`
    }
    onMounted(() => {
      handleChangeIamge()
    })
    return {
      colorValue,
      colorPreview,
      colorResult,
      handleComputeColor,
      handleChangeIamge,
      randomImage,
    }
  },
})
</script>
