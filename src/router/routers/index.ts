import type { RouteRecordRaw } from 'vue-router'
import base from './base' // 基础路由
import PLAT from './plat' // 平台路由

// 导出路由
const routers: RouteRecordRaw[] = [...base, PLAT]

export default routers
