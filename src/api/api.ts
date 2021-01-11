import { myRequest } from './http'
import devConstants from '../common/constants-dev'
import prdConstants from '../common/constants-prd'

let constants = process.env.NODE_ENV === "production" ? prdConstants: devConstants;
let openApiUrl = `${constants.openApiUrl}`

// 开放接口，实时段子
export const getJoke = params => {
    return myRequest(openApiUrl , "/getJoke",params,1).then((res: any) => res.result);
}