var leveldown = require('asyncstorage-down');
var levelup = require('levelup');
var fs = require('level-filesystem');

var db = levelup('level-fs', { db: leveldown });
module.exports = fs(db);