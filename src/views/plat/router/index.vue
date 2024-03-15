<template>
  <div class="container" :class="{ sPop: sPop }">
    <a-card class="sGroup sList" :bordered="false" style="line-height: 60px">
      <button type="button" @click="openPop">打开</button>
    </a-card>
    <a-card class="sGroup sItem" :bordered="false" :loading="false" style="line-height: 60px">
      <a-page-header :title="'Test'" :subtitle="'TestS'" @back="closePop" />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const sPop = ref(false)
// const itemLoad = ref(true)
function openPop() {
  sPop.value = true
  // setTimeout(() => {
  //   itemLoad.value = false
  // }, 2000)
}
function closePop() {
  // itemLoad.value = true
  // setTimeout(() => {
  sPop.value = false
  // }, 1000)
}
</script>
