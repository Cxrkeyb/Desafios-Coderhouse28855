const express = require('express')
const fs = require("fs")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("views", "./src/views")
app.set("view engine", "ntl")

app.engine("ntl", (filePath, options, callback)=>{
    fs.readFile(filePath, (err, content)=>{
        if(err) return callback(new Error(err))
        const render = content.toString().replace("#title#", options.title).replace("#message#", options.message)
        return callback(null,render)
    })
})
app.get("/", (req, res)=>{
    res.render("index1", {
        title: "Soy un titulo",
        message: "Este es un mensaje"
    })
})

const server = app.listen(8001, ()=> {
  console.log('Server iniciado en el localhost:8081')
});
server.on('error', (err)=>{
  console.log(err)
})
