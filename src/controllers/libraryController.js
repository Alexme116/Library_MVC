export function searchBook (libros, libro) {
    let coincidencias = []

    libros.forEach(object => {
        if( object.titulo == libro.titulo || object.autor == libro.autor || object.genero == libro.genero){
            coincidencias.push(object)
        }
    });
    
    return coincidencias
}