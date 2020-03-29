const Travel = require('../models/Travel');
const Testimony = require('../models/Testimony');
exports.homeQueries = (req, res) => {
    const queries = [];
    queries.push(Travel.findAll({
        limit: 3
    }))
    queries.push(Testimony.findAll({
        limit: 3
    }))
    const getQueries = Promise.all(queries)
    getQueries.then(results => res.render('index', {
        page: 'Próximos viajes',
        css: 'home',
        travels: results[0],
        testimonies: results[1]
    }))
}