/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { LibroObject } from "../../models/Objects/LibroObject"
import { searchBook } from "../../controllers/libraryController"

export default function AdminLandPage({ firebaseDao }) {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [genero, setGenero] = useState('')
    const [libros, setLibros] = useState([])
    const [mostrarLibros, setMostrarLibros] = useState([])
    const [toggleLibros, setToggleLibros] = useState(false)

    const navigate = useNavigate()

    const handleLogout = async () => {
        await firebaseDao.signOut()
        navigate('/')
    }

    const clearInputs = () => {
        setTitulo('')
        setAutor('')
        setGenero('')
    }

    const findBook = () => {
        if (titulo.trim() === '' && autor.trim() === '' && genero.trim() === '') {
            setToggleLibros(!toggleLibros)
            return
        }

        let libro = new LibroObject(titulo, autor, genero)
        const books = searchBook(libros, libro)
        if(books == []){
            alert(`No se encontro ningun libro ${titulo} ${autor} ${genero}`)
        } else {
            setMostrarLibros(books)
        }
        clearInputs()
    }

    const handleBorrowBook = async (index) => {
        let libro = mostrarLibros[index]
        if(libro.estado === 'prestado'){
            libro.estado = 'disponible'
        } else {
            libro.estado = 'prestado'
        }
        try {
            await firebaseDao.updateLibro(libro)
            if(libro.estado === 'prestado'){
                alert('Libro prestado')
            } else {
                alert('Libro regresado')
            }
            setToggleLibros(!toggleLibros)
        } catch (error) {
            alert(`Error prestando libro: ${error}`)
        }
    }

    useEffect(() => {
        if (firebaseDao.getUser() == null) {
            navigate('/')
        }

        const getLibros = async () => {
            const libros = await firebaseDao.getLibros()
            setLibros(libros)
            setMostrarLibros(libros)
        }
        getLibros()
    }, [toggleLibros])

    return (
        <div className="h-svh w-svw">
            {/* Logout Button */}
            <button onClick={handleLogout} className="absolute top-10 right-10 border-2 rounded-full px-3 pt-1 pb-2 bg-black">
                <h1 className=" text-white">Logout</h1>
            </button>

            {/* Main */}
            <div className="flex h-full flex-col items-center">
                {/* Title */}
                <h1 className="text-2xl font-bold py-5">Libreria</h1>

                {/* Forms */}
                <div className="flex flex-col gap-5 w-fit">
                    <p>No es necesario llenar todos los campos para buscar</p>
                    <input type="text" placeholder="Titulo" value={titulo} onChange={(e)=>{setTitulo(e.target.value)}} className="border-2 rounded-md px-3" />
                    <input type="text" placeholder="Autor" value={autor} onChange={(e)=>{setAutor(e.target.value)}} className="border-2 rounded-md px-3" />
                    <select className={`border-2 rounded-md px-3 ${genero === "" ? "text-gray-400" : "text-black"}`}
                        value={genero} onChange={(e)=>{setGenero(e.target.value)}}
                    >
                        <option value="" disabled className="">Selecciona un género</option>
                        <option value="Fantasía">Fantasía</option>
                        <option value="Ciencia ficción">Ciencia ficción</option>
                        <option value="Misterio y suspenso">Misterio y suspenso</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romance">Romance</option>
                        <option value="Histórica">Histórica</option>
                    </select>
                    <div className="flex justify-around items-center">
                        <button onClick={findBook} className="rounded-full px-3 pt-1 pb-2 bg-black">
                            <p className="text-white">Buscar libro</p>
                        </button>
                    </div>
                </div>
                
                {/* Table */}
                {mostrarLibros.length != 0 ?
                    <div className="flex-1 w-full my-5 px-5 flex flex-col items-center overflow-y-auto">
                        <div className="flex w-full">
                            <div className="grid grid-cols-4 w-[95%] text-center border-black border-2">
                                <h1 className="font-bold">Titulo</h1>
                                <h1 className="border-black border-l-2 border-r-2 font-bold">Autor</h1>
                                <h1 className="border-black border-r-2 font-bold">Genero</h1>
                                <h1 className="font-bold">Estado</h1>
                            </div>
                            <div className="w-[5%] border-b-2 border-black"></div>
                        </div>
                        {mostrarLibros.map((libro, index) => {
                            return (
                                <div key={index} className="flex w-full">
                                    <div  className="grid grid-cols-4 w-[95%] text-center border-2 border-t-0 border-black">
                                        <h1>{libro.titulo}</h1>
                                        <h1 className="border-black border-l-2 border-r-2">{libro.autor}</h1>
                                        <h1 className="border-black border-r-2">{libro.genero}</h1>
                                        <h1 className={`${libro.estado == "disponible" ? 'text-green-700' : 'text-red-700'}`}>{libro.estado}</h1>
                                    </div>
                                    <div className="w-[5%] border-b-2 border-r-2 border-black">
                                        <button onClick={()=>{handleBorrowBook(index)}} className="w-full text-center">
                                            <h1>{libro.estado == 'disponible' ? 'Tomar' : 'Regresar'}</h1>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                : 
                    <div className="flex-1 w-full my-5 px-5 flex flex-col items-center justify-center overflow-y-auto">
                        <h1 className="text-2xl">No hay <b>ningun libro</b> con esos datos!</h1>
                        <h1 className="text-2xl">Vuelve a precionar el boton <b>buscar libro</b></h1>
                        
                    </div>
                }
            </div>
        </div>
    )
}