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

    getLibro() {
        this.setId()
        return {
            id: this.id,
            titulo: this.titulo,
            autor: this.autor,
            genero: this.genero,
            estado: this.estado
        }
    }

    setId() {
        let id = 0
        for (let i = 0; i < this.titulo.length; i++) {
            id += this.titulo.charCodeAt(i)
        }
        for (let i = 0; i < this.autor.length; i++) {
            id += this.autor.charCodeAt(i)
        }
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