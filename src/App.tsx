import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorites from './pages/Favorites'
import DetailsAnime from './pages/DetailsAnime'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/details/:id" element={<DetailsAnime/>}/>
      </Routes>
    </BrowserRouter>
  )
}