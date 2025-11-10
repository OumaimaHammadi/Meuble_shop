import React from 'react'
import '../Hero/Hero.css'
import hero_image from '../Assets/images/hero_1.png'


const Hero = () => {
  return (
  
     
<div className="hero-container">
  <img src={hero_image}  alt="Hero" className="hero-image" />
  <div className="hero-content">
        

      <p >Discover The Best Furniture For You</p>
        <h1>Welcome To Our Furniture Shop </h1>


   
          <button className="shop-button">SHOP NOW</button>

       
      </div>

     
</div>





    
  )
}

export default Hero