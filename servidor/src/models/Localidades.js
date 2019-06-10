const connection = require('./Connection');

let Localidades = {};

Localidades.getLocalidades = (callback) => {
    if (connection){
        const querySelect = 'SELECT id, localidad FROM tb_localidades';
        connection.query(
            querySelect,
            (err, rows) => {
                if(err) throw err;
                else callback(null, rows);
            }
        )
    }
};

module.exports = Localidades;