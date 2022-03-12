import axios, { AxiosRequestConfig } from "axios";

const $host = axios.create({
    baseURL: 'https://fcc-weather-api.glitch.me/'
})

export {
    $host
}