var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var topDomainSchema = new Schema({
    domain : String,
    shares : Number
})



module.exports =  mongoose.model('topdomain',topDomainSchema);