var express = require("express")
var mongoose = require("mongoose")
mongoose.connect('mongodb://crook:123456789@ds157571.mlab.com:57571/site')
var router = express.Router()



module.exports.Tweet = require('./models/tweets')
module.exports.User = require("./models/users")
module.exports.Domain = require('./models/domain')
module.exports.TopDomains = require('./models/topdomains')
module.exports.Friend = require('./models/topdomains')
//to be called by upper layer
function registerRoutes(app){
    app.use("/",router);
    return app;
}
module.exports.registerRoutes = registerRoutes;



