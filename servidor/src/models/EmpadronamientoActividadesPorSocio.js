const connection = require('./Connection');
const valida = require('../tools/valida');

let EmpadronamientoActividadesPorSocio = {};

EmpadronamientoActividadesPorSocio.getEmpadronamientoActividadesPorSocio = (id, callback) => {
    if (connection){
        const querySelect = ` 
            SELECT 
                tb_empadronamiento.id_empadronamiento,
                tb_empadronamiento.dni,
                tb_empadronamiento.apellido,
                tb_empadronamiento.nombre,
                tb_empadronamiento.id_categoria,
                tb_empadronamiento.fecha_nacimiento,
                tb_empadronamiento.direccion,
                tb_empadronamiento.telefono,
                tb_empadronamiento.ref_telefono,
                tb_empadronamiento.celular,
                tb_empadronamiento.path_foto,
                tb_empadronamiento.fecha_alta_real,
                tb_empadronamiento.fecha_empadronamiento,
                tb_empadronamiento.migrado,
                tb_empadronamiento.mail,
                tb_empadronamiento.localidad,
                tb_empadronamiento.codigo_postal,
                tb_categorias.descripcion as nombre_categoria
            FROM 
                tb_empadronamiento, tb_categorias 
            WHERE 
                id_empadronamiento =  ${connection.escape(id)}
            AND tb_empadronamiento.id_categoria = tb_categorias.id_categoria `;
        connection.query(
            querySelect,
            (err, rows) => {
                if(err) throw err;
                else callback(null, rows);
            }
        )
    }
};

module.exports = EmpadronamientoActividadesPorSocio;