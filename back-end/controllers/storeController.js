import Product from '../models/Products.js'



export const store = async(req,res)=>{
let products = await Product.find({})
let store_product = products.slice(-6)

console.log("Product store  Fetched")
res.send(store_product)

}


