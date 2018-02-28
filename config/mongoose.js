var mongoose = require('mongoose');

module.exports = function(){

	var db = mongoose.connect('mongodb://localhost/blog');
	console.log('connected to mongodb');
	require('../app/models/blog-server-model.js');
	return db;
}