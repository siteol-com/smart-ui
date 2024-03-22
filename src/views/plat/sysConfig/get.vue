<template>
  <a-spin :loading="load">
    <a-form label-align="left" class="form" layout="vertical" :model="formData">
      <a-row :gutter="20">
        <a-col :span="24">
          <a-form-item field="loginSwitch" :label="$t('sysConfig.loginSwitch')">
            <template #extra>
              <div>{{ $t('sysConfig.loginSwitch.tips') }}</div>
            </template>
            <a-switch v-model="formData.loginSwitch" :checked-value="'0'" :unchecked-value="'1'" disabled>
              <template #checked-icon>
                <icon-check />
              </template>
              <template #unchecked-icon>
                <icon-close />
              </template>
            </a-switch>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="loginNum" :label="$t('sysConfig.loginNum')">
            <span class="formSpan" :class="{ unSpan: formData.loginSwitch != '0' }">{{ formData.loginNum }}</span>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item field="loginFailSwitch" :label="$t('sysConfig.loginFailSwitch')">
            <template #extra>
              <div>{{ $t('sysConfig.loginFailSwitch.tips') }}</div>
            </template>
            <a-switch v-model="formData.loginFailSwitch" :checked-value="'0'" :unchecked-value="'1'" disabled>
              <template #checked-icon>
                <icon-check />
              </template>
              <template #unchecked-icon>
                <icon-close />
              </template>
            </a-switch>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="loginFailNum" :label="$t('sysConfig.loginFailNum')">
            <span class="formSpan" :class="{ unSpan: formData.loginFailSwitch != '0' }">{{ formData.loginFailNum }}</span>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="loginFailUnit" :label="$t('sysConfig.loginFailUnit')">
            <span class="formSpan" :class="{ unSpan: formData.loginFailSwitch != '0' }">
              {{ dictMap.timeUnit[formData.loginFailUnit] }}
            </span>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="loginFailLockNum" :label="$t('sysConfig.loginFailLockNum')">
            <span class="formSpan" :class="{ unSpan: formData.loginFailSwitch != '0' }">{{ formData.loginFailLockNum }}</span>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="loginFailLockUnit" :label="$t('sysConfig.loginFailLockUnit')">
            <span class="formSpan" :class="{ unSpan: formData.loginFailSwitch != '0' }">{{
              dictMap.timeUnit[formData.loginFailLockUnit]
            }}</span>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="loginFailTryNum" :label="$t('sysConfig.loginFailTryNum')">
            <span class="formSpan" :class="{ unSpan: formData.loginFailSwitch != '0' }">{{ formData.loginFailTryNum }}</span>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item field="logoutSwitch" :label="$t('sysConfig.logoutSwitch')">
            <template #extra>
              <div>{{ $t('sysConfig.logoutSwitch.tips') }}</div>
            </template>
            <a-switch v-model="formData.logoutSwitch" :checked-value="'0'" :unchecked-value="'1'" disabled>
              <template #checked-icon>
                <icon-check />
              </template>
              <template #unchecked-icon>
                <icon-close />
              </template>
            </a-switch>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="logoutNum" :label="$t('sysConfig.logoutNum')">
            <span class="formSpan" :class="{ unSpan: formData.logoutSwitch != '0' }">{{ formData.logoutNum }}</span>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="logoutUnit" :label="$t('sysConfig.logoutUnit')">
            <span class="formSpan" :class="{ unSpan: formData.logoutSwitch != '0' }"> {{ dictMap.timeUnit[formData.logoutUnit] }}</span>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-divider />
          <div class="doBtn">
            <a-space>
              <a-button
                type="primary"
                :loading="load"
                @click="props.pop.open('edit', 1, $t('sysConfig.edit'), $t('sysConfig.system'), {}, get)">
                <template #icon>
                  <icon-edit />
                </template>
                {{ $t('button.edit') }}
              </a-button>
              <a-divider direction="vertical" />
              <a-button :loading="load" @click="get()">
                <template #icon>
                  <icon-sync />
                </template>
                {{ $t('button.sync') }}</a-button
              >
            </a-space>
          </div>
        </a-col>
      </a-row>
    </a-form>
  </a-spin>
</template>

<script lang="ts" setup>
import { onMounted, watch, ref } from 'vue'
import type { Pop } from '@/utils/hooks/pop'
import useLocale from '@/utils/hooks/locale'
import useLoad from '@/utils/hooks/load'
import { dictRead } from '@/api/plat/dict'
import { sysConfigInit, sysConfigGet } from '@/api/plat/sysConfig'
// 入参读取
const props = defineProps({
  pop: {
    type: Object,
    required: true,
    default: () => {
      return {} as Pop
    }
  }
})
// 当前语言
const { currentLocale } = useLocale()
// 加载中变量
const { load, setLoad } = useLoad(false)
// 表单数据初始化
const formData = sysConfigInit()
async function get() {
  setLoad(true)
  try {
    const res = await sysConfigGet()
    formData.value = res.data
    return
  } catch (err) {
    // DoNothing CommonPopUp
  } finally {
    setLoad(false)
  }
}
// 初始化字典对象
const dictList = ref({ timeUnit: [] })
const dictMap = ref({ timeUnit: {} as any })
// 字段初始化
async function dictInit() {
  // 指定字典Key
  await dictRead({ groupKeys: ['timeUnit'] }).then((r) => {
    dictList.value = r.data.list
    dictMap.value = r.data.map
    props.pop.dictList = dictList
    props.pop.dictMap = dictMap
  })
}
// 初始化
function init() {
  dictInit()
  get()
}
// 页面渲染
onMounted(() => {
  init()
})
// 语言监听
watch(currentLocale, (n, o) => {
  if (n !== o) {
    dictInit()
  }
})
</script>
