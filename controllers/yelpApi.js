'use strict';

const yelp = require('yelp-fusion');
// const Suggestion = require('../server-mongoose/models/suggestionModel')

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'jHGN3sB9Cp7TM6v2mlZHTA';
const clientSecret = 'e7j56E03cUSYOMhcEIQe8PpS2eKNqAaDrdGzNlJTSvPvnzECfdxwn3dqs0EQvEkP';

let yelpData;

//THIS WORKS//

const yelpApi = {

    sendYelpReq: (req, res, err) => {
        const searchRequest = {
            location: req.params.location, //grab query results to use as location parameter
            limit: 10
        };
        console.log(req.params)
        yelp.accessToken(clientId, clientSecret)
            .then(response => {
                const client = yelp.client(response.jsonBody.access_token);
                client.search(searchRequest)
                    .then(response => {
                        let result = [];
                        yelpData = (response.jsonBody.businesses);
                        for (let i = 0; i < yelpData.length; i++) {
                            let locations = {};
                            locations.name = yelpData[i].name;
                            locations.img = yelpData[i].image_url;
                            locations.url = yelpData[i].url;
                            locations.address = yelpData[i].location.display_address.reduce((x, y) => x.concat(y));
                            locations.phone = yelpData[i].display_phone
                            result.push(locations);
                        }
                        res.send(result);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            });

    }
}
module.exports = yelpApi;