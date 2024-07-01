
const express=require("express")
const mongoose=require("mongoose")
const Product =require("./modals/produc.modals.js")
const ProductRute =require("./routs/prodoct.routs.js")


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.use("/api/products", ProductRute)
app.get("/", (req,res)=>{
    res.send("хелло")
})

mongoose.connect("mongodb+srv://lazarmrgud91:WVPw6B2EndQrQvrs@cluster0.uoaw3jm.mongodb.net/node-apl?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("server 5000")
    })
    console.log("Conekted on database")
}).catch(()=>{
    console.log("Connection on faild")
})