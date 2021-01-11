import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
import { ElMessage } from 'element-plus'
import { RequestMethod } from './param'


const toLogin = () => {
    router.replace({
        path: "login"
    })
}

const errorHandle = (status, other) => {
    switch(status) {
        case 401:
            ElMessage.error("登录已过期");
            toLogin();
            break;
        case 403:
            ElMessage.error("没有权限");
            break;
        case 404:
            ElMessage.error("请求的资源不存在");
            break;
        default:
            ElMessage.error(other);
    }
}

export function myRequest(baseUrl, url: string, params = {},method?: RequestMethod) {
    return new Promise((resolve, reject) => {
        var header = {
            "Content-Type": "application/json",
        }
        if (method === null || method === RequestMethod.POST) {
            axios.post(url, params , {headers: header,baseURL:baseUrl})
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
                errorHandle(err.response.status,err.message);
            })
        }else if (method === RequestMethod.GET) {
            axios.get(url, {params: params,baseURL:baseUrl})
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
                errorHandle(err.response.status,err.message);
            })
        }
    })
}
