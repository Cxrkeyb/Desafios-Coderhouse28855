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
    producto: {
        type: Object,
        required: true
    }
    
})

export const CarritoModel = mongoose.model("Carrito", Schema);