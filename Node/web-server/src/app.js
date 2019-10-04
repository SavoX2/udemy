const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const publicDir = path.join(__dirname, '..', 'public');
const viewsDir = path.join(__dirname, '..', 'templates', 'views'); // default je views
const partialsDir = path.join(__dirname, '..', 'templates', 'partials');

// setup handlebars engine and views location
app.set('view engine', 'hbs'); // templating engine
app.set('views', viewsDir); // direktorijum gdje su view-ovi
hbs.registerPartials(partialsDir);

// setup static directory to serve
app.use(express.static(publicDir));

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'Address must be provided'
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error
            });
        }
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return res.send({
                    error
                });
            }
            res.send({
                forecast: data,
                location,
                address: req.query.address,
            });
            
        });
    });
});

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    }
    res.send({
        products: []
    });
});

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App', 
        name: 'Savo Debeljak', 
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About', 
        name: 'Savo Debeljak', 
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'You is fucked',
        title: 'Help', 
        name: 'Savo Debeljak'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404', 
        name: 'Debeljak Savo', 
        errorMessage: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404', 
        name: 'Debeljak Savo', 
        errorMessage: 'Page not found'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});