import Product from '../models/Products.js'



export const newproducts = async(req,res)=>{
let products = await Product.find({})
let newproduct= products.slice(1).slice(-3)
console.log("NewProducts Fetched")
res.send(newproduct)

}


