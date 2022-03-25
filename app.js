var express = require('express');
var bodyParser = require('body-parser');
const path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

var port = 8080;

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/index.html',function(req,res){
	res.redirect('/');
});

app.get('/about',function(req,res){
	res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.get('/contact',function(req,res){
	res.sendFile(path.join(__dirname+'/public/contact.html'));
});

app.get('/srp',function(req,res){
	res.sendFile(path.join(__dirname+'/public/srp.html'));
});

app.get('/more',function(req,res){
	res.sendFile(path.join(__dirname+'/public/more.html'));
});


app.listen(port,function(req,res){
	console.log('Escuchando en el puerto: ' + port);
});