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
const DBurl = require('./public/javascripts/keys');

mongoose.connect(DBurl, {useUnifiedTopology: true, useNewUrlParser:true});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());

app.use(express.static(__dirname + '/public/stylesheets'));

app.get('/', (req, res) => {
	res.redirect('/login');
});

app.get('/test', (req, res)=> {
	res.render('map');
});

app.get('/login', (req, res)=> {
	res.render('login');
});

app.get('/comitFind', async (req, res)=> {
	const users = await User.find({});
	res.render('comitFind', {users});
});
var nickname, image;
app.get('/comitMyProfile', (req, res)=> {
	res.render('comitMyProfile', {nickname, image});
	console.log(nickname + " " + image);
});
app.get('/comitProfile', async (req, res)=> {
	const users = await User.find({});
	res.render('comitProfile', {users});
});
app.get('/comitTalk', (req, res)=> {
	res.render('comitTalk');
});

app.post('/posts/store', async (req, res) => {
	await User.create(req.body);
<<<<<<< HEAD
	nickname = req.body.nickname;
	image = req.body.image;
	//console.log(nickname + " " + image);
=======
>>>>>>> 22a9d793b1ee551e736ea4138d59daa664270ff9
	res.redirect('/comitFind');
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

http.listen(4000, function(){ 
	console.log('server on..');
});