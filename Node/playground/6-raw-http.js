const https = require('https');

const url = 'https://api.darksky.net/forecast/435b6cda0ba8fc4ce840d90b0d920b30/40,-75';

const request = https.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error) => {
    console.error('An error', error);
});

request.end();