import express  from "express";
import {addproduct,allproduct,getSingleProduct,removeproduct,updateProduct,getProductBySearch} from './../controllers/productController.js'



const router =express.Router()

// add new product
router.post('/addproduct',addproduct)
router.get('/allproducts',allproduct)
router.get('/getSingleProduct/:id',getSingleProduct)
router.delete('/removeproduct/:id',removeproduct)
router.put('/updateProduct/:id',updateProduct)
//get Prododuct by search
router.get('/search/getProductBySearch',getProductBySearch)

export default router;