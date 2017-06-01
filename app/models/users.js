var mongoose = require('mongoose')
var Schema = mongoose.Schema;


// user model
const userSchema = new Schema({
    username : String,
    displayName : String,
    token:String,
    secret:String,
    photo:[]
})

module.exports = mongoose.model('users',userSchema);



