const jayson = require('jayson');

// create a client
const client = new jayson.client.http({
  port: 3000
});

module.exports = client;