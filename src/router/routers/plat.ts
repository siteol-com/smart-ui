import { MAIN_LAYOUT } from './base'
import type { RouteRecordRaw } from 'vue-router'

// 平台路由
const PLAT: RouteRecordRaw = {
  path: '/plat', // 平台管理
  name: 'plat', // 充当权限Alias
  component: MAIN_LAYOUT, // 布局
  meta: { locale: 'menu.plat', icon: 'icon-settings' }, // 国际化、图标、鉴权标识
  children: []
}

export default PLAT
