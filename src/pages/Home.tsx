import Header from '../components/Header'
import CardAnime from '../components/CardAnime'
import { useEffect, useState, useCallback } from "react" 
import type Anime from "../types/anime"
import { Animeapi } from '../services/client'
import axios from 'axios'

export default function Home(){
  const [animes, setAnimes] = useState<Anime[]>([])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("top") 
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  
  const fetchAnimes = useCallback(async () => {
    try {
      setLoading(true)
      let res; 

      if (category === "search" && debouncedSearch) {
     
        res = await axios.get("http://localhost:3000/api/search", {
          params: { q: debouncedSearch, page: page }
        })
      } else {
       
        const url = category.startsWith("genre-") 
          ? `/anime?genres=${category.split("-")[1]}&page=${page}`
          : (category === "new" ? `/seasons/now?page=${page}` : `/top/anime?page=${page}`)
        
        res = await Animeapi.get(url)
      }

      if (res.data?.data) {
        setAnimes(prev => (page === 1 ? res.data.data : [...prev, ...res.data.data]))
      }

    } catch (error) {
      console.log("Erro ao carregar:", error)
    } finally {
      setLoading(false)
    }
  }, [category, debouncedSearch, page]) 

 
  useEffect(() => {
    if (search.trim() === "") {
      if (category === "search") {
        setCategory("top")
        setPage(1)
        setAnimes([])
      }
      return
    }

    const handler = setTimeout(() => {
      setDebouncedSearch(search)
      setCategory("search") 
      setPage(1)           
      setAnimes([])         
    }, 500)

    return () => clearTimeout(handler)
  }, [search, category]) 

 
  function handleCategory(newCategory: string) {
    if (newCategory !== "search") {
      setSearch("") 
      setDebouncedSearch("")
    }
    setCategory(newCategory)
    setPage(1)
    setAnimes([])
  }

 
  useEffect(() => {
    fetchAnimes()
  }, [fetchAnimes])

  return(
    <div className="bg-gray-900 min-h-screen">
      <Header 
        handleCategory={handleCategory}
        activeCategory={category}
        setSearch={setSearch}
        searchValue={search}
      />

      <main className='w-[90%] mx-auto pb-10'> 
        
        <div className='mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {animes.map((item) => (
            <CardAnime 
              key={`${item.mal_id}-${category}-${page}`} 
              anime={item}
            />
          ))}
        </div>

        {loading && (
          <p className="text-white text-center mt-4">
            Carregando...
          </p>
        )}

        {}
        {animes.length > 0 && !loading && (
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => setPage(prev => prev + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
              Carregar mais
            </button>
          </div>
        )}

      </main> 
    </div>
  )
}