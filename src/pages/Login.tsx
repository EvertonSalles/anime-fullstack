import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/client';
import type { LoginFormData } from '../types/login';



export default function Login() {
    const navigate = useNavigate();

    const{ 
        register,
        handleSubmit
    } = useForm<LoginFormData>()

    const onSubmit = async (data: LoginFormData) =>{
         try{
           const response = await api.post('/users/login',data);
            
            const { token } = response.data;

            localStorage.setItem('token', token);

            alert('Login realizado com sucesso')
            navigate('/');
        }catch(error){
            console.error(error)
            console.log(data)
        }
        
    }
    
    return(
        <div className="flex items-center justify-center  min-h-screen bg-gray-950  px-4 ">
            
        <form action="LoginForm" className="w-full max-w-md bg-gray-500 p-8 rounded-2xl shadow-2xl flex flex-col gap-6 " onSubmit={handleSubmit(onSubmit)}> 

            <h1 className="text-white text-2xl font-bold text-center">Login</h1>
            
            <div className="flex flex-col gap-2">
            <label className="text-xs text-white ml-1">usuário:</label>
             <input type="text"
             {...register('nomeUsuario')} 
             placeholder="Seu usuário" 
             className=" bg-gray-700 w-full px-4 py-3 rounded-xl outline-none text-white placeholder:text-white"/>
            </div>

            <div className="flex flex-col gap-2 ">
            <label className="text-xs text-white">Senha:</label>
            <input type="password"
            {...register('senha')}
            placeholder="******" 
            className=" bg-gray-700 w-full px-4 py-3 rounded-xl outline-none text-white placeholder:text-white placeholder:text-sm "/>
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

