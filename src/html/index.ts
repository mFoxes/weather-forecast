import axios, { AxiosRequestConfig } from "axios";

const $host = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const APIKey = 'aa65b2a966dfde944f314813ab76c985';

// const GismeteoToken = (config: AxiosRequestConfig<any>) => {
//     config.headers = {
//         "X-Gismeteo-Token": "56b30cb255.3443075"
//     }
//     return config
// }
// $host.interceptors.request.use(GismeteoToken)

export {
    $host
}