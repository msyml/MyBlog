import axios from 'axios'
import router from '../router/index'
import { ElMessage } from 'element-plus'
import { RequestMethod } from './param'

const toLogin = () => {
  localStorage.removeItem('token')
  router.replace({
    path: 'login'
  })
}

const errorHandle = (status: number, other: string) => {
  switch (status) {
    case 401:
      ElMessage.error('登录已过期')
      toLogin()
      break
    case 403:
      ElMessage.error('没有权限')
      break
    case 404:
      ElMessage.error('请求的资源不存在')
      break
    default:
      ElMessage.error(other)
  }
}

const resHandle = (code: number) => {
  switch (code) {
    case 200:
      return true
    case 401:
      ElMessage.error('登录已过期')
      toLogin()
      return false
    case 403:
      ElMessage.error('没有权限')
      return false
    case 404:
      ElMessage.error('请求的资源不存在')
      return false
    case 405:
      ElMessage.error('请求类型错误')
      return false
    default:
      ElMessage.error('未知错误，请联系开发人员')
  }
}

export function myRequest(
  baseUrl: string,
  url: string,
  params?: object,
  method?: RequestMethod
) {
  return new Promise((resolve, reject) => {
    const header = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
      WithCredentials: true,
      Authorization: 'Bearer ' + localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : null
    }
    if (method === null || method === RequestMethod.POST) {
      axios
        .post(url, params, { headers: header, baseURL: baseUrl })
        .then((res) => {
          if (resHandle(res.data.code)) {
            resolve(res.data)
          }
        })
        .catch((err) => {
          reject(err)
          errorHandle(err.response.status, err.message)
        })
    } else if (method === RequestMethod.GET) {
      axios
        .get(url, { params: params, baseURL: baseUrl })
        .then((res) => {
          if (resHandle(res.data.code)) {
            resolve(res.data)
          }
        })
        .catch((err) => {
          reject(err)
          errorHandle(err.response.status, err.message)
        })
    }
  })
}
