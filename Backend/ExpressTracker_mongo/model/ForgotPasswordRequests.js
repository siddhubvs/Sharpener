const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForgotPasswordRequestsSchema = new Schema({
     isactive:{
        type:String,
     },
     userId:{ 
     type:Schema.Types.ObjectId,ref:'User', 
     required:true 
    }
})

module.exports = mongoose.model('ForgotPasswordRequests', ForgotPasswordRequestsSchema);