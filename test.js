'use strict';
var assert = require('assert');
var sanskritDict = require('./');

it('should ', function (done) {
	sanskritDict('su', function(err,meaning){
		assert.strictEqual(typeof meaning,'object');
		done();
	});
});
