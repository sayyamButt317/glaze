const mongoose = require('mongoose')
const categoryschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
})
export const Category = mongoose.model("category",categoryschema)