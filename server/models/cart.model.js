const mongoose = require('mongoose')

const Cart= new mongoose.Schema(
    {
      
    item:{type:String,required :true},
    address:{type:String,required:true},
    phone:{type:String,required:true},



    },
    {collection:'Cart-data'}

)

const model=mongoose.model('Cartdata',Cart)

module.exports =model