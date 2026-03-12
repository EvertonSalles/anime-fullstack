import { Link } from "react-router-dom"

export default function Login() {
    return(
        <div className="flex items-center justify-center  min-h-screen bg-gray-950  px-4 ">
            
        <form action="LoginForm" className="w-full max-w-md bg-gray-500 p-8 rounded-2xl shadow-2xl flex flex-col     gap-6 "> 

            <h1 className="text-white text-2xl font-bold text-center">Login</h1>
            
            <div className="flex flex-col gap-2">
            <label className="text-xs text-white ml-1">Email ou usuário:</label>
             <input type="text" placeholder="Seu usuário" className=" bg-gray-700 w-full px-4 py-3 rounded-xl outline-none text-white placeholder:text-white"/>
            </div>

            <div className="flex flex-col gap-2 ">
            <label className="text-xs text-white">Senha:</label>
            <input type="password" placeholder="******" className=" bg-gray-700 w-full px-4 py-3 rounded-xl outline-none text-white placeholder:text-white placeholder:text-sm "/>
            </div>

            <button className="bg-gray-800 mx-auto w-[40%] py-3 rounded-2xl cursor-pointer hover:text-black hover:bg-yellow-50 transition-colors duration-600 ease-in text-white">Entrar</button>

            <p className="text-white ">Não tem uma conta?
            <Link to="/register" className="text-gray-800 hover:underline m-1 ">
                Registro
            </Link>
                </p>
            
            <a href="#" className="  lg:w-[30%] hover:text-gray-700 text-white hover:underline">Esqueci a senha</a>


        </form>
        </div>
    )
}

