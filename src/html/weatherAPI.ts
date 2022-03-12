import { $host, APIKey } from ".";

export const fetchWeather = async (lat: string, lng: string) => {
    const { data } = await $host.get(`weather?lat=${lat}&lon=${lng}&appid=${APIKey}`);
    return data;
}
