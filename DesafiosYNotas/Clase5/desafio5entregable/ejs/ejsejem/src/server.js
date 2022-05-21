const express = require('express')

const app = express()

mascotas =[
    {
        nombre: "mascota1",
        raza: "raza1",
        edad: 1
    },
    {
        nombre: "mascota2",
        raza: "raza2",
        edad: 2
    },
    {
        nombre: "mascota3",
        raza: "raza3",
        edad: 3
    }
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("pages/index", {mascotas})
})

app.get("/about", (req, res)=>{
    res.render("pages/about", {})
})

const server = app.listen(8001, ()=> {
  console.log('Server iniciado en el localhost:8081')
});
server.on('error', (err)=>{
  console.log(err)
})