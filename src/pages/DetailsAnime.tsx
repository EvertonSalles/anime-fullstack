import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"



export default function DetailsAnime(){
    const {id} = useParams();
    
    return(
        <div className="bg-black">
            <Link to="/" className="text-white">Voltar</Link>
            <div className="bg-gray-700 h-screen w-[90%] mx-auto">
                
            </div>
        </div>
    )
}