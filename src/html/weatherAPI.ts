import { $host } from ".";

export const fetchWeather = async (lat: string, lng: string) => {
    const { data } = await $host.get(`api/current?lat=${lat}&lon=${lng}`);
    return data;
}
