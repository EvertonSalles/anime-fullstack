import { Link } from "react-router-dom"
export default function UserMenu(){
    return(
        <div className=" bg-gray-800 h-40 w-screen mt-14 flex flex-col  cursor-auto" >
            <div className="h-20 my-auto flex flex-col gap-9 ml-1 ">
            <Link to="/favorites" className="w-16">Favoritos</Link> 
            <Link to="/login" className=" w-8">Sair</Link>
            </div>
        </div>
    )
}