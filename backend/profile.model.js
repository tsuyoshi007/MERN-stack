const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let profileModel = new Schema({
    name: {
        type:String
    },
    age:{
        type:String
    },
    gender:{
        type:String
    }
});

module.exports = mongoose.model ('profileModel',profileModel);