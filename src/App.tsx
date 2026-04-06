import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Favorites from './pages/Favorites';
import DetailsAnime from './pages/DetailsAnime';
import FavoritesProvider from './context/FavoritesProvider'; 

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      
      <FavoritesProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route 
            path="/favorites" 
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            } 
          />

          <Route path="/details/:id" element={<DetailsAnime />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}