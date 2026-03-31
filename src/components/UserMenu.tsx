import { Link } from "react-router-dom"

interface UserMenuProps {
  logout: () => void;
}

export default function UserMenu({ logout }: UserMenuProps) {
  return (
    <div className="absolute right-0 top-14 bg-gray-800 rounded-lg shadow-lg w-40 flex flex-col p-3 gap-3 z-50">
      <Link to="/favorites" className="text-white hover:text-purple-400 transition-colors">
         Favoritos
      </Link>
      <button
        onClick={logout}
        className="text-left text-red-400 hover:text-red-300 transition-colors cursor-pointer"
      >
         Sair
      </button>
    </div>
  );
}