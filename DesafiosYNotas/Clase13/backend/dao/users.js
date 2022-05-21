import { UserModel } from "../modules/users.modules.js"

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
const getUser = async ({userName, password}) =>{
    try {
        const user = await UserModel.find({userName});
        if(user){
            const isValid = bcrypt.compareSync(password, user.password);
            if(isValid){
                return user;
            }else{
                console.log("Contraseña no valida")
            }
        }
    } catch (error) {
        
    }
}
export {getUserByUsername, createUser, getUser};