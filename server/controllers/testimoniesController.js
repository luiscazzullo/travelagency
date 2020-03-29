const Testimony = require('../models/Testimony');
exports.showTestimonies = (req, res) => {
    Testimony.findAll()
        .then(testimonies => res.render('testimonios', {
            page: 'Testimonios',
            testimonies
        }))
}
exports.postTestimonies = (req, res) => {
    let { name, email, message } = req.body;
    let errors = [];
    if(!name) {
        errors.push({'message': 'Agrega tu nombre'});
    }
    if(!email) {
        errors.push({'message': 'Añade tu email'});
    }
    if(!message) {
        errors.push({'message': 'Dejanos tu mensaje'});
    }
    if(errors.length > 0){
        res.render('testimonios', {
            errors,
            name,
            email,
            message
        })
    } else {
        Testimony.create({
            name,
            email,
            message
        })
        .then(testimonies => res.redirect('/testimonios'))
        .catch(error => console.log(error))
    }
}