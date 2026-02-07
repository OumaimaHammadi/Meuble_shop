import React , {useState,useEffect} from 'react'
import './Stores.css'
import Item from '../Item/item'
const BASE_URL = process.env.REACT_APP_BASE_URL ;





const Stores = () => {
    const [store_product,setStore_product]= useState([])
    
      useEffect(()=>{
       
        fetch(`${BASE_URL}/store`)
        .then((response)=> response.json())
        .then((data)=>setStore_product(data))
    
      },[])

    return (

        <div className='new-collections'>
        <h1>Our Store</h1>
        <hr />
    
        <div className='collections'>
            {store_product.map((item,i)=>{
                return <Item key={i} id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
    
                />
            })
                
            }
    
    </div>

                <div className="pagination">
            <a href='/store' >&laquo;</a>
            <a className="active" href='/store'>1</a>

            <a href='/store'>2</a>
            <a href='/store'>3</a>
            <a href='/store'>4</a>
            <a href='/store'>5</a>
            <a href='/store'>6</a>
            <a href='/store'>&raquo;</a>
            </div>
        </div>

      )



    }

export default Stores