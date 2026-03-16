import UserMenu from "./UserMenu"
import { useEffect, useState } from "react"


export default function UserModal(){
    const [isLogged, setIsLogged] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token) {
            setIsLogged(true)
        }
    }, [])
    return(
       <div className='w-12 h-12 bg-gray-400 rounded-full   '>
           <UserMenu/>
       </div>
    )
}

