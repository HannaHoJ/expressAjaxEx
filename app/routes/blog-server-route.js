var index = require('../controllers/blog-server-controller');

module.exports = function(app){
	app.route('/blog')
		// .get(index.list);
	 	.post(index.create);

	// app.param('blogid', index.findBlogById);

	// app.route('/blog/:blogid')
	// 	.get(index.getBlog)
	// 	.delete(index.removeBlog)

}