var express = require('express');
var bodyParser = require('body-parser');
const path = require("path");

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

var port = 8080;

app.get('/',function(req,res){
	res.render("index")
});

app.get('/index.html',function(req,res){
	res.redirect('/');
});

app.get('/about',function(req,res){
	res.render("about")
});

app.get('/contact',function(req,res){
	res.render("contact")
});

app.get('/services',function(req,res){
	res.render("services")
});

app.get('/team',function(req,res){
	res.render("team")
});

app.get('/checkout',function(req,res){
	res.render("checkout")
});

app.get('/news',function(req,res){
	res.render("news")
});

app.get('/more',function(req,res){
	res.render("services")
});


app.listen(port,function(req,res){
	console.log('Escuchando en el puerto: ' + port);
});