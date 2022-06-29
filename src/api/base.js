// import {VUE_APP_BASE_API} from "../../config/webpackGlobalConfig";
// class BaseApiEnum {
//     static localApi = new BaseApiEnum('/local')
//     constructor(url) {
//         this.url = VUE_APP_BASE_API + url
//     }
//     toString() {
//         return `BaseApiEnum.${this.url}`
//     }
// }
// export { BaseApiEnum }

import { service } from "../utils/http/request";
const request = service;
export const testApi = () => {
    return request({
        url: `/service/swagger/testDecrypt`,
        method: "POST",
        data: {
            age: 18,
            name: "Bob"
        }
    });
};
