import UserMenu from "./UserMenu"
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function UserModal() {
  const [open, setOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <div className="relative">
      <div
        className='w-12 h-12 bg-gray-400 rounded-full cursor-pointer flex items-center justify-center'
        onClick={() => setOpen(!open)}
      >
        {/* Inicial do usuário dentro do círculo */}
        <span className="text-white font-bold text-lg">
          {loading ? "..." : user ? user.nomeUsuario[0].toUpperCase() : "?"}
        </span>
      </div>

      {/* Nome aparece ao lado do círculo */}
      {!loading && user && (
        <span className="hidden md:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-300 whitespace-nowrap">
          {user.nomeUsuario}
        </span>
      )}

      {open && <UserMenu logout={() => { localStorage.removeItem("token"); window.location.href = "/login"; }} />}
    </div>
  );
}