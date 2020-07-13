const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
       type: String,
       required: true,
       trim: true
    },
    price: {
        type:Number,
        required: true
    },
    stack: {
        type:Number,
        required: true
    },
    category:{
        type: String,
        required: true,
         trim: true
    },
    image:{
        type: String,
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('Product', ProductSchema);