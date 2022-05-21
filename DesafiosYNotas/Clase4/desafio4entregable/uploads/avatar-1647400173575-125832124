const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/usuario/:dni1/:dni2", (req,res)=>{
    const {dni1, dni2} = req.params;
    console.log(dni1, dni2)
    res.status(200).send("Miami me lo confirmó")
})

app.get("/api/mensaje", (req,res)=>{
    console.log(req)
    res.status(200).send("Mensaje get")
})

// Get endpoints 
let frase = "Hola mundo como están"
let splitted = frase.split(" ")

app.get("/api/frase", (req,res)=>{
    res.status(200).send(frase)
})
app.get("/api/letras/:num", (req,res)=>{
    const {num} = req.params;
    if(num > splitted.length || num < 0){
        res.status(400).send("El valor no es válido")
    }
    res.status(200).send(frase[num])
})
// app.get("/api/palabras/:num", (req,res)=>{
//     const {num} = req.params;
//     let splitted = frase.split(" ")
//     if(num > splitted.length || num < 0){
//         res.status(400).send("El valor no es válido")
//     }
//     res.status(200).send(splitted[num])
// })
// Servidor con get, post, put y delete
app.get("/api/palabras/:num", (req,res)=>{
    const {num} = req.params;
    if(num > splitted.length || num < 0){
        res.status(400).send("El valor no es válido")
    }
    res.status(200).json({buscada: splitted[num]})
})
app.post("/api/palabras", (req, res)=>{
    const {body} = req;
    const position = splitted.length + 1;
    frase = `${frase} ${body.palabra}`;
    res.status(200).json({frase: frase, agregada: body.palabra, pos: position })
})
app.put("/api/palabras/:pos", (req, res)=>{
    const {pos} = req.params;
    const {body} = req;
    const before = splitted[pos]
    splitted[pos] = body.repalabra;
    frase = splitted.join(" ")
    res.status(200).json({frase: frase, agregada: body.palabra, anterior: before, actualizada: splitted[pos], palabras: splitted })
})
app.delete("/api/palabras/:pos", (req, res)=>{
    const {pos} = req.params;
    splitted.splice(pos - 1, 1)
    frase = splitted.join(" ")
    res.status(200).send(frase)
})
// Fin Servidor con get, post, put y delete
// Fin get endpoints

app.post("/api/usuario", (req, res)=>{
    const {body} = req;
    console.log(req.body)
})

app.put("/api/usuario/:id", (req, res)=>{
    const {id} = req.params;
    const {body} = req;
    console.log(id,body)
    res.status(200).send(id,body)
})

app.delete("/api/usuario/:id", (req, res)=>{
    const {id} = req.params;
    console.log(id)
    res.status(200).send(id)
})
// Operaciones con el servidor

app.get("/api/sumar/:num1/:num2", (req,res)=>{
    const {num1, num2} = req.params;
    let suma = Number(num1) + Number(num2)
    res.status(200).send(`La suma es ${suma}`)
})
app.get("/api/sumar", (req,res)=>{
    const {num1, num2} = req.query;
    let suma = Number(num1) + Number(num2)
    res.status(200).send(`La suma es ${suma}`)
})
app.get("/api/operacion/:op1", (req,res)=>{
    const {op1} = req.params;
    let splitted =  op1.split("+")
    let suma = Number(splitted[0]) + Number(splitted[1])
    res.status(200).send(`La suma es ${suma}`)
})

// Fin operaciones con el servidor

// Express router
// const express = require('express')

// const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mascotas = express.Router();
const personas = express.Router();

let masco =[{nombre: "juan", raza: "caballo", edad: 20},{nombre: "petro", raza: "tortuga", edad: 10}]
let perso =[{nombre: "martin", apellido: "velasquez", edad: "17"},{nombre: "poncho", apellido: "parada", edad: "12"}]

mascotas.get("", (req,res)=>{
    res.status(200).send(masco)
})
personas.get("", (req,res)=>{
    res.status(200).send(perso)
})
mascotas.post("", (req,res)=>{
    const {body} = req;
    masco.push(body)
    res.status(200).send(masco)
})
personas.post("", (req,res)=>{
    const {body} = req;
    perso.push(body)
    res.status(200).send(perso)
})

app.use("/api/mascotas", mascotas)
app.use("/api/personas", personas)

// const server = app.listen(8080, ()=> {
//   console.log('Server iniciado en el localhost:8080')
// });
// server.on('error', (err)=>{
//   console.log(err)
// })
// Fin express router
// Express static
app.use(express.static("./src/public"))
// Middlewear
const middle = (res, req, next) =>{
    console.log("middleware")
    next();
}

app.get("/middle", middle, (req, res)=>{
    res.sendFile("./src/index.html")
})

const server = app.listen(8080, ()=> {
    console.log("Server iniciado en el localhost:8080")
});
server.on("error", (err)=>{
    console.log(err)
});