const Travel = require('../models/Travel');
exports.travelsQueries = (req, res) => {
    Travel.findAll()
        .then(travels => res.render('viajes', {
            page: 'Viajes',
            travels
        }))
        .catch(error => console.log(error))
}
exports.travelQuerie = (req, res) => {
    Travel.findByPk(req.params.id)
        .then(travel => res.render('viaje', {
            travel
        }))
        .catch(error => console.log(error));
}