

var calculator = {
	name: 'ti-01',
	version: 0.1,
	// save answers in this variable
	answers: [],

	// properties long with methods needed
	calculate: {
		add: function(a, b) {
			calculator.answers.push(a+b); 
		},

		subtract: function(a, b) {
			calculator.answers.push(a-b); 
		}, 

		multiply: function(a, b) {
			calculator.answers.push(a * b); 
		}, 

		divide: function(a, b) {
			calculator.answers.push(a/b); 
		},

		// uses modulo to find the remainder
		remainder: function(a, b) {
			calculator.answers.push(a % b); 
		}
	},
};