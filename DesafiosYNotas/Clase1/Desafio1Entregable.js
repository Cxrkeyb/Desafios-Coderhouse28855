/* -------------------------------------------------------------------------- */
/*                                   Clases                                   */
/* -------------------------------------------------------------------------- */

class Usuario{
    constructor(nombre, apellido, libros, mascotas){
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
    getFullName(){
      return `Nombre Completo: ${this.nombre} ${this.apellido}`
    }
    addMascota(mascotaAdd){
      this.mascotas.push(mascotaAdd)
    }
    countMascotas(){
      return this.mascotas.length;
    }
    addBook(nombreLibro, nombreAutor){
      return this.libros.push({
        nombre: nombreLibro,
        autor: nombreAutor
      })
    }
    getBookNames(){
      return this.libros.map((nombre) => (nombre.nombre))
    }
}

const primerUsuario = new Usuario("Wilson", "Parada", [{nombre:"El Alquimista", autor:"Paulo Coelho"}, {nombre:"El Mundo de Sofia",autor:"Jostein Gaarder"}, {nombre:"El Principito", autor: "Antoine de Saint-Exupéry"}], ["Perro", "Perro", "Perro"])
// Full name
console.log(primerUsuario.getFullName())
// Añadir mascota
primerUsuario.addMascota("Gato")
console.log(primerUsuario.mascotas)
// Contador de mascotas
console.log(primerUsuario.countMascotas())
// Pushear un libro
console.log(primerUsuario.addBook("Nada", "Carmen Laforet"))
// Mapeo de los libros escritos
console.log(primerUsuario.getBookNames())

