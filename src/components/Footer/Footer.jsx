import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id = 'footer' >
        <div className="footer-content">
            <div className="footer-content-left">
                <img src = {assets.logo} alt = ''/>
                <p>Lorem Ipsum is simply dummy of the priniting a web pages on the interface.
                Choose from a diverse menu Featuring a delectable array of dishes Our mission to satisfy your cravings and elavate to your dinnning experience,one delicious meal at a time
                </p>
                <div className="footer-content-icons">
                    <img src= {assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li> About Us </li>
                    <li> Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+91-9220934478</li>
                <li>contact@gmail.com</li> 
               </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Rights are Reserved</p>

    </div>
  )
}

export default Footer