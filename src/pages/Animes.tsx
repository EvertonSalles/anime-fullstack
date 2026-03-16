import {useEffect, useState} from 'react'
import {getAnimes} from '../services/anime'
import { useParams } from 'react-router-dom'
import type Anime from '../types/anime'

export default function Animes(){
    const [anime, setAnime] = useState<Anime | null>(null);
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        async function fetchAnimes(){
            try{
                const data = await getAnimes(id);
                setAnime(data);
            }catch(error){
                console.error('Erro ao buscar animes:', error);
            }finally{
                setLoading(false);
            }
        }
        fetchAnimes();
    },[])
    
    if(loading) return <div>Carregando...</div>
    if(!loading) return <div>Anime nao encontrado...</div>

}
