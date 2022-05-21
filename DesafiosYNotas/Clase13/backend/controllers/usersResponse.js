import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../modules/users.modules.js";
import { getUserByUsername, createUser, getUser } from "../dao/users.js";

const loginUser = async (req,res) =>{
  const {userName, password} = req.body;
  try {
        const user = await getUser({userName, password});
        if (user){
            const userToken = jwt.sign({ userName: user.userName, firstName: user.firstName, lastName: user.lastName, email: user.email, timestamp: new Date().toISOString() }, process.env.SECRET, {expiresIn: "1h"});
            req.session.token = {token: userToken, userName: user.userName}
            res.send({autorizado: true, username: req.session.token.userName})
        }else{
            res.send({autorizado: false})
        }
  } catch (error) {
    console.log(error);
  }
}
const detectToken = (req, res) => {
    if(req.session.token){
        console.log(req.session.token.userName)
        res.send({autorizado: true, username: req.session.token.userName})
    }else{
        res.send({autorizado: false});
    }
}
const deleteUserReq = (req,res) =>{
    req.session.destroy (err => {
        if(!err) res.send({autorizado: false})
        else res.send({status: "Hubo un error en el logout", body: err})
    })
}
const registerUser = async (req, res) => {
    const { userName, password, email, firstName, lastName } = req.body;
    const alreadyTaken = await getUserByUsername(userName);
    if(userName && password && email && firstName && lastName && !alreadyTaken){
        const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
        const user = await createUser({userName, hashPassword, email, firstName, lastName})
        const userToken = jwt.sign({ userName: user.userName, firstName: user.firstName, lastName: user.lastName, email: user.email, timestamp: new Date().toISOString() }, process.env.SECRET, {expiresIn: "1h"});
        req.session.token = {token: userToken, userName: user.userName};
        res.send(true)
    }
    
}
export {loginUser, detectToken, deleteUserReq, registerUser}