const Blockchain = require('./Blockchain');
const Block = require('./Block');
const db = require('./db')
const jayson = require('jayson');
const {startMining, stopMining, mine} = require('./mine');

// create a server
const server = new jayson.server({
    startMining: function(_, callback) {
        callback(null, 'Begin Mining!');
        startMining();
        mine();
      callback(null, 'success!');
    },
    stopMining: function(_, callback) {
        callback(null, 'Mining Stopped!');
        stopMining();
        mine();
    }
  });
  
server.http().listen(3000);

