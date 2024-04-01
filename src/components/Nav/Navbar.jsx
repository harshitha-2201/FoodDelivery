import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setLogin}) => {

  const {getTotalCartAmount}  = useContext(StoreContext)
  return (
    <div className='nav-main-container'>
      <Link to='/'>
       <Link to = '/' ><img src={assets.logo} alt='logo' className='nav-logo' /></Link>
      </Link>
      <ul className='nav-ul'>
        <Link to='/'>Home</Link>
        <a href='#explore-menu'>Menu</a>
        <a href='#app-download'>Mobile-app</a>
        <a href='#footer'>Contact us</a>
      </ul>
      <div className='nav-btns'>
        <img src={assets.search_icon} alt='search-icon' />
        <div className='basket-icon'>
          <Link   to = '/cart' ><img src={assets.basket_icon} alt='basket-icon' /></Link>
          <div className= {getTotalCartAmount() ===0? " ": "dot"}></div>
        </div>
        <button onClick = {() =>setLogin(true)}>SignIn</button>
      </div>
    </div>
  );
}

export default Navbar;
