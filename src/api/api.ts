import { myRequest } from './http'
import devConstants from '../common/constants-dev'
import prdConstants from '../common/constants-prd'

const constants = process.env.NODE_ENV === 'production' ? prdConstants : devConstants
const openApiUrl = `${constants.openApiUrl}`
const myApiUrl = `${constants.myApiUrl}`

// 开放接口，实时段子
// export const getJoke = params => {
//     return myRequest(openApiUrl , "/getJoke",params,1).then((res: any) => res.result);
// }

// 获取用户信息
export const getUserInfoApi = (params: any) => {
  return myRequest(myApiUrl, '/admin/info', 1, params).then((res: any) => res.data)
}

// 获取树状菜单列表
export const getMenuList = () => {
  return myRequest(myApiUrl, '/menu/treeList', 1).then((res: any) => res.data)
}

// 登录获取token
export const loginApi = (params: any) => {
  return myRequest(myApiUrl, '/admin/login', 1, params).then((res: any) => res.data)
}

// 登出
export const logoutApi = () => {
  return myRequest(myApiUrl, '/admin/logout', 1).then((res: any) => res.data)
}
