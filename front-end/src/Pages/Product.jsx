import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'


const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {itemId}=useParams()




  if (!all_product || !Array.isArray(all_product)) {
    return <div>
      Chargement...
   

</div>
  }
  const product = all_product.find((e)=>e.id === Number(itemId)
)


  
    if (!product) {
    return <div>Product introuvable</div>;
    }
  
  return (
    <div>
          <Breadcrum product={product}/>
      
          <ProductDisplay product={product}/>
     
  

    </div>
  )
}

export default Product