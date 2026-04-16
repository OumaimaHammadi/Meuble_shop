import express from "express"
import { addtocart,removefromcart,getcart} from "../controllers/cartdataController.js"
const router = express.Router()
import fetchUser from '../utils/fetchUser.js'


router.post('/addtocart',fetchUser,addtocart)
// router.post('/removefromcart/:id',fetchUser,removefromcart)
router.post('/getcart',fetchUser,getcart)
router.post('/removefromcart',fetchUser,removefromcart)

export default router