import React, { useContext  } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom';


const ProductDisplay = (props) => {
  const {product}=props
  const {addToCart}=useContext(ShopContext)

   const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product.id);
    navigate('/cart',{state: { menu: "cart" }})
  }


  // const [quantity, setQuantity] = useState(1);

  // const increment = () => setQuantity(quantity + 1);
  // const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);



  return (
    <div className='productdisplay'>

        <div className='productdisplay-left'>

         

          <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt="" />


          </div>

          </div>

        <div className='productdisplay-right'>
          <h1>{product.name}</h1>
      
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">
              ${product.old_price}
            </div>

            <div className="productdisplay-right-prices-new">
              ${product.new_price}
            </div>
          </div>

      

          <div className="productdisplay-right-description">
          This is a modern upholstered armchair featuring a soft, 
          light-blue fabric finish. It has a high, 
          slightly winged backrest with button tufting for added style, 
          along with padded armrests and a cushioned seat for comfort.
           The chair stands on four angled wooden legs, giving it a clean, 
           mid-century-inspired look that would fit well in a living room or
            reading corner.


           </div>


         {/*   <div className="quantity-selector">
          <button onClick={decrement}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={increment}>+</button>
        </div> */}


           <div className="btn-add-toCart">
          

            {/* <button onClick={(()=>{addToCart(product.id)})}>ADD TO CART</button> */}


           <button onClick={handleAddToCart}>ADD TO CART</button>

</div>




           

         

           

            </div>

         
       
    </div>

  )
}

export default ProductDisplay