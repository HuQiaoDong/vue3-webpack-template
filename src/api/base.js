import {VUE_APP_BASE_API} from "../config/webpackGlobalConfig";
class BaseApiEnum {
    static localApi = new BaseApiEnum('/local')
    constructor(url) {
        this.url = VUE_APP_BASE_API + url
    }
    toString() {
        return `BaseApiEnum.${this.url}`
    }
}
export { BaseApiEnum }
