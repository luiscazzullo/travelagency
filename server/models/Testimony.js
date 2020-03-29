const Sequelize = require('sequelize');
const db = require('../config/database');
const Testimony = db.define('testimony', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
})
module.exports = Testimony;