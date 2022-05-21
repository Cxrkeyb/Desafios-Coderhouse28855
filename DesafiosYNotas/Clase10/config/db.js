import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

mongoose.connect(process.env.MONGO_URI, (err)=>{
    if(err){
        console.log("Base de datos no desplegada")
    }else{
        console.log("Base de datos funcionando")
    }
})