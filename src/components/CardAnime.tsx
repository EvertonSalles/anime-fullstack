import { Link } from 'react-router-dom';
import type Anime from '../types/anime';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



interface AnimeCardProps{
    anime:Anime;
}

export default function CardAnime({ anime }: AnimeCardProps) {
    return(
       
            <Link to={`/details/${anime.mal_id}`} className=' flex flex-col relative mx-auto w-70 h-96 mt-4 rounded-xl bg-gray-600  lg:w-96'>
                 <h1 className='mx-auto p-2 text-white'>{anime.title}</h1>
                <div className='overflow-hidden h-80 lg:h-80'>
                  <img className='mx-auto w-auto object-cover'  src={anime.images.jpg.image_url}  alt={anime.title} />
                  
                </div>      
                <button className=' absolute top-2 right-2'>            
                <FontAwesomeIcon
                icon={faHeart}
                className="text-white hover:text-red-800 cursor-pointer  w-min"
                />
                </button>
            </Link>   
            
    )
}
