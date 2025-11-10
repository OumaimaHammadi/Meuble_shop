import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/images/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const {product}=props

  return (
   


    <nav className="breadcrumb">
    <a href="/">Home</a>
    <img src={arrow_icon} alt="" />
    <a href="/store">Store</a>
    <img src={arrow_icon} alt="" />
    <span className="current">{product.name}</span>
  </nav>
  )
}

export default Breadcrum