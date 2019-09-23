const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

const location = process.argv[4];

if (location) {
    geocode(location, (error, response) => {
        if (error) {
            return console.log(error);
        }
        forecast(response.latitude, response.longitude, (error, data) => {
            if (error) {
                return console.log(error);
            }
            console.log(chalk.green.inverse(`Mjesto: ${response.location}.`));
            console.log(chalk.yellow(data));
        });
    });
} else {
    return console.log('Niste naveli mjesto');
}