import { myRequest } from "./http";
import devConstants from "../common/constants-dev";
import prdConstants from "../common/constants-prd";

const constants = process.env.NODE_ENV === "production" ? prdConstants: devConstants;
const openApiUrl = `${constants.openApiUrl}`
const myApiUrl = `${constants.myApiUrl}` 

// 开放接口，实时段子
// export const getJoke = params => {
//     return myRequest(openApiUrl , "/getJoke",params,1).then((res: any) => res.result);
// }

// 获取用户信息
export const getUserInfo = (params: any) => {
    return myRequest(myApiUrl, "/admin/info",params,1).then((res: any) => res.result);
}