/* eslint-disable react-hooks/exhaustive-deps */
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
        if (email.trim() === '' || password.trim() === '') {
            alert('No pueden haber campos vacios')
            return
        }

        try {
            await firebaseDao.signIn(email, password)
        } catch (error) {
            alert(`Error: ${error}`)
        }
        if (firebaseDao.getUser() != null) {
            let isAdmin = await firebaseDao.isAdmin(firebaseDao.getUser().email)
            if (isAdmin) {
                handleNavigate('/adminlandpage')
            } else {
                handleNavigate('/userlandpage')
            }
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    }

    useEffect(() => {
        if (firebaseDao.getUser() != null) {
            if (firebaseDao.isAdmin(firebaseDao.getUser().email)) {
                handleNavigate('/adminlandpage')
            } else {
                handleNavigate('/userlandpage')
            }
        }
    }, [])

    return (
        <div className="h-svh w-svw">
            <div className="flex h-full flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-2xl font-bold">Iniciar sesion</h1>
                    <input type="text" placeholder="Email" className="border-2 rounded-md px-3" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <input type="password" placeholder="Contra" className="border-2 rounded-md px-3" value={password} onKeyDown={handleEnter} onChange={(e) => {setPassword(e.target.value)}} />
                    <button onClick={handleLogin} className="w-full border-2 rounded-2xl pb-1 bg-black text-white">Enviar</button>
                    <button onClick={() => {handleNavigate('/register')}} className="underline">No tengo cuenta</button>
                </div>
            </div>
        </div>
    )
}