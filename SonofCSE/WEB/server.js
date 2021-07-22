// server.js

var express = require('express');
var app = new express();
var cors = require('cors');
var http = require('http').Server(app); 
var io = require('socket.io')(http);    
var path = require('path');
var fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const User = require('./models/User');



mongoose.connect('mongodb://localhost/Com_it', {useNewUrlParser:true});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());

app.use(express.static(__dirname + '/public/stylesheets'));

app.get('/', (req, res) => {
	res.render('chat');
});

app.get('/map', (req, res)=> {
	res.render('map');
});

app.use(cors());

app.get('/comitFind', (req, res)=> {
	res.render('comitFind');
});
app.get('/comitMyProfile', (req, res)=> {
	res.render('comitMyProfile');
});
app.get('/comitProfile', (req, res)=> {
	res.render('comitProfile');
});
app.get('/comitTalk', (req, res)=> {
	res.render('comitTalk');
});

app.get('/monitor', async (req, res) => {
	const users = await User.find({});
	res.render('monitor', {
		users
	});
	console.log("users.length : " + users.length);
});

app.post('/posts/store', async (req, res) => {
	await User.create(req.body);
	res.redirect('/monitor');
});

var count=1; 
// 채팅방에 접속했을 때 - 1
io.on('connection', function(socket){
	console.log('user connected: ', socket.id);
	var name = "익명" + count++;
	socket.name = name;
	io.to(socket.id).emit('create name', name);
	
	// 채팅방 접속이 끊어졌을 때 - 2
	socket.on('disconnect', function(){
		console.log('user disconnected: '+ socket.id + ' ' + socket.name);
	});
	
	// 메세지를 보냈을 때 - 3 
	socket.on('send message', function(name, text){
		var msg = name + ' : ' + text;
		socket.name = name;
		console.log(msg);
		io.emit('receive message', msg);
	});
	
});

app.listen(4000, function(){ 
	console.log('server on..');
});