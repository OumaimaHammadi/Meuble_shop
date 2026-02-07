import {Router} from "express";
import {uploadImageController}from '../controllers/uploadImageController.js'

import upload from '../utils/multer.js'
const router =Router()


router.post('/upload',upload.single('furniture'),uploadImageController);

export default router;
