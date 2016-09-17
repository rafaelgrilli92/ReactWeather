var names = ['Rafael', 'Felipe', 'Bruno', 'Henrique'];

// names.forEach(function(name) {
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Grilli'));

// var person = {
// 	name: 'Rafael Grilli',
// 	greet: function() {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// }

// person.greet();

// Challenge Area

var addExpression = (a, b) => {
	return a + b;
};

console.log(addExpression(5, 8));

var addStatement = (a, b) => a + b;

console.log(addStatement(10, 20));