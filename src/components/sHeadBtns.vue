<template>
  <div class="head-btn-item">
    <a-tooltip :content="theme === 'light' ? $t('base.theme.toDark') : $t('base.theme.toLight')">
      <a-button class="head-btn" :shape="'circle'" @click="setTheme">
        <template #icon>
          <icon-moon-fill v-if="theme === 'dark'" :style="btnSize" />
          <icon-sun-fill v-else :style="btnSize" />
        </template>
      </a-button>
    </a-tooltip>
  </div>
  <div class="head-btn-item">
    <a-dropdown trigger="click">
      <a-tooltip :content="$t('base.language')">
        <a-button class="head-btn" :shape="'circle'">
          <template #icon>
            <icon-language :style="btnSize" />
          </template>
        </a-button>
      </a-tooltip>
      <template #content>
        <a-doption v-for="item in locales" :key="item.value" :value="item.value" @click="changeLocale(item.value)">
          <template #icon>
            <icon-check v-show="item.value === currentLocale" />
          </template>
          {{ item.label }}
        </a-doption>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { LOCALE_OPTIONS } from '@/locale'
import useLocale from '@/utils/hooks/locale'
import { appStore } from '@/store'
// 顶部按钮区域组件
// 应用配置
const app = appStore()
const theme = computed(() => {
  return app.theme
})
const { setTheme, initTheme, getHeadIconSize } = app
// 初始化模式
initTheme()
// 图标大小
const btnSize = getHeadIconSize
// 语言选项
const locales = [...LOCALE_OPTIONS]
const { changeLocale, currentLocale } = useLocale()
</script>
