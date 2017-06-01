var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var domainSchema = new Schema({
    user : String,
    domains: []
})



module.exports = mongoose.model('domain',domainSchema);