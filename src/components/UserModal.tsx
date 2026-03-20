import UserMenu from "./UserMenu"
import { useState } from "react";



export default function UserModal(){
    
const  [open,setOpen] = useState(false);

const toggleModel = () =>{
    setOpen(!open);
}; 

    
    return(
       <div className='w-12 h-12 bg-gray-400 rounded-full   cursor-pointer' onClick={toggleModel}>

           {open && <UserMenu  />}
           
       </div>
    )
}

