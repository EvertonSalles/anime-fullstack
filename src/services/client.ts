import axios from "axios";

export const Animeapi = axios.create({
    baseURL: "https://api.jikan.moe/v4/"
})

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});