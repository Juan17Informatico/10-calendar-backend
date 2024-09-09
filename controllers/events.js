const { response } = require("express")


// {
//     ok: true,
//     msg: 'getEventos'
// }



const getEventos = async( req, res = response) => {
    console.log(req, res);
    
    return res.status(200).json({
        ok: true, 
        msg: 'GetEventos'
    });
}

const crearEvento = async( req, res = response) => {

    //Verificar que tenga el evento
    console.log( req.body );
    

    return res.status(200).json({
        ok: true, 
        msg: 'CrearEvento'
    });
}

const actualizarEvento = async( req, res = response) => {
    return res.status(200).json({
        ok: true, 
        msg: 'actualizarEvento'
    });
}

const EliminarEvento = async( req, res = response) => {
    return res.status(200).json({
        ok: true, 
        msg: 'Eliminar Evento'
    });
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    EliminarEvento,
}
