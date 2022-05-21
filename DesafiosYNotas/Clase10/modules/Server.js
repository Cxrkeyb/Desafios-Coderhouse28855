import express from 'express';
import "../config/db.js"
import productosRouter from "../routes/productos.js"
import notFoundRouter from "../routes/notFound.js"
import carritoRouter from "../routes/carrito.js"

function Server(){
    const app = express()
    const port = process.env.PORT
    const productosRoutePath = "/api/productos"
    const carritoRoutePath = '/api/carrito';
    const notFoundRoutePath = '/*';

    // Middlewear
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    // Rutas
    app.use(productosRoutePath, productosRouter)
    app.use(carritoRoutePath, carritoRouter)
    app.use(notFoundRoutePath, notFoundRouter)


    const server = app.listen(port, ()=> {
    console.log(`Server iniciado en el http://localhost:${port}`)
    });
    server.on('error', (err)=>{
    console.log(err)
    })  
}


export default Server;