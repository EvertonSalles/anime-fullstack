import {useEffect, useState} from 'react'
import {getAnimes} from '../services/anime'
import type Anime from '../types/anime'

export default function Animes(){
    const [animes, setAnimes] = useState<Anime[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        async function fetchAnimes(){
            try{
                const data = await getAnimes();
                setAnimes(data);
            }catch(error){
                console.error('Erro ao buscar animes:', error);
            }finally{
                setLoading(false);
            }
        }
        fetchAnimes();
    })


}
