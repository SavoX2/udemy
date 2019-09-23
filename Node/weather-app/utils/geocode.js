const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?limit=2&access_token=pk.eyJ1IjoibWRwZXRmIiwiYSI6ImNrMHdib3pwYjBkMjczZG54Y2g4bTYwbzcifQ.zjxz6KRkOXRkJhXyvZs5dA&language=sr&limit=1';
    request({
        url: url,
        json: true, 
    }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services.');
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search term.');
        } else {
           callback(undefined, {
               latitude: response.body.features[0].center[1], 
               longitude: response.body.features[0].center[0], 
               location: response.body.features[0].place_name,
           });
        }
    });
};

module.exports = geocode;