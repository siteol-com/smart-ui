// 通用弹层处理函数
import { reactive } from 'vue'

export interface Pop {
  pop: boolean
  add: boolean // 创建
  edit: boolean // 编辑
  get: boolean // 查看
  itemId: number
  header: string | boolean
  subHeader: string | boolean
  useObj: any // 需要传递的对象
  dictList: any
  dictMap: any
  open: Function
  close: Function
  callBack: Function
}

export default function usePop() {
  // 通用弹层处理逻辑
  const pop = reactive<Pop>({
    pop: false,
    add: false,
    edit: false,
    get: false,
    itemId: 0,
    header: '',
    subHeader: '',
    useObj: {},
    dictList: [],
    dictMap: {},
    // 打开弹层
    open: (openType: string, itemId: number, header: string, subHeader: string, useObj: any, callBack: Function) => {
      pop.pop = true
      ;(pop as any)[openType] = true
      pop.itemId = itemId
      pop.header = header
      pop.subHeader = subHeader
      pop.useObj = useObj
      pop.callBack = callBack
    },
    // 关闭弹层
    close: () => {
      pop.pop = false
      pop.add = false
      pop.edit = false
      pop.get = false
      pop.itemId = 0
      pop.header = ''
      pop.subHeader = ''
      pop.useObj = {}
      // pop.dictList = []
      // pop.dictMap = {}
      // pop.callBack = () => {}
    },
    callBack: () => {}
  })
  return pop
}
