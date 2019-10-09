var leveljs = require('level-js');
var levelup = require('levelup');
var leveldown = require('leveldown');
var fs = require('level-filesystem');

var db = levelup(leveldown('level-filesystem'), {db:leveljs});
module.exports = fs(db);