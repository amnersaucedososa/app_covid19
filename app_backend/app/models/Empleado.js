const db = require('../../config/config');

// NOMBRE TABLA
let nameTable = 'empleados';


const Empleado = {



    // Función para crear un nuevo elemento en el menú
    create: (nuevoEmpleado, callback) => {
        db.query(`INSERT INTO ${nameTable} (nombre, puesto, vacuna, fecha_primera_dosis, estado_vacunacion) VALUES (?, ?, ?, ?, ?)`,
            [nuevoEmpleado.nombre, nuevoEmpleado.puesto, nuevoEmpleado.vacuna, nuevoEmpleado.fecha_primera_dosis, nuevoEmpleado.estado_vacunacion],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },

    // Función para actualizar un elemento en el menú por su ID
    update: (id, menuData, callback) => {
        db.query(`UPDATE ${nameTable} SET nombre = ?, puesto = ?, vacuna = ?, fecha_primera_dosis   = ?, estado_vacunacion = ? WHERE id = ?`,
            [menuData.nombre, menuData.puesto, menuData.vacuna, menuData.fecha_primera_dosis, menuData.estado_vacunacion, id],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },

    // Función para eliminar un elemento en el menú por su ID
    delete: ( callback) => {
        db.query(`DELETE FROM ${nameTable} `, (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },
    deleteById: (id, callback) => {
        db.query(`DELETE FROM ${nameTable}  WHERE id= ?`,
            [id],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                if (results.length === 0) {
                    return callback(null, null); // No se encontraron resultados
                }
                return callback(null, results[0]); // Devuelve el primer resultado (debería ser único)
            }
        );},

    // Función para obtener un elemento del menú por su ID
    getById: (id, callback) => {
        db.query(`SELECT * FROM ${nameTable} WHERE id = ?`,
            [id],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                if (results.length === 0) {
                    return callback(null, null); // No se encontraron resultados
                }
                return callback(null, results[0]); // Devuelve el primer resultado (debería ser único)
            }
        );
    },

    // Función para eliminar un elemento en el menú por su ID
    deleteById: (id, callback) => {
        db.query(`DELETE FROM ${nameTable} WHERE id = ?`,
            [id],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },
    // Función para obtener todos los elementos del menú
    getAll: (callback) => {
        db.query(`SELECT * FROM ${nameTable} order by id desc`, (error, results) => {
            if (error) {
                return callback(error, null);
            }
            return callback(null, results);
        });
    },
};

module.exports = Empleado;