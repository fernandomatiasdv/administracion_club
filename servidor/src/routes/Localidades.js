const Localidades = require('../models/Localidades');

module.exports = function(app) {

    app.get('/localidades' , (req, res) => {
        Localidades.getLocalidades((err, data) => {
            res.status(200).json(data);
        })
    });

}