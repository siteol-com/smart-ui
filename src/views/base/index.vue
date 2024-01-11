<template>
  <div class="layout index">
    <div class="wel" :class="{ done: done }">
      <div class="welogo">
        <img src="/public/static/img/logo.png" />
        <img class="welrun" src="/public/static/img/logo.png" />
      </div>
      <div class="welinfo">{{ $t(tips) }}</div>
      <div class="load"><icon-loading :size="36" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 默认欢迎语
const tips = ref('base.welcome')
const done = ref(false)
// 读取登陆数据
function readLogin() {
  // TODO 读取登陆信息
  setTimeout(() => {
    // TODO  UI 临时跳转
    setTimeout(() => {
      router.push('/center/index')
    }, 1500)
  }, 500)
}
// 初始化方法
function init() {
  // 基本数据加载完成
  setTimeout(() => {
    done.value = true
    readLogin()
  }, 500)
}
// 界面渲染后
onMounted(() => {
  init()
})
</script>
<style scoped lang="less">
.index {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  color: var(--color-text-1);
  * {
    transition: all 0.4s ease-in-out;
  }
  .wel {
    text-align: center;
    line-height: 30px;
    opacity: 0;
    transform: scale(0.8);
    .welogo {
      position: relative;

      img {
        display: block;
      }
      .welrun {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.4;
        transform: scale(1);
        animation: bili 1s linear infinite;
      }
    }
    .welinfo {
      margin: 10px 0 15px 0;
    }
  }
  .wel.done {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
