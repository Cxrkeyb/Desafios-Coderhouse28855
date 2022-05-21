const express = require('express')
const {engine} = require("express-handlebars")

const usuarios =[
    {
        nombre: "Nombre1",
        edad: 31
    },
    {
        nombre: "Nombre2",
        edad: 32
    },
    {
        nombre: "Nombre3",
        edad: 33
    }
]

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.set("views", "./src/views")
app.set("view engine", "hbs")

app.engine("hbs", engine({
    extname: ".hbs", 
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layout",
    partialsDir: __dirname + "/views/partials"
}))

app.get("/", (req, res)=>{
    res.render("main", {
        usuarios
    })
})

const server = app.listen(8001, ()=> {
  console.log('Server iniciado en el localhost:8081')
});
server.on('error', (err)=>{
  console.log(err)
})