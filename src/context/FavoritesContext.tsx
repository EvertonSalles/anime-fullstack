import { createContext } from "react";

export interface Favorite {
  mal_id: number;
  titulo: string;
  imagemUrl: string;
}

interface FavoritesContextData {
  favorites: Favorite[];
  loadFavorites: () => Promise<void>;
  isFavorite: (mal_id: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);