var ideas =[
{'id':1, 'title':'my first idea', 'body':'sneaker app', 'published':'11/5/2015'},
{'id':2, 'title':'my first idea', 'body':'sneaker app', 'published':'11/5/2015'},
{'id':3, 'title':'my first idea', 'body':'sneaker app', 'published':'11/5/2015'},
{'id':4, 'title':'my first idea', 'body':'sneaker app', 'published':'11/5/2015'},
{'id':5, 'title':'my first idea', 'body':'sneaker app', 'published':'11/5/2015'}];

exports.getIdeas= function(){
	return ideas;
};
exports.getOneIdea= function(id){
	for (var i =0; i < ideas.length; i++){
		if(ideas[i].id == id){
			return ideas[i];
		};
	};
}