const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: true }));

router.use(bodyParser.json());
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})


/*
*MODULO DE EMPLEADO
*/
    const empleadoController = require('../controller/Empleado'); // Importa el controlador
    // VISTA
        // router.get('/empleado/index', empleadoController.index);
        // router.get('/empleado/store', empleadoController.store);
        // router.get('/empleado/edit/:id', empleadoController.edit);
        // router.get('/empleado/show/:id', empleadoController.show);
    // CONTROLADOR
        router.get('/empleado/index', empleadoController.getAll);
        router.post('/empleado/create', empleadoController.create);
        router.post('/empleado/update/:id', empleadoController.update);
        router.post('/empleado/delete/:id', empleadoController.deleteById);
/*
*END MODULO DE EMPLEADO
*/


module.exports  = router;