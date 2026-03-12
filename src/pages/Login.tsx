export default function Login() {
    return(
        <div className="bg-amber-500 h-screen flex justify-center items-center ">
        <form action="" className=" bg-red-400 h-56"> 
            <input type="text" placeholder="Digite seu e-mail ou usuário"/>
            <input type="password" placeholder="senha"/>
            <button>Criar conta</button>
            <a href="#">Esqueci a senha</a>
        </form>
        </div>
    )
}