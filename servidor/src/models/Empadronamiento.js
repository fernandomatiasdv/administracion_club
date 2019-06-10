const connection = require('./Connection');

let Empadronamiento = {};

Empadronamiento.getEmpadronamiento = (callback) => {
    if (connection){
        const querySelect = 'SELECT * FROM tb_empadronamiento';
        connection.query(
            querySelect,
            (err, rows) => {
                if(err) throw err;
                else callback(null, rows);
            }
        )
    }
};

Empadronamiento.insertEmpadronamiento = (EmpadronamientoData, callback) => {
    if(connection){
        const queryInsert = 'INSERT INTO tb_empadronamiento SET ?';
        connection.query(
            queryInsert, EmpadronamientoData,
            (err, result) => {
                if(err) throw err;
                else{
                    callback(null, {
                        'insertId' : result.insertId
                    })
                }
            }
        )
    }
}

Empadronamiento.updateEmpadronamiento = (EmpadronamientoData, callback) => {

    if(connection){
        const queryUpdate = `  
            UPDATE  tb_empadronamiento SET
                    dni                 =  ${connection.escape(EmpadronamientoData.dni)},
                    fecha_nacimiento    =   ${connection.escape(EmpadronamientoData.fecha_nacimiento)},
                    apellido            =   ${connection.escape(EmpadronamientoData.apellido)},
                    nombre              =   ${connection.escape(EmpadronamientoData.nombre)},
                    direccion           =   ${connection.escape(EmpadronamientoData.direccion)},
                    mail                =   ${connection.escape(EmpadronamientoData.mail)},
                    migrado             =   ${connection.escape(EmpadronamientoData.migrado)},
                    telefono            =   ${connection.escape(EmpadronamientoData.telefono)},
                    ref_telefono        =   ${connection.escape(EmpadronamientoData.ref_telefono)},
                    celular             =   ${connection.escape(EmpadronamientoData.celular)},
                    path_foto              =   ${connection.escape(EmpadronamientoData.path_foto)}
                    fecha_alta_real        =   ${connection.escape(EmpadronamientoData.fecha_alta_real)},
                    fecha_empadronamiento  =   ${connection.escape(EmpadronamientoData.fecha_empadronamiento)},
                    id_categoria           =   ${connection.escape(EmpadronamientoData.id_categoria)},
                    localidad              =   ${connection.escape(EmpadronamientoData.localidad)},
                    codigo_postal          =   ${connection.escape(EmpadronamientoData.codigo_postal)}
            WHERE   id_empadronamiento     =   ${connection.escape(EmpadronamientoData.id_empadronamiento)} `;
        connection.query( queryUpdate, (err, result) => {
                if(err) throw err;
                else{
                    callback(null, {
                        'msg' : "success"
                    })
                }
            }
        )
    }
}

Empadronamiento.deleteEmpadronamiento = (id, callback) => {   
    if(connection){
        let queryExisteEmpadronamiento = ` SELECT * FROM tb_empadronamiento WHERE id_empadronamiento = ${connection.escape(id)} `;
        connection.query(queryExisteEmpadronamiento, (err1, row) => {
            const numRows = row.length;
            console.log('numRows: '+numRows);
            if(numRows > 0) {
                let queryDeleteEmpadronamiento = ` DELETE FROM tb_empadronamiento WHERE id_empadronamiento = ${connection.escape(id)} `; 
                connection.query(queryDeleteEmpadronamiento, (err2, row) => {
                    if(err2) throw err2;
                    else {
                        callback(null, {
                            msg: 'Empadronamiento Eliminado'
                        })
                    }
                })            
            }
            else 
            {
                callback(null, {
                    msg: 'No existe el id buscado'
                });
            }
        })
    }
}

module.exports = Empadronamiento;