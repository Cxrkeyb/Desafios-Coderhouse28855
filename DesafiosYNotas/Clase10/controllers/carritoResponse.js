import { createCarrito, deleteCarrito, postProductToCart, leerProductosCarrito, deleteProductoInCart } from '../dao/carrito.js';

const postCarritoRes = (req, res) => {
    createCarrito(req,(p)=>{
        if(p === null){
         res.status(204).send("Carrito no creado")
        }else{
          res.status(200).send(p)
        }
    })
}
const leerProductosCarritoRes = (req, res) => {
    leerProductosCarrito(req, (p)=>{
        if(p === null){
            res.status(204).send("El producto no se introdujo correctamente")
        }else{
            res.status(200).send(p)
        }
    })
}
const postProductToCartRes = (req, res) => {
    postProductToCart(req, (p)=>{
        if(p === null){
            res.status(204).send("El producto no se introdujo correctamente")
        }else{
            res.status(200).send(p)
        }
    })
}
const deleteCarritoRes = (req, res) => {
    deleteCarrito(req, (p)=>{
        if(p === null){
            res.status(404).send("Error al eliminar el carrito");
        }else{
            res.status(200).send(p)
        }
    })
}
const deleteProductoInCartRes = (req, res) => {
    deleteProductoInCart(req, (p)=>{
        if(p === null){
            res.status(404).send("Error al eliminar el producto");
        }else{
            res.status(200).send(p)
        }
    })
}

export { postCarritoRes, deleteCarritoRes, postProductToCartRes, leerProductosCarritoRes,deleteProductoInCartRes}