import express  from "express";
import {store} from '../controllers/storeController.js'

const router =express.Router()


router.get('/',store)
export default router;