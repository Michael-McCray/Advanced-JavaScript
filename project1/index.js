var express  = require('express'); //
var app = express();
var hbs = require('hbs');//load handlebars into the app.js file
var routes = require('./routes/routes');
var ideaEngine = require('./ideas')

app.set('view engine', 'html');// use html
app.engine('html', hbs.__express); //use html like hbs filse
app.use(express.static('static'));
//routes:

app.use('/', routes);


app.listen(3000);

console.log('Node running on Port 3000');
