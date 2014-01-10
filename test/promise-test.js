// Tests pinkyswear.js with the Promises / A+ Test Suite (https://github.com/promises-aplus/promises-tests)
// Requires node.js installation.
// Run "npm install promises-aplus-tests" in this dir to install, and then run with "node promise-test.js pinkyswear.js"


var promisesAplusTests = require("promises-aplus-tests");

var pinkySwear         = require("../pinkyswear");
var pinkySwearMinified = require("../pinkyswear.min");


function getAdapter(pinkySwear) {
	/* jshint boss:true */
	return adapter = {
			deferred: function() {
				var p = pinkySwear();
				return {
					promise: p,
					resolve: function(value) {
						p(true, [value]);
					},
					reject: function(reason) {
						p(false, [reason]);
					}
				};
			}
	};
}

describe("Promise/A+ Tests", function() {
	this.timeout(200);

	describe("for pinkySwear", function() {
		promisesAplusTests.mocha(getAdapter(pinkySwear));
	});

	describe("for pinkySwear (minified)", function() {
		promisesAplusTests.mocha(getAdapter(pinkySwearMinified));
	});
});
