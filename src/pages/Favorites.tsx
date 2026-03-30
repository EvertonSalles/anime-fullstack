import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardAnime from "../components/CardAnime";


interface FavoriteItem {
  id: string;
  mal_id: number;
  titulo: string;
  imagemUrl: string;
}

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function loadFavorites() {
      try {
        const res = await axios.get("http://localhost:3000/animes/favorites", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFavorites(res.data);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      } finally {
        setLoading(false);
      }
    }

    if (token) loadFavorites();
  }, [token]);

  return (
    <div className="bg-gray-900 min-h-screen pb-10">
      <div className="w-[90%] mx-auto pt-6">
        <Link 
          className="text-white bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors" 
          to="/"
        >
          ← Voltar para Home
        </Link>
        <h1 className="text-white text-3xl font-bold mt-8">Meus Favoritos</h1>
      </div>

      <main className="w-[90%] mx-auto mt-10">
        {loading ? (
          <p className="text-white text-center">Carregando...</p>
        ) : favorites.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((fav: FavoriteItem) => (
             
              <CardAnime 
                key={fav.id} 
                anime={{
                  mal_id: fav.mal_id,
                  title: fav.titulo,
                  images: { jpg: { image_url: fav.imagemUrl } }
                }} 
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-20">Nada favoritado ainda.</p>
        )}
      </main>
    </div>
  );
}