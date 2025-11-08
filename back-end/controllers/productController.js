import Product from '../models/Products.js'


export const addproduct = async(req,res)=>{
    

 let products = await Product.find({})
    let id;
    if(products.length > 0)
    {
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id+1
    }

    else{
        id=1
    }

const product =new Product(
    {
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
     


    })
        console.log(product)
    await product.save()
    console.log("Saved")
    res.json({
        success:true,
        name:req.body.name
    })


}



export const allproduct=async(req,res)=>{
    let products = await Product.find({})
    console.log("All Products Fetched")
    res.send(products)

}


export const getSingleProduct = async(req,res)=>{
     const id =req.params.id

    try{
       const product = await Product.findById(id)
      res.status(200).json(
            {success:true,
            message:'Successfully Fetched',
            data:product

            })

    }catch(err){

        res.
        status(404).
        json({
            success:false,
            message:'not found'
        })

    }
}



export const removeproduct = async(req,res)=>{
   const id =req.params.id

    try{
         await Product.findByIdAndDelete(id)


        res.
        status(200)
        .json({
            success:true,
            message:'Successfully deleted',

            })

    }catch(err){

        res.
        status(500).
        json({
            success:false,
            message:'Failed to  deleted from Controller'})

    }
}



export const updateProduct = async(req,res)=>{
    const id =req.params.id

    try{
        const updateProduct = await Product.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})


        res.
        status(200)
        .json(
            {success:true,
            message:'Successfully created',
            data:updateProduct

            })

    }catch(err){

        res.
        status(500).
        json({
            success:false,
            message:'Failed to  created from Controller'})

    }
}

export const getProductBySearch = async(req,res)=>{
    //here 'i' means case sensitive

    const category =new RegExp(req.query.category,'i')
    const name =new RegExp(req.query.name,'i')

   

    try {
        const Products = await Product.find({
            category,
            name
          
                })
                //.populate('reviews') 
     
        res.status(200).json({
            success:true,
            count:Products.length,
            message:'Successful',
            data:Products,

            })

    } catch (err) {

        res.status(404).json({
            success:false,
            message:'Failed to  created from Controller'})

        
    }


}



 