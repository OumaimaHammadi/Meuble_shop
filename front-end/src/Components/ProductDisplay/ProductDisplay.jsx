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
    navigate('/cart');
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
              Bioderma Sensibio H2O is a micellar water specially formulated 
              for sensitive skin. It gently cleanses the face, eyes, and lips,
              while effectively removing makeup and impurities. 
              Enriched with soothing active ingredients, 
              it respects the skin's natural balance without damaging it.

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