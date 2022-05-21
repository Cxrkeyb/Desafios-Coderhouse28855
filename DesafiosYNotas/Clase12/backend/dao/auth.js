function auth(req,res,next){
    if(req.session.token){
        next()
    }else{
        const error = new Error('Token is required')
        error.status = 401
        error.code = 'UNAUTHORIZED'
        res.send({error: error, reqsession: req.session})
    }
}
export {auth}