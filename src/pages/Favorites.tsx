import { useContext } from "react";
import { Link } from "react-router-dom";
import CardAnime from "../components/CardAnime";
import { FavoritesContext } from "../context/FavoritesContext";
import type Anime from "../types/anime";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Link to="/" className="text-white left-0 top-0 text-2xl fixed ml-4 mt-3 z-10">
        Voltar
      </Link>

      <div className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto pt-16 pb-10">
        <h1 className="text-white text-2xl md:text-3xl font-bold my-6 md:my-8 text-center">
          Meus Favoritos
        </h1>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {favorites.map((fav) => (
              <CardAnime
                key={fav.mal_id}
                anime={{
                  mal_id: fav.mal_id,
                  title: fav.titulo,
                  images: {
                    jpg: {
                      image_url: fav.imagemUrl,
                      large_image_url: fav.imagemUrl,
                    },
                  },
                } as Anime}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-32 md:mt-48 text-center gap-4">
            <p className="text-gray-400 text-lg md:text-xl">
              Nada favoritado ainda.
            </p>
            <Link
              to="/"
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base"
            >
              Explorar animes →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}