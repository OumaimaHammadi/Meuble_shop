import React , {useState,useEffect} from 'react'
import './NewProducts.css'
import Item from '../Item/item'

const NewProducts = () => {

  const [new_product,setNew_product]= useState([])

  useEffect(()=>{
    fetch('http://localhost:2000/api/v1/newproducts')
    .then((response)=> response.json())
    .then((data)=>setNew_product(data))

  },[])

  return (


    <div className='new-products'>
    <h1>NEW PRODUCTS</h1>
    <hr />

    <div className='products'>
        {new_product.map((item,i)=>{
            return <Item key={i} id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}

            />
        })
            
        }

</div>
    </div>
  )
}

export default NewProducts






