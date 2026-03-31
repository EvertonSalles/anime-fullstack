import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  nome: string;
  nomeUsuario: string;
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { setLoading(false); return; }

    axios.get("http://localhost:3000/users/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => setUser(res.data))
      .catch(() => localStorage.removeItem("token"))
      .finally(() => setLoading(false));
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  }

  return { user, loading, logout };
}