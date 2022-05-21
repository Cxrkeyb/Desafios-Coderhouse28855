const lista = [1,2,3,4,5]

lista.map((x)=>x*x).forEach((x)=> console.log(x))
const lista2 = [1,2,3,4,5,6]
lista2.map((x)=>x**x).forEach((x)=> console.log(x))
const lista3 = [1, 2, 3, 4, 5, 7]
lista3.map((x)=>x**x).forEach((x)=> console.log(x))
let hola = "soy una palabra"
let banana = "soy una banana"
const productos = [{nombre: "soy pro", edad: "12"}, {nombre: "soy", edad: "10"}]
// Color aleatorio con babel
class Color{
    getColor(){
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
        let color = `rgb(${r},${g},${b})`
        return color;
    }
}
const unColor = new Color();

console.log(unColor.getColor())