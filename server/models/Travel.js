const Sequelize = require('sequelize');
const db = require('../config/database');
const Travel = db.define('travel', {
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    departureDate: {
        type: Sequelize.DATE
    },
    returnDate: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    disponibility: {
        type: Sequelize.STRING
    }
})
module.exports = Travel;