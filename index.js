'use strict';
var dict = require('./dict.js');

module.exports = function (str,cb) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}
	if (typeof cb !== 'function') {
		throw new TypeError('Expected a callback function');
	}
	var res = dict.filter(function(v,i,a){
		return (Object.keys(v)[0]).toLowerCase() === str.toLowerCase();
	})[0]
	if(!res) {
		res = {};
		res[str] = 'No such word.'
	}
	cb(null,res)
};
