import express  from "express";
import {popularcollection} from '../controllers/popularProductsController.js'

const router =express.Router()


router.get('/',popularcollection)
export default router;