import { Link } from 'react-router-dom';
import type Anime from '../types/anime';

interface AnimeCardProps{
    anime:Anime;
}

export default function CardAnime({ anime }: AnimeCardProps) {
    return(
            <Link to="{`/details/${anime.mal_id}`}" className=' flex flex-col mx-auto w-70 h-96 mt-4 rounded-xl bg-gray-600  lg:w-96'>
                 <h1 className='mx-auto p-2 text-white'>{anime.title}</h1>
                <div className='overflow-hidden h-80 lg:h-80'>
                  <img className='mx-auto w-auto object-cover'  src={anime.images.jpg.image_url}  alt={anime.title} />
                </div>                  
            </Link>   
    )
}
