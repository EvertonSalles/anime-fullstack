import { useContext } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import axios from "axios";
import type Anime from '../types/anime';
import  {FavoritesContext}  from "../context/FavoritesContext";

interface AnimeCardProps {
    anime: Anime;
}

export default function CardAnime({ anime }: AnimeCardProps) {
    
    const { favorites, loadFavorites } = useContext(FavoritesContext);
    const token = localStorage.getItem("token");

    
    const isFavorited = favorites.some((fav) => fav.mal_id === anime.mal_id);

    const handleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault(); 

        if (!token) {
            alert("Faça login para favoritar!");
            return;
        }

        try {
            
            await axios.post(`${import.meta.env.VITE_API_URL}/animes/favorites`, {
                mal_id: anime.mal_id,
                titulo: anime.title,
                imagemUrl: anime.images.jpg.image_url
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            
            loadFavorites(); 

        } catch (error) {
            console.error("Erro ao processar favorito:", error);
        }
    };

    return (
       <div className='relative mx-auto w-full max-w-sm lg:max-w-md'>
            <Link to={`/details/${anime.mal_id}`} className='flex flex-col mt-4 rounded-xl bg-gray-600 h-96'>
                <h1 className='mx-auto p-2 text-white w-full text-center'>{anime.title}</h1>
                <div className='overflow-hidden h-80'>
                    <img className='mx-auto h-full object-cover' src={anime.images.jpg.image_url} alt={anime.title} />
                </div>
            </Link>
            
            <button 
                onClick={handleFavorite}
                className='absolute top-3 right-3 p-2 cursor-pointer w-0 h-0'
            >
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`transition-colors duration-300 ${
                        isFavorited ? "text-red-500" : "text-white"
                    }`}
                />
            </button>
        </div>
    );
}