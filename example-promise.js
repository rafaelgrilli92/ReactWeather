function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			setTimeout(function(){
				resolve(a + b);
			}, 2000);
		} else {
			reject('Both args needs to be numbers');
		}
	});
}

addPromise(10, 5).then(function(result) {
	console.log('Promise Success:', result);
}, function(err) {
	console.log('Promise Error:', err);
});

addPromise('a', 5).then(function(result) {
	console.log('Promise Success:', result);
}, function(err) {
	console.log('Promise Error:', err);
});