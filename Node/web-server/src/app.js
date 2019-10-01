const path = require('path');
const express = require('express');
const hbs = require('hbs');

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
    res.send({
        forecast: 'Suncano',
        location: 'Banja Luka',
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

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});