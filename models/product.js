var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
    prodId:{
        type:Number,
        default: ''
    },  
    name:{
        type: String,
        required: true
    },
    mrp:{
        type: Number,
        required: true
    },
    sp:{
        type: Number,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    subcat:{
        type: String,
        required:true
    },
    featured:{
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('Product', Product);