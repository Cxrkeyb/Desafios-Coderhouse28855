import express from 'express';
import cors from 'cors';
import session from "express-session"
import mongoStore from "connect-mongo"
import cookieParser from "cookie-parser";
import "../config/db.js"
import productosRouter from "../routes/productos.js"
import notFoundRouter from "../routes/notFound.js"
import carritoRouter from "../routes/carrito.js"
import userRouter from "../routes/user.js"
import dotenv from "dotenv"

function Server(){
    dotenv.config()
    const app = express()
    const port = process.env.PORT
    const productosRoutePath = "/api/productos"
    const carritoRoutePath = '/api/carrito';
    const userRoutePath = '/api/user'
    const notFoundRoutePath = '/*';

    // Middlewear
    app.use(cookieParser());
    app.use(express.json())
    app.use(cors({ origin: ["http://localhost:3000"], methods: ["GET", "POST"], credentials: true,  }))
    app.use(express.urlencoded({extended:true}))
    app.use(session({
        store: mongoStore.create({
           mongoUrl: process.env.MONGO_URI,
           options: {
                 useNewUrlParser: true,
                 useUnifiedTopology: true,
           },
        }),    
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
           httpOnly: true,
           maxAge: 30000,
           sameSite: false
        },
       //  rolling: true //Reset the cookie Max-Age on every request
     }));
    // Rutas
    app.use(productosRoutePath, productosRouter)
    app.use(carritoRoutePath, carritoRouter)
    app.use(userRoutePath, userRouter)
    app.use(notFoundRoutePath, notFoundRouter)

    const server = app.listen(port, ()=> {
    console.log(`Server iniciado en el http://localhost:${port}`)
    });
    server.on('error', (err)=>{
    console.log(err)
    })  
}


export default Server;