

const express=require("express")
const Product =require("../modals/produc.modals.js")
const router=express.Router()
const {getProducts,getProduct,createProduct,updataProduct,deleteProduct}= require("../controller/product.controller.js")


router.get("/",getProducts)
router.get("/:id",getProduct)
router.post("/",createProduct)
router.put("/:id",updataProduct)
router.delete("/:id",deleteProduct)

module.exports=router