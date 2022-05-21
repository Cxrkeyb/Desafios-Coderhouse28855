import { Router } from 'express';
import { getNotFound, postNotFound, putNotFound, deleteNotFound } from '../controllers/notFoundResponse.js';

const router = Router();

// Crea un nuevo Carrito
router.get( '/*', getNotFound ); 

// Borra un Carrito por ID
router.post('/*', postNotFound );

// Listar Productos en un carrito (id Carrito )
router.put('/*', putNotFound );

// Incorporar Productos a un Carrito ( id Producto && id Carrito )
router.delete('/*', deleteNotFound );

export default router;