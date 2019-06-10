const connection = require('../models/Connection');

valida = (campoID, tabla, idBuscado) => {
    if(connection){
        const query = ` SELECT ${campoID} FROM ${tabla} WHERE ${campoID} = ${connection.escape(idBuscado)} `;
        console.log(query);
        
        connection.query(
            query,
            (err, rows) => {
                console.log('rows: ' + rows.length);
                if(err) throw {err};
                else {
                    if(rows.length > 0) valida = 'true'; 
                    else valida =  'false';
                };
            }
        )
    }
}
module.exports = valida;