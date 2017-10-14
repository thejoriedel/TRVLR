'use strict';

const yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'jHGN3sB9Cp7TM6v2mlZHTA';
const clientSecret = 'e7j56E03cUSYOMhcEIQe8PpS2eKNqAaDrdGzNlJTSvPvnzECfdxwn3dqs0EQvEkP';

let yelpData;

const searchRequest = {
    // term:'Four Barrel Coffee',
    location: 'san francisco, ca', //grab query results to use as location parameter
    limit: 10
};

//THIS WORKS//
// let yelpSearch = new Promise((resolve, reject) => {
yelp.accessToken(clientId, clientSecret)
    .then(response => {
        const client = yelp.client(response.jsonBody.access_token);
        client.search(searchRequest)
            .then(response => {
                let result = [];
                yelpData = Object.entries(response.jsonBody.businesses);
                for (let i = 0; i < yelpData.length; i++) {
                    let suggestions = {};
                    suggestions.name = yelpData[i][1].name;
                    suggestions.img = yelpData[i][1].image_url;
                    suggestions.url = yelpData[i][1].url;
                    // suggestions.catagories = yelpData[i][1].catagories,
                    suggestions.address = yelpData[i][1].location.display_address.reduce((x, y) => x.concat(y));
                    suggestions.phone = yelpData[i][1].display_phone
                    result.push(suggestions);
                }
                console.log(result);
            }).catch(e => {
                console.log(e);
            });
    });
