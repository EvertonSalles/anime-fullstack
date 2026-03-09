export default function Home(){
    return(
        <div>
            <header className="flex bg-red-700">
                <nav>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </nav>
            </header>

            <div className="bg-blue-700 grid-cols-3 w-[90%] mx-auto h-screen ">
                <div className=" flex flex-col bg-red-900  mx-auto w-[50%] h-96">
                    <h1>Nome anime</h1>
                    <div>
                        <img src="" />
                    </div>
                    <p>sinopse do anime</p>
                </div>
            </div>
        </div>
    )
}