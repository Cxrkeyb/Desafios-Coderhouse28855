import { response, request } from 'express';

const getNotFound = async(req = request, res = response) => {
    return res.status(404).json({
        msg: "Error 404, no existe el recurso solicitado"
    });
    console.log("hola")
};

const postNotFound = async(req = request, res = response) => {
    return res.status(404).json({
        msg: "Error 404, no existe el recurso solicitado"
    });
};

const putNotFound = async(req = request, res = response) => {
    return res.status(404).json({
        msg: "Error 404, no existe el recurso solicitado"
    });
};

const deleteNotFound = async(req = request, res = response) => {
    return res.status(404).json({
        msg: "Error 404, no existe el recurso solicitado"
    });
};


export {
    getNotFound,
    postNotFound,
    putNotFound,
    deleteNotFound
}