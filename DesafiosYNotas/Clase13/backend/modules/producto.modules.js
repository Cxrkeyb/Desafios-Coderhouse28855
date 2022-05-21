import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    codigo:{
        type: String,
        required: true
    },
    foto:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

export const ProductoModel = mongoose.model("Productos", Schema);