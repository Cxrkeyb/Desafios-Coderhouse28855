import { Router } from 'express';

const productosRouter = Router();
import { deleteProductRes, getAllProductsRes, postProductRes, putProductRes, agregarProductosTestRes } from '../controllers/productsResponse.js';

// Permite listar todos los productos
productosRouter.get( '/', getAllProductsRes);

// Permite listar un producto por ID
productosRouter.get( '/:id', getAllProductsRes);

// Permite agregar un producto (Solo administradores)
productosRouter.post('/', postProductRes);

// Actualiza un producto por su id (Solo administradores)
productosRouter.put('/:id', putProductRes);
    
// Permite borrar un producto por su id (Solo Administradores)
productosRouter.delete('/:id', deleteProductRes);

//Permite añadir 5 productos aleatorios a la colleccion de productos
productosRouter.post("/productos-test", agregarProductosTestRes)

export default productosRouter;