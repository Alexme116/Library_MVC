export default function UserLandPage() {
    return (
        <div className="h-svh w-svw">
            {/* Logout Button */}
            <div className="absolute top-10 right-10 border-2 rounded-full px-3 pt-1 pb-2 bg-black">
                <h1 className=" text-white">Logout</h1>
            </div>

            {/* Form */}
            <div className="flex h-full flex-col justify-center items-center gap-5">
                <h1 className="text-2xl font-bold">Libreria</h1>
                <div className="flex flex-col gap-5">
                    <p>No es necesario llenar todos los campos para buscar</p>
                    <input type="text" placeholder="Titulo" className="border-2 rounded-md px-3" />
                    <input type="text" placeholder="Autor" className="border-2 rounded-md px-3" />
                    <input type="text" placeholder="Genero" className="border-2 rounded-md px-3" />
                    <button>Buscar libro</button>
                </div>
            </div>
        </div>
    )
}