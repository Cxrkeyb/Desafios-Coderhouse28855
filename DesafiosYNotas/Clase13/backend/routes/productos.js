import { Router } from 'express';

const productosRouter = Router();
import {  getAllProductsRes, } from '../controllers/productsResponse.js';

// Permite listar todos los productos
productosRouter.get( '/', getAllProductsRes);

// Permite listar un producto por ID
productosRouter.get( '/:id', getAllProductsRes);

export default productosRouter;