import { useState } from "react"
import UserModal from "./UserModal"
import genresList from "../data/genres"

type HeaderProps = {
  handleCategory: (category: string) => void
  activeCategory: string
  setSearch: (value: string) => void
  searchValue: string
}


export default function Header({ 
  handleCategory, 
  activeCategory, 
  setSearch, 
  searchValue 
}: HeaderProps) {

  const [openGenres, setOpenGenres] = useState(false)

  return (
    <header className="fixed top-0 w-full h-16 bg-gray-600 text-white z-50">
      <div className="w-[90%] md:w-full flex justify-around items-center mx-auto h-full relative">
        <h1 className="text-md md:text-2xl font-bold">
          Animes React
        </h1>

        <nav className="hidden md:flex ">
          <ul className="flex gap-6 ">
            <li>
              <button 
                onClick={() => handleCategory("top")}
                className={activeCategory === "top" ? "text-mauve-900 font-bold" : "cursor-pointer"} 
              >
                Destaques
              </button>
            </li>

            <li>
              <button 
                onClick={() => handleCategory("all")}
                className={activeCategory === "all" ? "text-mauve-900 font-bold" : "cursor-pointer"}
              >
                Todos
              </button>
            </li>

            <li>
              <button 
                onClick={() => handleCategory("new")}
                className={activeCategory === "new" ? "text-mauve-900 font-bold" : "cursor-pointer"}
              >
                Novidades
              </button>
            </li>

            <li className="relative">
              <button 
                onClick={() => setOpenGenres(prev => !prev)}
                className={activeCategory.includes("genre") ? "text-mauve-900 font-bold" : "cursor-pointer"}
              >
                Categorias
              </button>

              {openGenres && (
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-10 left-0 bg-gray-800 p-4 rounded-lg shadow-lg w-48 max-h-60 overflow-y-auto"
                >
                  <div className="flex flex-col gap-2">
                    {genresList.map((genre) => (
                      <button
                        key={genre.id}
                        onClick={() => {
                          handleCategory(`genre-${genre.id}`)
                          setOpenGenres(false)
                        }}
                        className="hover:text-purple-600 text-left"
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <input 
          className="bg-gray-400 rounded-2xl py-1.5 px-4 w-40 md:w-52 outline-none text-white placeholder:text-white"
          type="text"
          placeholder="Buscar anime"
          value={searchValue} 
          onChange={(e) => setSearch(e.target.value)}
        />

        <UserModal />
      </div> 
    </header>
  )
}