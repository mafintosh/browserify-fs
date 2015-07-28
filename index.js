var leveljs = require('level-js');
var levelup = require('levelup');
var fs = require('level-filesystem');

var db = levelup('level-filesystem', {db:leveljs});
var fsdb = fs(db);
fsdb.ReadStream = require("readable-stream/readable")

module.exports = fsdb
