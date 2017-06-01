var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var friendsSchema = new Schema({
    username : String,
    date : String
})



module.exports = mongoose.model('friends',friendsSchema);