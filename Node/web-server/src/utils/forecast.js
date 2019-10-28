const request = require('request');

const url = 'https://api.darksky.net/forecast/435b6cda0ba8fc4ce840d90b0d920b30/'
const options = '?units=si&lang=sr';

const forecast = (latitude, longitude, callback) => {
    request({
        url: url + latitude + ',' + longitude + options,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service.');
        } else if (body.error) {
            callback('Unable to find location.');
        } else {
            callback(undefined, `Trenutno je ${body.currently.temperature} stepeni Celzijusa vani. Najveća temperatura danas iznosi ${body.daily.data[0].temperatureHigh}, a najniža ${body.daily.data[0].temperatureLow}. Sanse sa kisu su ${body.currently.precipProbability}%. ${body.daily.data[0].summary}`)
        }
    });
};

module.exports = forecast;