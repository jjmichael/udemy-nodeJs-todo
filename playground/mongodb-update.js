const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');
	
	// Update with a promise
//	db.collection('Todos').findOneAndUpdate({
//		_id: new ObjectID('58e5f95eb8c5f888191e4fcf')
//	}, {
//		$set: {
//			completed: true
//		}
//	}, {
//		returnOriginal: false
//	}).then((result) => {
//		console.log(result);
//	})
	
	// Update with a callback function
	db.collection('Users').findOneAndUpdate({
		name: "JJ Michael"
	}, {
		$set: {
			location: "Bangkok"
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	},
		(err, res) => {
		console.log(res);
	});
	
	db.close();
});