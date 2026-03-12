import Header from '../components/Header'
import CardAnime from '../components/CardAnime'
import { useEffect, useState } from "react";
import { getAnimes } from "../services/anime";
import type  Anime  from "../types/anime";

export default function Home(){
    const [animes, setAnimes] = useState<Anime[]>([]);
  

    useEffect(()=>{
        getAnimes().then(setAnimes);
    }, []);
    return(
        <div>
            <Header/>
            <main className=' w-[90%] mx-auto h-screen "'> 
            <div className='mt-24 grid grid-cols-1 gap-4  bg-gray-500 md:grid-cols-2 lg:grid-cols-3'>
                {animes.map((item) => (
                <CardAnime 
                key={item.mal_id}
                anime={item} />
                ))}
            </div>{ /* grid*/ }
           </main> {/* grid-area*/}
        </div>
    )
}