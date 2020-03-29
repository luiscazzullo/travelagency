const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const configs = require('./config');
const routes = require('./routes');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes());
app.set('view engine', 'pug');
app.use(express.static('public'));
const config = configs[app.get('env')];
app.locals.title = config.title;
app.use((req, res, next) => {
    const date = new Date();
    res.locals.year = date.getFullYear();
    res.locals.route = req.path;
    return next();
})
app.set('views', path.join(__dirname, 'views'));
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port);