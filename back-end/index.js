const port =2000
import express from 'express'

import mongoose  from 'mongoose'

import multer from 'multer'
import path from 'path'
import cors from 'cors'
import productRoute from './routes/product.js'
import authRoute from './routes/auth.js'
import newproductsRoute from './routes/newProducts.js'
import popularproductsRoute from './routes/popularProducts.js'
import cartDataRoute from './routes/cartdata.js'
import storeRoute from './routes/store.js'



///////midleware
const app = express()
app.use(express.json())
app.use(cors())

//Database Connection with MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/Meuble-App-react')


//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})


//Image Storage Engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
         


    }

})


const upload = multer({storage:storage})


//Creating Upload Endpoint for images

app.use("/api/v1/images",express.static('upload/images'))


app.post('/api/v1/upload', upload.single('product'), (req, res) => {
    console.log(req.file)

    res.json({
        success:1,
        image_url:`http://localhost:${port}/api/v1/images/${req.file.filename}`
    })
})



app.use('/api/v1/products',productRoute)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/newproducts',newproductsRoute)
app.use('/api/v1/popularproducts',popularproductsRoute)
app.use('/api/v1/store',storeRoute)


app.use('/api/v1/cartData',cartDataRoute)





app.listen(port,(error) => {
    if(!error){
        console.log("server listening on port",port)


    }

    else{
        console.log("Error :" ,error)
    }
})

