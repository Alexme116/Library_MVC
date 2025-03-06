/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Login({ firebaseDao }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    const handleLogin = async () => {
        try {
            await firebaseDao.signIn(email, password)
        } catch (error) {
            alert(`Error: ${error}`)
        }
        console.log(firebaseDao.getUser())
        if (firebaseDao.getUser() != null) {
            console.log(firebaseDao.getUser())
            const userType = 'admin'
            if (userType === 'admin') {
                handleNavigate('/adminlandpage')
            } else {
                handleNavigate('/userlandpage')
            }
        }
    }

    useEffect(() => {
        if (firebaseDao.getUser() != null) {
            handleNavigate('/adminlandpage')
        }
    }, [])

    return (
        <div className="h-svh w-svw">
            <div className="flex h-full flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-2xl font-bold">Iniciar sesion</h1>
                    <input type="text" placeholder="Email" className="border-2 rounded-md px-3" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <input type="password" placeholder="Contra" className="border-2 rounded-md px-3" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    <button onClick={handleLogin} className="w-full border-2 rounded-2xl pb-1 bg-black text-white">Enviar</button>
                    <button onClick={() => {handleNavigate('/register')}} className="underline">No tengo cuenta</button>
                </div>
            </div>
        </div>
    )
}