const request = require('request');
const geocode = require('./utils/geocode')
const url = 'https://api.darksky.net/forecast/435b6cda0ba8fc4ce840d90b0d920b30/37.8267,-122.4233?units=si&lang=sr';

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/banja%20luka.json?limit=2&access_token=pk.eyJ1IjoibWRwZXRmIiwiYSI6ImNrMHdib3pwYjBkMjczZG54Y2g4bTYwbzcifQ.zjxz6KRkOXRkJhXyvZs5dA&language=sr&limit=1';

// request({
//     url: url, 
//     json: true, 
// }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service.');
//     } else if(response.body.error) { 
//         console.log('Unable to find location');
//     } else {
//         const dataCurrently = response.body.currently;
//         const dataDaily = response.body.daily.data[0];
//         console.log(`It is currently ${dataCurrently.temperature} degrees Celsius out. There is ${dataCurrently.precipProbability}% chance of rain.`);
//         console.log(`${dataDaily.summary}`);
//     }
// }); 

geocode('Boston USA', (error, response) => {
    console.log('Error', error);
    console.log('Data', response);
});