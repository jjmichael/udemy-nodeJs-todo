//const MongoClient = require('mongodb').MongoClient;

// Object Destructuring. Same as code above.
const {MongoClient, ObjectID} = require('mongodb');

// Object Destructuring
//var user = {
//	name: 'JJ',
//	age: 39
//};
//var {name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');
	
	// Find all todos
//	db.collection('Todos').find().toArray().then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, (err) => {
//		console.log('Unable to fetch todos.', err);
//	});

	// Find only uncompleted todos
//	db.collection('Todos').find({completed: false}).toArray().then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, (err) => {
//		console.log('Unable to fetch todos.', err);
//	});
	
		// Find by id
//	db.collection('Todos').find({
//		// Get ID by using object destructuring 
//		_id: new ObjectID('58e57c6a7d85268fb4748dfb')
//	}).toArray().then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, (err) => {
//		console.log('Unable to fetch todos.', err);
//	});
	
			// Find users in LA
		db.collection('Users').find({location: "Los Angeles"}).toArray().then((docs) => {
			console.log('Users in LA:');
			console.log(JSON.stringify(docs, undefined, 2));
		
	}, (err) => {
		console.log('Unable to fetch todos.', err);
	});
	 
	db.close();
});