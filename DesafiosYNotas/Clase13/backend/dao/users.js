import { UserModel } from "../modules/users.modules.js"
import bcrypt from "bcrypt"

const getUserByUsername = async (userName) =>{
    try {
        const user = await UserModel.findOne({userName})
    } catch (error) {
        console.log(error)
    }
}
const createUser = async ({userName, hashPassword, email, firstName, lastName}) =>{
    const password = hashPassword;
    const response = await UserModel.create({userName, password, email, firstName, lastName});
    return response;
}
const getUser = async (userName, password) =>{
    try {
        const user = await UserModel.findOne({userName});
        if(user){
            const isValid = bcrypt.compareSync(password, user.password, (err)=>{
                console.log(err)
            });
            if(isValid){
                return user;
            }else{
                console.log("Contraseña incorrecta")
            }
        }else{
            console.log("Usuario no encontrado")
        }
    } catch (error) {
        console.log(error)
    }
}
export {getUserByUsername, createUser, getUser};