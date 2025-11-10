import React, {useState ,useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo.png'
import cart_icon from '../Assets/images/cart_icon.png'
import { Link } from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu]= useState("home")
    const {getTotalCartItems}=useContext(ShopContext)

    
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}>
            <Link style={{textDecoration:'none',color:'black'}} to='/'> HOME </Link>
            {menu==="home"?<hr/>:<> </>}
            </li>
        <li onClick={()=>{setMenu("store")}} >
            <Link style={{textDecoration:'none',color:'black'}} to='/store'>STORE </Link>
             {menu==="store"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}> 
          <Link  style={{textDecoration:'none',color:'black'}} to='/about'>ABOUT </Link>
           {menu==="about"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("contact")}}>
          <Link  style={{textDecoration:'none',color:'black'}} to='/contact'>CONTACT</Link>
           {menu==="contact"?<hr/>:<></>}</li>
        
      </ul>
      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token')
                    window.location.replace('/') }}>Logout</button>
        :<Link   to='/login'> <button>Login</button></Link>

        }  
        <Link to='/cart'>
        <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

      </div>
    </div>
  )
}

export default Navbar