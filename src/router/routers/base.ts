import type { RouteRecordRaw } from 'vue-router'

export const MAIN_LAYOUT = () => import('@/layout/main.vue')

// 基础路由（免授权路由）
const BASE: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'index',
    meta: { hideInMenu: true }
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/base/index.vue'),
    meta: { hideInMenu: true }
  },
  {
    path: '/center', // 工作台
    name: 'Center', // 充当权限Alias
    component: MAIN_LAYOUT, // 布局
    meta: { locale: 'menu.Center', icon: 'icon-dashboard' }, // 国际化、图标、鉴权标识
    children: [
      {
        path: 'index', // 个人工作台（免授权）
        name: 'CenterIndex',
        component: () => import('@/views/center/index.vue'),
        meta: { locale: 'menu.CenterIndex', requiresAuth: false }
      }
    ]
  }
]

export default BASE
