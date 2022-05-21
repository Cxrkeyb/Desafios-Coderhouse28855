const numeros: number[] = [1,2,3,4,5]
numeros.map((x:number)=> x*x).forEach((x: number)=> console.log(x))

const persona: {
    nombre: string,
    edad: number,
    url: string
} = {
    nombre: "Coderhouse",
    edad: 10,
    url: "http://www.coderhouse.com"
}
console.log(persona)

interface iColor{
    color: string
    getColor():string
}

class Color implements iColor{
    color: string
    constructor(){
        this.color = ""
    }
    getColor(): string {
        const r:number = Math.floor(Math.random()*255)
        const g:number = Math.floor(Math.random()*255)
        const b:number = Math.floor(Math.random()*255)
        this.color = `rgb(${r},${g},${b})`
        return this.color;
    }
}

const unColor: Color = new Color()

console.log(unColor.getColor())