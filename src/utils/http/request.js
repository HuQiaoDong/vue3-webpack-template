import axios from "axios";
export const service = axios.create({
    baseURL: ENV.BASE_API, // url = base url + request url
    timeout: 20000, // request timeout
});

const axiosRequest = (config) => {
    // do something before request is sent
    return config;
};

const axiosResponse = (response) => {
    return response.data;
};

const axiosError = (error) => {
    console.log("request error:", error);
};

/* 总请求拦截 */
service.interceptors.request.use(axiosRequest, axiosError);
/* 总响应拦截 */
service.interceptors.response.use(axiosResponse, axiosError);
