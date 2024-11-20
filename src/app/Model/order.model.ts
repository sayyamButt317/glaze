const mongoose = require('mongoose')

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true,
    },
    orderStatus:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    }
},{timestamps:true}
)