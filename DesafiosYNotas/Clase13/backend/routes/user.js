import { Router } from 'express';
import {auth} from '../dao/auth.js';

const users = Router();
// Respuestas de productos
import { deleteProductRes, postProductRes, putProductRes, agregarProductosTestRes } from '../controllers/productsResponse.js';

// Respuestas de users
import { loginUser, detectToken, deleteUserReq, registerUser } from '../controllers/usersResponse.js';

// Crea un nuevo login
users.post('/user', loginUser); 
// Desloguearse
users.get("/logout", deleteUserReq)
// Permite reconocer si ya se ha logueado la session
users.get("/login", detectToken)


// Registra un usuario
users.post("/register", registerUser)

// Permisos en productos

// Permite agregar un producto (Solo administradores)
users.post('/', postProductRes);

// Actualiza un producto por su id (Solo administradores)
users.put('/:id', putProductRes);
    
// Permite borrar un producto por su id (Solo Administradores)
users.delete('/:id', deleteProductRes);

//Permite añadir 5 productos aleatorios a la colleccion de productos
users.post("/productos-test", auth ,agregarProductosTestRes)

export default users;