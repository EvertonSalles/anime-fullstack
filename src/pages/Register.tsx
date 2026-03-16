/*import { useForm} from 'react-hook-form'*/
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom"
import {api} from '../services/client'
import type {RegisterFormData} from '../types/register'



export default function Register() {
    const navigate = useNavigate();


    const {
        register,
        handleSubmit
    } = useForm<RegisterFormData>()

    const  onSubmit = async (data: RegisterFormData) =>{
        try{
            await api.post('/users',data);
            alert('usuario cadastrado com sucesso');
            navigate('/login');
        }catch( error){
            console.error(error);
            alert('Erro ao cadastrar')
        }
        console.log(data)
    }

    return(
         <div className="flex items-center justify-center  min-h-screen bg-gray-950  px-4 " >
        <form  className="w-full max-w-md bg-gray-500 p-8 rounded-2xl shadow-2xl flex flex-col     gap-6 " onSubmit={handleSubmit(onSubmit)}> 

            <h1 className="text-white text-2xl font-bold text-center">Cadastro</h1>
            
            <div className="flex items-center  gap-6">
           <div className=" flex flex-col gap-2 ">
            <label className="text-xs text-white ml-1">Nome:</label>
            <input type="text" 
            {...register('nome')}   
            placeholder="Nome"
            className="bg-gray-700 w-full  py-3 rounded-xl outline-none text-white placeholder:text-white px-4"/>
           </div>

           <div className="flex flex-col gap-2"> 
            <label className="text-xs text-white ml-1">Sobrenome:</label>
            <input type="text"
            {...register('sobrenome')} 
            placeholder="Sobrenome" 
            className="bg-gray-700 w-full  py-3 rounded-xl outline-none text-white placeholder:text-white px-4"/>
            </div>

            </div>

           <div className="flex flex-col gap-2">
                <label className="text-xs text-white ml-1">Usuario</label>
                <input type="text"
                {...register('nomeUsuario')} 
                placeholder="Nome de Usuario" 
                className="bg-gray-700 w-full px-4 py-3 rounded-xl outline-none text-white placeholder:text-white"/>
           </div>

            <div className="flex flex-col gap-2">
            <label className="text-xs text-white ml-1">Email </label>
             <input type="email"
             {...register('email')} 
             placeholder="Email" 
             className=" bg-gray-700 w-full px-4 py-3 rounded-xl outline-none text-white placeholder:text-white"/>
            </div>




            <div className="flex flex-col gap-2 ">
            <label className="text-xs text-white">Senha:</label>
            <input type="password" 
            {...register('senha')}
            placeholder="******" 
            className=" bg-gray-700 w-full px-4 py-3 rounded-xl outline-none text-white placeholder:text-white placeholder:text-sm "/>
            </div>

            <button type='submit' className="bg-gray-800 mx-auto w-[40%] py-3 rounded-2xl cursor-pointer hover:text-black hover:bg-yellow-50 transition-colors duration-500 ease-in text-white">Criar</button>

            <p className="text-white text-md "> Ja tem conta? 
                <Link to="/login" className="text-gray-800 hover:underline m-1">
                Login
                </Link> 
                </p>
            
            
        </form>
        </div>




        
           
        
    )
}