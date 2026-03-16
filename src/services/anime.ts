import {Animeapi} from './client'
import type Anime from '../types/anime'


export async function getAnimes(page: number = 1):Promise<Anime>{
    const res = await Animeapi.get('/top/anime', {params:{page}})
    return res.data.data     
}

export async function getAnimesById(id: string):Promise<Anime>{
    const res = await Animeapi.get(`/animes${id}`)
    return res.data.data     
}