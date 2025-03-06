/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Register({ firebaseDao }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const navigate = useNavigate()
    
    const handleNavigate = (path) => {
        navigate(path)
    }

    const handleSignUp = async () => {
        if (password != repeatPassword) {
            alert('Las contraseñas no coinciden')
        } else {
            await firebaseDao.createUser(email, password)
            console.log(firebaseDao.getUser())
            if (firebaseDao.getUser() != null) {
                handleNavigate('/adminlandpage')
            }
        }
    }

    return (
        <div className="h-svh w-svw">
            <div className="flex h-full flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-2xl font-bold">Registrarse</h1>
                    <input type="text" placeholder="Email" className="border-2 rounded-md px-3" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <input type="password" placeholder="Contra" className="border-2 rounded-md px-3" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    <input type="password" placeholder="Repetir Contra" className="border-2 rounded-md px-3" value={repeatPassword} onChange={(e) => {setRepeatPassword(e.target.value)}} />
                    <button className="w-full border-2 rounded-2xl pb-1 bg-black text-white" onClick={handleSignUp}>Enviar</button>
                    <button className="underline" onClick={() => {handleNavigate('/')}}>Ya tengo una cuenta</button>
                </div>
            </div>
        </div>
    )
}