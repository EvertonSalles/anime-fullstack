import { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import type Anime from '../types/anime';


interface AnimeCardProps {
    anime: Anime;
}


export default function CardAnime({ anime }: AnimeCardProps) {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavorite = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsFavorited(!isFavorited);
        
        
    };
   
    return (
        <div className='relative mx-auto w-70 lg:w-96'>
            <Link to={`/details/${anime.mal_id}`} className='flex flex-col mt-4 rounded-xl bg-gray-600 h-96'>
                <h1 className='mx-auto p-2 text-white  w-full text-center'>{anime.title}</h1>
                <div className='overflow-hidden h-80'>
                    <img className='mx-auto h-full object-cover  ' src={anime.images.jpg.image_url} alt={anime.title} />
                </div>
            </Link>
            <button 
                onClick={handleFavorite}
                className='absolute top-3 right-3  p-2  cursor-pointer  w-0 h-0'
            >
                <FontAwesomeIcon
                    icon={faHeart}
                   className={` transition-colors duration-300 ${
                        isFavorited ? "text-red-500" : "text-white"
                    }`}
                />
            </button>
          
        </div>
    );
}






