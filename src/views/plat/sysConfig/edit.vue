<template>
  <a-form label-align="left" class="form" layout="vertical" :model="formData" @submit="submit">
    <a-row :gutter="20">
      <a-col :span="24">
        <a-form-item field="loginSwitch" :label="$t('sysConfig.loginSwitch')">
          <template #extra>
            <div>{{ $t('sysConfig.loginSwitch.tips') }}</div>
          </template>
          <a-switch v-model="formData.loginSwitch" :checked-value="'0'" :unchecked-value="'1'" @change="reFormData">
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
          <a-input-number
            v-model="formData.loginNum"
            :disabled="formData.loginSwitch != '0'"
            :min="1"
            :max="9999999999"
            allow-clear
            show-word-limit
            model-event="input" />
        </a-form-item>
      </a-col>
      <a-col :span="24">
        <a-form-item field="loginFailSwitch" :label="$t('sysConfig.loginFailSwitch')">
          <template #extra>
            <div>{{ $t('sysConfig.loginFailSwitch.tips') }}</div>
          </template>
          <a-switch v-model="formData.loginFailSwitch" :checked-value="'0'" :unchecked-value="'1'" @change="reFormData">
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
          <a-input-number
            v-model="formData.loginFailNum"
            :disabled="formData.loginFailSwitch != '0'"
            :min="1"
            :max="9999999999"
            allow-clear
            show-word-limit
            model-event="input" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item field="loginFailUnit" :label="$t('sysConfig.loginFailUnit')">
          <a-select
            :disabled="formData.loginFailSwitch != '0'"
            v-model="formData.loginFailUnit"
            :options="pop.dictList.timeUnit"
            allow-search
            :placeholder="$t('rule.select')" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item field="loginFailLockNum" :label="$t('sysConfig.loginFailLockNum')">
          <a-input-number
            v-model="formData.loginFailLockNum"
            :disabled="formData.loginFailSwitch != '0'"
            :min="1"
            :max="9999999999"
            allow-clear
            show-word-limit
            model-event="input" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item field="loginFailLockUnit" :label="$t('sysConfig.loginFailLockUnit')">
          <a-select
            :disabled="formData.loginFailSwitch != '0'"
            v-model="formData.loginFailLockUnit"
            :options="pop.dictList.timeUnit"
            allow-search
            :placeholder="$t('rule.select')" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item field="loginFailTryNum" :label="$t('sysConfig.loginFailTryNum')">
          <a-input-number
            v-model="formData.loginFailTryNum"
            :disabled="formData.loginFailSwitch != '0'"
            :min="1"
            :max="9999999999"
            allow-clear
            show-word-limit
            model-event="input" />
        </a-form-item>
      </a-col>
      <a-col :span="24">
        <a-form-item field="logoutSwitch" :label="$t('sysConfig.logoutSwitch')">
          <template #extra>
            <div>{{ $t('sysConfig.logoutSwitch.tips') }}</div>
          </template>
          <a-switch v-model="formData.logoutSwitch" :checked-value="'0'" :unchecked-value="'1'" @change="reFormData">
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
          <a-input-number
            v-model="formData.logoutNum"
            :disabled="formData.logoutSwitch != '0'"
            :min="1"
            :max="9999999999"
            allow-clear
            show-word-limit
            model-event="input" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item field="logoutUnit" :label="$t('sysConfig.logoutUnit')">
          <a-select
            :disabled="formData.logoutSwitch != '0'"
            v-model="formData.logoutUnit"
            :options="pop.dictList.timeUnit"
            allow-search
            :placeholder="$t('rule.select')" />
        </a-form-item>
      </a-col>
      <a-col :span="24">
        <a-divider />
        <div class="doBtn">
          <a-space>
            <a-button type="primary" html-type="submit" :loading="load">
              <template #icon>
                <icon-check />
              </template>
              {{ $t('button.submit') }}
            </a-button>
            <a-divider direction="vertical" />
            <a-button @click="pop.close()">
              <template #icon>
                <icon-close />
              </template>
              {{ $t('button.cancel') }}</a-button
            >
          </a-space>
        </div>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import type { Pop } from '@/utils/hooks/pop'
import useLoad from '@/utils/hooks/load'
import { sysConfigInit, sysConfigGet, sysConfigEdit } from '@/api/plat/sysConfig'
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
//  根据选择调节参数
function reFormData() {
  if (formData.value.loginSwitch != '0') {
    formData.value.loginNum = 1
  }
  if (formData.value.loginFailSwitch != '0') {
    formData.value.loginFailUnit = '0'
    formData.value.loginFailNum = 1
    formData.value.loginFailLockUnit = '0'
    formData.value.loginFailLockNum = 1
    formData.value.loginFailTryNum = 1
  }
  if (formData.value.logoutSwitch != '0') {
    formData.value.logoutUnit = '0'
    formData.value.logoutNum = 1
  }
}

// const dictAdd = ref<FormInstance>();
// 提交数据
const submit = async ({ errors, values }: { errors: any; values: any }) => {
  if (load.value) return
  if (!errors) {
    setLoad(true)
    try {
      // const res = await dictAdd.value?.validate();
      await sysConfigEdit(values)
      // Pop Close & Back
      props.pop.close()
      props.pop.callBack()
    } catch (err) {
      // DoNothing
    } finally {
      setLoad(false)
    }
  }
}
// 页面渲染
onMounted(() => {
  // Nothing
  get()
})
</script>
