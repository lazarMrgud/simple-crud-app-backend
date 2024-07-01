const mongoose=require("mongoose")


const ProductShema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter product name"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
    },{
        timestamps:true
    }
)


const Product =mongoose.model("Product",ProductShema )

module.exports=Product

