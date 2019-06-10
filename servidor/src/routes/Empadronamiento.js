const Empadronamiento = require('../models/Empadronamiento');

module.exports = function(app) {

    app.get('/datosbasicos/muestraempadronamiento' , (req, res) => {
        Empadronamiento.getEmpadronamiento((err, data) => {
            res.status(200).json(data);
        })
    });

    app.post('/datosbasicos/muestraempadronamiento', (req, res) => {
        console.log('req.body.dni ' + req.body.dni);
        const empadronamientoData = {
            id_empadronamiento  : null,
            dni                 : req.body.dni,        
            fecha_nacimiento    : req.body.fecha_nacimiento,
            apellido            : req.body.apellido,
            nombre              : req.body.nombre,
            direccion           : req.body.direccion,
            mail                : req.body.mail,
            migrado             : req.body.migrado,
            telefono        : req.body.telefono,
            ref_telefono        : req.body.ref_telefono,
            celular             : req.body.celular,
            path_foto           : req.body.path_foto,
            fecha_alta_real     : req.body.fecha_alta_real,
            fecha_empadronamiento : req.body.fecha_empadronamiento,
            id_categoria        : req.body.id_categoria,
            localidad           : req.body.localidad,
            codigo_postal       : req.body.codigo_postal
        };

        Empadronamiento.insertEmpadronamiento(empadronamientoData, (err, data) => {
            if(data && data.insertId){
                res.json({
                    success: true,
                    msg  : 'Empadronamiento insertado',
                    data : data
                })
            } else {
                res.status(500).json({
                    success : false,
                    msg     : 'Error interno' 
                })
            }
        }); 
    });    

    app.put('/datosbasicos/muestraempadronamiento/:id', (req, res) => {

        const empadronamientoData = {
            id_empadronamiento  : req.body.id,
            dni                 : req.body.dni,        
            fecha_nacimiento    : req.body.fecha_nacimiento,
            apellido            : req.body.apellido,
            nombre              : req.body.nombre,
            direccion           : req.body.direccion,
            mail                : req.body.mail,
            migrado             : req.body.migrado,
            telefono        : req.body.telefono,
            ref_telefono        : req.body.ref_telefono,
            celular             : req.body.celular,
            path_foto           : req.body.path_foto,
            fecha_alta_real     : req.body.fecha_alta_real,
            fecha_empadronamiento : req.body.fecha_empadronamiento,
            id_categoria        : req.body.id_categoria,
            localidad           : req.body.localidad,
            codigo_postal       : req.body.codigo_postal
        };

        Empadronamiento.updateEmpadronamiento(empadronamientoData, (err, data) => {

            if (data && data.msg) res.json(data)
            else res.json({
                success : false,
                msg : 'Error al actualizar los datos del empadronamiento'
            })

        });
    });

    app.delete('/datosbasicos/muestraempadronamiento/:id', (req, res) => {
        Empadronamiento.deleteEmpadronamiento(req.params.id, (err, result) => {
            console.log(result);
            if (result.msg === 'Empadronamiento Eliminado' || result.msg === 'No existe el id buscado') {
                res.json({
                    success : true,
                    msg  : result.msg
                })
            } else {
                res.status(500).json({
                    success : false,
                    msg : 'Error'
                })
            }
        })
    })

}