const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/lastdayinternship', function(err, conn){
  if (err) {
    return console.log('Gagal connect ke database');
  }
  console.log('Berhasil connect ke database');
})

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var userSchema = new mongoose.Schema({
  email: String,
  password: String
})

var user = mongoose.model('user', userSchema);

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ROUTES-ROUTES-ROUTES-ROUTES-ROUTES-ROUTES-ROUTES-ROUTES

app.get('/', function(req, response){
  response.render('home.ejs')
})

// BIKIN ROUTE KE /REGISTER
//   RENDER VIEW REGISTER
app.get('/register', function(req, res){
  res.render('register')
})

app.post('/register', function(req, res){
  var userbaru = req.body;
  user.create(userbaru, function(err, result){
    if (err) {
      return console.log('Gagal create user baru');
    }
    res.render('hasil.ejs', {user : result})
  })
})

// BUAT CARI 1 USER YANG EMAIL = emailbaru@gmail.com
app.get('/cari/user/:email', function(req, res){
  user.findOne({email : req.params.email}, function(err, result){
    if (err) {
      return console.log('Data tidak ada');
    }
    res.render('cariuser.ejs', {user : result})
  })
})
// user.find({}) == select * from tabelblablabla
app.get('/semuauser', function(req, res){
  user.find({}, function(err, result){
    if (err) {
      return console.log('Data tidak ada');
    }
    res.render('semuauser.ejs', {users : result})
  })
})

app.get('/userbaru', function(req, res){
  user.create({
    email : "emailbaru@gmail.com",
    password : "rahasia"
  }, function(err, result){
    if (err) {
      return console.log('Error saat create user');
    }
    console.log(result);
  })
})

app.get('*', function(req, res){
  res.send('404 Page not found')
})

// app.get('*')

// app.post()

app.listen(8000, function(err, connect){
  if (err) {
    return console.log('Server gagal connect ke port 8000');
  }
  console.log('Connected on port 8000');
});
