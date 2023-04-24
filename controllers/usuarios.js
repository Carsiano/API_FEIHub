const {response} = require('express');
const usuariosGet = (req, res = response) => {
    res.json({
        msg:" api GET desde controlador"
    });
}
const usuariosPost = (req, res = response) => {
    //const body = req.body;
    const{nombre, edad} = req.body;
    res.json({
        msg:" api POST desde controlador",
        //body
        nombre,
        edad
    });
}
const usuariosPut = (req, res = response) => {
    res.json({
        msg:" api PUT desde controlador"
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg:" api PATCH desde controlador"
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg:" api DELETE desde controlador"
    });
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
};
