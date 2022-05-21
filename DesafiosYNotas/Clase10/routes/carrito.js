import { Router } from 'express';

const carritoRouter = Router();

import { postCarritoRes, deleteCarritoRes, postProductToCartRes, leerProductosCarritoRes, deleteProductoInCartRes  } from '../controllers/carritoResponse.js';

// Crea un nuevo Carrito
carritoRouter.post( '/', (req, res)=>{postCarritoRes(req, res)} ); 

// Borra un Carrito por ID
carritoRouter.delete('/:id',(req, res)=>{deleteCarritoRes(req, res)} );

// Listar Productos en un carrito (id Carrito )
carritoRouter.get('/:id/productos', (req, res)=>{leerProductosCarritoRes(req, res)});

// Incorporar Productos a un Carrito ( id Producto )
carritoRouter.post('/:id_carrito/productos', (req, res)=>{postProductToCartRes(req, res)});

// Borrar un producto de un carrito ( id Producto && id Carrito)
carritoRouter.delete('/:id_carrito/productos/:id_producto', (req, res)=>{deleteProductoInCartRes(req, res)});

export default carritoRouter;