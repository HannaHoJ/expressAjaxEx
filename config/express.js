var express = require('express');


module.exports = function(){
	var app = express();
	app.use(express.static('./public'));

	var logger = function (req, res, next){
		console.log(req.method, req.url);
		next();
	}

	

	app.set('views', './app/views');
    app.set('view engine', 'ejs');

	// app.use('/blog', function(req, res, next){
	// 	console.log('hallo');
	// 	next();
	// })
	app.use(logger);
	app.use('/blog', (req, res, next) => {
	//https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
		res.render('index')
  		//res.sendFile(path.join(__dirname, '../public', ));
  		next();
	});

	require('../app/routes/blog-server-route.js')(app);

	
	return app;
}
