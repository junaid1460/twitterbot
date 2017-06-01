var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    displayName : String,
    token:String,
    secret:String,
    photo:[]
})

module.exports = mongoose.model('users',userSchema);



