import {ProductoModel} from "../modules/producto.modules.js"
import Producto from "../models/Producto.js"
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

faker.locale= "es"
let respuesta;
async function createProduct(req, res){
    try {
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
        respuesta = await ProductoModel.create(producto)
        res(producto)
    } catch (error) {
        console.log(error)
    }
}
async function leerProductos(req,res){
    try {
        const {id} = req.params
        if(id == null){
            respuesta = await ProductoModel.find()
        }else{
            respuesta = await ProductoModel.find({id: id})
        }
        res(respuesta)
        console.log("Respuesta: ",respuesta)
    } catch (error) {
        console.log(error)
    }
}
async function updateProducto(req, res){
    try {
        const {id} = req.params;
        const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
        const producto = new Producto(
            id,
            Date.now(),
            nombre,
            descripcion,
            codigo,
            foto,
            precio,
            stock
        )
        respuesta = await ProductoModel.updateOne({id: id}, producto)
        res(respuesta)
    } catch (error) {
        console.log(error)
    {id: id}}
}
async function deleteProducto(req, res){
    try {
        const {id} = req.params;
        console.log(id)
        respuesta = await ProductoModel.deleteOne({id: id})
        console.log(respuesta)
        res(respuesta)
    } catch (error) {
        console.log(error)
    }
}
async function agregarProductosTest(req, res){
    try {
        const productos = []
        for (let i = 0; i < 5; i++) {
            const category = faker.commerce.product()
            const producto = new Producto(
                uuidv4(),
                Date.now(),
                category,
                faker.commerce.productDescription(),
                faker.datatype.number(),
                faker.image.imageUrl(250, 250, category, true, true),
                faker.commerce.price(100, 500),
                faker.datatype.number({min: 5, max: 200})
            )
            productos.push(producto)
        }
        respuesta = await ProductoModel.create(productos)
        res(productos)
    } catch (error) {
        console.log(error)
    }
}

export {leerProductos,  createProduct, updateProducto, deleteProducto, agregarProductosTest}