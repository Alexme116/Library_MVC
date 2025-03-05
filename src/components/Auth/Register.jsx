import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()
    
    const handleNavigate = (path) => {
        navigate(path)
    }

    return (
        <div className="h-svh w-svw">
            <div className="flex h-full flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-2xl font-bold">Registrarse</h1>
                    <input type="text" placeholder="Usuario" className="border-2 rounded-md px-3" />
                    <input type="text" placeholder="Contra" className="border-2 rounded-md px-3" />
                    <input type="text" placeholder="Repetir Contra" className="border-2 rounded-md px-3" />
                    <button className="w-full border-2 rounded-2xl pb-1 bg-black text-white">Enviar</button>
                    <button onClick={() => {handleNavigate('/')}} className="underline">Ya tengo una cuenta</button>
                </div>
            </div>
        </div>
    )
}