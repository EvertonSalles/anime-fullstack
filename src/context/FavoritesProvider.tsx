import { useState, useEffect, type ReactNode } from "react";
import axios from "axios";
import { FavoritesContext } from "./FavoritesContext";

interface Favorite {
  mal_id: number;
  titulo: string;
  imagemUrl: string;
}

export default function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  async function loadFavorites() {
    const token = localStorage.getItem("token");

    if (!token) {
      setFavorites([]);
      return;
    }

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/animes/favorites`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setFavorites(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  }

 useEffect(() => {
  const init = async () => {
    await loadFavorites();
  };
  init();

  
  window.addEventListener("storage", init);
  return () => window.removeEventListener("storage", init);
}, []);

  const isFavorite = (mal_id: number) => {
    return favorites.some((fav) => fav.mal_id === mal_id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, loadFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}