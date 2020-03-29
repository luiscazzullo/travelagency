const express = require('express');
const router = express.Router();

//Controllers
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const travelsController = require('../controllers/travelsController');
const testimoniesController = require('../controllers/testimoniesController');

module.exports = function(){
    router.get('/', homeController.homeQueries);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', travelsController.travelsQueries);
    router.get('/viajes/:id', travelsController.travelQuerie);
    router.get('/testimonios', testimoniesController.showTestimonies);
    router.post('/testimonios', testimoniesController.postTestimonies);
    return router
}