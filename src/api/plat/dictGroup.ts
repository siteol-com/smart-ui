import axios from 'axios'

// 字典分组读取（含Map翻译）
export function dictGroupRead() {
  return axios.post('/plat/dictGroup/read')
}
