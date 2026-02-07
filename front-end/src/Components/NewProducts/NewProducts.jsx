import React , {useState,useEffect} from 'react'
import './NewProducts.css'
import Item from '../Item/item'
const BASE_URL = process.env.REACT_APP_BASE_URL ;


const NewProducts = () => {

  const [new_product,setNew_product]= useState([])

  // useEffect(()=>{
  //   fetch(`${BASE_URL}/newproducts`)

  //   .then((response)=> response.json())
  //   .then((data)=>setNew_product(data))

  // },[])


    useEffect(() => {
     fetch(`${BASE_URL}/newproducts`)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => setNew_product(data))
    .catch(error => console.error('Fetch error:', error));
}, []);

  return (
    <div className='new-products'>
    <h1>NEW COLLECTIONS</h1>
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






