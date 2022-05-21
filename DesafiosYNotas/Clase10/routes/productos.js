import { Router } from 'express';

const productosRouter = Router();
import { deleteProductRes, getAllProductsRes, postProductRes, putProductRes } from '../controllers/productsResponse.js';

// Permite listar todos los productos
productosRouter.get( '/', (req, res)=>{getAllProductsRes(req, res)} );

// Permite listar un producto por ID
productosRouter.get( '/:id', (req, res)=>{getAllProductsRes(req, res)} );

// Permite agregar un producto (Solo administradores)
productosRouter.post('/',  (req, res)=>{postProductRes(req, res)} );

// Actualiza un producto por su id (Solo administradores)
productosRouter.put('/:id', (req, res)=>{putProductRes(req, res)} );
    
// Permite borrar un producto por su id (Solo Administradores)
productosRouter.delete('/:id', (req, res)=>{deleteProductRes(req, res)} );

export default productosRouter;