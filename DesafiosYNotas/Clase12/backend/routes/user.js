import { Router } from 'express';
import {auth} from '../dao/auth.js';

const users = Router();
// Respuestas de productos
import { deleteProductRes, postProductRes, putProductRes, agregarProductosTestRes } from '../controllers/productsResponse.js';

// Respuestas de users
import { createUser, detectToken, deleteUserReq } from '../controllers/usersResponse.js';

// Crea un nuevo login
users.post('/user', createUser ); 

// Permite agregar un producto (Solo administradores)
users.post('/', postProductRes);

// Permite reconocer si ya se ha logueado la session
users.get("/login", detectToken)

users.get("/logout", deleteUserReq)

// Actualiza un producto por su id (Solo administradores)
users.put('/:id', putProductRes);
    
// Permite borrar un producto por su id (Solo Administradores)
users.delete('/:id', deleteProductRes);

//Permite añadir 5 productos aleatorios a la colleccion de productos
users.post("/productos-test", auth ,agregarProductosTestRes)

export default users;