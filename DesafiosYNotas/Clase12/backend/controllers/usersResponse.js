const createUser = (req,res) =>{
    const {username, password} = req.body;
    console.log(username, password);
    if(username === "coderhouseAdmin" && password === "123456"){
        req.session.token = username;
        res.send({autorizado: true, username: username})
    }else{
        console.log("hola")
        res.send(false)
    }
}
const detectToken = (req, res) => {
    if(req.session.token){
        res.send({autorizado: true, username: req.session.token})
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
export {createUser, detectToken, deleteUserReq}