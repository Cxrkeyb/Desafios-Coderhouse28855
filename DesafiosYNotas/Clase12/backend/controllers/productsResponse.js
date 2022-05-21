import {leerProductos, createProduct, updateProducto, deleteProducto, agregarProductosTest} from "../dao/productos.js";

const getAllProductsRes = (req, res) => {
    leerProductos(req,(p)=>{
        if(p === null){
         res.status(204).send("No existen productos")
        }else{
          res.status(200).send(p)
         }
    })
}
const postProductRes = (req, res) => {
    createProduct(req,(p)=>{
        if(p === null){
         res.status(204).send("Producto no creado")
        }else{
          res.status(200).send(p)
        }
    })
}
const agregarProductosTestRes = (req, res) => {
    agregarProductosTest(req,(p)=>{
        if(p === null){
         res.status(204).send("Productos no creados")
        }else{
          res.status(200).send(p)
        }
    })
}
const putProductRes = (req, res) => {
    updateProducto(req, (p)=>{
        if(p === null){
            res.status(204).send("El producto no se editó correctamente")
        }else{
            res.status(200).send(p)
        }
    })
}
const deleteProductRes = (req, res) => {
    deleteProducto(req, (p)=>{
        if(p === null){
            res.status(404).send("Error al eliminar el producto");
        }else{
            res.status(200).send(p)
        }
    })
}

export {getAllProductsRes, postProductRes, putProductRes, deleteProductRes, agregarProductosTestRes}