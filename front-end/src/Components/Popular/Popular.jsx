import React , {useState,useEffect} from 'react'
import './Popular.css'
import Item from '../Item/item'
const BASE_URL = process.env.REACT_APP_BASE_URL ;


const Popular = () => {
  const [popular_product,setPopular_product]= useState([])

  useEffect(()=>{

     fetch(`${BASE_URL}/popularproducts`)

    .then((response)=> response.json())
    .then((data)=>setPopular_product(data))

  },[])

  return (
    <div className='popular'>
        <h1>POPULAR COLLECTIONS</h1>
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