const express = require('express')

const app = express()

const data = [
    {nombre: "matias", apellido: "lopez", edad: 25}
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("./pages/index", {
        data
    })
})

app.post("/", (req, res) =>{
    const {body} = req;
    data.push(body);
    res.send('<script>alert("Info guardada");window.location.href="/"</script>')
})
const server = app.listen(8001, ()=> {
  console.log('Server iniciado en el localhost:8081')
});
server.on('error', (err)=>{
  console.log(err)
})