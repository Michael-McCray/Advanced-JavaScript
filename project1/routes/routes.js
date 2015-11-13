var express  = require('express'); //

var routes = express.Router();
var ideaEngine = require('../ideas')

routes.get('/', function(req, res){
	res.render('index', { title: 'My Ideas', ideas: ideaEngine.getIdeas()});
});

routes.get('/about', function(req, res){
	res.render('about', { title: 'About Page', description : 'A practice Page'});
});
routes.get('/article/:id',function(req, res){
	var idea = ideaEngine.getOneIdea(req.params.id);
	res.render('article', {title: idea.title, idea:idea});
})

module.exports = routes;