import React from 'react'
import "./Contact.css"
import cards from '../images/cards.png'
import logo2 from '../images/logo2.png'
import mail from '../images/mail.png'

function Contact() {
  return (
<>
    <div className='contact_main'>
       <div className='contact'>
           <img src={logo2} height={70} alt="" />
           <div className='contact_A'>
            <h2>Coporate</h2>
            <p><a href="">Careers</a></p>
            <p><a href="">About us</a></p>
            <p><a href="">Contact us</a></p>
            <p><a href="">Faqs</a></p>
            <p><a href="">Vendors</a></p>
           </div>
           <div className='contact_A'>
            <h2>Information</h2>
            <p><a href="">Online Store</a></p>
            <p><a href="">Privacy Policy</a></p>
            <p><a href="">Refund Policy</a></p>
            <p><a href="">Shipping</a></p>
            <p><a href="">Policy</a></p>
           </div>
           <div className='contact_A'>
            <h2>Services</h2>
            <p><a href="">Grooming</a></p>
            <p><a href="">Positive Dog</a></p>
            <p><a href="">Training</a></p>
            <p><a href="">Veterinary</a></p>
            <p><a href="">Services</a></p>    
           </div>
           <div className='contact_B'>
            <h2>Newsletter</h2>
            <p>Be the first to know about our new collection launches, special offers & other updates.</p>
            <div>
                <input type="email" placeholder='Enter your email' name="" id="" /><span><img height={26} src={mail} alt="" srcset="" /></span>
                <hr/>
                <span className='icon'><i className="fa-brands fa-facebook"></i></span>
                <span className='icon'><i className="fa-brands fa-instagram"></i></span>
                <span className='icon'><i className="fa-brands fa-pinterest"></i></span>
            </div>
           </div>
       </div>
       <div className='cards'>
        <img src={cards} alt="" width={380} srcset="" />
       </div>
    </div>
    <div className='empty'>

    </div>
</>    
  )
}

export default Contact