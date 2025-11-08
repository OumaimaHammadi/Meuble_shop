import Product from '../models/Products.js'



export const popularcollection= async(req,res)=>{
    
    // let products = await Product.find({category:'med'})
    let products = await Product.find()

    let popular_in_med = products.slice(0,6)
    console.log("popular collection Fetched")
    res.send(popular_in_med) 

}