import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import CardAnime from '../components/CardAnime'
import axios from 'axios'
import type Anime from "../types/anime"

export default function Favorites() {
  const [favorites, setFavorites] = useState<Anime[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFavorites() {
      try {
        // Aqui você vai chamar a sua futura rota de GET favoritos do Back-end
        const res = await axios.get("http://localhost:3000/api/favorites")
        if (res.data) {
          setFavorites(res.data)
        }
      } catch (error) {
        console.log("Erro ao carregar favoritos:", error)
      } finally {
        setLoading(false)
      }
    }

    loadFavorites()
  }, [])

  return (
    <div className="bg-gray-900 min-h-screen pb-10">
      {/* Header simples de navegação */}
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
          <p className="text-white text-center">Carregando seus favoritos...</p>
        ) : favorites.length > 0 ? (
          // O mesmo grid que você usou na Home
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((item) => (
              <CardAnime 
                key={item.mal_id} 
                anime={item} 
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-20">
            Você ainda não favoritou nenhum anime.
          </p>
        )}
      </main>
    </div>
  )
}