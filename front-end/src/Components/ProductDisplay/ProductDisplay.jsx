import React, { useContext,useState  } from 'react'
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


  const [activeTab, setActiveTab] = useState('ordering');

  const data = [
    {
      material: 'OTC022401',
      description: 'Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle',
      packaging: '1 BT'
    },
    {
      material: 'OTC022401',
      description: 'Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle',
      packaging: '144/CS'
    },
    {
      material: 'OTC022401',
      description: 'Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle',
      packaging: '1 EA'
    }
  ];

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


<div className="ordering-container">
      <div className="tabs">
        <div className="btn-information">


          <div className="Ordering-Information">

        <button
          className={activeTab === 'ordering' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('ordering')}
        >
          Ordering Information
        </button>
        </div>

                    <div className="Specification">

        <button
          className={activeTab === 'specs' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('specs')}
        >
          Specifications
        </button>
        </div>
        </div>
        

      </div>

      {activeTab === 'ordering' && (
        <table className="ordering-table">
          <thead>
            <tr>
              <th>Material</th>
              <th>Description</th>
              <th>Packaging</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.material}</td>
                <td>{row.description}</td>
                <td>{row.packaging}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

           

           
           {/* <div className="btn-information">
            <div className="Ordering-Information">
            <button onClick={(()=>{addToCart(product.id)})}>Ordering Information</button>


            </div>
            <div className="Specification">

            <button onClick={(()=>{addToCart(product.id)})}>Specification</button>

            </div>

           </div> */}

           

            </div>

         
       
    </div>

  )
}

export default ProductDisplay