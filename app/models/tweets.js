var mongoose = require('mongoose')
var Schema = mongoose.Schema;


const tweetSchema = new Schema({
    user : String,
    tweets : []
})

module.exports = mongoose.model('tweet',tweetSchema);



