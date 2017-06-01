var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// tweet model
const tweetSchema = new Schema({
    user : String,
    tweets : []
})

module.exports = mongoose.model('tweet',tweetSchema);



