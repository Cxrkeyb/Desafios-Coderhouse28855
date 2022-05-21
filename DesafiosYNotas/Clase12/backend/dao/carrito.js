import Carrito from "../models/Carrito.js"
import { v4 as uuidv4 } from 'uuid';
import { CarritoModel } from "../modules/carrito.modules.js";
import  Producto  from "../models/Producto.js";


let respuesta;
async function createCarrito(req, res){
    try {
        let producto = []
        const carrito = new Carrito(
            uuidv4(),
            Date.now(),
            producto
        )
        respuesta = await CarritoModel.create(carrito)
        res(respuesta)
    } catch (error) {
        console.log(error)
    }
}
async function deleteCarrito(req, res){
    try {
        const {id} = req.params;
        respuesta = await CarritoModel.deleteOne({id: id})
        res(respuesta)
    } catch (error) {
        console.log(error)
    }
}
async function leerProductosCarrito(req,res){
    try {
        const {id} = req.params
        respuesta = await CarritoModel.find({id: id}, {_id: 0,producto: 1});
        res(respuesta[0].producto)
    } catch (error) {
        console.log(error)
    }
}
async function postProductToCart(req, res) {
    try {
        const {id_carrito} = req.params;
        const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
        const producto = new Producto(
            uuidv4(),
            Date.now(),
            nombre,
            descripcion,
            codigo,
            foto,
            precio,
            stock
        )
        let respuesta = await CarritoModel.updateOne({id: id_carrito}, {$push: {producto :producto}})
        res(respuesta)
    } catch (error) {
        console.log(error)
    }
}
async function deleteProductoInCart(req, res) {
    try {
        const {id_carrito, id_producto} = req.params;
        let respuesta = await CarritoModel.updateOne({id: id_carrito}, {$pull: {producto :{id: id_producto}}})
        res(respuesta)
    } catch (error) {
        console.log(error)
    }
}


export {createCarrito, postProductToCart, leerProductosCarrito, deleteCarrito, deleteProductoInCart}