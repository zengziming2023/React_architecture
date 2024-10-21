import axios from "axios";


const getBaseUrl = () => {
    return 'http://zeus-gateway.test-5.xiaoyudian.com/zeus'
}

const axiosInstance = axios.create({
    baseURL: getBaseUrl(),
    timeout: 1000 * 10,

})

// 配置拦截器
axiosInstance.interceptors.request.use(config => {
    console.log('request: ' + JSON.stringify(config));

    return config;
}, error => {
    return Promise.reject(error);
})

axiosInstance.interceptors.response.use(response => {
    console.log('response: ' + JSON.stringify(response));
    return response.data;
})


export default axiosInstance;