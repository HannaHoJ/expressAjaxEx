// GET		/todos			>> Get all of the todos
// POST		/todos			>> Create a single todo
// DELETE	/todos/:todo_id	>> Delete a single todo


var express = require('./config/express');
var mongoose = require('./config/mongoose');
//get http and https servers
//var https = require('https');
// var http = require('http');
var path = require('path'); 
//parse json request bodies
var bodyParser = require('body-parser')

var db = mongoose();
var app = express();
var port = process.env.PORT || 5000;


//use bodyParser as middleware
// app.use(bodyParser.urlencoded({ extended: false }));
//creates error
//app.use(bodyParser.json());

//importent have index.js ??????Why????
//https://stackoverflow.com/questions/39912609/how-to-include-static-files-in-express-js
// app.use(express.static(__dirname + '/src'));

// //middleware function at /
// app.use('/', (req, res, next) =>{
// 	//in case you want to add middleware.
// 	next();
// })
// //serve index.html as file
// app.get('/', (req,res) => {
// 	//https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
//   	res.sendFile(path.join(__dirname, './src', 'index.html'));
// });


// //https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
// app.post('/:item', function (req, res) {
// 	console.log('params: ' + JSON.stringify(req.params, null, 4));
// 	console.log('body: ' + JSON.stringify(req.body));
//   	// res.json(req.params);
//   	// res.redirect('/');
//   	// res.end();
//   	res.send({ what: 'ever', i: 'want' });

// })

// app.delete('/item', function (req, res) {
// 	res.status(200);
// 	res.setHeader('Content-type', 'text/json');	
// 	res.json(req.body);		
//   	return res.send('Got a DELETE request at /item');
// })

// http.createServer(app).listen(port);

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});

module.exports = app;
