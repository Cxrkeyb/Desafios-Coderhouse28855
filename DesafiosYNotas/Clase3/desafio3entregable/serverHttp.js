const http = require("http")

const server = http.createServer((req, res)=>{
    res.end("Hola servidor http")
})

const port = 3000
server.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`)
})