export class LibroObject {
    constructor(titulo, autor, genero) {
        this.id = 0
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.estado = 'disponible'
    }

    getId() {
        return this.id
    }

    getTitulo() {
        return this.titulo
    }

    getAutor() {
        return this.autor
    }

    getGenero() {
        return this.genero
    }

    getEstado() {
        return this.estado
    }

    setId(id) {
        this.id = id
    }

    setEstado(estado) {
        if (estado){
            this.estado = 'disponible'
        } else {
            this.estado = 'prestado'
        }
    }
}