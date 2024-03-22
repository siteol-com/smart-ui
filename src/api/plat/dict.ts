import axios from 'axios'
import { ref } from 'vue'

export type dict = {
  id: number // 数据ID
  groupKey: string // 字典分组KEY
  label: string // 字段名称
  labelEn: string // 字段名称（英文）
  choose: string // 是否可被选择 0可选择 1不可选择
  val: string // 字典值（字符型）
  // pid: number // 父级字典ID 默认 1（根数据）
  // sort: number // 字典排序
  remark: string // 字典描述
  // mark: string // 变更标识 0可变更/登陆成功 1禁止变更/登陆失败
  // status: string // 状态 0正常 1锁定 2封存
  //createAt: string // 创建时间
  //updateAt: string // 更新时间
}
export function dictInit() {
  return ref<dict>({
    id: 0,
    groupKey: '',
    label: '',
    labelEn: '',
    choose: '0',
    val: '',
    remark: ''
  })
}

export function dictNextVal(req: string) {
  return axios.post('/plat/dict/nextVal', { groupKey: req })
}

export function dictAdd(req: dict) {
  return axios.post('/plat/dict/add', req)
}

export function dictPage(req: any) {
  return axios.post('/plat/dict/page', req)
}

export function dictGet(req: number) {
  return axios.post('/plat/dict/get', { id: req })
}

export function dictEdit(req: dict) {
  return axios.post('/plat/dict/edit', req)
}

export function dictBro(req: string) {
  return axios.post('/plat/dict/bro', { groupKey: req })
}

export function dictSort(req: any) {
  return axios.post('/plat/dict/sort', req)
}

export function dictDel(req: any) {
  return axios.post('/plat/dict/del', { id: req })
}

export function dictRead(req: any) {
  return axios.post('/plat/dict/read', req)
}
