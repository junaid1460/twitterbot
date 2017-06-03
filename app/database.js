var express = require("express")
var mongoose = require("mongoose")
// <3 mlab
mongoose.connect('mongodb://user:pass@ds157571.mlab.com:57571/site')
var router = express.Router()



module.exports.Tweet = require('./models/tweets')
module.exports.User = require("./models/users")
//to be called by upper layer
function registerRoutes(app){
    app.use("/",router);
    return app;
}
module.exports.registerRoutes = registerRoutes;



