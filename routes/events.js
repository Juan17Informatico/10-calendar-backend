/**
 *  Event Routes
 *  host + /api/events
 */

const { Router } = require('express'); 
const { check } = require('express-validator');


const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, EliminarEvento } = require('../controllers/events');
const { isDate } = require("../helpers/isDate");

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT);

// Obtener Eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post(
    '/', 
    [ 
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de Finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
); 

// Actualizar un nuevo evento
router.put('/:id', actualizarEvento );

// Actualizar un nuevo evento
router.delete('/:id', EliminarEvento);

module.exports = router; 