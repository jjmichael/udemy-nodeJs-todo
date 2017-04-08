var {mongoose} = require('./db/mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	firstName: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
});

//var newTodo = new Todo({
//	text: 'Cook dinner'
//});
//
//newTodo.save().then((doc) => {
//	console.log('Saved todo', doc);
//}, (e) => {
//	console.log('Unable to save todo');
//});
//
//var anotherTodo = new Todo ({
//	text: 'laundry',
//	completed: true,
//	completedAt: 1491478018651
//})
//
//var oneMoreTodo = new Todo ({
//	text: 'Pay Taxes',
//})
//
//oneMoreTodo.save().then((doc) => {
//	console.log('Saved todo', doc);
//}, (err) => {
//	console.log('Unable to save todo', err);
//});

var jj = new User ({
	email: 'jjmichael@gmail.com',
	firstName: 'JJ',
	lastName: 'Michael'
});

jj.save().then((doc) => {
	console.log('New user saved.', doc);
}, (err) => {
	console.log('Could not save user.', err);
});