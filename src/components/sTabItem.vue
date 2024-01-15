<template>
  <div class="stab" :class="{ stabCheck: routeCheck, stabMounted: mounteDone }" @click="go()">
    <div class="stabi" :class="{ stabinit: initDone }">
      <icon-loading class="stabLoad" :size="16" />
      <icon-dashboard v-if="item.isHome" class="stabGo" :size="16" />
      <span class="stabGo" v-else>
        <icon-compass v-if="routeCheck" :size="16" />
        <icon-pause-circle v-else :size="16" />
      </span>
    </div>
    <div class="stabp">
      {{ $t(item.title) }}
    </div>
    <a-button v-if="!item.isHome" class="stabx" size="mini" type="text" shape="circle" @click.stop="removeTab()">
      <icon-close :size="14" />
    </a-button>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { TagProps } from '@/store/tab'
import { tabStore } from '@/store'
import { computed } from 'vue'
const props = defineProps({
  item: {
    type: Object as PropType<TagProps>,
    default() {
      return {}
    }
  },
  index: {
    type: Number,
    default: 0
  }
})
const route = useRoute()
const routeCheck = computed(() => {
  return route.name === props.item.name
})
// 图标初始化结束
const initDone = ref(false)
// 元素初始化结束
const mounteDone = ref(false)
function init() {
  setTimeout(() => {
    mounteDone.value = true
  }, 100)
  setTimeout(() => {
    initDone.value = true
  }, 1200)
}
const router = useRouter()
const tab = tabStore()
const tagList = computed(() => {
  return tab.getTabList
})
// 移除标签
function removeTab() {
  mounteDone.value = false
  setTimeout(() => {
    tab.removeTabList(props.item.name, props.index)
    // 关闭的当前才进行跳转
    if (routeCheck.value) {
      router.push({ name: tagList.value[props.index - 1].name })
    }
  }, 400)
}
// 跳转
function go() {
  router.push({ name: props.item.name })
}
// 初次加载
onMounted(() => {
  init()
})
</script>
