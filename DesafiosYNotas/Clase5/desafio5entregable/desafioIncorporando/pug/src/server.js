const express = require('express')

const data = [
  {
    nombre: "Escuadra",
    price: 123.45,
    thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
  }
]

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("views", "./src/views")
app.set("view engine", "pug")

app.get("/", (req, res)=>{
  res.render("index", {cargar:true})
})

app.get("/productos", (req, res)=>{
  res.render("index", {data, cargar:false})
})
app.post("/productos", (req, res)=>{
  const {body} = req;
  data.push(body);
  res.render("index", {data, cargar:false})
})

const server = app.listen(8001, ()=> {
  console.log('Server iniciado en el localhost:8001')
});
server.on('error', (err)=>{
  console.log(err)
})