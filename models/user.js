var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var x=100;
var userSchema = new Schema({
    custId:{
        type:String,
        default:''
    },  
    name:{
        type: String,
        default: ''
    },
    phone:{
        type: Number,
        default: ''
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        default: ''
    },
    isAdmin:{ 
        type: Boolean,
        default: false
    }
},

    {timestamps:true}
);
x++;
Users= mongoose.model('User', userSchema);
module.exports = Users