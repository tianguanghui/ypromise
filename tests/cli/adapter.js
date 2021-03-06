/*
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
exports.resolved = function (value) {
    return Promise.resolve(value);
};
exports.rejected = function (reason) {
    return Promise.reject(reason);
};
exports.deferred = function () {
	var deferred = {};

	deferred.promise = new Promise(function (resolve, reject) {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});

	return deferred;
};
