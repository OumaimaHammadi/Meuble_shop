import React from 'react'
import './item.css'

import { useNavigate } from 'react-router-dom';


const Item = (props) => {

const navigate = useNavigate();


 

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/item/${props.id}`, {
    state: { menu: "store" }
  });
  };


  return (
    <div className='item'>
      {/* <Link to={`/item/${props.id}`}>
      <img onClick={window.scrollTo(0,0)}  src={props.image} alt="" />
      </Link> */}
            <img onClick={handleClick} src={props.image} alt="" />


        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
               $ {props.new_price}

            </div>

            <div className="item-price-old">
           $ {props.old_price}

            </div>

        </div>

    </div>
  )
}

export default Item