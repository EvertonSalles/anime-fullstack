import { Link } from "react-router-dom"
import type Anime from "../types/anime"
import { useEffect, useState } from "react"
import { Animeapi } from "../services/client"
import { useParams } from "react-router-dom"

export default function DetailsAnime(){
    const [anime,setAnime] = useState<Anime | null>(null)
    const {id} = useParams()

    useEffect(()=>{
        async function fetchAnime(){
            try{
                const res = await Animeapi.get(`/anime/${id}`)
                setAnime(res.data.data)
            }catch(error){
                console.log(error)
            }
        }
        fetchAnime()
    }, [id])
    
    if(!anime){
        return <p className="text-white">Carregando...</p>
    }
    return(
        <div className="">        
            <Link to="/" className="text-white left-0 top-0 text-2xl fixed ml-4 mt-3">Voltar</Link>

        <div className="w-[70%]  mx-auto mt-30 xl:mt-4">

            <div className="flex flex-col items-center  text-white xl:flex-row xl:justify-between min-h-screen">

                <div className="flex w-full lg:w-1/2 justify-center items-center">
                  <img src={anime.images.jpg.large_image_url} className="w-60 md:w-auto md:h-[80%]" />
                </div>

                <div className="flex flex-col w-full lg:w-1/2 items-center text-center lg:text-left gap-2 mt-6 lg:mt-0">      
                   <h1 className="text-2xl font-bold">{anime.title} </h1>
                   <p>episodios: {anime.episodes}</p>
                   <p>{anime.duration}</p>
                   <p>⭐ {anime.score}</p>
                   <p>status: {anime.status}</p>
                   <p>ano: {anime.year}</p>
                   <p className="">sinopse: {anime.synopsis}</p>
                   <p className="">generos: {anime.genres.slice(0,5).map(g => g.name).join(', ')}</p>
                </div>

            </div>
        </div>
        </div>
    )
}