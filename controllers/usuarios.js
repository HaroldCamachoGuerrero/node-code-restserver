const { response, request } = require('express')


const getUsuario = (req = request, res = response) => {
    //por parametros
    const { q, apellido = 'no name', color } = req.query;
    const { id } = req.params;

    res.json({
        msg: 'get API',
        q,
        apellido,
        color,
        id
    })
}

const postUsuario = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}

const putUsuario = (req = request, res = response) => {
    //por query
    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    })
}

const deleteUsuario = (req = request, res = response) => {
    res.json({
        msg: 'delete API',
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}