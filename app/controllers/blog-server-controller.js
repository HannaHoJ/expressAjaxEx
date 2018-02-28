var Blog = require('mongoose').model('Blog');

exports.create = function(req, res, next){
	var blogEntry = new Blog(req.body);
	blogEntry.save(function(err){
		if(err){
			next(err);
		}else{
			res.json(blogEntry);
		}
	})
}