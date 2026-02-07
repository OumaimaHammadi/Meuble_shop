import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/home';
import Footer from './Components/Footer/Footer'
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import Store from './Pages/Store';
import Ourcheckout from './Pages/Ourcheckout';
import Thankyou from './Pages/Thankyou';





function App() {
  return(
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/login' element={<LoginSignup/>} />
      <Route path='/item' element={<Product/>} >
          <Route path=':itemId' element={<Product/>} />
      </Route>
      
      <Route path='/cart' element={<Cart/>} />
      <Route path='/store' element={<Store/>} />
      <Route path='/checkout' element={<Ourcheckout/>} />
      <Route path='/thankyou' element={<Thankyou/>} />




      </Routes>

      <Footer/>

      </BrowserRouter>
      )
 
}

export default App;
