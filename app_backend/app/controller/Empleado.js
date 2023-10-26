const Empleado = require('../models/Empleado'); 

const getAll = (req, res) => {
    Empleado.getAll((error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener los empleados' });
        } else {
            // Formatear las fechas antes de enviar los resultados
            const empleadosFormateados = resultados.map((empleado) => ({
                ...empleado,
                fecha_primera_dosis: empleado.fecha_primera_dosis.toISOString().split('T')[0],
            }));
            
            res.json(empleadosFormateados);
        }
    });
};


const create = (req, res) => {
    const { nombre, puesto, vacuna, fecha_primera_dosis, estado_vacunacion } = req.body; // Accede a los datos desde el cuerpo de la solicitud POST
    const nuevoEmpleado = {
        nombre,
        puesto,
        vacuna,
        fecha_primera_dosis: fecha_primera_dosis.split('T')[0],
        estado_vacunacion
    };

    Empleado.create(nuevoEmpleado, (error, resultado) => {
        if (error) {
            console.log(error)
            res.status(500).json({ error: 'Error al crear un nuevo empleado' + error });
        } else {
            res.json(resultado);
        }
    });
};

const update = (req, res) => {
    // const menuId = 1; // ID del menú a actualizar
    const id = req.params.id; // Accede al ID del menú desde la URL
    const { nombre, puesto, vacuna, fecha_primera_dosis, estado_vacunacion } = req.body; // Accede a los datos desde el cuerpo de la solicitud POST

    const empleadoData = {
        nombre,
        puesto,
        vacuna,
        fecha_primera_dosis: fecha_primera_dosis.split('T')[0],
        estado_vacunacion
    };

    Empleado.update(id, empleadoData, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar al empleado' });
        } else {
            res.json(resultado);
        }
    });
};

const deleteMenu = (req, res) => {
    Empleado.delete( (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar al empleado' });
        } else {
            res.json(resultado);
        }
    });
};

const getById = (req, res) => {
    const id = req.params.id; // Accede al ID del menú desde la URL
    Empleado.getById(id, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener al empleado' });
        } else if (!resultado) {
            res.status(404).json({ error: 'Empleado no encontrado' });
        } else {
            res.json(resultado);
        }
    });
};

const deleteById = (req, res) => {
    const id = req.params.id; // Accede al ID del menú desde la URL
    Empleado.deleteById(id, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar empleado' });
        } else {
            res.json(resultado);
        }
    });
};

module.exports = {
    getAll,
    create,
    update,
    deleteMenu,
    getById,
    deleteById
};