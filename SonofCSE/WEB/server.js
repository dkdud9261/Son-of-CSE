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

var _id, nickname;

app.get('/login', (req, res)=> {
	res.render('login');
});

app.get('/chatlist', (req, res)=> {
	res.render('chatlist');
});

app.get('/comitFind', async (req, res)=> {
	const users = await User.find({});
	res.render('comitFind', {users});
});

app.get('/comitMyProfile', async (req, res)=> {
	const user = await User.findById(_id, (error, user) => {
		console.log(error, user);
	})
	res.render('comitMyProfile', {user});
});
app.get('/comitProfile', async (req, res)=> {
	const users = await User.find({});
	res.render('comitProfile', {users});
});
app.get('/comitTalk', async (req, res)=> {
	const user = await User.findById(_id, (error, user) => {
		console.log(error, user);
	})
	res.render('comitTalk', {user});
});

app.get('/admin/cate1', async (req, res) => {
	const users = await User.find({});
	res.render('admin/cate1', {users});
})

app.get('/admin/cate2', async (req, res) => {
	const users = await User.find({});
	res.render('admin/cate2', {users});
})

app.get('/admin/cate3', async (req, res) => {
	const users = await User.find({});
	res.render('admin/cate3', {users});
})

app.get('/admin', async (req, res) => {
	const users = await User.find({});
	res.render('admin/login', {users});
})

app.get('/admin/popup', async (req, res) => {
	const users = await User.find({});
	res.render('admin/popup', {users});
})

app.post('/posts/store', async (req, res) => {
	await User.create(req.body, (error, user) => {
		console.log(error, user);
		_id = user._id;
		nickname = user.nickname;
	});
	res.redirect('/comitFind');
});

app.post('/posts/edit', async (req, res) => {
	await User.findByIdAndUpdate(_id, {
		like: req.body.like
	}, (error, user) => {
		console.log(error, user)
		like = req.body.like;
		console.log("수정된 like : " + like);
	})
	res.redirect('/comitMyProfile');
})

var count=1; 
// 채팅방에 접속했을 때 - 1
io.on('connection', function(socket){
	console.log('user connected: ', socket.id);
	var name = nickname;
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

let port = process.env.PORT;
if(port == null || port == '') {
	port = 4000;
}

http.listen(port, function(){ 
	console.log('server on..');
});