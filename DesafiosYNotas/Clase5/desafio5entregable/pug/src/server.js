const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("views", "./src/views")
app.set("view engine", "pug")

app.get("/", (req, res)=>{
    res.render("index", {})
})
app.get("/medidor", (req, res)=>{
    const {query} = req;
    res.render("medidor", {
        ...query,
    })
})


const server = app.listen(8001, ()=> {
  console.log('Server iniciado en el localhost:8081')
});
server.on('error', (err)=>{
  console.log(err)
})