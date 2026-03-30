import  { useState } from "react";
import axios from "axios";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
interface AnimeCardProps {
    anime: {
        mal_id: number;
        title: string;
        images: {
            jpg: {
                image_url: string;
            };
        };
    };
}


export default function CardAnime({ anime }: AnimeCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const token = localStorage.getItem("token"); 
    const handleToggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault(); 
        if (!token) {
            alert("Faça login para favoritar!");
            return;
        }

        try {
            if (!isFavorite) {
              
                await axios.post("http://localhost:3000/animes/favorites", {
                    mal_id: anime.mal_id,
                    titulo: anime.title,
                    imagemUrl: anime.images.jpg.image_url
                }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setIsFavorite(true);
            } else {
                
                await axios.delete(`http://localhost:3000/animes/favorites/${anime.mal_id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setIsFavorite(false);
            }
        } catch (error) {
            console.error("Erro ao processar favorito:", error);
        }
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
                onClick={handleToggleFavorite}
                className='absolute top-5 right-2 z-10 p-2  cursor-pointer'
            >
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`${isFavorite ? "text-red-500" : "text-white"} transition-colors`}
                />
            </button>
        </div>
    );
}