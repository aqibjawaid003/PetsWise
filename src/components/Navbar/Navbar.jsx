import React from 'react'
import './Navbar.css';
import icon_search from "../images/icon_search.png"
import icon_prof from "../images/icon_prof.png"
import shopping_cart from "../images/shopping_cart.png"
import logo from "../images/logo.png"

function Navbar() {
  return (
    <>
      <div className='header'>
        <p>Free Shipping USA & Worldwide on All Orders</p>
      </div>
      <div className='nav'>
        <div className='icons'><img src={icon_search}/></div>
        <div>
            <ul className='lists'>
              <li>Home</li>
              <li>Shop</li>
              <li>Collections</li>
              <img src={logo} alt="" srcset="" height={60}/>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
        </div>
        <div className='icons'>
          <span><img src={icon_prof}/></span>
          <span><img src={shopping_cart}/></span>
        </div>
        <div></div>

      </div>
    </>
  )
}

export default Navbar