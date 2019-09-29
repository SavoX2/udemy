const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

const location = process.argv[2];

if (!location) {
    return console.log('Niste naveli mjesto');
} else {
    geocode(location, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return console.log(error);
            }
            console.log(chalk.green.inverse(`Mjesto: ${location}.`));
            console.log(chalk.yellow(data));
        });
    });
}