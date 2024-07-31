import axios from 'axios'

export function authLogin(req: any) {
  return axios.post('/auth/login', req)
}

export function authReset(req: any) {
  return axios.post('/auth/reset', req)
}
