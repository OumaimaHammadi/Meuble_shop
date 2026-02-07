import express from 'express'
import mongoose  from 'mongoose'



import cors from 'cors'
import uploadImage from './routes/upload.js'

import productRoute from './routes/product.js'
import authRoute from './routes/auth.js'
import newproductsRoute from './routes/newProducts.js'
import popularproductsRoute from './routes/popularProducts.js'
import cartDataRoute from './routes/cartdata.js'
import storeRoute from './routes/store.js'

import cookieParser from "cookie-parser"


import dotenv from 'dotenv';
dotenv.config();



///////midleware
const app =express()
const port = process.env.PORT || 6000
const corsOptions = {
    
}

///////midleware

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())




//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Database Connection with MongoDB


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));






app.use("/api/v1/images",uploadImage)

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



