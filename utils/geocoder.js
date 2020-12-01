const NodeGeocoder = require('node-geocoder');
const nodeFetch = require('node-fetch');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  fetch: function fetch(url, options) {
    return nodeFetch(url, {
      ...options,
      headers: {
        'user-agent': 'My application <email@domain.com>',
        'X-Specific-Header': 'Specific value',
      },
    });
  },
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
