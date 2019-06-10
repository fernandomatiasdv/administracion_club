const EmpadronamientoActividadesPorSocio = require('../models/EmpadronamientoActividadesPorSocio');

module.exports = function(app) {

    app.get('/datosbasicos/empadronamietoactividadesporsocio/:id' , (req, res) => {
        EmpadronamientoActividadesPorSocio.getEmpadronamientoActividadesPorSocio(req.params.id,(err, data) => {
            res.status(200).json(data);
        })
    });

}