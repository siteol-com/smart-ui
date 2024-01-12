import { MAIN_LAYOUT } from './base'
import type { RouteRecordRaw } from 'vue-router'

// 平台路由
const PLAT: RouteRecordRaw = {
  path: '/plat', // 平台管理
  name: 'Plat', // 充当权限Alias
  component: MAIN_LAYOUT, // 布局
  meta: { locale: 'menu.Plat', icon: 'icon-settings' }, // 国际化、图标、鉴权标识
  children: [
    {
      path: 'dept', // 集团部门
      name: 'PlatDept',
      component: () => import('@/views/plat/dept/index.vue'),
      meta: { locale: 'menu.PlatDept', requiresAuth: false }
    },
    {
      path: 'role', // 角色配置
      name: 'PlatRole',
      component: () => import('@/views/plat/role/index.vue'),
      meta: { locale: 'menu.PlatRole', requiresAuth: false }
    },
    {
      path: 'account', // 登陆账号
      name: 'PlatAccount',
      component: () => import('@/views/plat/account/index.vue'),
      meta: { locale: 'menu.PlatAccount', requiresAuth: false }
    },
    {
      path: 'permission', // 访问权限 ↓ 超管可见
      name: 'PlatPermission',
      component: () => import('@/views/plat/permission/index.vue'),
      meta: { locale: 'menu.PlatPermission', requiresAuth: false }
    },
    {
      path: 'router', // 路由接口
      name: 'PlatRouter',
      component: () => import('@/views/plat/router/index.vue'),
      meta: { locale: 'menu.PlatRouter', requiresAuth: false }
    },
    {
      path: 'response', // 响应文言
      name: 'PlatResponse',
      component: () => import('@/views/plat/response/index.vue'),
      meta: { locale: 'menu.PlatResponse', requiresAuth: false }
    },
    {
      path: 'dict', // 数据字典
      name: 'PlatDict',
      component: () => import('@/views/plat/dict/index.vue'),
      meta: { locale: 'menu.PlatDict', requiresAuth: false }
    }
  ]
}

export default PLAT
