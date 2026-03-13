import axios from "axios";

export const Animeapi = axios.create({
    baseURL: "https://api.jikan.moe/v4/"
})

export const api = axios.create({
    baseURL: 'http://localhost:3000'
});

