import {api} from './api'
import type Anime from '../types/anime'


export async function getAnimes():Promise<Anime[]>{
    const res = await api.get('/top/anime')
    return res.data.data
}