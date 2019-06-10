const EmpadronamientoDetalles = require('../models/EmpadronamientoDetalles');

module.exports = function(app) {

    app.get('/datosbasicos/muestraempadronamientodetalle/:id' , (req, res) => {
        EmpadronamientoDetalles.getEmpadronamientoDetalles(req.params.id,(err, data) => {
            res.status(200).json(data);
        })
    });

}