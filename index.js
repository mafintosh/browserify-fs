'use strict';

const fs = require('level-filesystem');
const leveljs = require('level-js');
const levelup = require('levelup');

const db = levelup('level-filesystem', { db: leveljs });
module.exports = fs(db);
