var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var passport = require("passport")
var pt = require("passport-twitter")

var app = express();

var port = process.env.PORT || 5000;      



//static directory where Angular
app.set("views",[path.join(__dirname,"views"),path.join(__dirname,"static")]);


//ejs view engine
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);


/***
  setting static dir same as view dir since angular's auto generated 
  javascript will be in the root and I dont't want to edit the auto generated files. */
                                                             
app.use([express.static(path.join(__dirname,"static")), express.static(path.join(__dirname,"assets"))]);



//some necessary plugins for session maintainance. ie: multi user access
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));



//lets's keep all other code of registering routes in /app
app = require("./app/router").registerRoutes(app)


//listen
app.listen(port,function(){
    console.log("Server started! at",port);
})