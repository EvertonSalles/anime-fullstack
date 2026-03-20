import Header from '../components/Header'
import CardAnime from '../components/CardAnime'
import { useEffect, useState } from "react"
import type Anime from "../types/anime"
import { Animeapi } from '../services/client'

export default function Home(){
  const [animes, setAnimes] = useState<Anime[]>([])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("top") 
  const [loading, setLoading] = useState(false)
  

  async function fetchAnimes() {
    try {
      setLoading(true)

      let url = ""

      if (category.startsWith("genre-")) {
  const genreId = category.split("-")[1]
  url = `/anime?genres=${genreId}&page=${page}`
} else {
  switch (category) {
    case "top":
      url = `/top/anime?page=${page}`
      break
    case "all":
      url = `/anime?page=${page}`
      break
    case "new":
      url = `/seasons/now?page=${page}`
      break
    default:
      url = `/top/anime?page=${page}`
  }
}

      const res = await Animeapi.get(url)

      setAnimes(prev => 
        page === 1
          ? res.data.data
          : [...prev, ...res.data.data]
      )

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  function handleCategory(newCategory: string) {
    setCategory(newCategory)
    setPage(1)
    setAnimes([])
  }

 
  useEffect(() => {
    fetchAnimes()
  }, [page, category])

  return(
    <div>
      <Header handleCategory={handleCategory}
      activeCategory={category}
      />

      <main className='w-[90%] mx-auto'> 

        
        <div className='mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {animes.map((item) => (
            <CardAnime 
              key={item.mal_id}
              anime={item}
            />
          ))}
        </div>

        
        {loading && (
          <p className="text-white text-center mt-4">
            Carregando...
          </p>
        )}

        
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setPage(prev => prev + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Carregar mais
          </button>
        </div>

      </main> 
    </div>
  )
}