#!/usr/bin/env node
'use strict';
var sanskritDict = require('./index');
var pkg = require('./package.json');
var input = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ echo <word> | sanskrit-dict');
	console.log('  $ sanskrit-dict <word>');
}

function means(word) {
	sanskritDict(word,function(err,meaning){
		console.log(word,' : ',meaning[Object.getOwnPropertyNames(meaning)[0]]);
	});
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}
	means(input);
} else {
	process.stdin.once('data', function (data) {
		means(data.toString().replace(/\n/,''));
	});
}
