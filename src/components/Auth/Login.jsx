import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    const handleLogin = () => {
        let userType = 'user'
        if(userType != null) {
            handleNavigate('/landpage')
            if (userType === 'user') {
                handleNavigate('/userlandpage')
            } else {
                handleNavigate('/adminlandpage')
            }
        }
    }

    return (
        <div className="h-svh w-svw">
            <div className="flex h-full flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-2xl font-bold">Iniciar sesion</h1>
                    <input type="text" placeholder="Usuario" className="border-2 rounded-md px-3" />
                    <input type="text" placeholder="Contra" className="border-2 rounded-md px-3" />
                    <button onClick={handleLogin} className="w-full border-2 rounded-2xl pb-1 bg-black text-white">Enviar</button>
                    <button onClick={() => {handleNavigate('/register')}} className="underline">No tengo cuenta</button>
                </div>
            </div>
        </div>
    )
}