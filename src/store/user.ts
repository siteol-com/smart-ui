import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import routers from '@/router/routers'
import userMenuTree from '@/utils/hooks/menu'
//import { logout as userLogout, getUserInfo } from '@/api/user'
//import { authLogin, AuthLoginReq } from '@/api/open/auth'
import { clearToken } from '@/utils/hooks/token'
import { removeRouteListener } from '@/utils/routeListener'

interface UserState {
  name?: string
  avatar?: string
  permissions: string[] // 权限列表
  menusTree: RouteRecordRaw[] // 菜单树
}

const userStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    permissions: [],
    menusTree: []
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state }
    }
  },

  actions: {
    initMenusTree() {
      const { recursionRouters } = userMenuTree()
      // 初始化用户菜单树
      this.menusTree = recursionRouters(routers)
    },
    // Reset user's information
    resetInfo() {
      this.$reset()
    },

    // Get user's information
    async info() {
      //const res = await getUserInfo()
      //this.setInfo(res.data)
    },

    // 账号登入
    async accountLogin(loginForm: any) {
      try {
        //const res = await authLogin(loginForm)
        // 设置登陆Token
        //setToken(res.data.token)
        console.log(loginForm)
      } catch (err) {
        // 登陆失败清理Token
        // clearToken()
        throw err
      }
    },
    // 登出
    async logout() {
      try {
        // await userLogout()
      } finally {
        this.resetInfo()
        clearToken()
        removeRouteListener()
      }
    }
  }
})

export default userStore
