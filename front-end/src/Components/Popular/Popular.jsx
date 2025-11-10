import React , {useState,useEffect} from 'react'
import './Popular.css'
import Item from '../Item/item'


const Popular = () => {
  const [popular_product,setPopular_product]= useState([])

  useEffect(()=>{
    fetch('http://localhost:2000/api/v1/popularproducts')
    .then((response)=> response.json())
    .then((data)=>setPopular_product(data))

  },[])

  return (
    <div className='popular'>
        <h1>POPULAR PRODUCTS</h1>
        <hr />

        

        <div className="popular-item">
            {popular_product.map((item,i)=>{
                return <Item key={i} id={item.id}
                
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}

                />
            })}
        </div>

    </div>
  )
}

export default Popular