import express  from "express";
import {newproducts} from '../controllers/newProductsController.js'

const router =express.Router()


router.get('/',newproducts)
export default router;