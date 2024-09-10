const { response } = require("express")
const Evento = require("../models/Evento"); 

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

    const evento = new Evento( req.body ); 

    try {
        
        evento.user = req.uid; 

        const eventoGuardado = await evento.save()

        res.json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
       console.log(error);
       res.status(500).json({
        ok: false, 
        msg: 'Hable con el administrador del sistema'
       }); 
    }
    
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
