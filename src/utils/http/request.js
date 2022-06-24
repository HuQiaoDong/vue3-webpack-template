import axios from "axios";
import Crypto from "../Crypto";
export const service = axios.create({
    baseURL: BASE_URL, // url = base url + request url
    timeout: 20000, // request timeout
});

const axiosRequest = (config) => {
    // 对所有POST请加密，必须是json数据提交，不支持表单
    if (config.method === "post" && HTTP_ENCRYPT) {
        config.headers["content-type"] = 'application/json; charset=utf-8'
        config.data = Crypto.EncryptData(JSON.stringify(config.data))
    }
    return config;
};

const axiosResponse = (response) => {
    if(typeof(response.data.data) === "string"){
        response.data.data = Crypto.DecryptData(response.data.data);
    }
    return response.data;
};

const axiosError = (error) => {
    console.log("request error:", error);
    return Promise.reject(error);
};

/* 总请求拦截 */
service.interceptors.request.use(axiosRequest, axiosError);
/* 总响应拦截 */
service.interceptors.response.use(axiosResponse, axiosError);
