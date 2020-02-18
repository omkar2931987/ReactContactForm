var express = require("express");
const cors = require('cors');
var app = express();
var mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use cors to allow cross origin resource sharing
app.use(
    cors({
      origin:'http://localhost:3000',
      credentials: true,
    }));

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactjsapp"
  });

  connection.connect();

  app.post('/createcontact', function(req, res) {
    var fullname = req.body.fullname;
    var email = req.body.email;
    var telephone = req.body.telephone;
    var message = req.body.message;

    var savecontact = "INSERT into contactform(Fullname,Email,Telephone,Message) VALUES('"+fullname+"','"+email+"','"+telephone+"','"+message+"')"

    connection.query(savecontact, function (err, rows, fields) {
        if (err) throw err
      
        console.log('Contact Created')
      })    
  });

app.listen(3001,function(){
  console.log("Started on PORT 3001");
})