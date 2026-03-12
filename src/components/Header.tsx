import { Link } from 'react-router-dom'

export default function Header () {
    return(
            <header className=" fixed top-0 w-full mx-auto  h-16 bg-gray-600 text-white ">
                <div className=" w-[80%] md:w-[90%] flex flex-row justify-between items-center  mx-auto h-full ">
                <h1 className="text-md  md:text-2xl ">Animes React</h1>
                <nav className="hidden md:flex  md:w-auto ">
                    <ul className="flex gap-6 ">
                        <li className="hover:text-gray-400"><a href="#">Todos</a></li>
                        <li className="hover:text-gray-400"><a href="#">Destaques</a></li>
                        <li className="hover:text-gray-400"><a href="#">Novidades</a></li>
                        <li className="hover:text-gray-400"><a href="#">Categorias</a></li>
                    </ul>
                </nav>
                    <input className=" bg-gray-400 rounded-2xl py-1.5 px-4 w-52 outline-none text-white placeholder:text-white " type="text" placeholder="Buscar anime"/>
                    <Link to="{/login}" className='hover:text-blue-400'>Login</Link>
                    <Link to="{/register}" className='hover:text-blue-400'>Register</Link>
                    </div> {/*container*/}
            </header>

    )
}