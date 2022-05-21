/* -------------------------------------------------------------------------- */
/*                                   Clase 1                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------- Datos y variables --------------------------- */
const nombre = "pepe"
let edad = 25;
const price = "$99.90"
const series = ["Dark", "Mr Robot", "Castlevania"]
const películasFavoritas = [{nombre:"Proyecto X", estrenada:2012, protagonistas:["Thomas Mann", "Oliver Cooper", "Miles Teller"]}, {nombre:"Super Cool", estrenada:2007, protagonistas:["Jonah Hill", "Seth Rogen", "Michael Cera"]}]
console.log(nombre, edad, price, series, películasFavoritas)
edad++
console.log(edad)
series.push("Stranger Things")
console.log(series)
/* -------------------------- Funciones y Closures -------------------------- */
const listaVacía = [];
const lista3Números = [1,2,3]
const mostrarLista = (lista) => lista.length === 0 ? console.log("Lista Vacía") : console.log(lista);
mostrarLista(listaVacía);
mostrarLista(series);
(function (lista){lista.length === 0 ? console.log("Lista Vacía") : console.log(lista)})(lista3Números)
const primerNúmero = 2;
const segundoNúmero = 4;
const crearMultiplicador = (primero) => {return function(segundo){return primero*segundo}};
console.log(crearMultiplicador(primerNúmero)(segundoNúmero));
const duplicar = (valor) => console.log(valor * 2)
duplicar(crearMultiplicador(primerNúmero)(segundoNúmero))
duplicar(crearMultiplicador(10)(12))
const triplicar = (valor) => console.log(valor * 3);
triplicar(crearMultiplicador(primerNúmero)(segundoNúmero))
triplicar(crearMultiplicador(6)(3))
/* --------------------------------- Clases --------------------------------- */
class Contador{
    static CuentaGlobal = 0;
    constructor(nombreResponsable){
        this.nombreResponsable = nombreResponsable;
        this.cuenta = 0;
    }
    obtenerResponsable(){
        return console.log(this.nombreResponsable)
    }
    obtenerCuentaIndividual(){
        return console.log(this.cuenta)
    }
    obtenerCuentaGlobal(){
        return console.log(Contador.CuentaGlobal)
    }
    contar(){
        this.cuenta++;
        Contador.CuentaGlobal++;
    }
}
const primerContador = new Contador ("Mario")
primerContador.obtenerResponsable()
primerContador.contar()
primerContador.obtenerCuentaIndividual()
primerContador.obtenerCuentaGlobal()
const segundoContador = new Contador ("Juan")
segundoContador.obtenerResponsable()
segundoContador.contar()
segundoContador.contar()
segundoContador.obtenerCuentaIndividual()
segundoContador.obtenerCuentaGlobal()
const tercerContador = new Contador ("Matias")
tercerContador.obtenerResponsable()
tercerContador.contar()
tercerContador.contar()
tercerContador.contar()
tercerContador.obtenerCuentaIndividual()
tercerContador.obtenerCuentaGlobal()
 